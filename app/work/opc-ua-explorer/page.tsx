'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import PasswordGate from '@/app/components/PasswordGate';
import CaseStudyMenu from '@/app/components/CaseStudyMenu';

const A = '#1E6B4A';       // accent (spine green)
const AS = '#B8DFD0';      // accent soft (cover mint)
const AB = '#F0FAF6';      // accent background
const INK = '#111827';
const INK2 = '#374151';
const INK3 = '#6b7280';
const LINE = '#e5e7eb';
const CARD = '#f9fafb';

function Pill({ children, shipped = true }: { children: React.ReactNode; shipped?: boolean }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: shipped ? '#d1fae5' : '#fef3c7',
      color: shipped ? '#065f46' : '#92400e',
      fontFamily: 'Inter, sans-serif',
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 20,
      marginBottom: 6,
    }}>{children}</span>
  );
}

function Artifact({ label, height = 260 }: { label: string; height?: number }) {
  return (
    <div style={{
      border: `2px dashed ${LINE}`,
      borderRadius: 12,
      height,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 24px',
      background: CARD,
      textAlign: 'center',
      gap: 8,
    }}>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.1em',
        color: INK3,
        textTransform: 'uppercase',
      }}>Artifact needed</span>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 13,
        color: INK3,
        lineHeight: 1.5,
      }}>{label}</span>
    </div>
  );
}

function EyebrowLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase' as const,
      color: A,
      margin: '0 0 8px',
    }}>{children}</p>
  );
}

function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.2,
      color: INK,
      margin: '0 0 24px',
      letterSpacing: '-0.01em',
      ...style,
    }}>{children}</h2>
  );
}

function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: 17,
      lineHeight: 1.75,
      color: INK2,
      margin: '0 0 20px',
      ...style,
    }}>{children}</p>
  );
}

function SubLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
      color: INK3,
      margin: '20px 0 6px',
    }}>{children}</p>
  );
}

function Divider() {
  return <hr style={{ height: 1, background: LINE, border: 'none', margin: 0 }} />;
}

function FactoryHookSVG() {
  // ── Coordinate system ──────────────────────────────────────────────
  // viewBox 600 × 440. Floor rhombus corners:
  //   F (front) = (300, 360)  R (right) = (500, 280)
  //   B (back)  = (300, 200)  L (left)  = (100, 280)
  // Right-axis unit vector r ≈ (1, -0.43); left-axis l ≈ (-1, -0.43).
  // Each machine occupies its own tile on the 3×3 grid; footprints are
  // checked to not overlap in floor-plane coords.
  const serverX = 300;
  const serverY = 95;

  // Sensors — one per machine, placed visibly on the machine body.
  const sensors: Array<[number, number]> = [
    [197, 232],   // ARM gripper
    [305, 192],   // TANK top
    [368, 218],   // PRESS crossbar
    [310, 270],   // MOTOR front face
    [267, 315],   // CONVEYOR side panel
    [445, 232],   // CABINET front face
  ];

  // Direct diagonal from each sensor straight to the top of the server node.
  const linkPath = (px: number, py: number) =>
    `M ${px} ${py} L ${serverX} ${serverY + 16}`;

  return (
    <svg
      viewBox="0 0 600 440"
      role="img"
      aria-labelledby="factoryHookTitle"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <title id="factoryHookTitle">
        Isometric factory floor with conveyor, robotic arm, tank, motor, press, and control cabinet; sensors are glowing dots that all connect upward to a question-marked server node, with an engineer standing apart — representing industrial data that engineers couldn&apos;t access without code.
      </title>

      <defs>
        <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <filter id="qGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* ── FLOOR ──────────────────────────────────────────────────────── */}
      <path d="M 300 360 L 500 280 L 500 288 L 300 368 Z" fill="#d8d3ca" stroke="#a8a39a" strokeWidth="0.9" />
      <path d="M 300 360 L 100 280 L 100 288 L 300 368 Z" fill="#c4bfb5" stroke="#a8a39a" strokeWidth="0.9" />
      <path d="M 300 360 L 500 280 L 300 200 L 100 280 Z" fill="#F2EFE9" stroke="#a8a39a" strokeWidth="1.3" />
      {/* 3×3 grid lines */}
      <g stroke="#c8c2b6" strokeWidth="0.7" opacity="0.85">
        <line x1="166.67" y1="306.67" x2="366.67" y2="226.67" />
        <line x1="233.33" y1="333.33" x2="433.33" y2="253.33" />
        <line x1="366.67" y1="333.33" x2="166.67" y2="253.33" />
        <line x1="433.33" y1="306.67" x2="233.33" y2="226.67" />
      </g>

      {/* ────────────────────────────────────────────────────────────────
          MACHINES — drawn back-to-front by iso depth (smaller y first)
          ──────────────────────────────────────────────────────────── */}

      {/* ▷ TANK — tile (2,2), center (300, 227) ────────────────────── */}
      <g>
        {/* legs */}
        <line x1="284" y1="233" x2="282" y2="247" stroke={INK3} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="300" y1="237" x2="300" y2="252" stroke={INK3} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="316" y1="233" x2="318" y2="247" stroke={INK3} strokeWidth="1.3" strokeLinecap="round" />
        {/* bottom ring */}
        <ellipse cx="300" cy="232" rx="20" ry="6" fill="#DDD9D4" stroke={INK3} strokeWidth="1.3" />
        {/* body */}
        <path d="M 280 232 L 280 195 A 20 6 0 0 1 320 195 L 320 232" fill={CARD} stroke={INK3} strokeWidth="1.3" />
        <path d="M 280 232 A 20 6 0 0 0 320 232" fill="none" stroke={INK3} strokeWidth="1.3" />
        {/* top */}
        <ellipse cx="300" cy="195" rx="20" ry="6" fill="#FAFAF7" stroke={INK3} strokeWidth="1.3" />
        {/* hatch */}
        <ellipse cx="300" cy="193" rx="7" ry="2" fill="#ECEAE7" stroke={INK3} strokeWidth="0.9" />
        {/* mid band */}
        <path d="M 280 215 A 20 6 0 0 0 320 215" fill="none" stroke={INK3} strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* ▷ PRESS — tile (2,1), center (367, 253) ────────────────────── */}
      <g stroke={INK3} strokeWidth="1.3">
        {/* base box (h=6) */}
        <path d="M 367 263.32 L 391 253 L 391 247 L 367 257.32 Z" fill="#ECEAE7" />
        <path d="M 367 263.32 L 343 253 L 343 247 L 367 257.32 Z" fill="#DDD9D4" />
        <path d="M 367 257.32 L 391 247 L 367 236.68 L 343 247 Z" fill="#FAFAF7" />
        {/* two vertical pillars (one toward back-left, one toward front-right of base) */}
        <rect x="356" y="218" width="3" height="32" fill="#DDD9D4" />
        <rect x="377" y="222" width="3" height="32" fill="#DDD9D4" />
        {/* crossbar joining pillar tops (slanted) */}
        <path d="M 355 218 L 380 222 L 380 217 L 355 213 Z" fill="#FAFAF7" />
        {/* piston housing hanging from crossbar center */}
        <rect x="364" y="222" width="6" height="14" fill="#ECEAE7" />
        {/* plunger */}
        <rect x="365" y="236" width="4" height="6" fill={INK3} />
        {/* anvil on base, between pillars */}
        <path d="M 360 250 L 374 247 L 374 244 L 360 247 Z" fill="#ECEAE7" />
      </g>

      {/* ▷ CABINET — tile (2,0), center (433, 280) ───────────────────── */}
      <g>
        {/* right-axis (front-right) face */}
        <path
          d="M 437 290.32 L 457 281.72 L 457 201.72 L 437 210.32 Z"
          fill="#ECEAE7"
          stroke={INK3}
          strokeWidth="1.3"
        />
        {/* left-axis (front-left) face — the wider of the two visible faces */}
        <path
          d="M 437 290.32 L 409 278.28 L 409 198.28 L 437 210.32 Z"
          fill="#DDD9D4"
          stroke={INK3}
          strokeWidth="1.3"
        />
        {/* top */}
        <path
          d="M 437 210.32 L 457 201.72 L 429 189.68 L 409 198.28 Z"
          fill="#FAFAF7"
          stroke={INK3}
          strokeWidth="1.3"
        />
        {/* display panel on the wider front-left face */}
        <path d="M 415 278.5 L 431 271.6 L 431 232.6 L 415 239.5 Z" fill="#1F2937" stroke={INK3} strokeWidth="0.7" />
        {/* LEDs */}
        <circle cx="419" cy="250" r="1.4" fill={A} />
        <circle cx="423" cy="248" r="1.4" fill="#9CA3AF" />
        <circle cx="427" cy="246" r="1.4" fill="#9CA3AF" />
        {/* grille lines (lower portion of panel) */}
        <line x1="416" y1="263" x2="430" y2="257" stroke="#9CA3AF" strokeWidth="0.55" />
        <line x1="416" y1="267" x2="430" y2="261" stroke="#9CA3AF" strokeWidth="0.55" />
        <line x1="416" y1="271" x2="430" y2="265" stroke="#9CA3AF" strokeWidth="0.55" />
      </g>

      {/* ▷ ROBOTIC ARM — tile (0,2), center (167, 280) ───────────────── */}
      <g stroke={INK3} strokeWidth="1.3" strokeLinecap="round" fill={CARD}>
        {/* base box (h=8) */}
        <path d="M 167 290.32 L 191 280 L 191 272 L 167 282.32 Z" fill="#ECEAE7" />
        <path d="M 167 290.32 L 143 280 L 143 272 L 167 282.32 Z" fill="#DDD9D4" />
        <path d="M 167 282.32 L 191 272 L 167 261.68 L 143 272 Z" fill="#FAFAF7" />
        {/* vertical post */}
        <rect x="162" y="232" width="9" height="40" fill={CARD} />
        {/* shoulder joint */}
        <circle cx="167" cy="232" r="4.5" fill="#ECEAE7" />
        {/* upper arm (outline + inner) */}
        <line x1="167" y1="232" x2="195" y2="221" strokeWidth="5" />
        <line x1="167" y1="232" x2="195" y2="221" stroke="#ECEAE7" strokeWidth="3.2" />
        {/* elbow */}
        <circle cx="195" cy="221" r="3.2" fill={CARD} />
        {/* forearm */}
        <line x1="195" y1="221" x2="198" y2="232" strokeWidth="2.8" />
        {/* claw prongs */}
        <path d="M 196 232 L 194 240 M 200 232 L 202 240" strokeWidth="1.8" fill="none" />
      </g>

      {/* ▷ MOTOR — tile (1,1), center (300, 280) ────────────────────── */}
      <g>
        {/* right-axis face (front, longer) */}
        <path d="M 284 294.62 L 334 273.12 L 334 247.12 L 284 268.62 Z" fill={CARD} stroke={INK3} strokeWidth="1.3" />
        {/* left-axis face (left end, short) */}
        <path d="M 284 294.62 L 266 286.88 L 266 260.88 L 284 268.62 Z" fill="#DDD9D4" stroke={INK3} strokeWidth="1.3" />
        {/* top */}
        <path d="M 284 268.62 L 334 247.12 L 316 239.38 L 266 260.88 Z" fill="#FAFAF7" stroke={INK3} strokeWidth="1.3" />
        {/* cooling fins */}
        {[0.18, 0.34, 0.50, 0.66, 0.82].map((t, i) => {
          const x = 284 + 50 * t;
          const yBot = 294.62 - 21.5 * t;
          const yTop = 268.62 - 21.5 * t;
          return <line key={i} x1={x} y1={yBot} x2={x} y2={yTop} stroke={INK3} strokeWidth="0.7" opacity="0.7" />;
        })}
        {/* end-cap circles */}
        <ellipse cx="275" cy="281.75" rx="3.2" ry="6" fill="#ECEAE7" stroke={INK3} strokeWidth="0.7" />
        <ellipse cx="324" cy="260.25" rx="3.2" ry="6" fill="#FAFAF7" stroke={INK3} strokeWidth="0.7" />
        {/* output shaft */}
        <line x1="334" y1="260" x2="342" y2="256.6" stroke={INK3} strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* ▷ CONVEYOR — tile (0,0), center (300, 333), along right-axis ── */}
      <g>
        {/* right-axis face (front, long) */}
        <path d="M 281 350.63 L 341 324.83 L 341 306.83 L 281 332.63 Z" fill="#ECEAE7" stroke={INK3} strokeWidth="1.3" />
        {/* left-axis face (left end, short) */}
        <path d="M 281 350.63 L 259 341.17 L 259 323.17 L 281 332.63 Z" fill="#DDD9D4" stroke={INK3} strokeWidth="1.3" />
        {/* top */}
        <path d="M 281 332.63 L 341 306.83 L 319 297.37 L 259 323.17 Z" fill="#FAFAF7" stroke={INK3} strokeWidth="1.3" />
        {/* belt rollers on top */}
        <ellipse cx="278" cy="324.5" rx="3.6" ry="1.5" fill="#DDD9D4" stroke={INK3} strokeWidth="0.6" />
        <ellipse cx="300" cy="315" rx="3.6" ry="1.5" fill="#DDD9D4" stroke={INK3} strokeWidth="0.6" />
        <ellipse cx="322" cy="305.5" rx="3.6" ry="1.5" fill="#DDD9D4" stroke={INK3} strokeWidth="0.6" />
        {/* side control panel sitting on the left end of conveyor */}
        <path d="M 268 329 L 278 324.7 L 278 299.7 L 268 304 Z" fill="#ECEAE7" stroke={INK3} strokeWidth="1.0" />
        <path d="M 268 329 L 254 323 L 254 298 L 268 304 Z" fill="#DDD9D4" stroke={INK3} strokeWidth="1.0" />
        <path d="M 268 304 L 278 299.7 L 264 293.7 L 254 298 Z" fill="#FAFAF7" stroke={INK3} strokeWidth="1.0" />
        {/* display screen */}
        <path d="M 257 320 L 275 312.3 L 275 304.3 L 257 312 Z" fill="#1F2937" />
      </g>

      {/* ── CONNECTION LINES (direct diagonal sensor → server).
            Drawn AFTER machines so the dashed line is visible across
            the tank/motor bodies instead of being clipped behind them. */}
      <g
        stroke={A}
        strokeWidth="1.1"
        strokeOpacity="0.55"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 3"
      >
        {sensors.map(([px, py], i) => (
          <path key={i} d={linkPath(px, py)} />
        ))}
      </g>

      {/* ── DATA PACKETS — small dots travel each line, sensor → server.
            Drawn AFTER machines so they fly visibly above the tank/motor
            (rather than being clipped behind them) and disappear into the
            server node below. */}
      <g className="data-flow">
        {sensors.map(([px, py], i) => (
          <circle key={`pkt-${i}`} r="2.4" fill={A} opacity="0">
            <animateMotion
              path={`M ${px} ${py} L ${serverX} ${serverY + 16}`}
              dur="2.4s"
              repeatCount="indefinite"
              begin={`${i * 0.38}s`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.9;1"
              dur="2.4s"
              repeatCount="indefinite"
              begin={`${i * 0.38}s`}
            />
          </circle>
        ))}
      </g>

      {/* ── SERVER NODE + glowing "?" (floating above floor center) ──── */}
      <g>
        {/* glow halo */}
        <circle cx={serverX} cy={serverY - 34} r="22" fill={A} fillOpacity="0.16" filter="url(#qGlow)" />
        {/* ring outline */}
        <circle cx={serverX} cy={serverY - 34} r="14" fill="none" stroke={A} strokeWidth="1.2" strokeOpacity="0.7" />
        {/* "?" */}
        <text
          x={serverX}
          y={serverY - 27}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          fontSize="22"
          fill={A}
        >
          ?
        </text>

        {/* server box — small iso cube */}
        <path
          d={`M ${serverX} ${serverY + 16} L ${serverX + 22} ${serverY + 7} L ${serverX + 22} ${serverY - 3} L ${serverX} ${serverY + 6} Z`}
          fill="#1F2937"
          stroke="#0b0f17"
          strokeWidth="0.6"
        />
        <path
          d={`M ${serverX} ${serverY + 16} L ${serverX - 22} ${serverY + 7} L ${serverX - 22} ${serverY - 3} L ${serverX} ${serverY + 6} Z`}
          fill="#111827"
          stroke="#0b0f17"
          strokeWidth="0.6"
        />
        <path
          d={`M ${serverX} ${serverY + 6} L ${serverX + 22} ${serverY - 3} L ${serverX} ${serverY - 12} L ${serverX - 22} ${serverY - 3} Z`}
          fill="#374151"
          stroke={A}
          strokeWidth="1"
        />
      </g>

      {/* ── SENSOR DOTS (pulsing glow + expanding ring + solid core) ── */}
      <g>
        {sensors.map(([cx, cy], i) => (
          <g key={i}>
            {/* soft pulsing glow (CSS-driven opacity loop) */}
            <g className="sensor-dot" style={{ animationDelay: `${(i % 4) * 0.5}s` }}>
              <circle cx={cx} cy={cy} r="8" fill={A} fillOpacity="0.32" filter="url(#dotGlow)" />
            </g>
            {/* expanding "data emission" ring */}
            <circle cx={cx} cy={cy} fill="none" stroke={A} strokeWidth="1.3" className="data-flow">
              <animate
                attributeName="r"
                values="3.5;14"
                dur="2.2s"
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
              />
              <animate
                attributeName="opacity"
                values="0;0.75;0"
                keyTimes="0;0.15;1"
                dur="2.2s"
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
              />
            </circle>
            {/* solid core + highlight */}
            <circle cx={cx} cy={cy} r="3.2" fill={A} />
            <circle cx={cx} cy={cy} r="1.2" fill="#fff" fillOpacity="0.85" />
          </g>
        ))}
      </g>

      {/* ── ENGINEER silhouette (clean, outside the floor on the right) ── */}
      <g>
        {/* shadow */}
        <ellipse cx="540" cy="392" rx="14" ry="3.2" fill={INK3} opacity="0.22" />
        {/* head */}
        <circle cx="540" cy="335" r="6" fill={INK2} />
        {/* torso */}
        <path d="M 533 343 L 547 343 L 548 366 L 532 366 Z" fill={INK2} />
        {/* left arm — raised to chin (drawn as stroke so it doesn't cross the head) */}
        <path
          d="M 533 344 L 528 338 L 532 333"
          stroke={INK2}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* right arm hanging */}
        <path d="M 547 344 L 548 364" stroke={INK2} strokeWidth="3.2" strokeLinecap="round" fill="none" />
        {/* legs */}
        <path d="M 537 366 L 536 388" stroke={INK2} strokeWidth="3.8" strokeLinecap="round" />
        <path d="M 544 366 L 545 388" stroke={INK2} strokeWidth="3.8" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// ── Reusable visual primitives (used across sections) ────────────────

function PulseDot({
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

function DashedFlow({
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

function IsoTile({
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

function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <figure className="big-quote">
      <blockquote>{children}</blockquote>
      {cite && <figcaption>— {cite}</figcaption>}
    </figure>
  );
}

function DecisionBar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    // Respect reduced-motion: skip the slide-in animation entirely.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const segments = [
    { count: 6,  label: 'SHIPPED',  color: A,         legend: '✓ Shipped in v1' },
    { count: 2,  label: 'PARTIAL',  color: '#7BA88A', legend: '~ Partially shipped' },
    { count: 11, label: 'DEFERRED', color: '#C9C4B8', legend: '⏸ Deferred — see table' },
  ];
  const total = segments.reduce((s, x) => s + x.count, 0);

  return (
    <div className="decision-bar-wrap" ref={ref} aria-label="Research-driven decisions across the 19-item pipeline">
      <div className="decision-bar" role="img" aria-label={`6 shipped, 2 partial, 11 deferred — ${total} total decisions`}>
        {segments.map((s, i) => (
          <div
            key={s.label}
            className={`decision-segment${visible ? ' in-view' : ''}`}
            style={{
              flexBasis: `${(s.count / total) * 100}%`,
              background: s.color,
              transitionDelay: `${i * 0.18}s`,
              color: s.color === '#C9C4B8' ? INK2 : 'white',
            }}
          >
            {s.count} {s.label}
          </div>
        ))}
      </div>
      <div className="decision-legend">
        {segments.map((s) => (
          <span key={s.label}>
            <span className="decision-legend-dot" style={{ background: s.color }} />
            {s.legend}
          </span>
        ))}
      </div>
    </div>
  );
}

function ZoomFrame({
  src,
  alt,
  focalX,
  focalY,
  zoom = 1.8,
  aspectRatio = '16 / 10',
  caption,
  panLR = false,
}: {
  src: string;
  alt: string;
  focalX: string;
  focalY: string;
  zoom?: number;
  aspectRatio?: string;
  caption?: string;
  panLR?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={`zoom-frame${visible ? ' zoomed-in' : ''}${panLR ? ' pan-lr' : ''}`}
      style={{
        aspectRatio,
        ['--focal-x' as string]: focalX,
        ['--focal-y' as string]: focalY,
        ['--zoom' as string]: String(zoom),
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {caption && <figcaption className="zoom-caption">{caption}</figcaption>}
    </figure>
  );
}

function OPCUAContent() {
  return (
    <div style={{ background: '#ffffff', color: '#111827', minHeight: '100vh' }}>
      <CaseStudyMenu />
      <style>{`
        .hero-wrap { background: ${AB}; padding: 72px 24px 80px; }
        .hero-grid {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.25fr; gap: 56px; align-items: center;
        }
        @media (max-width: 1024px) { .hero-grid { grid-template-columns: 1fr 1fr; gap: 48px; } }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr; } }
        .hero-visual { width: 100%; max-width: 720px; margin: 0 auto; }
        @media (min-width: 1280px) { .hero-visual { max-width: none; } }

        .stat-row { display: flex; flex-wrap: wrap; gap: 6px 0; margin-top: 24px; }
        .stat-item { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: ${INK2}; }
        .stat-sep { color: ${INK3}; padding: 0 8px; }

        .prose { max-width: 720px; margin: 0 auto; padding: 64px 24px; }
        .wide { max-width: 1080px; margin: 0 auto; padding: 64px 24px; }

        .tldr-grid {
          max-width: 1080px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 900px) { .tldr-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .tldr-grid { grid-template-columns: 1fr; } }
        .tldr-cell {
          padding: 28px 28px 28px 0;
          border-right: 1px solid ${AS};
        }
        .tldr-cell:first-child { padding-left: 0; }
        .tldr-cell:last-child { border-right: none; padding-right: 0; }
        @media (max-width: 900px) {
          .tldr-cell:nth-child(2) { border-right: none; padding-right: 0; }
          .tldr-cell:nth-child(3) { padding-left: 0; border-right: 1px solid ${AS}; }
          .tldr-cell { padding-bottom: 24px; padding-top: 24px; }
          .tldr-cell:nth-child(1),
          .tldr-cell:nth-child(2) { border-bottom: 1px solid ${AS}; }
        }
        @media (max-width: 540px) {
          .tldr-cell { border-right: none !important; border-bottom: 1px solid ${AS}; padding: 20px 0; }
          .tldr-cell:last-child { border-bottom: none; }
        }
        .tldr-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${A}; margin-bottom: 10px;
        }
        .tldr-value {
          font-family: Inter, sans-serif; font-size: 14px; color: ${INK2}; line-height: 1.65;
        }

        .phase-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        @media (max-width: 768px) { .phase-grid { grid-template-columns: 1fr; } }
        .phase-card {
          background: white; border: 1px solid ${LINE};
          border-radius: 14px; padding: 24px;
        }
        .phase-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: ${A}; margin-bottom: 10px;
        }
        .phase-stats {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          color: ${INK3}; line-height: 1.55; margin-bottom: 14px;
        }
        .phase-divider { height: 1px; background: ${LINE}; margin-bottom: 14px; }
        .phase-body { font-family: Inter, sans-serif; font-size: 15px; color: ${INK2}; line-height: 1.65; margin: 0; }

        /* ── Recommendation + What-shipped 2-col row, full width, below the insight-grid ── */
        .recap-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 56px;
          row-gap: 0;
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid ${LINE};
        }
        .recap-grid > div > p:first-child,
        .recap-grid > div > div:first-child { margin-top: 0 !important; }
        .recap-headline {
          display: flex; align-items: center;
          gap: 10px; flex-wrap: wrap;
          margin: 0 0 10px;
          min-height: 26px;   /* matches Pill height so both heads + bodies align */
        }
        .recap-headline p { margin: 0 !important; }
        .recap-headline span { margin-bottom: 0 !important; }
        @media (max-width: 768px) {
          .recap-grid { grid-template-columns: 1fr; column-gap: 0; row-gap: 18px; }
        }

        .insight-block { padding: 48px 0; border-bottom: 1px solid ${LINE}; }
        .insight-block:last-child { border-bottom: none; }
        .insight-grid {
          display: grid; grid-template-columns: 0.85fr 1.6fr; gap: 56px; align-items: start;
        }
        @media (max-width: 1100px) {
          .insight-grid { grid-template-columns: 1fr 1.4fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .insight-grid { grid-template-columns: 1fr; gap: 24px; }
          .artifact-col { order: -1; }
        }
        .insight-eyebrow {
          font-family: Inter, sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: ${A}; margin-bottom: 10px;
        }
        .insight-h3 {
          font-family: Inter, sans-serif; font-weight: 700; font-size: 21px;
          color: ${INK}; line-height: 1.3; margin: 0 0 24px;
        }
        .insight-body {
          font-family: Inter, sans-serif; font-size: 16px;
          color: ${INK2}; line-height: 1.7; margin: 0 0 8px;
        }

        /* ── Flanking insight cards (Discovery + IDR) ── */
        .flank-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;
        }
        @media (max-width: 720px) { .flank-grid { grid-template-columns: 1fr; } }
        .flank-card {
          background: white; border-left: 3px solid #0F4028;
          border-radius: 0 12px 12px 0; padding: 24px 28px;
        }
        .flank-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; color: #0F4028; margin-bottom: 8px;
        }
        .flank-h4 {
          font-family: Inter, sans-serif; font-weight: 700; font-size: 17px;
          color: ${INK}; line-height: 1.3; margin: 0 0 18px;
        }
        .flank-row { margin-bottom: 14px; }
        .flank-row:last-child { margin-bottom: 0; }
        .flank-label {
          font-family: Inter, sans-serif; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em; color: ${INK3}; margin-bottom: 4px;
        }
        .flank-body {
          font-family: Inter, sans-serif; font-size: 14px;
          color: ${INK2}; line-height: 1.65; margin: 0;
        }
        .idr-stack { display: flex; flex-direction: column; gap: 16px; }

        .pull-quote {
          position: relative; isolation: isolate;
          padding: 18px 22px; margin: 24px 0;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(30, 107, 74, 0.16);
          border-radius: 12px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            0 14px 40px -24px rgba(30, 107, 74, 0.32);
        }
        .pull-quote::before {
          content: ''; position: absolute; inset: -20px; z-index: -1;
          background:
            radial-gradient(ellipse 60% 80% at 20% 60%, rgba(30, 107, 74, 0.14), transparent 70%),
            radial-gradient(ellipse 55% 70% at 85% 70%, rgba(184, 223, 208, 0.38), transparent 75%);
          filter: blur(16px); border-radius: 22px; pointer-events: none;
        }
        .pull-quote blockquote {
          font-family: Inter, sans-serif; font-size: 16px; font-style: italic;
          color: ${INK}; line-height: 1.6; margin: 0 0 6px;
        }
        .pull-quote cite {
          font-family: Inter, sans-serif; font-size: 13px; color: ${INK3}; font-style: normal;
        }

        .before-after-pair { margin-bottom: 44px; }
        .before-after-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
        }
        @media (max-width: 640px) { .before-after-grid { grid-template-columns: 1fr; } }
        .ba-label {
          font-family: Inter, sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: ${INK3}; margin-bottom: 8px;
        }

        .deferred-table { width: 100%; border-collapse: collapse; font-family: Inter, sans-serif; font-size: 15px; }
        .deferred-table th {
          text-align: left; padding: 10px 14px; border-bottom: 2px solid ${LINE};
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: ${INK3};
        }
        .deferred-table td { padding: 13px 14px; border-bottom: 1px solid ${LINE}; vertical-align: top; line-height: 1.55; }
        .deferred-table tr:last-child td { border-bottom: none; }

        .cs-footer { background: ${AB}; padding: 64px 24px; border-top: 1px solid ${AS}; }
        .cs-footer-inner {
          max-width: 720px; margin: 0 auto;
          display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 24px;
        }
        .footer-link {
          font-family: Inter, sans-serif; font-size: 16px; font-weight: 600;
          color: ${A}; text-decoration: none;
          border-bottom: 2px solid ${AS}; padding-bottom: 2px; transition: opacity 0.15s;
        }
        .footer-link:hover { opacity: 0.75; }

        .reflection-num {
          font-family: 'JetBrains Mono', monospace; font-size: 13px;
          color: ${A}; font-weight: 600; margin-bottom: 8px;
        }

        .mono { font-family: 'JetBrains Mono', monospace; font-size: 0.9em; }

        .docs-link {
          font-family: 'JetBrains Mono', monospace; font-size: 13px;
          color: ${A}; text-decoration: none; border-bottom: 1px solid ${AS};
        }
        .docs-link:hover { opacity: 0.75; }

        /* ── Big pull quote (Playfair, serif) ── */
        .big-quote {
          position: relative; isolation: isolate;
          margin: 40px 0 12px;
          padding: 30px 34px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(30, 107, 74, 0.18);
          border-radius: 16px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            0 20px 55px -28px rgba(30, 107, 74, 0.42);
        }
        .big-quote::before {
          content: ''; position: absolute; inset: -28px; z-index: -1;
          background:
            radial-gradient(ellipse 60% 75% at 25% 50%, rgba(30, 107, 74, 0.18), transparent 70%),
            radial-gradient(ellipse 55% 80% at 80% 90%, rgba(184, 223, 208, 0.48), transparent 75%);
          filter: blur(20px); border-radius: 28px; pointer-events: none;
        }
        .big-quote blockquote {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(17px, 1.7vw, 21px);
          line-height: 1.45; color: ${INK}; margin: 0; font-style: italic;
        }
        .big-quote figcaption {
          font-family: Inter, sans-serif; font-size: 13px;
          color: ${INK3}; margin-top: 10px; letter-spacing: 0.02em;
        }

        /* ── §3 Timeline strip ── */
        .timeline-strip { width: 100%; max-width: 680px; margin: 0 auto 28px; display: block; }

        /* ── §4 Glossary card ── */
        .glossary-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 14px; margin: 8px 0 32px;
        }
        @media (max-width: 720px) { .glossary-grid { grid-template-columns: 1fr; } }
        .glossary-tile {
          background: white; border: 1px solid ${LINE};
          border-radius: 12px; padding: 20px 22px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .glossary-icon { width: 48px; height: 48px; flex-shrink: 0; }
        .glossary-term {
          font-family: Inter, sans-serif; font-weight: 700; font-size: 15px;
          color: ${INK}; margin: 0; letter-spacing: -0.005em;
        }
        .glossary-def {
          font-family: Inter, sans-serif; font-size: 14px;
          color: ${INK2}; margin: 0; line-height: 1.55;
        }
        .glossary-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: ${A}; margin: 0;
        }

        /* ── §5 Landscape map ── */
        .landscape-svg { width: 100%; max-width: 820px; margin: 8px auto 32px; display: block; }

        /* ── §6 Funnel strip ── */
        .funnel-strip { width: 100%; max-width: 1080px; margin: 0 auto 40px; display: block; }

        /* ── §9 Decision bar ── */
        .decision-bar-wrap { margin: 8px 0 28px; }
        .decision-bar {
          display: flex; width: 100%; height: 44px; border-radius: 8px;
          overflow: hidden; background: ${LINE};
        }
        .decision-segment {
          height: 100%;
          transform: scaleX(0); transform-origin: left center;
          transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 6px; line-height: 1.15;
          color: white; font-family: 'JetBrains Mono', monospace;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
        }
        .decision-segment.in-view { transform: scaleX(1); }
        .decision-legend {
          display: flex; flex-wrap: wrap; gap: 18px;
          margin-top: 14px; font-family: Inter, sans-serif; font-size: 13px;
          color: ${INK2};
        }
        .decision-legend-dot {
          display: inline-block; width: 10px; height: 10px;
          border-radius: 50%; margin-right: 8px; vertical-align: middle;
        }

        /* ── §10 Lesson cards ── */
        .lesson-row {
          display: flex; gap: 28px; align-items: flex-start;
          background: ${CARD}; border: 1px solid ${LINE};
          border-radius: 14px; padding: 24px 26px;
          margin-bottom: 18px;
        }
        .lesson-row:last-child { margin-bottom: 0; }
        @media (max-width: 640px) {
          .lesson-row { flex-direction: column; gap: 14px; padding: 22px; }
        }
        .lesson-svg { width: 140px; height: 110px; flex-shrink: 0; }
        .lesson-body { flex: 1; min-width: 0; }
        .lesson-body p { margin: 0; }

        /* ── §6b Discovery card visuals ── */
        .discovery-svg { width: 100%; height: auto; display: block; margin: 12px 0 6px; }
        .discovery-want-strip {
          margin: 8px 0 4px;
          padding: 12px 14px;
          background: rgba(184, 223, 208, 0.18);
          border: 1px solid rgba(30, 107, 74, 0.12);
          border-radius: 10px;
          color: ${INK2};
        }
        .discovery-want-label {
          display: block;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A}; margin: 0 0 8px;
        }
        .discovery-want-items {
          display: flex; gap: 14px 18px; flex-wrap: wrap;
        }
        .discovery-want-item {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: Inter, sans-serif; font-size: 12px;
          color: ${INK2};
        }
        .discovery-want-item svg { width: 16px; height: 16px; flex-shrink: 0; color: ${A}; }
        .discovery-caption {
          font-family: Inter, sans-serif; font-size: 13px; font-style: italic;
          color: ${INK2}; text-align: center; margin: 6px 4px 10px;
          line-height: 1.5;
        }
        .impact-label { color: ${A} !important; }

        /* ── ZoomFrame: scroll-triggered dramatic zoom on screenshots ── */
        .zoom-frame {
          position: relative; overflow: hidden;
          width: 100%;
          margin: 14px 0 8px;
          border: 1px solid ${LINE};
          border-radius: 12px;
          background: #0f1f1a;
          --focal-x: 50%;
          --focal-y: 50%;
          --zoom: 1.8;
        }
        .zoom-frame img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transform: scale(1);
          transform-origin: var(--focal-x) var(--focal-y);
        }
        .zoom-frame.zoomed-in img {
          animation: zoomLoop 8s infinite;
        }
        @keyframes zoomLoop {
          0%    { transform: scale(1);             animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
          17.5% { transform: scale(var(--zoom));   animation-timing-function: linear; }
          80%   { transform: scale(var(--zoom));   animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0); }
          92.5% { transform: scale(1); }
          100%  { transform: scale(1); }
        }
        .zoom-caption {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 14px 18px 12px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0));
          color: white;
          font-family: Inter, sans-serif; font-size: 12.5px; line-height: 1.45;
          letter-spacing: 0.01em;
          opacity: 0;
          pointer-events: none;
        }
        .zoom-frame.zoomed-in .zoom-caption {
          animation: captionLoop 8s infinite;
        }
        @keyframes captionLoop {
          0%    { opacity: 0; }
          17.5% { opacity: 0; }
          25%   { opacity: 0.96; }
          78%   { opacity: 0.96; }
          85%   { opacity: 0; }
          100%  { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zoom-frame.zoomed-in img {
            animation: none;
            transform: scale(var(--zoom));
          }
          .zoom-frame.zoomed-in .zoom-caption {
            animation: none;
            opacity: 0.96;
          }
        }

        /* ── ZoomFrame variant: zoom in on left edge, pan right while zooming deeper ── */
        .zoom-frame.pan-lr.zoomed-in img {
          animation: zoomPanLR 12s infinite;
        }
        @keyframes zoomPanLR {
          0%   { transform: scale(1);                          transform-origin: 50% 50%;             animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
          15%  { transform: scale(var(--zoom));                transform-origin: 0% var(--focal-y);   animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
          70%  { transform: scale(calc(var(--zoom) * 1.25));   transform-origin: 100% var(--focal-y); animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0); }
          85%  { transform: scale(1);                          transform-origin: 100% var(--focal-y); }
          100% { transform: scale(1);                          transform-origin: 50% 50%; }
        }
        .zoom-frame.pan-lr.zoomed-in .zoom-caption {
          animation: captionLoopLR 12s infinite;
        }
        @keyframes captionLoopLR {
          0%   { opacity: 0; }
          15%  { opacity: 0; }
          22%  { opacity: 0.96; }
          78%  { opacity: 0.96; }
          85%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zoom-frame.pan-lr.zoomed-in img {
            animation: none;
            transform: scale(var(--zoom));
            transform-origin: 0% var(--focal-y);
          }
        }

        /* ── Title + screenshot card ── */
        .screenshot-card {
          background: ${CARD};
          border: 1px solid ${LINE};
          border-radius: 16px;
          padding: 20px 22px;
          margin: 14px 0 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }
        .screenshot-title {
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 17px;
          color: ${INK};
          margin: 0 0 14px;
          letter-spacing: -0.008em;
          line-height: 1.35;
        }
        .screenshot-card .zoom-frame,
        .screenshot-card .wireframe-frame,
        .screenshot-card .hero-shot {
          margin: 0;
        }
        /* Full-bleed variant: title sits at top with padding;
           screenshot fills the card to all other edges, no inner radius. */
        .screenshot-card.full-bleed {
          padding: 0;
          overflow: hidden;
        }
        .screenshot-card.full-bleed .screenshot-title {
          padding: 11px 18px 10px;
          margin: 0;
        }
        .screenshot-card.full-bleed .zoom-frame,
        .screenshot-card.full-bleed .wireframe-frame,
        .screenshot-card.full-bleed .hero-shot {
          border-radius: 0;
          border-left: 0;
          border-right: 0;
          border-bottom: 0;
        }

        /* ── §9 hero shot — escapes .prose so it can be as wide as the other screenshot sections ── */
        .hero-break {
          width: min(1232px, calc(100vw - 48px));
          margin-left: 50%;
          transform: translateX(-50%);
          margin-top: 24px;
          margin-bottom: 28px;
        }
        .hero-shot {
          margin: 18px 0 24px;
          border: 1px solid ${LINE};
          border-radius: 12px;
          overflow: hidden;
          background: #0f1f1a;
        }
        .hero-shot img { width: 100%; height: auto; display: block; }
        .hero-shot figcaption {
          padding: 10px 14px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          letter-spacing: 0.06em; color: ${INK3};
          background: ${CARD};
          border-top: 1px solid ${LINE};
        }

        /* ── Stylized wireframe boxes for §8 BEFORE states ── */
        .wireframe-frame {
          width: 100%; aspect-ratio: 16 / 10;
          margin: 14px 0 8px;
          background: ${CARD};
          border: 1px solid ${LINE};
          border-radius: 12px;
          position: relative; overflow: hidden;
        }
        .wireframe-frame svg { width: 100%; height: 100%; display: block; }

        /* ── §8 Pair 3 hover-swap (plot ↔ log) ── */
        .pair3-swap { position: relative; }
        .pair3-swap > .zoom-frame:nth-of-type(2) {
          position: absolute; inset: 0; margin: 0;
          opacity: 0; transition: opacity 0.45s ease;
        }
        .pair3-swap:hover > .zoom-frame:nth-of-type(2) { opacity: 1; }
        .pair3-swap::after {
          content: '\\21bb HOVER FOR LOG';
          position: absolute; top: 10px; right: 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          font-weight: 700; letter-spacing: 0.1em;
          color: white; background: rgba(0, 0, 0, 0.55);
          padding: 5px 9px; border-radius: 3px;
          pointer-events: none; z-index: 5;
        }
        .pair3-swap:hover::after { content: '\\21bb LOG ACTIVE'; background: rgba(30, 107, 74, 0.92); }

        @keyframes sensorPulse {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }
        .sensor-dot { animation: sensorPulse 3.4s ease-in-out infinite; transform-origin: center; }
        @media (prefers-reduced-motion: reduce) {
          .sensor-dot { animation: none; }
          .data-flow { display: none; }
        }

        .hook-h1 {
          font-family: Inter, sans-serif; font-weight: 800;
          font-size: clamp(28px, 3.6vw, 48px); line-height: 1.1;
          color: ${INK}; margin: 0 0 22px; letter-spacing: -0.02em;
        }
        .hook-kicker {
          font-family: Inter, sans-serif; font-weight: 700;
          font-size: clamp(17px, 1.8vw, 21px); line-height: 1.4;
          color: ${A}; margin: 26px 0 0;
        }
        .hook-transition {
          max-width: 640px; margin: 0 auto; padding: 28px 24px 36px;
          font-family: Inter, sans-serif; font-size: 14px; font-style: italic;
          color: ${INK3}; text-align: center; line-height: 1.65;
        }

        /* ── Brainstorming collage (Artifact #3) ─────────────────────── */
        .brainstorm-collage {
          position: relative;
          width: 100%;
          max-width: 1040px;
          margin: 0 auto;
          aspect-ratio: 16 / 9;
          isolation: isolate;
        }
        .bs-card {
          position: absolute;
          margin: 0;
          background: #ffffff;
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 10px;
          padding: 8px 8px 0;
          box-shadow:
            0 22px 44px -16px rgba(17, 24, 39, 0.28),
            0 6px 14px -6px rgba(17, 24, 39, 0.12);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .bs-card img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .bs-card figcaption {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${INK3};
          text-align: center;
          padding: 8px 6px 9px;
          line-height: 1.4;
        }
        .bs-main {
          width: 60%;
          right: 0;
          top: 4%;
          transform: rotate(1.6deg);
          z-index: 1;
        }
        .bs-tl {
          width: 30%;
          left: 0;
          top: 0;
          transform: rotate(-3deg);
          z-index: 3;
        }
        .bs-br {
          width: 38%;
          left: 18%;
          bottom: 0;
          transform: rotate(-1.4deg);
          z-index: 2;
        }
        .bs-card:hover {
          transform: rotate(0deg) translateY(-4px);
          box-shadow:
            0 30px 56px -16px rgba(17, 24, 39, 0.34),
            0 10px 20px -6px rgba(17, 24, 39, 0.14);
          z-index: 4;
        }
        .bs-caption-strip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${INK3};
          text-align: center;
          margin-top: 20px;
        }
        @media (max-width: 900px) {
          .brainstorm-collage { aspect-ratio: 4 / 3; }
          .bs-main { width: 64%; }
          .bs-tl { width: 34%; }
          .bs-br { width: 44%; left: 14%; }
        }
        @media (max-width: 640px) {
          .brainstorm-collage {
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
            gap: 18px;
          }
          .bs-card {
            position: static;
            width: 100%;
            transform: none;
          }
          .bs-card:nth-child(1) { transform: rotate(-1.5deg); }
          .bs-card:nth-child(2) { transform: rotate(1deg); }
          .bs-card:nth-child(3) { transform: rotate(-0.6deg); }
        }
      `}</style>

      {/* ── 1. OPENING HOOK ─────────────────────────────────────────────── */}
      <div className="hero-wrap">
        <div className="hero-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: AS, color: A,
                fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
                padding: '6px 14px', borderRadius: 20,
              }}>✓ Shipped · MATLAB R2026a</span>
              <a href="https://www.mathworks.com/help/icomm/ug/opcuaexplorer-app.html"
                 target="_blank" rel="noopener noreferrer" className="docs-link">
                Read the docs →
              </a>
            </div>

            <h1 className="hook-h1">
              A factory has 10,000 sensors.<br />
              <span style={{ color: A }}>
                Engineers had no way to explore them<br />
                without writing code.
              </span>
            </h1>

            <P>
              Every conveyor belt, every robotic arm, every temperature probe on a factory floor is constantly broadcasting data — vibration, pressure, heat, fault codes. All of it flows through a single protocol the industrial world agreed on years ago.
            </P>
            <P style={{ marginBottom: 0 }}>
              But the engineers who <em>needed</em> that data — the ones keeping the machines running — couldn&rsquo;t access it without opening a code editor and writing 50 lines of connection logic from memory. Every single time.
            </P>

            <p className="hook-kicker">
              We built the tool that let them just <em>look</em>.
            </p>
          </div>

          <div className="hero-visual" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FactoryHookSVG />
          </div>
        </div>
      </div>

      <div style={{ background: AB }}>
        <p className="hook-transition">
          OPC UA is that protocol. This is the story of how we figured out what the tool should do — and shipped it.
        </p>
      </div>

      {/* ── 2. TL;DR ────────────────────────────────────────────────────── */}
      <div style={{ background: AB, borderTop: `3px solid ${A}`, padding: '40px 24px' }}>
        <div className="tldr-grid">
          <div className="tldr-cell">
            <p className="tldr-label">My Role</p>
            <p className="tldr-value">Lead UX researcher and strategic partner in project planning.</p>
          </div>
          <div className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Methods</p>
            <p className="tldr-value">4 contextual interviews · 5-participant external usability study · 13-area internal design review.</p>
          </div>
          <div className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Scale</p>
            <p className="tldr-value">18 pain points → 14 requirements → 27 findings → 11 feature requests, distilled into 5 insight themes.</p>
          </div>
          <div className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Outcome</p>
            <p className="tldr-value">Shipped in MATLAB R2026a, ~15 months from first interview to release.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 3. MY ROLE ──────────────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>My Role</EyebrowLabel>
        <H2>Strategic partner, not just a study runner</H2>

        <svg
          viewBox="0 0 700 90"
          className="timeline-strip"
          role="img"
          aria-labelledby="roleTimelineTitle"
        >
          <title id="roleTimelineTitle">
            15-month timeline showing five touchpoints I led: Scope (Dec 2023), Interview (Jan&ndash;Feb 2024), Study (Sep&ndash;Oct 2024), Review (Mar 2025), Ship (R2026a).
          </title>
          <line x1="50" y1="32" x2="650" y2="32" stroke={A} strokeWidth="1" strokeOpacity="0.35" strokeDasharray="2 3" />
          {[
            { x: 50,  label: 'Scope',     date: 'Dec 2023' },
            { x: 200, label: 'Interview', date: 'Jan–Feb 2024' },
            { x: 350, label: 'Study',     date: 'Sep–Oct 2024' },
            { x: 500, label: 'Review',    date: 'Mar 2025' },
            { x: 650, label: 'Ship',      date: 'R2026a' },
          ].map((s, i, arr) => {
            const isLast = i === arr.length - 1;
            return (
              <g key={s.label}>
                <PulseDot
                  cx={s.x}
                  cy={32}
                  r={isLast ? 5 : 3.6}
                  ringMax={isLast ? 14 : 10}
                  delay={i * 0.42}
                />
                <text x={s.x} y={58} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="11" fill={INK}>{s.label}</text>
                <text x={s.x} y={72} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={INK3}>{s.date}</text>
              </g>
            );
          })}
        </svg>

        <P>
          I led the research and acted as a strategic partner in project planning — not just running studies, but shaping which problems were worth solving and which weren&rsquo;t. I scoped the discovery phase, ran the contextual interviews, designed and ran the usability study, and presented findings to the developers and the internal design review board. When the team had to choose between competing feature requests, I was the one tying every recommendation back to evidence.
        </P>
      </div>

      <Divider />

      {/* ── 4. WHAT IS OPC UA ───────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>Context</EyebrowLabel>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
          <H2 style={{ margin: 0 }}>What is OPC UA, in plain terms</H2>
          <a href="#why-mattered" className="skip-ctx" style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 14,
            color: A, textDecoration: 'none', borderBottom: `1px solid ${AS}`,
          }}>Skip context →</a>
        </div>
        <P>
          OPC UA is <strong>the language industrial machines speak to each other</strong>. A modern factory has thousands of sensors, motors, valves, controllers, and PLCs (programmable logic controllers — the small computers that run real-time hardware). They all need to share data: temperature, pressure, vibration, on/off state, fault codes. OPC UA is the standardized protocol that lets a sensor from one vendor and a controller from another talk without custom integration work.
        </P>
        <P>
          When software like ours connects to a factory&rsquo;s OPC UA server, what it sees is an <strong>address space</strong> — think of it as the table of contents of a factory&rsquo;s data, with every sensor and motor organized like chapters and sub-chapters. Each individual entry — a single temperature reading, a single valve position — is a <strong>node</strong>. To watch a node change in real time, you create a <strong>subscription</strong>: a magazine subscription, basically. You ask for updates, and they arrive when something changes, instead of you having to keep checking.
        </P>

        <div className="glossary-grid" role="list" aria-label="OPC UA vocabulary used throughout this case study">
          <div className="glossary-tile" role="listitem">
            <svg viewBox="0 0 48 48" className="glossary-icon" aria-hidden="true">
              <rect x="7" y="6" width="34" height="36" rx="3" fill="white" stroke={A} strokeWidth="1.4" />
              <line x1="13" y1="6" x2="13" y2="42" stroke={A} strokeWidth="1.4" strokeOpacity="0.45" />
              <line x1="17" y1="14" x2="36" y2="14" stroke={A} strokeWidth="1.6" strokeLinecap="round" />
              <line x1="20" y1="20" x2="33" y2="20" stroke={A} strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
              <line x1="20" y1="25" x2="33" y2="25" stroke={A} strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
              <line x1="17" y1="31" x2="36" y2="31" stroke={A} strokeWidth="1.6" strokeLinecap="round" />
              <line x1="20" y1="37" x2="30" y2="37" stroke={A} strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
            </svg>
            <p className="glossary-tag">Address space</p>
            <p className="glossary-def">Table of contents of a factory&rsquo;s data — chapters and sub&#8209;chapters.</p>
          </div>
          <div className="glossary-tile" role="listitem">
            <svg viewBox="0 0 48 48" className="glossary-icon" aria-hidden="true">
              <line x1="14" y1="10" x2="14" y2="40" stroke={A} strokeWidth="1.4" strokeOpacity="0.55" />
              <line x1="14" y1="16" x2="24" y2="16" stroke={A} strokeWidth="1.4" strokeOpacity="0.55" />
              <line x1="14" y1="26" x2="24" y2="26" stroke={A} strokeWidth="1.4" strokeOpacity="0.55" />
              <line x1="14" y1="36" x2="24" y2="36" stroke={A} strokeWidth="1.4" strokeOpacity="0.55" />
              <circle cx="27" cy="16" r="2.4" fill={A} fillOpacity="0.35" />
              <circle cx="27" cy="36" r="2.4" fill={A} fillOpacity="0.35" />
              <PulseDot cx={27} cy={26} r={3} ringMax={8} delay={0} />
            </svg>
            <p className="glossary-tag">Node</p>
            <p className="glossary-def">One entry — a single sensor value or valve position.</p>
          </div>
          <div className="glossary-tile" role="listitem">
            <svg viewBox="0 0 48 48" className="glossary-icon" aria-hidden="true">
              <rect x="6" y="13" width="20" height="22" rx="2" fill="white" stroke={A} strokeWidth="1.4" />
              <line x1="10" y1="19" x2="22" y2="19" stroke={A} strokeWidth="1.2" strokeOpacity="0.55" strokeLinecap="round" />
              <line x1="10" y1="24" x2="22" y2="24" stroke={A} strokeWidth="1.2" strokeOpacity="0.55" strokeLinecap="round" />
              <line x1="10" y1="29" x2="18" y2="29" stroke={A} strokeWidth="1.2" strokeOpacity="0.55" strokeLinecap="round" />
              <DashedFlow d="M 28 24 L 38 24" packets={1} packetDuration={1.6} color={A} strokeOpacity={0.7} />
              <PulseDot cx={42} cy={24} r={2.6} ringMax={8} delay={0.5} />
            </svg>
            <p className="glossary-tag">Subscription</p>
            <p className="glossary-def">Ask once; updates arrive whenever the value changes.</p>
          </div>
        </div>

        <div style={{
          borderRadius: 12,
          overflow: 'hidden',
          border: `1px solid ${LINE}`,
          marginTop: 8,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/artifact-digital-twin-flow.svg"
            alt="Flow diagram: ride sensors → OPC UA Server → MATLAB Digital Twin → Predictive Alert"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <Divider />

      {/* ── 5. WHY THIS MATTERED ────────────────────────────────────────── */}
      <div id="why-mattered" className="prose">
        <EyebrowLabel>Motivation</EyebrowLabel>
        <H2>Why this work mattered</H2>
        <P>
          The protocol our customers had been using for two decades — OPC DA — was being deprecated industry-wide. Sensor manufacturers were dropping support. Our own product was scheduled to drop support too. Engineers in industries from amusement-park ride safety to ship-building to energy-grid monitoring had to migrate to OPC UA, and most of them didn&rsquo;t have the programming background to write OPC UA scripts from scratch.
        </P>

        <svg
          viewBox="0 0 820 260"
          className="landscape-svg"
          role="img"
          aria-labelledby="landscapeTitle"
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
          <IsoTile
            cx={140} cy={120}
            w={210} h={84} depth={28}
            topFill="#E8E5DF" rightFill="#CFC9BE" leftFill="#B8B2A6"
            stroke={INK3} strokeOpacity={0.55} topOpacity={0.85}
          />
          <text x={140} y={124} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={INK3} opacity="0.75">OPC DA</text>
          <text x={140} y={222} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={INK3} letterSpacing="0.08em">DEPRECATED</text>

          {/* Tile 2 — 3rd-party OPC UA clients (neutral) */}
          <IsoTile
            cx={410} cy={120}
            w={210} h={84} depth={28}
            topFill="#FAFAF7" rightFill="#ECEAE7" leftFill="#DDD9D4"
            stroke={INK3}
          />
          {/* small vendor cards floating above tile */}
          <g>
            <rect x={383} y={50} width="14" height="10" rx="1.5" fill="white" stroke={INK3} strokeWidth="0.9" />
            <rect x={403} y={47} width="14" height="10" rx="1.5" fill="white" stroke={INK3} strokeWidth="0.9" />
            <rect x={423} y={50} width="14" height="10" rx="1.5" fill="white" stroke={INK3} strokeWidth="0.9" />
          </g>
          <text x={410} y={124} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={INK2}>3rd-party OPC UA</text>
          <text x={410} y={222} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={INK3} letterSpacing="0.08em">EXISTING MARKET</text>

          {/* Tile 3 — MATLAB-native (mint, highlighted) */}
          <ellipse cx={680} cy={132} rx={120} ry={56} fill={A} fillOpacity="0.12" filter="url(#tileGlow)" />
          <IsoTile
            cx={680} cy={120}
            w={210} h={84} depth={28}
            topFill={AS} rightFill="#9CCBB8" leftFill="#82B7A2"
            stroke={A} strokeOpacity={0.7}
          />
          {/* small pulsing accent above the mint tile */}
          <PulseDot cx={680} cy={62} r={3.4} ringMax={11} delay={0.3} />
          <text x={680} y={124} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={A}>MATLAB-native</text>
          <text x={680} y={222} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={A} letterSpacing="0.08em">THE GAP</text>

          {/* Arrows between tiles */}
          <DashedFlow d="M 248 118 L 302 118" packets={1} packetDuration={1.8} color={A} strokeOpacity={0.55} />
          <path d="M 296 114 L 304 118 L 296 122" stroke={A} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

          <DashedFlow d="M 518 118 L 572 118" packets={1} packetDuration={1.8} packetDelay={0.6} color={A} strokeOpacity={0.65} />
          <path d="M 566 114 L 574 118 L 566 122" stroke={A} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <P>
          There was a market full of third-party OPC UA clients already. The question wasn&rsquo;t whether we could build <em>an</em> OPC UA app. It was whether we could build one that would feel like it actually belonged in the hands of an engineer who already lives in MATLAB and Simulink — one that would let them go from &ldquo;I need to read this sensor&rdquo; to &ldquo;I&rsquo;m reading this sensor&rdquo; without writing a line of code.
        </P>

        <PullQuote cite="What we needed to figure out next">
          What were engineers <em>actually</em> trying to do? Not in the abstract — Tuesday&#8209;morning, deadline&#8209;three&#8209;weeks&#8209;out concrete.
        </PullQuote>
      </div>

      <Divider />

      {/* ── 6. HOW I APPROACHED IT ──────────────────────────────────────── */}
      <div style={{ background: CARD, padding: '64px 24px' }}>
        <div className="wide" style={{ padding: 0, maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ marginBottom: 28 }}>
            <EyebrowLabel>Process</EyebrowLabel>
            <H2>How I approached it</H2>
          </div>

          <svg
            viewBox="0 0 960 180"
            className="funnel-strip"
            role="img"
            aria-labelledby="funnelTitle"
          >
            <title id="funnelTitle">
              Research output across the 15-month process: 18 pain points and 14 requirements from discovery, 27 findings from the usability study, 11 feature requests, distilled into 5 insight themes.
            </title>
            {/* baseline */}
            <line x1="60" y1="120" x2="900" y2="120" stroke={INK3} strokeWidth="1" strokeOpacity="0.28" />
            {(() => {
              const bars = [
                { x: 100, count: 18, label: 'Pain points',     phase: 'Discovery' },
                { x: 290, count: 14, label: 'Requirements',    phase: 'Discovery' },
                { x: 480, count: 27, label: 'Findings',        phase: 'Usability' },
                { x: 670, count: 11, label: 'Feature reqs',    phase: 'Synthesis' },
                { x: 860, count: 5,  label: 'Themes',          phase: 'Synthesis' },
              ];
              const maxCount = 27;
              const maxH = 88;
              return bars.map((b, i) => {
                const h = (b.count / maxCount) * maxH;
                const isFinal = i === bars.length - 1;
                const prev = i > 0 ? bars[i - 1] : null;
                return (
                  <g key={b.label}>
                    {prev && (
                      <g>
                        <DashedFlow
                          d={`M ${prev.x + 26} 120 L ${b.x - 30} 120`}
                          packets={0}
                          color={A}
                          strokeOpacity={0.4}
                        />
                        <path
                          d={`M ${b.x - 36} 116 L ${b.x - 28} 120 L ${b.x - 36} 124`}
                          stroke={A}
                          strokeWidth="1.1"
                          strokeOpacity="0.55"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    )}
                    <rect
                      x={b.x - 24}
                      y={120 - h}
                      width={48}
                      height={h}
                      rx={4}
                      fill={isFinal ? A : AS}
                      stroke={A}
                      strokeWidth={isFinal ? 1.5 : 1}
                      strokeOpacity={isFinal ? 1 : 0.7}
                    />
                    <text
                      x={b.x} y={120 - h - 8} textAnchor="middle"
                      fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18"
                      fill={isFinal ? A : INK}
                    >{b.count}</text>
                    <text
                      x={b.x} y={138} textAnchor="middle"
                      fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12"
                      fill={INK2}
                    >{b.label}</text>
                    <text
                      x={b.x} y={156} textAnchor="middle"
                      fontFamily="JetBrains Mono, monospace" fontSize="9"
                      fill={INK3} letterSpacing="0.1em"
                    >{b.phase.toUpperCase()}</text>
                    {isFinal && (
                      <PulseDot cx={b.x} cy={120 - h - 30} r={3} ringMax={10} delay={0} />
                    )}
                  </g>
                );
              });
            })()}
          </svg>

          <div className="phase-grid">
            {[
              {
                label: 'Phase 1 — Discovery',
                stats: 'Dec 2023 – Feb 2024\n4 contextual interviews · 4 industries\n18 pain points · 14 requirements',
                body: 'I scoped a four-week discovery sprint with engineers across four industries: a controls engineer at an automotive supplier, a systems engineer building digital twins of amusement-park rides, an automation engineer doing virtual commissioning of PLCs, and a control engineer at a ship-building company. I built the screener, interview guide, and requirements document, and led synthesis with the developer and design lead.',
              },
              {
                label: 'Phase 2 — Usability Study',
                stats: 'Sep – Oct 2024\n5 external participants · 27 findings\n5 insight themes · 11 feature requests',
                body: 'Six months later, the team had a working prototype. I designed a task-based study with 5 external participants from four industries. The scenario: help a systems engineer at an amusement-park operator read ride vibration sensors and inspect their values. Each session was a contextual inquiry. Twenty-seven findings emerged, distilled into four high-priority themes.',
              },
              {
                label: 'Phase 3 — Design Review',
                stats: 'Mar 2025\n5 senior reviewers · 13 interface areas\npaired feedback + design responses',
                body: 'I presented the prototype and findings to a five-person internal design review with senior product and design leadership. Reviewers walked through 13 interface areas. For each, I tracked their feedback and worked with the developer to write an honest design response — what we agreed with and would change, what we disagreed with and why.',
              },
            ].map((phase) => (
              <div key={phase.label} className="phase-card">
                <div className="phase-label">{phase.label}</div>
                <div className="phase-stats" style={{ whiteSpace: 'pre-line' }}>{phase.stats}</div>
                <div className="phase-divider" />
                <p className="phase-body">{phase.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <div
              className="brainstorm-collage"
              role="group"
              aria-label="Synthesis artifacts from the 15-month process: an affinity-mapping board, a task-flow map, and a competitor-analysis / benchmarking board."
            >
              {/* eslint-disable @next/next/no-img-element */}
              <figure className="bs-card bs-main">
                <img
                  src="/images/opcua/OPC%20UA%20Explorer%20Brainstorming-2.jpg"
                  alt="Affinity-mapping board: 27 usability findings clustered into 5 insight themes, with surrounding context notes."
                  loading="lazy"
                />
                <figcaption>Affinity board · 27 findings → 5 themes</figcaption>
              </figure>
              <figure className="bs-card bs-tl">
                <img
                  src="/images/opcua/OPC%20UA%20Explorer%20Brainstorming.jpg"
                  alt="Task-flow map covering eight engineer tasks across the OPC UA workflow, from server setup to script export."
                  loading="lazy"
                />
                <figcaption>Task-flow map · 8 tasks</figcaption>
              </figure>
              <figure className="bs-card bs-br">
                <img
                  src="/images/opcua/OPC%20UA%20Explorer%20Brainstorming-3.jpg"
                  alt="Competitor analysis and benchmarking: annotated screens from existing OPC UA clients covering running methods, extending signal panels, alarms, and external logging."
                  loading="lazy"
                />
                <figcaption>Competitor analysis · benchmarking</figcaption>
              </figure>
              {/* eslint-enable @next/next/no-img-element */}
            </div>
            <p className="bs-caption-strip">
              Synthesis artifacts — affinity mapping, task flows, and competitor benchmarking across the 15-month process
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 6b. WHAT DISCOVERY TOLD US ──────────────────────────────────── */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <EyebrowLabel>Discovery</EyebrowLabel>
          <H2>What discovery told us</H2>
          <P style={{ marginBottom: 0 }}>
            Before we tested anything, four contextual interviews told us <em>why</em> the existing OPC UA workflow was failing engineers — and which engineer to design for first.
          </P>
        </div>
        <div className="flank-grid">
          {/* Discovery 01 */}
          <div className="flank-card">
            <p className="flank-eyebrow">Discovery 01</p>
            <h4 className="flank-h4">The barrier isn&rsquo;t motivation, it&rsquo;s programming background</h4>

            <svg
              viewBox="0 0 320 175"
              className="discovery-svg"
              role="img"
              aria-labelledby="d1Title"
            >
              <title id="d1Title">
                Persona reframe: the audience shifted away from the OPC UA expert (faded with a red X) toward the domain expert who needs OPC UA data (highlighted with a pulsing accent).
              </title>

              {/* Reframe label centered above the arrow */}
              <text x={160} y={26} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600" fill={INK3} letterSpacing="0.14em">AUDIENCE REFRAME</text>

              {/* DashedFlow arrow center */}
              <DashedFlow d="M 115 75 L 195 75" packets={1} packetDuration={2.0} color={A} strokeOpacity={0.65} />
              <path d="M 188 70 L 198 75 L 188 80" stroke={A} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

              {/* LEFT silhouette: OPC UA expert (faded) */}
              <g opacity="0.45">
                <circle cx={70} cy={62} r="7" fill={INK3} />
                <path d="M 60 73 L 80 73 L 82 104 L 58 104 Z" fill={INK3} />
                <path d="M 64 104 L 63 124" stroke={INK3} strokeWidth="4" strokeLinecap="round" />
                <path d="M 76 104 L 77 124" stroke={INK3} strokeWidth="4" strokeLinecap="round" />
                <text x={48} y={56} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="700" fill={INK3}>{'{ }'}</text>
              </g>
              {/* red X overlay */}
              <line x1={52} y1={58} x2={88} y2={106} stroke="#c2525a" strokeWidth="2" strokeOpacity="0.75" strokeLinecap="round" />
              <line x1={88} y1={58} x2={52} y2={106} stroke="#c2525a" strokeWidth="2" strokeOpacity="0.75" strokeLinecap="round" />

              <text x={70} y={146} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={INK3} letterSpacing="0.1em">OPC UA EXPERT</text>
              <text x={70} y={161} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontStyle="italic" fill={INK3}>(wrong audience)</text>

              {/* RIGHT silhouette: Domain expert (highlighted) */}
              <g>
                <circle cx={240} cy={62} r="7" fill={INK2} />
                <path d="M 230 73 L 250 73 L 252 104 L 228 104 Z" fill={INK2} />
                <path d="M 234 104 L 233 124" stroke={INK2} strokeWidth="4" strokeLinecap="round" />
                <path d="M 246 104 L 247 124" stroke={INK2} strokeWidth="4" strokeLinecap="round" />
                {/* PulseDot accent on chest */}
                <PulseDot cx={240} cy={84} r={2.6} ringMax={9} delay={0.3} />
                {/* gauge icon near head */}
                <circle cx={218} cy={54} r="5.5" fill="white" stroke={A} strokeWidth="1.4" />
                <line x1={218} y1={54} x2={218} y2={50} stroke={A} strokeWidth="1.3" strokeLinecap="round" />
                <line x1={218} y1={54} x2={221} y2={56} stroke={A} strokeWidth="1.3" strokeLinecap="round" />
              </g>

              <text x={240} y={146} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={A} letterSpacing="0.1em">DOMAIN EXPERT</text>
              <text x={240} y={161} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontStyle="italic" fill={INK2}>(who needs OPC UA data)</text>
            </svg>

            <div className="discovery-want-strip">
              <p className="discovery-want-label">What they actually want</p>
              <div className="discovery-want-items">
                <span className="discovery-want-item">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M 12 5 C 5 5 1 12 1 12 C 1 12 5 19 12 19 C 19 19 23 12 23 12 C 23 12 19 5 12 5 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <span>Read a sensor</span>
                </span>
                <span className="discovery-want-item">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span>Inspect a value</span>
                </span>
                <span className="discovery-want-item">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <line x1="12" y1="20" x2="12" y2="5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M 6 11 L 12 5 L 18 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>Generate Script</span>
                </span>
              </div>
            </div>

            <div className="flank-row" style={{ marginTop: 16 }}>
              <p className="flank-label impact-label">Impact →</p>
              <p className="flank-body">Locked the primary persona; established a hard design-review rule — every interaction discoverable without reading docs.</p>
            </div>
          </div>
          {/* Discovery 02 */}
          <div className="flank-card">
            <p className="flank-eyebrow">Discovery 02</p>
            <h4 className="flank-h4">The strongest pull came from the digital-twin engineer, not the bench technician</h4>

            <svg
              viewBox="0 0 320 230"
              className="discovery-svg"
              role="img"
              aria-labelledby="d2Title"
            >
              <title id="d2Title">
                Two-by-two chart of four use cases plotted by frequency of use (horizontal) and OPC UA dependency (vertical). Bench monitoring, predictive maintenance, and energy dashboards sit in the &quot;has alternative&quot; row. Digital-twin sync sits alone in the top-left &quot;no alternative&quot; quadrant — highlighted as the anchor.
              </title>

              {/* anchor quadrant tint (top-left: rare + no alternative) */}
              <rect x={50} y={36} width={120} height={72} fill={A} fillOpacity="0.08" />

              {/* quadrant divider lines (dashed) */}
              <line x1={50} y1={108} x2={290} y2={108} stroke={INK3} strokeWidth="0.9" strokeOpacity="0.32" strokeDasharray="2 3" />
              <line x1={170} y1={36} x2={170} y2={180} stroke={INK3} strokeWidth="0.9" strokeOpacity="0.32" strokeDasharray="2 3" />

              {/* axes */}
              <line x1={50} y1={180} x2={290} y2={180} stroke={INK3} strokeWidth="1.1" />
              <line x1={50} y1={180} x2={50} y2={36} stroke={INK3} strokeWidth="1.1" />

              {/* Y-axis title (rotated) */}
              <text x={18} y={108} fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={INK3} letterSpacing="0.12em" textAnchor="middle" transform="rotate(-90 18 108)">OPC UA DEPENDENCY</text>

              {/* Y-axis tick labels */}
              <text x={44} y={50} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={INK3} letterSpacing="0.05em" textAnchor="end">No alt</text>
              <text x={44} y={174} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={INK3} letterSpacing="0.05em" textAnchor="end">Has alt</text>

              {/* X-axis title */}
              <text x={170} y={210} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={INK3} letterSpacing="0.12em">FREQUENCY IN USE</text>

              {/* X-axis tick labels */}
              <text x={56} y={194} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={INK3} letterSpacing="0.05em" textAnchor="start">Rare</text>
              <text x={284} y={194} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={INK3} letterSpacing="0.05em" textAnchor="end">Common</text>

              {/* Three faded use cases (has alternative) */}
              <g>
                <circle cx={252} cy={154} r={5} fill={AS} stroke={A} strokeOpacity="0.55" strokeWidth="1" />
                <text x={252} y={146} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" fill={INK3}>Bench monitoring</text>
              </g>
              <g>
                <circle cx={210} cy={134} r={5} fill={AS} stroke={A} strokeOpacity="0.55" strokeWidth="1" />
                <text x={210} y={126} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" fill={INK3}>Predictive maint.</text>
              </g>
              <g>
                <circle cx={244} cy={120} r={5} fill={AS} stroke={A} strokeOpacity="0.55" strokeWidth="1" />
                <text x={244} y={112} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" fill={INK3}>Energy dashboards</text>
              </g>

              {/* Digital-twin — THE ANCHOR (top-left, highlighted) */}
              <PulseDot cx={100} cy={68} r={6} ringMax={20} delay={0} color={A} />
              <text x={100} y={54} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={A}>Digital-twin sync</text>

              {/* "the anchor" leader line + label */}
              <line x1={112} y1={76} x2={146} y2={92} stroke={A} strokeWidth="0.9" strokeOpacity="0.7" strokeLinecap="round" />
              <text x={150} y={96} fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={A} letterSpacing="0.1em">THE ANCHOR</text>
            </svg>

            <p className="discovery-caption">The anchor isn&rsquo;t the loudest — it&rsquo;s the one with the worst alternative.</p>

            <div className="flank-row" style={{ marginTop: 16 }}>
              <p className="flank-label impact-label">Impact →</p>
              <p className="flank-body">Amusement-park digital-twin scenario became the canonical demo flow — the connect &rarr; browse &rarr; subscribe &rarr; see-it-update path users meet first.</p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 7. WHAT WE LEARNED ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <EyebrowLabel>Findings</EyebrowLabel>
          <H2>What we learned</H2>
          <P style={{ marginBottom: 0 }}>
            Five high-priority insight themes from the usability study. Each follows the same shape: observation → insight → recommendation → what shipped.
          </P>
        </div>

        {/* Theme 1 — Terminology debt */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 1</div>
              <h3 className="insight-h3">Configure didn&rsquo;t mean configure. Logging didn&rsquo;t mean logging.</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">
                Five separate findings circled the same problem: labels overloaded or contradicted terms engineers already used. <strong>Configure</strong> in the toolstrip read as &ldquo;set up the nodes,&rdquo; not &ldquo;configure the connection.&rdquo; <strong>Stop Monitoring</strong> read as &ldquo;disconnect from the server.&rdquo; <strong>Export Log</strong> got pulled into the gravitational field of &ldquo;logging the data&rdquo; — the engineer&rsquo;s phrase for recording sensor values — so people clicked it expecting their captured data to come out. And in the right pane, <strong>Variable Information</strong> (which held the Data Type field engineers cared about most) sat collapsed behind a disclosure that participants didn&rsquo;t open.
              </p>
              <div className="pull-quote">
                <blockquote>&ldquo;I am already connected to the server. Configure may have user password, security password. I think configure is more of configuring the user ID, password.&rdquo;</blockquote>
                <cite>— UT4, on the Configure / Connect ambiguity</cite>
              </div>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">
                Terminology debt compounds silently. Each label was defensible in isolation; together they formed a vocabulary that didn&rsquo;t survive contact with a working engineer. The worst part of the failure mode: users didn&rsquo;t say &ldquo;I&rsquo;m confused&rdquo; — they confidently took the wrong action and assumed they&rsquo;d succeeded.
              </p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Before — original labels</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-figma-wireframe-1.png"
                  alt="OPC UA Explorer original wireframe — toolstrip showing Configure, Connect, Disconnect, Start Monitoring, Stop Monitoring, Record, Export Log; right pane showing Node Information with Hierarchy Information and Variable Information collapsed behind disclosure arrows."
                  focalX="0%"
                  focalY="0%"
                  zoom={2.0}
                  panLR
                  caption="Before: pan across the toolstrip — Configure on the left, Start/Stop Monitoring and Export Log on the right, all four problem surfaces in one strip."
                />
              </div>
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">After — renamed and re-grouped</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-hero-fullwindow.png"
                  alt="OPC UA Explorer shipped UI — toolstrip with Connection Settings, Add to Table, Remove from Table; right pane with Node Information and Variable Information expanded by default; bottom dock with Activity Log tab."
                  focalX="0%"
                  focalY="0%"
                  zoom={2.0}
                  panLR
                  caption="After: same pan — Connection Settings replaces Configure, Add to Table / Remove from Table replace Start/Stop Monitoring, Export Log is gone."
                />
              </div>
            </div>
          </div>

          {/* Translation table — the heart of the theme */}
          <div style={{ marginTop: 36, paddingTop: 28, borderTop: `1px solid ${LINE}` }}>
            <SubLabel>The four renames, line by line</SubLabel>
            <div style={{ overflowX: 'auto', marginTop: 4 }}>
              <table className="deferred-table">
                <thead>
                  <tr>
                    <th style={{ width: '22%' }}>Label shown</th>
                    <th style={{ width: '38%' }}>What users heard</th>
                    <th style={{ width: '40%' }}>What shipped</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono">Configure</span></td>
                    <td>&ldquo;Set up which nodes to add&rdquo; or &ldquo;the place for user ID and password&rdquo;</td>
                    <td>Renamed to <strong>Connection Settings</strong>. The button now carries the meaning it always implied.</td>
                  </tr>
                  <tr>
                    <td><span className="mono">Start Monitoring</span> / <span className="mono">Stop Monitoring</span></td>
                    <td>&ldquo;Connect&rdquo; / &ldquo;Disconnect from the session&rdquo;</td>
                    <td>Renamed to <strong>Add to Table</strong> / <strong>Remove from Table</strong>. The verb describes the effect on the visible UI, not the abstract subscription.</td>
                  </tr>
                  <tr>
                    <td><span className="mono">Export Log</span> + <span className="mono">Log</span> tab</td>
                    <td>&ldquo;Export my recorded data&rdquo; — &ldquo;logging&rdquo; meant captured sensor values, not events</td>
                    <td><strong>Export Log removed entirely.</strong> The bottom-dock Log tab renamed to <strong>Activity Log</strong> so its scope is unambiguous.</td>
                  </tr>
                  <tr>
                    <td><span className="mono">Variable Information</span> <span style={{ color: INK3 }}>(collapsed)</span></td>
                    <td>&ldquo;Where&rsquo;s the data type?&rdquo; — the field engineers cared about most lived behind a disclosure</td>
                    <td><strong>Expanded by default.</strong> Data Type is now visible at first glance alongside the rest of Node Information.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Rename to verbs engineers say at the bench. Delete the action whose <em>name</em> is the source of the confusion rather than renaming it. And don&rsquo;t hide the metadata users came to see.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill>✓ Shipped</Pill>
              </div>
              <p className="insight-body">All four changes landed in the next build. The most consequential move wasn&rsquo;t a rename — it was deleting <strong>Export Log</strong> outright. Its presence was the entire reason &ldquo;logging&rdquo; collided with &ldquo;recording.&rdquo; A rename would have kept the trap; removing it closed it.</p>
            </div>
          </div>
        </div>

        {/* Theme 2 — Panel order */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 2</div>
              <h3 className="insight-h3">Engineers expected the action panel above the metadata, not below it</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Every participant who tried to read a sensor value scrolled past the &ldquo;Node Function&rdquo; panel without seeing it. They were drawn to the larger &ldquo;Node Information&rdquo; panel — which only displays metadata — and then asked, &ldquo;Where do I read the value?&rdquo;</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">We had laid the panels out in the order the data structure suggested (&ldquo;here&rsquo;s what this node is, then here&rsquo;s what you can do with it&rdquo;) instead of the order the user&rsquo;s intent demanded.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Detail pane after the swap</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme1-panel-order-after.png"
                  alt="OPC UA Explorer detail pane — Node Function (Read tab) above Node Information."
                  focalX="100%"
                  focalY="28%"
                  zoom={1.8}
                  caption="Right panel column, shipped: Node Function (top) → Node Information (below). Generate Script in the toolbar."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Swap the two panels. Action above metadata. Don&rsquo;t try to teach the user a new mental model when their existing one is already correct.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill>✓ Shipped</Pill>
              </div>
              <p className="insight-body">Panels swapped in the next build. We also added a <strong>Generate Script</strong> button — validated against the historical-data export pattern that surfaced six times across the study. A click produces a MATLAB Live Script that recreates the session as code.</p>
            </div>
          </div>
        </div>

        {/* Theme 3 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 3</div>
              <h3 className="insight-h3">The address space was a tree without a search box, and engineers got lost</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Real factory address spaces have thousands of nodes. Participants spent 30–90 seconds per task hunting for nodes by hand-expanding tree branches.</p>
              <div className="pull-quote">
                <blockquote>&ldquo;This is like opening every folder on a corporate file server to find one document.&rdquo;</blockquote>
                <cite>— Participant struggling with the tree-without-search</cite>
              </div>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">An address space without search is a library without a card catalog. The tree was correct; what was missing was a way <em>into</em> the tree. Participants who&rsquo;d used a competitor product — UA Expert — kept reaching for the search bar that didn&rsquo;t exist.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Address Space tree, dense and unsearchable</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme2-address-space-no-search.png"
                  alt="OPC UA Explorer address space — dense tree expanded several levels deep, with no search bar above it."
                  focalX="14%"
                  focalY="22%"
                  zoom={1.8}
                  caption="Address Space pane, shipped: a tree of hundreds of nodes — and no search input above the header."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Add a search bar at the top of the address space. Match nodes by name and by browse path. Ship search on the API side first (where it&rsquo;s cheap), then bring it into the app.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill shipped={false}>~ Partially shipped</Pill>
              </div>
              <p className="insight-body">API-side search shipped in the same release. In-app search was deliberately de-scoped to a follow-up — we needed more data on which search behaviors mattered most (substring vs. fuzzy, recent vs. favorites).</p>
            </div>
          </div>
        </div>

        {/* Theme 4 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 4</div>
              <h3 className="insight-h3">Engineers wrote to read-only nodes and got cryptic errors</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Three of the five participants tried to write a value to a node that was server-side read-only. The app accepted the input, sent the write, and surfaced a vague <span className="mono">BadWriteNotSupported</span> error from the server. Two participants assumed they&rsquo;d typed the value wrong and tried again. One walked away frustrated.</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">The mistake wasn&rsquo;t a typing error. It was a discoverability failure — the app gave no visual signal that a node was read-only <em>before</em> you tried to write to it. Engineers who <em>know</em> read/write permissions exist still don&rsquo;t carry that knowledge to every node they look at; they expect the interface to surface it.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Node Function — Read and Write tabs</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme3-readonly-cells-after.png"
                  alt="OPC UA Explorer Node Function panel showing both Read and Write tabs for a writable node, ConveyorSpeed_Setpoint."
                  focalX="86%"
                  focalY="22%"
                  zoom={1.7}
                  caption="Node Function panel, shipped: Write tab appears only when the node permits it. Read-only nodes show Read alone."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Visually grey out cells in the monitoring table for read-only nodes. Don&rsquo;t change the underlying behavior — just close the loop on the affordance.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill>✓ Shipped</Pill>
              </div>
              <p className="insight-body">The Node Function panel now exposes a <strong>Write</strong> tab only when the selected node permits writing. Read-only nodes show only a <strong>Read</strong> tab — so the user never starts a write the server will reject.</p>
            </div>
          </div>
        </div>

        {/* Theme 5 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 5</div>
              <h3 className="insight-h3">Critical metadata was missing where engineers looked for it</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">When a participant inspected a node, they expected to see four things together: the value, the unit (°C or psi or m/s²), the data quality (is this reading trustworthy right now?), and the sampling frequency (how fresh is this number?). The app showed value and partial metadata; the rest required clicking into a separate panel.</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Engineers don&rsquo;t read sensor values in the abstract. A temperature reading without a unit and a quality flag is decoration, not data. The app was forcing them to assemble context across multiple panels every time they checked a value.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Monitoring table with Quality &amp; Timestamp inline</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme4-inline-metadata-after.png"
                  alt="OPC UA Explorer monitoring table showing Node, Value, Quality, and Timestamp columns inline."
                  focalX="58%"
                  focalY="24%"
                  zoom={1.7}
                  caption="Monitoring table, shipped: Quality and Timestamp inline beside every Value. Units live in Node Information."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Surface unit, data quality, and last-update timestamp inline with every value, in the monitoring table. Make the answer to &ldquo;is this reading trustworthy right now?&rdquo; a glance, not a workflow.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill>✓ Shipped</Pill>
              </div>
              <p className="insight-body"><strong>Quality</strong> and <strong>timestamp</strong> shipped as inline columns. <strong>Units</strong> were deliberately kept <em>out</em> of the table; they sit in the Node Information panel as secondary data. Mixing unit strings into the table would force every Generate-Script consumer to strip them before computation — the secondary-data placement preserves both context and the numeric pipeline.</p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 8. WHAT THE DESIGN REVIEW SURFACED ──────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <EyebrowLabel>Internal Design Review</EyebrowLabel>
          <H2>What the design review surfaced</H2>
          <P style={{ marginBottom: 0 }}>
            The Internal Design Review wasn&rsquo;t a checkpoint — it was the round where I had to make decisions about <em>what to ship now, what to defer, and what to push back on</em> with five senior reviewers across engineering and design. These three moments are where the work was less &ldquo;research findings&rdquo; and more &ldquo;strategic partner in project planning.&rdquo;
          </P>
        </div>
        <div className="idr-stack">
          {/* IDR 01 */}
          <div className="flank-card">
            <p className="flank-eyebrow">IDR Moment 01</p>
            <h4 className="flank-h4">I advocated for a Generate-Script button before anyone asked for it</h4>
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">The product team&rsquo;s instinct was to defer export functionality — &ldquo;they can copy it manually, or use the API for that.&rdquo; From the usability study, I&rsquo;d already seen three of five participants reach for some equivalent of &ldquo;save this to a file&rdquo; or &ldquo;get this into a script&rdquo; within the first five minutes.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">My Stance</p>
              <p className="flank-body">I argued — with the usability evidence behind it — that export was the moment the app stopped being a viewer and started being a tool. Without it, every digital-twin use case would have the engineer dropping back to the API the moment they had data they wanted to keep. I framed it as a v1 must-have, not a stretch goal.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Outcome</p>
              <p className="flank-body">Shipped in R2026a. The Generate-Script button sits in the toolbar under CODE GENERATION; a click produces a MATLAB Live Script with the session reconstructed as code.</p>
            </div>
            <div className="screenshot-card" style={{ marginTop: 18 }}>
              <h5 className="screenshot-title">The Generate Script artifact</h5>
              <ZoomFrame
                src="/images/opcua/opcua-export-to-matlab.png"
                alt="The MATLAB Live Script auto-generated by Generate Script, with sections Create OPC UA Client, Connect OPC UA Client, and Subscribe to OPC UA Nodes."
                focalX="50%"
                focalY="40%"
                zoom={1.6}
                caption="The artifact: a Live Script that reconstructs the user's session as runnable MATLAB."
              />
            </div>
          </div>
          {/* IDR 02 */}
          <div className="flank-card">
            <p className="flank-eyebrow">IDR Moment 02</p>
            <h4 className="flank-h4">I defended deferring in-app address-space search, even though five reviewers wanted it</h4>
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">Four of five reviewers and three of five usability participants asked for in-app search of the address space. The temptation to add it for v1 was strong. But the engineering cost was substantial — the address-space tree isn&rsquo;t always fully loaded; search has to handle partial-load semantics and permissions — and we were already at scope on v1.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">My Stance</p>
              <p className="flank-body">I pushed for shipping API-side search in v1 and deferring the in-app version. The digital-twin engineer who needs to find a specific node fast is also the one most likely to be scripting. Holding v1 for in-app search would have delayed export, the read/write affordance fix, and the panel-order swap — all of which had stronger usability evidence.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Outcome</p>
              <p className="flank-body">API-side search shipped in R2026a. In-app search is on the roadmap for the next release with stronger discoverability scaffolding — recents, favorites, filter chips — informed by v1 telemetry.</p>
            </div>
          </div>
          {/* IDR 03 */}
          <div className="flank-card">
            <p className="flank-eyebrow">IDR Moment 03</p>
            <h4 className="flank-h4">I pushed back on the original panel order</h4>
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">The first design draft had the Node Information panel above Node Function. A principal engineer noted, almost in passing, that this was &ldquo;probably right because information comes before action.&rdquo; From the usability study, four of five participants had hit the bottom panel first looking for what to do, then scrolled up — the opposite mental model.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">My Stance</p>
              <p className="flank-body">I proposed swapping the order: Node Function (what can I do here) above Node Information (what is this). The argument wasn&rsquo;t about hierarchy or convention — it was that tools answer &ldquo;what can I do&rdquo; before &ldquo;what is this,&rdquo; especially for users who already know what an OPC UA node is.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Outcome</p>
              <p className="flank-body">Panels were swapped — the cleanest before/after in the shipped app.</p>
            </div>
            <div className="before-after-pair" style={{ marginTop: 22, marginBottom: 0 }}>
              <div className="before-after-grid">
                <div>
                  <div className="ba-label">Before</div>
                  <div className="screenshot-card full-bleed">
                    <h5 className="screenshot-title">Panels stacked, Function panel buried</h5>
                    <figure className="wireframe-frame">
                      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="idr3BeforeTitle">
                        <title id="idr3BeforeTitle">Before state: Node Information panel large on top; Node Function panel small below and partially off-screen. Red dashed eyeline marks where 4 of 5 users stopped scrolling.</title>
                        <rect x="20" y="20" width="280" height="108" rx="4" fill="white" stroke={INK3} strokeOpacity="0.4" strokeWidth="1" />
                        <text x="30" y="36" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={INK2}>Node Information</text>
                        {[52, 62, 72, 82, 92, 102, 112].map((y, i) => (
                          <line key={y} x1="30" y1={y} x2={170 + ((i * 23) % 80)} y2={y} stroke={INK3} strokeOpacity="0.3" strokeWidth="2" />
                        ))}
                        <line x1="0" y1="136" x2="320" y2="136" stroke="#c2525a" strokeWidth="1.5" strokeDasharray="4 3" />
                        <text x="312" y="132" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="700" fill="#c2525a" letterSpacing="0.05em">SCROLL STOPS HERE · 4 of 5</text>
                        <rect x="20" y="146" width="280" height="52" rx="4" fill="white" stroke={INK3} strokeOpacity="0.35" strokeWidth="1" opacity="0.55" />
                        <text x="30" y="162" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={INK2} opacity="0.6">Node Function</text>
                        <line x1="30" y1="176" x2="180" y2="176" stroke={INK3} strokeOpacity="0.22" strokeWidth="2" />
                      </svg>
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="ba-label">After</div>
                  <div className="screenshot-card full-bleed">
                    <h5 className="screenshot-title">Function on top, Information below</h5>
                    <ZoomFrame
                      src="/images/opcua/opcua-theme1-panel-order-after.png"
                      alt="OPC UA Explorer right pane — Node Function on top, Node Information below."
                      focalX="86%"
                      focalY="32%"
                      zoom={1.6}
                    />
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', color: INK3, margin: '10px 0 0', lineHeight: 1.5 }}>
                Node Information was the largest panel by default; Node Function (the action panel) sat below it, off-screen on smaller monitors. After: action panel on top, metadata below, with a Generate Script button added.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 9. OUTCOME ──────────────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>Outcome</EyebrowLabel>
        <H2>What shipped — and what didn&rsquo;t</H2>
        <P>
          The OPC UA Explorer shipped in <strong>MATLAB R2026a</strong>, ~15 months after the first contextual interview. You can read its public documentation at{' '}
          <a href="https://www.mathworks.com/help/icomm/ug/opcuaexplorer-app.html"
             target="_blank" rel="noopener noreferrer" className="docs-link">
            mathworks.com/help/icomm/ug/opcuaexplorer-app.html
          </a>.
        </P>
        <P>
          Beyond the headline shipped features, the research generated an <strong>11-item feature-request pipeline</strong> that has shaped the next two releases. As a strategic partner in project planning, I helped the team decide what <em>not</em> to ship in v1 just as much as what to ship.
        </P>

        <div className="hero-break">
          <div className="screenshot-card full-bleed">
            <h5 className="screenshot-title">OPC UA Explorer, MATLAB R2026a</h5>
            <figure className="hero-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/opcua/opcua-hero-fullwindow.png"
                alt="The shipped OPC UA Explorer app in MATLAB R2026a — address space on the left, monitoring table populated, Plot panel showing live data, Node panels on the right."
              />
              <figcaption>OPC UA Explorer, MATLAB R2026a — Vehicle Production Factory demo server.</figcaption>
            </figure>
          </div>
        </div>

        <DecisionBar />

        <div style={{ overflowX: 'auto', marginTop: 32 }}>
          <table className="deferred-table">
            <thead>
              <tr>
                <th>Feature request</th>
                <th>Decision</th>
                <th>Rationale</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['In-app address-space search', 'Deferred to next release', 'Search shipped on the API first; in-app search needed more data on which behaviors mattered'],
                ['Right-click contextual menus on monitoring table rows', 'Deferred — enhancement request to underlying UI table component', 'Required platform-level change; not blocked on UX'],
                ['Cross-correlation plots between two nodes', 'Deferred to a later release', 'Strong signal but small sample of users requesting it'],
                ['Custom alarms on monitoring values', 'Deferred — covered by Simulink workflow today', 'Use case existed but had a viable workaround'],
                ['Save/load app session layout', 'Deferred — enhancement request to platform', 'Required Hardware Manager–level change'],
                ['Five other smaller asks', 'Deferred or absorbed into existing features', 'Mix of low frequency, high cost, or already in the roadmap'],
              ].map(([feat, dec, rat]) => (
                <tr key={feat}>
                  <td style={{ fontWeight: 500, color: INK, maxWidth: 200 }}>{feat}</td>
                  <td style={{ color: INK2 }}>{dec}</td>
                  <td style={{ color: INK3 }}>{rat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontFamily: 'Inter', fontSize: 15, fontStyle: 'italic', color: INK3, margin: '16px 0 0', lineHeight: 1.6 }}>
          Saying no with reasons is part of the job. Every deferral above traces back to a specific finding from the usability study or design review — not to engineering fatigue.
        </p>
      </div>

      <Divider />

      {/* ── 10. WHAT I'D DO DIFFERENTLY ─────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>Reflection</EyebrowLabel>
        <H2>What I&rsquo;d do differently</H2>

        <div className="lesson-row">
          <svg viewBox="0 0 140 110" className="lesson-svg" role="img" aria-labelledby="lesson1Title">
            <title id="lesson1Title">Clock with a counter-clockwise arrow, pointing to a faint silhouette of the next product (OPC UA Server) — the lesson was applied earlier on the follow-up project.</title>
            {/* clock */}
            <circle cx="26" cy="50" r="18" fill="white" stroke={A} strokeWidth="1.4" />
            <line x1="26" y1="50" x2="26" y2="38" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="50" x2="36" y2="55" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
            {/* rewind arc — quarter-circle above-left of clock */}
            <path d="M 16 22 Q 4 22 4 36" fill="none" stroke={A} strokeWidth="1.6" strokeOpacity="0.8" strokeLinecap="round" />
            <path d="M 1 31 L 4 36 L 7 31" fill="none" stroke={A} strokeWidth="1.6" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" />
            {/* dashed arrow → */}
            <line x1="50" y1="50" x2="84" y2="50" stroke={A} strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" />
            <path d="M 80 46 L 86 50 L 80 54" fill="none" stroke={A} strokeWidth="1.3" strokeOpacity="0.75" strokeLinecap="round" strokeLinejoin="round" />
            {/* faint next-product silhouette */}
            <g opacity="0.5">
              <rect x="92" y="34" width="40" height="32" rx="3" fill="white" stroke={INK2} strokeWidth="1.2" />
              <line x1="97" y1="44" x2="127" y2="44" stroke={INK2} strokeWidth="0.9" />
              <line x1="97" y1="50" x2="127" y2="50" stroke={INK2} strokeWidth="0.9" />
              <line x1="97" y1="56" x2="127" y2="56" stroke={INK2} strokeWidth="0.9" />
              <circle cx="124" cy="44" r="1.5" fill={A} />
            </g>
            <text x="112" y="84" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={INK3} letterSpacing="0.08em">OPC UA SERVER</text>
            <text x="112" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontStyle="italic" fill={INK3}>(applied next)</text>
          </svg>
          <div className="lesson-body">
            <div className="reflection-num">One.</div>
            <P style={{ marginBottom: 0 }}>
              I&rsquo;d start the strategic-planning conversation earlier. The research drove the right product, but I waited until I had data to bring strong opinions to the form-factor and scoping discussions. If I&rsquo;d had this lens from week one, I&rsquo;d have run a structured form-factor workshop <em>before</em> the usability study — committing the team to &ldquo;this will be an app, not a Simulink block, because here&rsquo;s the reasoning&rdquo; before we sunk months into a particular UI direction. (For our next product — the OPC UA Server — that&rsquo;s exactly what we did. The discipline came directly from this case.)
            </P>
          </div>
        </div>

        <div className="lesson-row">
          <svg viewBox="0 0 140 110" className="lesson-svg" role="img" aria-labelledby="lesson2Title">
            <title id="lesson2Title">Two participant silhouettes representing an early micro-study leading via dashed arrow to five silhouettes representing the full study.</title>
            {/* left group: 2 silhouettes */}
            {[0, 14].map((x, i) => (
              <g key={i} transform={`translate(${10 + x}, 30)`}>
                <circle cx="6" cy="6" r="4.5" fill={A} fillOpacity="0.85" />
                <path d="M 0 14 L 12 14 L 13 30 L -1 30 Z" fill={A} fillOpacity="0.85" />
              </g>
            ))}
            <text x="24" y="86" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={INK}>2–3</text>
            <text x="24" y="100" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={INK3} letterSpacing="0.08em">MICRO-STUDY</text>

            {/* dashed arrow */}
            <line x1="50" y1="46" x2="80" y2="46" stroke={A} strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" />
            <path d="M 76 42 L 82 46 L 76 50" fill="none" stroke={A} strokeWidth="1.3" strokeOpacity="0.75" strokeLinecap="round" strokeLinejoin="round" />

            {/* right group: 5 smaller silhouettes */}
            {[0, 9, 18, 27, 36].map((x, i) => (
              <g key={i} transform={`translate(${88 + x}, 34)`}>
                <circle cx="4" cy="4" r="3.2" fill={INK2} fillOpacity="0.78" />
                <path d="M -1 10 L 9 10 L 10 24 L -2 24 Z" fill={INK2} fillOpacity="0.78" />
              </g>
            ))}
            <text x="112" y="86" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill={INK}>5</text>
            <text x="112" y="100" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={INK3} letterSpacing="0.08em">FULL STUDY</text>
          </svg>
          <div className="lesson-body">
            <div className="reflection-num">Two.</div>
            <P style={{ marginBottom: 0 }}>
              I&rsquo;d run a smaller, faster usability round earlier — with 2 or 3 participants — to validate the prototype skeleton before the full 5-participant study. Several of the 27 findings were structural enough that an early micro-study would have caught them at a fraction of the cost. Five-participant studies are the right tool for &ldquo;is this ready to ship?&rdquo; — they&rsquo;re a heavy hammer for &ldquo;is this on the right track?&rdquo;
            </P>
          </div>
        </div>
      </div>

      {/* ── 11. FOOTER ──────────────────────────────────────────────────── */}
      <div className="cs-footer">
        <div className="cs-footer-inner">
          <Link href="/#work" className="footer-link">← Back to portfolio</Link>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: INK3, margin: '0 0 6px' }}>
              Next case study
            </p>
            <Link href="/work/ni-daqmx" className="footer-link">NI-DAQmx API Design →</Link>
            <p style={{ fontFamily: 'Inter', fontSize: 13, color: INK3, margin: '6px 0 0', lineHeight: 1.5 }}>
              11 participants · function-based vs. class-based · shipped as calldaqlib in MATLAB R2026a
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OPCUAExplorerPage() {
  return (
    <PasswordGate accentColor="#1E6B4A" softColor="#B8DFD0">
      <OPCUAContent />
    </PasswordGate>
  );
}
