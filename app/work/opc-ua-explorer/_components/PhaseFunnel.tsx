'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, animate } from 'framer-motion';
import { INK, INK3 } from './theme';
import { PaperDefs, PaperGrid, Wash } from './PaperTexture';

// What fifteen months of research actually produced, and how it narrowed.
// Same painted treatment as DecisionBar: these are counts of things people
// said, not measurements, and the chart should look like it was kept by hand.

const NS = 'funnel';
const W = 960;
const H = 268;

const BASE = 196;       // baseline the bars stand on
const MAX_H = 128;
const MAX_COUNT = 27;
const BAR_W = 66;
const FIRST_X = 108;
const STEP = 186;

type Bar = { count: number; label: string; phase: string; color: string };
const BARS: Bar[] = [
  { count: 18, label: 'Pain points',  phase: 'Discovery', color: '#C6D9CC' },
  { count: 14, label: 'Requirements', phase: 'Discovery', color: '#B4D0BE' },
  { count: 27, label: 'Findings',     phase: 'Usability', color: '#9CC4AE' },
  { count: 11, label: 'Feature reqs', phase: 'Synthesis', color: '#77AE90' },
  { count: 5,  label: 'Themes',       phase: 'Synthesis', color: '#4F9A78' },
];

function Counter({ value, inView }: { value: number; inView: boolean }) {
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduced) { setN(value); return; }
    const controls = animate(0, value, {
      duration: 1.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduced]);
  return <>{n}</>;
}

export default function PhaseFunnel() {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();
  const seen = useInView(ref, { once: true, amount: 0.2 });
  const inView = reduced ? true : seen;

  return (
    <figure className="paper-chart">
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className="paper-chart-svg"
        role="img"
        aria-labelledby="funnelTitle"
      >
        <title id="funnelTitle">
          Research output across the fifteen-month process: 18 pain points and 14 requirements
          from discovery, 27 findings from the usability study, 11 feature requests, distilled
          into 5 insight themes.
        </title>

        <PaperDefs ns={NS} seed={23} />
        <PaperGrid ns={NS} w={W} h={H} />

        <text x={40} y={34} className="pc-title">Fifteen months, narrowed</text>

        {/* baseline, drawn rather than ruled */}
        <g filter={`url(#${NS}-waver)`}>
          <line x1={48} y1={BASE} x2={W - 48} y2={BASE} stroke={INK3} strokeWidth="1.1" opacity="0.45" />
        </g>

        {BARS.map((b, i) => {
          const x = FIRST_X + i * STEP;
          const h = (b.count / MAX_COUNT) * MAX_H;
          return (
            <g key={b.label}>
              {i > 0 && (
                <line
                  x1={x - STEP + BAR_W / 2 + 10} y1={BASE - 6}
                  x2={x - BAR_W / 2 - 10} y2={BASE - 6}
                  stroke={INK3} strokeWidth="1" strokeDasharray="3 4"
                  strokeOpacity={inView ? 0.42 : 0}
                  style={{ transition: `stroke-opacity 0.4s ease ${0.25 + i * 0.16}s` }}
                />
              )}

              <Wash ns={NS}>
                <motion.rect
                  x={x - BAR_W / 2}
                  width={BAR_W}
                  fill={b.color}
                  initial={{ height: 0, y: BASE }}
                  animate={inView ? { height: h, y: BASE - h } : { height: 0, y: BASE }}
                  transition={{ delay: 0.12 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </Wash>

              <motion.text
                x={x} y={BASE - h - 14} textAnchor="middle" className="pc-figure"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
              >
                <Counter value={b.count} inView={inView} />
              </motion.text>

              <text x={x} y={BASE + 26} textAnchor="middle" className="pc-note" style={{ fill: INK }}>
                {b.label}
              </text>
              <text x={x} y={BASE + 46} textAnchor="middle" className="pc-axis">
                {b.phase.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
