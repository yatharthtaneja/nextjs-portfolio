// The lead case study, pulled out of the journals grid so it is unmistakably
// the one to read first.
//
// Why a band and not a bigger card: `.journals-grid` is flexbox, so
// `grid-column: span 2` is inert, and the book's 3D geometry hard-codes a 60px
// depth across five CSS rules plus a locked 1.47 aspect ratio. Hierarchy here
// comes from position, surrounding space and the size of the outcome type —
// the card itself is the unmodified <Journal>.
//
// Desktop only. Mobile keeps all four studies as one screen of index cards
// (see CaseStudyIndexCards.tsx), which is its own deliberate hierarchy.
//
// The book's CSS comes from <JournalStyles>, mounted by CaseStudyJournals
// further down the same page. Global, so order does not matter — but this band
// is not standalone: it expects the grid to be on the page with it.

import Image from "next/image";
import Link from "next/link";
import { Journal, type JournalProject } from "./CaseStudyJournal";
import { ArrowRight, Check } from "./icons";

interface Props {
  project: JournalProject;
  /** The outcome, as few words as it can survive in. Largest type in the band. */
  outcome: string;
  /** One sentence saying what that outcome means for a person. */
  body: string;
  /** Public proof the work shipped. */
  docsUrl?: string;
  /** Screenshot of the shipped thing — the demo the reader should see first. */
  shot?: { src: string; alt: string; width: number; height: number };
}

export default function FeaturedCaseStudy({
  project,
  outcome,
  body,
  docsUrl,
  shot,
}: Props) {
  const accent = project.spineColor;

  return (
    <section
      aria-labelledby="featured-outcome"
      className="featured-band"
    >
      <div className="featured-inner">
        {/* ── Left: the card itself, geometry untouched ── */}
        <div className="featured-card">
          <Journal project={project} index={0} />
        </div>

        {/* ── Right: the outcome, loud, then the proof ── */}
        <div className="featured-copy">
          <p className="featured-eyebrow" style={{ color: accent }}>
            <span className="featured-numeral" style={{ background: accent }}>1</span>
            Start here
          </p>

          <p id="featured-outcome" className="featured-outcome">
            {outcome}
          </p>

          <p className="featured-body">{body}</p>

          <div className="featured-proof">
            {project.statusTag && (
              <span
                className="featured-pill"
                style={{
                  background: `color-mix(in srgb, ${accent} 12%, white)`,
                  color: accent,
                  border: `1px solid color-mix(in srgb, ${accent} 26%, white)`,
                }}
              >
                <Check />
                Shipped · MATLAB R2026a
              </span>
            )}
            {docsUrl && (
              <a
                href={docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-docs"
                style={{ color: accent }}
              >
                Read the docs
                <ArrowRight style={{ marginLeft: 4 }} />
              </a>
            )}

            <Link href={`/work/${project.slug}`} className="featured-cta" style={{ color: accent }}>
              Read the case study
              <ArrowRight style={{ marginLeft: 6 }} />
            </Link>
          </div>

          {shot && (
            <figure className="featured-shot" style={{ borderColor: `color-mix(in srgb, ${accent} 22%, white)` }}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 1279px) 60vw, 660px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          )}
        </div>
      </div>

      <style>{`
        /* Hidden by default and shown from 769px, deliberately NOT Tailwind's
           "hidden md:block". Tailwind's md is min-width:768px, but
           .journals-grid hides at max-width:768px and .indexcard-stack shows
           at max-width:768px — so at exactly 768px the band and the mobile
           index cards both rendered, OPC UA appeared twice, and the three
           desktop journals disappeared. This matches the grid's boundary. */
        .featured-band {
          display: none;
          width: 100%;
          padding: 8px 24px 64px;
        }
        @media (min-width: 769px) {
          .featured-band { display: block; }
        }
        .featured-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: min(380px, 38%) 1fr;
          gap: 56px;
          align-items: start;
        }
        /* The book bleeds on hover (rotateY(-20deg)); give it room. */
        .featured-card {
          overflow: visible;
          padding-bottom: 20px;
        }

        .featured-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Roboto', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0 0 18px;
        }
        .featured-numeral {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 999px;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0;
          flex-shrink: 0;
        }

        /* The one line a reader should leave with. */
        .featured-outcome {
          font-family: 'Roboto', sans-serif;
          font-weight: 800;
          font-size: clamp(2.1rem, 4.4vw, 3.6rem);
          line-height: 1.02;
          letter-spacing: -0.025em;
          color: #27174E;
          margin: 0 0 20px;
          text-wrap: balance;
        }
        .featured-body {
          font-family: 'Roboto', sans-serif;
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.55;
          color: #171717;
          opacity: 0.8;
          margin: 0 0 24px;
          max-width: 52ch;
        }

        .featured-proof {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 28px;
        }
        .featured-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 6px 13px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .featured-docs,
        .featured-cta {
          display: inline-flex;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1.5px solid transparent;
          transition: border-color 0.2s ease, opacity 0.2s ease;
        }
        .featured-docs { font-size: 13px; letter-spacing: 0.02em; }
        .featured-cta  { font-size: 15px; letter-spacing: 0.02em; }
        @media (hover: hover) and (pointer: fine) {
          .featured-docs:hover,
          .featured-cta:hover { border-bottom-color: currentColor; }
        }

        .featured-shot {
          margin: 0;
          border: 1px solid;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 18px 44px -28px rgba(39,23,78,0.45);
        }

        /* Below the 4-up journal breakpoint the band stacks: the outcome still
           leads, the card follows. */
        @media (max-width: 1100px) {
          .featured-inner {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .featured-copy { order: -1; }
          .featured-card { display: flex; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
