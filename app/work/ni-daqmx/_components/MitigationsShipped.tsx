'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { A, AD, AS } from './theme';

const MITIGATIONS = [
  { n: '01', title: 'Wrapped errors' },
  { n: '02', title: 'Tab-complete namespace' },
  { n: '03', title: 'Required = positional' },
  { n: '04', title: 'Example-first docs' },
];

export default function MitigationsShipped() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="ms-wrap" aria-label="Four research-driven mitigations shipped in MATLAB R2026a">
      <div className="ms-header">
        <span className="ms-eyebrow">All 4 mitigations carried forward</span>
        <span className="ms-pill">
          <Check size={12} strokeWidth={3} style={{ marginRight: 5 }} />
          R2026a · calldaqlib
        </span>
      </div>
      <div className="ms-grid">
        {MITIGATIONS.map((m, i) => (
          <motion.div
            key={m.n}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="ms-tile"
            style={{ background: i % 2 === 0 ? A : AD }}
          >
            <span className="ms-tile-n">{m.n}</span>
            <p className="ms-tile-title">{m.title}</p>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .ms-wrap { margin: 0 0 28px; }
        .ms-header {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 8px; margin-bottom: 12px;
        }
        .ms-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A};
        }
        .ms-pill {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600;
          background: ${AS}; color: ${AD};
          padding: 4px 11px; border-radius: 999px;
          display: inline-flex; align-items: center;
        }
        .ms-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 6px; border-radius: 12px; overflow: hidden;
        }
        @media (min-width: 640px) {
          .ms-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .ms-tile {
          padding: 16px; color: #ffffff;
        }
        .ms-tile-n {
          font-family: 'JetBrains Mono', monospace; font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        .ms-tile-title {
          margin: 4px 0 0; line-height: 1.3;
          font-family: Inter, sans-serif; font-size: 13.5px; font-weight: 700;
        }
      `}</style>
    </div>
  );
}
