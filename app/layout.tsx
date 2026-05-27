import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yatharth Taneja — UX Researcher · CS + Design",
  description:
    "Portfolio of Yatharth Taneja — a CS-engineer-turned-UX-researcher at MathWorks. Industrial IoT case studies, API design research, and tools generating $2M+ quarterly revenue.",
  icons: {
    icon: "/images/ytlogo.ico",
    apple: "/images/ytlogo.ico",
  },
  openGraph: {
    title: "Yatharth Taneja — UX Researcher · CS + Design",
    description:
      "Industrial IoT case studies, API design research, and tools generating $2M+ quarterly revenue for MathWorks.",
    type: "website",
    locale: "en_US",
    siteName: "Yatharth Taneja",
    images: [
      {
        url: "/images/stamp-me.png",
        width: 600,
        height: 600,
        alt: "Yatharth Taneja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatharth Taneja — UX Researcher · CS + Design",
    description:
      "Industrial IoT case studies, API design research, and tools generating $2M+ quarterly revenue for MathWorks.",
    images: ["/images/stamp-me.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <style>{`
          /* Skip-link reveal on focus. Inline so it can't be lost to a stale
             CSS bundle the way a globals.css rule can. */
          .skip-link:focus,
          .skip-link:focus-visible {
            position: fixed !important;
            top: 12px !important;
            left: 12px !important;
            width: auto !important;
            height: auto !important;
            padding: 12px 18px !important;
            margin: 0 !important;
            overflow: visible !important;
            clip: auto !important;
            clip-path: none !important;
            white-space: normal !important;
            background: #27174E;
            color: #F0EEF8;
            border-radius: 8px;
            font-family: 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none;
            z-index: 1000;
          }
        `}</style>
        <a
          href="#hero"
          className="skip-link"
          style={{
            // Bulletproof "visually hidden until focused" — clipped to a 1px
            // box with no overflow. These inline styles always apply, so the
            // link can never visually leak even if globals.css fails to load.
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            clipPath: 'inset(50%)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
