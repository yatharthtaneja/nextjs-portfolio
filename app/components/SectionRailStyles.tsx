// CSS for SectionRail. Shared by every case study; the only per-study value
// is the accent used on hover. Targets .cs-eyebrow[data-rail], which each
// case study's EyebrowLabel renders.
export default function SectionRailStyles({ accent }: { accent: string }) {
  return (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@125,800&display=swap');

        /* ── Section rail (SectionRail.tsx) ──
           Proximity snap: a scroll that ends near a section start settles on
           it; a scroll that ends mid-section is left alone. The margin parks
           the eyebrow just below the pinned bar. */
        html.cs-rail-ready { scroll-snap-type: y proximity; }
        .cs-eyebrow[data-rail] { scroll-snap-align: start; scroll-margin-top: calc(var(--rail-yb, 80px) + 14px); }

        /* Eyebrows slide in from the side as they arrive. Gated on
           .cs-rail-ready so nothing stays hidden if the script never runs. */
        .cs-rail-ready .cs-eyebrow[data-rail] > * {
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease-out;
        }
        .cs-rail-ready .cs-eyebrow[data-rail]:not([data-inview]) .cs-eyebrow-num,
        .cs-rail-ready .cs-eyebrow[data-rail]:not([data-inview]) .cs-eyebrow-label {
          opacity: 0; transform: translateX(-40px);
        }
        .cs-rail-ready .cs-eyebrow[data-rail] .cs-eyebrow-label { transition-delay: 60ms; }
        .cs-rail-ready .cs-eyebrow[data-rail] .cs-eyebrow-rule {
          transform-origin: left; transition-delay: 180ms;
        }
        .cs-rail-ready .cs-eyebrow[data-rail]:not([data-inview]) .cs-eyebrow-rule {
          transform: scaleX(0);
        }

        /* Sizes live on html so the eyebrows' scroll-margin can use them.
           --rail-yb is the bottom edge of the large heading slot: below the
           case-study menu, then two past titles, then the heading itself. */
        html.cs-rail-ready {
          --rail-small: clamp(10px, 0.8vw, 12px);
          --rail-queue: clamp(11px, 0.95vw, 14px);
          --rail-large: clamp(15px, 2vw, 30px);
          --rail-yb: calc(78px + 2 * 1.2 * var(--rail-small) + 1.08 * var(--rail-large));
        }
        .rail {
          position: fixed; inset: 0; z-index: 150;
          pointer-events: none;
          opacity: 0; transition: opacity 300ms ease-out;
          --p: 0; --s: 0;
        }
        .rail[data-visible] { opacity: 1; }
        /* Soft scrims behind the type only, so body text running under the
           corners doesn't fight it. Kept tight to the text block. */
        .rail-fade {
          position: absolute; top: 62px; right: 0;
          width: min(100%, 460px); height: calc(var(--rail-yb) - 62px + 18px);
          background: linear-gradient(to bottom,
            rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.92) 22%,
            rgba(255, 255, 255, 0.92) 70%, rgba(255, 255, 255, 0));
          -webkit-mask-image: linear-gradient(to left, #000 45%, transparent);
          mask-image: linear-gradient(to left, #000 45%, transparent);
        }
        .rail-fade--bottom {
          top: auto; bottom: 0; width: min(100%, 340px);
          height: calc(3 * 1.25 * var(--rail-queue) + 44px);
          background: linear-gradient(to top, rgba(255, 255, 255, 0.92) 55%, rgba(255, 255, 255, 0));
        }
        .rail-top, .rail-slot, .rail-queued, .rail-flyer {
          font-family: 'Archivo', 'Inter', sans-serif;
          font-stretch: 125%; font-variation-settings: 'wdth' 125;
          font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.01em; white-space: nowrap;
          font-kerning: none;
        }
        .rail-ch { display: inline-block; line-height: 1; }

        /* Bottom-anchored at the slot's bottom edge. As the next word lands
           (--s 0→1) the current heading shrinks into the past stack and the
           padding opens a heading-sized gap under it for the new one. */
        .rail-top {
          position: absolute; right: 28px; bottom: calc(100% - var(--rail-yb));
          display: flex; flex-direction: column; align-items: flex-end;
          padding-bottom: calc(var(--s) * 1.08 * var(--rail-large));
        }
        .rail-past {
          font-size: var(--rail-small); line-height: 1.2; color: #9ca3af;
        }
        .rail-past[data-oldest] { opacity: calc(1 - var(--s)); }
        .rail-current {
          font-size: calc(var(--rail-small) + (var(--rail-large) - var(--rail-small)) * (1 - var(--s)));
          line-height: calc(1.2 - 0.12 * (1 - var(--s)));
          color: color-mix(in srgb, #111827 calc((1 - var(--s)) * 100%), #9ca3af);
        }
        .rail-slot {
          position: absolute; right: 28px; bottom: calc(100% - var(--rail-yb));
          font-size: var(--rail-large); line-height: 1.08;
          visibility: hidden;
        }

        /* The queue slides up one place over the flight; its new tail fades
           in from below. */
        .rail-queue { position: absolute; right: 28px; bottom: 28px; }
        .rail-queue ol {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; align-items: flex-end;
          transform: translateY(calc((1 - var(--p)) * 1.25 * var(--rail-queue)));
        }
        .rail-queue li[data-tail] { opacity: var(--p); }
        .rail[data-flight] .rail-queue li[data-next] .rail-queued { visibility: hidden; }
        .rail-queued {
          pointer-events: auto; cursor: pointer;
          font-size: var(--rail-queue); line-height: 1.25;
          color: #9ca3af; background: none; border: none; padding: 0;
        }
        @media (hover: hover) and (pointer: fine) {
          .rail-queued:hover { color: ${accent}; }
        }

        .rail-flyer {
          position: absolute; left: 0; top: 0;
          font-size: var(--rail-large); line-height: 1;
          color: #9ca3af;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .rail-queue { display: none; }
          .rail-top, .rail-slot { right: 16px; }
        }
    `}</style>
  );
}
