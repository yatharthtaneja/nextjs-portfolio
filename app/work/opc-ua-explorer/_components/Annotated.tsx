// A static screenshot with numbered pins on the things being discussed, and a
// matching legend underneath.
//
// This replaced ZoomFrame for the findings (ZoomFrame has since been deleted,
// along with its CSS). ZoomFrame animated a zoom and pan
// across the image, which is motion rather than explanation: the reader still
// had to work out which part of the interface the paragraph was about. Theme 1
// is the clearest case — four separate problem surfaces sit in one toolstrip,
// and a single pan cannot point at four things.
//
// Pins are positioned in percentages measured off the prototype's own DOM, so
// they stay put at any render width.

import Image from 'next/image';
import { A } from './theme';

export type Pin = {
  /** Horizontal centre, 0-100, measured within the screenshot. */
  x: number;
  /** Vertical centre, 0-100. */
  y: number;
  /** What this pin is pointing at. Shown in the legend, not on the image. */
  note: React.ReactNode;
};

export default function Annotated({
  src,
  alt,
  width,
  height,
  pins = [],
  caption,
  label,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  pins?: Pin[];
  caption?: React.ReactNode;
  /** Small heading above the frame, e.g. "Before" or "After". */
  label?: string;
  priority?: boolean;
}) {
  return (
    <figure className="annot">
      {label && <figcaption className="annot-label">{label}</figcaption>}

      <div className="annot-frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 768px) 92vw, 1040px"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {pins.map((p, i) => (
          <span
            key={i}
            className="annot-pin"
            style={{ left: `${p.x}%`, top: `${p.y}%`, background: A }}
            aria-hidden="true"
          >
            {i + 1}
          </span>
        ))}
      </div>

      {pins.length > 0 && (
        <ol className="annot-legend">
          {pins.map((p, i) => (
            <li key={i}>
              <span className="annot-legend-num" style={{ background: A }}>{i + 1}</span>
              <span className="annot-legend-note">{p.note}</span>
            </li>
          ))}
        </ol>
      )}

      {caption && <figcaption className="annot-caption">{caption}</figcaption>}
    </figure>
  );
}
