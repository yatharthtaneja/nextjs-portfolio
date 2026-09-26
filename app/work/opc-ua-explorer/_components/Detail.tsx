// Progressive-disclosure wrapper for the long-form detail on this case study.
//
// Native <details>/<summary> on purpose: no JS state, works with scripting off,
// and find-in-page still reaches the collapsed text (Chrome auto-expands a
// <details> when a match is inside it). A JS accordion would hide the content
// from Cmd+F, which is the whole reason the detail is worth keeping on-page
// rather than on a separate route.

import type { ReactNode } from 'react';

export default function Detail({
  eyebrow,
  title,
  teaser,
  badge,
  open = false,
  children,
}: {
  /** Small label above the headline — "Theme 1", "Forum feedback", … */
  eyebrow?: string;
  /** The headline. Always visible, collapsed or not. */
  title: ReactNode;
  /** One line of payload shown while collapsed — usually what shipped. */
  teaser?: ReactNode;
  /** Status pill, right-aligned in the summary row. */
  badge?: ReactNode;
  /** Render expanded on load. Used for the first couple so the pattern reads. */
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <details className="detail" open={open}>
      <summary className="detail-summary">
        <div className="detail-summary-main">
          {eyebrow && <div className="detail-eyebrow">{eyebrow}</div>}
          <h3 className="detail-title">{title}</h3>
          {teaser && <p className="detail-teaser">{teaser}</p>}
        </div>

        <div className="detail-summary-aside">
          {badge}
          <span className="detail-chevron" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M6.5 4L11 9L6.5 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </summary>

      <div className="detail-body">{children}</div>
    </details>
  );
}
