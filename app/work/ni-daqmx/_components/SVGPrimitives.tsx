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
        fillOpacity="0.18"
        className="sensor-dot"
        style={{ animationDelay: `${delay}s`, transformOrigin: `${cx}px ${cy}px` }}
      />
      <circle cx={cx} cy={cy} r={r} fill={color} />
      <circle cx={cx} cy={cy} r={Math.max(1, r * 0.4)} fill="#fff" fillOpacity="0.9" />
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

// Used by InfrastructureMetaphor + ignored elsewhere. Kept for parity with OPC UA toolkit.
export function StrokeArrow({
  d,
  color = INK3,
  width = 1.4,
}: { d: string; color?: string; width?: number }) {
  return <path d={d} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" />;
}
