"use client";

import { useState, useEffect } from "react";

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

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<"visible" | "exit" | "enter">(
    "visible"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: start exit animation
      setAnimState("exit");

      // Step 2: swap text mid-fade, then enter
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setAnimState("enter");
      }, 350);

      // Step 3: settle to visible
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
      className="absolute bottom-8 left-8"
      style={{ maxWidth: "540px" }}
    >
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.4rem, 4vw, 6rem)",
          lineHeight: "0.9",
          letterSpacing: "-0.01em",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          ...animStyle,
        }}
      >
        {/* First word(s) in Figma purple */}
        <span style={{ color: "#493972" }}>{current.highlight}</span>
        {/* Rest in near-black */}
        <span style={{ color: "#0C1713" }}>{current.rest}</span>
      </p>
    </div>
  );
}