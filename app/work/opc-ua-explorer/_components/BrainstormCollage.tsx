'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/* eslint-disable @next/next/no-img-element */
export default function BrainstormCollage() {
  return (
    <div
      className="brainstorm-collage"
      role="group"
      aria-label="Synthesis artifacts from the 15-month process: an affinity-mapping board, a task-flow map, and a competitor-analysis / benchmarking board."
    >
      <motion.figure
        className="bs-card bs-main"
        initial={{ opacity: 0, y: 30, rotate: 1.6 * 1.6 }}
        whileInView={{ opacity: 1, y: 0, rotate: 1.6 }}
        whileHover={{ y: -6, rotate: 0, zIndex: 30 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <img
          src="/images/opcua/OPC%20UA%20Explorer%20Brainstorming-2.jpg"
          alt="Affinity-mapping board: 27 usability findings clustered into 5 insight themes, with surrounding context notes."
          loading="lazy"
        />
        <figcaption>Affinity board · 27 findings → 5 themes</figcaption>
      </motion.figure>

      <motion.figure
        className="bs-card bs-tl"
        initial={{ opacity: 0, y: 30, rotate: -3 * 1.6 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        whileHover={{ y: -6, rotate: 0, zIndex: 30 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
      >
        <img
          src="/images/opcua/OPC%20UA%20Explorer%20Brainstorming.jpg"
          alt="Task-flow map covering eight engineer tasks across the OPC UA workflow, from server setup to script export."
          loading="lazy"
        />
        <figcaption>Task-flow map · 8 tasks</figcaption>
      </motion.figure>

      <motion.figure
        className="bs-card bs-br"
        initial={{ opacity: 0, y: 30, rotate: -1.4 * 1.6 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.4 }}
        whileHover={{ y: -6, rotate: 0, zIndex: 30 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
      >
        <img
          src="/images/opcua/OPC%20UA%20Explorer%20Brainstorming-3.jpg"
          alt="Competitor analysis and benchmarking: annotated screens from existing OPC UA clients covering running methods, extending signal panels, alarms, and external logging."
          loading="lazy"
        />
        <figcaption>Competitor analysis · benchmarking</figcaption>
      </motion.figure>
    </div>
  );
}
