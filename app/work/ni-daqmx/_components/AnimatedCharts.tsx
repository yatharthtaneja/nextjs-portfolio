'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { A, INK, INK3, OUTLINE_SOFT, SURFACE_LOW, CARD } from './theme';

const EASE = [0.22, 1, 0.36, 1] as const;

type Bar = { label: string; value: number; display: string; winner?: boolean };

function BarChart({
  title, bars, max, ticks,
}: {
  title: string;
  bars: Bar[];
  max: number;
  ticks: number[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="bc-card">
      <p className="bc-title">{title}</p>
      <div className="bc-rows">
        {bars.map((b, i) => (
          <div key={b.label} className="bc-row">
            <span className="bc-label">{b.label}</span>
            <div className="bc-bar-wrap">
              <div className="bc-bar-track">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.15 + i * 0.15, duration: 0.9, ease: EASE }}
                  style={{ width: `${(b.value / max) * 100}%` }}
                  className={`bc-bar ${b.winner ? 'bc-bar-winner' : 'bc-bar-loser'}`}
                />
              </div>
              <span className={`bc-num ${b.winner ? 'bc-num-winner' : 'bc-num-loser'}`}>
                {b.display}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="bc-axis">
        {ticks.map((t) => <span key={t}>{t}</span>)}
      </div>

      <style jsx global>{`
        .bc-card {
          border-radius: 16px; border: 1px solid ${OUTLINE_SOFT};
          background: ${CARD}; padding: 24px 26px;
        }
        .bc-title {
          font-family: Inter, sans-serif; font-size: 16px; font-weight: 700;
          color: ${INK}; margin: 0;
        }
        .bc-rows {
          margin-top: 22px; display: flex; flex-direction: column; gap: 18px;
        }
        .bc-row {
          display: grid; grid-template-columns: 120px 1fr;
          align-items: center; gap: 12px;
        }
        @media (max-width: 480px) {
          .bc-row { grid-template-columns: 100px 1fr; }
        }
        .bc-label {
          font-family: Inter, sans-serif; font-size: 13.5px; color: ${INK3};
        }
        .bc-bar-wrap {
          display: flex; align-items: center; gap: 12px;
        }
        .bc-bar-track {
          height: 28px; flex: 1; overflow: hidden; border-radius: 6px;
          background: ${SURFACE_LOW};
        }
        .bc-bar {
          height: 100%; transform-origin: left center; border-radius: 6px;
        }
        .bc-bar-winner { background: ${A}; }
        .bc-bar-loser  { background: rgba(67,70,85,0.4); }
        .bc-num {
          flex-shrink: 0; width: 40px; text-align: right;
          font-family: 'JetBrains Mono', monospace; font-size: 13.5px; font-weight: 700;
        }
        .bc-num-winner { color: ${A}; }
        .bc-num-loser  { color: ${INK3}; }
        .bc-axis {
          margin-left: 132px; margin-top: 10px;
          display: flex; justify-content: space-between;
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: ${INK3};
        }
        @media (max-width: 480px) {
          .bc-axis { margin-left: 112px; }
        }
      `}</style>
    </div>
  );
}

export function EaseChart() {
  return (
    <BarChart
      title="Ease-of-use rating"
      max={5}
      ticks={[0, 1, 2, 3, 4, 5]}
      bars={[
        { label: 'Function-based', value: 3.27, display: '3.27', winner: true },
        { label: 'Class-based',    value: 2.55, display: '2.55' },
      ]}
    />
  );
}

export function PainPointsChart() {
  return (
    <BarChart
      title="Distinct pain points coded"
      max={20}
      ticks={[0, 5, 10, 15, 20]}
      bars={[
        { label: 'Function-based', value: 9,  display: '9',  winner: true },
        { label: 'Class-based',    value: 15, display: '15' },
      ]}
    />
  );
}
