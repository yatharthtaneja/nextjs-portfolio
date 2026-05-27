"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import JournalStyles from "./JournalStyles";

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
  statusTag?: string;
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

  // Separate hover vs scroll state so touch CTA can light up on scroll-open
  // without coupling to the hover-only state machine.
  const isOpen = hovered || scrollOpen;

  return (
    <Link
      ref={wrapperRef}
      href={`/work/${project.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      aria-label={`${project.title} case study`}
      style={{ animationDelay: `${index * 140}ms` }}
      className="journal-wrapper"
      data-hovered={hovered}
      data-scroll-open={scrollOpen}
    >
      <div className="journal-book" data-hovered={isOpen} data-pressed={pressed}>
        {/* ── FRONT FACE (COVER + SPINE) ── */}
        <div className="journal-front">
          <div className="journal-spine" style={{ background: project.spineColor }} />

          <div
            className="journal-cover"
            style={{ background: project.coverColor }}
          >
            {/* ── Row 1: status tag + NDA + readtime ── */}
            <div className="cover-topbar">
              {project.statusTag ? (
                <span
                  className="status-tag"
                  style={{
                    background: `color-mix(in srgb, ${project.spineColor} 18%, white)`,
                    color: project.spineColor,
                    border: `1.5px solid color-mix(in srgb, ${project.spineColor} 30%, white)`,
                  }}
                >
                  {project.statusTag}
                </span>
              ) : (
                <div className="cover-logo-dot" style={{ background: project.spineColor }} />
              )}
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
                <div
                  className="inset-front"
                  data-slug={project.slug}
                  style={{ background: project.spineColor }}
                >
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
      <JournalStyles />

      <div className="journals-grid">
        {projects.map((project, i) => (
          <Journal key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
