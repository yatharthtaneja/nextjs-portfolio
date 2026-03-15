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
        if (entry.intersectionRatio >= 0.4) setScrollOpen(true);
        else if (entry.intersectionRatio < 0.15) setScrollOpen(false);
      },
      { threshold: [0, 0.15, 0.4, 0.75, 1] }
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
      {/* ── SPINE ── */}
      <div className="journal-spine" style={{ background: project.spineColor }} />

      {/* ── COVER ── */}
      <div
        className="journal-cover"
        style={{ background: project.coverColor }}
        data-hovered={isOpen}
        data-pressed={pressed}
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
          display: flex;
          flex-direction: row;
          position: relative;
          /* Fluid on mobile, fixed on desktop */
          width: min(380px, 88vw);
          height: calc(min(380px, 88vw) * 1.47);
          text-decoration: none;
          animation: journalFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1),
                      filter 0.38s ease;
          filter: drop-shadow(0 12px 32px rgba(0,0,0,0.18));
          /* Allow rotated cover to render outside its own box */
          overflow: visible;
        }
        .journal-wrapper:hover {
          transform: translateY(-14px) rotate(-1.5deg);
          filter: drop-shadow(0 28px 52px rgba(0,0,0,0.28));
        }
        .journal-wrapper:active {
          transform: translateY(-8px) rotate(-0.5deg) scale(0.98);
        }

        /* ── SPINE ────────────────────────────────────────────────────────── */
        .journal-spine {
          width: 22px;
          height: 100%;
          border-radius: 5px 0 0 5px;
          flex-shrink: 0;
          z-index: 2;
          box-shadow: inset -4px 0 10px rgba(0,0,0,0.2),
                      inset 2px 0 4px rgba(255,255,255,0.15);
        }

        /* ── COVER ────────────────────────────────────────────────────────── */
        .journal-cover {
          flex: 1;
          height: 100%;
          border-radius: 0 12px 12px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 24px 22px 20px 22px;
          transform-origin: left center;
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          /* Subtle paper texture via gradient */
          background-image: linear-gradient(
            160deg,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0) 60%
          );
        }
        .journal-cover[data-hovered="true"] {
          transform: perspective(1000px) rotateY(-9deg);
        }
        .journal-cover[data-pressed="true"] {
          transform: perspective(1000px) rotateY(-4deg);
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
          .journal-cover[data-hovered="true"] {
            transform: perspective(900px) rotateY(-4deg) !important;
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