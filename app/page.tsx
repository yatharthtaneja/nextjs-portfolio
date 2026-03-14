import Image from "next/image";
import ProductCard from "./components/ProductCard";
import FloatingImage from './components/FloatingImage';
import InteractiveName from './components/InteractiveName';
import OverlappingTitle from "./components/OverlappingTitle";
import RotatingTagline from "./components/Rotatingtagline";
// ✅ ADD: import the new journal component + type
import CaseStudyJournals, { JournalProject } from "./components/CaseStudyJournal";

// ✅ ADD: define your projects once here, at the top
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
    coverImage:     "/images/opcua-app1.png",
    insetImages:    ["/images/opcua-app1.png", "/images/matlab-screen-2.png"],
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
    insetImages:    ["/images/opc-screen-1.png"],
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
    // ✅ CHANGE: was `<main className="relative flex min-h-screen ...">` (single section)
    // Now a plain wrapper — each <section> controls its own bg + height
    <main className="w-full">

      {/* ── SECTION 1: HERO — your existing markup, unchanged ───────────── */}
      {/* ✅ CHANGE: wrapped in <section id="hero">, moved layout classes here */}
      <section
        id="hero"
        className="relative flex min-h-screen w-full items-center justify-center purplebackground p-8"
      >
        {/* ✅ NO CHANGE: everything inside this div is identical to your original */}
        <div className="relative w-full max-w-5xl h-[600px] bg-[#E6E6FA] custom-black double-border">

          {/* --- The Name --- */}
          <div className="absolute top-2/12 right-4 z-10">
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
            positionClass="left-11/12 top-[16%]"
            rotationClass="rotate-[8deg]"
          />
          <OverlappingTitle
            text="Gen-AI"
            sizeClass="text-3xl"
            positionClass="right-2/12 top-[18%]"
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
            className="top-4 left-45 w-35"
            animationDelay={0.6}
            initialRotation={-3}
          />

          <RotatingTagline />
        </div>

        {/* Scroll hint — visible on purple, white, and red backgrounds */}
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
            <svg width="32" height="50" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer glow ring — makes it pop on any bg */}
              <rect x="2" y="2" width="28" height="36" rx="14"
                fill="rgba(255,255,255,0.25)"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1"
              />
              {/* Dark inner body — contrast layer */}
              <rect x="4" y="4" width="24" height="32" rx="12"
                fill="rgba(20,10,50,0.55)"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.5"
              />
              {/* Animated scroll dot */}
              <rect
                className="scroll-dot-anim"
                x="14.5" y="10" width="3" height="7" rx="1.5"
                fill="white"
              />
              {/* Chevron below mouse */}
              <path
                d="M9 44l7 6 7-6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
            </svg>
          </div>
        </a>
      </section>

      {/* ── SECTION 2: CASE STUDIES ─────────────────────────────────────── */}
      {/* ✅ ADD: everything below is new */}
      <section
        id="work"
        className="relative w-full min-h-screen"
        style={{ background: "#F0EEF8" }}
      >
        {/* Thin top rule — visually connects to the purple world above */}
        <div style={{ height: 3, background: "#4030C3" }} />

        <div className="max-w-5xl mx-auto px-8 py-20">

          {/* Section heading */}
          <div className="mb-16">
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
            {/* ✅ CHANGE: Roboto Bold instead of Bowlby One for consistency */}
            <h2 style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
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
              color: "#161616",
              opacity: 1,
              marginTop: 16,
              marginBottom: 0,
            }}>
              Enterprise products, industrial tooling, and published research — each shaped by rigorous mixed-methods UX. Two are NDA-protected.
            </p>
          </div>

          {/* Journals grid */}
          <CaseStudyJournals projects={projects} />

        </div>
      </section>

    </main>
  );
}