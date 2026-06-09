'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { A, AS, INK, INK2, INK3 } from './theme';
import { PulseDot, DashedFlow, IsoTile } from './SVGPrimitives';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LandscapeSVG() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 820 260"
      className="landscape-svg"
      role="img"
      aria-labelledby="landscapeTitle"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <title id="landscapeTitle">
        Three states of the industrial protocol landscape: OPC DA being deprecated, third-party OPC UA clients filling the market, and a MATLAB-native OPC UA app missing.
      </title>
      <defs>
        <filter id="tileGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Tile 1 — OPC DA (deprecated, faded) */}
      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
      >
        <IsoTile
          cx={140} cy={120}
          w={210} h={84} depth={28}
          topFill="#E8E5DF" rightFill="#CFC9BE" leftFill="#B8B2A6"
          stroke={INK3} strokeOpacity={0.55} topOpacity={0.85}
        />
        <text x={140} y={124} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={INK3} opacity="0.75">OPC DA</text>
        <text x={140} y={222} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={INK3} letterSpacing="0.08em">DEPRECATED</text>
      </motion.g>

      {/* Tile 2 — 3rd-party OPC UA clients (neutral) */}
      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
      >
        <IsoTile
          cx={410} cy={120}
          w={210} h={84} depth={28}
          topFill="#FAFAF7" rightFill="#ECEAE7" leftFill="#DDD9D4"
          stroke={INK3}
        />
        <g>
          <rect x={383} y={50} width="14" height="10" rx="1.5" fill="white" stroke={INK3} strokeWidth="0.9" />
          <circle cx="390" cy="55" r="1.6" fill={INK3} />
          <rect x={403} y={47} width="14" height="10" rx="1.5" fill="white" stroke={INK3} strokeWidth="0.9" />
          <line x1="406" y1="51" x2="414" y2="51" stroke={INK3} strokeWidth="0.9" strokeLinecap="round" />
          <line x1="406" y1="55" x2="412" y2="55" stroke={INK3} strokeWidth="0.9" strokeLinecap="round" />
          <rect x={423} y={50} width="14" height="10" rx="1.5" fill="white" stroke={INK3} strokeWidth="0.9" />
          <path d="M 427 57 L 430 53 L 433 57" fill="none" stroke={INK3} strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
          <text x="443" y="58" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill={INK3} letterSpacing="0.05em">+more</text>
        </g>
        <text x={410} y={124} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={INK2}>3rd-party OPC UA</text>
        <text x={410} y={222} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={INK3} letterSpacing="0.08em">EXISTING MARKET</text>
      </motion.g>

      {/* Tile 3 — MATLAB-native (mint, highlighted) */}
      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
      >
        <ellipse cx={680} cy={132} rx={120} ry={56} fill={A} fillOpacity="0.12" filter="url(#tileGlow)" />
        <IsoTile
          cx={680} cy={120}
          w={210} h={84} depth={28}
          topFill={AS} rightFill="#9CCBB8" leftFill="#82B7A2"
          stroke={A} strokeOpacity={0.7}
        />
        <PulseDot cx={680} cy={62} r={3.4} ringMax={11} delay={0.3} />
        <text x={680} y={124} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={A}>MATLAB-native</text>
        <text x={680} y={222} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={A} letterSpacing="0.08em">THE GAP</text>
      </motion.g>

      {/* Arrows between tiles */}
      <DashedFlow d="M 248 118 L 302 118" packets={1} packetDuration={1.8} color={A} strokeOpacity={0.55} />
      <path d="M 296 114 L 304 118 L 296 122" stroke={A} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <DashedFlow d="M 518 118 L 572 118" packets={1} packetDuration={1.8} packetDelay={0.6} color={A} strokeOpacity={0.65} />
      <path d="M 566 114 L 574 118 L 566 122" stroke={A} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}
