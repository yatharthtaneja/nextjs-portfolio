'use client';

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

        .insight-block { padding: 48px 0; border-bottom: 1px solid ${LINE}; }
        .insight-block:last-child { border-bottom: none; }
        .insight-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start;
        }
        @media (max-width: 768px) {
          .insight-grid { grid-template-columns: 1fr; }
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
          border-left: 3px solid ${AS};
          padding: 14px 18px; margin: 18px 0;
          background: ${AB}; border-radius: 0 8px 8px 0;
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
            <p className="tldr-value">18 pain points → 14 requirements → 27 findings → 11 feature requests, distilled into 4 insight themes.</p>
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
        <P style={{ marginBottom: 32 }}>
          That&rsquo;s the whole vocabulary. Address space, node, subscription. The rest of this case study uses these three words a lot.
        </P>
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
        <P>
          There was a market full of third-party OPC UA clients already. The question wasn&rsquo;t whether we could build <em>an</em> OPC UA app. It was whether we could build one that would feel like it actually belonged in the hands of an engineer who already lives in MATLAB and Simulink — one that would let them go from &ldquo;I need to read this sensor&rdquo; to &ldquo;I&rsquo;m reading this sensor&rdquo; without writing a line of code.
        </P>
        <P>
          To answer that, we had to first figure out what engineers were actually trying to do with OPC UA — not in the abstract, but Tuesday-morning, deadline-three-weeks-out concrete.
        </P>
      </div>

      <Divider />

      {/* ── 6. HOW I APPROACHED IT ──────────────────────────────────────── */}
      <div style={{ background: CARD, padding: '64px 24px' }}>
        <div className="wide" style={{ padding: 0, maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <EyebrowLabel>Process</EyebrowLabel>
            <H2>How I approached it</H2>
            <P style={{ marginBottom: 0 }}>Three phases, sequential, ~15 months end to end. Each phase fed the next.</P>
          </div>
          <div className="phase-grid">
            {[
              {
                label: 'Phase 1 — Discovery',
                stats: 'Dec 2023 – Feb 2024\n4 contextual interviews · 4 industries\n18 pain points · 14 requirements',
                body: 'I scoped a four-week discovery sprint with engineers across four industries: a controls engineer at an automotive supplier, a systems engineer building digital twins of amusement-park rides, an automation engineer doing virtual commissioning of PLCs, and a control engineer at a ship-building company. I built the screener, interview guide, and requirements document, and led synthesis with the developer and design lead.',
              },
              {
                label: 'Phase 2 — Usability Study',
                stats: 'Sep – Oct 2024\n5 external participants · 27 findings\n4 insight themes · 11 feature requests',
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
          <div style={{ marginTop: 32 }}>
            <Artifact
              label="Artifact #3 — Affinity mapping board screenshot (strip participant names and author labels; keep cluster headings)"
              height={180}
            />
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
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">Across all four interviews, engineers named the same underlying reason they hadn&rsquo;t migrated to OPC UA: the only path from MATLAB was a programmatic API, and the people who needed the data most — controls engineers, test-bench technicians, plant operators — didn&rsquo;t have the time or training to write the boilerplate to connect, browse, subscribe, and read.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Insight</p>
              <p className="flank-body">The audience for an OPC UA tool inside MATLAB isn&rsquo;t the OPC UA expert. It&rsquo;s the <em>domain expert who needs OPC UA data</em> and currently can&rsquo;t get to it without a programmer in the room. Designing for the expert would have produced a power-user IDE; designing for the domain expert produced an explorer that gets you to a value with three clicks.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">What it changed</p>
              <p className="flank-body">Set the primary persona for the app and locked in a hard rule for the design review: every interaction had to be discoverable without reading docs. That rule is what got the in-app help, the sample-server quick-connect, and the plot-tab discoverability fixes prioritized.</p>
            </div>
          </div>
          {/* Discovery 02 */}
          <div className="flank-card">
            <p className="flank-eyebrow">Discovery 02</p>
            <h4 className="flank-h4">The strongest pull came from the digital-twin engineer, not the bench technician</h4>
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">Four use cases emerged — bench monitoring, predictive maintenance, energy dashboards, and digital-twin synchronization. All had real engineers behind them. But the digital-twin case was the one where OPC UA wasn&rsquo;t a nice-to-have — it was the only honest way to keep a Simulink model in step with a physical asset across vendors.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Insight</p>
              <p className="flank-body">When you have four use cases and one ship date, the anchor isn&rsquo;t the most common one — it&rsquo;s the one where the alternative is <em>worst</em>. For everyone else, OPC UA is one of several options. For the digital-twin engineer, it&rsquo;s the option.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">What it changed</p>
              <p className="flank-body">The amusement-park digital-twin scenario — vibration sensors → MATLAB model → predictive alert — became the canonical demo flow. It&rsquo;s why the first-run experience leans into &ldquo;connect, browse, subscribe to a few nodes, see them update&rdquo; rather than a 14-parameter advanced session setup.</p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 7. WHAT WE LEARNED ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <EyebrowLabel>Findings</EyebrowLabel>
          <H2>What we learned</H2>
          <P style={{ marginBottom: 0 }}>
            Four high-priority insight themes from the usability study. Each follows the same shape: observation → insight → recommendation → what shipped.
          </P>
        </div>

        {/* Theme 1 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 1</div>
              <h3 className="insight-h3">Engineers expected the action panel above the metadata, not below it</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Every participant who tried to read a sensor value scrolled past the &ldquo;Node Function&rdquo; panel without seeing it. They were drawn to the larger &ldquo;Node Information&rdquo; panel — which only displays metadata — and then asked, &ldquo;Where do I read the value?&rdquo;</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">We had laid the panels out in the order the data structure suggested (&ldquo;here&rsquo;s what this node is, then here&rsquo;s what you can do with it&rdquo;) instead of the order the user&rsquo;s intent demanded.</p>

              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Swap the two panels. Action above metadata. Don&rsquo;t try to teach the user a new mental model when their existing one is already correct.</p>

              <SubLabel>What shipped</SubLabel>
              <Pill>✓ Shipped</Pill>
              <p className="insight-body" style={{ marginTop: 8 }}>The panels were swapped in the next build. We also added an <strong>Export to MATLAB</strong> button to the action panel — picked up from a reviewer ask in the design review, and validated against the historical-data export pattern that had shown up six times across the usability study.</p>
            </div>
            <div className="artifact-col">
              <Artifact label="Artifact #5 — Node panel layout: before (Node Information on top) and after (Node Function on top)" height={300} />
            </div>
          </div>
        </div>

        {/* Theme 2 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 2</div>
              <h3 className="insight-h3">The address space was a tree without a search box, and engineers got lost</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Real factory address spaces have thousands of nodes. Participants spent 30–90 seconds per task hunting for nodes by hand-expanding tree branches.</p>
              <div className="pull-quote">
                <blockquote>&ldquo;This is like opening every folder on a corporate file server to find one document.&rdquo;</blockquote>
                <cite>— Participant struggling with the tree-without-search</cite>
              </div>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">An address space without search is a library without a card catalog. The tree was correct; what was missing was a way <em>into</em> the tree. Participants who&rsquo;d used a competitor product — UA Expert — kept reaching for the search bar that didn&rsquo;t exist.</p>

              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Add a search bar at the top of the address space. Match nodes by name and by browse path. Implement search on the API side first (where it&rsquo;s cheap), then bring it into the app.</p>

              <SubLabel>What shipped</SubLabel>
              <Pill shipped={false}>~ Partially shipped</Pill>
              <p className="insight-body" style={{ marginTop: 8 }}>Search was implemented for the OPC UA API in the same release. In-app search was scoped for a follow-up release — a deliberate de-scope, not an oversight, since we needed more usability data on which search behaviors mattered most (substring vs. fuzzy, recent vs. favorites).</p>
            </div>
            <div className="artifact-col">
              <Artifact label="Artifact #6 — Address space tree showing dense hierarchy, no search bar visible" height={300} />
            </div>
          </div>
        </div>

        {/* Theme 3 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 3</div>
              <h3 className="insight-h3">Engineers wrote to read-only nodes and got cryptic errors</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Three of the five participants tried to write a value to a node that was server-side read-only. The app accepted the input, sent the write, and surfaced a vague <span className="mono">BadWriteNotSupported</span> error from the server. Two participants assumed they&rsquo;d typed the value wrong and tried again. One walked away frustrated.</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">The mistake wasn&rsquo;t a typing error. It was a discoverability failure — the app gave no visual signal that a node was read-only <em>before</em> you tried to write to it. Engineers who <em>know</em> read/write permissions exist still don&rsquo;t carry that knowledge to every node they look at; they expect the interface to surface it.</p>

              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Visually grey out cells in the monitoring table for read-only nodes. Don&rsquo;t change the underlying behavior — just close the loop on the affordance.</p>

              <SubLabel>What shipped</SubLabel>
              <Pill>✓ Shipped</Pill>
              <p className="insight-body" style={{ marginTop: 8 }}>Greyed cells for read-only nodes shipped in the first release. We also flagged a separate enhancement request to the underlying UI table component to allow contextual right-click menus on rows — a nice-to-have, deliberately deferred.</p>
            </div>
            <div className="artifact-col">
              <Artifact label="Artifact #7 — Monitoring table: before (all cells same appearance) and after (read-only cells greyed)" height={300} />
            </div>
          </div>
        </div>

        {/* Theme 4 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 4</div>
              <h3 className="insight-h3">Critical metadata was missing where engineers looked for it</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">When a participant inspected a node, they expected to see four things together: the value, the unit (°C or psi or m/s²), the data quality (is this reading trustworthy right now?), and the sampling frequency (how fresh is this number?). The app showed value and partial metadata; the rest required clicking into a separate panel.</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Engineers don&rsquo;t read sensor values in the abstract. A temperature reading without a unit and a quality flag is decoration, not data. The app was forcing them to assemble context across multiple panels every time they checked a value.</p>

              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Surface unit, data quality, and last-update timestamp inline with every value, in the monitoring table. Make the answer to &ldquo;is this reading trustworthy right now?&rdquo; a glance, not a workflow.</p>

              <SubLabel>What shipped</SubLabel>
              <Pill shipped={false}>~ Partially shipped</Pill>
              <p className="insight-body" style={{ marginTop: 8 }}>Inline metadata for unit and timestamp shipped in the release. Data-quality status went into the documentation rather than the table for v1, with an enhancement request open to add it inline based on field feedback.</p>
            </div>
            <div className="artifact-col">
              <Artifact label="Artifact #8 — Monitoring table showing value without unit/quality context (before) and with inline metadata (after)" height={300} />
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 8. WHAT CHANGED ─────────────────────────────────────────────── */}
      <div style={{ background: CARD, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <EyebrowLabel>Before / After</EyebrowLabel>
          <H2>What changed in the product</H2>
          <P style={{ marginBottom: 48 }}>Four pairs that came directly out of the usability study and design review.</P>

          {[
            {
              title: 'Panel order',
              caption: 'Node Information was the largest panel by default; Node Function (the action panel) sat below it, off-screen on smaller monitors. After: action panel on top, metadata below, with Export to MATLAB added.',
            },
            {
              title: 'Monitoring table — read-only state',
              caption: 'Read-only and writable cells looked identical before. After: read-only cells use a custom darker grey background — distinct from disabled but still scannable.',
            },
            {
              title: 'Plot and log panels — discoverability',
              caption: 'Both panels were tabs without strong affordance; participants missed them. After: blue highlight on the active panel, a default selection on connect, and a clearer panel-strip layout.',
            },
            {
              title: 'Error feedback on Invoke',
              caption: 'Success/failure of invoking a method was text-only and scrolled by. After: an icon accompanies every status message so the result is visible at a glance.',
            },
          ].map((pair) => (
            <div key={pair.title} className="before-after-pair">
              <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 17, color: INK, margin: '0 0 14px' }}>
                {pair.title}
              </h4>
              <div className="before-after-grid">
                <div>
                  <div className="ba-label">Before</div>
                  <Artifact label={`Artifact #9 — ${pair.title}: before state`} height={200} />
                </div>
                <div>
                  <div className="ba-label">After</div>
                  <Artifact label={`Artifact #9 — ${pair.title}: after (shipped) state`} height={200} />
                </div>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', color: INK3, margin: '10px 0 0', lineHeight: 1.5 }}>
                {pair.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── 8b. WHAT THE DESIGN REVIEW SURFACED ─────────────────────────── */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
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
            <h4 className="flank-h4">I advocated for an Export-to-MATLAB button before anyone asked for it</h4>
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
              <p className="flank-body">Shipped in R2026a. The Export-to-MATLAB button is one of the first things you see in the monitoring panel.</p>
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
              <p className="flank-body">Panels were swapped. It&rsquo;s the cleanest before/after in the shipped app and appears in the section above.</p>
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

        <div style={{ marginBottom: 32 }}>
          <div className="reflection-num">One.</div>
          <P>
            I&rsquo;d start the strategic-planning conversation earlier. The research drove the right product, but I waited until I had data to bring strong opinions to the form-factor and scoping discussions. If I&rsquo;d had this lens from week one, I&rsquo;d have run a structured form-factor workshop <em>before</em> the usability study — committing the team to &ldquo;this will be an app, not a Simulink block, because here&rsquo;s the reasoning&rdquo; before we sunk months into a particular UI direction. (For our next product — the OPC UA Server — that&rsquo;s exactly what we did. The discipline came directly from this case.)
          </P>
        </div>
        <div style={{ marginBottom: 0 }}>
          <div className="reflection-num">Two.</div>
          <P style={{ marginBottom: 0 }}>
            I&rsquo;d run a smaller, faster usability round earlier — with 2 or 3 participants — to validate the prototype skeleton before the full 5-participant study. Several of the 27 findings were structural enough that an early micro-study would have caught them at a fraction of the cost. Five-participant studies are the right tool for &ldquo;is this ready to ship?&rdquo; — they&rsquo;re a heavy hammer for &ldquo;is this on the right track?&rdquo;
          </P>
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
