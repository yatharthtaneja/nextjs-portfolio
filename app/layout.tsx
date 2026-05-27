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
        <a href="#hero" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
