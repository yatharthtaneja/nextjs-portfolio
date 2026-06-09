'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gauge, Search, Code2, User } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AudienceReframe() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      className="reframe-card"
      role="img"
      aria-label="Persona reframe: the audience shifted away from the OPC UA expert (faded, crossed out) toward the domain expert who needs OPC UA data (highlighted)."
    >
      <span className="reframe-label">Audience Reframe</span>
      <div className="reframe-row">
        {/* WRONG audience */}
        <motion.div
          className="reframe-figure wrong"
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ delay: 0.1, duration: 0.55, ease: EASE }}
        >
          <div className="reframe-figure-art">
            <User size={64} strokeWidth={1.2} />
            <span className="reframe-cross">
              <svg width="92" height="92" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="21" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <span className="reframe-figure-label">OPC UA Expert</span>
          <span className="reframe-figure-sublabel">(wrong audience)</span>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="reframe-arrow"
          aria-hidden="true"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ delay: 0.35, duration: 0.45, ease: EASE }}
        />

        {/* RIGHT audience */}
        <motion.div
          className="reframe-figure right"
          initial={{ opacity: 0, x: 10 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ delay: 0.55, duration: 0.55, ease: EASE }}
        >
          <div className="reframe-figure-art">
            <User size={64} strokeWidth={1.2} />
            <span className="reframe-dot-status" />
            <span className="reframe-dot-accent" />
          </div>
          <span className="reframe-figure-label">Domain Expert</span>
          <span className="reframe-figure-sublabel">(who needs OPC UA data)</span>
        </motion.div>
      </div>

      <motion.div
        className="discovery-want-strip reframe-want-strip"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ delay: 0.8, duration: 0.55, ease: EASE }}
      >
        <p className="discovery-want-label">What they actually want</p>
        <div className="discovery-want-items">
          <span className="discovery-want-item">
            <Gauge size={20} strokeWidth={1.6} />
            <span>Read a sensor</span>
          </span>
          <span className="discovery-want-item">
            <Search size={20} strokeWidth={1.6} />
            <span>Inspect a value</span>
          </span>
          <span className="discovery-want-item">
            <Code2 size={20} strokeWidth={1.6} />
            <span>Generate Script</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
