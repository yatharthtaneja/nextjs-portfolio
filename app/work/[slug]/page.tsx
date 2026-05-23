'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import PasswordGate from '@/app/components/PasswordGate';

type StudyMeta = {
  title: string;
  type: string;
  status: string;
  statusBg: string;
  statusColor: string;
  accentColor: string;
  softColor: string;
  readTime: string;
  blurb: string;
};

const STUDIES: Record<string, StudyMeta> = {
  'mqtt-survey': {
    title: 'MQTT Toolbox Survey',
    type: 'Survey Research · Strategy · MathWorks',
    status: 'Coming Soon',
    statusBg: '#FEF3C7',
    statusColor: '#92400e',
    accentColor: '#B45309',
    softColor: '#FDE8C8',
    readTime: '10 min read',
    blurb: 'Strategic-partner research at its loudest. 57 respondents, statistical analysis, and an interactive dashboard as the deliverable — not a slide deck.',
  },
  'ni-daqmx': {
    title: 'NI-DAQmx API Design',
    type: 'API Design · Comparative Study · MathWorks',
    status: 'Coming Soon',
    statusBg: '#DBEAFE',
    statusColor: '#1e40af',
    accentColor: '#1D4ED8',
    softColor: '#C4D9F7',
    readTime: '10 min read',
    blurb: 'Comparative usability of two API styles — function-based (3.27 ease-of-use) vs. class-based (2.55). Research-led API design, rare in UXR portfolios.',
  },
  'opc-ua-server': {
    title: 'OPC UA Server',
    type: 'Strategic Planning · Workshop · MathWorks',
    status: 'In Development · Beta H2 2026',
    statusBg: '#FEF3C7',
    statusColor: '#92400e',
    accentColor: '#0D6E6B',
    softColor: '#B2EDE8',
    readTime: '14 min read',
    blurb: 'Discovery + an 8-hour, 3-day form-factor workshop (app vs. API vs. Simulink block). The senior strategic-planning case — honest about being unfinished.',
  },
};

function ComingSoonContent({ study }: { study: StudyMeta }) {
  const { accentColor, softColor } = study;
  const INK = '#111827';
  const INK2 = '#374151';
  const INK3 = '#6b7280';
  const LINE = '#e5e7eb';

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <style>{`
        .cs-nav-plain {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid ${LINE};
        }
        .cs-nav-plain-inner {
          max-width: 1080px; margin: 0 auto;
          padding: 0 24px; height: 56px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .cs-back-plain {
          font-family: Inter, Roboto, sans-serif; font-size: 14px;
          color: ${INK2}; text-decoration: none; transition: color 0.15s;
        }
        .cs-back-plain:hover { color: ${accentColor}; }
      `}</style>

      {/* Nav */}
      <nav className="cs-nav-plain">
        <div className="cs-nav-plain-inner">
          <Link href="/#work" className="cs-back-plain">← Back to portfolio</Link>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, color: INK }}>
            {study.title}
          </span>
          <span style={{ width: 120 }} />
        </div>
      </nav>

      {/* Main content */}
      <div style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        background: `color-mix(in srgb, ${softColor} 8%, white)`,
      }}>
        <div style={{
          maxWidth: 560,
          width: '100%',
          background: 'white',
          borderRadius: 20,
          padding: '48px 40px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
          border: `1.5px solid ${softColor}`,
          textAlign: 'center',
        }}>
          {/* Accent block */}
          <div style={{
            width: 80,
            height: 80,
            background: `color-mix(in srgb, ${softColor} 60%, white)`,
            borderRadius: 20,
            border: `1.5px solid ${softColor}`,
            margin: '0 auto 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 36,
          }}>✍️</div>

          {/* Status badge */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: study.statusBg,
            color: study.statusColor,
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 600,
            padding: '5px 12px',
            borderRadius: 20,
            marginBottom: 20,
          }}>{study.status}</span>

          <h1 style={{
            fontFamily: 'Inter, Roboto, sans-serif',
            fontWeight: 700,
            fontSize: 26,
            color: INK,
            margin: '0 0 10px',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}>{study.title}</h1>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: INK3,
            margin: '0 0 20px',
          }}>{study.type}</p>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            color: INK2,
            lineHeight: 1.7,
            margin: '0 0 32px',
          }}>{study.blurb}</p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 13,
            color: INK3,
            marginBottom: 32,
          }}>
            <span>{study.readTime}</span>
          </div>

          <Link href="/#work" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'Inter, sans-serif',
            fontSize: 15,
            fontWeight: 600,
            color: accentColor,
            textDecoration: 'none',
            borderBottom: `2px solid ${softColor}`,
            paddingBottom: 2,
            transition: 'opacity 0.15s',
          }}>
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SlugPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const study = STUDIES[slug];

  if (!study) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#6b7280', marginBottom: 16 }}>Case study not found.</p>
          <Link href="/" style={{ color: '#1E6B4A', textDecoration: 'none' }}>← Back to portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <PasswordGate accentColor={study.accentColor} softColor={study.softColor}>
      <ComingSoonContent study={study} />
    </PasswordGate>
  );
}
