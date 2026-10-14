'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import SectionRailStyles from './SectionRailStyles';

// Section rail, after getartcraft.com/apps.
//
// Top right: the current section's name, large, with the two before it
// stacked small above. Bottom right: the next few sections, queued. As you
// scroll toward a section, its name comes apart letter by letter, runs out
// to the right edge, climbs it turned on its side, and turns back into the
// large heading. Everything is scrubbed by scroll, so stopping halfway leaves
// the letters halfway, and scrolling up runs it backwards.
//
// The letters fly between two invisible copies of the word, one in the queue
// and one in the heading slot, so each flight starts and ends exactly where
// the static text sits and the hand-off at either end is invisible.
//
// Sections are read from the DOM ([data-rail] on EyebrowLabel), so the
// eyebrows stay the single source of truth for what a section is called.

type Section = { id: string; label: string };

const PAST_SHOWN = 2;
const QUEUE_SHOWN = 3;
const GREY = [156, 163, 175];
const INK = [17, 24, 39];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (a: number, b: number, v: number) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Pt = { x: number; y: number };
const bez = (p0: Pt, p1: Pt, p2: Pt, p3: Pt, u: number): Pt => {
  const m = 1 - u;
  const a = m * m * m, b = 3 * m * m * u, c = 3 * m * u * u, d = u * u * u;
  return { x: a * p0.x + b * p1.x + c * p2.x + d * p3.x, y: a * p0.y + b * p1.y + c * p2.y + d * p3.y };
};

const chars = (text: string) => Array.from(text).map((ch) => (ch === ' ' ? ' ' : ch));

function Letters({ text }: { text: string }) {
  return (
    <>
      {chars(text).map((ch, i) => (
        <span key={i} className="rail-ch">{ch}</span>
      ))}
    </>
  );
}

export default function SectionRail({ accent }: { accent: string }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState(-1);
  const [flight, setFlight] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const queueRef = useRef<HTMLOListElement>(null);
  const flyersRef = useRef<HTMLDivElement>(null);
  const eyebrows = useRef<HTMLElement[]>([]);
  const offsets = useRef<number[]>([]);
  const activeRef = useRef(-1);
  const flightRef = useRef(false);
  const sy = useRef(0); // smoothed scroll position everything is drawn from
  const loop = useRef(0);

  const draw = useCallback(() => {
    const root = rootRef.current;
    const els = eyebrows.current;
    if (!root || !els.length) return;
    const H = window.innerHeight;
    const W = document.documentElement.clientWidth;
    const yb = slotRef.current?.getBoundingClientRect().bottom ?? 120;
    const line = yb + 20;
    const tops = offsets.current.map((o) => o - sy.current);

    let now = -1;
    for (let i = 0; i < tops.length; i++) {
      if (tops[i] <= line) now = i;
      else break;
    }
    if (now !== activeRef.current) {
      activeRef.current = now;
      setActive(now); // the layout effect below redraws before paint
      return;
    }

    const upcoming = now + 1 < tops.length ? tops[now + 1] : Infinity;
    const start = H * 0.95;
    const p = flightRef.current && upcoming < Infinity ? clamp01((start - upcoming) / (start - line)) : 0;
    root.style.setProperty('--p', String(p));
    root.style.setProperty('--s', String(flightRef.current ? smooth(0.55, 0.85, p) : 0));
    root.toggleAttribute('data-visible', now >= 0 || tops[0] < H);

    const flyers = flyersRef.current;
    if (!flyers) return;
    const from = Array.from(queueRef.current?.querySelectorAll<HTMLElement>('[data-next] .rail-ch') ?? []);
    const to = Array.from(slotRef.current?.querySelectorAll<HTMLElement>('.rail-ch') ?? []);
    const spans = Array.from(flyers.children) as HTMLElement[];
    if (!spans.length || from.length !== spans.length || to.length !== spans.length) return;

    const center = (r: DOMRect) => ({ x: r.x + r.width / 2, y: r.y + r.height / 2 });
    const q = from.map((el) => center(el.getBoundingClientRect()));
    const f = to.map((el) => center(el.getBoundingClientRect()));
    const large = to[0].getBoundingClientRect().height || 1;
    const small = from[0].getBoundingClientRect().height || 1;
    const mid = small * 1.4;
    const n = spans.length;
    const head = q[n - 1];
    const edge = W - Math.max(20, mid * 0.75);

    // One shared track, so the word moves as a train: out of the queue to
    // the right edge, then straight up it to just under the heading's row.
    const top = { x: edge, y: f[n - 1].y + large * 0.9 };
    const P = [
      head,
      { x: edge, y: head.y },
      { x: edge, y: head.y - (head.y - top.y) * 0.3 },
      top,
    ] as const;
    const STEPS = 64;
    const pts: Pt[] = [];
    const lens = [0];
    for (let k = 0; k <= STEPS; k++) {
      pts.push(bez(...P, k / STEPS));
      if (k) lens.push(lens[k - 1] + Math.hypot(pts[k].x - pts[k - 1].x, pts[k].y - pts[k - 1].y));
    }
    const track = lens[STEPS] || 1;
    const at = (d: number) => {
      let k = 1;
      while (k < STEPS && lens[k] < d) k++;
      const a = pts[k - 1], b = pts[k];
      const t = clamp01((d - lens[k - 1]) / ((lens[k] - lens[k - 1]) || 1));
      return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), angle: Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI };
    };

    // Each letter runs behind the last one by its gap in the queue, opened
    // up to flight size.
    const lag = q.map((pt) => (head.x - pt.x) * (mid / small));

    // Off the top of the track each letter arcs up and over the row and
    // drops into its slot. Going over, not through, is what stops the tail
    // of the word cutting across the letters that have already landed.
    const hop = f.map((pt) => Math.hypot(edge - pt.x, top.y - pt.y) + large * 2.5);
    const total = Math.max(...lag.map((l, i) => track + l + hop[i]));
    const travel = p * total;

    // The current heading gets out of the way just before the first letter
    // comes over the top.
    const firstOver = track / total;
    root.style.setProperty('--s', String(smooth(firstOver - 0.12, firstOver + 0.04, p)));

    for (let i = 0; i < n; i++) {
      const d = travel - lag[i];
      let x, y, rot = 0, size = small, ink = 0;
      if (d <= 0) {
        // Still in the queue line, sliding toward the corner.
        x = q[i].x + travel * (small / mid);
        y = q[i].y;
      } else if (d <= track) {
        const pt = at(d);
        x = pt.x;
        y = pt.y;
        rot = Math.min(0, Math.max(-90, pt.angle));
        size = lerp(small, mid, smooth(0, 140, d));
      } else {
        const a = smooth(0, 1, (d - track) / hop[i]);
        const c = { x: lerp(edge, f[i].x, 0.35), y: f[i].y - large * 2.6 };
        const m = 1 - a;
        x = m * m * top.x + 2 * m * a * c.x + a * a * f[i].x;
        y = m * m * top.y + 2 * m * a * c.y + a * a * f[i].y;
        rot = -90 * (1 - smooth(0, 0.6, a));
        size = lerp(mid, large, smooth(0, 0.7, a));
        ink = smooth(0.2, 1, a);
      }
      const span = spans[i];
      span.style.transform =
        `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg) scale(${size / large})`;
      span.style.color = `rgb(${GREY.map((g, k) => Math.round(lerp(g, INK[k], ink))).join(',')})`;
    }
  }, []);

  // Collect sections, cache their page offsets, wire up scroll.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-rail]'));
    eyebrows.current = els;
    setSections(els.map((el) => ({ id: el.id, label: el.dataset.rail ?? '' })));

    const html = document.documentElement;
    html.classList.add('cs-rail-ready');

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 769px)');
    const updateFlight = () => {
      flightRef.current = wide.matches && !motion.matches;
      setFlight(flightRef.current);
    };
    updateFlight();
    motion.addEventListener('change', updateFlight);
    wide.addEventListener('change', updateFlight);

    // offsetTop rather than getBoundingClientRect: the eyebrows sit inside
    // Reveals that start 28px low, and transforms must not move the targets.
    const cacheOffsets = () => {
      offsets.current = els.map((el) => {
        let y = 0;
        for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
        return y;
      });
    };
    cacheOffsets();
    sy.current = window.scrollY;

    // Accordions, images and late fonts all move the sections.
    const ro = new ResizeObserver(() => {
      cacheOffsets();
      draw();
    });
    ro.observe(document.body);

    // Eyebrows slide in from the side as they arrive, once.
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-inview', '');
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -12% 0px' });
    els.forEach((el) => io.observe(el));

    // Ease the drawn scroll position toward the real one, so the letters
    // glide rather than stepping with each wheel notch.
    const tick = () => {
      const target = window.scrollY;
      const diff = target - sy.current;
      sy.current = !flightRef.current || Math.abs(diff) < 0.5 ? target : sy.current + diff * 0.16;
      draw();
      loop.current = sy.current === target ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => {
      if (!loop.current) loop.current = requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(loop.current);
      ro.disconnect();
      io.disconnect();
      motion.removeEventListener('change', updateFlight);
      wide.removeEventListener('change', updateFlight);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      html.classList.remove('cs-rail-ready');
    };
  }, [draw]);

  // A new section just landed: the next word's letters are new elements, so
  // place them before the browser paints the frame.
  useLayoutEffect(() => {
    draw();
  }, [active, sections, flight, draw]);

  const current = active >= 0 ? sections[active] : undefined;
  const past = sections.slice(Math.max(0, active - PAST_SHOWN), Math.max(0, active));
  const next = sections[active + 1];
  // One extra on the end: it fades in as the queue moves up a place.
  const queue = sections.slice(active + 1, active + 2 + QUEUE_SHOWN);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ block: 'start' });
  };

  return (
    <div className="rail" ref={rootRef} data-flight={flight || undefined}>
      <SectionRailStyles accent={accent} />
      <div className="rail-fade" />
      <div className="rail-fade rail-fade--bottom" />

      <div className="rail-top" aria-hidden="true">
        {past.map((s, i) => (
          <div
            key={s.id}
            className="rail-past"
            data-oldest={(past.length === PAST_SHOWN && i === 0) || undefined}
          >
            {s.label}
          </div>
        ))}
        {current && (
          <div key={current.id} className="rail-current"><Letters text={current.label} /></div>
        )}
      </div>

      {/* Where the next word will land. Never seen; measured. */}
      <div className="rail-slot" ref={slotRef} aria-hidden="true">
        {next ? <Letters text={next.label} /> : ' '}
      </div>

      <nav className="rail-queue" aria-label="Upcoming sections">
        <ol ref={queueRef}>
          {queue.map((s, i) => (
            <li key={s.id} data-next={i === 0 || undefined} data-tail={i === QUEUE_SHOWN || undefined}>
              <button type="button" className="rail-queued" onClick={() => jump(s.id)}>
                <Letters text={s.label} />
              </button>
            </li>
          ))}
        </ol>
      </nav>

      {flight && next && (
        <div className="rail-flyers" ref={flyersRef} aria-hidden="true" key={next.id}>
          {chars(next.label).map((ch, i) => (
            <span key={i} className="rail-flyer">{ch}</span>
          ))}
        </div>
      )}
    </div>
  );
}
