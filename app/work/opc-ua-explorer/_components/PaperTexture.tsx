// Watercolour-on-graph-paper treatment for this case study's charts.
//
// Everything here is SVG filters, so there are no texture images to ship and
// the charts stay sharp at any size. Three pieces:
//
//   <PaperDefs>   the filter and pattern definitions
//   <PaperGrid>   the hand-drawn grid background
//   <Wash>        one painted shape
//
// Filter ids are namespaced per chart because more than one chart can be on
// the page at once and duplicate ids would cross-wire the filters.

export const PAPER = '#F7F6F2';
export const GRID_FINE = '#C9C5B9';
export const GRID_BOLD = '#B3AE9F';

export function PaperDefs({ ns, seed = 7 }: { ns: string; seed?: number }) {
  return (
    <defs>
      {/* Pigment on wet paper: displace the edge so it tears rather than cuts,
          then multiply a second, finer noise through it so the fill mottles. */}
      <filter id={`${ns}-wash`} x="-10%" y="-45%" width="120%" height="190%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045 0.16" numOctaves={4} seed={seed} result="warp" />
        <feDisplacementMap
          in="SourceGraphic" in2="warp" scale={7}
          xChannelSelector="R" yChannelSelector="G" result="rough"
        />
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={4} seed={seed + 11} result="pigment" />
        <feColorMatrix in="pigment" type="saturate" values="0" result="pigmentBW" />
        <feComponentTransfer in="pigmentBW" result="pigmentA">
          <feFuncA type="table" tableValues="0 0.38" />
        </feComponentTransfer>
        <feComposite in="pigmentA" in2="rough" operator="in" result="pigmentIn" />
        <feBlend in="rough" in2="pigmentIn" mode="multiply" />
      </filter>

      {/* Same idea, gentler, for small marks like legend swatches. */}
      <filter id={`${ns}-wash-sm`} x="-22%" y="-22%" width="144%" height="144%">
        <feTurbulence type="fractalNoise" baseFrequency="0.12 0.2" numOctaves={3} seed={seed + 5} result="warp" />
        <feDisplacementMap in="SourceGraphic" in2="warp" scale={2.6} xChannelSelector="R" yChannelSelector="G" result="rough" />
        <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves={3} seed={seed + 2} result="pigment" />
        <feColorMatrix in="pigment" type="saturate" values="0" result="pigmentBW" />
        <feComponentTransfer in="pigmentBW" result="pigmentA">
          <feFuncA type="table" tableValues="0 0.34" />
        </feComponentTransfer>
        <feComposite in="pigmentA" in2="rough" operator="in" result="pigmentIn" />
        <feBlend in="rough" in2="pigmentIn" mode="multiply" />
      </filter>

      {/* Ruled lines drawn by hand rather than printed: a small displacement
          keeps them from being perfectly straight or evenly dark. */}
      <filter id={`${ns}-waver`} x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves={2} seed={seed + 17} result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale={3.4} xChannelSelector="R" yChannelSelector="G" />
      </filter>

      <pattern id={`${ns}-fine`} width="26" height="26" patternUnits="userSpaceOnUse">
        <path d="M26 0H0V26" fill="none" stroke={GRID_FINE} strokeWidth="0.7" opacity="0.55" />
      </pattern>
      <pattern id={`${ns}-bold`} width="130" height="130" patternUnits="userSpaceOnUse">
        <path d="M130 0H0V130" fill="none" stroke={GRID_BOLD} strokeWidth="0.9" opacity="0.5" />
      </pattern>
    </defs>
  );
}

/** Paper ground plus its two ruled grids. Render first, behind everything. */
export function PaperGrid({ ns, w, h }: { ns: string; w: number; h: number }) {
  return (
    <g aria-hidden="true">
      <rect x="0" y="0" width={w} height={h} fill={PAPER} />
      <g filter={`url(#${ns}-waver)`}>
        <rect x="0" y="0" width={w} height={h} fill={`url(#${ns}-fine)`} />
        <rect x="0" y="0" width={w} height={h} fill={`url(#${ns}-bold)`} />
      </g>
    </g>
  );
}

/** One painted shape. `small` uses the gentler filter for little marks. */
export function Wash({
  ns, small = false, children,
}: { ns: string; small?: boolean; children: React.ReactNode }) {
  return <g filter={`url(#${ns}-${small ? 'wash-sm' : 'wash'})`}>{children}</g>;
}
