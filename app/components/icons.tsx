// Small SVG glyphs used inline as icons across the portfolio.
// Replacing Unicode/emoji (✓, 🔒, ⏸, →) with these guarantees consistent
// rendering across OS and font stacks. Every glyph uses `currentColor` so
// the surrounding text color drives the stroke / fill.

type GlyphProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
};

export function Check({ size = 12, className, style, strokeWidth = 2 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-1px', ...style }}
    >
      <path
        d="M 2.5 6.2 L 5 8.5 L 9.5 3.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cross({ size = 12, className, style, strokeWidth = 2 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-1px', ...style }}
    >
      <line x1="3" y1="3" x2="9" y2="9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="9" y1="3" x2="3" y2="9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function Pause({ size = 10, className, style }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-1px', ...style }}
    >
      <rect x="2" y="1.5" width="2" height="7" rx="0.6" fill="currentColor" />
      <rect x="6" y="1.5" width="2" height="7" rx="0.6" fill="currentColor" />
    </svg>
  );
}

export function Lock({ size = 16, className, style, strokeWidth = 1.6 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-2px', ...style }}
    >
      {/* Shackle */}
      <path
        d="M 8 11 L 8 7.5 A 4 4 0 0 1 16 7.5 L 16 11"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
      {/* Body */}
      <rect
        x="5"
        y="11"
        width="14"
        height="9.5"
        rx="2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Keyhole */}
      <circle cx="12" cy="15.2" r="1.1" fill="currentColor" />
      <rect x="11.5" y="15.5" width="1" height="2.4" rx="0.4" fill="currentColor" />
    </svg>
  );
}

export function ArrowRight({ size = 14, className, style, strokeWidth = 1.6 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-2px', ...style }}
    >
      <line x1="2.5" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M 9 4 L 13 8 L 9 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Person({
  size = 64,
  className,
  style,
  strokeWidth = 1.2,
  filled = false,
}: GlyphProps & { filled?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'block', ...style }}
    >
      {filled ? (
        <>
          <circle cx="12" cy="8" r="3.6" fill="currentColor" />
          <path
            d="M 5 21 C 5 16 8 13.5 12 13.5 C 16 13.5 19 16 19 21 Z"
            fill="currentColor"
          />
        </>
      ) : (
        <>
          <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
          <path
            d="M 5 21 C 5 16 8 13.5 12 13.5 C 16 13.5 19 16 19 21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}
    </svg>
  );
}

// Clock — Material Symbols Outlined `schedule`. Two hands at 10:10 reading.
export function Clock({ size = 36, className, style, strokeWidth = 1.5 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'block', ...style }}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="12" x2="12" y2="7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="12" y1="12" x2="15.5" y2="14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// Database — cylinder, the standard "data store" glyph (Material Symbols).
export function Database({ size = 36, className, style, strokeWidth = 1.5 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'block', ...style }}
    >
      <ellipse cx="12" cy="5" rx="7" ry="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M 5 5 L 5 19 C 5 20.4 8.13 21.5 12 21.5 C 15.87 21.5 19 20.4 19 19 L 19 5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <path
        d="M 5 11 C 5 12.4 8.13 13.5 12 13.5 C 15.87 13.5 19 12.4 19 11"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <path
        d="M 5 15 C 5 16.4 8.13 17.5 12 17.5 C 15.87 17.5 19 16.4 19 15"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeOpacity={0.55}
        fill="none"
      />
    </svg>
  );
}

// TrendingFlat — small horizontal arrow with no slope, used as a step
// connector between icon clusters.
export function TrendingFlat({ size = 18, className, style, strokeWidth = 1.5 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
    >
      <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M 15 8 L 19 12 L 15 16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ArrowLeft({ size = 14, className, style, strokeWidth = 1.6 }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-2px', ...style }}
    >
      <line x1="13.5" y1="8" x2="3" y2="8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M 7 4 L 3 8 L 7 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
