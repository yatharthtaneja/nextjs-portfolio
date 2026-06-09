'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { Network, Circle, Radio, type LucideIcon } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { A, AD, INK, INK2, INK3, OUTLINE_SOFT, SURFACE_LOW } from './theme';

const VOCAB: { n: string; term: string; def: ReactNode; Icon: LucideIcon }[] = [
  {
    n: '1', term: 'Address space', Icon: Network,
    def: 'Table of contents of a factory’s data — chapters and sub‑chapters.',
  },
  {
    n: '2', term: 'Node', Icon: Circle,
    def: 'One entry — a single sensor value or valve position.',
  },
  {
    n: '3', term: 'Subscription', Icon: Radio,
    def: 'Ask once; updates arrive whenever the value changes.',
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
      className="opc-vocab-grid"
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {VOCAB.map((v) => (
        <motion.div key={v.n} variants={fadeUp} className="opc-vocab-tile">
          <p className="opc-vocab-tag">Vocab · {v.n}</p>
          <span className="opc-vocab-icon">
            <v.Icon size={24} strokeWidth={1.75} />
          </span>
          <p className="opc-vocab-term">{v.term}</p>
          <p className="opc-vocab-def">{v.def}</p>
        </motion.div>
      ))}

      <style jsx global>{`
        .opc-vocab-grid {
          display: grid; grid-template-columns: repeat(1, 1fr);
          gap: 16px; margin: 12px 0 36px;
        }
        @media (min-width: 540px) { .opc-vocab-grid { grid-template-columns: repeat(3, 1fr); } }
        .opc-vocab-tile {
          height: 100%;
          background: ${SURFACE_LOW};
          border: 1px solid ${OUTLINE_SOFT};
          border-radius: 12px; padding: 20px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        @media (hover: hover) and (pointer: fine) {
          .opc-vocab-tile:hover {
            transform: translateY(-4px);
            border-color: rgba(30, 107, 74, 0.4);
            box-shadow: 0 6px 16px -8px rgba(30, 107, 74, 0.25);
          }
          .opc-vocab-tile:hover .opc-vocab-icon { transform: scale(1.1); }
        }
        .opc-vocab-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A}; margin: 0;
        }
        .opc-vocab-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(184, 223, 208, 0.5);
          color: ${A};
          margin: 12px 0;
          transition: transform 0.25s ease;
        }
        .opc-vocab-term {
          margin: 0;
          font-family: Inter, sans-serif; font-size: 15.5px; font-weight: 700;
          color: ${INK};
        }
        .opc-vocab-def {
          margin: 8px 0 0;
          font-family: Inter, sans-serif; font-size: 13.5px;
          color: ${INK2}; line-height: 1.6;
        }
      `}</style>
    </motion.div>
  );
}
