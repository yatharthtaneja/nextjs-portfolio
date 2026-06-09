import { A, AB, AS, CARD, INK, INK2, INK3, LINE } from './theme';

// The entire style sheet for the OPC UA Explorer case study, kept as a
// styled-jsx <style> block so the JS color constants can be interpolated
// directly. Imported once at the top of OPCUAContent.
export default function OPCUAStyles() {
  return (
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

        .prose { max-width: 1080px; margin: 0 auto; padding: 80px 24px; }
        .wide { max-width: 1080px; margin: 0 auto; padding: 80px 24px; }

        .mono {
          font-family: 'JetBrains Mono', monospace; font-size: 0.85em;
          background: #e9f5ef; color: ${A};
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
          background: linear-gradient(180deg, #f0faf6 0%, #ffffff 100%);
          border-radius: 16px; border: 1px solid rgba(30, 107, 74, 0.15);
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

        /* ── Recommendation + What-shipped 2-col row, full width, below the insight-grid ── */
        .recap-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 56px;
          row-gap: 0;
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid ${LINE};
        }
        .recap-grid > div > p:first-child,
        .recap-grid > div > div:first-child { margin-top: 0 !important; }
        .recap-headline {
          display: flex; align-items: center;
          gap: 10px; flex-wrap: wrap;
          margin: 0 0 10px;
          min-height: 26px;   /* matches Pill height so both heads + bodies align */
        }
        .recap-headline p { margin: 0 !important; }
        .recap-headline span { margin-bottom: 0 !important; }
        @media (max-width: 768px) {
          .recap-grid { grid-template-columns: 1fr; column-gap: 0; row-gap: 18px; }
        }

        .insight-block { padding: 56px 0; border-bottom: 1px solid ${LINE}; }
        .insight-block:last-child { border-bottom: none; padding-bottom: 24px; }
        .insight-grid {
          display: grid; grid-template-columns: 0.85fr 1.6fr; gap: 56px; align-items: start;
        }
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
        @media (max-width: 1100px) {
          .insight-grid { grid-template-columns: 1fr 1.4fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .insight-grid { grid-template-columns: 1fr; gap: 24px; }
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
          margin: 0 0 28px;
        }
        .insight-body {
          font-family: Inter, sans-serif; font-size: 15.5px;
          color: ${INK3}; line-height: 1.7; margin: 0 0 24px;
        }
        .insight-body:last-child { margin-bottom: 0; }

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
          position: relative; isolation: isolate;
          padding: 18px 22px; margin: 24px 0;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(30, 107, 74, 0.16);
          border-radius: 12px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            0 14px 40px -24px rgba(30, 107, 74, 0.32);
        }
        .pull-quote::before {
          content: ''; position: absolute; inset: -20px; z-index: -1;
          background:
            radial-gradient(ellipse 60% 80% at 20% 60%, rgba(30, 107, 74, 0.14), transparent 70%),
            radial-gradient(ellipse 55% 70% at 85% 70%, rgba(184, 223, 208, 0.38), transparent 75%);
          filter: blur(16px); border-radius: 22px; pointer-events: none;
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

        /* ── Big pull quote (Playfair, serif) ── */
        .big-quote {
          position: relative; isolation: isolate;
          margin: 40px 0 12px;
          padding: 30px 34px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(30, 107, 74, 0.18);
          border-radius: 16px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            0 20px 55px -28px rgba(30, 107, 74, 0.42);
        }
        .big-quote::before {
          content: ''; position: absolute; inset: -28px; z-index: -1;
          background:
            radial-gradient(ellipse 60% 75% at 25% 50%, rgba(30, 107, 74, 0.18), transparent 70%),
            radial-gradient(ellipse 55% 80% at 80% 90%, rgba(184, 223, 208, 0.48), transparent 75%);
          filter: blur(20px); border-radius: 28px; pointer-events: none;
        }
        .big-quote blockquote {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(17px, 1.7vw, 21px);
          line-height: 1.45; color: ${INK}; margin: 0; font-style: italic;
        }
        .big-quote figcaption {
          font-family: Inter, sans-serif; font-size: 13px;
          color: ${INK3}; margin-top: 10px; letter-spacing: 0.02em;
        }

        /* ── §3 Timeline strip ── */
        .timeline-strip { width: 100%; max-width: 680px; margin: 0 auto 28px; display: block; }

        /* ── §4 Glossary card ── */
        .glossary-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 14px; margin: 8px 0 32px;
        }
        @media (max-width: 720px) { .glossary-grid { grid-template-columns: 1fr; } }
        .glossary-tile {
          background: white; border: 1px solid ${LINE};
          border-radius: 12px; padding: 20px 22px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .glossary-icon { width: 48px; height: 48px; flex-shrink: 0; }
        .glossary-term {
          font-family: Inter, sans-serif; font-weight: 700; font-size: 15px;
          color: ${INK}; margin: 0; letter-spacing: -0.005em;
        }
        .glossary-def {
          font-family: Inter, sans-serif; font-size: 14px;
          color: ${INK2}; margin: 0; line-height: 1.55;
        }
        .glossary-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: ${A}; margin: 0;
        }

        /* ── §5 Landscape map ── */
        .landscape-svg { width: 100%; max-width: 820px; margin: 8px auto 32px; display: block; }

        /* ── §6 Funnel strip ── */
        .funnel-strip { width: 100%; max-width: 1080px; margin: 0 auto 40px; display: block; }

        /* ── §9 Decision bar ── */
        .decision-bar-wrap { margin: 8px 0 28px; }
        .decision-bar {
          display: flex; width: 100%; height: 44px; border-radius: 8px;
          overflow: hidden; background: ${LINE};
        }
        .decision-segment {
          height: 100%;
          transform: scaleX(0); transform-origin: left center;
          transition: transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 6px; line-height: 1.15;
          color: white; font-family: 'JetBrains Mono', monospace;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
        }
        .decision-segment.in-view { transform: scaleX(1); }
        .decision-legend {
          display: flex; flex-wrap: wrap; gap: 18px;
          margin-top: 14px; font-family: Inter, sans-serif; font-size: 13px;
          color: ${INK2};
        }
        .decision-legend-dot {
          display: inline-block; width: 10px; height: 10px;
          border-radius: 50%; margin-right: 8px; vertical-align: middle;
        }

        /* ── §10 Lesson cards ── */
        .lesson-row {
          display: flex; gap: 28px; align-items: flex-start;
          background: ${CARD}; border: 1px solid ${LINE};
          border-radius: 14px; padding: 24px 26px;
          margin-bottom: 18px;
        }
        .lesson-row:last-child { margin-bottom: 0; }
        @media (max-width: 640px) {
          .lesson-row { flex-direction: column; gap: 14px; padding: 22px; }
        }
        .lesson-svg { width: 140px; height: 110px; flex-shrink: 0; }

        /* Lesson diagrams — clock+arrow+database (lesson 1), people clusters
           (lesson 2). Replaces the previous full-SVG illustrations with
           composed icon components. */
        .lesson-icon-box {
          width: 192px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lesson-diagram {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .lesson-icon-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .lesson-dashed-rule {
          width: 36px;
          height: 1px;
          border-top: 1px dashed ${INK3};
          opacity: 0.55;
          margin-top: 4px;
        }
        .lesson-people-row {
          display: flex;
          gap: 1px;
        }
        .lesson-icon-num {
          font-family: Inter, sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: ${INK};
          line-height: 1;
          margin-top: 4px;
        }
        .lesson-icon-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${INK3};
          line-height: 1.2;
        }
        .lesson-icon-sublabel {
          font-family: Inter, sans-serif;
          font-size: 9px;
          font-style: italic;
          color: ${A};
          line-height: 1.2;
        }
        @media (max-width: 640px) {
          .lesson-icon-box { width: 100%; padding: 4px 0 12px; }
        }
        .lesson-body { flex: 1; min-width: 0; }
        .lesson-body p { margin: 0; }

        /* ── §6b Discovery card visuals ── */
        .discovery-svg { width: 100%; height: auto; display: block; margin: 12px 0 6px; }

        /* ── Discovery 01: persona reframe (HTML layout, ported from stitch) ── */
        .reframe-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(184, 223, 208, 0.45);
          border-radius: 12px;
          padding: 36px 28px 24px;
          margin: 12px 0;
          min-height: 320px;
          overflow: hidden;
        }
        .reframe-label {
          position: absolute;
          top: 14px; left: 50%;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: ${INK3}; opacity: 0.7;
        }
        .reframe-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 18px; max-width: 380px; margin: 18px auto 0;
        }
        .reframe-figure {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: 6px; flex: 0 0 auto;
        }
        .reframe-figure-art {
          position: relative; width: 64px; height: 64px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 6px;
          overflow: visible;
        }
        .reframe-figure-art > svg { width: 64px; height: 64px; }
        .reframe-figure.wrong { opacity: 0.5; filter: grayscale(1); }
        .reframe-figure.wrong .reframe-figure-art { color: ${INK3}; }
        /* Big overlay X — extends ~14px past each side of the 64px figure to
           visually dominate it as "this is wrong". */
        .reframe-cross {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 92px; height: 92px;
          display: flex; align-items: center; justify-content: center;
          color: #c2525a;
          pointer-events: none;
        }
        .reframe-figure.right .reframe-figure-art { color: ${INK2}; }
        .reframe-dot-status {
          position: absolute; top: 4px; right: 8px;
          width: 10px; height: 10px; border-radius: 50%;
          background: ${A}; border: 2px solid #fff;
        }
        .reframe-dot-accent {
          position: absolute; bottom: 12px; left: 50%;
          transform: translateX(-50%);
          width: 6px; height: 6px; border-radius: 50%; background: ${AS};
        }
        .reframe-figure-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          line-height: 1.2;
        }
        .reframe-figure.wrong .reframe-figure-label { color: ${INK3}; }
        .reframe-figure.right .reframe-figure-label { color: ${A}; }
        .reframe-figure-sublabel {
          font-family: Inter, sans-serif; font-size: 11px;
          font-style: italic; color: ${INK3}; line-height: 1.3;
        }
        .reframe-arrow {
          flex: 1 1 auto; position: relative; height: 2px;
          background: transparent; border-top: 1.5px dashed ${A};
          opacity: 0.75; max-width: 100px; align-self: center; margin-top: 4px;
        }
        .reframe-arrow::after {
          content: ''; position: absolute; right: -2px; top: 50%;
          width: 7px; height: 7px;
          border-right: 1.5px solid ${A};
          border-top: 1.5px solid ${A};
          transform: translateY(-50%) rotate(45deg);
        }
        /* Want-strip lives inside the reframe card, filling the lower half. */
        .reframe-want-strip {
          margin: 28px 0 0;
        }

        /* ── Discovery 02: quadrant chart (HTML layout, ported from stitch) ── */
        .quadrant-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(184, 223, 208, 0.45);
          border-radius: 12px;
          padding: 28px 28px 20px;
          margin: 12px 0;
          min-height: 320px;
        }
        .quadrant-chart {
          position: relative; width: 100%;
          max-width: 360px; height: 220px;
          margin: 16px auto 28px;
          padding: 0 0 0 28px;
        }
        .quadrant-y-axis {
          position: absolute; left: 28px; top: 0; bottom: 28px;
          width: 1.5px; background: ${INK3}; opacity: 0.5;
        }
        .quadrant-x-axis {
          position: absolute; left: 28px; right: 0; bottom: 28px;
          height: 1.5px; background: ${INK3}; opacity: 0.5;
        }
        .quadrant-y-divider {
          position: absolute; left: 28px; right: 0; top: calc(50% - 14px);
          border-top: 1px dashed ${INK3}; opacity: 0.25;
        }
        .quadrant-x-divider {
          position: absolute; top: 0; bottom: 28px;
          left: calc(50% + 14px);
          border-left: 1px dashed ${INK3}; opacity: 0.25;
        }
        .quadrant-highlight {
          position: absolute; top: 0; left: 28px;
          width: calc(50% - 14px); height: calc(50% - 14px);
          background: rgba(184, 223, 208, 0.2);
          pointer-events: none;
        }
        /* Wrapper sits in the 28px-wide left gutter. Flex centers the
           rotated text vertically + horizontally inside the gutter so its
           after-rotation bounding box stays clear of the plot area. */
        .quadrant-y-label-area {
          position: absolute;
          left: 0; top: 0; bottom: 28px;
          width: 28px;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
        }
        .quadrant-y-label {
          transform: rotate(-90deg);
          white-space: nowrap;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${INK3};
        }
        .quadrant-y-tick {
          position: absolute; left: 32px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px; color: ${INK3};
        }
        .quadrant-y-tick.top { top: -4px; }
        .quadrant-y-tick.bottom { bottom: 32px; }
        .quadrant-x-label {
          position: absolute; left: calc(50% + 14px); bottom: -2px;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${INK3}; white-space: nowrap;
        }
        .quadrant-x-tick {
          position: absolute; bottom: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px; color: ${INK3};
        }
        .quadrant-x-tick.left { left: 32px; }
        .quadrant-x-tick.right { right: 4px; }
        .quadrant-point {
          position: absolute;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          transform: translate(-50%, -50%);
        }
        .quadrant-point-label {
          font-family: Inter, sans-serif; font-size: 10px;
          color: ${INK3}; white-space: nowrap;
        }
        .quadrant-point-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: ${AS}; border: 1px solid ${A};
          opacity: 0.65;
        }
        .quadrant-anchor {
          position: absolute;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        .quadrant-anchor-label {
          font-family: Inter, sans-serif; font-size: 11.5px;
          font-weight: 700; color: ${A}; white-space: nowrap;
        }
        .quadrant-anchor-dot {
          position: relative; width: 18px; height: 18px;
          border-radius: 50%; background: ${A};
          box-shadow: 0 0 0 6px rgba(184, 223, 208, 0.45);
          display: flex; align-items: center; justify-content: center;
        }
        .quadrant-anchor-dot::after {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          background: #fff;
        }
        /* Standalone callout positioned at chart-relative coords (set inline
           in JSX). The connecting line angles up-left from the text toward
           the anchor dot above-left of the callout. */
        .quadrant-anchor-callout {
          position: absolute;
          display: flex; align-items: center; gap: 6px;
          z-index: 3;
        }
        .quadrant-anchor-callout-line {
          width: 26px; height: 1.5px;
          background: ${A}; opacity: 0.65;
          transform: rotate(-22deg);
          transform-origin: right center;
        }
        .quadrant-anchor-callout-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A};
        }
        @media (max-width: 720px) {
          .reframe-card, .quadrant-card { min-height: 280px; padding: 32px 18px 20px; }
          .reframe-row { gap: 10px; max-width: 100%; }
          .quadrant-chart { max-width: 100%; }
        }

        .discovery-want-strip {
          margin: 8px 0 4px;
          padding: 12px 14px;
          background: rgba(184, 223, 208, 0.18);
          border: 1px solid rgba(30, 107, 74, 0.12);
          border-radius: 10px;
          color: ${INK2};
        }
        .discovery-want-label {
          display: block;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${A}; margin: 0 0 8px;
        }
        .discovery-want-items {
          display: flex; gap: 14px 18px; flex-wrap: wrap;
        }
        .discovery-want-item {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: Inter, sans-serif; font-size: 12px;
          color: ${INK2};
        }
        .discovery-want-item svg { width: 16px; height: 16px; flex-shrink: 0; color: ${A}; }
        .discovery-caption {
          font-family: Inter, sans-serif; font-size: 13px; font-style: italic;
          color: ${INK2}; text-align: center; margin: 6px 4px 10px;
          line-height: 1.5;
        }
        .impact-label { color: ${A} !important; }

        /* ── ZoomFrame: scroll-triggered dramatic zoom on screenshots ── */
        .zoom-frame {
          position: relative; overflow: hidden;
          width: 100%;
          margin: 14px 0 8px;
          border: 1px solid ${LINE};
          border-radius: 12px;
          background: #0f1f1a;
          --focal-x: 50%;
          --focal-y: 50%;
          --zoom: 1.8;
        }
        .zoom-frame img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transform: scale(1);
          transform-origin: var(--focal-x) var(--focal-y);
        }
        .zoom-frame.zoomed-in img {
          animation: zoomLoop 8s infinite;
        }
        @keyframes zoomLoop {
          0%    { transform: scale(1);             animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
          17.5% { transform: scale(var(--zoom));   animation-timing-function: linear; }
          80%   { transform: scale(var(--zoom));   animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0); }
          92.5% { transform: scale(1); }
          100%  { transform: scale(1); }
        }
        .zoom-caption {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 14px 18px 12px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0));
          color: white;
          font-family: Inter, sans-serif; font-size: 12.5px; line-height: 1.45;
          letter-spacing: 0.01em;
          opacity: 0;
          pointer-events: none;
        }
        .zoom-frame.zoomed-in .zoom-caption {
          animation: captionLoop 8s infinite;
        }
        @keyframes captionLoop {
          0%    { opacity: 0; animation-timing-function: ease-out; }
          17.5% { opacity: 0; }
          25%   { opacity: 0.96; animation-timing-function: linear; }
          78%   { opacity: 0.96; animation-timing-function: ease-in; }
          85%   { opacity: 0; }
          100%  { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zoom-frame.zoomed-in img {
            animation: none;
            transform: scale(var(--zoom));
          }
          .zoom-frame.zoomed-in .zoom-caption {
            animation: none;
            opacity: 0.96;
          }
        }

        /* ── ZoomFrame variant: zoom in on left edge, pan right while zooming deeper ── */
        .zoom-frame.pan-lr.zoomed-in img {
          animation: zoomPanLR 9s infinite;
        }
        @keyframes zoomPanLR {
          0%   { transform: scale(1);                          transform-origin: 50% 50%;             animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
          15%  { transform: scale(var(--zoom));                transform-origin: 0% var(--focal-y);   animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
          70%  { transform: scale(calc(var(--zoom) * 1.25));   transform-origin: 100% var(--focal-y); animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0); }
          85%  { transform: scale(1);                          transform-origin: 100% var(--focal-y); }
          100% { transform: scale(1);                          transform-origin: 50% 50%; }
        }
        .zoom-frame.pan-lr.zoomed-in .zoom-caption {
          animation: captionLoopLR 9s infinite;
        }
        @keyframes captionLoopLR {
          0%   { opacity: 0; animation-timing-function: ease-out; }
          15%  { opacity: 0; }
          22%  { opacity: 0.96; animation-timing-function: linear; }
          78%  { opacity: 0.96; animation-timing-function: ease-in; }
          85%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zoom-frame.pan-lr.zoomed-in img {
            animation: none;
            transform: scale(var(--zoom));
            transform-origin: 0% var(--focal-y);
          }
        }

        /* ── Title + screenshot card ── */
        .screenshot-card {
          background: ${CARD};
          border: 1px solid ${LINE};
          border-radius: 16px;
          padding: 20px 22px;
          margin: 14px 0 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }
        .screenshot-title {
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 17px;
          color: ${INK};
          margin: 0 0 14px;
          letter-spacing: -0.008em;
          line-height: 1.35;
        }
        .screenshot-card .zoom-frame,
        .screenshot-card .wireframe-frame,
        .screenshot-card .hero-shot {
          margin: 0;
        }
        /* Full-bleed variant: title sits at top with padding;
           screenshot fills the card to all other edges, no inner radius. */
        .screenshot-card.full-bleed {
          padding: 0;
          overflow: hidden;
        }
        .screenshot-card.full-bleed .screenshot-title {
          padding: 11px 18px 10px;
          margin: 0;
        }
        .screenshot-card.full-bleed .zoom-frame,
        .screenshot-card.full-bleed .wireframe-frame,
        .screenshot-card.full-bleed .hero-shot {
          border-radius: 0;
          border-left: 0;
          border-right: 0;
          border-bottom: 0;
        }

        /* ── §9 hero shot — escapes .prose so it can be as wide as the other screenshot sections ── */
        .hero-break {
          width: min(1232px, calc(100vw - 48px));
          margin-left: 50%;
          transform: translateX(-50%);
          margin-top: 24px;
          margin-bottom: 28px;
        }
        .hero-shot {
          margin: 18px 0 24px;
          border: 1px solid ${LINE};
          border-radius: 12px;
          overflow: hidden;
          background: #0f1f1a;
        }
        .hero-shot img { width: 100%; height: auto; display: block; }
        .hero-shot figcaption {
          padding: 10px 14px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          letter-spacing: 0.06em; color: ${INK3};
          background: ${CARD};
          border-top: 1px solid ${LINE};
        }

        /* ── Stylized wireframe boxes for §8 BEFORE states ── */
        .wireframe-frame {
          width: 100%; aspect-ratio: 16 / 10;
          margin: 14px 0 8px;
          background: ${CARD};
          border: 1px solid ${LINE};
          border-radius: 12px;
          position: relative; overflow: hidden;
        }
        .wireframe-frame svg { width: 100%; height: 100%; display: block; }

        /* ── §8 Pair 3 hover-swap (plot ↔ log) ── */
        .pair3-swap { position: relative; }
        .pair3-swap > .zoom-frame:nth-of-type(2) {
          position: absolute; inset: 0; margin: 0;
          opacity: 0; transition: opacity 220ms ease-out, filter 220ms ease-out;
        }
        @media (hover: hover) and (pointer: fine) {
          .pair3-swap:hover > .zoom-frame:nth-of-type(2) { opacity: 1; }
          .pair3-swap:hover > .zoom-frame:nth-of-type(1) img { filter: blur(2px); }
        }
        .pair3-swap::after {
          content: '\\21bb HOVER FOR LOG';
          position: absolute; top: 10px; right: 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          font-weight: 700; letter-spacing: 0.1em;
          color: white; background: rgba(0, 0, 0, 0.55);
          padding: 5px 9px; border-radius: 3px;
          pointer-events: none; z-index: 5;
        }
        @media (hover: hover) and (pointer: fine) {
          .pair3-swap:hover::after { content: '\\21bb LOG ACTIVE'; background: rgba(30, 107, 74, 0.92); }
        }

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
          font-family: Inter, sans-serif; font-weight: 600;
          font-size: clamp(34px, 5vw, 64px); line-height: 1.02;
          color: ${INK}; margin: 0 0 22px; letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .hook-h1 em {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic; font-weight: 400;
          letter-spacing: -0.01em;
        }
        .hook-kicker {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic; font-weight: 400;
          font-size: clamp(20px, 2.2vw, 28px); line-height: 1.3;
          color: ${INK}; margin: 26px 0 0;
        }
        .hook-kicker em {
          color: ${A};
          font-style: italic;
        }
        .hook-transition {
          max-width: 640px; margin: 0 auto; padding: 28px 24px 36px;
          font-family: Inter, sans-serif; font-size: 14px; font-style: italic;
          color: ${INK3}; text-align: center; line-height: 1.65;
        }

        /* ── Brainstorming collage (Artifact #3) ─────────────────────── */
        .brainstorm-collage {
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
        .bs-card img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .bs-card figcaption {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${INK3};
          text-align: center;
          padding: 8px 6px 9px;
          line-height: 1.4;
        }
        .bs-main {
          width: 60%;
          right: 0;
          top: 4%;
          transform: rotate(1.6deg);
          z-index: 1;
        }
        .bs-tl {
          width: 30%;
          left: 0;
          top: 0;
          transform: rotate(-3deg);
          z-index: 3;
        }
        .bs-br {
          width: 38%;
          left: 18%;
          bottom: 0;
          transform: rotate(-1.4deg);
          z-index: 2;
        }
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
        .bs-caption-strip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${INK3};
          text-align: center;
          margin-top: 20px;
        }
        @media (max-width: 900px) {
          .brainstorm-collage { aspect-ratio: 4 / 3; }
          .bs-main { width: 64%; }
          .bs-tl { width: 34%; }
          .bs-br { width: 44%; left: 14%; }
        }
        @media (max-width: 640px) {
          .brainstorm-collage {
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
            gap: 18px;
          }
          .bs-card {
            position: static;
            width: 100%;
            transform: none;
          }
          .bs-card:nth-child(1) { transform: rotate(-1.5deg); }
          .bs-card:nth-child(2) { transform: rotate(1deg); }
          .bs-card:nth-child(3) { transform: rotate(-0.6deg); }
        }
      `}</style>
  );
}
