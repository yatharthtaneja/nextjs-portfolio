// All styles for the mobile index-card stack on the home page.
// Desktop (>=769px) renders the 3D journals instead — see JournalStyles.tsx.
// Kept separate from CaseStudyIndexCards.tsx so that file stays JSX-only,
// mirroring the CaseStudyJournal / JournalStyles split.

export default function IndexCardStyles() {
  return (
    <style>{`
        @keyframes indexCardIn {
          from {
            opacity: 0;
            transform: translateY(12px) rotate(var(--tilt, 0deg));
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(var(--tilt, 0deg));
          }
        }

        /* ── STACK ────────────────────────────────────────────────────────── */
        /* Hidden by default; the 768px block below turns it on. Keeping the
           desktop state as the default means no flash of the mobile list on
           a wide first paint. */
        .indexcard-stack {
          display: none;
        }

        /* ── CARD ─────────────────────────────────────────────────────────── */
        .indexcard {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          text-decoration: none;
          border-radius: 4px 10px 10px 4px;
          overflow: hidden;
          background: #FDFCF6;
          box-shadow: 0 6px 16px rgba(39,23,78,0.13),
                      inset 0 1px 0 rgba(255,255,255,0.55);
          transform: rotate(var(--tilt, 0deg));
          transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1),
                      box-shadow 200ms cubic-bezier(0.23, 1, 0.32, 1);
          animation: indexCardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        /* Touch-only surface: press feedback, never hover. */
        .indexcard:active {
          transform: rotate(0deg) scale(0.985);
          box-shadow: 0 3px 10px rgba(39,23,78,0.16),
                      inset 0 1px 0 rgba(255,255,255,0.55);
        }

        /* ── SPINE + PUNCH HOLE ───────────────────────────────────────────── */
        /* Same inset-shadow idiom as .journal-spine so the two card systems
           read as one family across the breakpoint. */
        .indexcard-spine {
          position: relative;
          width: 12px;
          flex-shrink: 0;
          border-radius: 4px 0 0 4px;
          box-shadow: inset -3px 0 8px rgba(0,0,0,0.22),
                      inset 2px 0 3px rgba(255,255,255,0.18);
        }
        .indexcard-spine::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 7px;
          height: 7px;
          margin: -3.5px 0 0 -3.5px;
          border-radius: 50%;
          background: #F0EEF8;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.35);
        }

        /* ── BODY ─────────────────────────────────────────────────────────── */
        .indexcard-body {
          position: relative;
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 9px 4px 9px 11px;
          overflow: hidden;
          /* Card tint + ruled lines. The tint keeps each study's cover colour
             identity while staying light enough for body text. */
          background-color: color-mix(in srgb, var(--cover) 42%, #FDFCF6);
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0, transparent 21px,
            rgba(10,10,30,0.055) 21px, rgba(10,10,30,0.055) 22px
          );
        }
        /* Grain overlay — same noise texture as .journal-cover::after. */
        .indexcard-body::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          opacity: 0.22;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px 180px;
        }

        /* ── TOP BAR ──────────────────────────────────────────────────────── */
        /* The maroon hairline is the header rule of a real index card. */
        .ic-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding-bottom: 5px;
          margin-bottom: 3px;
          border-bottom: 1px solid rgba(171,73,103,0.45);
          flex-shrink: 0;
        }
        .ic-status {
          display: inline-flex;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── TEXT ─────────────────────────────────────────────────────────── */
        .ic-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: clamp(14px, 4vw, 16px);
          line-height: 1.28;
          letter-spacing: -0.01em;
          color: rgba(10,10,30,0.88);
          margin: 0;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          flex-shrink: 0;
        }
        .ic-type {
          font-family: 'Roboto', sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(10,10,30,0.52);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-shrink: 0;
        }
        .ic-problem {
          font-family: 'Roboto', sans-serif;
          font-style: italic;
          font-size: 11.5px;
          line-height: 1.42;
          color: rgba(10,10,30,0.55);
          margin: 0;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          flex-shrink: 0;
        }
        .ic-result {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-top: auto;
          padding-top: 4px;
          flex-shrink: 0;
        }
        .ic-result-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          transform: translateY(-1px);
        }
        .ic-result-value {
          font-family: 'Roboto', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          line-height: 1.3;
          color: rgba(10,10,30,0.84);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        /* ── RIGHT RAIL ───────────────────────────────────────────────────── */
        /* Sticker keeps the cover's visual identity; the arrow is a permanent
           tap affordance — replaces the blur overlay the journals used. */
        .indexcard-rail {
          position: relative;
          z-index: 3;
          width: 54px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 9px 8px;
          background-color: color-mix(in srgb, var(--cover) 42%, #FDFCF6);
        }
        .ic-sticker {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .ic-sticker-img {
          object-fit: contain;
        }
        .ic-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── MOBILE: one screen, four cards ───────────────────────────────── */
        @media (max-width: 768px) {
          .indexcard-stack {
            display: flex;
            flex-direction: column;
            gap: 12px;
            /* svh keeps the stack inside the visible area even while mobile
               browser chrome is showing. vh is the fallback. */
            height: 100vh;
            height: 100svh;
            padding: 14px 16px 18px 16px;
            box-sizing: border-box;
          }
          .indexcard {
            flex: 1 1 0;
            min-height: 132px;
          }
        }

        /* Narrow phones (<=380px): buy the text column some width back. */
        @media (max-width: 380px) {
          .indexcard-rail {
            width: 48px;
            padding: 9px 6px;
          }
          .ic-sticker {
            width: 40px;
            height: 40px;
          }
          .ic-type {
            font-size: 9px;
            letter-spacing: 0.055em;
          }
          .ic-title {
            font-size: 13.8px;
          }
        }

        /* Short phones (iPhone SE, 667px): drop the problem line before the
           flex squeeze can clip anything. */
        @media (max-width: 768px) and (max-height: 700px) {
          .ic-problem {
            display: none;
          }
          .indexcard-stack {
            gap: 8px;
            padding: 10px 14px 12px 14px;
          }
          .indexcard-body {
            gap: 2px;
            padding: 8px 4px 8px 11px;
          }
          .ic-topbar {
            padding-bottom: 4px;
            margin-bottom: 2px;
          }
          .ic-title {
            line-height: 1.24;
          }
          .ic-result {
            padding-top: 2px;
          }
        }

        /* Very short viewports: stop compressing — let the stack run a little
           past one screen rather than crush the text. */
        @media (max-width: 768px) and (max-height: 600px) {
          .indexcard-stack {
            height: auto;
          }
          .indexcard {
            min-height: 138px;
          }
          .ic-title {
            -webkit-line-clamp: 2;
          }
        }
      `}</style>
  );
}
