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
import Annotated from './_components/Annotated';
import Detail from './_components/Detail';
import OPCUAStyles from './_components/OPCUAStyles';
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

      {/* ── BEAT 0 · THE HOOK ─────────────────────────────────────────────
          Ten seconds: the problem, then the thing itself, then the outcome.
          Two paragraphs of "what a factory broadcasts" used to sit between
          the headline and the product; they are now one sentence, and the
          detail a newcomer needs lives in Beat 1's accordion. */}
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
              <P style={{ marginBottom: 0 }}>
                Every machine on that floor broadcasts constantly, vibration, pressure, heat, fault codes, through a single protocol the industrial world agreed on years ago. But reading one sensor meant opening a code editor and writing 50 lines of connection logic from memory. Every single time.
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
              alt="Collage of factory equipment, including a robotic arm, valves, conveyor and pressure gauge, around an engineer at a workstation, with the OPC UA logo at center."
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
          OPC UA is that protocol. My job was to work out whether we should build the tool at all, and if so, what it should do.
        </p>
      </div>

      {/* The outcome and the product itself, before a word of process. The
          "five tools" formulation is stated here and nowhere else on the page. */}
      <div className="prose" style={{ paddingTop: 56, paddingBottom: 44 }}>
        <Reveal>
          <EyebrowLabel>What shipped</EyebrowLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="hook-outcome">Five tools became <em>one</em>.</p>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="tldr-shot">
            <Image
              src="/images/opcua/opcua-app-plot.png"
              alt="OPC UA Explorer in MATLAB. Toolstrip across the top with Connection Settings, Add to Table, Remove from Table and Generate Script. Address space tree on the left, node monitoring table in the middle showing live values with quality and timestamp, Node Function and Node Information panels on the right, and the Plot pane along the bottom charting three subscribed sensors over time."
              width={3360}
              height={2020}
              sizes="(max-width: 768px) 92vw, 1080px"
              style={{ width: '100%', height: 'auto' }}
            />
            <figcaption>
              OPC UA Explorer, MATLAB R2026a. Three subscribed nodes plotting live off the Vehicle Production Factory demo server.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <P style={{ marginTop: 32, marginBottom: 0 }}>
            <span className="hl">Connect to a factory, browse what is in it, watch values update, then press one button and leave with the whole session as runnable MATLAB.</span> That work used to be spread across five separate tools, and whatever you worked out by clicking had to be rebuilt as code before it was worth anything to your team.
          </P>
        </Reveal>
      </div>

      {/* The impact, up front. It used to sit in Beat 3, well past the point
          where a reader decides whether to keep going. Leading with what
          changed is what earns the scroll. */}
      <div className="prose" style={{ paddingBottom: 52 }}>
        <Reveal>
          <EyebrowLabel>What changed</EyebrowLabel>
          <H2 style={{ marginTop: 0 }}>What actually <em>changed</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            Two things changed as a result: one for the engineer using it, one for us.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <ImpactMetrics />
        </Reveal>

        <Reveal delay={0.05}>
          <H2>The rework that <em>never happened</em></H2>
        </Reveal>
        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            There is a quieter one too. <span className="hl">Because every &ldquo;what do we skip&rdquo; conversation happened before the code got written, the team avoided a round of rework it would otherwise have paid for.</span> That is harder to put a number on, and it is the part I would argue mattered most.
          </P>
        </Reveal>
      </div>

      {/* Metadata, deliberately after the outcome rather than before it. */}
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
        </StaggerGroup>
      </div>

      <Divider />

      {/* ── BEAT 1 · THE PROBLEM ──────────────────────────────────────────
          The question leads, because it is the sharper opening: the honest
          possibility that the right answer was "do not build this". Who it is
          for follows. Everything a reader needs only if OPC UA is new to them
          stays in the accordion. */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="01">The problem</EyebrowLabel>
          <H2>Was it worth building <em>our own app at all?</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            That was the research goal, and it was a real question, not a formality on the way to a yes. There was already a market full of third-party OPC UA clients, some paid, some open source, all of them able to read from and write to a server. We also already shipped an API: a MATLAB user could write the code today and get the same result.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            So the honest version of the question was narrower. <span className="hl"><strong>What would our app do that those two things don&rsquo;t?</strong></span> If the answer was &ldquo;nothing much,&rdquo; the right recommendation was to not build it.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <PullQuote cite="Where the research landed">
            Yes, build it. Nobody can do this work in one place, and everything you learn by clicking has to be rebuilt as code afterwards.
          </PullQuote>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            Three things came out of discovery and pointed the same way. <span className="hl">The workflow was spread across several different tools.</span> <span className="hl">If you were not an OPC UA expert, you depended on someone who was, and waited for them.</span> And whatever you worked out by clicking around, you then had to reproduce in code before it was worth anything to the rest of your team.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            So the app has a specific shape. <span className="hl"><strong>Explore the factory in the app, then export the session as MATLAB code.</strong></span> You do the fiddly interactive part where interaction is cheap: connecting, browsing, subscribing, checking a value is what you think it is. Then you take the result out as a script you can scale, schedule, or hand to whoever comes next.
          </P>
        </Reveal>
      </div>

      <div className="prose" style={{ paddingTop: 56 }}>
        <Reveal>
          <H2 style={{ marginTop: 0 }}>Six kinds of engineer, <em>one first step</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            MathWorks sells the nuts and bolts. Engineers use our toolboxes to talk to hardware, get data out of it, and build something with it. The people who end up in the Industrial Communication Toolbox are doing six fairly different jobs, and <span className="hl">what they share is the first step: get the data out of the factory.</span>
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <UserArchetypes />
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40, marginBottom: 0 }}>
            All six of them were also on a clock none of us set. <span className="hl">The protocol they had relied on for two decades was being switched off under them,</span> and most of them could not write the code to move to its replacement.
          </P>
        </Reveal>

        <Detail
          title={<>Five minutes on OPC UA, if you need them</>}
          teaser="What the protocol is, why it was being switched off, and the handful of words that show up later in the findings."
        >
          <P>
            OPC UA is the language industrial machines use to talk to each other. The hardware companies settled on it as a common standard so that anyone could communicate with their machines without building a custom integration for every vendor. The Industrial Communication Toolbox is the part of MATLAB that does that talking, over OPC UA and the other protocols a factory might speak.
          </P>
          <P>
            When our software connects to a factory&rsquo;s OPC UA server, what it sees is an <strong>address space</strong>, the table of contents of everything that factory is broadcasting. Each entry is a <strong>node</strong>: one temperature reading, one valve position. To watch a node change over time, you create a <strong>subscription</strong>.
          </P>

          <GlossaryTiles />

          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: `1px solid ${LINE}`,
            marginTop: 28,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/artifact-digital-twin-flow.svg"
              alt="Flow diagram: ride sensors to OPC UA Server to MATLAB Digital Twin to Predictive Alert"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <P style={{ marginTop: 36 }}>
            The deadline came from OPC DA, the protocol our customers had relied on for two decades. It was being deprecated industry-wide. Sensor manufacturers were dropping support and our own product was scheduled to drop it too. Engineers everywhere from amusement-park ride safety to ship-building to energy-grid monitoring had to move across to OPC UA, and most of them did not have the programming background to write OPC UA scripts from scratch.
          </P>

          <LandscapeSVG />
        </Detail>
      </div>

      {/* ── BEAT 2 · WHAT I DID ───────────────────────────────────────────
          RoleTimeline used to open here with the same 15-month spine the
          phase-grid below tells in more detail, and the sections after that
          told it a third time stage by stage. The role claim is now one
          paragraph and the spine is told once. */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="02">What I did</EyebrowLabel>
          <H2>Four stages, <em>fifteen months</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginBottom: 0 }}>
            I led the research and acted as a strategic partner in planning, not just running studies but <span className="hl">shaping which problems were worth solving and which weren&rsquo;t.</span> I scoped discovery, ran the contextual interviews, facilitated the design workshop, designed and ran the usability study, and presented to both design review forums. When the team had to choose between competing feature requests, I was the one tying every recommendation back to evidence.
          </P>
        </Reveal>
      </div>

      {/* The four stages, told once. */}
      <div style={{ background: CARD, padding: '48px 24px 64px' }}>
        <div className="wide" style={{ padding: 0, maxWidth: 1080, margin: '0 auto' }}>
          <StaggerGroup className="phase-grid">
            {[
              {
                label: 'Stage 1 · Discovery',
                stats: 'Dec 2023 – Feb 2024\n4 external contextual interviews + our support engineers\n18 pain points · 14 requirements',
                body: 'A discovery sprint with engineers across four industries (automotive controls, amusement-park digital twins, PLC virtual commissioning, ship-building), plus contextual inquiry with our own Advanced Support Group, who field these problems from customers every day. I built the screener, the interview guide and the requirements document, and led synthesis with the developer and design lead.',
              },
              {
                label: 'Stage 2 · Design',
                stats: 'Mar – Aug 2024\n9-person Crazy 8\u2019s workshop\n2 review forums · 8+ senior reviewers',
                body: 'I ran a cross-functional sketching workshop off the back of the requirements, compiled the results into a preferred and an alternate design, and took both to two senior review forums. The forums did not agree with each other, which is what set up the study that followed.',
              },
              {
                label: 'Stage 3 · Validation',
                stats: 'Sep – Oct 2024\n5 external participants · 27 findings\n5 insight themes · 11 feature requests',
                body: 'A task-based study with 5 external participants from four industries. The scenario: help a systems engineer at an amusement-park operator read ride vibration sensors and inspect their values. Each session was a contextual inquiry. Twenty-seven findings came out, distilled into five high-priority themes, and an answer to the disagreement from Stage 2.',
              },
              {
                label: 'Stage 4 · Ship',
                stats: 'Mar 2025 – R2026a\n13 interface areas reviewed\nhandover, change readout, green flag',
                body: 'I presented the prototype and findings to the internal design review, tracked feedback across 13 interface areas, and worked with the developer on an honest response to each: what we agreed with and would change, what we disagreed with and why. Then handover to development, a readout of what changed and why, and a final review run as a usability session to get the go-ahead to ship.',
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
              Synthesis artifacts: affinity mapping, task flows, and competitor benchmarking across the 15-month process
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Stage 1, inside Beat 2. */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
        <Reveal>
          <div style={{ marginBottom: 32 }}>
            <EyebrowLabel>Stage 1 · Discovery</EyebrowLabel>
            <H2>What discovery <em>told us</em></H2>
            <P style={{ marginBottom: 0 }}>
              Before we tested anything, four external contextual interviews, plus time with our own Advanced Support Group, the engineers who field these problems from customers, told us <em>why</em> the existing workflow was failing, and which engineer to design for first. We benchmarked the third-party clients alongside it, so we knew what we would be judged against.
            </P>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flank-card" style={{ marginBottom: 40 }}>
            <p className="flank-eyebrow">The hard part</p>
            <h4 className="flank-h4">Earning the right to ask the next question</h4>
            <p className="flank-body">
              I was onboarding into this domain at the same time as I was researching it, and the people I was interviewing had been in it for twenty-five years. Some worked in defence and could share almost nothing. No context, no screenshots, no names, because their rules said so. Others were startup founders working with mid-scale factories, or ran multiple PSU plants, or built commercial mobile manufacturing lines, adventure-park rides, submarines.
            </p>
            <p className="flank-body" style={{ marginTop: 14 }}>
              Every one of them had a different problem on the surface. My job was to find the part underneath that was the same, stay honest about where my toolbox&rsquo;s responsibility ended, and <span className="hl">sound competent enough in the room that an engineer of twenty-five years would keep talking to me.</span> That last part was most of the work in the first few weeks.
            </p>
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
                <p className="flank-body">Locked the primary persona; established a hard design-review rule: every interaction discoverable without reading docs.</p>
              </div>
            </div>
          </Reveal>

          {/* Discovery 02 */}
          <Reveal delay={0.15}>
            <div className="flank-card">
              <p className="flank-eyebrow">Discovery 02</p>
              <h4 className="flank-h4">The strongest pull came from the digital-twin engineer, not the bench technician</h4>

              <AnchorQuadrant />

              <p className="discovery-caption">The anchor isn&rsquo;t the loudest. It&rsquo;s the one with the worst alternative.</p>

              <div className="flank-row" style={{ marginTop: 16 }}>
                <p className="flank-label impact-label">Impact →</p>
                <p className="flank-body">Amusement-park digital-twin scenario became the canonical demo flow: the connect &rarr; browse &rarr; subscribe &rarr; see-it-update path users meet first.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40, marginBottom: 0 }}>
            Stage 1 ended with functional and non-functional requirements, and a readout where we prioritised them together as a team: what ships in v1, what parks for v2, and what sits outside what we should be doing at all. That was the point we committed to building it.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* Stage 2, inside Beat 2. The forum disagreement lives here and is
          deliberately left as the unresolved thing that set up Stage 3. */}
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px' }}>
        <Reveal>
          <div style={{ marginBottom: 8 }}>
            <EyebrowLabel>Stage 2 · Design</EyebrowLabel>
            <H2>Getting the best design out <em>of nine people</em></H2>
            <P>
              With requirements agreed, the question changed from <em>should we build this</em> to <em>what should it look like</em>. I ran a Crazy 8&rsquo;s workshop rather than designing it myself. The domain knowledge in that room was spread across nine people and none of them was me.
            </P>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <CrazyEights />
        </Reveal>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40 }}>
            The thing I had to manage was who dominated. The developers who knew OPC UA deeply could have decided every screen by default, and the designers and the developers who didn&rsquo;t know the domain would have deferred to them, which would have given us a design that was technically correct and unusable by the people we&rsquo;d just interviewed.
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <PullQuote cite="How I think about facilitation">
            My job is not to make the best design. It is to get the best design out.
          </PullQuote>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            We combined the sketches into design cases, a preferred direction and an alternate, and took both to two forums. One was the App Design Review: senior UX VPs and principal designers. The other was the Hardware Design Review: the VP of MATLAB and the customer-facing engineers. Between them, more than eight senior reviewers.
          </P>
        </Reveal>
        <Reveal delay={0.05}>
          <P>
            <span className="hl">They did not agree with each other.</span>
          </P>
        </Reveal>

        <Reveal delay={0.05}>
          <ForumConflict />
        </Reveal>

        {/* TODO(yt): the only thing still unnamed here is WHICH placement each
            forum argued for: toolstrip, right panel or pop-up. We say at the
            end of Stage 3 that Hardware's preference is what users took to;
            saying what that preference actually was would finish the thread. */}

        <Reveal delay={0.05}>
          <P style={{ marginTop: 36, marginBottom: 0 }}>
            I could have picked a side and defended it. Both sides outranked me, both had a real argument, and whichever one I chose, I would have been choosing on taste. So I did the other thing available to me: <span className="hl">I turned the disagreement into something testable.</span>
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* Stage 3, inside Beat 2. */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '80px 24px 48px' }}>
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <EyebrowLabel>Stage 3 · Validation</EyebrowLabel>
            <H2>I made the argument <em>testable</em></H2>
            <P>
              I went back and watched every recording from both forums. Out of that I wrote more than fifty specific research questions, one for each thing a reviewer had actually doubted, including every version of &ldquo;where should this action live.&rdquo; Then I condensed them into hypotheses and four high-level research questions, so the study covered the whole disagreement rather than the parts I happened to find interesting.
            </P>
            <P style={{ marginBottom: 0 }}>
              <span className="hl">All the feedback was valid. That was the problem,</span> and the reason this had to be settled with users rather than in a room.
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
            Five participants, four industries, task-based sessions run as contextual inquiries. Twenty-seven findings came out; five themes carried the weight. Each one below follows the same shape: observation, insight, recommendation, what shipped. Open any of them for the detail.
          </P>
        </Reveal>

        {/* Theme 1 · Terminology debt */}
        <Detail
          eyebrow="Theme 1"
          title={<>Configure didn&rsquo;t mean configure. Logging didn&rsquo;t mean logging.</>}
          teaser="Four renames, and Export Log deleted outright rather than renamed."
          badge={<Pill><Check />Shipped</Pill>}
          open
        >
        <div className="insight-block">
          <div className="insight-stack">
            <div className="insight-stack-text">

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">
                Five separate findings circled the same problem: labels overloaded or contradicted terms engineers already used. <strong>Configure</strong> in the toolstrip read as &ldquo;set up the nodes,&rdquo; not &ldquo;configure the connection.&rdquo; <strong>Stop Monitoring</strong> read as &ldquo;disconnect from the server.&rdquo; <strong>Export Log</strong> got pulled into the gravitational field of &ldquo;logging the data,&rdquo; the engineer&rsquo;s phrase for recording sensor values, so people clicked it expecting their captured data to come out. And in the right pane, <strong>Variable Information</strong> (which held the Data Type field engineers cared about most) sat collapsed behind a disclosure that participants didn&rsquo;t open.
              </p>
              <div className="pull-quote">
                <blockquote>&ldquo;I am already connected to the server. Configure may have user password, security password. I think configure is more of configuring the user ID, password.&rdquo;</blockquote>
                <cite>UT4, on the Configure / Connect ambiguity</cite>
              </div>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">
                Terminology debt compounds silently. Each label was defensible in isolation; together they formed a vocabulary that didn&rsquo;t survive contact with a working engineer. The worst part of the failure mode: users didn&rsquo;t say &ldquo;I&rsquo;m confused.&rdquo; They confidently took the wrong action and assumed they&rsquo;d succeeded.
              </p>
            </div>

            <div className="insight-stack-figs">
                <Annotated
                  label="Before"
                  src="/images/opcua/opcua-figma-wireframe-1.png"
                  alt="The original OPC UA Explorer wireframe. Toolstrip reads Configure, Connect, Disconnect, Start Monitoring, Stop Monitoring, Record, Export Log. The right pane shows Node Information with Variable Information collapsed behind a disclosure arrow."
                  width={2560}
                  height={1370}
                  pins={[
                    { x: 14.5, y: 11.0, note: <><span className="mono">Configure</span> read as &ldquo;set up the nodes&rdquo; or &ldquo;the place for user ID and password.&rdquo; Nobody read it as connection settings.</> },
                    { x: 29.8, y: 10.3, note: <><span className="mono">Start Monitoring</span> and <span className="mono">Stop Monitoring</span> read as connect and disconnect from the session.</> },
                    { x: 66.3, y: 11.0, note: <><span className="mono">Export Log</span> pulled &ldquo;logging&rdquo; toward the engineer&rsquo;s meaning: recording sensor values. People clicked it expecting their captured data.</> },
                    { x: 81.9, y: 41.4, note: <><span className="mono">Variable Information</span> held the Data Type field engineers cared about most, collapsed behind a disclosure nobody opened.</> },
                  ]}
                  caption="Four problem surfaces, each defensible on its own, in one screen."
                />

                <Annotated
                  label="After"
                  src="/images/opcua/opcua-shot-toolstrip.png"
                  alt="The shipped OPC UA Explorer toolstrip. Session group with New, Open, Save. Connection group with Connection Settings and Disconnect. Node Monitor group with Add to Table and Remove from Table. Code Generation group with Generate Script. Close group with Close Session."
                  width={3488}
                  height={488}
                  pins={[
                    { x: 18.1, y: 40.5, note: <>Renamed to <strong>Connection Settings</strong>. The button now carries the meaning it always implied.</> },
                    { x: 35.4, y: 40.5, note: <>Renamed to <strong>Add to Table</strong>. The verb describes the effect on the visible UI, not the abstract subscription.</> },
                    { x: 46.4, y: 40.5, note: <>Renamed to <strong>Remove from Table</strong>, its exact opposite.</> },
                    { x: 59.1, y: 40.5, note: <><strong>Export Log is gone.</strong> What people actually wanted from it is <strong>Generate Script</strong>, in its own Code Generation group.</> },
                  ]}
                  caption="Same strip, shipped. The most consequential change is the button that is no longer there."
                />
            </div>
          </div>

          {/* Translation table: the heart of the theme */}
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
                    <td>&ldquo;Export my recorded data.&rdquo; &ldquo;Logging&rdquo; meant captured sensor values, not events</td>
                    <td><strong>Export Log removed entirely.</strong> The bottom-dock Log tab renamed to <strong>Activity Log</strong> so its scope is unambiguous.</td>
                  </tr>
                  <tr>
                    <td><span className="mono">Variable Information</span> <span style={{ color: INK3 }}>(collapsed)</span></td>
                    <td>&ldquo;Where&rsquo;s the data type?&rdquo; The field engineers cared about most lived behind a disclosure</td>
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
              <p className="insight-body">All four changes landed in the next build. The most consequential move wasn&rsquo;t a rename. It was deleting <strong>Export Log</strong> outright. Its presence was the entire reason &ldquo;logging&rdquo; collided with &ldquo;recording.&rdquo; A rename would have kept the trap; removing it closed it.</p>
            </div>
          </div>
        </div>
        </Detail>

        {/* Theme 2 · Panel order */}
        <Detail
          eyebrow="Theme 2"
          title={<>Engineers expected the action panel above the metadata, not below it</>}
          teaser="Panels swapped: action above metadata. Generate Script added."
          badge={<Pill><Check />Shipped</Pill>}
        >
        <div className="insight-block">
          <div className="insight-grid">
            <div>

              <SubLabel>Observation</SubLabel>
              <p className="insight-body">Every participant who tried to read a sensor value scrolled past the &ldquo;Node Function&rdquo; panel without seeing it. They were drawn to the larger &ldquo;Node Information&rdquo; panel, which only displays metadata, and then asked, &ldquo;Where do I read the value?&rdquo;</p>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">We had laid the panels out in the order the data structure suggested (&ldquo;here&rsquo;s what this node is, then here&rsquo;s what you can do with it&rdquo;) instead of the order the user&rsquo;s intent demanded.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <Annotated
                  src="/images/opcua/opcua-shot-panels.png"
                  alt="The shipped right-hand column. Node Function sits at the top with its Read tab, showing the selected node and its current value. Node Information sits below it with the node's metadata."
                  width={1256}
                  height={2600}
                  pins={[
                    { x: 18.9, y: 1.2, note: <><strong>Node Function</strong> now sits on top. What can I do here?</> },
                    { x: 21.3, y: 48.7, note: <><strong>Node Information</strong> moved below it. What is this?</> },
                  ]}
                  caption="Shipped order: action above metadata. The draft had these the other way round."
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
              <p className="insight-body">Panels swapped in the next build. We also added a <strong>Generate Script</strong> button, validated against the historical-data export pattern that surfaced six times across the study. A click produces a MATLAB Live Script that recreates the session as code.</p>
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
                <cite>Participant struggling with the tree-without-search</cite>
              </div>

              <SubLabel>Insight</SubLabel>
              <p className="insight-body">An address space without search is a library without a card catalog. The tree was correct; what was missing was a way <em>into</em> the tree. Participants who&rsquo;d used a competitor product, UA Expert, kept reaching for the search bar that didn&rsquo;t exist.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <Annotated
                  src="/images/opcua/opcua-shot-tree.png"
                  alt="The Address Space pane. A tree of factory nodes expanded several levels deep under PaintShop and AssemblyLine, with no search input above it."
                  width={1496}
                  height={2000}
                  pins={[
                    { x: 50, y: 4.2, note: <>Nothing here. Participants who had used UA Expert kept reaching for a search bar that did not exist.</> },
                    { x: 17, y: 86.2, note: <>Finding one node means hand-expanding branches. Real factory address spaces run to thousands.</> },
                  ]}
                  caption="Shipped as it stands: the tree is correct, and there is no way into it."
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
              <p className="insight-body">API-side search shipped in the same release. In-app search was deliberately de-scoped to a follow-up. We needed more data on which search behaviors mattered most (substring vs. fuzzy, recent vs. favorites).</p>
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
              <p className="insight-body">The mistake wasn&rsquo;t a typing error. It was a discoverability failure. The app gave no visual signal that a node was read-only <em>before</em> you tried to write to it. Engineers who <em>know</em> read/write permissions exist still don&rsquo;t carry that knowledge to every node they look at; they expect the interface to surface it.</p>
            </div>
            <div className="artifact-col">
              <div className="screenshot-card full-bleed">
                <Annotated
                  src="/images/opcua/opcua-shot-nf-readonly.png"
                  alt="Node Function panel with the read-only node StationOccupancy selected. The tab strip holds a single Read tab; there is no Write tab."
                  width={1256}
                  height={1200}
                  pins={[
                    { x: 30.1, y: 7.2, note: <><strong>No Write tab here.</strong> <span className="mono">StationOccupancy</span> is read-only, so the app never offers a write the server is going to reject. On a writable node the tab appears in this space.</> },
                  ]}
                  caption="Shipped: the panel answers the permission question before you act on it, instead of after."
                />

                <Annotated
                  label="What they saw before"
                  src="/images/opcua/opcua-shot-write-error.png"
                  alt="A MATLAB error dialog reading: Converting value abc to numeric is not supported."
                  width={1676}
                  height={760}
                  caption="Two of five participants read an error like this as their own typing mistake and tried again."
                />
              </div>
            </div>
          </div>
          <div className="recap-grid">
            <div>
              <div className="recap-headline">
                <SubLabel>Recommendation</SubLabel>
              </div>
              <p className="insight-body">Visually grey out cells in the monitoring table for read-only nodes. Don&rsquo;t change the underlying behavior, just close the loop on the affordance.</p>
            </div>
            <div>
              <div className="recap-headline">
                <SubLabel>What shipped</SubLabel>
                <Pill><Check />Shipped</Pill>
              </div>
              <p className="insight-body">The Node Function panel now exposes a <strong>Write</strong> tab only when the selected node permits writing. Read-only nodes show only a <strong>Read</strong> tab, so the user never starts a write the server will reject.</p>
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
                <Annotated
                  src="/images/opcua/opcua-shot-monitor.png"
                  alt="The Node Monitoring Table with Node, Value, Quality and Timestamp columns, five subscribed nodes updating live."
                  width={2948}
                  height={1032}
                  pins={[
                    { x: 36.4, y: 10.6, note: <>The <strong>Value</strong>, which was never the problem.</> },
                    { x: 66.3, y: 10.6, note: <><strong>Quality</strong> inline. Is this reading trustworthy right now?</> },
                    { x: 90.1, y: 10.6, note: <><strong>Timestamp</strong> inline. How fresh is this number?</> },
                  ]}
                  caption="Units were deliberately left out and kept in Node Information, so the numeric pipeline into Generate Script stays clean."
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
              <p className="insight-body"><strong>Quality</strong> and <strong>timestamp</strong> shipped as inline columns. <strong>Units</strong> were deliberately kept <em>out</em> of the table; they sit in the Node Information panel as secondary data. Mixing unit strings into the table would force every Generate-Script consumer to strip them before computation. The secondary-data placement preserves both context and the numeric pipeline.</p>
            </div>
          </div>
        </div>
        </Detail>

        <Reveal delay={0.05}>
          <div className="flank-card" style={{ marginTop: 48 }}>
            <p className="flank-eyebrow">Back to the disagreement</p>
            <h4 className="flank-h4">The study answered the question the forums couldn&rsquo;t</h4>
            <p className="flank-body">
              Nobody in either forum was wrong about their own reasoning. They were reasoning about different users. The study replaced the argument with evidence. Participants read toolstrip labels as descriptions of what would happen to the thing in front of them, which is why <span className="mono">Start Monitoring</span> became <strong>Add to Table</strong>. They looked for the action beside the node they had selected, not above it, which is why the panels were swapped. And the workflows nobody could place cleanly stayed out of v1 rather than being forced into a pop-up to end the debate.
            </p>
            <p className="flank-body" style={{ marginTop: 14 }}>
              On the placement question itself, the direction the Hardware Design Review had preferred was the one participants took to. That forum was the VP of MATLAB and the customer-facing engineers, the people who sit closest to customers all day. They turned out to be right about customers. But they were right in a room where they could not prove it, next to a forum of senior UX VPs and principal designers who were arguing just as reasonably from the platform side. <span className="hl">Seniority could not separate those two positions. Five participants and a task list could.</span>
            </p>
            <p className="flank-body" style={{ marginTop: 14 }}>
              That is the part I would defend hardest. The disagreement was real and expensive, and the way out of it was not picking whoever outranked me.
            </p>
          </div>
        </Reveal>
      </div>

      <Divider />

      {/* Stage 4, folded into Beat 2 rather than given its own section.
          IDR 02 (deferring in-app search) and IDR 03 (the panel order) are
          Themes 3 and 2 from the study told a second time, so they are gone
          and the themes carry them. Only IDR 01 survives: the one position
          that came from me rather than from a finding. The three "scrawl
          notes" restated these card headlines verbatim, so they went too. */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '72px 24px' }}>
        <Reveal>
          <div style={{ marginBottom: 32 }}>
            <H2 style={{ marginTop: 0 }}>Where I had to <em>take a position</em></H2>
            <P>
              The design review wasn&rsquo;t a checkpoint. It was the round where I had to decide what to ship now, what to defer and what to push back on, in front of senior reviewers across engineering and design, across thirteen interface areas.
            </P>
            <P style={{ marginBottom: 0 }}>
              Most of those positions were the study speaking. The renames, the panel swap and the deferral of in-app search are all findings from above, argued back into the room with the evidence attached. <span className="hl">One of them was mine before it was anybody&rsquo;s.</span>
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
              <p className="flank-body">The product team&rsquo;s instinct was to defer export functionality. &ldquo;They can copy it manually, or use the API for that.&rdquo; From the usability study, I&rsquo;d already seen three of five participants reach for some equivalent of &ldquo;save this to a file&rdquo; or &ldquo;get this into a script&rdquo; within the first five minutes.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">My Stance</p>
              <p className="flank-body">I argued, with the usability evidence behind it, that export was the moment the app stopped being a viewer and started being a tool. Without it, every digital-twin use case would have the engineer dropping back to the API the moment they had data they wanted to keep. I framed it as a v1 must-have, not a stretch goal.</p>
            </div>
            <div className="flank-row">
              <p className="flank-label">Outcome</p>
              <p className="flank-body">Shipped in R2026a. The Generate-Script button sits in the toolbar under CODE GENERATION; a click produces a MATLAB Live Script with the session reconstructed as code.</p>
            </div>
            <div style={{ marginTop: 18 }}>
              <Annotated
                label="The artifact"
                src="/images/opcua/opcua-shot-genscript.png"
                alt="The MATLAB script generated by the Generate Script button, with sections for creating the OPC UA client, connecting it, and subscribing to the selected nodes."
                width={2912}
                height={2092}
                caption="One click, and the session comes out as runnable MATLAB. This is the moment the app stops being a viewer."
              />
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── BEAT 3 · WHAT SHIPPED, AND WHAT DIDN'T ────────────────────────
          The impact half of this beat moved up into the hook, where it does
          the work of getting someone to keep reading. What is left is the
          scope story: what we shipped, what we deferred, and why. */}
      <div className="prose">
        <Reveal>
          {/* Not "What shipped" — Beat 0's eyebrow already uses that for the
              product reveal. This beat is the scope story. */}
          <EyebrowLabel num="03">Scope</EyebrowLabel>
          <H2>What shipped, <em>and what didn&rsquo;t</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <P>
            The OPC UA Explorer shipped in <strong>MATLAB R2026a</strong>, about fifteen months after the first contextual interview, and you can read its public documentation at{' '}
            <a href="https://www.mathworks.com/help/icomm/ug/opcuaexplorer-app.html"
               target="_blank" rel="noopener noreferrer" className="docs-link">
              mathworks.com/help/icomm/ug/opcuaexplorer-app.html
            </a>. The research also generated an <strong>11-item feature-request pipeline</strong> that has shaped the next two releases. As a strategic partner in project planning, I helped the team decide what <em>not</em> to ship in v1 just as much as what to ship.
          </P>
        </Reveal>

        <DecisionBar />

        <Detail
          title={<>The eleven deferrals, one by one</>}
          teaser="What was asked for, what we decided, and the reason attached to each."
        >
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
                ['Right-click contextual menus on monitoring table rows', 'Deferred, enhancement request to underlying UI table component', 'Required platform-level change; not blocked on UX'],
                ['Cross-correlation plots between two nodes', 'Deferred to a later release', 'Strong signal but small sample of users requesting it'],
                ['Custom alarms on monitoring values', 'Deferred, covered by Simulink workflow today', 'Use case existed but had a viable workaround'],
                ['Save/load app session layout', 'Deferred, enhancement request to platform', 'Required Hardware Manager–level change'],
                ['Six other smaller asks', 'Deferred or absorbed into existing features', 'Mix of low frequency, high cost, or already in the roadmap'],
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
          <span className="hl">Saying no with reasons is part of the job.</span> Every deferral above traces back to a specific finding from the usability study or design review, not to engineering fatigue.
        </p>

        </Detail>

        <Reveal delay={0.05}>
          <P style={{ marginTop: 40, marginBottom: 0 }}>
            Then it went to development to be built for real. I presented what had changed since the last time each group had seen it and why, and we ran the final design review as a usability session rather than a slideshow. We put the working product in front of the people signing it off and let them try it. That was the green flag.
          </P>
        </Reveal>
      </div>

      <Divider />

      {/* ── BEAT 4 · WHAT I'D DO DIFFERENTLY ──────────────────────────────
          "What we traded away" moved here from the Outcome section. The fixed
          six-panel layout and the missing drag-and-drop are constraints that
          shaped the work, which is reflection material, not a result. */}
      <div className="prose">
        <Reveal>
          <EyebrowLabel num="04">What I&rsquo;d do differently</EyebrowLabel>
          <H2>The constraints, <em>and the two things I&rsquo;d change</em></H2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flank-card" style={{ marginTop: 8, marginBottom: 48 }}>
            <p className="flank-eyebrow">What we traded away</p>
            <h4 className="flank-h4">Four decisions that cost us something</h4>
            <ul className="impact-list" style={{ marginTop: 16 }}>
              <li>
                We dropped workflows at the requirements stage, before anyone had designed them. Cheaper to cut an idea than a screen.
              </li>
              <li>
                Configuration, read and write went into v1. Methods waited. That call came from code telemetry alongside the interview data. We could see what people actually reached for in the API, and it matched what they had told us.
              </li>
              <li>
                The six-panel layout was fixed. It wasn&rsquo;t ours to change, so the design had to be good inside it.
              </li>
              <li>
                Drag-and-drop and contextual menus weren&rsquo;t supported by the underlying infrastructure, so we designed around them. That limitation became the <strong>contextual menu project</strong>, picked up as a company-wide Tier&nbsp;1 effort by the core MATLAB workflows team, and currently in continuous research and prototyping. <span className="hl">A constraint we had to design around on one app turned into a platform problem worth solving for everybody.</span>
              </li>
            </ul>
          </div>
        </Reveal>


        <Reveal>
          <H2>What I&rsquo;d do <em>differently</em></H2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <Reveal delay={0.05}>
          <div className="lesson-row">
          <div
            className="lesson-icon-box"
            role="img"
            aria-label="Earlier strategic planning (clock) leads to the next product (database), the OPC UA Server, applied next."
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
              I&rsquo;d start the strategic-planning conversation earlier. The research drove the right product, but I waited until I had data to bring strong opinions to the form-factor and scoping discussions. If I&rsquo;d had this lens from week one, I&rsquo;d have run a structured form-factor workshop <em>before</em> the usability study, committing the team to &ldquo;this will be an app, not a Simulink block, because here&rsquo;s the reasoning&rdquo; before we sunk months into a particular UI direction. That is exactly what we did on our next product, the OPC UA Server. The discipline came directly from this case.
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
              I&rsquo;d run a smaller, faster usability round earlier, with 2 or 3 participants, to validate the prototype skeleton before the full 5-participant study. Several of the 27 findings were structural enough that an early micro-study would have caught them at a fraction of the cost. Five-participant studies are the right tool for &ldquo;is this ready to ship?&rdquo; They are a heavy hammer for &ldquo;is this on the right track?&rdquo;
            </P>
          </div>
        </div>
        </Reveal>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
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
