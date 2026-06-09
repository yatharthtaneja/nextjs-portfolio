import React from 'react';
import { A, AS, CARD, INK, INK2, INK3, LINE } from './theme';

export function Pill({ children, shipped = true }: { children: React.ReactNode; shipped?: boolean }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: shipped ? AS : '#FEF3C7',
      color: shipped ? A : '#92400e',
      fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
      padding: '6px 14px', borderRadius: 20,
    }}>{children}</span>
  );
}

export function Artifact({ label, height = 260 }: { label: string; height?: number }) {
  return (
    <div style={{
      height, background: CARD, border: `1.5px dashed ${LINE}`,
      borderRadius: 12, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 10, padding: 24,
    }}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.1em', color: INK3 }}>
        Artifact needed
      </span>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: INK3,
        textAlign: 'center', lineHeight: 1.5 }}>{label}</span>
    </div>
  );
}

export function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: A,
      margin: '0 0 12px',
    }}>{children}</p>
  );
}

export function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 800,
      fontSize: 'clamp(26px, 3vw, 34px)',
      color: INK, lineHeight: 1.15, margin: '12px 0 24px',
      letterSpacing: '-0.02em',
      ...style,
    }}>
      {children}
    </h2>
  );
}

export function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: INK2,
      lineHeight: 1.7, margin: '0 0 22px', ...style }}>{children}</p>
  );
}

export function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.12em', color: INK3,
      margin: '24px 0 8px',
    }}>{children}</p>
  );
}

export function Divider() {
  return <hr style={{ height: 1, background: LINE, border: 'none', margin: 0 }} />;
}
