'use client';

import Link from 'next/link';
import PasswordGate from '@/app/components/PasswordGate';
import CaseStudyMenu from '@/app/components/CaseStudyMenu';
import { A, AS, AB, AD, INK, INK2, INK3, LINE, CARD } from './_components/theme';
import { Pill, EyebrowLabel, H2, P, SubLabel, Divider } from './_components/Typography';
import { Reveal, StaggerGroup, StaggerItem } from './_components/Reveal';
import BeforeAfterHook from './_components/BeforeAfterHook';
import NiDaqmxStyles from './_components/NiDaqmxStyles';
import RoleTimeline from './_components/RoleTimeline';
import GlossaryTiles from './_components/GlossaryTiles';
import InfrastructureMetaphor from './_components/InfrastructureMetaphor';
import PhaseFunnel from './_components/PhaseFunnel';
import ErrorTerminal from './_components/ErrorTerminal';
import AutocompletePanel from './_components/AutocompletePanel';
import RequiredOptionalCode from './_components/RequiredOptionalCode';
import WorkedExampleDoc from './_components/WorkedExampleDoc';
import MitigationsShipped from './_components/MitigationsShipped';
import ResearchArtifactCollage from './_components/ResearchArtifactCollage';
import { EaseChart, PainPointsChart } from './_components/AnimatedCharts';
import { SteeringWheelStrip, SteeringDiagram } from './_components/SteeringWheels';
import { ArrowLeft, ArrowRight, Check } from '@/app/components/icons';

function NiDaqmxContent() {
  return (
    <div style={{ background: '#ffffff', color: INK, minHeight: '100vh' }}>
      <CaseStudyMenu />
      <NiDaqmxStyles />

      {/* ── 1. OPENING HOOK ──────────────────────────────────────────────── */}
      <div className="hero-wrap">
        <div className="hero-grid">
          <div>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
                <Pill><Check />Shipped · MATLAB R2026a</Pill>
                <a href="https://www.mathworks.com/help/daq/calldaqlib.html"
                   target="_blank" rel="noopener noreferrer" className="docs-link">
                  Read the docs<ArrowRight style={{ marginLeft: 4 }} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="hook-h1">
                We replaced <em style={{ color: AD }}>50 lines</em> of C language<br />
                with <em style={{ color: AD }}>three lines</em> of MATLAB.<br />
                <span style={{ color: AD }}>Then we tested <em>every word</em>.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <P>
                To read a single voltage from a piece of measurement hardware, an engineer used to leave their MATLAB workflow, drop into C, write boilerplate, compile, debug, come back. <strong>Every measurement. Every time.</strong>
              </P>
            </Reveal>
            <Reveal delay={0.15}>
              <P style={{ marginBottom: 0 }}>
                The work that mattered wasn&rsquo;t the reduction. It was deciding what each of those three lines should <em>say</em> — the function names, the argument order, whether you configured by position or by name. We tested two shapes with 11 engineers across 5 industries, and let the data decide what shipped.
              </P>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="hook-kicker">
                Not every interface lives on a screen.<br />
                Some you type, <em>one word at a time.</em>
              </p>
            </Reveal>
          </div>

          <div className="hero-visual">
            <BeforeAfterHook />
          </div>
        </div>
      </div>

      {/* Transition strip — introduces the technical name after the reader is invested */}
      <div style={{ background: AB }}>
        <p className="hook-transition">
          NI-DAQmx is the language MATLAB speaks to measurement hardware. This is the story of how we picked the words — and shipped them in <strong>MATLAB R2026a</strong>.
        </p>
      </div>

      {/* ── 2. TL;DR ────────────────────────────────────────────────────── */}
      <div style={{ background: AB, borderTop: `3px solid ${A}`, padding: '40px 24px' }}>
        <StaggerGroup className="tldr-grid">
          <StaggerItem className="tldr-cell">
            <p className="tldr-label">My Role</p>
            <p className="tldr-value">Lead UX researcher. Designed the comparative study, partnered with the developer to build two prototype APIs, ran the unmoderated study, recommended which design to ship.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Methods</p>
            <p className="tldr-value">Two prototype APIs · 11-participant unmoderated remote study · structured task script · paired ease-of-use rating · qualitative pain-point coding · mitigation matrix.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Scale</p>
            <p className="tldr-value">11 participants across 5 industries · 24 distinct pain points across both APIs · 1 ship/no-ship decision tied to evidence.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Outcome</p>
            <p className="tldr-value">Function-based API picked over class-based by a 0.72-point ease-of-use margin (3.27 vs. 2.55, on a 5-point scale). Shipped as <span className="mono">calldaqlib</span> in MATLAB R2026a.</p>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <Divider />

      {/* ── 3. MY ROLE ──────────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="01">My Role</EyebrowLabel>
          <H2>API-design partnership, <em>not a handoff study</em></H2>
        </Reveal>
        <RoleTimeline />
        <Reveal delay={0.05}>
          <P>
            I led the research — but framed this study as an API-design partnership from day one, not a traditional usability test handed over to engineering. I designed the comparative protocol, helped scope the two prototype APIs with the developer (so they were genuinely comparable, not one obvious winner and one strawman), wrote the task script, ran the 11-participant unmoderated study, and turned the findings into a mitigation matrix the developer could implement against.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            The decision to ship the function-based design was tied to evidence; the recommendation memo cited the participant data, not my opinion.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 4. WHAT IS AN API? ───────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="02">Context</EyebrowLabel>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
            <H2 style={{ margin: 0 }}>What is an API, <em>and why is API design UX work?</em></H2>
            <a href="#what-we-learned" className="skip-link skip-ctx">
              Skip context →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            An <strong>API</strong> — application programming interface — is the set of commands a programmer uses to drive a piece of software or hardware. If a piece of measurement hardware (a DAQ device that reads voltages, temperatures, vibrations) is the engine, the API is the <strong>steering wheel</strong> the programmer uses to drive that engine.
          </P>
        </Reveal>

        {/* Steering-wheel analogy strip */}
        <Reveal delay={0.1}>
          <SteeringWheelStrip />
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            The same engine can be driven by different steering wheels. Each one is technically capable of steering the engine, but they feel utterly different in the hands of the driver — and they make different mistakes more or less likely.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            That&rsquo;s API design. Two APIs that do the same thing, with different shapes, will produce different errors and different speeds of getting started. <strong>Picking which one to ship is a UX decision</strong> — the kind that should be tested with the people who&rsquo;ll drive it, not argued in a hallway.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>Both prototypes were thin MATLAB wrappers around the existing NI-DAQmx C library. The library was the engine; the wrapper was the steering wheel. The question was <em>which wheel</em>.</P>
        </Reveal>

        <GlossaryTiles />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, margin: '0 0 24px' }}>
          <div>
            <Reveal>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: INK2, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: INK }}>Function-based</strong> — one dispatcher function, <span className="mono">daqeval</span>, that takes the C function name as a string plus the original arguments. Each C call becomes one MATLAB call. Compact; you have to know the C function name.
              </p>
              <code style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: INK2, background: '#f8fafc', border: `1px solid ${LINE}`, borderRadius: 8, padding: '12px 16px', margin: '12px 0 0', overflowX: 'auto' }}>{`args3 = daqeval(daqobject, "DAQmx<FunctionName>", args1, args2)`}</code>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: INK2, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: INK }}>Class-based</strong> — helper classes (<span className="mono">niConfigOptions</span>, <span className="mono">niPropOptions</span>) that build a configuration object from name-value pairs, then verbs (<span className="mono">setconfig</span>, <span className="mono">setprop</span>, <span className="mono">getprop</span>, <span className="mono">resetprop</span>) to apply or query against the DAQ object. Each C call becomes two MATLAB calls. More verbose; parameter names are visible without knowing the C signature.
              </p>
              <code style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: INK2, background: '#f8fafc', border: `1px solid ${LINE}`, borderRadius: 8, padding: '12px 16px', margin: '12px 0 0', whiteSpace: 'pre', overflowX: 'auto' }}>{`configObj = niConfigOptions("<FunctionName>", Arg1=value1, Arg2=value2);\nsetconfig(daqobject, configObj);`}</code>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.05}>
          <P>Same engine, two steering wheels. Picking which one to ship is a UX decision.</P>
        </Reveal>

        <Reveal delay={0.1}>
          <SteeringDiagram />
        </Reveal>
      </div>

      <Divider />

      {/* ── 5. WHY THIS MATTERED ────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="03">Stakes</EyebrowLabel>
          <H2>Why this <em>work mattered</em></H2>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            A UI is the furniture in a room. If it doesn&rsquo;t work, you rearrange it. Bold ideas are welcome, mistakes are reversible, and you ship a v2.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            This wasn&rsquo;t that. What we design sits <em>behind the wall</em> — like the electrical outlets every appliance plugs into. Engineers across automotive, aerospace, biomedical, and academic labs build on top of it: test rigs, production lines, research scripts, regulated workflows. Change the shape of the outlet, and every plug in every house stops working overnight.
          </P>
        </Reveal>

        <Reveal delay={0.1}>
          <InfrastructureMetaphor />
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            That changes the standard. With a UI, you ship, watch usage, iterate. With this kind of work, you ship once and live with it. A name we&rsquo;d regret six months in is a name we&rsquo;d live with for ten years — because every script ever written against it depends on it staying exactly the same. There&rsquo;s no quiet redesign. There&rsquo;s no &ldquo;we cleaned up the look.&rdquo; A customer whose script errored out yesterday doesn&rsquo;t get a chance to admire the new design — they get a phone call from their team saying nothing works.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            Two candidate shapes came to the whiteboard. Both worked, both had real engineers in the room defending them, and there was no data to break the tie — only conviction. So before anything was locked in, I scoped a comparative study. Eleven engineers across five industries ran the same workflow against each shape, and <strong>the data — not the loudest voice in the room — decided which one we&rsquo;d live with for the next decade.</strong>
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 6. HOW I APPROACHED IT ──────────────────────────────────────── */}
      <div style={{ background: CARD, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <EyebrowLabel num="04">Approach</EyebrowLabel>
            <H2>How I <em>approached it</em></H2>
            <P style={{ marginBottom: 8 }}>Three phases, sequential, ~6 weeks end to end. Each phase fed the next.</P>
          </Reveal>

          <PhaseFunnel />

          <StaggerGroup className="phase-grid">
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
              <StaggerItem key={phase.label} className="phase-card">
                <p className="phase-label">{phase.label}</p>
                <div className="phase-divider" />
                <p className="phase-stats" style={{ whiteSpace: 'pre-line' }}>{phase.stats}</p>
                <div className="phase-divider" />
                <p className="phase-body">{phase.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>

      <Divider />

      {/* ── 7. THE HEAD-TO-HEAD ─────────────────────────────────────────── */}
      <div id="head-to-head" style={{ background: 'white', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <EyebrowLabel num="05">The Comparison</EyebrowLabel>
            <H2>The <em>head-to-head</em></H2>
          </Reveal>
          <P>
            Two prototype wrappers, one C library underneath. To make the comparison fair, every participant ran the same NI-DAQmx C call through each wrapper. The example below uses <span className="mono">DAQmxCfgChangeDetectionTiming</span> — a configuration call that in raw C looks like:
          </P>
          <div style={{ marginBottom: 20, borderRadius: 8, overflow: 'hidden', border: '1px solid #3a3a3a' }}>
            <div style={{ background: '#2d2d2d', padding: '7px 14px', borderBottom: '1px solid #3a3a3a', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: '\'JetBrains Mono\', monospace', fontSize: 10, color: '#9ca3af', letterSpacing: '0.06em', textTransform: 'uppercase' }}>C · reference</span>
            </div>
            <code className="hth-code" style={{ borderRadius: 0 }}>
              <span style={{ color: '#DCDCAA' }}>DAQmxCfgChangeDetectionTiming</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#9CDCFE' }}>taskHandle</span><span style={{ color: '#D4D4D4' }}>,</span>{'\n'}
              {'    '}<span style={{ color: '#CE9178' }}>&quot;Dev1/port0/line0:7&quot;</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#CE9178' }}>&quot;Dev1/port0/line0:7&quot;</span><span style={{ color: '#D4D4D4' }}>,</span>{'\n'}
              {'    '}<span style={{ color: '#4FC1FF' }}>DAQmx_Val_ContSamps</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#B5CEA8' }}>4</span><span style={{ color: '#D4D4D4' }}>)</span>
            </code>
          </div>
          <P>Same call, two wrappers:</P>

          <div className="hth-grid" style={{ marginTop: 32 }}>
            {/* Function-based panel */}
            <div className="hth-panel">
              <div className="hth-panel-label">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
                  </div>
                  <span>Function-based</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: '\'JetBrains Mono\', monospace', fontSize: 10, color: '#6A9955', letterSpacing: '0.06em' }}>MATLAB</span>
                  <span className="hth-winner"><Check style={{ marginRight: 4 }} />Winner</span>
                </div>
              </div>
              <code className="hth-code">
                <span style={{ color: '#6A9955', fontStyle: 'italic' }}>% Function-based — one MATLAB call mirrors one C call</span>{'\n'}
                <span style={{ color: '#DCDCAA' }}>daqeval</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#9CDCFE' }}>dq</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#CE9178' }}>&quot;DAQmxCfgChangeDetectionTiming&quot;</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#569CD6' }}>...</span>{'\n'}
                {'    '}<span style={{ color: '#CE9178' }}>&quot;Dev1/port0/line0:7&quot;</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#CE9178' }}>&quot;Dev1/port0/line0:7&quot;</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#569CD6' }}>...</span>{'\n'}
                {'    '}<span style={{ color: '#9CDCFE' }}>daq</span><span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#9CDCFE' }}>ni</span><span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#9CDCFE' }}>NIDAQmx</span><span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#4FC1FF' }}>DAQmx_Val_ContSamps</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#B5CEA8' }}>4</span><span style={{ color: '#D4D4D4' }}>);</span>
              </code>
              <div className="hth-score">
                <div className="hth-score-num" style={{ color: '#60a5fa' }}>3.27</div>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
                  </div>
                  <span>Class-based</span>
                </div>
                <span style={{ fontFamily: '\'JetBrains Mono\', monospace', fontSize: 10, color: '#6A9955', letterSpacing: '0.06em' }}>MATLAB</span>
              </div>
              <code className="hth-code">
                <span style={{ color: '#6A9955', fontStyle: 'italic' }}>% Class-based — build options, then apply</span>{'\n'}
                <span style={{ color: '#9CDCFE' }}>changeDetectionTiming</span><span style={{ color: '#D4D4D4' }}> = </span><span style={{ color: '#DCDCAA' }}>niConfigOptions</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#CE9178' }}>&quot;ChangeDetectionTiming&quot;</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#569CD6' }}>...</span>{'\n'}
                {'    '}<span style={{ color: '#9CDCFE' }}>RisingEdgeChan</span><span style={{ color: '#D4D4D4' }}>=</span><span style={{ color: '#CE9178' }}>&quot;Dev1/port0/line0:7&quot;</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#569CD6' }}>...</span>{'\n'}
                {'    '}<span style={{ color: '#9CDCFE' }}>FallingEdgeChan</span><span style={{ color: '#D4D4D4' }}>=</span><span style={{ color: '#CE9178' }}>&quot;Dev1/port0/line0:7&quot;</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#569CD6' }}>...</span>{'\n'}
                {'    '}<span style={{ color: '#9CDCFE' }}>SampleMode</span><span style={{ color: '#D4D4D4' }}>=</span><span style={{ color: '#9CDCFE' }}>daq</span><span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#9CDCFE' }}>ni</span><span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#9CDCFE' }}>NIDAQmx</span><span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#4FC1FF' }}>DAQmx_Val_ContSamps</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#569CD6' }}>...</span>{'\n'}
                {'    '}<span style={{ color: '#9CDCFE' }}>sampsPerChan</span><span style={{ color: '#D4D4D4' }}>=</span><span style={{ color: '#B5CEA8' }}>4</span><span style={{ color: '#D4D4D4' }}>);</span>{'\n'}
                <span style={{ color: '#DCDCAA' }}>setconfig</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#9CDCFE' }}>dq</span><span style={{ color: '#D4D4D4' }}>, </span><span style={{ color: '#9CDCFE' }}>changeDetectionTiming</span><span style={{ color: '#D4D4D4' }}>);</span>
              </code>
              <div className="hth-score">
                <div className="hth-score-num" style={{ color: '#9ca3af' }}>2.55</div>
                <div className="hth-score-sub">ease-of-use · 5-point scale</div>
              </div>
            </div>
          </div>

          {/* Decision charts */}
          <div className="chart-grid">
            <Reveal>
              <EaseChart />
            </Reveal>
            <Reveal delay={0.1}>
              <PainPointsChart />
            </Reveal>
          </div>

          {/* Margin summary */}
          <Reveal delay={0.1}>
            <div className="stat-strip">
              {[
                { num: '0.72', label: 'point margin' },
                { num: '29%', label: 'advantage on a 5-pt scale' },
                { num: '5 / 5', label: 'industries where function-based led' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="stat-num">{num}</p>
                  <p className="stat-label">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="pull-quote" style={{ marginTop: 28 }}>
            <blockquote>
              &ldquo;Most participants who articulated a preference for the class-based shape during the post-task interview had still rated it lower in the moment. Stated preference and observed performance pulled in different directions. The decision came down to observed performance.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 8. WHAT WE LEARNED ──────────────────────────────────────────── */}
      <div id="what-we-learned" style={{ maxWidth: 1140, margin: '0 auto', padding: '80px 24px 48px' }}>
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <EyebrowLabel num="06">Findings</EyebrowLabel>
            <H2>What <em>we learned</em></H2>
            <P style={{ marginBottom: 0 }}>
              Four high-priority insights, each tied to a specific pain point and a specific recommendation. Same pattern as always: observation → insight → recommendation → what shipped.
            </P>
          </div>
        </Reveal>

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
              <ErrorTerminal />
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
              <p className="insight-body">Participants used tab completion as their primary way to discover what was possible. With the function-based wrapper, typing <span className="mono">&quot;DAQmx</span> inside a <span className="mono">daqeval</span> call surfaced every available C function via tab completion on the string literal — they could scan and pick. With the class-based wrapper, tab-completing <span className="mono">setconfig(dq, </span> surfaced the verb but not the things it could operate on — you had to build the <span className="mono">niConfigOptions</span> object first before anything was visible. Several participants typed <span className="mono">setconfig(dq, </span> and stalled.</p>
              <code className="hth-code" style={{ marginTop: 12, marginBottom: 6, borderRadius: 8, fontSize: 12 }}>{`% Tab on the string literal surfaces the C namespace\ndaqeval(dq, "DAQmxCfg|"   % cursor here → list appears`}</code>
              <code className="hth-code" style={{ marginBottom: 16, borderRadius: 8, fontSize: 12 }}>{`% setconfig is visible; its argument is not\nsetconfig(dq, |            % cursor here → blank\nconfigObj = niConfigOptions("...");   % must build this first`}</code>
              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Tab completion is the modern engineer&rsquo;s reading tool. APIs that surface their full surface area through tab completion feel learnable; APIs that hide functionality behind name-value pairs feel mysterious. This is a structural difference between the two design styles, not a bug to be fixed at the margin.</p>
              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Pick the API style that benefits more from tab completion as a discovery surface. For the function-based API, every function is discoverable by typing a prefix. For the class-based API, name-value pairs hide options.</p>
              <SubLabel>What Shipped</SubLabel>
              <p className="insight-body">The function-based design — <span className="mono">calldaqlib</span> exposes the C function namespace directly, fully tab-completable.</p>
            </div>
            <div className="artifact-col">
              <AutocompletePanel />
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
              <p className="insight-body">The class-based wrapper used name-value pairs as its <em>primary</em> configuration mechanism — not just for channel config, but for every configuration call: <span className="mono">niConfigOptions(&quot;ChangeDetectionTiming&quot;, RisingEdgeChan=…, FallingEdgeChan=…, SampleMode=…, sampsPerChan=…)</span>. Three participants wrote the entire options object as one line, then split it, then commented pairs out in a &ldquo;what&rsquo;s actually required here?&rdquo; loop. The C signature requires all four arguments; the MATLAB wrapper made them all look optional. Two participants asked, &ldquo;Can I just pass the C-style positional list?&rdquo;</p>
              <code className="hth-code" style={{ marginTop: 12, marginBottom: 16, borderRadius: 8, fontSize: 12 }}>{`% Which of these are required? The MATLAB syntax doesn't tell you.\nconfigObj = niConfigOptions("ChangeDetectionTiming", ...\n    RisingEdgeChan="Dev1/port0/line0:7", ...\n    % FallingEdgeChan="Dev1/port0/line0:7", ...   <- commented out, errors\n    SampleMode=daq.ni.NIDAQmx.DAQmx_Val_ContSamps, ...\n    sampsPerChan=4);`}</code>
              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Name-value pairs are great for optional arguments. They&rsquo;re awkward when the <em>required</em> arguments outnumber the optional ones — at that point, what looked like an ergonomic API turns into a configuration file that happens to live inside parentheses.</p>
              <SubLabel>Recommendation</SubLabel>
              <p className="insight-body">Either constrain name-value pairs to optional arguments only (and use positional arguments for required ones), or pick a design where the structure of required arguments is positionally clear. The function-based shape makes this explicit; the class-based shape hides it.</p>
              <SubLabel>What Shipped</SubLabel>
              <p className="insight-body">Function-based design. Documentation makes required arguments positional and explicit.</p>
            </div>
            <div className="artifact-col">
              <RequiredOptionalCode />
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
              <WorkedExampleDoc />
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 9. WHAT SHIPPED ─────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="07">Outcome</EyebrowLabel>
          <H2>What <em>shipped</em></H2>
        </Reveal>
        <P>
          The function-based low-level API shipped in <strong>MATLAB R2026a</strong> as <span className="mono">calldaqlib</span>. You can read the public documentation at{' '}
          <a href="https://www.mathworks.com/help/daq/calldaqlib.html"
             target="_blank" rel="noopener noreferrer" className="docs-link">
            mathworks.com/help/daq/calldaqlib.html
          </a>.
        </P>
        <P>The shipped design carries forward all four mitigations from the study:</P>

        <MitigationsShipped />

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            'Wrapped error messages with valid-values hints for common enum arguments — the dispatcher catches the C error code and rewrites it with the MATLAB-side function name, the C-side property name, and (where the docs index supports it) the list of valid enum values.',
            'Tab-completable namespace as the primary discovery surface — the C function names are reachable from a single MATLAB entry point, so the entire library is one tab-completion away.',
            'Required arguments stay positional — the wrapper preserves the C signature’s argument order, so engineers reading C examples can transliterate without rearranging.',
            'The R2026a docs page leads with a complete worked example before the reference table.',
          ].map((text, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <li style={{ display: 'flex', gap: 12, fontFamily: 'Inter, sans-serif', fontSize: 17, color: INK2, lineHeight: 1.7 }}>
                <Check size={18} strokeWidth={3} style={{ color: A, marginTop: 5, flexShrink: 0 }} />
                <span>{text}</span>
              </li>
            </Reveal>
          ))}
        </ul>
        <P>
          One thing the function-based wrapper preserves that&rsquo;s worth naming: <strong>engineers can paste a C example from the NI-DAQmx documentation, change the call wrapper, and have working MATLAB code.</strong> The class-based wrapper would have required them to learn a parallel taxonomy — which class wraps which family of calls — before they could move. Choosing the wrapper shape that kept the C documentation usable was a strategic call, not just an ergonomics one. NI-DAQmx has thousands of pages of C documentation; we couldn&rsquo;t out-document it, so we made our wrapper transparent to it.
        </P>
        <P style={{ marginBottom: 0 }}>
          A small but real signal of the decision&rsquo;s correctness: the support tickets that have come in since <span className="mono">calldaqlib</span> shipped have been about hardware-specific edge cases (the C library&rsquo;s territory), not about the API shape. The API shape is no longer the friction; the hardware quirks are. That&rsquo;s the right kind of friction for a low-level API to have.
        </P>
      </div>

      <Divider />

      {/* ── BEHIND THE WORK ─────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="08">Process</EyebrowLabel>
          <H2>Behind <em>the work</em></H2>
          <P style={{ maxWidth: 640, marginBottom: 32 }}>
            The artifacts the case-study summary doesn&rsquo;t show — for readers who want to see the craft underneath the outcome.
          </P>
        </Reveal>
        <ResearchArtifactCollage />

        <div className="btw-caption-grid">
          <p className="btw-caption">
            <span className="btw-caption-label">Prototype reference doc</span>
            One of the two prototype reference docs I authored to brief participants. Function-based + class-based companion. Same C library; different MATLAB wrappers.
          </p>
          <p className="btw-caption">
            <span className="btw-caption-label">Affinity-mapping board</span>
            Synthesis from 24 raw pain points to 4 high-priority themes. Color-coded by API style; clusters were cross-validated with a second coder.
          </p>
          <p className="btw-caption">
            <span className="btw-caption-label">Unmoderated study instrument</span>
            One page from the study. Each participant ran the same workflow twice — once per API — with order randomized.
          </p>
        </div>
      </div>

      <Divider />

      {/* ── 10. REFLECTION ──────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="09">Reflection</EyebrowLabel>
          <H2>What I&rsquo;d do <em>differently</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <div style={{ marginBottom: 28, paddingLeft: 24, borderLeft: `2px solid ${AS}` }}>
            <p className="reflection-num">ONE</p>
            <P style={{ marginBottom: 0 }}>
              I&rsquo;d run a shorter, earlier prototype-fidelity check before committing to the comparative design. Several pain points in the class-based prototype were implementation details rather than design-style consequences — a separate, faster round at lower fidelity (&ldquo;does this naming feel right?&rdquo;, &ldquo;are these enum names readable?&rdquo;) would have stripped the noise out before the formal study and let the head-to-head be a cleaner comparison of <em>style</em>, not <em>implementation polish</em>.
            </P>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ paddingLeft: 24, borderLeft: `2px solid ${AS}` }}>
            <p className="reflection-num">TWO</p>
            <P style={{ marginBottom: 0 }}>
              I&rsquo;d capture stated preference more carefully, even when observed performance contradicts it. The class-based shape had a real constituency in the post-task interviews — a subset of participants who liked the structure but performed worse with it. Their preference is a signal worth understanding, not a result to discard. In retrospect I would have followed up with two of them to dig into the gap between what they liked and what worked for them. That gap is where the next API design lives.
            </P>
          </div>
        </Reveal>
      </div>

      <Divider />

      {/* ── 11. FOOTER ──────────────────────────────────────────────────── */}
      <div className="cs-footer">
        <div className="footer-inner">
          <Link href="/#work" className="footer-link"><ArrowLeft style={{ marginRight: 6 }} />Back to portfolio</Link>
          <Link href="/work/opc-ua-server" className="footer-link">OPC UA Server<ArrowRight style={{ marginLeft: 6 }} /></Link>
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
