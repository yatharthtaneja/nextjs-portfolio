'use client';

import Link from 'next/link';
import Image from 'next/image';
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
import DecisionBar from './_components/DecisionBar';
import ZoomFrame from './_components/ZoomFrame';
import Detail from './_components/Detail';
import OPCUAStyles from './_components/OPCUAStyles';
import RoleTimeline from './_components/RoleTimeline';
import GlossaryTiles from './_components/GlossaryTiles';
import LandscapeSVG from './_components/LandscapeSVG';
import PhaseFunnel from './_components/PhaseFunnel';
import BrainstormCollage from './_components/BrainstormCollage';
import AudienceReframe from './_components/AudienceReframe';
import AnchorQuadrant from './_components/AnchorQuadrant';
import UserArchetypes from './_components/UserArchetypes';
import CrazyEights from './_components/CrazyEights';
import ForumConflict from './_components/ForumConflict';
import ImpactMetrics from './_components/ImpactMetrics';
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
            <Image
              src="/images/opcua/opc-hero.png"
              alt="Collage of factory equipment — robotic arm, valves, conveyor, pressure gauge — around an engineer at a workstation, with the OPC UA logo at center."
              width={2659}
              height={1839}
              priority
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 50vw, 700px"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      <div style={{ background: AB }}>
        <p className="hook-transition">
          OPC UA is that protocol. My job was to work out whether we should build the tool at all — and if so, what it should do.
        </p>
      </div>

      {/* ── 2. TL;DR ────────────────────────────────────────────────────── */}
      <div style={{ background: AB, borderTop: `3px solid ${A}`, padding: '40px 24px' }}>
        <StaggerGroup className="tldr-grid">
          <StaggerItem className="tldr-cell">
            <p className="tldr-label">My Role</p>
            <p className="tldr-value">Lead UX researcher, and a strategic partner in deciding what we built.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">The Question</p>
            <p className="tldr-value">Is it worth building our own GUI app, when third-party OPC UA clients already exist?</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">What Shipped</p>
            <p className="tldr-value">OPC UA Explorer, in MATLAB R2026a. Explore the factory in the app, then export the session as MATLAB code.</p>
          </StaggerItem>
          <StaggerItem className="tldr-cell" style={{ paddingLeft: 28 }}>
            <p className="tldr-label">Business Impact</p>
            <p className="tldr-value">Customers enter our ecosystem early instead of starting in a third-party tool. Measured by the drop in &ldquo;what code do I write to connect?&rdquo; escalations.</p>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <Divider />

      {/* ── 3. WHO THIS IS FOR ──────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="01">Who this is for</EyebrowLabel>
          <H2>Six kinds of engineer, <em>one first step</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            MathWorks sells the nuts and bolts. Engineers and data scientists use our toolboxes to talk to hardware, get data out of it, and build something with it — for themselves or for their own customers. The Industrial Communication Toolbox is the part that does the talking: it acquires data from industrial machines over whatever protocol they speak.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            OPC UA is one of those protocols. The hardware companies settled on it as a common language so that anyone could communicate with their machines without a custom integration for every vendor.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            The people who end up in our toolbox are doing six fairly different jobs. What they share is the first step: get the data out of the factory.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <UserArchetypes />
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40 }}>
            When our software connects to a factory&rsquo;s OPC UA server, what it sees is an <strong>address space</strong> — the table of contents of everything that factory is broadcasting. Each entry is a <strong>node</strong>: one temperature reading, one valve position. To watch a node change over time, you create a <strong>subscription</strong>.
          </P>
        </Reveal>

        <Detail
          title={<>The rest of the OPC UA vocabulary, if you want it</>}
          teaser="Address space, node, subscription, browse path — the terms that show up later in the findings."
        >
          <GlossaryTiles />
        </Detail>

        <Reveal delay={0.1}>
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: `1px solid ${LINE}`,
            marginTop: 28,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/artifact-digital-twin-flow.svg"
              alt="Flow diagram: ride sensors → OPC UA Server → MATLAB Digital Twin → Predictive Alert"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40, marginBottom: 0 }}>
            There was also a deadline none of us set. OPC DA — the protocol our customers had relied on for two decades — was being deprecated industry-wide. Sensor manufacturers were dropping support, and our own product was scheduled to drop it too. Engineers everywhere from amusement-park ride safety to ship-building to energy-grid monitoring had to move to OPC UA, and most of them did not have the programming background to write OPC UA scripts from scratch.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <LandscapeSVG />
        </Reveal>
      </div>

      <Divider />

      {/* ── 4. THE QUESTION ─────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="02">The question</EyebrowLabel>
          <H2>Was it worth building <em>our own app at all?</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            That was the research goal, and it was a real question — not a formality on the way to a yes. There was already a market full of third-party OPC UA clients, some paid, some open source, all of them able to read from and write to a server. We also already shipped an API: a MATLAB user could write the code today and get the same result.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            So the honest version of the question was narrower. <strong>What would our app do that those two things don&rsquo;t?</strong> If the answer was &ldquo;nothing much,&rdquo; the right recommendation was to not build it.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <PullQuote cite="Where the research landed">
            Yes, build it — because the work is scattered across five tools, and everything you learn by clicking has to be rebuilt as code afterwards.
          </PullQuote>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            Three things came out of discovery and pointed the same way. The workflow was spread across several different tools. If you were not an OPC UA expert, you depended on someone who was — and waited for them. And whatever you worked out by clicking around, you then had to reproduce in code before it was worth anything to the rest of your team.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            So the app has a specific shape. <strong>Explore the factory in the app, then export the session as MATLAB code.</strong> You do the fiddly interactive part where interaction is cheap — connecting, browsing, subscribing, checking a value is what you think it is — and then take the result out as a script you can scale, schedule, or hand to whoever comes next. The Generate Script button in <a href="#ship" className="docs-link">Stage 4</a> is where that shows up in the product.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            Instead of struggling with five different tools, they rarely have to leave MATLAB.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 5. MY ROLE ──────────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="03">My Role</EyebrowLabel>
          <H2>Strategic partner, <em>not just a study runner</em></H2>
        </Reveal>

        <RoleTimeline />

        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            I led the research and acted as a strategic partner in planning — not just running studies, but shaping which problems were worth solving and which weren&rsquo;t. I scoped discovery, ran the contextual interviews, facilitated the design workshop, designed and ran the usability study, and presented to both design review forums. When the team had to choose between competing feature requests, I was the one tying every recommendation back to evidence.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 6. HOW I APPROACHED IT ──────────────────────────────────────── */}
      <div style={{ background: CARD, padding: '64px 24px' }}>
        <div className="wide" style={{ padding: 0, maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <EyebrowLabel num="04">Process</EyebrowLabel>
              <H2>Four stages, <em>fifteen months</em></H2>
            </div>
          </Reveal>

          <StaggerGroup className="phase-grid">
            {[
              {
                label: 'Stage 1 — Discovery',
                stats: 'Dec 2023 – Feb 2024\n4 external contextual interviews + our support engineers\n18 pain points · 14 requirements',
                body: 'A four-week discovery sprint with engineers across four industries — automotive controls, amusement-park digital twins, PLC virtual commissioning, ship-building — plus contextual inquiry with our own Advanced Support Group, who field these problems from customers every day. I built the screener, the interview guide and the requirements document, and led synthesis with the developer and design lead.',
              },
              {
                label: 'Stage 2 — Design',
                stats: 'Mar – Aug 2024\n9-person Crazy 8\u2019s workshop\n2 review forums · 8+ senior reviewers',
                body: 'I ran a cross-functional sketching workshop off the back of the requirements, compiled the results into a preferred and an alternate design, and took both to two senior review forums. The forums did not agree with each other — which is what set up the study that followed.',
              },
              {
                label: 'Stage 3 — Validation',
                stats: 'Sep – Oct 2024\n5 external participants · 27 findings\n5 insight themes · 11 feature requests',
                body: 'A task-based study with 5 external participants from four industries. The scenario: help a systems engineer at an amusement-park operator read ride vibration sensors and inspect their values. Each session was a contextual inquiry. Twenty-seven findings came out, distilled into five high-priority themes — and an answer to the disagreement from Stage 2.',
              },
              {
                label: 'Stage 4 — Ship',
                stats: 'Mar 2025 – R2026a\n13 interface areas reviewed\nhandover, change readout, green flag',
                body: 'I presented the prototype and findings to the internal design review, tracked feedback across 13 interface areas, and worked with the developer on an honest response to each — what we agreed with and would change, what we disagreed with and why. Then handover to development, a readout of what changed and why, and a final review run as a usability session to get the go-ahead to ship.',
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
              Before we tested anything, four external contextual interviews — plus time with our own Advanced Support Group, the engineers who field these problems from customers — told us <em>why</em> the existing workflow was failing, and which engineer to design for first. We benchmarked the third-party clients alongside it, so we knew what we would be judged against.
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

        <Reveal delay={0.05}>
          <div className="flank-card" style={{ marginTop: 40 }}>
            <p className="flank-eyebrow">The hard part</p>
            <h4 className="flank-h4">Earning the right to ask the next question</h4>
            <p className="flank-body">
              I was onboarding into this domain at the same time as I was researching it, and the people I was interviewing had been in it for twenty-five years. Some worked in defence and could share almost nothing — no context, no screenshots, no names, because their rules said so. Others were startup founders working with mid-scale factories, or ran multiple PSU plants, or built commercial mobile manufacturing lines, adventure-park rides, submarines.
            </p>
            <p className="flank-body" style={{ marginTop: 14 }}>
              Every one of them had a different problem on the surface. My job was to find the part underneath that was the same, stay honest about where my toolbox&rsquo;s responsibility ended, and sound competent enough in the room that an engineer of twenty-five years would keep talking to me. That last part was most of the work in the first few weeks.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40, marginBottom: 0 }}>
            Stage 1 ended with functional and non-functional requirements, and a readout where we prioritised them together as a team — what ships in v1, what parks for v2, and what sits outside what we should be doing at all. That was the point we committed to building it.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 6c. STAGE 2 — DESIGN ────────────────────────────────────────── */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
        <Reveal>
          <div style={{ marginBottom: 8 }}>
            <EyebrowLabel num="06">Design</EyebrowLabel>
            <H2>Getting the best design out <em>of nine people</em></H2>
            <P>
              With requirements agreed, the question changed from <em>should we build this</em> to <em>what should it look like</em>. I ran a Crazy 8&rsquo;s workshop rather than designing it myself — the domain knowledge in that room was spread across nine people and none of them was me.
            </P>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <CrazyEights />
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40 }}>
            The thing I had to manage was who dominated. The developers who knew OPC UA deeply could have decided every screen by default, and the designers and the developers who didn&rsquo;t know the domain would have deferred to them — which would have given us a design that was technically correct and unusable by the people we&rsquo;d just interviewed.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <PullQuote cite="How I think about facilitation">
            My job is not to make the best design. It is to get the best design out.
          </PullQuote>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            We combined the sketches into design cases — a preferred direction and an alternate — and took both to two forums. One was the App Design Review: the VP of MATLAB and the customer-facing engineers. The other was the Hardware Design Review: senior UX VPs and principal designers. Between them, more than eight senior reviewers.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            They did not agree with each other.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <ForumConflict />
        </Reveal>

        {/* TODO(yt): which forum argued for which placement? Worth naming —
            it makes the disagreement concrete rather than abstract. */}

        <Reveal delay={0.05}>
          <P style={{ marginTop: 36, marginBottom: 0 }}>
            I could have picked a side and defended it. Both sides outranked me, both had a real argument, and whichever one I chose, I would have been choosing on taste. So I did the other thing available to me: I turned the disagreement into something testable.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 7. WHAT WE LEARNED ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '80px 24px 48px' }}>
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <EyebrowLabel num="07">Validation</EyebrowLabel>
            <H2>I made the argument <em>testable</em></H2>
            <P>
              I went back and watched every recording from both forums. Out of that I wrote more than fifty specific research questions — one for each thing a reviewer had actually doubted, including every version of &ldquo;where should this action live.&rdquo; Then I condensed them into hypotheses and four high-level research questions, so the study covered the whole disagreement rather than the parts I happened to find interesting.
            </P>
            <P style={{ marginBottom: 0 }}>
              All the feedback was valid. That was the problem — and the reason this had to be settled with users rather than in a room.
            </P>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rq-grid">
            {[
              ['Comprehension', 'Do users understand and navigate the interface and its functionality?'],
              ['Usefulness', 'Does the app actually support the workflows they came with?'],
              ['Intuitiveness', 'Do the flows match the mental model they already have?'],
              ['Affordance', 'Do the interface elements communicate what they do and what will happen?'],
            ].map(([name, q]) => (
              <div className="rq-item" key={name}>
                <span className="rq-name">{name}</span>
                <span className="rq-q">{q}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div style={{ margin: '44px 0 8px' }}>
            <PhaseFunnel />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 32, marginBottom: 40 }}>
            Five participants, four industries, task-based sessions run as contextual inquiries. Twenty-seven findings came out; five themes carried the weight. Each one below follows the same shape — observation, insight, recommendation, what shipped. Open any of them for the detail.
          </P>
        </Reveal>

        {/* Theme 1 — Terminology debt */}
        <Detail
          eyebrow="Theme 1"
          title={<>Configure didn&rsquo;t mean configure. Logging didn&rsquo;t mean logging.</>}
          teaser="Four renames — and Export Log deleted outright rather than renamed."
          badge={<Pill><Check />Shipped</Pill>}
          open
        >
        <div className="insight-block">
          <div className="insight-grid">
            <div>

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
        </Detail>

        {/* Theme 2 — Panel order */}
        <Detail
          eyebrow="Theme 2"
          title={<>Engineers expected the action panel above the metadata, not below it</>}
          teaser="Panels swapped: action above metadata. Generate Script added."
          badge={<Pill><Check />Shipped</Pill>}
          open
        >
        <div className="insight-block">
          <div className="insight-grid">
            <div>

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
        </Detail>

        {/* Theme 3 */}
        <Detail
          eyebrow="Theme 3"
          title={<>The address space was a tree without a search box, and engineers got lost</>}
          teaser="API-side search shipped; in-app search deliberately deferred."
          badge={<Pill shipped={false}>~ Partially shipped</Pill>}
        >
        <div className="insight-block">
          <div className="insight-grid">
            <div>

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
        </Detail>

        {/* Theme 4 */}
        <Detail
          eyebrow="Theme 4"
          title={<>Engineers wrote to read-only nodes and got cryptic errors</>}
          teaser="The Write tab now appears only when the node actually allows writing."
          badge={<Pill><Check />Shipped</Pill>}
        >
        <div className="insight-block">
          <div className="insight-grid">
            <div>

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
        </Detail>

        {/* Theme 5 */}
        <Detail
          eyebrow="Theme 5"
          title={<>Critical metadata was missing where engineers looked for it</>}
          teaser="Quality and timestamp inline. Units deliberately kept out of the table."
          badge={<Pill><Check />Shipped</Pill>}
        >
        <div className="insight-block">
          <div className="insight-grid">
            <div>

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
        </Detail>

        <Reveal delay={0.05}>
          <div className="flank-card" style={{ marginTop: 48 }}>
            <p className="flank-eyebrow">Back to the disagreement</p>
            <h4 className="flank-h4">The study answered the question the forums couldn&rsquo;t</h4>
            <p className="flank-body">
              Nobody in either forum was wrong about their own reasoning — they were reasoning about different users. The study replaced the argument with evidence. Participants read toolstrip labels as descriptions of what would happen to the thing in front of them, which is why <span className="mono">Start Monitoring</span> became <strong>Add to Table</strong>. They looked for the action beside the node they had selected, not above it, which is why the panels were swapped. And the workflows nobody could place cleanly stayed out of v1 rather than being forced into a pop-up to end the debate.
            </p>
            {/* TODO(yt): name which forum's position the study vindicated, and
                whether what shipped was a third answer neither had proposed. */}
            <p className="flank-body" style={{ marginTop: 14 }}>
              That is the part I would defend hardest. The disagreement was real and expensive, and the way out of it was not seniority — it was five people and a task list.
            </p>
          </div>
        </Reveal>
      </div>

      <Divider />

      {/* ── 8. STAGE 4 — SHIP ───────────────────────────────────────────── */}
      <div id="ship" style={{ maxWidth: 1140, margin: '0 auto', padding: '80px 24px', scrollMarginTop: 24 }}>
        <Reveal>
          <div style={{ marginBottom: 32 }}>
            <EyebrowLabel num="08">Ship</EyebrowLabel>
            <H2>Where I had to <em>take a position</em></H2>
            <P style={{ marginBottom: 0 }}>
              The design review wasn&rsquo;t a checkpoint. It was the round where I had to decide what to ship now, what to defer, and what to push back on — in front of senior reviewers across engineering and design, across thirteen interface areas. These three moments are the ones where the job was less &ldquo;here are the findings&rdquo; and more &ldquo;here is what I think we should do, and why.&rdquo;
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
          <H2 style={{ marginTop: 0 }}>What shipped <em>— and what didn&rsquo;t</em></H2>
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

        <Reveal delay={0.05}>
          <div className="flank-card" style={{ marginTop: 48 }}>
            <p className="flank-eyebrow">What we traded away</p>
            <h4 className="flank-h4">Four decisions that cost us something</h4>
            <ul className="impact-list" style={{ marginTop: 16 }}>
              <li>
                We dropped workflows at the requirements stage, before anyone had designed them. Cheaper to cut an idea than a screen.
              </li>
              <li>
                Configuration, read and write went into v1. Methods waited. That call came from code telemetry alongside the interview data — we could see what people actually reached for in the API, and it matched what they had told us.
              </li>
              <li>
                The six-panel layout was fixed. It wasn&rsquo;t ours to change, so the design had to be good inside it.
              </li>
              <li>
                Drag-and-drop and contextual menus weren&rsquo;t supported by the underlying infrastructure, so we designed around them. That limitation has since been picked up as a company-wide Tier&nbsp;1 project.
                {/* TODO(yt): name the Tier 1 project and its status, if you can. */}
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40, marginBottom: 0 }}>
            Then it went to development to be built for real. I presented what had changed since the last time each group had seen it and why, and we ran the final design review as a usability session rather than a slideshow — put the working product in front of the people signing it off, and let them try it. That was the green flag.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 9b. IMPACT ──────────────────────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="09">Impact</EyebrowLabel>
          <H2>What actually <em>changed</em></H2>
          <P>
            The app shipped in MATLAB R2026a, about fifteen months after the first interview. Two things changed as a result — one for the engineer using it, one for us.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <ImpactMetrics />
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40, marginBottom: 0 }}>
            There is a quieter one too. Because every &ldquo;what do we skip&rdquo; conversation happened before the code got written, the team avoided a round of rework it would otherwise have paid for. That is harder to put a number on, and it is the part I would argue mattered most.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── 10. WHAT I'D DO DIFFERENTLY ─────────────────────────────────── */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="10">Reflection</EyebrowLabel>
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
  return <OPCUAContent />;
}
