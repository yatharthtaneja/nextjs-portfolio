'use client';

import { useEffect, useState } from 'react';
import { A, CARD, INK2, INK3 } from './theme';

// Isometric factory floor: conveyor + arm + tank + motor + press + cabinet,
// each with a sensor dot that connects up to a question-marked server node.
// SMIL packet/ring animations gate on prefers-reduced-motion in JS because
// CSS media queries don't reach <animate*> elements.
export default function FactoryHookSVG() {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setAnimate(!mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // ── Coordinate system ──────────────────────────────────────────────
  // viewBox 600 × 440. Floor rhombus corners:
  //   F (front) = (300, 360)  R (right) = (500, 280)
  //   B (back)  = (300, 200)  L (left)  = (100, 280)
  // Right-axis unit vector r ≈ (1, -0.43); left-axis l ≈ (-1, -0.43).
  const serverX = 300;
  const serverY = 95;
  // Slightly varied per-sensor durations so the 6 staggered loops don't
  // resolve into a visible "wave" pattern that gives away the trick.
  const packetDurations = [2.1, 2.5, 2.3, 2.6, 2.2, 2.4];
  const ringDurations = [2.0, 2.3, 2.1, 2.4, 2.2, 2.5];

  // Sensors — one per machine, placed visibly on the machine body.
  const sensors: Array<[number, number]> = [
    [197, 232],   // ARM gripper
    [305, 192],   // TANK top
    [368, 218],   // PRESS crossbar
    [310, 270],   // MOTOR front face
    [267, 315],   // CONVEYOR side panel
    [445, 232],   // CABINET front face
  ];

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
      <g stroke="#c8c2b6" strokeWidth="0.7" opacity="0.85">
        <line x1="166.67" y1="306.67" x2="366.67" y2="226.67" />
        <line x1="233.33" y1="333.33" x2="433.33" y2="253.33" />
        <line x1="366.67" y1="333.33" x2="166.67" y2="253.33" />
        <line x1="433.33" y1="306.67" x2="233.33" y2="226.67" />
      </g>

      {/* MACHINES — drawn back-to-front by iso depth (smaller y first) */}

      {/* ▷ TANK */}
      <g>
        <line x1="284" y1="233" x2="282" y2="247" stroke={INK3} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="300" y1="237" x2="300" y2="252" stroke={INK3} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="316" y1="233" x2="318" y2="247" stroke={INK3} strokeWidth="1.3" strokeLinecap="round" />
        <ellipse cx="300" cy="232" rx="20" ry="6" fill="#DDD9D4" stroke={INK3} strokeWidth="1.3" />
        <path d="M 280 232 L 280 195 A 20 6 0 0 1 320 195 L 320 232" fill={CARD} stroke={INK3} strokeWidth="1.3" />
        <path d="M 280 232 A 20 6 0 0 0 320 232" fill="none" stroke={INK3} strokeWidth="1.3" />
        <ellipse cx="300" cy="195" rx="20" ry="6" fill="#FAFAF7" stroke={INK3} strokeWidth="1.3" />
        <ellipse cx="300" cy="193" rx="7" ry="2" fill="#ECEAE7" stroke={INK3} strokeWidth="0.9" />
        <path d="M 280 215 A 20 6 0 0 0 320 215" fill="none" stroke={INK3} strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* ▷ PRESS */}
      <g stroke={INK3} strokeWidth="1.3">
        <path d="M 367 263.32 L 391 253 L 391 247 L 367 257.32 Z" fill="#ECEAE7" />
        <path d="M 367 263.32 L 343 253 L 343 247 L 367 257.32 Z" fill="#DDD9D4" />
        <path d="M 367 257.32 L 391 247 L 367 236.68 L 343 247 Z" fill="#FAFAF7" />
        <rect x="356" y="218" width="3" height="32" fill="#DDD9D4" />
        <rect x="377" y="222" width="3" height="32" fill="#DDD9D4" />
        <path d="M 355 218 L 380 222 L 380 217 L 355 213 Z" fill="#FAFAF7" />
        <rect x="364" y="222" width="6" height="14" fill="#ECEAE7" />
        <rect x="365" y="236" width="4" height="6" fill={INK3} />
        <path d="M 360 250 L 374 247 L 374 244 L 360 247 Z" fill="#ECEAE7" />
      </g>

      {/* ▷ CABINET */}
      <g>
        <path d="M 437 290.32 L 457 281.72 L 457 201.72 L 437 210.32 Z" fill="#ECEAE7" stroke={INK3} strokeWidth="1.3" />
        <path d="M 437 290.32 L 409 278.28 L 409 198.28 L 437 210.32 Z" fill="#DDD9D4" stroke={INK3} strokeWidth="1.3" />
        <path d="M 437 210.32 L 457 201.72 L 429 189.68 L 409 198.28 Z" fill="#FAFAF7" stroke={INK3} strokeWidth="1.3" />
        <path d="M 415 278.5 L 431 271.6 L 431 232.6 L 415 239.5 Z" fill="#1F2937" stroke={INK3} strokeWidth="0.7" />
        <circle cx="419" cy="250" r="1.4" fill={A} />
        <circle cx="423" cy="248" r="1.4" fill="#9CA3AF" />
        <circle cx="427" cy="246" r="1.4" fill="#9CA3AF" />
        <line x1="416" y1="263" x2="430" y2="257" stroke="#9CA3AF" strokeWidth="0.55" />
        <line x1="416" y1="267" x2="430" y2="261" stroke="#9CA3AF" strokeWidth="0.55" />
        <line x1="416" y1="271" x2="430" y2="265" stroke="#9CA3AF" strokeWidth="0.55" />
      </g>

      {/* ▷ ROBOTIC ARM */}
      <g stroke={INK3} strokeWidth="1.3" strokeLinecap="round" fill={CARD}>
        <path d="M 167 290.32 L 191 280 L 191 272 L 167 282.32 Z" fill="#ECEAE7" />
        <path d="M 167 290.32 L 143 280 L 143 272 L 167 282.32 Z" fill="#DDD9D4" />
        <path d="M 167 282.32 L 191 272 L 167 261.68 L 143 272 Z" fill="#FAFAF7" />
        <rect x="162" y="232" width="9" height="40" fill={CARD} />
        <circle cx="167" cy="232" r="4.5" fill="#ECEAE7" />
        <line x1="167" y1="232" x2="195" y2="221" strokeWidth="5" />
        <line x1="167" y1="232" x2="195" y2="221" stroke="#ECEAE7" strokeWidth="3.2" />
        <circle cx="195" cy="221" r="3.2" fill={CARD} />
        <line x1="195" y1="221" x2="198" y2="232" strokeWidth="2.8" />
        <path d="M 196 232 L 194 240 M 200 232 L 202 240" strokeWidth="1.8" fill="none" />
      </g>

      {/* ▷ MOTOR */}
      <g>
        <path d="M 284 294.62 L 334 273.12 L 334 247.12 L 284 268.62 Z" fill={CARD} stroke={INK3} strokeWidth="1.3" />
        <path d="M 284 294.62 L 266 286.88 L 266 260.88 L 284 268.62 Z" fill="#DDD9D4" stroke={INK3} strokeWidth="1.3" />
        <path d="M 284 268.62 L 334 247.12 L 316 239.38 L 266 260.88 Z" fill="#FAFAF7" stroke={INK3} strokeWidth="1.3" />
        {[0.18, 0.34, 0.50, 0.66, 0.82].map((t, i) => {
          const x = 284 + 50 * t;
          const yBot = 294.62 - 21.5 * t;
          const yTop = 268.62 - 21.5 * t;
          return <line key={i} x1={x} y1={yBot} x2={x} y2={yTop} stroke={INK3} strokeWidth="0.7" opacity="0.7" />;
        })}
        <ellipse cx="275" cy="281.75" rx="3.2" ry="6" fill="#ECEAE7" stroke={INK3} strokeWidth="0.7" />
        <ellipse cx="324" cy="260.25" rx="3.2" ry="6" fill="#FAFAF7" stroke={INK3} strokeWidth="0.7" />
        <line x1="334" y1="260" x2="342" y2="256.6" stroke={INK3} strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* ▷ CONVEYOR */}
      <g>
        <path d="M 281 350.63 L 341 324.83 L 341 306.83 L 281 332.63 Z" fill="#ECEAE7" stroke={INK3} strokeWidth="1.3" />
        <path d="M 281 350.63 L 259 341.17 L 259 323.17 L 281 332.63 Z" fill="#DDD9D4" stroke={INK3} strokeWidth="1.3" />
        <path d="M 281 332.63 L 341 306.83 L 319 297.37 L 259 323.17 Z" fill="#FAFAF7" stroke={INK3} strokeWidth="1.3" />
        <ellipse cx="278" cy="324.5" rx="3.6" ry="1.5" fill="#DDD9D4" stroke={INK3} strokeWidth="0.6" />
        <ellipse cx="300" cy="315" rx="3.6" ry="1.5" fill="#DDD9D4" stroke={INK3} strokeWidth="0.6" />
        <ellipse cx="322" cy="305.5" rx="3.6" ry="1.5" fill="#DDD9D4" stroke={INK3} strokeWidth="0.6" />
        <path d="M 268 329 L 278 324.7 L 278 299.7 L 268 304 Z" fill="#ECEAE7" stroke={INK3} strokeWidth="1.0" />
        <path d="M 268 329 L 254 323 L 254 298 L 268 304 Z" fill="#DDD9D4" stroke={INK3} strokeWidth="1.0" />
        <path d="M 268 304 L 278 299.7 L 264 293.7 L 254 298 Z" fill="#FAFAF7" stroke={INK3} strokeWidth="1.0" />
        <path d="M 257 320 L 275 312.3 L 275 304.3 L 257 312 Z" fill="#1F2937" />
      </g>

      {/* CONNECTION LINES (drawn AFTER machines so they cross visibly) */}
      <g stroke={A} strokeWidth="1.1" strokeOpacity="0.55" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 3">
        {sensors.map(([px, py], i) => (
          <path key={i} d={linkPath(px, py)} />
        ))}
      </g>

      {/* DATA PACKETS — gated on prefers-reduced-motion */}
      {animate && (
        <g className="data-flow">
          {sensors.map(([px, py], i) => (
            <circle key={`pkt-${i}`} r="2.4" fill={A} opacity="0">
              <animateMotion
                path={`M ${px} ${py} L ${serverX} ${serverY + 16}`}
                dur={`${packetDurations[i]}s`}
                repeatCount="indefinite"
                begin={`${i * 0.38}s`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur={`${packetDurations[i]}s`}
                repeatCount="indefinite"
                begin={`${i * 0.38}s`}
              />
            </circle>
          ))}
        </g>
      )}

      {/* SERVER NODE + glowing "?" */}
      <g>
        <circle cx={serverX} cy={serverY - 34} r="22" fill={A} fillOpacity="0.16" filter="url(#qGlow)" />
        <circle cx={serverX} cy={serverY - 34} r="14" fill="none" stroke={A} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={serverX} y={serverY - 27} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill={A}>?</text>
        <path
          d={`M ${serverX} ${serverY + 16} L ${serverX + 22} ${serverY + 7} L ${serverX + 22} ${serverY - 3} L ${serverX} ${serverY + 6} Z`}
          fill="#1F2937" stroke="#0b0f17" strokeWidth="0.6"
        />
        <path
          d={`M ${serverX} ${serverY + 16} L ${serverX - 22} ${serverY + 7} L ${serverX - 22} ${serverY - 3} L ${serverX} ${serverY + 6} Z`}
          fill="#111827" stroke="#0b0f17" strokeWidth="0.6"
        />
        <path
          d={`M ${serverX} ${serverY + 6} L ${serverX + 22} ${serverY - 3} L ${serverX} ${serverY - 12} L ${serverX - 22} ${serverY - 3} Z`}
          fill="#374151" stroke={A} strokeWidth="1"
        />
      </g>

      {/* SENSOR DOTS — pulsing glow + (gated) ring + solid core */}
      <g>
        {sensors.map(([cx, cy], i) => (
          <g key={i}>
            <g className="sensor-dot" style={{ animationDelay: `${(i % 4) * 0.5}s` }}>
              <circle cx={cx} cy={cy} r="8" fill={A} fillOpacity="0.32" filter="url(#dotGlow)" />
            </g>
            {animate && (
              <circle cx={cx} cy={cy} fill="none" stroke={A} strokeWidth="1.3" className="data-flow">
                <animate
                  attributeName="r"
                  values="3.5;14"
                  dur={`${ringDurations[i]}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.4}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.75;0"
                  keyTimes="0;0.15;1"
                  dur={`${ringDurations[i]}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.4}s`}
                />
              </circle>
            )}
            <circle cx={cx} cy={cy} r="3.2" fill={A} />
            <circle cx={cx} cy={cy} r="1.2" fill="#fff" fillOpacity="0.85" />
          </g>
        ))}
      </g>

      {/* ENGINEER silhouette */}
      <g>
        <ellipse cx="540" cy="392" rx="14" ry="3.2" fill={INK3} opacity="0.22" />
        <circle cx="540" cy="335" r="6" fill={INK2} />
        <path d="M 533 343 L 547 343 L 548 366 L 532 366 Z" fill={INK2} />
        <path
          d="M 533 344 L 528 338 L 532 333"
          stroke={INK2} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        <path d="M 547 344 L 548 364" stroke={INK2} strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <path d="M 537 366 L 536 388" stroke={INK2} strokeWidth="3.8" strokeLinecap="round" />
        <path d="M 544 366 L 545 388" stroke={INK2} strokeWidth="3.8" strokeLinecap="round" />
      </g>
    </svg>
  );
}
