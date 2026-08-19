'use client';

import Image from 'next/image';
import { ArrowUpRight } from './icons';

interface BehancePostcardProps {
  title: string;
  label: string;
  year: string;
  behanceUrl: string;
  imageSrc: string;
  tilt: number;
}

export default function BehancePostcard({ title, label, year, behanceUrl, imageSrc, tilt }: BehancePostcardProps) {
  return (
    <a
      href={behanceUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — view on Behance (opens in a new tab)`}
      className="postcard"
      style={{ '--tilt': `${tilt}deg` } as React.CSSProperties}
    >
      <div className="postcard-photo">
        <Image src={imageSrc} alt="" fill sizes="380px" className="postcard-img" />
        <span className="postcard-postmark">{year}</span>
      </div>

      <div className="postcard-divider" />

      <div className="postcard-caption">
        <p className="postcard-title">{title}</p>
        <p className="postcard-label">{label}</p>
        <span className="postcard-cta">
          View on Behance
          <ArrowUpRight style={{ marginLeft: 4 }} />
        </span>
      </div>

      <style jsx>{`
        .postcard {
          display: block;
          width: min(360px, 88vw);
          background: #f7f5fb;
          border: 1px solid rgba(39, 23, 78, 0.12);
          border-radius: 10px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(39, 23, 78, 0.14);
          transform: rotate(var(--tilt));
          transition: transform 260ms cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 260ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        @media (hover: hover) and (pointer: fine) {
          .postcard:hover {
            transform: rotate(0deg) translateY(-6px);
            box-shadow: 0 18px 34px rgba(39, 23, 78, 0.22);
          }
        }
        .postcard:active {
          transform: scale(0.98);
        }

        .postcard-photo {
          position: relative;
          width: 100%;
          height: 200px;
          background: #ddd;
        }
        .postcard-img {
          object-fit: cover;
        }

        .postcard-postmark {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px dashed rgba(171, 73, 103, 0.7);
          background: rgba(240, 238, 248, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Special Elite', system-ui;
          font-size: 12px;
          color: #ab4967;
          transform: rotate(-8deg);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
        }

        .postcard-divider {
          border-top: 1.5px dashed rgba(39, 23, 78, 0.25);
          margin: 0 18px;
        }

        .postcard-caption {
          padding: 18px 18px 20px;
        }

        .postcard-title {
          font-family: 'Special Elite', system-ui;
          font-size: 17px;
          color: #27174e;
          margin: 0 0 6px;
        }

        .postcard-label {
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #ab4967;
          margin: 0 0 14px;
        }

        .postcard-cta {
          display: inline-flex;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #493972;
          transition: color 200ms ease-out;
        }
        @media (hover: hover) and (pointer: fine) {
          .postcard:hover .postcard-cta {
            color: #27174e;
          }
        }
      `}</style>
    </a>
  );
}
