import React from 'react';
import { A, INK3 } from './theme';

// Pulsing dot with an expanding emission ring. The ring uses CSS `.data-flow`
// which the global styles hide under prefers-reduced-motion.
export function PulseDot({
  cx,
  cy,
  r = 4,
  ringMax = 14,
  delay = 0,
  color = A,
}: { cx: number; cy: number; r?: number; ringMax?: number; delay?: number; color?: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} fill="none" stroke={color} strokeWidth="1.2" className="data-flow">
        <animate attributeName="r" values={`${r}; ${ringMax}`} dur="2.2s" repeatCount="indefinite" begin={`${delay}s`} />
        <animate attributeName="opacity" values="0;0.7;0" keyTimes="0;0.18;1" dur="2.2s" repeatCount="indefinite" begin={`${delay}s`} />
      </circle>
      <circle
        cx={cx}
        cy={cy}
        r={r * 2}
        fill={color}
        fillOpacity="0.22"
        className="sensor-dot"
        style={{ animationDelay: `${delay}s`, transformOrigin: `${cx}px ${cy}px` }}
      />
      <circle cx={cx} cy={cy} r={r} fill={color} />
      <circle cx={cx} cy={cy} r={Math.max(1, r * 0.4)} fill="#fff" fillOpacity="0.85" />
    </g>
  );
}

// Dashed connection path with optional traveling packets along it.
export function DashedFlow({
  d,
  packetDelay = 0,
  packetDuration = 2.4,
  packets = 1,
  color = A,
  strokeOpacity = 0.55,
}: { d: string; packetDelay?: number; packetDuration?: number; packets?: number; color?: string; strokeOpacity?: number }) {
  return (
    <g>
      <path d={d} stroke={color} strokeWidth="1.1" strokeOpacity={strokeOpacity} fill="none" strokeLinecap="round" strokeDasharray="2 3" />
      {packets > 0 && (
        <g className="data-flow">
          {Array.from({ length: packets }).map((_, i) => (
            <circle key={i} r="2.4" fill={color} opacity="0">
              <animateMotion path={d} dur={`${packetDuration}s`} repeatCount="indefinite" begin={`${packetDelay + i * (packetDuration / packets)}s`} />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur={`${packetDuration}s`} repeatCount="indefinite" begin={`${packetDelay + i * (packetDuration / packets)}s`} />
            </circle>
          ))}
        </g>
      )}
    </g>
  );
}

// Isometric block. Used as a building primitive for floor tiles + machines.
export function IsoTile({
  cx,
  cy,
  w = 110,
  h = 60,
  depth = 26,
  topFill = '#FAFAF7',
  rightFill = '#ECEAE7',
  leftFill = '#DDD9D4',
  stroke = INK3,
  strokeOpacity = 1,
  topOpacity = 1,
}: {
  cx: number; cy: number; w?: number; h?: number; depth?: number;
  topFill?: string; rightFill?: string; leftFill?: string;
  stroke?: string; strokeOpacity?: number; topOpacity?: number;
}) {
  const hw = w / 2;
  const hh = h / 2;
  // Diamond top face: F (front), R (right), B (back), L (left)
  const F: [number, number] = [cx, cy + hh];
  const R: [number, number] = [cx + hw, cy];
  const B: [number, number] = [cx, cy - hh];
  const L: [number, number] = [cx - hw, cy];
  const Fb: [number, number] = [F[0], F[1] + depth];
  const Rb: [number, number] = [R[0], R[1] + depth];
  const Lb: [number, number] = [L[0], L[1] + depth];
  return (
    <g stroke={stroke} strokeWidth="1" strokeOpacity={strokeOpacity}>
      <path d={`M ${F[0]} ${F[1]} L ${R[0]} ${R[1]} L ${Rb[0]} ${Rb[1]} L ${Fb[0]} ${Fb[1]} Z`} fill={rightFill} />
      <path d={`M ${F[0]} ${F[1]} L ${L[0]} ${L[1]} L ${Lb[0]} ${Lb[1]} L ${Fb[0]} ${Fb[1]} Z`} fill={leftFill} />
      <path d={`M ${F[0]} ${F[1]} L ${R[0]} ${R[1]} L ${B[0]} ${B[1]} L ${L[0]} ${L[1]} Z`} fill={topFill} fillOpacity={topOpacity} />
    </g>
  );
}
