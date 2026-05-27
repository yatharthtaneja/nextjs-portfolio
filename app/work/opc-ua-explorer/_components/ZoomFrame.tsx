'use client';

import { useEffect, useRef, useState } from 'react';

// Scroll-triggered dramatic zoom on a screenshot. Drives the .zoom-frame
// keyframes defined in OPCUAStyles.
export default function ZoomFrame({
  src,
  alt,
  focalX,
  focalY,
  zoom = 1.8,
  aspectRatio = '16 / 10',
  caption,
  panLR = false,
}: {
  src: string;
  alt: string;
  focalX: string;
  focalY: string;
  zoom?: number;
  aspectRatio?: string;
  caption?: string;
  panLR?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={`zoom-frame${visible ? ' zoomed-in' : ''}${panLR ? ' pan-lr' : ''}`}
      style={{
        aspectRatio,
        ['--focal-x' as string]: focalX,
        ['--focal-y' as string]: focalY,
        ['--zoom' as string]: String(zoom),
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {caption && <figcaption className="zoom-caption">{caption}</figcaption>}
    </figure>
  );
}
