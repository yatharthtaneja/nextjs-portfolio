'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Joystick, Gamepad2, LifeBuoy, Cpu, Laptop } from 'lucide-react';
import { A, AD, INK, INK3, OUTLINE_SOFT, SURFACE_LOW, CARD } from './theme';

const WHEELS = [
  { label: 'Tiller',     sub: 'one stick · simple',   Icon: Joystick },
  { label: 'Yoke',       sub: 'two handles · complex', Icon: Gamepad2 },
  { label: 'Round wheel', sub: 'familiar',             Icon: LifeBuoy },
];

export function SteeringWheelStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref} className="sw-strip">
      {WHEELS.map((w, i) => (
        <motion.div
          key={w.label}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.15 + i * 0.12 }}
          className="sw-tile"
        >
          <span className="sw-circle">
            <w.Icon size={22} strokeWidth={1.75} />
          </span>
          <p className="sw-label">{w.label}</p>
          <p className="sw-sub">{w.sub}</p>
        </motion.div>
      ))}

      <style jsx global>{`
        .sw-strip {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 12px; padding: 12px 0;
        }
        .sw-tile {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          padding: 16px 12px;
          background: ${SURFACE_LOW};
          border: 1px solid ${OUTLINE_SOFT};
          border-radius: 12px;
          transition: border-color 0.2s ease;
        }
        @media (hover: hover) and (pointer: fine) {
          .sw-tile:hover { border-color: rgba(33, 81, 218, 0.4); }
          .sw-tile:hover .sw-circle { transform: scale(1.1); }
        }
        .sw-circle {
          display: inline-flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(220, 225, 255, 0.6); color: ${A};
          transition: transform 0.25s ease;
        }
        .sw-label {
          margin: 8px 0 0;
          font-family: Inter, sans-serif; font-size: 14px; font-weight: 700; color: ${INK};
        }
        .sw-sub {
          margin: 2px 0 0;
          font-family: 'JetBrains Mono', monospace; font-size: 10px; color: ${INK3};
        }
      `}</style>
    </div>
  );
}

function FlowConnector({ label }: { label: string }) {
  return (
    <div className="fc-wrap">
      <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="fc-svg">
        <line
          x1="0" y1="6" x2="100" y2="6"
          className="fc-line"
          stroke="rgba(33, 81, 218, 0.6)" strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <circle cx="98" cy="6" r="2.5" fill={A} />
      </svg>
      <span className="fc-label">{label}</span>

      <style jsx global>{`
        .fc-wrap {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          position: relative; min-width: 60px;
        }
        .fc-svg { width: 100%; height: 14px; display: block; }
        .fc-line {
          animation: fcFlow 1s linear infinite;
        }
        @keyframes fcFlow {
          to { stroke-dashoffset: -16; }
        }
        .fc-label {
          margin-top: 4px;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.08em; text-transform: uppercase; color: ${INK3};
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

function Box({
  children, borderClass = '', delay = 0,
}: {
  children: React.ReactNode;
  borderClass?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sd-box ${borderClass}`}
    >
      {children}
      <style jsx global>{`
        .sd-box {
          border-radius: 10px; padding: 16px; text-align: center;
          background: ${CARD}; border: 1px solid ${OUTLINE_SOFT};
        }
        .sd-box-action  { border-color: rgba(33, 81, 218, 0.3); }
        .sd-box-action-soft { background: rgba(220, 225, 255, 0.5); border-color: rgba(33, 81, 218, 0.4); }
        .sd-box-secondary   { background: rgba(234, 237, 255, 0.6); border-color: rgba(40, 48, 68, 0.25); }
      `}</style>
    </motion.div>
  );
}

export function SteeringDiagram() {
  return (
    <figure className="sd-fig">
      <div className="sd-grid">
        <Box borderClass="sd-box-action">
          <Cpu size={28} className="sd-icon-tech" />
          <p className="sd-title sd-title-tech">NI-DAQmx C Library</p>
          <p className="sd-sub">The shared engine underneath both MATLAB wrappers</p>
        </Box>

        <FlowConnector label="wraps C library" />

        <div className="sd-wheels">
          <Box delay={0.15} borderClass="sd-box-action-soft">
            <p className="sd-title sd-title-action">Function-based</p>
            <p className="sd-mono">daqeval</p>
            <p className="sd-tiny">1 call per C function · compact · direct</p>
          </Box>
          <div className="sd-vs-wrap">
            <span className="sd-vs">vs.</span>
          </div>
          <Box delay={0.25} borderClass="sd-box-secondary">
            <p className="sd-title sd-title-secondary">Class-based</p>
            <p className="sd-mono">niConfigOptions</p>
            <p className="sd-tiny">2 calls per C function · structured · verbose</p>
          </Box>
        </div>

        <FlowConnector label="writes code" />

        <Box delay={0.35} borderClass="sd-box-action">
          <Laptop size={28} className="sd-icon-tech" />
          <p className="sd-title sd-title-tech">MATLAB Engineer</p>
          <p className="sd-sub">Same task, different experience with each wrapper API</p>
        </Box>
      </div>

      <figcaption className="sd-cap">
        <p className="sd-cap-headline">
          Same engine (NI-DAQmx C library), two steering wheels — which wrapper works better for the driver?
        </p>
        <p className="sd-cap-attribution">
          Artifact · Steering-wheel analogy · NI-DAQmx API design
        </p>
      </figcaption>

      <style jsx global>{`
        .sd-fig {
          margin: 0;
          border-radius: 14px;
          border: 1px solid ${OUTLINE_SOFT};
          background: ${SURFACE_LOW};
          padding: 24px;
        }
        .sd-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 24px; align-items: center;
        }
        @media (min-width: 900px) {
          .sd-grid {
            grid-template-columns: 1fr auto 1.1fr auto 1fr;
          }
        }
        .sd-wheels {
          display: flex; flex-direction: column; gap: 12px;
        }
        .sd-vs-wrap { display: flex; align-items: center; justify-content: center; }
        .sd-vs {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: ${INK3};
          background: ${CARD};
          border: 1px solid ${OUTLINE_SOFT};
          border-radius: 999px; padding: 2px 10px;
        }
        :global(.sd-icon-tech) {
          color: ${AD}; margin: 0 auto 8px; display: block;
        }
        .sd-title { margin: 0; font-family: Inter, sans-serif; font-size: 13.5px; font-weight: 700; }
        .sd-title-tech      { color: ${AD}; }
        .sd-title-action    { color: ${A}; }
        .sd-title-secondary { color: ${INK}; }
        .sd-sub {
          margin: 4px 0 0;
          font-family: Inter, sans-serif; font-size: 11.5px; color: ${INK3};
        }
        .sd-mono {
          margin: 4px 0 0;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: ${AD};
        }
        .sd-tiny {
          margin: 6px 0 0;
          font-family: Inter, sans-serif; font-size: 11px; color: ${INK3};
        }
        .sd-cap {
          margin-top: 22px; padding-top: 16px;
          border-top: 1px solid ${OUTLINE_SOFT}; text-align: center;
        }
        .sd-cap-headline {
          margin: 0; font-family: Inter, sans-serif; font-size: 13.5px; font-weight: 500;
          color: ${INK};
        }
        .sd-cap-attribution {
          margin: 4px 0 0;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.12em; text-transform: uppercase; color: ${INK3};
        }
      `}</style>
    </figure>
  );
}
