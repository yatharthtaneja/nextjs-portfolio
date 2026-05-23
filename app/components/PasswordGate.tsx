'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const PASSWORD = 'yuxr';
const STORAGE_KEY = 'portfolio-unlocked';

export default function PasswordGate({
  children,
  accentColor,
  softColor,
}: {
  children: React.ReactNode;
  accentColor: string;
  softColor: string;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setInput('');
      inputRef.current?.focus();
    }
  };

  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div style={{
      minHeight: '100vh',
      background: `color-mix(in srgb, ${softColor} 10%, white)`,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-5px); }
          80%       { transform: translateX(5px); }
        }
        .pg-card-shake { animation: shake 0.5s ease; }
        .pg-unlock-btn:hover { opacity: 0.85 !important; }
        .pg-back:hover { opacity: 0.7 !important; }
      `}</style>

      {/* Top-left wordmark */}
      <div style={{ padding: '24px 32px' }}>
        <Link href="/" style={{
          fontFamily: 'Roboto, Inter, sans-serif',
          fontWeight: 800,
          fontSize: 18,
          color: accentColor,
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>YT</Link>
      </div>

      {/* Center card */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}>
        <div
          className={shaking ? 'pg-card-shake' : ''}
          style={{
            background: 'white',
            borderRadius: 18,
            padding: '48px 40px',
            maxWidth: 420,
            width: '100%',
            boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
            border: `1.5px solid ${softColor}`,
            textAlign: 'center',
          }}
        >
          {/* Icon */}
          <div style={{
            width: 72,
            height: 72,
            background: `color-mix(in srgb, ${softColor} 60%, white)`,
            borderRadius: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
            fontSize: 32,
            border: `1.5px solid ${softColor}`,
          }}>🔒</div>

          <h1 style={{
            fontFamily: 'Inter, Roboto, sans-serif',
            fontWeight: 700,
            fontSize: 22,
            color: '#111827',
            margin: '0 0 10px',
          }}>NDA Protected</h1>

          <p style={{
            fontFamily: 'Inter, Roboto, sans-serif',
            fontSize: 15,
            color: '#6b7280',
            lineHeight: 1.65,
            margin: '0 0 32px',
          }}>
            This case study is under NDA.<br />Enter the password to continue.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
              placeholder="Password"
              autoFocus
              style={{
                width: '100%',
                padding: '13px 16px',
                borderRadius: 10,
                border: `2px solid ${error ? '#EF4444' : input ? accentColor : '#e5e7eb'}`,
                fontSize: 15,
                fontFamily: 'Inter, Roboto, sans-serif',
                outline: 'none',
                transition: 'border-color 0.18s',
                boxSizing: 'border-box',
                color: '#111827',
              }}
            />
            {error && (
              <p style={{
                fontFamily: 'Inter, Roboto, sans-serif',
                fontSize: 13,
                color: '#EF4444',
                margin: 0,
                textAlign: 'left',
              }}>Incorrect password. Try again.</p>
            )}
            <button
              className="pg-unlock-btn"
              onClick={handleUnlock}
              style={{
                background: accentColor,
                color: 'white',
                border: 'none',
                borderRadius: 10,
                padding: '13px 24px',
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'Inter, Roboto, sans-serif',
                cursor: 'pointer',
                transition: 'opacity 0.18s',
                letterSpacing: '0.01em',
              }}
            >
              Unlock →
            </button>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div style={{ padding: '24px 32px', textAlign: 'center' }}>
        <Link
          href="/#work"
          className="pg-back"
          style={{
            fontFamily: 'Inter, Roboto, sans-serif',
            fontSize: 14,
            color: '#6b7280',
            textDecoration: 'none',
            transition: 'opacity 0.18s',
          }}
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
}
