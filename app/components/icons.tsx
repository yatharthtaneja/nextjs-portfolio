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

export function Person({ size = 64, className, style, strokeWidth = 1.2 }: GlyphProps) {
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
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M 5 21 C 5 16 8 13.5 12 13.5 C 16 13.5 19 16 19 21"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
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
