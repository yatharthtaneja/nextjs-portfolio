import { A, AB, AD, AS, CARD, INK, INK2, INK3, LINE } from './theme';

// All styles for the NI-DAQmx case study. Kept as a styled-jsx block so the
// JS color constants interpolate directly. Imported once at the top of
// NiDaqmxContent.
export default function NiDaqmxStyles() {
  return (
    <style>{`
        .hero-wrap { background: ${AB}; padding: 72px 24px 80px; }
        .hero-grid {
          max-width: 1180px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.15fr; gap: 56px; align-items: start;
        }
        @media (max-width: 1024px) { .hero-grid { gap: 40px; } }
        @media (max-width: 768px)  { .hero-grid { grid-template-columns: 1fr; gap: 32px; } }
        .hero-visual { width: 100%; max-width: 640px; margin: 0 auto; }

        .stat-row { display: flex; flex-wrap: wrap; gap: 6px 0; margin-top: 24px; }
        .stat-item { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: ${INK2}; }
        .stat-sep  { color: ${INK3}; padding: 0 8px; }

        .prose { max-width: 1080px; margin: 0 auto; padding: 80px 24px; }
        .wide  { max-width: 1080px; margin: 0 auto; padding: 80px 24px; }

        .tldr-grid {
          max-width: 1080px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        }
        @media (max-width: 900px) { .tldr-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .tldr-grid { grid-template-columns: 1fr; } }
        .tldr-cell { padding: 28px 28px 28px 0; border-right: 1px solid ${AS}; }
        .tldr-cell:first-child { padding-left: 0; }
        .tldr-cell:last-child  { border-right: none; padding-right: 0; }
        @media (max-width: 900px) {
          .tldr-cell:nth-child(2) { border-right: none; padding-right: 0; }
          .tldr-cell:nth-child(3) { padding-left: 0; border-right: 1px solid ${AS}; }
          .tldr-cell { padding-bottom: 24px; padding-top: 24px; }
          .tldr-cell:nth-child(1), .tldr-cell:nth-child(2) { border-bottom: 1px solid ${AS}; }
        }
        @media (max-width: 540px) {
          .tldr-cell { border-right: none !important; border-bottom: 1px solid ${AS}; padding: 20px 0; }
          .tldr-cell:last-child { border-bottom: none; }
        }
        .tldr-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${A}; margin-bottom: 10px;
        }
        .tldr-value { font-family: Inter, sans-serif; font-size: 14px; color: ${INK2}; line-height: 1.65; }

        .phase-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 768px) { .phase-grid { grid-template-columns: 1fr; } }
        .phase-card { background: white; border: 1px solid ${LINE}; border-radius: 14px; padding: 24px; }
        .phase-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: ${A}; margin-bottom: 10px;
        }
        .phase-stats {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: ${INK3};
          line-height: 1.7; margin-bottom: 14px;
        }
        .phase-body { font-family: Inter, sans-serif; font-size: 14px; color: ${INK2}; line-height: 1.65; }
        .phase-divider { height: 1px; background: ${LINE}; margin: 14px 0; }

        /* ── Head-to-head ── */
        .hth-grid {
          display: grid; grid-template-columns: 1fr auto 1fr; gap: 0; align-items: start;
        }
        @media (max-width: 768px) { .hth-grid { grid-template-columns: 1fr; } }
        .hth-panel { background: #1e1e1e; border: 1px solid #3a3a3a; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.28); }
        .hth-panel-label {
          padding: 10px 16px; border-bottom: 1px solid #3a3a3a;
          background: #2d2d2d;
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em; color: #d4d4d4;
        }
        .hth-winner {
          background: ${A}; color: #fff; border: none;
          font-family: Inter, sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase; padding: 3px 9px; border-radius: 10px;
        }
        .hth-code {
          padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 12.5px;
          line-height: 1.65; white-space: pre; overflow-x: auto; color: #D4D4D4; margin: 0;
          display: block; background: #1e1e1e;
        }
        .hth-score { padding: 16px 20px; border-top: 1px solid #3a3a3a; background: #252525; }
        .hth-score-num {
          font-family: Inter, sans-serif; font-size: 42px; font-weight: 800; line-height: 1;
        }
        .hth-score-sub { font-family: Inter, sans-serif; font-size: 12px; color: #9ca3af; margin-top: 5px; }
        .hth-vs {
          display: flex; align-items: center; justify-content: center;
          padding: 0 20px; min-width: 48px;
        }
        @media (max-width: 768px) { .hth-vs { padding: 14px 0; } }
        .hth-vs-text {
          font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: ${INK3};
        }

        .insight-block { padding: 56px 0; border-bottom: 1px solid ${LINE}; }
        .insight-block:last-child { border-bottom: none; padding-bottom: 24px; }
        .insight-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        .insight-grid > * { min-width: 0; }
        .artifact-col { min-width: 0; }
        .artifact-col > * { max-width: 100%; }
        @media (min-width: 769px) {
          .artifact-col {
            position: sticky;
            top: 96px;
            align-self: start;
          }
        }
        @media (max-width: 768px) {
          .insight-grid { grid-template-columns: 1fr; gap: 32px; }
          .artifact-col { order: -1; }
        }
        .insight-eyebrow {
          font-family: Inter, sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: ${A};
          margin: 0 0 12px;
        }
        .insight-h3 {
          font-family: Inter, sans-serif; font-weight: 800;
          font-size: clamp(22px, 2.4vw, 30px);
          color: ${INK}; line-height: 1.15; letter-spacing: -0.02em;
          margin: 0 0 28px; text-wrap: balance;
        }
        .insight-body {
          font-family: Inter, sans-serif; font-size: 15.5px;
          color: ${INK3}; line-height: 1.7; margin: 0 0 24px;
        }
        .insight-body:last-child { margin-bottom: 0; }

        .pull-quote {
          position: relative; isolation: isolate;
          padding: 18px 22px; margin: 24px 0;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(29, 78, 216, 0.16);
          border-radius: 12px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            0 14px 40px -24px rgba(29, 78, 216, 0.32);
        }
        .pull-quote::before {
          content: ''; position: absolute; inset: -20px; z-index: -1;
          background:
            radial-gradient(ellipse 60% 80% at 20% 60%, rgba(29, 78, 216, 0.14), transparent 70%),
            radial-gradient(ellipse 55% 70% at 85% 70%, rgba(196, 217, 247, 0.55), transparent 75%);
          filter: blur(16px); border-radius: 22px; pointer-events: none;
        }
        .pull-quote blockquote {
          font-family: Inter, sans-serif; font-size: 16px; font-style: italic;
          color: ${INK}; line-height: 1.6; margin: 0 0 6px;
        }
        .pull-quote cite { font-family: Inter, sans-serif; font-size: 13px; color: ${INK3}; font-style: normal; }

        .mono {
          font-family: 'JetBrains Mono', monospace; font-size: 0.85em;
          background: #eaedff; color: ${AD};
          padding: 1.5px 6px; border-radius: 4px;
          overflow-wrap: anywhere; word-break: break-word;
        }

        /* ── Section eyebrow + display H2 (Visual Narrative Studio style) ── */
        .cs-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin: 0 0 20px;
        }
        .cs-eyebrow-num {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 500; color: ${A}; opacity: 0.6;
        }
        .cs-eyebrow-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: ${A};
        }
        .cs-eyebrow-rule {
          flex: 0 0 48px; height: 1px;
          background: ${A}; opacity: 0.4;
        }
        .cs-h2 {
          font-family: Inter, sans-serif; font-weight: 600;
          font-size: clamp(30px, 4.5vw, 56px);
          color: ${INK}; line-height: 1.05;
          margin: 20px 0 32px;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }
        .cs-h2 em {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic; font-weight: 400;
          color: ${A};
          letter-spacing: -0.005em;
        }
        .stat-strip {
          margin-top: 32px; padding: 32px;
          background: linear-gradient(180deg, #eef1ff 0%, #faf8ff 100%);
          border-radius: 16px; border: 1px solid rgba(33, 81, 218, 0.15);
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: center;
        }
        @media (max-width: 600px) {
          .stat-strip { grid-template-columns: 1fr; gap: 18px; padding: 24px; }
        }
        .stat-num {
          margin: 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(28px, 3.2vw, 36px); font-weight: 800;
          color: ${A}; line-height: 1; letter-spacing: -0.01em;
        }
        .stat-label {
          margin: 8px 0 0;
          font-family: Inter, sans-serif; font-size: 14px; color: ${INK3};
        }
        .skip-link {
          font-family: Inter, sans-serif; font-size: 14px; color: ${A};
          text-decoration: none; border-bottom: 1px solid ${AS};
        }
        .skip-link:hover { opacity: 0.75; }
        .skip-ctx { display: none; }
        @media (min-width: 769px) { .skip-ctx { display: inline; } }
        .docs-link { font-family: 'JetBrains Mono', monospace; font-size: 13px;
          color: ${A}; text-decoration: none; border-bottom: 1px solid ${AS}; }
        .docs-link:hover { opacity: 0.75; }

        .cs-footer { background: ${AB}; border-top: 3px solid ${A}; padding: 48px 24px; }
        .footer-inner { max-width: 1080px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
        .footer-link {
          font-family: Inter, sans-serif; font-size: 15px; font-weight: 600;
          color: ${A}; text-decoration: none; border-bottom: 2px solid ${AS}; padding-bottom: 2px;
        }
        .footer-link:hover { opacity: 0.75; }

        .reflection-num {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; color: ${A}; margin-bottom: 6px;
        }

        .chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
        @media (max-width: 640px) { .chart-grid { grid-template-columns: 1fr; } }
        .btw-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 860px) { .btw-grid { grid-template-columns: 1fr; } }
        .btw-card { display: flex; flex-direction: column; gap: 12px; }
        .btw-caption { font-family: Inter, sans-serif; font-size: 13px; color: ${INK3}; line-height: 1.6; margin: 0; }
        .btw-caption-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 28px; margin: 36px 0 0;
        }
        @media (max-width: 860px) { .btw-caption-grid { grid-template-columns: 1fr; gap: 18px; } }
        .btw-caption-label {
          display: block; margin-bottom: 5px;
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: ${A};
        }

        /* ── HOOK — audience-first opening ── */
        .hook-h1 {
          font-family: Inter, sans-serif; font-weight: 800;
          font-size: clamp(28px, 3.6vw, 46px); line-height: 1.1;
          color: ${INK}; margin: 0 0 22px; letter-spacing: -0.02em;
        }
        .hook-kicker {
          font-family: Inter, sans-serif; font-weight: 700;
          font-size: clamp(17px, 1.8vw, 21px); line-height: 1.4;
          color: ${INK}; margin: 28px 0 0; padding-top: 18px;
          border-top: 2px solid ${A};
        }
        .hook-kicker em { color: ${A}; font-style: italic; }
        .hook-transition {
          max-width: 720px; margin: 0 auto; padding: 28px 24px 36px;
          font-family: Inter, sans-serif; font-size: 14px; font-style: italic;
          color: ${INK3}; text-align: center; line-height: 1.65;
        }

        /* ── BEFORE / AFTER visual ── */
        .ba-stack { display: flex; flex-direction: column; gap: 14px; }
        .ba-row {
          display: grid; grid-template-columns: 1fr auto 1fr;
          gap: 10px; align-items: stretch;
        }
        @media (max-width: 640px) {
          .ba-row { grid-template-columns: 1fr; }
          .ba-arrow { padding: 8px 0; }
          .ba-arrow .arr { transform: rotate(90deg); }
        }
        .ba-block { border-radius: 10px; overflow: hidden; min-width: 0; }
        .ba-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: ${INK3};
          padding: 8px 12px; background: #f3f4f6; border-bottom: 1px solid ${LINE};
        }
        .ba-before {
          background: #fafafa; border: 1px dashed #d1d5db;
          position: relative; max-height: 300px; overflow: hidden;
        }
        .ba-before::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 90px;
          background: linear-gradient(transparent, #fafafa); pointer-events: none;
        }
        .ba-before code {
          display: block; padding: 12px 14px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; line-height: 1.55;
          color: ${INK3}; opacity: 0.55; white-space: pre; overflow: hidden;
        }
        .ba-after {
          background: #ffffff; border: 1px solid ${LINE};
          box-shadow: 0 4px 16px rgba(29, 78, 216, 0.08);
        }
        .ba-after code {
          display: block; padding: 14px 16px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.8;
          white-space: pre; overflow-x: auto;
        }
        .ba-arrow {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          color: ${A}; font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; gap: 4px;
          padding: 0 4px;
        }
        .ba-arrow .arr { font-size: 24px; line-height: 1; font-weight: 400; }

        /* ── Naming alternatives inset ── */
        .naming-card {
          background: #ffffff; border: 1px solid ${LINE}; border-radius: 10px;
          padding: 18px 20px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .naming-row {
          display: flex; align-items: center; gap: 10px; padding: 5px 0;
          font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: ${INK2};
        }
        .naming-row .ic { width: 16px; display: inline-block; font-weight: 700; }
        .naming-row.chosen { color: ${INK}; font-weight: 600; }
        .naming-row.chosen .ic { color: ${A}; }
        .naming-row.rej { color: ${INK3}; }
        .naming-row.rej .ic { color: ${INK3}; }
        .naming-caption {
          font-family: Inter, sans-serif; font-size: 12px; color: ${INK3};
          line-height: 1.55; margin: 12px 0 0; font-style: italic;
        }

        /* ── Reduced motion (gates PulseDot rings + collage hover) ── */
        @media (prefers-reduced-motion: reduce) {
          .data-flow { display: none; }
          .bs-card { transition: none; }
        }

        /* ── §3 Role timeline ── */
        .role-timeline { width: 100%; max-width: 720px; margin: 12px auto 28px; display: block; }

        /* ── §4 Glossary tiles ── */
        .glossary-grid-daq {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 12px; margin: 8px 0 36px;
        }
        @media (max-width: 900px) { .glossary-grid-daq { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .glossary-grid-daq { grid-template-columns: 1fr; } }
        .glossary-tile-daq {
          background: white; border: 1px solid ${LINE};
          border-radius: 12px; padding: 18px 18px 20px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .g-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A}; margin: 0;
        }
        .g-icon { width: 40px; height: 40px; }
        .g-term {
          font-family: Inter, sans-serif; font-weight: 700; font-size: 15px;
          color: ${INK}; margin: 0; letter-spacing: -0.005em;
        }
        .g-def {
          font-family: Inter, sans-serif; font-size: 13.5px;
          color: ${INK2}; margin: 0; line-height: 1.55;
        }
        .g-mono {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          background: ${AB}; color: ${AD};
          padding: 1px 5px; border-radius: 3px;
        }

        /* ── §5 Infrastructure metaphor ── */
        .infra-metaphor { margin: 28px 0 8px; }
        .infra-svg { width: 100%; max-width: 720px; margin: 0 auto; display: block; }
        .infra-caption {
          font-family: Inter, sans-serif; font-size: 13px; font-style: italic;
          color: ${INK3}; text-align: center; line-height: 1.55;
          max-width: 560px; margin: 16px auto 0;
        }

        /* ── §6 Phase funnel ── */
        .phase-funnel { width: 100%; max-width: 920px; margin: 8px auto 36px; display: block; }

        /* ── §8 Insight visuals ─────────────────────────────────────── */

        /* Error terminal */
        .err-stack { display: flex; flex-direction: column; gap: 8px; }
        .err-card {
          border-radius: 10px; overflow: hidden;
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.12);
          margin: 0;
        }
        .err-before { background: #1e1e1e; border: 1px solid #3a3a3a; }
        .err-after  { background: #ffffff; border: 1px solid ${LINE}; box-shadow: 0 6px 22px rgba(29, 78, 216, 0.10); }
        .err-chrome {
          padding: 9px 14px; border-bottom: 1px solid #3a3a3a; background: #2d2d2d;
          display: flex; align-items: center; gap: 12px;
        }
        .err-chrome-light { background: ${AB}; border-bottom: 1px solid ${LINE}; }
        .err-dots { display: flex; gap: 5px; }
        .err-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .err-title {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700;
          color: #d4d4d4; letter-spacing: 0.06em; text-transform: uppercase;
          flex: 1;
        }
        .err-title-light { color: ${INK2}; }
        .err-badge {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 3px 8px; border-radius: 10px;
          display: inline-flex; align-items: center;
        }
        .err-badge-bad { background: rgba(248, 113, 113, 0.18); color: #f87171; border: 1px solid rgba(248, 113, 113, 0.4); }
        .err-badge-good { background: ${AS}; color: ${A}; }
        .err-body {
          padding: 14px 16px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          line-height: 1.7; white-space: pre-wrap; word-break: break-word;
          margin: 0;
        }
        .err-body-dark { background: #1e1e1e; color: #d4d4d4; }
        .err-body-light { background: #ffffff; color: ${INK}; }
        .err-prompt { color: #6A9955; font-weight: 700; }
        .err-prompt-light { color: ${A}; font-weight: 700; }
        .err-code { color: #d4d4d4; }
        .err-code-light { color: ${INK2}; }
        .err-red { color: #f87171; font-weight: 600; display: inline-block; }
        .err-red-soft { color: #fca5a5; }
        .err-err-label { color: #DC2626; font-weight: 700; }
        .err-fn { color: ${AD}; font-weight: 600; }
        .err-arg { color: ${A}; font-weight: 600; }
        .err-msg { color: #DC2626; font-weight: 600; }
        .err-hint-label { color: ${INK2}; font-weight: 600; }
        .err-valid { color: ${A}; font-weight: 700; }
        .err-arrow {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 4px 0; color: ${INK3};
        }
        .err-arrow-line { width: 40px; height: 1px; background: ${LINE}; }
        .err-arrow-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700;
          color: ${A}; letter-spacing: 0.12em; text-transform: uppercase;
        }
        .err-arrow-tip { color: ${A}; font-size: 10px; }

        /* Autocomplete */
        .ac-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
        }
        @media (max-width: 720px) { .ac-grid { grid-template-columns: 1fr; } }
        .ac-card {
          background: #1e1e1e; border: 1px solid #3a3a3a;
          border-radius: 10px; overflow: hidden;
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.12); margin: 0;
        }
        .ac-chrome {
          padding: 9px 14px; border-bottom: 1px solid #3a3a3a; background: #2d2d2d;
          display: flex; align-items: center; gap: 10px;
        }
        .ac-dots { display: flex; gap: 5px; }
        .ac-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .ac-title {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700;
          color: #d4d4d4; letter-spacing: 0.06em; text-transform: uppercase;
        }
        .ac-body { padding: 18px 16px 16px; background: #1e1e1e; position: relative; }
        .ac-line {
          font-family: 'JetBrains Mono', monospace; font-size: 12.5px;
          color: #d4d4d4; padding: 6px 4px; line-height: 1.5; white-space: nowrap;
          overflow-x: auto;
        }
        .ac-fn { color: #DCDCAA; }
        .ac-var { color: #9CDCFE; }
        .ac-punc { color: #D4D4D4; }
        .ac-str { color: #CE9178; }
        .ac-caret {
          display: inline-block; width: 1.5px; height: 14px; background: ${A};
          vertical-align: middle; margin-left: 1px;
          animation: acCaret 1.05s steps(2, end) infinite;
        }
        @keyframes acCaret { 50% { opacity: 0; } }
        .ac-dropdown {
          margin-top: 4px; background: #252526; border: 1px solid #3a3a3a;
          border-radius: 4px; overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
        }
        .ac-item {
          display: flex; align-items: center; gap: 10px;
          padding: 6px 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
          color: #d4d4d4; line-height: 1.4;
        }
        .ac-item-active { background: ${A}; color: #fff; }
        .ac-item-active .ac-item-icon { color: #fff; }
        .ac-item-icon {
          width: 14px; height: 14px; display: inline-flex;
          align-items: center; justify-content: center;
          color: #DCDCAA; font-weight: 700; font-size: 10px;
          border: 1px solid currentColor; border-radius: 2px;
        }
        .ac-item-more { color: #6A9955; font-style: italic; }
        .ac-item-more .ac-item-icon { border-color: #6A9955; color: #6A9955; }
        .ac-dropdown-empty { padding: 16px 14px; }
        .ac-empty-line {
          display: flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: #9ca3af;
          padding-bottom: 8px; border-bottom: 1px dashed #3a3a3a;
        }
        .ac-empty-icon { color: #f87171; font-size: 14px; font-weight: 700; }
        .ac-empty-text { font-style: italic; }
        .ac-empty-help {
          margin-top: 10px;
          font-family: Inter, sans-serif; font-size: 11.5px; color: #9ca3af; line-height: 1.5;
        }
        .ac-empty-code {
          display: inline-block; margin-top: 5px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          background: #1e1e1e; color: #DCDCAA;
          padding: 2px 6px; border-radius: 3px; border: 1px solid #3a3a3a;
        }
        .ac-note {
          margin: 14px 0 0; padding: 8px 10px;
          font-family: Inter, sans-serif; font-size: 12px; line-height: 1.5;
          border-radius: 6px; border-left: 2px solid;
        }
        .ac-note-good { background: rgba(29, 78, 216, 0.10); color: #cbd5e1; border-color: ${A}; }
        .ac-note-bad  { background: rgba(248, 113, 113, 0.08); color: #cbd5e1; border-color: #f87171; }

        /* Required / optional code */
        .ro-stack { display: flex; flex-direction: column; gap: 10px; }
        .ro-card {
          background: #ffffff; border-radius: 10px; overflow: hidden;
          border: 1px solid ${LINE}; margin: 0;
          box-shadow: 0 4px 14px rgba(17, 24, 39, 0.06);
        }
        .ro-card-bad { border-left: 3px solid #f87171; }
        .ro-card-good { border-left: 3px solid ${A}; }
        .ro-chrome {
          padding: 10px 14px; border-bottom: 1px solid ${LINE}; background: ${CARD};
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          flex-wrap: wrap;
        }
        .ro-label {
          font-family: Inter, sans-serif; font-size: 12.5px; font-weight: 700; color: ${INK};
        }
        .ro-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 10px;
        }
        .ro-tag-bad  { background: rgba(248, 113, 113, 0.14); color: #b91c1c; }
        .ro-tag-good { background: ${AS}; color: ${A}; }
        .ro-body { padding: 14px 16px; font-family: 'JetBrains Mono', monospace; }
        .ro-line {
          display: grid; grid-template-columns: 24px 1fr auto;
          align-items: center; gap: 12px;
          padding: 5px 0; font-size: 12.5px;
        }
        .ro-line > * { min-width: 0; }
        .ro-code { overflow-wrap: anywhere; word-break: break-word; }
        .ac-grid { min-width: 0; }
        .ac-grid > * { min-width: 0; }
        .ro-gutter {
          width: 20px; height: 20px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
        }
        .ro-gutter-q   { background: rgba(248, 113, 113, 0.18); color: #b91c1c; }
        .ro-gutter-req { background: ${A}; color: #fff; }
        .ro-gutter-opt { background: transparent; color: ${INK3}; border: 1.5px solid ${INK3}; }
        .ro-code { color: ${INK}; line-height: 1.5; }
        .ro-arg  { color: ${AD}; }
        .ro-str  { color: #047857; }
        .ro-enum { color: ${A}; }
        .ro-num  { color: #DB6F00; }
        .ro-pill {
          font-family: Inter, sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 2px 8px; border-radius: 10px;
        }
        .ro-pill-req { background: ${A}; color: #fff; }
        .ro-pill-opt { background: ${CARD}; color: ${INK3}; border: 1px solid ${LINE}; }
        .ro-caption {
          font-family: Inter, sans-serif; font-size: 12.5px; color: ${INK2};
          line-height: 1.6; margin: 0; padding: 10px 16px 14px;
          background: ${CARD};
          border-top: 1px solid ${LINE};
        }
        .ro-caption-bad { color: ${INK2}; }
        .ro-caption-good { color: ${INK2}; }
        .ro-mono {
          font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
          background: #ffffff; padding: 1px 5px; border-radius: 3px; color: ${AD};
        }
        .ro-divider {
          display: flex; align-items: center; justify-content: center;
          padding: 4px 0;
        }
        .ro-divider-text {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: ${A}; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
        }

        /* Worked example doc */
        .we-wrap { display: flex; flex-direction: column; gap: 14px; }
        .we-grid { display: flex; flex-direction: column; gap: 14px; }
        .we-path {
          display: grid; grid-template-columns: 130px 28px 1fr;
          gap: 8px; align-items: center;
        }
        @media (max-width: 540px) {
          .we-path { grid-template-columns: 100px 22px 1fr; gap: 6px; }
        }
        .we-path-day1  { color: ${A}; }
        .we-path-dayn  { color: ${INK3}; }
        .we-engineer { display: flex; align-items: center; gap: 8px; }
        .we-engineer-label { display: flex; flex-direction: column; line-height: 1.2; }
        .we-day {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: currentColor;
        }
        .we-engineer-sub {
          font-family: Inter, sans-serif; font-size: 10.5px;
          color: ${INK3}; margin-top: 1px;
        }
        .we-arrow {
          font-family: Inter, sans-serif; font-size: 18px; font-weight: 700;
          text-align: center; color: currentColor;
        }
        .we-arrow-good  { color: ${A}; }
        .we-arrow-faded { color: ${INK3}; opacity: 0.6; }
        .we-page {
          position: relative;
          background: #ffffff; border-radius: 10px;
          border: 1px solid ${LINE}; padding: 12px 14px;
          box-shadow: 0 4px 12px rgba(17, 24, 39, 0.05);
          margin: 0;
        }
        .we-page-good { border-color: ${A}; box-shadow: 0 6px 18px rgba(29, 78, 216, 0.14); }
        .we-page-faded { opacity: 0.5; }
        .we-page-badge {
          position: absolute; top: -10px; right: 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          background: ${A}; color: #fff;
          padding: 3px 9px; border-radius: 10px;
          display: inline-flex; align-items: center;
        }
        .we-page-title {
          font-family: Inter, sans-serif; font-size: 12px; font-weight: 700;
          color: ${INK}; padding-bottom: 8px; border-bottom: 1px solid ${LINE};
          margin-bottom: 8px;
        }
        .we-block { padding: 4px 0; }
        .we-block-code {
          background: #1e1e1e; border-radius: 4px; padding: 8px 10px;
          display: flex; flex-direction: column; gap: 4px;
          margin-bottom: 6px;
        }
        .we-block-line { display: block; height: 4px; border-radius: 1px; }
        .we-block-line-c1 { width: 55%; background: #DCDCAA; }
        .we-block-line-c2 { width: 78%; background: #9CDCFE; }
        .we-block-line-c3 { width: 62%; background: #CE9178; }
        .we-block-line-c4 { width: 70%; background: #569CD6; opacity: 0.7; }
        .we-block-line-c5 { width: 50%; background: #4FC1FF; }
        .we-block-line-c6 { width: 40%; background: #B5CEA8; }
        .we-block-prose {
          display: flex; flex-direction: column; gap: 5px; padding: 6px 0 4px;
        }
        .we-prose-line { display: block; height: 4px; border-radius: 1px; background: ${LINE}; }
        .we-block-table { display: flex; flex-direction: column; gap: 4px; padding: 4px 0; }
        .we-table-row {
          display: block; height: 6px; border-radius: 1px;
          background: ${LINE};
        }
        .we-caption {
          font-family: Inter, sans-serif; font-size: 12.5px; font-style: italic;
          color: ${INK3}; text-align: center; line-height: 1.55; margin: 4px 0 0;
        }

        /* ── §10 Mitigations shipped scorecard ─────────────────────── */
        .ms-wrap { margin: 0 0 28px; }
        .ms-header {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 8px; margin-bottom: 10px;
        }
        .ms-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A};
        }
        .ms-pill {
          font-family: Inter, sans-serif; font-size: 11.5px; font-weight: 700;
          background: ${AS}; color: ${A};
          padding: 4px 11px; border-radius: 12px;
          display: inline-flex; align-items: center;
        }
        .ms-bar {
          display: flex; width: 100%; height: 58px;
          border-radius: 8px; overflow: hidden; background: ${LINE};
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
        }
        .ms-segment {
          flex: 1; height: 100%;
          transform: scaleX(0); transform-origin: left center;
          transition: transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
          display: flex; align-items: center; gap: 10px;
          padding: 0 14px; color: #ffffff;
          border-right: 1px solid rgba(255,255,255,0.18);
        }
        .ms-segment:last-child { border-right: none; }
        .ms-segment.ms-in-view { transform: scaleX(1); }
        .ms-segment-n {
          font-family: 'JetBrains Mono', monospace; font-size: 14px;
          font-weight: 800; color: rgba(255,255,255,0.65); letter-spacing: -0.01em;
        }
        .ms-segment-label {
          font-family: Inter, sans-serif; font-size: 12.5px; font-weight: 700;
          line-height: 1.25; flex: 1;
        }
        @media (max-width: 720px) {
          .ms-bar { height: auto; flex-direction: column; }
          .ms-segment {
            transform-origin: left center; padding: 12px 14px;
            border-right: none; border-bottom: 1px solid rgba(255,255,255,0.18);
          }
          .ms-segment:last-child { border-bottom: none; }
        }

        /* ── Behind the work · brainstorm collage ───────────────────── */
        .bs-collage {
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
          transition:
            transform 240ms cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 240ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .bs-card svg {
          display: block; width: 100%; height: auto; border-radius: 4px;
        }
        .bs-card figcaption {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${INK3}; text-align: center;
          padding: 8px 6px 9px; line-height: 1.4;
        }
        .bs-main { width: 60%; right: 0; top: 4%; transform: rotate(1.6deg); z-index: 1; }
        .bs-tl   { width: 30%; left: 0; top: 0; transform: rotate(-3deg); z-index: 3; }
        .bs-br   { width: 38%; left: 18%; bottom: 0; transform: rotate(-1.4deg); z-index: 2; }
        @media (hover: hover) and (pointer: fine) {
          .bs-card:hover {
            transform: rotate(0deg) translateY(-4px);
            box-shadow:
              0 30px 56px -16px rgba(17, 24, 39, 0.34),
              0 10px 20px -6px rgba(17, 24, 39, 0.14);
            z-index: 4;
          }
        }
        .bs-card:active {
          transform: rotate(0deg) translateY(-2px) scale(0.98);
          z-index: 4;
        }
        @media (max-width: 900px) {
          .bs-collage { aspect-ratio: 4 / 3; }
          .bs-main { width: 64%; }
          .bs-tl   { width: 34%; }
          .bs-br   { width: 44%; left: 14%; }
        }
        @media (max-width: 640px) {
          .bs-collage {
            aspect-ratio: auto;
            display: flex; flex-direction: column; gap: 18px;
          }
          .bs-card { position: static; width: 100%; transform: none; }
          .bs-card:nth-child(1) { transform: rotate(-1.5deg); }
          .bs-card:nth-child(2) { transform: rotate(1deg); }
          .bs-card:nth-child(3) { transform: rotate(-0.6deg); }
        }
      `}</style>
  );
}
