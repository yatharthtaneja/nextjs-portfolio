'use client';

import Link from 'next/link';
import PasswordGate from '@/app/components/PasswordGate';

const A   = '#1D4ED8';
const AS  = '#C4D9F7';
const AB  = '#EFF6FF';
const AD  = '#1E3A8A';
const INK  = '#111827';
const INK2 = '#374151';
const INK3 = '#6b7280';
const LINE = '#e5e7eb';
const CARD = '#f9fafb';

function Pill({ children, shipped = true }: { children: React.ReactNode; shipped?: boolean }) {
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

function Artifact({ label, height = 260 }: { label: string; height?: number }) {
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

function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: A,
      margin: '0 0 10px' }}>{children}</p>
  );
}

function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 30,
      color: INK, lineHeight: 1.2, margin: '0 0 24px', letterSpacing: '-0.01em', ...style }}>
      {children}
    </h2>
  );
}

function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: INK2,
      lineHeight: 1.75, margin: '0 0 20px', ...style }}>{children}</p>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.1em', color: INK3,
      margin: '20px 0 6px' }}>{children}</p>
  );
}

function Divider() {
  return <hr style={{ height: 1, background: LINE, border: 'none', margin: 0 }} />;
}

function NiDaqmxContent() {
  return (
    <div style={{ background: '#ffffff', color: INK, minHeight: '100vh' }}>
      <style>{`
        .hero-wrap { background: ${AB}; padding: 72px 24px 80px; }
        .hero-grid {
          max-width: 1080px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;
        }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr; } }

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
        .hth-panel { background: #f8fafc; border: 1px solid ${LINE}; border-radius: 12px; overflow: hidden; }
        .hth-panel-label {
          padding: 14px 20px; border-bottom: 1px solid ${LINE};
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em; color: ${INK2};
        }
        .hth-winner {
          background: ${AB}; color: ${A}; border: 1.5px solid ${AS};
          font-family: Inter, sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase; padding: 3px 9px; border-radius: 10px;
        }
        .hth-code {
          padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 12.5px;
          line-height: 1.65; white-space: pre; overflow-x: auto; color: ${INK2}; margin: 0;
          display: block;
        }
        .hth-score { padding: 16px 20px; border-top: 1px solid ${LINE}; }
        .hth-score-num {
          font-family: Inter, sans-serif; font-size: 42px; font-weight: 800; line-height: 1;
        }
        .hth-score-sub { font-family: Inter, sans-serif; font-size: 12px; color: ${INK3}; margin-top: 5px; }
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
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <div className="hero-wrap">
        <div className="hero-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
              <Pill>✓ Shipped · MATLAB R2026a</Pill>
              <a href="https://www.mathworks.com/help/daq/calldaqlib.html"
                 target="_blank" rel="noopener noreferrer" className="docs-link">
                Read the docs →
              </a>
            </div>

            <h1 style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 800,
              fontSize: 'clamp(24px, 3.2vw, 44px)', lineHeight: 1.1,
              color: INK, margin: '0 0 18px', letterSpacing: '-0.02em',
            }}>
              Why we picked one API style over another — and why it matters that we ran the test instead of arguing about it
            </h1>

            <P style={{ marginBottom: 0 }}>
              A comparative usability study of function-based vs. class-based API design for the Data Acquisition Toolbox, shipped as <span className="mono">calldaqlib</span> in MATLAB R2026a.
            </P>

            <div className="stat-row">
              {['11 participants', '5 industries', '3.27 vs. 2.55', 'calldaqlib'].map((s, i, arr) => (
                <span key={s} style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="stat-item">{s}</span>
                  {i < arr.length - 1 && <span className="stat-sep">·</span>}
                </span>
              ))}
            </div>
          </div>

          <Artifact
            label="Artifact #1 — Hero code excerpt: calldaqlib from public docs (mathworks.com/help/daq/calldaqlib.html), syntax-highlighted PNG 1600×900"
            height={300}
          />
        </div>
      </div>

      {/* ── 2. TL;DR ────────────────────────────────────────────────────── */}
      <div style={{ background: AB, borderTop: `3px solid ${A}`, padding: '40px 24px' }}>
        <div className="tldr-grid">
          <div className="tldr-cell">
            <p className="tldr-label">My Role</p>
            <p className="tldr-value">Lead UX researcher. Designed the comparative study, partnered with the developer to build two prototype APIs, ran the unmoderated study, recommended which design to ship.</p>
          </div>
          <div className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Methods</p>
            <p className="tldr-value">Two prototype APIs · 11-participant unmoderated remote study · structured task script · paired ease-of-use rating · qualitative pain-point coding · mitigation matrix.</p>
          </div>
          <div className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Scale</p>
            <p className="tldr-value">11 participants across 5 industries · 24 distinct pain points across both APIs · 1 ship/no-ship decision tied to evidence.</p>
          </div>
          <div className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Outcome</p>
            <p className="tldr-value">Function-based API picked over class-based by a 0.72-point ease-of-use margin (3.27 vs. 2.55, on a 5-point scale). Shipped as <span className="mono">calldaqlib</span> in MATLAB R2026a.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 3. MY ROLE ──────────────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>My Role</EyebrowLabel>
        <H2>API-design partnership, not a handoff study</H2>
        <P>
          I led the research — but framed this study as an API-design partnership from day one, not a traditional usability test handed over to engineering. I designed the comparative protocol, helped scope the two prototype APIs with the developer (so they were genuinely comparable, not one obvious winner and one strawman), wrote the task script, ran the 11-participant unmoderated study, and turned the findings into a mitigation matrix the developer could implement against.
        </P>
        <P style={{ marginBottom: 0 }}>
          The decision to ship the function-based design was tied to evidence; the recommendation memo cited the participant data, not my opinion.
        </P>
      </div>

      <Divider />

      {/* ── 4. WHAT IS AN API? ───────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>Context</EyebrowLabel>
        <style>{`@media (min-width: 769px) { .skip-ctx { display: inline !important; } }`}</style>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
          <H2 style={{ margin: 0 }}>What is an API, and why is API design UX work?</H2>
          <a href="#what-we-learned" className="skip-link skip-ctx" style={{ display: 'none' }}>
            Skip context →
          </a>
        </div>

        <P>
          An <strong>API</strong> — application programming interface — is the set of commands a programmer uses to drive a piece of software or hardware. If a piece of measurement hardware (a DAQ device that reads voltages, temperatures, vibrations) is the engine, the API is the <strong>steering wheel</strong> the programmer uses to drive that engine.
        </P>
        <P>
          The same engine can be driven by different steering wheels. You could ship a tiller (one stick, simple). You could ship a yoke like a fighter jet (two handles, complex). You could ship a normal round wheel. Each one is technically capable of steering the engine, but they feel utterly different in the hands of the driver — and they make different mistakes more or less likely.
        </P>
        <P>
          That&rsquo;s API design. Two APIs that do the same thing, with different shapes, will produce different errors and different speeds of getting started. <strong>Picking which one to ship is a UX decision</strong> — the kind that should be tested with the people who&rsquo;ll drive it, not argued in a hallway.
        </P>
        <P>The two API shapes in this study:</P>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: INK2, lineHeight: 1.75, paddingLeft: 24, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <li><strong style={{ color: INK }}>Function-based:</strong> a flat list of named functions called in sequence — <span className="mono">DAQmxCreateTask</span>, <span className="mono">DAQmxCreateAIVoltageChan</span>, <span className="mono">DAQmxStartTask</span>. Like a tiller: one tool, used in steps.</li>
          <li><strong style={{ color: INK }}>Class-based:</strong> an object you construct, configure, and call methods on — <span className="mono">task = DAQmxTask(); task.AddVoltageChannel(); task.Start();</span>. Like a yoke: structured, with state held in the object.</li>
        </ul>

        <Artifact
          label="Artifact #2 — Steering-wheel analogy sketch: DAQ hardware + API (steering wheel) + engineer (driver). SVG, 1200×600."
          height={220}
        />
      </div>

      <Divider />

      {/* ── 5. WHY THIS MATTERED ────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>Stakes</EyebrowLabel>
        <H2>Why this work mattered</H2>
        <P>
          The Data Acquisition Toolbox already shipped a high-level API for common workflows. But a meaningful slice of users — engineers in automotive, aerospace, biomedical, and academic labs — needed access to <strong>lower-level hardware features</strong> that the high-level API didn&rsquo;t expose: custom triggering, exotic clocking, vendor-specific extensions. They were either writing C code themselves or stitching together their own MEX wrappers. Both options were costly and brittle.
        </P>
        <P>
          The team scoped a new low-level API that would expose the underlying NI-DAQmx C library directly from MATLAB. Two design styles came to the whiteboard immediately — function-based (mirror the C API) or class-based (wrap it in a more MATLAB-flavored object). The team had strong opinions on both sides and no data to break the tie.
        </P>
        <P style={{ marginBottom: 0 }}>
          Picking the wrong style would mean shipping an API engineers complain about for the next decade. Style decisions like this are sticky — you can&rsquo;t quietly change them later without breaking every script written against the old shape. The cost of getting it right by testing was small. The cost of getting it wrong by intuition was years of accumulated annoyance and a steady churn of support tickets. So I scoped a comparative study to break the tie with evidence.
        </P>
      </div>

      <Divider />

      {/* ── 6. HOW I APPROACHED IT ──────────────────────────────────────── */}
      <div style={{ background: CARD, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <EyebrowLabel>Approach</EyebrowLabel>
          <H2>How I approached it</H2>
          <P style={{ marginBottom: 32 }}>Three phases, sequential, ~6 weeks end to end. Each phase fed the next.</P>

          <div className="phase-grid">
            {[
              {
                label: 'Phase 1 — Build comparable prototypes',
                stats: '~2 weeks\n2 prototype APIs · 1 shared task surface\nfunction-based vs. class-based',
                body: 'I worked with the developer to define a single representative workflow that both APIs had to support: list available DAQ devices, create a task, add an analog input voltage channel, configure the sampling rate, acquire 1 second of data, clean up. Same task; two different shapes. We held the surface area constant so the study was testing the API style, not feature parity.',
              },
              {
                label: 'Phase 2 — Unmoderated comparative study',
                stats: '11 participants · 5 industries\nautomotive · R&D · academia · aerospace · biomedical\nrandomized order',
                body: 'Each participant completed the same workflow twice — once with each API. I randomized the order across participants to control for learning effects. After each attempt, participants rated the API on a 5-point ease-of-use scale and answered three open-ended questions about what worked and what didn\'t.',
              },
              {
                label: 'Phase 3 — Synthesize and recommend',
                stats: '24 pain points across both APIs\nmitigation matrix\n1 ship/no-ship recommendation',
                body: 'The headline number — function-based 3.27, class-based 2.55 — was decisive on its own, but the qualitative coding was where the design recommendations lived. I tagged every observed pain point against the API style that produced it, then built a mitigation matrix: for each pain point, what specific change would address it.',
              },
            ].map((phase) => (
              <div key={phase.label} className="phase-card">
                <p className="phase-label">{phase.label}</p>
                <div className="phase-divider" />
                <p className="phase-stats" style={{ whiteSpace: 'pre-line' }}>{phase.stats}</p>
                <div className="phase-divider" />
                <p className="phase-body">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 7. THE HEAD-TO-HEAD ─────────────────────────────────────────── */}
      <div id="head-to-head" style={{ background: 'white', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <EyebrowLabel>The Comparison</EyebrowLabel>
          <H2>The head-to-head</H2>
          <P>
            Two prototype APIs, one task: list a DAQ device, configure an analog input channel, acquire 1 second of data. Each participant completed the workflow twice — once with each style, order randomized. After each attempt: a 5-point ease-of-use rating.
          </P>

          <div className="hth-grid" style={{ marginTop: 32 }}>
            {/* Function-based panel */}
            <div className="hth-panel">
              <div className="hth-panel-label">
                <span>Function-based</span>
                <span className="hth-winner">✓ Winner</span>
              </div>
              <code className="hth-code">{`% List devices, create a task, configure, acquire
devices = DAQmxGetSysDevNames();
taskHandle = DAQmxCreateTask('myTask');
DAQmxCreateAIVoltageChan(taskHandle, 'Dev1/ai0', '', ...
    DAQmx_Val_Cfg_Default, -10, 10, ...
    DAQmx_Val_Volts, '');
DAQmxCfgSampClkTiming(taskHandle, '', 1000, ...
    DAQmx_Val_Rising, DAQmx_Val_FiniteSamps, 1000);
DAQmxStartTask(taskHandle);
data = DAQmxReadAnalogF64(taskHandle, 1000, 10.0);
DAQmxStopTask(taskHandle);
DAQmxClearTask(taskHandle);`}</code>
              <div className="hth-score">
                <div className="hth-score-num" style={{ color: A }}>3.27</div>
                <div className="hth-score-sub">ease-of-use · 5-point scale</div>
              </div>
            </div>

            {/* vs. separator */}
            <div className="hth-vs">
              <span className="hth-vs-text">vs.</span>
            </div>

            {/* Class-based panel */}
            <div className="hth-panel">
              <div className="hth-panel-label">
                <span>Class-based</span>
              </div>
              <code className="hth-code">{`% Same workflow, class-based
task = DAQmxTask('myTask');
task.AddAIVoltageChannel('Dev1/ai0', ...
    'TerminalConfig', DAQmx.TerminalConfig.Default, ...
    'MinVal', -10, 'MaxVal', 10, ...
    'Units', DAQmx.Units.Volts);
task.ConfigureSampleClockTiming( ...
    'Rate', 1000, ...
    'ActiveEdge', DAQmx.Edge.Rising, ...
    'SampleMode', DAQmx.SampleMode.FiniteSamples, ...
    'SamplesPerChannel', 1000);
task.Start();
data = task.ReadAnalogF64(1000, 10.0);
task.Stop();
task.Clear();`}</code>
              <div className="hth-score">
                <div className="hth-score-num" style={{ color: INK3 }}>2.55</div>
                <div className="hth-score-sub">ease-of-use · 5-point scale</div>
              </div>
            </div>
          </div>

          {/* Margin summary */}
          <div style={{
            marginTop: 32, padding: '20px 24px', background: AB,
            borderRadius: 12, border: `1.5px solid ${AS}`,
            display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center',
          }}>
            {[
              { num: '0.72', label: 'point margin' },
              { num: '29%', label: 'advantage on a 5-pt scale' },
              { num: '5 / 5', label: 'industries where function-based led' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 28, fontWeight: 800, color: A, lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: INK3, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="pull-quote" style={{ marginTop: 28 }}>
            <blockquote>
              &ldquo;Most participants who articulated a preference for the class-based shape during the post-task interview had still rated it lower in the moment. Stated preference and observed performance pulled in different directions. The decision came down to observed performance.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 8. WHAT WE LEARNED ──────────────────────────────────────────── */}
      <div id="what-we-learned" style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <EyebrowLabel>Findings</EyebrowLabel>
          <H2>What we learned</H2>
          <P style={{ marginBottom: 0 }}>
            Four high-priority insights, each tied to a specific pain point and a specific recommendation. Same pattern as always: observation → insight → recommendation → what shipped.
          </P>
        </div>

        {/* Insight 1 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <p className="insight-eyebrow">Insight 1</p>
              <h3 className="insight-h3">Cryptic enum errors blocked engineers for 5+ minutes</h3>
              <SubLabel>Observation</SubLabel>
              <p className="insight-body">When participants passed an invalid argument to a function (e.g., a wrong terminal config enum), the error was the raw NI-DAQmx error code — something like <span className="mono">Error -200077: Requested value is not a supported value for this property.</span> Two participants spent 5+ minutes hunting through documentation to figure out which property the error referred to.</p>
              <SubLabel>Insight</SubLabel>
              <p className="insight-body">The error pointed at the symptom (a value isn&rsquo;t supported) but not the location (which argument, in which call). Engineers don&rsquo;t read error codes — they read error <em>messages</em>. The message has to do the work of pointing them to the line they should fix.</p>
              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Wrap the underlying error so MATLAB users see the function name, the argument name, and the list of valid values — not just the raw code. For the function-based API this is a one-line wrapper around each call; for the class-based API it&rsquo;s harder because the error chain runs through more layers.</p>
              <SubLabel>What Shipped</SubLabel>
              <p className="insight-body"><span className="mono">calldaqlib</span> in R2026a includes wrapped errors with valid-values hints for the most common enum arguments.</p>
            </div>
            <div className="artifact-col">
              <Artifact
                label="Artifact #5 — Error-message screenshot showing cryptic enum error vs. wrapped error with valid-values hint. PNG, 1000×400."
                height={240}
              />
            </div>
          </div>
        </div>

        {/* Insight 2 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <p className="insight-eyebrow">Insight 2</p>
              <h3 className="insight-h3">Tab completion was the difference between &ldquo;stuck&rdquo; and &ldquo;fluent&rdquo;</h3>
              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Participants used tab completion as their primary way to discover what was possible. With the function-based API, typing <span className="mono">DAQmx</span> and pressing tab listed all available functions — they could scan and pick. With the class-based API, typing <span className="mono">task.</span> surfaced fewer methods than expected, because some configuration was done through name-value pairs that didn&rsquo;t appear in tab completion at all.</p>
              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Tab completion is the modern engineer&rsquo;s reading tool. APIs that surface their full surface area through tab completion feel learnable; APIs that hide functionality behind name-value pairs feel mysterious. This is a structural difference between the two design styles, not a bug to be fixed at the margin.</p>
              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Pick the API style that benefits more from tab completion as a discovery surface. For the function-based API, every function is discoverable by typing a prefix. For the class-based API, name-value pairs hide options.</p>
              <SubLabel>What Shipped</SubLabel>
              <p className="insight-body">The function-based design — <span className="mono">calldaqlib</span> exposes the C function namespace directly, fully tab-completable.</p>
            </div>
            <div className="artifact-col">
              <Artifact
                label="Artifact #6 — Code excerpt showing tab-completion: typing 'DAQmx' shows full function list vs. 'task.' shows incomplete method list. Annotated screenshot."
                height={240}
              />
            </div>
          </div>
        </div>

        {/* Insight 3 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <p className="insight-eyebrow">Insight 3</p>
              <h3 className="insight-h3">Long name-value pair lists felt like configuration files, not code</h3>
              <SubLabel>Observation</SubLabel>
              <p className="insight-body">The class-based API used name-value pairs heavily for channel configuration: <span className="mono">&apos;TerminalConfig&apos;, X, &apos;MinVal&apos;, Y, &apos;MaxVal&apos;, Z, &apos;Units&apos;, W, …</span>. Three participants wrote the entire configuration as one line, then split it, then commented some pairs out, in a &ldquo;what&rsquo;s actually required here?&rdquo; loop. Two participants asked, &ldquo;Can I just write this as a struct and pass it in?&rdquo;</p>
              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Name-value pairs are great for optional arguments. They&rsquo;re awkward when the <em>required</em> arguments outnumber the optional ones — at that point, what looked like an ergonomic API turns into a configuration file that happens to live inside parentheses.</p>
              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Either constrain name-value pairs to optional arguments only (and use positional arguments for required ones), or pick a design where the structure of required arguments is positionally clear. The function-based shape makes this explicit; the class-based shape hides it.</p>
              <SubLabel>What Shipped</SubLabel>
              <p className="insight-body">Function-based design. Documentation makes required arguments positional and explicit.</p>
            </div>
            <div className="artifact-col">
              <Artifact
                label="Artifact #7 — Side-by-side code excerpt: name-value pair list (class-based) vs. positional arguments (function-based). Two short excerpts."
                height={240}
              />
            </div>
          </div>
        </div>

        {/* Insight 4 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <p className="insight-eyebrow">Insight 4</p>
              <h3 className="insight-h3">Engineers wanted examples, not reference docs</h3>
              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Across both APIs, participants reached for the documentation only after they were stuck. When they did, the reference docs (function signatures, parameter lists) were the <em>least</em> useful resource. Almost every participant explicitly searched for an &ldquo;example&rdquo; — a complete, runnable script that did the workflow they were trying to do.</p>
              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Reference documentation is for engineers who already know what they&rsquo;re doing. For onboarding to a new API, a runnable example is the only thing that matters. This isn&rsquo;t an API-design finding so much as an API-onboarding finding — but it&rsquo;s actionable in the same release.</p>
              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Ship at least one complete, runnable example for every common workflow. Link to the example from the reference docs, not the other way around.</p>
              <SubLabel>What Shipped</SubLabel>
              <p className="insight-body">The R2026a docs page for <span className="mono">calldaqlib</span> opens with a complete worked example before the reference table.</p>
            </div>
            <div className="artifact-col">
              <Artifact
                label="Artifact #8 — Complete calldaqlib worked example (start-to-finish 1-second acquisition workflow). Code excerpt, 1000×600."
                height={240}
              />
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 9. WHAT SHIPPED ─────────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>Outcome</EyebrowLabel>
        <H2>What shipped</H2>
        <P>
          The function-based low-level API shipped in <strong>MATLAB R2026a</strong> as <span className="mono">calldaqlib</span>. You can read the public documentation at{' '}
          <a href="https://www.mathworks.com/help/daq/calldaqlib.html"
             target="_blank" rel="noopener noreferrer" className="docs-link">
            mathworks.com/help/daq/calldaqlib.html
          </a>.
        </P>
        <P>The shipped design carries forward all four mitigations from the study:</P>
        <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: INK2, lineHeight: 1.75, paddingLeft: 24, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <li>Wrapped error messages with valid-values hints for common enum arguments.</li>
          <li>Tab-completable function namespace as the primary discovery surface.</li>
          <li>Required arguments positional and explicit; name-value pairs constrained to optional arguments.</li>
          <li>The docs page leads with a complete worked example before the reference table.</li>
        </ul>
        <P style={{ marginBottom: 0 }}>
          A small but real signal of the decision&rsquo;s correctness: the support tickets that have come in since <span className="mono">calldaqlib</span> shipped have been about hardware-specific edge cases (the C library&rsquo;s territory), not about the API shape. The API shape is no longer the friction; the hardware quirks are. That&rsquo;s the right kind of friction for a low-level API to have.
        </P>
      </div>

      <Divider />

      {/* ── 10. REFLECTION ──────────────────────────────────────────────── */}
      <div className="prose">
        <EyebrowLabel>Reflection</EyebrowLabel>
        <H2>What I&rsquo;d do differently</H2>

        <div style={{ marginBottom: 28 }}>
          <p className="reflection-num">ONE</p>
          <P style={{ marginBottom: 0 }}>
            I&rsquo;d run a shorter, earlier prototype-fidelity check before committing to the comparative design. Several pain points in the class-based prototype were implementation details rather than design-style consequences — a separate, faster round at lower fidelity (&ldquo;does this naming feel right?&rdquo;, &ldquo;are these enum names readable?&rdquo;) would have stripped the noise out before the formal study and let the head-to-head be a cleaner comparison of <em>style</em>, not <em>implementation polish</em>.
          </P>
        </div>

        <div>
          <p className="reflection-num">TWO</p>
          <P style={{ marginBottom: 0 }}>
            I&rsquo;d capture stated preference more carefully, even when observed performance contradicts it. The class-based shape had a real constituency in the post-task interviews — a subset of participants who liked the structure but performed worse with it. Their preference is a signal worth understanding, not a result to discard. In retrospect I would have followed up with two of them to dig into the gap between what they liked and what worked for them. That gap is where the next API design lives.
          </P>
        </div>
      </div>

      <Divider />

      {/* ── 11. FOOTER ──────────────────────────────────────────────────── */}
      <div className="cs-footer">
        <div className="footer-inner">
          <Link href="/#work" className="footer-link">← Back to portfolio</Link>
          <Link href="/work/opc-ua-server" className="footer-link">OPC UA Server →</Link>
        </div>
      </div>
    </div>
  );
}

export default function NiDaqmxPage() {
  return (
    <PasswordGate accentColor={A} softColor={AS}>
      <NiDaqmxContent />
    </PasswordGate>
  );
}
