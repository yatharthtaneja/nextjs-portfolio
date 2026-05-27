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

        .prose { max-width: 720px; margin: 0 auto; padding: 64px 24px; }
        .wide  { max-width: 1080px; margin: 0 auto; padding: 64px 24px; }

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

        .insight-block { padding: 48px 0; border-bottom: 1px solid ${LINE}; }
        .insight-block:last-child { border-bottom: none; }
        .insight-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 768px) {
          .insight-grid { grid-template-columns: 1fr; }
          .artifact-col { order: -1; }
        }
        .insight-eyebrow {
          font-family: Inter, sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: ${A}; margin-bottom: 10px;
        }
        .insight-h3 { font-family: Inter, sans-serif; font-weight: 700; font-size: 21px;
          color: ${INK}; line-height: 1.3; margin: 0 0 24px; }
        .insight-body { font-family: Inter, sans-serif; font-size: 16px;
          color: ${INK2}; line-height: 1.7; margin: 0 0 8px; }

        .pull-quote {
          border-left: 3px solid ${AS}; padding: 14px 18px; margin: 18px 0;
          background: ${AB}; border-radius: 0 8px 8px 0;
        }
        .pull-quote blockquote {
          font-family: Inter, sans-serif; font-size: 16px; font-style: italic;
          color: ${INK}; line-height: 1.6; margin: 0 0 6px;
        }
        .pull-quote cite { font-family: Inter, sans-serif; font-size: 13px; color: ${INK3}; font-style: normal; }

        .mono { font-family: 'JetBrains Mono', monospace; font-size: 0.9em; }
        .skip-link {
          font-family: Inter, sans-serif; font-size: 14px; color: ${A};
          text-decoration: none; border-bottom: 1px solid ${AS};
        }
        .skip-link:hover { opacity: 0.75; }
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
      `}</style>
  );
}
