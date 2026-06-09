'use client';

import { motion } from 'framer-motion';
import { Lock, RefreshCw } from 'lucide-react';
import { A, AD, INK3, OUTLINE_SOFT, SURFACE_LOW, SURFACE_HIGH, CARD } from './theme';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function InfrastructureMetaphor() {
  return (
    <figure className="iso-stakes">
      <div className="iso-stakes-grid">
        <FurnitureCard />
        <div className="iso-stakes-vs">
          <span className="iso-stakes-vs-pill">vs.</span>
        </div>
        <InfrastructureCard />
      </div>
      <figcaption className="iso-stakes-caption">
        Change the shape of the outlet behind every wall, and every plug in every house stops working.
      </figcaption>

      <style jsx global>{`
        .iso-stakes { margin: 28px 0 12px; }
        .iso-stakes-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 720px) {
          .iso-stakes-grid { grid-template-columns: 1fr; }
        }
        .iso-stakes-vs {
          display: flex; align-items: center; justify-content: center;
        }
        .iso-stakes-vs-pill {
          background: ${CARD};
          border: 1px solid ${OUTLINE_SOFT};
          color: ${INK3};
          padding: 4px 10px; border-radius: 999px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
        }
        .iso-stakes-caption {
          font-family: Inter, sans-serif; font-size: 13px; font-style: italic;
          color: ${INK3}; text-align: center; line-height: 1.55;
          max-width: 560px; margin: 18px auto 0;
        }
      `}</style>
    </figure>
  );
}

/* ---------------- Furniture (reversible) ---------------- */

function FurnitureCard() {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="iso-card">
      <div className="iso-card-head">
        <p className="iso-card-eyebrow" style={{ color: A }}>UI · REVERSIBLE FURNITURE</p>
        <span className="iso-card-icon"><RefreshCw size={14} /></span>
      </div>
      <div className="iso-card-body">
        <IsoRoom />
        <p className="iso-card-sub">ship · watch · rearrange · iterate</p>
      </div>
      <style jsx global>{`
        .iso-card {
          border-radius: 14px; overflow: hidden;
          border: 1px solid ${OUTLINE_SOFT}; background: ${SURFACE_LOW};
        }
        .iso-card-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px; border-bottom: 1px solid ${OUTLINE_SOFT};
        }
        .iso-card-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; margin: 0;
        }
        .iso-card-icon {
          display: inline-flex; align-items: center; justify-content: center;
          color: ${A};
        }
        .iso-card:hover .iso-card-icon { transform: rotate(180deg); transition: transform 700ms; }
        .iso-card-body { padding: 10px 14px 18px; }
        .iso-card-sub {
          margin: 10px 0 0; text-align: center;
          font-family: Inter, sans-serif; font-size: 12px; font-weight: 500; color: ${INK3};
        }
      `}</style>
    </motion.div>
  );
}

function IsoRoom() {
  const ox = 130, oy = 50, tw = 26, th = 13;
  const iso = (c: number, r: number) => ({ x: ox + (c - r) * tw, y: oy + (c + r) * th });

  const tiles = [];
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      const p0 = iso(c, r);
      const p1 = iso(c + 1, r);
      const p2 = iso(c + 1, r + 1);
      const p3 = iso(c, r + 1);
      tiles.push(
        <polygon
          key={`${c}-${r}`}
          points={`${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`}
          fill="#ffffff"
          stroke="rgba(33,81,218,0.15)"
          strokeWidth={1}
        />,
      );
    }
  }

  const layouts = {
    sofa:  [{ c: 0.4, r: 0.5 }, { c: 2.0, r: 0.5 }, { c: 0.6, r: 2.1 }],
    table: [{ c: 2.0, r: 1.9 }, { c: 1.4, r: 2.2 }, { c: 2.1, r: 0.9 }],
    plant: [{ c: 3.0, r: 0.6 }, { c: 0.5, r: 2.8 }, { c: 3.0, r: 2.8 }],
  } as const;

  return (
    <svg viewBox="0 0 260 200" style={{ width: '100%', display: 'block' }}
         role="img" aria-label="Isometric room whose sofa, table and plant rearrange into three layouts">
      <g>{tiles}</g>
      <FurniturePiece iso={iso} spots={layouts.sofa}  offset={{ x: 11, y: 15 }} delay={0}>
        <Sofa />
      </FurniturePiece>
      <FurniturePiece iso={iso} spots={layouts.table} offset={{ x: 6,  y: 11 }} delay={0.15}>
        <Table />
      </FurniturePiece>
      <FurniturePiece iso={iso} spots={layouts.plant} offset={{ x: 0,  y: 6  }} delay={0.3}>
        <Plant />
      </FurniturePiece>
    </svg>
  );
}

function FurniturePiece({
  iso, spots, offset, delay, children,
}: {
  iso: (c: number, r: number) => { x: number; y: number };
  spots: readonly { c: number; r: number }[];
  offset: { x: number; y: number };
  delay: number;
  children: React.ReactNode;
}) {
  const order = [0, 0, 1, 1, 2, 2, 0];
  const xs = order.map((i) => iso(spots[i].c, spots[i].r).x - offset.x);
  const ys = order.map((i) => iso(spots[i].c, spots[i].r).y - offset.y);

  return (
    <motion.g
      initial={{ x: xs[0], y: ys[0] }}
      animate={{ x: xs, y: ys }}
      transition={{
        duration: 10,
        times: [0, 0.1, 0.4, 0.5, 0.8, 0.9, 1],
        repeat: Infinity,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.g>
  );
}

const FU = 15;
const pt = (c: number, r: number, z: number): [number, number] => [FU * (c - r), (FU / 2) * (c + r) - z];
const poly = (pts: [number, number][]) => pts.map((p) => p.join(',')).join(' ');

function Cuboid({
  c, r, a, b, h, z = 0, top, left, right,
}: {
  c: number; r: number; a: number; b: number; h: number; z?: number;
  top: string; left: string; right: string;
}) {
  const b10 = pt(c + a, r, z);
  const b11 = pt(c + a, r + b, z);
  const b01 = pt(c, r + b, z);
  const t00 = pt(c, r, z + h);
  const t10 = pt(c + a, r, z + h);
  const t11 = pt(c + a, r + b, z + h);
  const t01 = pt(c, r + b, z + h);
  return (
    <g>
      <polygon points={poly([b10, b11, t11, t10])} fill={right} />
      <polygon points={poly([b01, b11, t11, t01])} fill={left} />
      <polygon points={poly([t00, t10, t11, t01])} fill={top} />
    </g>
  );
}

function Sofa() {
  return (
    <g>
      <Cuboid c={0} r={0} a={2.6}  b={1.2}  h={6}  top={A}  left={AD} right="#1740a8" />
      <Cuboid c={0} r={0} a={2.6}  b={0.32} h={16} top={A}  left={AD} right="#1740a8" />
      <Cuboid c={0} r={0} a={0.32} b={1.2}  h={11} top="#3d6be1" left={AD} right="#1740a8" />
      <Cuboid c={2.28} r={0} a={0.32} b={1.2} h={11} top="#3d6be1" left={AD} right="#1740a8" />
    </g>
  );
}

function Table() {
  const leg = (c: number, r: number) => (
    <Cuboid c={c} r={r} a={0.22} b={0.22} h={6} top={AD} left={AD} right="#1740a8" />
  );
  return (
    <g>
      {leg(0, 0)}
      {leg(1.58, 0)}
      {leg(0, 0.78)}
      {leg(1.58, 0.78)}
      <Cuboid c={0} r={0} a={1.8} b={1.0} h={2.2} z={6}
        top="rgba(33,81,218,0.7)" left="rgba(0,55,176,0.7)" right="rgba(0,55,176,0.6)" />
    </g>
  );
}

function Plant() {
  const base = pt(0.4, 0.4, 9);
  return (
    <g>
      <Cuboid c={0} r={0} a={0.8} b={0.8} h={8}
        top="rgba(0,55,176,0.4)" left={AD} right="#1740a8" />
      <circle cx={base[0]}      cy={base[1] - 8}  r={6}   fill="#006a48" />
      <circle cx={base[0] - 5}  cy={base[1] - 3}  r={5}   fill="rgba(0,106,72,0.8)" />
      <circle cx={base[0] + 5}  cy={base[1] - 4}  r={5}   fill="rgba(0,106,72,0.9)" />
      <circle cx={base[0]}      cy={base[1] - 13} r={4.5} fill="rgba(0,106,72,0.9)" />
    </g>
  );
}

/* ---------------- Infrastructure (locked) ---------------- */

function InfrastructureCard() {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="iso-card">
      <div className="iso-card-head">
        <p className="iso-card-eyebrow" style={{ color: AD }}>API · FIXED INFRASTRUCTURE</p>
        <span className="iso-card-badge"><Lock size={10} /> LOCKED</span>
      </div>
      <div className="iso-card-body">
        <IsoWall />
        <p className="iso-card-sub">ship once · live with it for a decade</p>
      </div>
      <style jsx global>{`
        .iso-card {
          border-radius: 14px; overflow: hidden;
          border: 1px solid ${OUTLINE_SOFT}; background: ${CARD};
        }
        .iso-card-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px; border-bottom: 1px solid ${OUTLINE_SOFT};
        }
        .iso-card-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; margin: 0;
        }
        .iso-card-badge {
          display: inline-flex; align-items: center; gap: 4px;
          background: ${AD}; color: #fff;
          font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 3px 8px; border-radius: 4px;
        }
        .iso-card-body { padding: 10px 14px 18px; }
        .iso-card-sub {
          margin: 10px 0 0; text-align: center;
          font-family: Inter, sans-serif; font-size: 12px; font-weight: 500; color: ${INK3};
        }
      `}</style>
    </motion.div>
  );
}

function IsoWall() {
  return (
    <svg viewBox="0 0 260 200" style={{ width: '100%', display: 'block' }}
         role="img" aria-label="Isometric wall cutaway with electrical wires and three outlets, current pulsing through">
      <polygon points="40,52 200,52 230,68 70,68" fill={SURFACE_HIGH} />
      <polygon points="40,52 70,68 70,168 40,152" fill="rgba(0,55,176,0.15)" />
      <polygon points="70,68 230,68 230,168 70,168" fill={SURFACE_LOW} stroke={OUTLINE_SOFT} strokeWidth={1} />

      {[110, 150, 190].map((x) => (
        <line key={x} x1={x} y1={72} x2={x} y2={164} stroke="rgba(33,81,218,0.12)" strokeWidth={2} />
      ))}

      <rect x="86" y="80" width="18" height="14" rx="2" fill={AD} />
      <rect x="86" y="80" width="18" height="14" rx="2" fill="none" stroke="rgba(33,81,218,0.4)" strokeWidth={1} />

      <g stroke="rgba(0,55,176,0.35)" strokeWidth={3} fill="none" strokeLinecap="round">
        <path d="M95 94 L95 150 L120 150" />
        <path d="M95 120 L160 120 L160 150" />
        <path d="M95 104 L200 104 L200 150" />
      </g>

      <g stroke={A} strokeWidth={3} fill="none" strokeLinecap="round" style={{ strokeDasharray: '10 90' }}>
        <Current d="M95 94 L95 150 L120 150" dur={2.2} delay={0} />
        <Current d="M95 120 L160 120 L160 150" dur={2.6} delay={0.5} />
        <Current d="M95 104 L200 104 L200 150" dur={3} delay={1} />
      </g>

      <Outlet x={120} y={150} />
      <Outlet x={160} y={150} />
      <Outlet x={200} y={150} />
    </svg>
  );
}

function Current({ d, dur, delay }: { d: string; dur: number; delay: number }) {
  return (
    <motion.path
      d={d}
      initial={{ strokeDashoffset: 100 }}
      animate={{ strokeDashoffset: [100, -100] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'linear', delay }}
    />
  );
}

function Outlet({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 11} y={y - 4} width={22} height={26} rx={4}
            fill={CARD} stroke="rgba(0,55,176,0.4)" strokeWidth={1.5} />
      <rect x={x - 4}   y={y + 2} width={2.5} height={7} rx={1} fill={AD} />
      <rect x={x + 1.5} y={y + 2} width={2.5} height={7} rx={1} fill={AD} />
      <circle cx={x} cy={y + 15} r={2.5} fill="rgba(0,55,176,0.6)" />
      <motion.circle
        cx={x} cy={y + 6} r={13}
        fill="rgba(33,81,218,0.2)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </g>
  );
}
