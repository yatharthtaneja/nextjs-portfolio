"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export interface JournalProject {
  slug: string;
  title: string;
  readTime: string;
  type: string;
  problem: string;
  highlight: string;
  highlightLabel: string;
  coverColor: string;
  spineColor: string;
  coverImage: string;
  insetImages?: string[];
  nda: boolean;
}

function Journal({ project, index }: { project: JournalProject; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [scrollOpen, setScrollOpen] = useState(false);
  const wrapperRef = useRef<HTMLAnchorElement>(null);

  // Scroll-triggered open — MOBILE ONLY (no pointer/hover device)
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    // Only activate on touch/mobile — skip on desktop (pointer: fine = mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        // Open when mostly in view, close as soon as less than half is visible.
        // Simple hysteresis prevents rapid toggling at the boundary.
        if (ratio >= 0.6) {
          setScrollOpen(true);
        } else if (ratio < 0.5) {
          setScrollOpen(false);
        }
      },
      {
        // Dense thresholds so the callback fires frequently while scrolling
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // Fire slightly before element fully exits to animate the reset in time
        rootMargin: '0px 0px -5% 0px',
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // On touch devices use scroll state, on pointer devices use hover state
  const isOpen = hovered || scrollOpen;

  return (
    <Link
      ref={wrapperRef}
      href={project.nda ? "#" : `/work/${project.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      aria-label={`${project.title} case study`}
      style={{ animationDelay: `${index * 140}ms` }}
      className="journal-wrapper"
    >
      <div className="journal-book" data-hovered={isOpen} data-pressed={pressed}>
        {/* ── FRONT FACE (COVER + SPINE) ── */}
        <div className="journal-front">
          <div className="journal-spine" style={{ background: project.spineColor }} />

          <div
            className="journal-cover"
            style={{ background: project.coverColor }}
          >
            {/* ── Row 1: logo + NDA + readtime ── */}
            <div className="cover-topbar">
              <div className="cover-logo-dot" style={{ background: project.spineColor }} />
              <div className="cover-topbar-right">
                {project.nda && <span className="nda-pill">🔒 NDA</span>}
                <span className="cover-readtime">{project.readTime}</span>
              </div>
            </div>

            <div className="cover-divider" />

            {/* ── Title block ── */}
            <div className="cover-title-block">
              <h3 className="cover-title">{project.title}</h3>
              <p className="cover-type">{project.type}</p>
              <p className="cover-subtitle">{project.problem}</p>
            </div>

            {/* ── Media zone ── */}
            <div className="cover-media">
              {project.insetImages && project.insetImages.length > 0 ? (
                <div className="inset-front">
                  <Image
                    src={project.insetImages[0]}
                    alt=""
                    fill
                    className="inset-img"
                    sizes="340px"
                  />
                </div>
              ) : (
                <div className="inset-placeholder">
                  <span className="placeholder-icon">▶</span>
                  <span>prototype / gif</span>
                </div>
              )}
            </div>

            {/* ── Key result pill ── */}
            <div className="cover-highlight">
              <span className="highlight-label">{project.highlightLabel}</span>
              <span className="highlight-value">{project.highlight}</span>
            </div>

            {/* ── Hover overlay ── */}
            <div className="cover-cta" aria-hidden="true">
              {project.nda ? "Request Access" : "View Case Study"} →
            </div>
          </div>
        </div>

        {/* ── BACK FACE (Structural Base & Shadow) ── */}
        <div className="journal-back" style={{ background: project.spineColor }} />

        {/* ── 3D EDGES (PAGES & SIDE SPINE) ── */}
        {/* The right pages panel uses an inline gradient so the trailing edge (Z=0, the back)
            shows coverColor — avoids z-sorting issues from a separate back-cover element.
            'to left' direction because after rotateY(-90deg), the CSS-right end is at Z=0 (back)
            which on screen appears CLOSER to the front cover edge. */}
        <div
          className="journal-pages-right"
          style={{
            backgroundImage: [
              // Lines layer (on top) — run left-to-right so lines cross the pages edge
              `repeating-linear-gradient(to left, rgba(0,0,0,0.07) 0, rgba(0,0,0,0.07) 1px, transparent 1px, transparent 3px)`,
              // Color layer: pages fill most of the depth, cover-color back rim at the far (Z=0) end
              `linear-gradient(to left, #f0efee 0%, #f0efee 78%, ${project.coverColor} 78%, ${project.coverColor} 100%)`
            ].join(', ')
          }}
        />
        <div className="journal-pages-top" />
        <div className="journal-pages-bottom" />
        <div className="journal-spine-side" style={{ background: project.spineColor }} />
      </div>
    </Link>
  );
}

export default function CaseStudyJournals({ projects }: { projects: JournalProject[] }) {
  return (
    <>
      <style>{`
        @keyframes journalFadeUp {
          from { opacity: 0; transform: translateY(32px) rotate(-1.5deg); }
          to   { opacity: 1; transform: translateY(0)    rotate(0deg); }
        }

        /* ── WRAPPER ──────────────────────────────────────────────────────── */
        .journal-wrapper {
          position: relative;
          /* Fluid on mobile, fixed on desktop */
          width: min(380px, 88vw);
          height: calc(min(380px, 88vw) * 1.47);
          text-decoration: none;
          animation: journalFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
          /* Add perspective to wrapper for 3D effect */
          perspective: 1500px;
          /* Allow rotated children to render outside */
          overflow: visible;
        }

        /* ── 3D BOOK CONTAINER ────────────────────────────────────────────── */
        .journal-book {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          transform-origin: center center;
          transform: translateY(0) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
        }
        .journal-book[data-hovered="true"] {
          transform: translateY(-14px) rotateY(-20deg) rotateX(8deg) rotateZ(-2deg);
        }
        .journal-book[data-pressed="true"] {
          transform: translateY(-8px) rotateY(-10deg) rotateX(4deg) rotateZ(-1deg) scale(0.98);
        }

        /* ── FRONT FACE ───────────────────────────────────────────────────── */
        .journal-front {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: row;
          /* Book depth = 60px. Front face at Z=60. */
          transform: translateZ(60px);
          backface-visibility: hidden;
          border-radius: 5px 12px 12px 5px;
          overflow: hidden;
        }

        /* ── BACK FACE (Structural Base & Shadow) ─────────────────────────── */
        .journal-back {
          position: absolute;
          inset: 0;
          transform: translateZ(0) rotateY(180deg);
          backface-visibility: hidden;
          border-radius: 12px 5px 5px 12px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.18);
          transition: box-shadow 0.42s ease;
        }
        .journal-book[data-hovered="true"] .journal-back {
          box-shadow: -20px -28px 52px rgba(0,0,0,0.28);
        }
        .journal-book[data-pressed="true"] .journal-back {
          box-shadow: -10px -16px 36px rgba(0,0,0,0.22);
        }

        /* ── 3D EDGE PANELS (PAGES + SPINE SIDE) ──────────────────────────── */
        /*
          CORRECT CSS 3D BOX GEOMETRY (depth D = 60px):
          - Front face:   translateZ(60px)                          <- Z = 60
          - Back cover:   translateZ(1px)                           <- Z ~ 0
          - Edge panels:  anchored at Z=0 edge, rotated to Z=60
            * No translateZ — the rotation itself spans Z=0 → Z=60

          Right edge:   right:0, width:60, origin right center, rotateY(-90deg)
          Bottom edge:  bottom:0, height:60, origin bottom center, rotateX(-90deg)
          Top edge:     top:0,    height:60, origin top center,    rotateX(90deg)
          Left spine:   left:0,   width:60,  origin left center,   rotateY(90deg)
        */
        .journal-pages-right {
          position: absolute;
          right: 0;        /* Anchor on the right edge of the book at Z=0 */
          top: 8px;        /* Back cover overhangs this edge — inset to show overhang */
          bottom: 8px;
          width: 60px;     /* equals book depth */
          /* background comes from inline React style (a gradient that ends with coverColor) */
          transform-origin: right center;
          transform: rotateY(-90deg);   /* Left edge swings to Z=60 (front) */
        }
        .journal-pages-bottom {
          position: absolute;
          bottom: 0;       /* Anchor on the bottom edge of the book at Z=0 */
          left: 22px;      /* Exclude spine area */
          right: 8px;      /* Back cover overhangs right */
          height: 60px;    /* equals book depth */
          background-color: #eeedec;
          background-image: repeating-linear-gradient(
            to top,
            rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px,
            transparent 1px, transparent 3px
          );
          transform-origin: bottom center;
          transform: rotateX(-90deg);   /* Top edge swings to Z=60 (front) */
        }
        .journal-pages-top {
          position: absolute;
          top: 0;          /* Anchor on the top edge of the book at Z=0 */
          left: 22px;      /* Exclude spine area */
          right: 8px;      /* Back cover overhangs right */
          height: 60px;    /* equals book depth */
          background-color: #f5f4f3;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px,
            transparent 1px, transparent 3px
          );
          transform-origin: top center;
          transform: rotateX(90deg);    /* Bottom edge swings to Z=60 (front) */
        }
        .journal-spine-side {
          position: absolute;
          left: 0;         /* Anchor on the left edge of the book at Z=0 */
          top: 0;
          bottom: 0;
          width: 60px;     /* equals book depth */
          transform-origin: left center;
          transform: rotateY(90deg);    /* Right edge swings to Z=60 (front) */
          border-radius: 8px 0 0 8px;
        }

        /* ── SPINE (Front Face) ───────────────────────────────────────────── */
        .journal-spine {
          width: 22px;
          height: 100%;
          border-radius: 5px 0 0 5px;
          flex-shrink: 0;
          z-index: 2;
          box-shadow: inset -4px 0 10px rgba(0,0,0,0.2),
                      inset 2px 0 4px rgba(255,255,255,0.15);
        }

        /* ── COVER (Front Face) ───────────────────────────────────────────── */
        .journal-cover {
          flex: 1;
          height: 100%;
          border-radius: 0 12px 12px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 24px 22px 20px 22px;
          /* Subtle paper texture via gradient */
          background-image: linear-gradient(
            160deg,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0) 60%
          );
        }
          /* Grain texture overlay */
        .journal-cover::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 0 10px 10px 0;
        pointer-events: none;
        z-index: 10;
        opacity: 0.35;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 180px 180px;
        mix-blend-mode: overlay;
        }   

        /* ── TOP BAR ──────────────────────────────────────────────────────── */
        .cover-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 8px;
        }
        .cover-topbar-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .cover-logo-dot {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          flex-shrink: 0;
          opacity: 0.82;
        }
        .nda-pill {
          font-family: 'Roboto', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
          background: rgba(10,10,30,0.14);
          color: rgba(10,10,30,0.6);
          padding: 4px 9px;
          border-radius: 12px;
          white-space: nowrap;
        }
        .cover-readtime {
          font-family: 'Roboto', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(10,10,30,0.6);
          white-space: nowrap;
        }

        .cover-divider {
          height: 1.5px;
          background: rgba(10,10,30,0.16);
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        /* ── TITLE BLOCK ──────────────────────────────────────────────────── */
        .cover-title-block {
          flex-shrink: 0;
        }
        .cover-title {
          /* ✅ CHANGE: Roboto Bold — consistent with section heading + handles multiline well */
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 1.3;
          color: rgba(10,10,30,0.88);
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }
        .cover-type {
          font-family: 'Roboto', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: rgba(10,10,30,0.4);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 10px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cover-subtitle {
          font-family: 'Roboto', sans-serif;
          font-style: italic;
          font-size: 12px;
          line-height: 1.5;
          color: rgba(10,10,30,0.5);
          margin: 0;
        }

        /* ── MEDIA ────────────────────────────────────────────────────────── */
        .cover-media {
          flex: 1;
          position: relative;
          margin: 16px 0 14px 0;
          min-height: 0;
          border-radius: 10px;
          overflow: hidden;
        }
        .inset-front {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          overflow: hidden;
        }
        .inset-img {
          object-fit: cover;
        }
        .inset-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(0,0,0,0.09);
          border-radius: 10px;
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(10,10,30,0.38);
        }
        .placeholder-icon {
          font-size: 24px;
          opacity: 0.35;
        }

        /* ── HIGHLIGHT PILL ───────────────────────────────────────────────── */
        .cover-highlight {
          background: rgba(255,255,255,0.52);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex-shrink: 0;
        }
        .highlight-label {
          font-family: 'Roboto', sans-serif;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(10,10,30,0.42);
        }
        .highlight-value {
          font-family: 'Roboto', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: rgba(10,10,30,0.84);
          line-height: 1.35;
        }

        /* ── HOVER CTA ────────────────────────────────────────────────────── */
        .cover-cta {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Bowlby One', sans-serif;
          font-size: 16px;
          letter-spacing: 0.02em;
          color: rgba(10,10,30,0.88);
          background: transparent;
          opacity: 0;
          transition: opacity 0.28s ease, background 0.28s ease;
          border-radius: 0 12px 12px 0;
          pointer-events: none;
        }
        .journal-wrapper:hover .cover-cta {
          opacity: 1;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        /* ── GRID — centered ──────────────────────────────────────────────── */
        .journals-grid {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-end;
          overflow: visible;
          /* Extra side padding absorbs the perspective rotation bleed */
          padding: 0 20px 20px 20px;
        }
        /* Stack vertically on mobile, side-by-side on desktop */
        @media (max-width: 768px) {
          .journals-grid {
            flex-direction: column;
            align-items: center;
            gap: 28px;
            /* Enough horizontal room for the rotated cover not to clip */
            padding: 0 24px;
            overflow: visible;
          }
          /* Remove stagger offset on mobile — all same size */
          .journals-grid .journal-wrapper:nth-child(2) {
            margin-top: 0 !important;
          }
          /* On mobile, scroll-open is subtle — less rotation to avoid overflow */
          .journal-book[data-hovered="true"] {
            transform: translateY(-8px) rotateY(-12deg) rotateX(4deg) !important;
          }
        }
        /* Organic stagger on desktop only */
        @media (min-width: 769px) {
          .journals-grid .journal-wrapper:nth-child(2) {
            margin-top: -20px;
          }
        }
      `}</style>

      <div className="journals-grid">
        {projects.map((project, i) => (
          <Journal key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  );
}