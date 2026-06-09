'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import { A, AD, INK, INK3, OUTLINE_SOFT, CODE, CODE_FG, CODE_MUTED } from './theme';

const BEFORE_C = `#include "NIDAQmx.h"
TaskHandle taskHandle = 0;
char errBuff[2048] = {'\\0'};
int32 read = 0;
float64 data[1000];
DAQmxErrChk(DAQmxCreateTask("", &taskHandle));
DAQmxErrChk(DAQmxCreateAIVoltageChan(
  taskHandle, "Dev1/ai0", "",
  DAQmx_Val_Cfg_Default, -10.0, 10.0,
  DAQmx_Val_Volts, NULL));
DAQmxErrChk(DAQmxCfgSampClkTiming(
  taskHandle, "", 1000.0,
  DAQmx_Val_Rising, DAQmx_Val_FiniteSamps,
  1000));
DAQmxErrChk(DAQmxStartTask(taskHandle));
DAQmxErrChk(DAQmxReadAnalogF64(...));`;

type Token = [string, string?];
const AFTER_LINES: { tokens: Token[] }[] = [
  {
    tokens: [
      ['task', '#7fd1ff'],
      [' = ', CODE_MUTED],
      ['calldaqlib', '#c4b5ff'],
      ['(', CODE_MUTED],
      ["'DAQmxCreateTask'", '#7ee787'],
      [');', CODE_MUTED],
    ],
  },
  {
    tokens: [
      ['calldaqlib', '#c4b5ff'],
      ['(', CODE_MUTED],
      ["'DAQmxCreateAIVoltageChan'", '#7ee787'],
      [');', CODE_MUTED],
    ],
  },
  {
    tokens: [
      ['data', '#7fd1ff'],
      [' = ', CODE_MUTED],
      ['calldaqlib', '#c4b5ff'],
      ['(', CODE_MUTED],
      ["'DAQmxReadAnalogF64'", '#7ee787'],
      [');', CODE_MUTED],
    ],
  },
];

const CONSIDERED = [
  { name: 'daqRead()', ok: false },
  { name: 'acquireData()', ok: false },
  { name: 'DAQmxReadAnalogF64()', ok: true },
];

function TrafficDots() {
  return (
    <span style={{ display: 'inline-flex', gap: 6 }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
    </span>
  );
}

function CodeChrome({ label, dark = true }: { label: string; dark?: boolean }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 14px',
      borderBottom: dark ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${OUTLINE_SOFT}`,
      background: dark ? 'transparent' : '#f8fafc',
    }}>
      <TrafficDots />
      <span style={{
        marginLeft: 4,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10.5, fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: dark ? CODE_MUTED : INK3,
      }}>
        {label}
      </span>
    </div>
  );
}

function Typewriter({ lines, speed = 22 }: { lines: { tokens: Token[] }[]; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!inView || revealed >= lines.length) return;
    const lineLen = lines[revealed].tokens.reduce((n, t) => n + t[0].length, 0);
    const t = window.setTimeout(() => setRevealed((r) => r + 1), lineLen * speed + 120);
    return () => window.clearTimeout(t);
  }, [inView, revealed, lines, speed]);

  return (
    <div ref={ref} style={{ minHeight: 96 }}>
      {lines.slice(0, revealed).map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          style={{ whiteSpace: 'pre' }}
        >
          {l.tokens.map(([text, color], j) => (
            <span key={j} style={color ? { color } : undefined}>{text}</span>
          ))}
        </motion.div>
      ))}
      {inView && revealed < lines.length && (
        <span style={{
          display: 'inline-block', width: 7, height: 14, background: A,
          verticalAlign: 'middle',
          animation: 'baCaret 0.9s steps(2, end) infinite',
        }} />
      )}
      <style jsx>{`@keyframes baCaret { 50% { opacity: 0; } }`}</style>
    </div>
  );
}

export default function BeforeAfterHook() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const arrowInView = useInView(arrowRef, { once: true, amount: 0.3 });
  const namingRef = useRef<HTMLUListElement>(null);
  const namingInView = useInView(namingRef, { once: true, amount: 0.3 });

  return (
    <div
      role="img"
      aria-label="Side-by-side: 50-line C → 3-line MATLAB. A spring arrow marks 'became'. Considered names list shows two struck-through alternatives and the chosen DAQmxReadAnalogF64."
    >
      <div className="ba-stack">
        <div className="ba-row">
          {/* BEFORE — C */}
          <div style={{
            borderRadius: 10, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            background: CODE,
            position: 'relative',
            maxHeight: 280,
          }}>
            <CodeChrome label="before · C · ~50 lines" />
            <pre style={{
              margin: 0, padding: '14px 16px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, lineHeight: 1.65,
              color: CODE_MUTED, opacity: 0.7,
              whiteSpace: 'pre', overflow: 'hidden',
              maxHeight: 230,
            }}>
              {BEFORE_C}
            </pre>
            <span style={{
              pointerEvents: 'none', position: 'absolute',
              left: 0, right: 0, bottom: 0, height: 90,
              background: `linear-gradient(transparent, ${CODE})`,
            }} />
          </div>

          {/* Spring arrow */}
          <motion.div
            ref={arrowRef}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={arrowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 4, padding: '0 4px', alignSelf: 'center',
            }}
            aria-hidden="true"
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: '50%',
              background: 'linear-gradient(135deg, #2151da 0%, #0037b0 100%)',
              color: '#fff', boxShadow: '0 4px 12px rgba(33,81,218,0.35)',
            }}>
              <ArrowRight size={16} />
            </span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: A,
            }}>
              became
            </span>
          </motion.div>

          {/* AFTER — MATLAB */}
          <div style={{
            borderRadius: 10, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            background: CODE,
          }}>
            <CodeChrome label="after · MATLAB · 3 lines" />
            <pre style={{
              margin: 0, padding: '14px 16px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, lineHeight: 1.85,
              color: CODE_FG,
              whiteSpace: 'pre', overflowX: 'auto',
            }}>
              <Typewriter lines={AFTER_LINES} />
            </pre>
          </div>
        </div>

        <p className="naming-caption" style={{ margin: '2px 2px 0' }}>
          Illustrative — actual C workflows varied by hardware and team.
        </p>

        {/* Considered names card */}
        <div className="naming-card">
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: INK3,
            margin: '0 0 12px',
          }}>
            Considered for the read function
          </p>
          <ul ref={namingRef} style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CONSIDERED.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0, x: -8 }}
                animate={namingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5,
                }}
              >
                {c.ok ? (
                  <Check size={16} strokeWidth={3} style={{ color: AD, flexShrink: 0 }} />
                ) : (
                  <X size={16} strokeWidth={2.5} style={{ color: '#94a3b8', flexShrink: 0 }} />
                )}
                <span style={{
                  color: c.ok ? INK : '#94a3b8',
                  fontWeight: c.ok ? 600 : 400,
                  textDecoration: c.ok ? 'none' : 'line-through',
                  textDecorationColor: c.ok ? undefined : 'rgba(148,163,184,0.5)',
                }}>
                  {c.name}
                </span>
              </motion.li>
            ))}
          </ul>
          <p className="naming-caption">
            Tested with 11 engineers across 5 industries. The chosen name was the closest match to the C library they already knew.
          </p>
        </div>
      </div>
    </div>
  );
}
