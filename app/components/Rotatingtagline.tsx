"use client";
import { Roboto } from "next/font/google";
import { useState, useEffect } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const taglines = [
  {
    highlight: "a partner",
    rest: " shipping enterprise products from concept to launch.",
  },
  {
    highlight: "a researcher",
    rest: " with 4+ years of mixed-methods UX and a CS core",
  },
  {
    highlight: "a builder",
    rest: " of tools generating $2M+ quarterly revenue for MathWorks.",
  },
];

// ✅ ADD: mobile prop — when true, renders as flow element (no absolute positioning)
export default function RotatingTagline({ mobile = false }: { mobile?: boolean }) {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<"visible" | "exit" | "enter">("visible");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("exit");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setAnimState("enter");
      }, 350);
      setTimeout(() => {
        setAnimState("visible");
      }, 700);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = taglines[index];

  const animStyle: React.CSSProperties =
    animState === "exit"
      ? { opacity: 0, transform: "translateY(10px)" }
      : animState === "enter"
      ? { opacity: 0, transform: "translateY(-10px)" }
      : { opacity: 1, transform: "translateY(0px)" };

  return (
    <div
      className={roboto.className}
      style={{
        maxWidth: "540px",
        // ✅ CHANGE: absolute on desktop, static flow on mobile
        ...(mobile
          ? {}
          : { position: "absolute", bottom: 32, left: 32 }),
      }}
    >
      <p
        style={{
          fontWeight: 700,
          // ✅ CHANGE: smaller clamp on mobile so it fits the card
          fontSize: mobile
            ? "clamp(1.1rem, 5.5vw, 1.6rem)"
            : "clamp(1.4rem, 4vw, 6rem)",
          lineHeight: "0.9",
          letterSpacing: "-0.01em",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          ...animStyle,
        }}
      >
        <span style={{ color: "#493972" }}>{current.highlight}</span>
        <span style={{ color: "#0C1713" }}>{current.rest}</span>
      </p>
    </div>
  );
}