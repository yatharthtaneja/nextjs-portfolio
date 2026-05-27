"use client";
import { Roboto } from "next/font/google";
import { useState, useEffect, useRef } from "react";

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

const CYCLE_MS = 4500;
const EXIT_MS = 200;
const ENTER_MS = 350;

export default function RotatingTagline({ mobile = false }: { mobile?: boolean }) {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<"visible" | "exit" | "enter">("visible");
  const [paused, setPaused] = useState(false);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setAnimState("exit");
      exitTimer.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setAnimState("enter");
        // Double-rAF ensures the "enter" state is painted before the browser
        // begins transitioning to "visible" — otherwise the entry can snap.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimState("visible"));
        });
      }, EXIT_MS);
    }, CYCLE_MS);
    return () => {
      clearInterval(interval);
      if (exitTimer.current) clearTimeout(exitTimer.current);
    };
  }, [paused]);

  const current = taglines[index];

  // Exit: opacity-only, quick. Enter: opacity + translate, with confidence curve.
  const animStyle: React.CSSProperties =
    animState === "exit"
      ? {
          opacity: 0,
          transform: "translateY(0)",
          transition: `opacity ${EXIT_MS}ms ease-in`,
        }
      : animState === "enter"
      ? {
          opacity: 0,
          transform: "translateY(-8px)",
          transition: "none",
        }
      : {
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity ${ENTER_MS}ms cubic-bezier(0.23, 1, 0.32, 1), transform ${ENTER_MS}ms cubic-bezier(0.23, 1, 0.32, 1)`,
        };

  return (
    <div
      className={roboto.className}
      onMouseEnter={() => {
        setPaused(true);
        // If we paused mid-transition, snap back to the visible state so the
        // hovered text doesn't stay hidden.
        setAnimState("visible");
      }}
      onMouseLeave={() => setPaused(false)}
      style={{
        maxWidth: "540px",
        ...(mobile
          ? {}
          : { position: "absolute", bottom: 32, left: 32 }),
      }}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: mobile
            ? "clamp(1.1rem, 5.5vw, 1.6rem)"
            : "clamp(1.4rem, 4vw, 4rem)",
          lineHeight: "0.9",
          letterSpacing: "-0.01em",
          ...animStyle,
        }}
      >
        <span style={{ color: "#493972" }}>{current.highlight}</span>
        <span style={{ color: "#0C1713" }}>{current.rest}</span>
      </p>
    </div>
  );
}
