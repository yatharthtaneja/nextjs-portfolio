'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { A, AD, AS, INK, INK3, LINE, SURFACE_MID, OUTLINE_SOFT } from './theme';

const EASE = [0.22, 1, 0.36, 1] as const;

type Phase = {
  n: string;
  title: string;
  value: number;
  sub: string;
  heightPx: number;
  bg: string;
  text: string;
};

const PHASES: Phase[] = [
  { n: '1', title: 'Build',      value: 2,  sub: 'prototype APIs',           heightPx: 110, bg: AS,        text: AD },
  { n: '2', title: 'Study',      value: 11, sub: 'participants × 5 industries', heightPx: 156, bg: SURFACE_MID, text: AD },
  { n: '3', title: 'Synthesize', value: 4,  sub: 'high-priority themes',     heightPx: 128, bg: A,         text: '#ffffff' },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{n}</span>;
}

export default function PhaseFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="pf-wrap" role="img" aria-label="Three sequential phases: build 2 prototypes, study 11 participants, synthesize 4 themes.">
      <div className="pf-grid">
        {PHASES.map((p, i) => (
          <div key={p.n} className="pf-col">
            <p className="pf-label">Phase {p.n}</p>
            <p className="pf-count">
              <Counter value={p.value} />
            </p>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 0.2 + i * 0.18, duration: 0.7, ease: EASE }}
              className="pf-bar"
              style={{ height: p.heightPx, background: p.bg }}
            >
              <span className="pf-bar-title" style={{ color: p.text }}>{p.title}</span>
            </motion.div>
            <div className="pf-rule" />
            <p className="pf-sub">{p.sub}</p>
          </div>
        ))}
      </div>
      <p className="pf-foot">~6 WEEKS · SEQUENTIAL</p>

      <style jsx global>{`
        .pf-wrap { width: 100%; max-width: 920px; margin: 8px auto 36px; }
        .pf-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 12px; align-items: end;
        }
        @media (min-width: 640px) { .pf-grid { gap: 32px; } }
        .pf-col {
          display: flex; flex-direction: column; align-items: center;
        }
        .pf-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: ${A};
          margin: 0 0 6px;
        }
        .pf-count {
          font-family: Inter, sans-serif; font-weight: 800;
          font-size: clamp(28px, 4vw, 38px); color: ${INK};
          margin: 0 0 12px; line-height: 1;
        }
        .pf-bar {
          width: 100%; display: flex; align-items: center; justify-content: center;
          border-top-left-radius: 8px; border-top-right-radius: 8px;
          transform-origin: bottom center;
        }
        .pf-bar-title {
          font-family: Inter, sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: -0.005em;
        }
        .pf-rule { width: 100%; height: 1px; background: ${LINE}; }
        .pf-sub {
          margin: 12px 0 0; text-align: center;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          line-height: 1.5; color: ${INK3};
        }
        .pf-foot {
          margin: 22px 0 0; text-align: center;
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          font-weight: 600; letter-spacing: 0.14em; color: ${INK3};
        }
      `}</style>
    </div>
  );
}
