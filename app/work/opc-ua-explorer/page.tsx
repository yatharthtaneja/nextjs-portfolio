'use client';

import Link from 'next/link';
import PasswordGate from '@/app/components/PasswordGate';
import CaseStudyMenu from '@/app/components/CaseStudyMenu';
import { A, AS, AB, INK, INK2, INK3, LINE, CARD } from './_components/theme';
import {
  Pill,
  EyebrowLabel,
  H2,
  P,
  SubLabel,
  Divider,
  PullQuote,
} from './_components/Typography';
import { Reveal, StaggerGroup, StaggerItem } from './_components/Reveal';
import FactoryHookSVG from './_components/FactoryHookSVG';
import DecisionBar from './_components/DecisionBar';
import ZoomFrame from './_components/ZoomFrame';
import OPCUAStyles from './_components/OPCUAStyles';
import RoleTimeline from './_components/RoleTimeline';
import GlossaryTiles from './_components/GlossaryTiles';
import LandscapeSVG from './_components/LandscapeSVG';
import PhaseFunnel from './_components/PhaseFunnel';
import BrainstormCollage from './_components/BrainstormCollage';
import AudienceReframe from './_components/AudienceReframe';
import AnchorQuadrant from './_components/AnchorQuadrant';
import { ArrowLeft, ArrowRight, Check, Clock, Database, Person, TrendingFlat } from '@/app/components/icons';

function OPCUAContent() {
  return (
    <div style={{ background: '#ffffff', color: '#111827', minHeight: '100vh' }}>
      <CaseStudyMenu />
      <OPCUAStyles />

      {/* ── 1. OPENING HOOK ─────────────────────────────────────────────── */}
      <div className="hero-wrap">
        <div className="hero-grid">
          <div>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: AS, color: A,
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
                  padding: '6px 14px', borderRadius: 20,
                }}><Check />Shipped · MATLAB R2026a</span>
                <a href="https://www.mathworks.com/help/icomm/ug/opcuaexplorer-app.html"
                   target="_blank" rel="noopener noreferrer" className="docs-link">
                  Read the docs<ArrowRight style={{ marginLeft: 4 }} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="hook-h1">
                A factory has <em style={{ color: A }}>10,000</em> sensors.<br />
                <span style={{ color: A }}>
                  Engineers had no way to <em>explore</em> them<br />
                  without writing code.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <P>
                Every conveyor belt, every robotic arm, every temperature probe on a factory floor is constantly broadcasting data — vibration, pressure, heat, fault codes. All of it flows through a single protocol the industrial world agreed on years ago.
              </P>
            </Reveal>
            <Reveal delay={0.15}>
              <P style={{ marginBottom: 0 }}>
                But the engineers who <em>needed</em> that data — the ones keeping the machines running — couldn&rsquo;t access it without opening a code editor and writing 50 lines of connection logic from memory. Every single time.
              </P>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="hook-kicker">
                We built the tool that let them just <em>look</em>.
              </p>
            </Reveal>
          </div>

          <div className="hero-visual" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FactoryHookSVG />
          </div>
        </div>
      </div>

      <div style={{ background: AB }}>
        <p className="hook-transition">
          OPC UA is that protocol. This is the story of how we figured out what the tool should do — and shipped it.
        </p>
      </div>

      {/* ── 2. TL;DR ────────────────────────────────────────────────────── */}
      <div style={{ background: AB, borderTop: `3px solid ${A}`, padding: '40px 24px' }}>
        <StaggerGroup className="tldr-grid">
          <StaggerItem className="tldr-cell">
            <p className="tldr-label">My Role</p>
            <p className="tldr-value">Lead UX researcher and strategic partner in project planning.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Methods</p>
            <p className="tldr-value">4 contextual interviews · 5-participant external usability study · 13-area internal design review.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Scale</p>
            <p className="tldr-value">18 pain points → 14 requirements → 27 findings → 11 feature requests, distilled into 5 insight themes.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Outcome</p>
            <p className="tldr-value">Shipped in MATLAB R2026a, ~15 months from first interview to release.</p>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <Divider />

      {/* ── 3. MY ROLE ──────────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="01">My Role</EyebrowLabel>
          <H2>Strategic partner, <em>not just a study runner</em></H2>
        </Reveal>

        <RoleTimeline />

        <Reveal delay={0.05}>
          <P>
            I led the research and acted as a strategic partner in project planning — not just running studies, but shaping which problems were worth solving and which weren&rsquo;t. I scoped the discovery phase, ran the contextual interviews, designed and ran the usability study, and presented findings to the developers and the internal design review board. When the team had to choose between competing feature requests, I was the one tying every recommendation back to evidence.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 4. WHAT IS OPC UA ───────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="02">Context</EyebrowLabel>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
            <H2 style={{ margin: 0 }}>What is OPC UA, <em>in plain terms</em></H2>
            <a href="#why-mattered" className="skip-ctx" style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 14,
              color: A, textDecoration: 'none', borderBottom: `1px solid ${AS}`,
            }}>Skip context<ArrowRight style={{ marginLeft: 4 }} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            OPC UA is <strong>the language industrial machines speak to each other</strong>. A modern factory has thousands of sensors, motors, valves, controllers, and PLCs (programmable logic controllers — the small computers that run real-time hardware). They all need to share data: temperature, pressure, vibration, on/off state, fault codes. OPC UA is the standardized protocol that lets a sensor from one vendor and a controller from another talk without custom integration work.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            When software like ours connects to a factory&rsquo;s OPC UA server, what it sees is an <strong>address space</strong> — think of it as the table of contents of a factory&rsquo;s data, with every sensor and motor organized like chapters and sub-chapters. Each individual entry — a single temperature reading, a single valve position — is a <strong>node</strong>. To watch a node change in real time, you create a <strong>subscription</strong>: a magazine subscription, basically. You ask for updates, and they arrive when something changes, instead of you having to keep checking.
          </P>
        </Reveal>

        <GlossaryTiles />

        <Reveal delay={0.1}>
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: `1px solid ${LINE}`,
            marginTop: 8,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/artifact-digital-twin-flow.svg"
              alt="Flow diagram: ride sensors → OPC UA Server → MATLAB Digital Twin → Predictive Alert"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </Reveal>
      </div>

      <Divider />

      {/* ── 5. WHY THIS MATTERED ────────────────────────────────────────── */}
      <div id="why-mattered" className="prose">
        <Reveal>
          <EyebrowLabel num="03">Motivation</EyebrowLabel>
          <H2>Why this <em>work mattered</em></H2>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            The protocol our customers had been using for two decades — OPC DA — was being deprecated industry-wide. Sensor manufacturers were dropping support. Our own product was scheduled to drop support too. Engineers in industries from amusement-park ride safety to ship-building to energy-grid monitoring had to migrate to OPC UA, and most of them didn&rsquo;t have the programming background to write OPC UA scripts from scratch.
          </P>
        </Reveal>

        <LandscapeSVG />

        <Reveal delay={0.05}>
          <P>
            There was a market full of third-party OPC UA clients already. The question wasn&rsquo;t whether we could build <em>an</em> OPC UA app. It was whether we could build one that would feel like it actually belonged in the hands of an engineer who already lives in MATLAB and Simulink — one that would let them go from &ldquo;I need to read this sensor&rdquo; to &ldquo;I&rsquo;m reading this sensor&rdquo; without writing a line of code.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <PullQuote cite="What we needed to figure out next">
            What were engineers <em>actually</em> trying to do? Not in the abstract — Tuesday&#8209;morning, deadline&#8209;three&#8209;weeks&#8209;out concrete.
          </PullQuote>
        </Reveal>
      </div>

      <Divider />

      {/* ── 6. HOW I APPROACHED IT ──────────────────────────────────────── */}
      <div style={{ background: CARD, padding: '64px 24px' }}>
        <div className="wide" style={{ padding: 0, maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <EyebrowLabel num="04">Process</EyebrowLabel>
              <H2>How I <em>approached it</em></H2>
            </div>
          </Reveal>

          <PhaseFunnel />

          <StaggerGroup className="phase-grid">
            {[
              {
                label: 'Phase 1 — Discovery',
                stats: 'Dec 2023 – Feb 2024\n4 contextual interviews · 4 industries\n18 pain points · 14 requirements',
                body: 'I scoped a four-week discovery sprint with engineers across four industries: a controls engineer at an automotive supplier, a systems engineer building digital twins of amusement-park rides, an automation engineer doing virtual commissioning of PLCs, and a control engineer at a ship-building company. I built the screener, interview guide, and requirements document, and led synthesis with the developer and design lead.',
              },
              {
                label: 'Phase 2 — Usability Study',
                stats: 'Sep – Oct 2024\n5 external participants · 27 findings\n5 insight themes · 11 feature requests',
                body: 'Six months later, the team had a working prototype. I designed a task-based study with 5 external participants from four industries. The scenario: help a systems engineer at an amusement-park operator read ride vibration sensors and inspect their values. Each session was a contextual inquiry. Twenty-seven findings emerged, distilled into four high-priority themes.',
              },
              {
                label: 'Phase 3 — Design Review',
                stats: 'Mar 2025\n5 senior reviewers · 13 interface areas\npaired feedback + design responses',
                body: 'I presented the prototype and findings to a five-person internal design review with senior product and design leadership. Reviewers walked through 13 interface areas. For each, I tracked their feedback and worked with the developer to write an honest design response — what we agreed with and would change, what we disagreed with and why.',
              },
            ].map((phase) => (
              <StaggerItem key={phase.label} className="phase-card">
                <div className="phase-label">{phase.label}</div>
                <div className="phase-stats" style={{ whiteSpace: 'pre-line' }}>{phase.stats}</div>
                <div className="phase-divider" />
                <p className="phase-body">{phase.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div style={{ marginTop: 48 }}>
            <BrainstormCollage />
            <p className="bs-caption-strip">
              Synthesis artifacts — affinity mapping, task flows, and competitor benchmarking across the 15-month process
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 6b. WHAT DISCOVERY TOLD US ──────────────────────────────────── */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
        <Reveal>
          <div style={{ marginBottom: 32 }}>
            <EyebrowLabel num="05">Discovery</EyebrowLabel>
            <H2>What discovery <em>told us</em></H2>
            <P style={{ marginBottom: 0 }}>
              Before we tested anything, four contextual interviews told us <em>why</em> the existing OPC UA workflow was failing engineers — and which engineer to design for first.
            </P>
          </div>
        </Reveal>
        <div className="flank-grid">
          {/* Discovery 01 */}
          <Reveal delay={0.05}>
            <div className="flank-card">
              <p className="flank-eyebrow">Discovery 01</p>
              <h4 className="flank-h4">The barrier isn&rsquo;t motivation, it&rsquo;s programming background</h4>

              <AudienceReframe />

              <div className="flank-row" style={{ marginTop: 16 }}>
                <p className="flank-label impact-label">Impact →</p>
                <p className="flank-body">Locked the primary persona; established a hard design-review rule — every interaction discoverable without reading docs.</p>
              </div>
            </div>
          </Reveal>

          {/* Discovery 02 */}
          <Reveal delay={0.15}>
            <div className="flank-card">
              <p className="flank-eyebrow">Discovery 02</p>
              <h4 className="flank-h4">The strongest pull came from the digital-twin engineer, not the bench technician</h4>

              <AnchorQuadrant />

              <p className="discovery-caption">The anchor isn&rsquo;t the loudest — it&rsquo;s the one with the worst alternative.</p>

              <div className="flank-row" style={{ marginTop: 16 }}>
                <p className="flank-label impact-label">Impact →</p>
                <p className="flank-body">Amusement-park digital-twin scenario became the canonical demo flow — the connect &rarr; browse &rarr; subscribe &rarr; see-it-update path users meet first.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Divider />

      {/* ── 7. WHAT WE LEARNED ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '80px 24px 48px' }}>
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <EyebrowLabel num="06">Findings</EyebrowLabel>
            <H2>What <em>we learned</em></H2>
            <P style={{ marginBottom: 0 }}>
              Five high-priority insight themes from the usability study. Each follows the same shape: observation → insight → recommendation → what shipped.
            </P>
          </div>
        </Reveal>

        {/* Theme 1 — Terminology debt */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 1</div>
              <h3 className="insight-h3">Configure didn&rsquo;t mean configure. Logging didn&rsquo;t mean logging.</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">
                Five separate findings circled the same problem: labels overloaded or contradicted terms engineers already used. <strong>Configure</strong> in the toolstrip read as &ldquo;set up the nodes,&rdquo; not &ldquo;configure the connection.&rdquo; <strong>Stop Monitoring</strong> read as &ldquo;disconnect from the server.&rdquo; <strong>Export Log</strong> got pulled into the gravitational field of &ldquo;logging the data&rdquo; — the engineer&rsquo;s phrase for recording sensor values — so people clicked it expecting their captured data to come out. And in the right pane, <strong>Variable Information</strong> (which held the Data Type field engineers cared about most) sat collapsed behind a disclosure that participants didn&rsquo;t open.
              </p>
              <div className="pull-quote">
                <blockquote>&ldquo;I am already connected to the server. Configure may have user password, security password. I think configure is more of configuring the user ID, password.&rdquo;</blockquote>
                <cite>— UT4, on the Configure / Connect ambiguity</cite>
              </div>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">
                Terminology debt compounds silently. Each label was defensible in isolation; together they formed a vocabulary that didn&rsquo;t survive contact with a working engineer. The worst part of the failure mode: users didn&rsquo;t say &ldquo;I&rsquo;m confused&rdquo; — they confidently took the wrong action and assumed they&rsquo;d succeeded.
              </p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Before — original labels</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-figma-wireframe-1.png"
                  alt="OPC UA Explorer original wireframe — toolstrip showing Configure, Connect, Disconnect, Start Monitoring, Stop Monitoring, Record, Export Log; right pane showing Node Information with Hierarchy Information and Variable Information collapsed behind disclosure arrows."
                  focalX="0%"
                  focalY="0%"
                  zoom={2.0}
                  panLR
                  caption="Before: pan across the toolstrip — Configure on the left, Start/Stop Monitoring and Export Log on the right, all four problem surfaces in one strip."
                />
              </div>
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">After — renamed and re-grouped</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-hero-fullwindow.png"
                  alt="OPC UA Explorer shipped UI — toolstrip with Connection Settings, Add to Table, Remove from Table; right pane with Node Information and Variable Information expanded by default; bottom dock with Activity Log tab."
                  focalX="0%"
                  focalY="0%"
                  zoom={2.0}
                  panLR
                  caption="After: same pan — Connection Settings replaces Configure, Add to Table / Remove from Table replace Start/Stop Monitoring, Export Log is gone."
                />
              </div>
            </div>
          </div>

          {/* Translation table — the heart of the theme */}
          <div style={{ marginTop: 36, paddingTop: 28, borderTop: `1px solid ${LINE}` }}>
            <SubLabel>The four renames, line by line</SubLabel>
            <div style={{ overflowX: 'auto', marginTop: 4 }}>
              <table className="deferred-table">
                <thead>
                  <tr>
                    <th style={{ width: '22%' }}>Label shown</th>
                    <th style={{ width: '38%' }}>What users heard</th>
                    <th style={{ width: '40%' }}>What shipped</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono">Configure</span></td>
                    <td>&ldquo;Set up which nodes to add&rdquo; or &ldquo;the place for user ID and password&rdquo;</td>
                    <td>Renamed to <strong>Connection Settings</strong>. The button now carries the meaning it always implied.</td>
                  </tr>
                  <tr>
                    <td><span className="mono">Start Monitoring</span> / <span className="mono">Stop Monitoring</span></td>
                    <td>&ldquo;Connect&rdquo; / &ldquo;Disconnect from the session&rdquo;</td>
                    <td>Renamed to <strong>Add to Table</strong> / <strong>Remove from Table</strong>. The verb describes the effect on the visible UI, not the abstract subscription.</td>
                  </tr>
                  <tr>
                    <td><span className="mono">Export Log</span> + <span className="mono">Log</span> tab</td>
                    <td>&ldquo;Export my recorded data&rdquo; — &ldquo;logging&rdquo; meant captured sensor values, not events</td>
                    <td><strong>Export Log removed entirely.</strong> The bottom-dock Log tab renamed to <strong>Activity Log</strong> so its scope is unambiguous.</td>
                  </tr>
                  <tr>
                    <td><span className="mono">Variable Information</span> <span style={{ color: INK3 }}>(collapsed)</span></td>
                    <td>&ldquo;Where&rsquo;s the data type?&rdquo; — the field engineers cared about most lived behind a disclosure</td>
                    <td><strong>Expanded by default.</strong> Data Type is now visible at first glance alongside the rest of Node Information.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Rename to verbs engineers say at the bench. Delete the action whose <em>name</em> is the source of the confusion rather than renaming it. And don&rsquo;t hide the metadata users came to see.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill><Check />Shipped</Pill>
              </div>
              <p className="insight-body">All four changes landed in the next build. The most consequential move wasn&rsquo;t a rename — it was deleting <strong>Export Log</strong> outright. Its presence was the entire reason &ldquo;logging&rdquo; collided with &ldquo;recording.&rdquo; A rename would have kept the trap; removing it closed it.</p>
            </div>
          </div>
        </div>

        {/* Theme 2 — Panel order */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 2</div>
              <h3 className="insight-h3">Engineers expected the action panel above the metadata, not below it</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Every participant who tried to read a sensor value scrolled past the &ldquo;Node Function&rdquo; panel without seeing it. They were drawn to the larger &ldquo;Node Information&rdquo; panel — which only displays metadata — and then asked, &ldquo;Where do I read the value?&rdquo;</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">We had laid the panels out in the order the data structure suggested (&ldquo;here&rsquo;s what this node is, then here&rsquo;s what you can do with it&rdquo;) instead of the order the user&rsquo;s intent demanded.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Detail pane after the swap</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme1-panel-order-after.png"
                  alt="OPC UA Explorer detail pane — Node Function (Read tab) above Node Information."
                  focalX="100%"
                  focalY="28%"
                  zoom={1.8}
                  caption="Right panel column, shipped: Node Function (top) → Node Information (below). Generate Script in the toolbar."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Swap the two panels. Action above metadata. Don&rsquo;t try to teach the user a new mental model when their existing one is already correct.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill><Check />Shipped</Pill>
              </div>
              <p className="insight-body">Panels swapped in the next build. We also added a <strong>Generate Script</strong> button — validated against the historical-data export pattern that surfaced six times across the study. A click produces a MATLAB Live Script that recreates the session as code.</p>
            </div>
          </div>
        </div>

        {/* Theme 3 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 3</div>
              <h3 className="insight-h3">The address space was a tree without a search box, and engineers got lost</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Real factory address spaces have thousands of nodes. Participants spent 30–90 seconds per task hunting for nodes by hand-expanding tree branches.</p>
              <div className="pull-quote">
                <blockquote>&ldquo;This is like opening every folder on a corporate file server to find one document.&rdquo;</blockquote>
                <cite>— Participant struggling with the tree-without-search</cite>
              </div>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">An address space without search is a library without a card catalog. The tree was correct; what was missing was a way <em>into</em> the tree. Participants who&rsquo;d used a competitor product — UA Expert — kept reaching for the search bar that didn&rsquo;t exist.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Address Space tree, dense and unsearchable</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme2-address-space-no-search.png"
                  alt="OPC UA Explorer address space — dense tree expanded several levels deep, with no search bar above it."
                  focalX="14%"
                  focalY="22%"
                  zoom={1.8}
                  caption="Address Space pane, shipped: a tree of hundreds of nodes — and no search input above the header."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Add a search bar at the top of the address space. Match nodes by name and by browse path. Ship search on the API side first (where it&rsquo;s cheap), then bring it into the app.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill shipped={false}>~ Partially shipped</Pill>
              </div>
              <p className="insight-body">API-side search shipped in the same release. In-app search was deliberately de-scoped to a follow-up — we needed more data on which search behaviors mattered most (substring vs. fuzzy, recent vs. favorites).</p>
            </div>
          </div>
        </div>

        {/* Theme 4 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 4</div>
              <h3 className="insight-h3">Engineers wrote to read-only nodes and got cryptic errors</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Three of the five participants tried to write a value to a node that was server-side read-only. The app accepted the input, sent the write, and surfaced a vague <span className="mono">BadWriteNotSupported</span> error from the server. Two participants assumed they&rsquo;d typed the value wrong and tried again. One walked away frustrated.</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">The mistake wasn&rsquo;t a typing error. It was a discoverability failure — the app gave no visual signal that a node was read-only <em>before</em> you tried to write to it. Engineers who <em>know</em> read/write permissions exist still don&rsquo;t carry that knowledge to every node they look at; they expect the interface to surface it.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Node Function — Read and Write tabs</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme3-readonly-cells-after.png"
                  alt="OPC UA Explorer Node Function panel showing both Read and Write tabs for a writable node, ConveyorSpeed_Setpoint."
                  focalX="86%"
                  focalY="22%"
                  zoom={1.7}
                  caption="Node Function panel, shipped: Write tab appears only when the node permits it. Read-only nodes show Read alone."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Visually grey out cells in the monitoring table for read-only nodes. Don&rsquo;t change the underlying behavior — just close the loop on the affordance.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill><Check />Shipped</Pill>
              </div>
              <p className="insight-body">The Node Function panel now exposes a <strong>Write</strong> tab only when the selected node permits writing. Read-only nodes show only a <strong>Read</strong> tab — so the user never starts a write the server will reject.</p>
            </div>
          </div>
        </div>

        {/* Theme 5 */}
        <div className="insight-block">
          <div className="insight-grid">
            <div>
              <div className="insight-eyebrow">Theme 5</div>
              <h3 className="insight-h3">Critical metadata was missing where engineers looked for it</h3>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">When a participant inspected a node, they expected to see four things together: the value, the unit (°C or psi or m/s²), the data quality (is this reading trustworthy right now?), and the sampling frequency (how fresh is this number?). The app showed value and partial metadata; the rest required clicking into a separate panel.</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">Engineers don&rsquo;t read sensor values in the abstract. A temperature reading without a unit and a quality flag is decoration, not data. The app was forcing them to assemble context across multiple panels every time they checked a value.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <h5 className="screenshot-title">Monitoring table with Quality &amp; Timestamp inline</h5>
                <ZoomFrame
                  src="/images/opcua/opcua-theme4-inline-metadata-after.png"
                  alt="OPC UA Explorer monitoring table showing Node, Value, Quality, and Timestamp columns inline."
                  focalX="58%"
                  focalY="24%"
                  zoom={1.7}
                  caption="Monitoring table, shipped: Quality and Timestamp inline beside every Value. Units live in Node Information."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Surface unit, data quality, and last-update timestamp inline with every value, in the monitoring table. Make the answer to &ldquo;is this reading trustworthy right now?&rdquo; a glance, not a workflow.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill><Check />Shipped</Pill>
              </div>
              <p className="insight-body"><strong>Quality</strong> and <strong>timestamp</strong> shipped as inline columns. <strong>Units</strong> were deliberately kept <em>out</em> of the table; they sit in the Node Information panel as secondary data. Mixing unit strings into the table would force every Generate-Script consumer to strip them before computation — the secondary-data placement preserves both context and the numeric pipeline.</p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 8. WHAT THE DESIGN REVIEW SURFACED ──────────────────────────── */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '80px 24px' }}>
        <Reveal>
          <div style={{ marginBottom: 32 }}>
            <EyebrowLabel num="07">Internal Design Review</EyebrowLabel>
            <H2>What the design review <em>surfaced</em></H2>
            <P style={{ marginBottom: 0 }}>
              The Internal Design Review wasn&rsquo;t a checkpoint — it was the round where I had to make decisions about <em>what to ship now, what to defer, and what to push back on</em> with five senior reviewers across engineering and design. These three moments are where the work was less &ldquo;research findings&rdquo; and more &ldquo;strategic partner in project planning.&rdquo;
            </P>
          </div>
        </Reveal>
        <div className="idr-stack">
          {/* IDR 01 */}
          <div className="flank-card">
            <p className="flank-eyebrow">IDR Moment 01</p>
            <h4 className="flank-h4">I advocated for a Generate-Script button before anyone asked for it</h4>
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">The product team&rsquo;s instinct was to defer export functionality — &ldquo;they can copy it manually, or use the API for that.&rdquo; From the usability study, I&rsquo;d already seen three of five participants reach for some equivalent of &ldquo;save this to a file&rdquo; or &ldquo;get this into a script&rdquo; within the first five minutes.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">My Stance</p>
              <p className="flank-body">I argued — with the usability evidence behind it — that export was the moment the app stopped being a viewer and started being a tool. Without it, every digital-twin use case would have the engineer dropping back to the API the moment they had data they wanted to keep. I framed it as a v1 must-have, not a stretch goal.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Outcome</p>
              <p className="flank-body">Shipped in R2026a. The Generate-Script button sits in the toolbar under CODE GENERATION; a click produces a MATLAB Live Script with the session reconstructed as code.</p>
            </div>
            <div className="screenshot-card" style={{ marginTop: 18 }}>
              <h5 className="screenshot-title">The Generate Script artifact</h5>
              <ZoomFrame
                src="/images/opcua/opcua-export-to-matlab.png"
                alt="The MATLAB Live Script auto-generated by Generate Script, with sections Create OPC UA Client, Connect OPC UA Client, and Subscribe to OPC UA Nodes."
                focalX="50%"
                focalY="40%"
                zoom={1.6}
                caption="The artifact: a Live Script that reconstructs the user's session as runnable MATLAB."
              />
            </div>
          </div>
          {/* IDR 02 */}
          <div className="flank-card">
            <p className="flank-eyebrow">IDR Moment 02</p>
            <h4 className="flank-h4">I defended deferring in-app address-space search, even though five reviewers wanted it</h4>
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">Four of five reviewers and three of five usability participants asked for in-app search of the address space. The temptation to add it for v1 was strong. But the engineering cost was substantial — the address-space tree isn&rsquo;t always fully loaded; search has to handle partial-load semantics and permissions — and we were already at scope on v1.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">My Stance</p>
              <p className="flank-body">I pushed for shipping API-side search in v1 and deferring the in-app version. The digital-twin engineer who needs to find a specific node fast is also the one most likely to be scripting. Holding v1 for in-app search would have delayed export, the read/write affordance fix, and the panel-order swap — all of which had stronger usability evidence.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Outcome</p>
              <p className="flank-body">API-side search shipped in R2026a. In-app search is on the roadmap for the next release with stronger discoverability scaffolding — recents, favorites, filter chips — informed by v1 telemetry.</p>
            </div>
          </div>
          {/* IDR 03 */}
          <div className="flank-card">
            <p className="flank-eyebrow">IDR Moment 03</p>
            <h4 className="flank-h4">I pushed back on the original panel order</h4>
            <div className="flank-row">
              <p className="flank-label">Observation</p>
              <p className="flank-body">The first design draft had the Node Information panel above Node Function. A principal engineer noted, almost in passing, that this was &ldquo;probably right because information comes before action.&rdquo; From the usability study, four of five participants had hit the bottom panel first looking for what to do, then scrolled up — the opposite mental model.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">My Stance</p>
              <p className="flank-body">I proposed swapping the order: Node Function (what can I do here) above Node Information (what is this). The argument wasn&rsquo;t about hierarchy or convention — it was that tools answer &ldquo;what can I do&rdquo; before &ldquo;what is this,&rdquo; especially for users who already know what an OPC UA node is.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Outcome</p>
              <p className="flank-body">Panels were swapped — the cleanest before/after in the shipped app.</p>
            </div>
            <div className="before-after-pair" style={{ marginTop: 22, marginBottom: 0 }}>
              <div className="before-after-grid">
                <div>
                  <div className="ba-label">Before</div>
                  <div className="screenshot-card full-bleed">
                    <h5 className="screenshot-title">Panels stacked, Function panel buried</h5>
                    <figure className="wireframe-frame">
                      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="idr3BeforeTitle">
                        <title id="idr3BeforeTitle">Before state: Node Information panel large on top; Node Function panel small below and partially off-screen. Red dashed eyeline marks where 4 of 5 users stopped scrolling.</title>
                        <rect x="20" y="20" width="280" height="108" rx="4" fill="white" stroke={INK3} strokeOpacity="0.4" strokeWidth="1" />
                        <text x="30" y="36" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={INK2}>Node Information</text>
                        {[52, 62, 72, 82, 92, 102, 112].map((y, i) => (
                          <line key={y} x1="30" y1={y} x2={170 + ((i * 23) % 80)} y2={y} stroke={INK3} strokeOpacity="0.3" strokeWidth="2" />
                        ))}
                        <line x1="0" y1="136" x2="320" y2="136" stroke="#c2525a" strokeWidth="1.5" strokeDasharray="4 3" />
                        <text x="312" y="132" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="700" fill="#c2525a" letterSpacing="0.05em">SCROLL STOPS HERE · 4 of 5</text>
                        <rect x="20" y="146" width="280" height="52" rx="4" fill="white" stroke={INK3} strokeOpacity="0.35" strokeWidth="1" opacity="0.55" />
                        <text x="30" y="162" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={INK2} opacity="0.6">Node Function</text>
                        <line x1="30" y1="176" x2="180" y2="176" stroke={INK3} strokeOpacity="0.22" strokeWidth="2" />
                      </svg>
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="ba-label">After</div>
                  <div className="screenshot-card full-bleed">
                    <h5 className="screenshot-title">Function on top, Information below</h5>
                    <ZoomFrame
                      src="/images/opcua/opcua-theme1-panel-order-after.png"
                      alt="OPC UA Explorer right pane — Node Function on top, Node Information below."
                      focalX="86%"
                      focalY="32%"
                      zoom={1.6}
                    />
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', color: INK3, margin: '10px 0 0', lineHeight: 1.5 }}>
                Node Information was the largest panel by default; Node Function (the action panel) sat below it, off-screen on smaller monitors. After: action panel on top, metadata below, with a Generate Script button added.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 9. OUTCOME ──────────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="08">Outcome</EyebrowLabel>
          <H2>What shipped <em>— and what didn&rsquo;t</em></H2>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            The OPC UA Explorer shipped in <strong>MATLAB R2026a</strong>, ~15 months after the first contextual interview. You can read its public documentation at{' '}
            <a href="https://www.mathworks.com/help/icomm/ug/opcuaexplorer-app.html"
               target="_blank" rel="noopener noreferrer" className="docs-link">
              mathworks.com/help/icomm/ug/opcuaexplorer-app.html
            </a>.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            Beyond the headline shipped features, the research generated an <strong>11-item feature-request pipeline</strong> that has shaped the next two releases. As a strategic partner in project planning, I helped the team decide what <em>not</em> to ship in v1 just as much as what to ship.
          </P>
        </Reveal>

        <div className="hero-break">
          <div className="screenshot-card full-bleed">
            <h5 className="screenshot-title">OPC UA Explorer, MATLAB R2026a</h5>
            <figure className="hero-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/opcua/opcua-hero-fullwindow.png"
                alt="The shipped OPC UA Explorer app in MATLAB R2026a — address space on the left, monitoring table populated, Plot panel showing live data, Node panels on the right."
              />
              <figcaption>OPC UA Explorer, MATLAB R2026a — Vehicle Production Factory demo server.</figcaption>
            </figure>
          </div>
        </div>

        <DecisionBar />

        <div style={{ overflowX: 'auto', marginTop: 32 }}>
          <table className="deferred-table">
            <thead>
              <tr>
                <th>Feature request</th>
                <th>Decision</th>
                <th>Rationale</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['In-app address-space search', 'Deferred to next release', 'Search shipped on the API first; in-app search needed more data on which behaviors mattered'],
                ['Right-click contextual menus on monitoring table rows', 'Deferred — enhancement request to underlying UI table component', 'Required platform-level change; not blocked on UX'],
                ['Cross-correlation plots between two nodes', 'Deferred to a later release', 'Strong signal but small sample of users requesting it'],
                ['Custom alarms on monitoring values', 'Deferred — covered by Simulink workflow today', 'Use case existed but had a viable workaround'],
                ['Save/load app session layout', 'Deferred — enhancement request to platform', 'Required Hardware Manager–level change'],
                ['Five other smaller asks', 'Deferred or absorbed into existing features', 'Mix of low frequency, high cost, or already in the roadmap'],
              ].map(([feat, dec, rat]) => (
                <tr key={feat}>
                  <td style={{ fontWeight: 500, color: INK, maxWidth: 200 }}>{feat}</td>
                  <td style={{ color: INK2 }}>{dec}</td>
                  <td style={{ color: INK3 }}>{rat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontFamily: 'Inter', fontSize: 15, fontStyle: 'italic', color: INK3, margin: '16px 0 0', lineHeight: 1.6 }}>
          Saying no with reasons is part of the job. Every deferral above traces back to a specific finding from the usability study or design review — not to engineering fatigue.
        </p>
      </div>

      <Divider />

      {/* ── 10. WHAT I'D DO DIFFERENTLY ─────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="09">Reflection</EyebrowLabel>
          <H2>What I&rsquo;d do <em>differently</em></H2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <Reveal delay={0.05}>
          <div className="lesson-row">
          <div
            className="lesson-icon-box"
            role="img"
            aria-label="Earlier strategic planning (clock) leads to the next product (database) — the OPC UA Server, applied next."
          >
            <div className="lesson-diagram">
              <div className="lesson-icon-col">
                <Clock size={36} style={{ color: A }} />
                <div className="lesson-dashed-rule" />
              </div>
              <TrendingFlat size={18} style={{ color: INK3 }} />
              <div className="lesson-icon-col">
                <Database size={36} style={{ color: INK2 }} />
                <span className="lesson-icon-label">OPC UA Server</span>
                <span className="lesson-icon-sublabel">(applied next)</span>
              </div>
            </div>
          </div>
          <div className="lesson-body">
            <div className="reflection-num">One.</div>
            <P style={{ marginBottom: 0 }}>
              I&rsquo;d start the strategic-planning conversation earlier. The research drove the right product, but I waited until I had data to bring strong opinions to the form-factor and scoping discussions. If I&rsquo;d had this lens from week one, I&rsquo;d have run a structured form-factor workshop <em>before</em> the usability study — committing the team to &ldquo;this will be an app, not a Simulink block, because here&rsquo;s the reasoning&rdquo; before we sunk months into a particular UI direction. (For our next product — the OPC UA Server — that&rsquo;s exactly what we did. The discipline came directly from this case.)
            </P>
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.1}>
        <div className="lesson-row">
          <div
            className="lesson-icon-box"
            role="img"
            aria-label="Two filled person silhouettes (accent color) for a 2-3 person micro-study, then five filled silhouettes for the full 5-participant study."
          >
            <div className="lesson-diagram">
              <div className="lesson-icon-col">
                <div className="lesson-people-row" style={{ color: A }}>
                  <Person size={22} filled />
                  <Person size={22} filled />
                </div>
                <span className="lesson-icon-num">2–3</span>
                <span className="lesson-icon-label">Micro-study</span>
              </div>
              <TrendingFlat size={18} style={{ color: INK3 }} />
              <div className="lesson-icon-col">
                <div className="lesson-people-row" style={{ color: INK2 }}>
                  <Person size={16} filled />
                  <Person size={16} filled />
                  <Person size={16} filled />
                  <Person size={16} filled />
                  <Person size={16} filled />
                </div>
                <span className="lesson-icon-num">5</span>
                <span className="lesson-icon-label">Full study</span>
              </div>
            </div>
          </div>
          <div className="lesson-body">
            <div className="reflection-num">Two.</div>
            <P style={{ marginBottom: 0 }}>
              I&rsquo;d run a smaller, faster usability round earlier — with 2 or 3 participants — to validate the prototype skeleton before the full 5-participant study. Several of the 27 findings were structural enough that an early micro-study would have caught them at a fraction of the cost. Five-participant studies are the right tool for &ldquo;is this ready to ship?&rdquo; — they&rsquo;re a heavy hammer for &ldquo;is this on the right track?&rdquo;
            </P>
          </div>
        </div>
        </Reveal>
        </div>
      </div>

      {/* ── 11. FOOTER ──────────────────────────────────────────────────── */}
      <div className="cs-footer">
        <div className="cs-footer-inner">
          <Link href="/#work" className="footer-link"><ArrowLeft style={{ marginRight: 6 }} />Back to portfolio</Link>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: INK3, margin: '0 0 6px' }}>
              Next case study
            </p>
            <Link href="/work/ni-daqmx" className="footer-link">NI-DAQmx API Design<ArrowRight style={{ marginLeft: 6 }} /></Link>
            <p style={{ fontFamily: 'Inter', fontSize: 13, color: INK3, margin: '6px 0 0', lineHeight: 1.5 }}>
              11 participants · function-based vs. class-based · shipped as calldaqlib in MATLAB R2026a
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OPCUAExplorerPage() {
  return (
    <PasswordGate accentColor="#1E6B4A" softColor="#B8DFD0">
      <OPCUAContent />
    </PasswordGate>
  );
}
