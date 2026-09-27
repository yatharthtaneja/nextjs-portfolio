'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { INK, INK3 } from './theme';
import { PaperDefs, PaperGrid, Wash } from './PaperTexture';

// What happened to the 19 things research put on the table: shipped, partly
// shipped, or deferred with a reason. Painted on graph paper rather than drawn
// as flat bars, because the deferrals are judgement calls rather than
// measurements and the chart should not pretend otherwise.

const NS = 'dbar';
const W = 900;
const H = 182;

const BAR_X = 24;
const BAR_W = W - BAR_X * 2;
const BAR_Y = 46;
const BAR_H = 58;

// Wash tones rather than the flat palette: a watercolour reads as a lighter,
// less even version of the pigment it is mixed from.
const SEGMENTS = [
  { count: 6,  label: 'shipped in v1',            color: '#4F9A78' },
  { count: 2,  label: 'partly shipped',           color: '#8FBFA2' },
  { count: 11, label: 'deferred, with a reason',  color: '#CFCABE' },
];
const TOTAL = SEGMENTS.reduce((s, x) => s + x.count, 0);

export default function DecisionBar() {
  const ref = useRef<SVGSVGElement | null>(null);
  const reduced = useReducedMotion();
  const seen = useInView(ref, { once: true, amount: 0.35 });
  // With reduced motion the chart is simply drawn, not grown.
  const inView = reduced ? true : seen;

  let cursor = BAR_X;
  const laid = SEGMENTS.map((s) => {
    const w = (s.count / TOTAL) * BAR_W;
    const x = cursor;
    cursor += w;
    return { ...s, x, w };
  });

  return (
    <figure className="paper-chart">
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className="paper-chart-svg"
        role="img"
        aria-label={`Of ${TOTAL} decisions, 6 shipped in v1, 2 shipped partly, and 11 were deferred with a reason.`}
      >
        <PaperDefs ns={NS} seed={9} />
        <PaperGrid ns={NS} w={W} h={H} />

        <text x={BAR_X} y={28} className="pc-title">
          What research put on the table, and what happened to it
        </text>

        {laid.map((s, i) => (
          <g key={s.label}>
            <Wash ns={NS}>
              <motion.rect
                x={s.x}
                y={BAR_Y}
                height={BAR_H}
                fill={s.color}
                initial={{ width: 0 }}
                animate={inView ? { width: s.w } : { width: 0 }}
                transition={{ duration: 0.85, delay: 0.12 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              />
            </Wash>

            <motion.g
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.14 }}
            >
              {/* Tick back up to the segment this caption belongs to, since
                  the captions stagger to clear each other. */}
              <line
                x1={s.x + 1} y1={BAR_Y + BAR_H}
                x2={s.x + 1} y2={BAR_Y + BAR_H + (i % 2 ? 30 : 8)}
                stroke={INK3} strokeWidth="1" opacity="0.4"
              />
              <text x={s.x + 8} y={BAR_Y + BAR_H + (i % 2 ? 56 : 34)} className="pc-figure">{s.count}</text>
              <text x={s.x + 8} y={BAR_Y + BAR_H + (i % 2 ? 76 : 54)} className="pc-note">{s.label}</text>
            </motion.g>
          </g>
        ))}

        <text x={BAR_X + BAR_W} y={BAR_Y - 8} textAnchor="end" className="pc-note">
          {TOTAL} decisions
        </text>
      </svg>

      <figcaption className="pc-caption">
        Every one of the eleven traces back to a specific finding from the study or the design
        review. None of them traces back to running out of time.
      </figcaption>
    </figure>
  );
}
