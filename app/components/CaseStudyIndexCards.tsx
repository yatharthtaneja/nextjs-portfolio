// Mobile-only presentation of the case studies: a stack of four ruled index
// cards sized so all four fit a single phone screen. The desktop 3D journals
// (CaseStudyJournal.tsx) carry the same data above 768px — the swap is pure
// CSS, see IndexCardStyles.tsx.
//
// Deliberately a server component: no hover state, no observers, nothing that
// needs JS. Tap affordance is the persistent arrow in the right rail.

import Link from "next/link";
import Image from "next/image";
import IndexCardStyles from "./IndexCardStyles";
import { ArrowRight } from "./icons";
import type { JournalProject } from "./CaseStudyJournal";

function IndexCard({ project, index }: { project: JournalProject; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.title} case study`}
      className="indexcard"
      style={{
        // Alternating tilt — "dropped in a drawer" without breaking the rhythm.
        "--tilt": index % 2 === 0 ? "-0.35deg" : "0.35deg",
        "--cover": project.coverColor,
        "--spine": project.spineColor,
        animationDelay: `${index * 90}ms`,
      } as React.CSSProperties}
    >
      <div className="indexcard-spine" style={{ background: project.spineColor }} />

      <div className="indexcard-body">
        {/* ── Top bar: status + read time, closed by the maroon header rule ── */}
        <div className="ic-topbar">
          {project.statusTag && (
            <span
              className="ic-status"
              style={{
                background: `color-mix(in srgb, ${project.spineColor} 18%, white)`,
                color: project.spineColor,
                border: `1px solid color-mix(in srgb, ${project.spineColor} 30%, white)`,
              }}
            >
              {project.statusTag}
            </span>
          )}
        </div>

        <h3 className="ic-title">{project.title}</h3>
        <p className="ic-type">{project.type}</p>
        <p className="ic-problem">{project.problem}</p>

        <div className="ic-result">
          <span className="ic-result-dot" style={{ background: project.spineColor }} />
          <span className="ic-result-value">{project.highlight}</span>
        </div>
      </div>

      <div className="indexcard-rail">
        {project.insetImages && project.insetImages.length > 0 && (
          <div className="ic-sticker" style={{ background: project.spineColor }}>
            <Image
              src={project.insetImages[0]}
              alt=""
              fill
              className="ic-sticker-img"
              sizes="44px"
            />
          </div>
        )}
        <span className="ic-arrow" style={{ color: project.spineColor }} aria-hidden="true">
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function CaseStudyIndexCards({ projects }: { projects: JournalProject[] }) {
  return (
    <>
      <IndexCardStyles />

      <div className="indexcard-stack">
        {projects.map((project, i) => (
          <IndexCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
