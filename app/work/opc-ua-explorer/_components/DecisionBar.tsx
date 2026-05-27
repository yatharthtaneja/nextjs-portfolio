'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Pause } from '@/app/components/icons';
import { A, INK2 } from './theme';

// Stacked horizontal bar showing what % of the 19-item pipeline shipped,
// partially shipped, or was deferred. Segments scaleX from 0 on scroll-in.
export default function DecisionBar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const segments: Array<{
    count: number;
    label: string;
    color: string;
    legend: React.ReactNode;
  }> = [
    { count: 6,  label: 'SHIPPED',  color: A,         legend: <><Check style={{ marginRight: 6 }} />Shipped in v1</> },
    { count: 2,  label: 'PARTIAL',  color: '#7BA88A', legend: <><span style={{ marginRight: 6, fontWeight: 700 }}>~</span>Partially shipped</> },
    { count: 11, label: 'DEFERRED', color: '#C9C4B8', legend: <><Pause style={{ marginRight: 6 }} />Deferred — see table</> },
  ];
  const total = segments.reduce((s, x) => s + x.count, 0);

  return (
    <div className="decision-bar-wrap" ref={ref} aria-label="Research-driven decisions across the 19-item pipeline">
      <div className="decision-bar" role="img" aria-label={`6 shipped, 2 partial, 11 deferred — ${total} total decisions`}>
        {segments.map((s, i) => (
          <div
            key={s.label}
            className={`decision-segment${visible ? ' in-view' : ''}`}
            style={{
              flexBasis: `${(s.count / total) * 100}%`,
              background: s.color,
              transitionDelay: `${i * 0.1}s`,
              color: s.color === '#C9C4B8' ? INK2 : 'white',
            }}
          >
            {s.count} {s.label}
          </div>
        ))}
      </div>
      <div className="decision-legend">
        {segments.map((s) => (
          <span key={s.label}>
            <span className="decision-legend-dot" style={{ background: s.color }} />
            {s.legend}
          </span>
        ))}
      </div>
    </div>
  );
}
