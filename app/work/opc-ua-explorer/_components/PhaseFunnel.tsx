'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { A, AS, INK, INK2, INK3 } from './theme';

const EASE = [0.22, 1, 0.36, 1] as const;

type Bar = { count: number; label: string; phase: string };
const BARS: Bar[] = [
  { count: 18, label: 'Pain points',  phase: 'Discovery' },
  { count: 14, label: 'Requirements', phase: 'Discovery' },
  { count: 27, label: 'Findings',     phase: 'Usability' },
  { count: 11, label: 'Feature reqs', phase: 'Synthesis' },
  { count: 5,  label: 'Themes',       phase: 'Synthesis' },
];
const MAX_COUNT = 27;
const MAX_H = 88;

function Counter({ value, inView }: { value: number; inView: boolean }) {
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
  return <>{n}</>;
}

export default function PhaseFunnel() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 960 180"
      className="funnel-strip"
      role="img"
      aria-labelledby="funnelTitle"
    >
      <title id="funnelTitle">
        Research output across the 15-month process: 18 pain points and 14 requirements from discovery, 27 findings from the usability study, 11 feature requests, distilled into 5 insight themes.
      </title>
      {/* baseline */}
      <line x1="60" y1="120" x2="900" y2="120" stroke={INK3} strokeWidth="1" strokeOpacity="0.28" />
      {BARS.map((b, i) => {
        const x = 100 + i * 190;
        const h = (b.count / MAX_COUNT) * MAX_H;
        const isFinal = i === BARS.length - 1;
        return (
          <g key={b.label}>
            {i > 0 && (
              <line
                x1={x - 190 + 26} y1={120}
                x2={x - 30} y2={120}
                stroke={A} strokeWidth="1.2" strokeDasharray="3 3"
                strokeOpacity={inView ? 0.4 : 0}
                style={{ transition: `stroke-opacity 0.4s ease ${0.2 + i * 0.18}s` }}
              />
            )}
            <motion.rect
              x={x - 24}
              width={48}
              rx={4}
              fill={isFinal ? A : AS}
              stroke={A}
              strokeWidth={isFinal ? 1.5 : 1}
              strokeOpacity={isFinal ? 1 : 0.7}
              initial={{ height: 0, y: 120 }}
              animate={inView ? { height: h, y: 120 - h } : { height: 0, y: 120 }}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.7, ease: EASE }}
            />
            <motion.text
              x={x} y={120 - h - 8} textAnchor="middle"
              fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18"
              fill={isFinal ? A : INK}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            >
              <Counter value={b.count} inView={inView} />
            </motion.text>
            <text
              x={x} y={138} textAnchor="middle"
              fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12"
              fill={INK2}
            >{b.label}</text>
            <text
              x={x} y={156} textAnchor="middle"
              fontFamily="JetBrains Mono, monospace" fontSize="9"
              fill={INK3} letterSpacing="0.1em"
            >{b.phase.toUpperCase()}</text>
          </g>
        );
      })}
    </svg>
  );
}
