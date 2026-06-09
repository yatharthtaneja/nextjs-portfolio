'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { A, INK, INK3, LINE, CARD } from './theme';

const STEPS = [
  { title: 'Scope',            note: 'API-design partnership' },
  { title: 'Build prototypes', note: 'function vs class' },
  { title: 'Run study',        note: '11 engineers, 5 industries' },
  { title: 'Synthesize',       note: '24 → 4 mitigations' },
  { title: 'Ship',             note: 'MATLAB R2026a' },
];

export default function RoleTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="rt-wrap">
      <p className="rt-head">~6 WEEKS</p>
      <div className="rt-rail-wrap">
        <div className="rt-rail-base" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="rt-rail-fill"
        />
        <div className="rt-grid">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rt-col">
              <motion.span
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3 + i * 0.18, type: 'spring', stiffness: 260, damping: 16 }}
                className="rt-node"
              >
                <span className="rt-node-dot" />
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{ delay: 0.4 + i * 0.18 }}
                className="rt-title"
              >
                {s.title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + i * 0.18 }}
                className="rt-note"
              >
                {s.note}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .rt-wrap { width: 100%; max-width: 720px; margin: 24px auto 32px; }
        .rt-head {
          margin: 0 0 16px; text-align: center;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          letter-spacing: 0.18em; color: ${INK3};
        }
        .rt-rail-wrap { position: relative; }
        .rt-rail-base {
          position: absolute; left: 0; right: 0; top: 9px; height: 1px;
          background: ${LINE};
        }
        .rt-rail-fill {
          position: absolute; left: 0; right: 0; top: 9px; height: 1px;
          background: ${A}; transform-origin: left center;
        }
        .rt-grid {
          position: relative;
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 32px 12px;
        }
        @media (min-width: 640px) {
          .rt-grid { grid-template-columns: repeat(5, 1fr); gap: 0; }
        }
        .rt-col {
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }
        .rt-node {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; justify-content: center;
          width: 20px; height: 20px; border-radius: 50%;
          border: 2px solid ${A}; background: ${CARD};
          flex-shrink: 0;
        }
        .rt-node-dot {
          width: 8px; height: 8px; border-radius: 50%; background: ${A};
          display: block;
        }
        .rt-title {
          font-family: Inter, sans-serif; font-size: 14px; font-weight: 700;
          color: ${INK}; margin: 12px 0 0;
        }
        .rt-note {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          line-height: 1.45; color: ${INK3};
          margin: 4px 0 0; padding: 0 4px;
        }
      `}</style>
    </div>
  );
}
