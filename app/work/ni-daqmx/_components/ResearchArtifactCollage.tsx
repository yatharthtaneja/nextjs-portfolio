'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { A, AS, AB, INK2, INK3, LINE } from './theme';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ResearchArtifactCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="bs-collage">
      <motion.figure
        className="bs-card bs-tl"
        initial={{ opacity: 0, y: 30, rotate: -3 * 1.6 }}
        animate={inView ? { opacity: 1, y: 0, rotate: -3 } : { opacity: 0, y: 30, rotate: -3 * 1.6 }}
        whileHover={{ y: -6, rotate: 0, zIndex: 30 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <AffinityBoardSVG />
        <figcaption>Affinity map · 24 → 4 themes</figcaption>
      </motion.figure>

      <motion.figure
        className="bs-card bs-main"
        initial={{ opacity: 0, y: 30, rotate: 1.6 * 1.6 }}
        animate={inView ? { opacity: 1, y: 0, rotate: 1.6 } : { opacity: 0, y: 30, rotate: 1.6 * 1.6 }}
        whileHover={{ y: -6, rotate: 0, zIndex: 30 }}
        transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
      >
        <PseudoDocSVG />
        <figcaption>Prototype reference doc · function-based</figcaption>
      </motion.figure>

      <motion.figure
        className="bs-card bs-br"
        initial={{ opacity: 0, y: 30, rotate: -1.4 * 1.6 }}
        animate={inView ? { opacity: 1, y: 0, rotate: -1.4 } : { opacity: 0, y: 30, rotate: -1.4 * 1.6 }}
        whileHover={{ y: -6, rotate: 0, zIndex: 30 }}
        transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
      >
        <SurveyInstrumentSVG />
        <figcaption>Unmoderated study instrument</figcaption>
      </motion.figure>
    </div>
  );
}

function PseudoDocSVG() {
  return (
    <svg viewBox="0 0 600 420" role="img" aria-labelledby="bs-doc-title" preserveAspectRatio="xMidYMid meet">
      <title id="bs-doc-title">Pseudo-doc — one page from the function-based prototype reference</title>
      {/* Page background */}
      <rect width="600" height="420" fill="#ffffff" />
      {/* Header bar */}
      <rect x="0" y="0" width="600" height="56" fill={AB} />
      <rect x="24" y="20" width="160" height="14" rx="3" fill={A} />
      <rect x="200" y="22" width="80" height="10" rx="2" fill={INK3} opacity="0.5" />
      <rect x="296" y="22" width="60" height="10" rx="2" fill={INK3} opacity="0.5" />
      <rect x="372" y="22" width="70" height="10" rx="2" fill={INK3} opacity="0.5" />
      {/* H1 */}
      <rect x="24" y="84" width="380" height="22" rx="3" fill={INK2} />
      {/* tag pill */}
      <rect x="24" y="120" width="92" height="20" rx="10" fill={AS} />
      <text x="33" y="134" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={A} fontWeight="600">FUNCTION-BASED</text>
      {/* prose */}
      <rect x="24" y="156" width="540" height="6" rx="2" fill={LINE} />
      <rect x="24" y="172" width="510" height="6" rx="2" fill={LINE} />
      <rect x="24" y="188" width="430" height="6" rx="2" fill={LINE} />
      {/* code block */}
      <rect x="24" y="214" width="552" height="98" rx="6" fill="#1e1e1e" />
      <rect x="40" y="232" width="20" height="6" rx="1" fill="#DCDCAA" />
      <rect x="64" y="232" width="80" height="6" rx="1" fill="#9CDCFE" />
      <rect x="148" y="232" width="140" height="6" rx="1" fill="#CE9178" />
      <rect x="40" y="250" width="42" height="6" rx="1" fill="#569CD6" />
      <rect x="86" y="250" width="120" height="6" rx="1" fill="#D4D4D4" opacity="0.5" />
      <rect x="40" y="268" width="100" height="6" rx="1" fill="#4FC1FF" />
      <rect x="40" y="286" width="60" height="6" rx="1" fill="#DCDCAA" />
      <rect x="104" y="286" width="40" height="6" rx="1" fill="#B5CEA8" />
      {/* second prose block */}
      <rect x="24" y="332" width="540" height="6" rx="2" fill={LINE} />
      <rect x="24" y="348" width="490" height="6" rx="2" fill={LINE} />
      <rect x="24" y="364" width="420" height="6" rx="2" fill={LINE} />
      <rect x="24" y="380" width="280" height="6" rx="2" fill={LINE} />
    </svg>
  );
}

function AffinityBoardSVG() {
  // Four clusters of colored sticky notes — Errors, Discovery, Args, Examples.
  // Each cluster has 3-4 small notes; one larger "theme" tag on top.
  const clusters = [
    { x: 18,  y: 60,  label: 'ERRORS',    color: '#FECACA', noteColor: '#FEE2E2', count: 6 },
    { x: 168, y: 60,  label: 'DISCOVERY', color: '#FDE68A', noteColor: '#FEF3C7', count: 6 },
    { x: 18,  y: 232, label: 'ARGS',      color: '#BFDBFE', noteColor: '#DBEAFE', count: 6 },
    { x: 168, y: 232, label: 'EXAMPLES',  color: '#BBF7D0', noteColor: '#DCFCE7', count: 6 },
  ];

  return (
    <svg viewBox="0 0 320 400" role="img" aria-labelledby="bs-affinity-title" preserveAspectRatio="xMidYMid meet">
      <title id="bs-affinity-title">Affinity map: 24 raw pain points clustered into 4 themes</title>
      {/* board background */}
      <rect width="320" height="400" fill="#FAFAF7" />
      {/* board title */}
      <rect x="14" y="16" width="160" height="10" rx="2" fill={INK2} />
      <rect x="14" y="32" width="100" height="6" rx="2" fill={INK3} opacity="0.6" />

      {clusters.map((c) => (
        <g key={c.label}>
          {/* theme banner */}
          <rect x={c.x} y={c.y} width="130" height="20" rx="3" fill={c.color} />
          <text x={c.x + 8} y={c.y + 14} fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={INK2}>
            {c.label}
          </text>
          {/* sticky note grid 3x2 */}
          {Array.from({ length: c.count }).map((_, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const nx = c.x + col * 44;
            const ny = c.y + 30 + row * 60;
            const tilt = ((col + row) % 2 === 0 ? 1.5 : -1.5);
            return (
              <g key={i} transform={`rotate(${tilt} ${nx + 20} ${ny + 26})`}>
                <rect x={nx} y={ny} width="40" height="52" rx="2" fill={c.noteColor} stroke={c.color} strokeWidth="0.5" />
                <rect x={nx + 4} y={ny + 6} width="32" height="2.5" rx="1" fill={INK3} opacity="0.4" />
                <rect x={nx + 4} y={ny + 14} width="28" height="2.5" rx="1" fill={INK3} opacity="0.4" />
                <rect x={nx + 4} y={ny + 22} width="30" height="2.5" rx="1" fill={INK3} opacity="0.4" />
                <rect x={nx + 4} y={ny + 30} width="22" height="2.5" rx="1" fill={INK3} opacity="0.4" />
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

function SurveyInstrumentSVG() {
  return (
    <svg viewBox="0 0 460 380" role="img" aria-labelledby="bs-survey-title" preserveAspectRatio="xMidYMid meet">
      <title id="bs-survey-title">Unmoderated study instrument — task script and 5-point ease-of-use rating</title>
      {/* page bg */}
      <rect width="460" height="380" fill="#ffffff" />
      {/* page header band */}
      <rect x="0" y="0" width="460" height="46" fill={AB} />
      <rect x="22" y="18" width="140" height="10" rx="2" fill={A} />
      <rect x="22" y="33" width="90" height="6" rx="2" fill={INK3} opacity="0.5" />

      {/* Task label */}
      <text x="22" y="76" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={A} letterSpacing="1.2">
        TASK · 1 OF 2
      </text>

      {/* task heading */}
      <rect x="22" y="86" width="300" height="12" rx="2" fill={INK2} />

      {/* task script lines */}
      <rect x="22" y="112" width="416" height="5" rx="2" fill={LINE} />
      <rect x="22" y="124" width="402" height="5" rx="2" fill={LINE} />
      <rect x="22" y="136" width="380" height="5" rx="2" fill={LINE} />
      <rect x="22" y="148" width="340" height="5" rx="2" fill={LINE} />

      {/* code box */}
      <rect x="22" y="170" width="416" height="56" rx="4" fill="#F3F4F6" stroke={LINE} />
      <rect x="34" y="184" width="180" height="5" rx="1" fill={INK3} opacity="0.6" />
      <rect x="34" y="196" width="240" height="5" rx="1" fill={INK3} opacity="0.6" />
      <rect x="34" y="208" width="160" height="5" rx="1" fill={INK3} opacity="0.6" />

      {/* divider */}
      <line x1="22" y1="248" x2="438" y2="248" stroke={LINE} strokeWidth="1" />

      {/* Likert label */}
      <text x="22" y="270" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={A} letterSpacing="1.2">
        EASE-OF-USE · 5-POINT
      </text>

      {/* Likert prompt */}
      <rect x="22" y="280" width="280" height="6" rx="2" fill={INK2} />

      {/* 5 radio buttons */}
      {[0, 1, 2, 3, 4].map((i) => {
        const cx = 60 + i * 80;
        const selected = i === 2; // 3-out-of-5 selected as the "in the moment" answer
        return (
          <g key={i}>
            <circle cx={cx} cy={320} r="11" fill="#ffffff" stroke={selected ? A : INK3} strokeWidth={selected ? 2 : 1} />
            {selected && <circle cx={cx} cy={320} r="5" fill={A} />}
            <text x={cx} y={350} fontFamily="Inter, sans-serif" fontSize="10" fill={INK3} textAnchor="middle">{i + 1}</text>
          </g>
        );
      })}

      {/* end labels */}
      <text x="22" y="320" fontFamily="Inter, sans-serif" fontSize="9" fill={INK3}>very hard</text>
      <text x="438" y="320" fontFamily="Inter, sans-serif" fontSize="9" fill={INK3} textAnchor="end">very easy</text>
    </svg>
  );
}
