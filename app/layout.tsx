import type { Metadata } from "next";
import { Geist, Geist_Mono , Bowlby_One , Roboto , Playfair_Display , Special_Elite } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yatharth Taneja",
  description: "Created by Yatharth Taneja, a passionate builder and designer. Explore my portfolio to see my work and projects.",
icons: {
    icon: "/public/images/ytlogo.svg",
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
        {children}
      </body>
    </html>
  );
}
