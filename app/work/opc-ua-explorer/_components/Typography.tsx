import React from 'react';
import { A, CARD, INK, INK2, INK3, LINE } from './theme';

export function Pill({ children, shipped = true }: { children: React.ReactNode; shipped?: boolean }) {
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

export function Artifact({ label, height = 260 }: { label: string; height?: number }) {
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

export function EyebrowLabel({ children }: { children: string }) {
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

export function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
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

export function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
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

export function SubLabel({ children }: { children: string }) {
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

export function Divider() {
  return <hr style={{ height: 1, background: LINE, border: 'none', margin: 0 }} />;
}

export function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <figure className="big-quote">
      <blockquote>{children}</blockquote>
      {cite && <figcaption>— {cite}</figcaption>}
    </figure>
  );
}
