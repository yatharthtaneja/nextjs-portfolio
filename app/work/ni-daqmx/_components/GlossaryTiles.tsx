'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { Layers, FunctionSquare, Boxes, Tags, type LucideIcon } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { A, AD, INK, INK2, INK3, OUTLINE_SOFT, SURFACE_LOW } from './theme';

const VOCAB: { n: string; term: string; def: ReactNode; Icon: LucideIcon }[] = [
  {
    n: '1', term: 'Wrapper', Icon: Layers,
    def: 'A thin layer of MATLAB code that calls into a lower-level C library — so engineers stay in MATLAB instead of dropping into C.',
  },
  {
    n: '2', term: 'Function-based shape', Icon: FunctionSquare,
    def: <>One dispatcher function: <span className="g-mono">daqeval(&quot;DAQmxXxx&quot;, …)</span>. Each C call becomes one MATLAB call.</>,
  },
  {
    n: '3', term: 'Class-based shape', Icon: Boxes,
    def: <>Build an options object, then apply it: <span className="g-mono">niConfigOptions(…); setconfig(…)</span>. Each C call becomes two MATLAB calls.</>,
  },
  {
    n: '4', term: 'Name-value pair', Icon: Tags,
    def: <>MATLAB&rsquo;s argument syntax: <span className="g-mono">Name=value</span>. Great for optional args; awkward when required args dominate.</>,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function GlossaryTiles() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className="vocab-grid"
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {VOCAB.map((v) => (
        <motion.div key={v.n} variants={fadeUp} className="vocab-tile">
          <p className="vocab-tag">Vocab · {v.n}</p>
          <span className="vocab-icon">
            <v.Icon size={24} strokeWidth={1.75} />
          </span>
          <p className="vocab-term">{v.term}</p>
          <p className="vocab-def">{v.def}</p>
        </motion.div>
      ))}

      <style jsx global>{`
        .vocab-grid {
          display: grid; grid-template-columns: repeat(1, 1fr);
          gap: 16px; margin: 12px 0 36px;
        }
        @media (min-width: 540px) { .vocab-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .vocab-grid { grid-template-columns: repeat(4, 1fr); } }
        .vocab-tile {
          height: 100%;
          background: ${SURFACE_LOW};
          border: 1px solid ${OUTLINE_SOFT};
          border-radius: 12px; padding: 20px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        @media (hover: hover) and (pointer: fine) {
          .vocab-tile:hover {
            transform: translateY(-4px);
            border-color: rgba(33, 81, 218, 0.4);
            box-shadow: 0 6px 16px -8px rgba(33, 81, 218, 0.25);
          }
          .vocab-tile:hover .vocab-icon { transform: scale(1.1); }
        }
        .vocab-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A}; margin: 0;
        }
        .vocab-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(220, 225, 255, 0.6);
          color: ${A};
          margin: 12px 0;
          transition: transform 0.25s ease;
        }
        .vocab-term {
          margin: 0;
          font-family: Inter, sans-serif; font-size: 15.5px; font-weight: 700;
          color: ${INK};
        }
        .vocab-def {
          margin: 8px 0 0;
          font-family: Inter, sans-serif; font-size: 13.5px;
          color: ${INK2}; line-height: 1.6;
        }
        :global(.vocab-tile .g-mono) {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          background: #eaedff; color: ${AD};
          padding: 1px 5px; border-radius: 4px;
        }
      `}</style>
    </motion.div>
  );
}
