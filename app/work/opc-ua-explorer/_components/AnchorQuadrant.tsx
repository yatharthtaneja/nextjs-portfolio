'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AnchorQuadrant() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="quadrant-card"
      role="img"
      aria-label="Two-by-two chart of four use cases plotted by frequency of use (horizontal) and OPC UA dependency (vertical). Bench monitoring, predictive maintenance, and energy dashboards sit in the 'has alternative' row. Digital-twin sync sits alone in the top-left 'no alternative' quadrant — highlighted as the anchor."
    >
      <div className="quadrant-chart">
        <motion.div
          className="quadrant-highlight"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
        />

        <div className="quadrant-y-divider" aria-hidden="true" />
        <div className="quadrant-x-divider" aria-hidden="true" />
        <div className="quadrant-y-axis" aria-hidden="true" />
        <div className="quadrant-x-axis" aria-hidden="true" />

        <div className="quadrant-y-label-area" aria-hidden="true">
          <span className="quadrant-y-label">OPC UA Dependency</span>
        </div>
        <span className="quadrant-y-tick top">No alt</span>
        <span className="quadrant-y-tick bottom">Has alt</span>
        <span className="quadrant-x-label">Frequency in use</span>
        <span className="quadrant-x-tick left">Rare</span>
        <span className="quadrant-x-tick right">Common</span>

        {[
          { label: 'Bench monitoring', left: '82%', top: '68%', delay: 0.3 },
          { label: 'Predictive maint.', left: '62%', top: '58%', delay: 0.42 },
          { label: 'Energy dashboards', left: '78%', top: '48%', delay: 0.54 },
        ].map((p) => (
          <motion.div
            key={p.label}
            className="quadrant-point"
            style={{ left: p.left, top: p.top }}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: p.delay, type: 'spring', stiffness: 240, damping: 18 }}
          >
            <span className="quadrant-point-label">{p.label}</span>
            <span className="quadrant-point-dot" />
          </motion.div>
        ))}

        <motion.div
          className="quadrant-anchor"
          style={{ left: '24%', top: '20%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 240, damping: 16 }}
        >
          <span className="quadrant-anchor-label">Digital-twin sync</span>
          <span className="quadrant-anchor-dot" />
        </motion.div>

        <motion.div
          className="quadrant-anchor-callout"
          style={{ left: '36%', top: '32%' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.45, ease: EASE }}
        >
          <span className="quadrant-anchor-callout-line" />
          <span className="quadrant-anchor-callout-text">The Anchor</span>
        </motion.div>
      </div>
    </div>
  );
}
