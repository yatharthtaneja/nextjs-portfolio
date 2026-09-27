import Image from "next/image";
import FloatingImage from './components/FloatingImage';
import InteractiveName from './components/InteractiveName';
import OverlappingTitle from "./components/OverlappingTitle";
import RotatingTagline from "./components/Rotatingtagline";
import CaseStudyJournals, { JournalProject } from "./components/CaseStudyJournal";
import CaseStudyIndexCards from "./components/CaseStudyIndexCards";
import FeaturedCaseStudy from "./components/FeaturedCaseStudy";
import BehancePostcard from "./components/BehancePostcard";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";

const projects: JournalProject[] = [
  {
    slug:           "opc-ua-explorer",
    title:          "A factory has 10,000 sensors. Engineers had no way to explore them without writing code.",
    type:           "Industrial IoT · B2B · MathWorks",
    problem:        "When engineers have never asked for an app, how do you decide what it should actually do?",
    highlight:      "Five tools → one · engineers rarely leave MATLAB",
    highlightLabel: "Outcome",
    coverColor:     "#B8DFD0",
    spineColor:     "#1E6B4A",
    coverImage:     "",
    insetImages:    ["/images/stickers/opc-ua-explorer-sticker.svg"],
    statusTag:      "✓ Shipped · MATLAB R2026a",
  },
  {
    slug:           "ni-daqmx",
    title:          "We replaced 50 lines of C language with three lines of MATLAB. Then we tested every word.",
    type:           "API Design · Comparative Study · MathWorks",
    problem:        "Which API style do hardware engineers prefer — and why does it matter for a decade?",
    highlight:      "The API MATLAB will live with for a decade",
    highlightLabel: "Decision",
    coverColor:     "#C4D9F7",
    spineColor:     "#1D4ED8",
    coverImage:     "",
    insetImages:    ["/images/stickers/ni-daqmx-sticker.svg"],
    statusTag:      "✓ Shipped · MATLAB R2026a",
  },
  {
    slug:           "mqtt-survey",
    title:          "A research study that turned 57 survey responses into 4 product roadmap candidates.",
    type:           "Survey Research · Strategy · MathWorks",
    problem:        "What do MQTT engineers actually struggle with, and what should we build next?",
    highlight:      "Four things worth building, ranked by 57 engineers",
    highlightLabel: "What it decided",
    coverColor:     "#FDE8C8",
    spineColor:     "#B45309",
    coverImage:     "",
    insetImages:    ["/images/stickers/mqtt-survey-sticker.svg"],
    statusTag:      "✓ Research Complete",
  },
  {
    slug:           "opc-ua-server",
    title:          "A discovery-to-workshop process that decided which form factor to build for OPC UA Server.",
    type:           "Strategic Planning · Workshop · MathWorks",
    problem:        "With three viable form factors and weeks of team debate, how do we decide what to build?",
    highlight:      "Chose a Simulink block before anyone built one",
    highlightLabel: "Decision",
    coverColor:     "#B2EDE8",
    spineColor:     "#0D6E6B",
    coverImage:     "",
    insetImages:    ["/images/stickers/opc-ua-server-sticker.svg"],
    statusTag:      "In Development",
  },
];

const earlierWork = [
  {
    title: "LAGOM",
    label: "College Project · 2021",
    year: "2021",
    behanceUrl: "https://www.behance.net/gallery/119361791/LAGOM-App-Design-UI-Design-UX-Research",
    imageSrc: "/images/behance/lagom-cover.jpg",
  },
  {
    title: "CheckMate",
    label: "College Project · 2022",
    year: "2022",
    behanceUrl: "https://www.behance.net/gallery/136224389/CheckMate-A-Bucket-List-App-UXUI-CASE-STUDY",
    imageSrc: "/images/behance/checkmate-cover.jpg",
  },
];

export default function Home() {
  return (
    <main className="w-full">

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-screen w-full items-center justify-center purplebackground p-4 md:p-8"
      >
        {/* The visible name is decorative: it is split across two DOM trees
            (mobile/desktop) and rendered as spans so InteractiveName can swap
            fonts per letter. This carries the actual document heading, so the
            page has exactly one h1 without duplicating heading semantics. */}
        <h1 className="sr-only">Yatharth Taneja — UX Researcher</h1>
        {/*
          DESKTOP: fixed h-[600px] with absolute children — your original layout
          MOBILE:  auto height, flex column layout matching Image 2
          The key trick: on mobile we switch off `h-[600px]` and let content flow,
          on desktop we restore it and all the absolute positions work as before.
        */}
        {/* Ambient glow orbs — blurred radial gradients behind the card */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div style={{
            position: 'absolute', top: '-10%', left: '-8%',
            width: '58%', height: '80%',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.45) 0%, transparent 62%)',
            filter: 'blur(80px)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-5%', right: '-5%',
            width: '52%', height: '70%',
            background: 'radial-gradient(ellipse, rgba(171,73,103,0.38) 0%, transparent 62%)',
            filter: 'blur(72px)',
          }} />
          <div style={{
            position: 'absolute', top: '35%', right: '18%',
            width: '38%', height: '55%',
            background: 'radial-gradient(ellipse, rgba(65,45,200,0.22) 0%, transparent 65%)',
            filter: 'blur(90px)',
          }} />
        </div>

        <div className="
          relative z-10 w-full max-w-5xl bg-[#E6E6FA] custom-black double-border
          h-auto md:h-[600px]
          flex flex-col md:block
          p-5 md:p-0
        ">

          {/* ── MOBILE LAYOUT ─────────────────────────────────────────────
              Visible only on mobile (md:hidden).
              Matches Image 2: name top-left, photo top-right, tags below name,
              tagline in middle, stamps at bottom.
          ─────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-4 md:hidden">

            {/* Row 1: Name left, photo right */}
            <div className="flex items-start justify-between">
              {/* Name */}
              <div className="flex flex-col leading-none font-family-default font-bold">
                <span style={{
                  fontSize: "clamp(3rem, 15vw, 5rem)",
                  lineHeight: 1,
                  color: "#0C1713",
                }}>YATH</span>
                {/* ART + H on same line, H in dark */}
                <div className="flex font-family-default font-bold" style={{ marginTop: -8 }}>
                  <span style={{                    
                    fontSize: "clamp(3rem, 15vw, 5rem)",
                    lineHeight: 1,
                    color: "#493972",
                    WebkitTextStroke: "2px #E6E6FA",
                  }}>ART</span>
                  <span style={{
                    
                    fontSize: "clamp(3rem, 15vw, 5rem)",
                    lineHeight: 1,
                    color: "#0C1713",
                  }}>H</span>
                </div>
              </div>

              {/* Photo stamp — top right */}
              <div style={{ width: "38%", maxWidth: 160 }} className="flex-shrink-0">
                <Image
                  src="/images/stamp-me.png"
                  alt="Yatharth"
                  width={160}
                  height={180}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Tags: UX Researcher, Gen-AI, CS + Design */}
            <div className="flex flex-col font-family-hover-three" style={{
              gap: "0.5px",
              fontSize: "clamp(1rem, 4.5vw, 1.25rem)",
              color: "#AB4967",
              marginTop: "-16px",
            }}>
              <span>UX Researcher</span>
              <span>Gen-AI</span>
              <span>CS + Design</span>
            </div>

            {/* Tagline — mobile prop removes absolute positioning */}
            <div className="mt-2">
              <RotatingTagline mobile={true} />
            </div>

            {/* Bottom stamps row */}
            <div className="flex items-end gap-2 mt-4">
              <Image
                src="/images/stamp-starry-night.svg"
                alt="Starry Night"
                width={100}
                height={100}
                style={{ width: "28%", height: "auto" }}
              />
              <Image
                src="/images/stamp-delhi.svg"
                alt="India Gate"
                width={100}
                height={100}
                style={{ width: "28%", height: "auto", marginLeft: -12 }}
              />
            </div>
          </div>

          {/* ── DESKTOP LAYOUT ────────────────────────────────────────────
              Hidden on mobile (hidden md:block).
              Your original absolute-positioned layout, untouched.
          ─────────────────────────────────────────────────────────────── */}
          <div className="hidden md:block w-full h-full">

            {/* Name — top right */}
            <div className="absolute top-2/12 right-1/12 z-10">
              <div className="text-8xl leading-19">
                <InteractiveName name="YATH" />
                <InteractiveName name="ARTH"
                  colorIndexes={{
                    0: "purpletext",
                    1: "purpletext",
                    2: "purpletext",
                  }}
                />
              </div>
              <div className="text-center text-4xl tracking-wider maroontext font-family-hover-three">
                UX Researcher
              </div>
            </div>

            <OverlappingTitle
              text="CS + Design"
              sizeClass="text-3xl"
              positionClass="left-10/12 top-[16%]"
              rotationClass="rotate-[8deg]"
            />
            <OverlappingTitle
              text="Gen-AI"
              sizeClass="text-3xl"
              positionClass="right-3/12 top-[18%]"
              rotationClass="rotate-[-8deg]"
            />

            <FloatingImage
              imageUrl="/images/stamp-me.png"
              alt="My face"
              className="bottom-6 right-5 w-55"
              animationDelay={0.1}
              initialRotation={-5}
            />
            <FloatingImage
              imageUrl="/images/stamp-starry-night.svg"
              alt="Starry Night"
              className="top-3 left-11 w-36"
              animationDelay={0.2}
              initialRotation={0}
            />
            <FloatingImage
              imageUrl="/images/stamp-delhi.svg"
              alt="India Gate"
              className="top-1/12 left-45 w-35"
              animationDelay={0.6}
              initialRotation={-15}
            />

            <RotatingTagline />
          </div>

        </div>

        {/* Scroll hint */}
        <a
          href="#work"
          aria-label="Scroll to case studies"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
          style={{ textDecoration: "none" }}
        >
          <style>{`
            @keyframes scrollBob {
              0%, 100% { transform: translateY(0); }
              50%       { transform: translateY(5px); }
            }
            @keyframes scrollDot {
              0%   { transform: translateY(0);   opacity: 1; }
              75%  { transform: translateY(7px); opacity: 0; }
              100% { transform: translateY(0);   opacity: 0; }
            }
            .scroll-hint {
              animation: scrollBob 2.4s ease-in-out infinite;
              opacity: 0.9;
              transition: opacity 200ms ease-out;
            }
            @media (hover: hover) and (pointer: fine) {
              .scroll-hint:hover { opacity: 1; }
            }
            .scroll-dot-anim { animation: scrollDot 2.4s ease-in-out infinite; }
          `}</style>
          <div className="scroll-hint">
            <svg width="32" height="50" viewBox="0 0 32 50" fill="none">
              <rect x="2" y="2" width="28" height="36" rx="14"
                fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
              <rect x="4" y="4" width="24" height="32" rx="12"
                fill="rgba(20,10,50,0.55)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
              <rect className="scroll-dot-anim" x="14.5" y="10" width="3" height="7" rx="1.5" fill="white" />
              <path d="M9 44l7 6 7-6" stroke="white" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
            </svg>
          </div>
        </a>
      </section>

      {/* ── SECTION 2: ABOUT ME ──────────────────────────────────────────── */}
      {/* Context on who I am before the work — the purple rule that used to
          open #work now opens this section instead. */}
      <IntroSection />

      {/* ── SECTION 3: CASE STUDIES ──────────────────────────────────────── */}
      <section
        id="work"
        className="relative w-full min-h-screen"
        style={{ background: "linear-gradient(180deg, #ffffff 0%, #F8F6FC 50%, #F0EEF8 100%)" }}
      >
        {/* Corner glow */}
        <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true" style={{
          width: '42%', height: '340px',
          background: 'radial-gradient(ellipse at top right, rgba(73,57,114,0.12) 0%, transparent 68%)',
          filter: 'blur(50px)',
        }} />

        {/* Heading — stays constrained */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="mb-10 md:mb-16">
          <p style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: "#AB4967",
            marginBottom: 8,
          }}>
            Selected Work
          </p>
          <p style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",        // ← whatever size you want, completely fixed
              lineHeight: 1.0,
              color: "#27174E",
              margin: 0,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
            }}>
              Case Studies
            </p>
          <p style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 15,
            lineHeight: 1.65,
            color: "#171717",
            opacity: 0.75,
            marginTop: 16,
            marginBottom: 0,
          }}>
            Four studies from my work at MathWorks. Each one starts with a decision that needed making, and ends with what shipped.
          </p>
        </div>
      </div>

{/* Full width, no max-w clipping. Journals on desktop, index-card stack on
    mobile — the swap is CSS-only at 768px (JournalStyles / IndexCardStyles). */}
<div style={{ width: "100%", overflow: "visible" }}>
  {/* The lead study gets its own band; the rest stay in the grid. Mobile index
      cards still carry all four — that layout is already a ranked list. */}
  <FeaturedCaseStudy
    project={projects[0]}
    outcome="Five tools became one."
    body="Engineers can now explore a factory floor and leave with working MATLAB code, without opening a code editor."
    docsUrl="https://www.mathworks.com/help/icomm/ug/opcuaexplorer-app.html"
    shot={{
      src: "/images/opcua/opcua-app-plot.png",
      alt: "OPC UA Explorer in MATLAB: address space tree on the left, a monitoring table of live sensor values in the middle, and a plot of three subscribed sensors along the bottom.",
      width: 3360,
      height: 2020,
    }}
  />
  <CaseStudyJournals projects={projects.slice(1)} />
  <CaseStudyIndexCards projects={projects} />
</div>

{/* Earlier Work — college Behance projects, kept visually distinct from the shipped case studies above */}
<div className="max-w-5xl mx-auto px-6 md:px-8" style={{ paddingBottom: 100 }}>
  <div style={{ marginBottom: 32, textAlign: "center" }}>
    <p style={{
      fontFamily: "'Roboto', sans-serif",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
      color: "#AB4967",
      marginBottom: 8,
    }}>
      From the Archives
    </p>
    <p style={{
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
      fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
      lineHeight: 1.0,
      color: "#27174E",
      margin: 0,
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
    }}>
      Earlier Work
    </p>
    <p style={{
      fontFamily: "'Roboto', sans-serif",
      fontSize: 15,
      lineHeight: 1.65,
      color: "#171717",
      opacity: 0.75,
      marginTop: 16,
      marginBottom: 0,
      maxWidth: 560,
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      Two UI/UX projects from college, before MathWorks — kept here for context on where this all started. Full case studies live on Behance.
    </p>
  </div>
  <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
    {earlierWork.map((project, i) => (
      <BehancePostcard key={project.title} {...project} tilt={i % 2 === 0 ? -3 : 3} />
    ))}
  </div>
</div>
      </section>

      {/* ── SECTION 4: HOW I CAN HELP & CONNECT ──────────────────────────── */}
      <AboutSection />

    </main>
  );
}