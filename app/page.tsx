import Image from "next/image";
import FloatingImage from './components/FloatingImage';
import InteractiveName from './components/InteractiveName';
import OverlappingTitle from "./components/OverlappingTitle";
import RotatingTagline from "./components/Rotatingtagline";
import CaseStudyJournals, { JournalProject } from "./components/CaseStudyJournal";

const projects: JournalProject[] = [
  {
    slug:           "matlab-copilot",
    title:          "An AI copilot that brings generative intelligence into the MATLAB workflow.",
    readTime:       "15 min read",
    type:           "Gen-AI · Enterprise · MathWorks",
    problem:        "How do engineers discover and trust AI assistance without breaking their flow?",
    highlight:      "↑ 34% task completion across 3 user segments",
    highlightLabel: "Key Result",
    coverColor:     "#C8BAF0",
    spineColor:     "#4030C3",
    coverImage:     "/images/matlab-cover.png",
    insetImages:    ["/images/matlab-screen-1.png", "/images/matlab-screen-2.png"],
    nda:            true,
  },
  {
    slug:           "opc-ua-explorer",
    title:          "An application to connect, test and troubleshoot Machine-To-Machine Protocol servers.",
    readTime:       "12 min read",
    type:           "Industrial IoT · B2B · MathWorks",
    problem:        "How do domain experts navigate complex industrial hierarchies without protocol knowledge?",
    highlight:      "↓ 52% time-on-task, first-time navigation",
    highlightLabel: "Key Result",
    coverColor:     "#B8DFD0",
    spineColor:     "#1E6B4A",
    coverImage:     "/images/opc-cover.png",
    insetImages:    ["/images/opcua-app1.png", "/images/opcua-app1.png"],
    nda:            true,
  },
  {
    slug:           "kawach",
    title:          "A safety tool for women to signal distress discreetly in public transit.",
    readTime:       "8 min read",
    type:           "Safety · Participatory Design · ACM DIS 2024",
    problem:        "How do you design for safety without drawing unwanted attention?",
    highlight:      "ACM DIS 2024 · Best Paper Honorable Mention",
    highlightLabel: "Publication",
    coverColor:     "#F2B8C0",
    spineColor:     "#AB4967",
    coverImage:     "/images/kawach-cover.png",
    insetImages:    ["/images/kawach-screen-1.png", "/images/kawach-screen-2.png"],
    nda:            false,
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
        {/*
          DESKTOP: fixed h-[600px] with absolute children — your original layout
          MOBILE:  auto height, flex column layout matching Image 2
          The key trick: on mobile we switch off `h-[600px]` and let content flow,
          on desktop we restore it and all the absolute positions work as before.
        */}
        <div className="
          relative w-full max-w-5xl bg-[#E6E6FA] custom-black double-border
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
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
              animation: scrollBob 2s ease-in-out infinite;
              opacity: 0.9;
              transition: opacity 0.2s ease;
            }
            .scroll-hint:hover { opacity: 1; }
            .scroll-dot-anim { animation: scrollDot 2s ease-in-out infinite; }
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

      {/* ── SECTION 2: CASE STUDIES ──────────────────────────────────────── */}
      <section
        id="work"
        className="relative w-full min-h-screen"
        style={{ background: "#F0EEF8" }}
      >
        <div style={{ height: 3, background: "#4030C3" }} />

        <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-20">

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
            <h2 style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1rem, 1vw, 4.5rem)",
              lineHeight: 1.0,
              color: "#27174E",
              margin: 0,
            }}>
              CASE STUDIES
            </h2>
            <p style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 15,
              lineHeight: 1.65,
              color: "#171717",
              opacity: 0.75,
              marginTop: 16,
              marginBottom: 0,
            }}>
              Enterprise products, industrial tooling, and published research — each shaped by rigorous mixed-methods UX. Two are NDA-protected.
            </p>
          </div>

          <CaseStudyJournals projects={projects} />

        </div>
      </section>

    </main>
  );
}