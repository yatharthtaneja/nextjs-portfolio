'use client';

import { useEffect, useRef, useState } from 'react';

interface InteractiveNameProps {
  name: string;
  colorIndexes?: { [key: number]: string };
}

const fonts = [
  'font-family-hover-one',
  'font-family-hover-two',
];
const defaultFont = 'font-family-default';

export default function InteractiveName({ name, colorIndexes = {} }: InteractiveNameProps) {
  const [hoveredIndexes, setHoveredIndexes] = useState<{ [key: number]: boolean }>({});
  const [fontCycleIndexes, setFontCycleIndexes] = useState<{ [key: number]: number }>({});
  const intervalRefs = useRef<{ [key: number]: NodeJS.Timeout | null }>({});
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!canHover) return;
    setHoveredIndexes((prev) => ({ ...prev, [index]: true }));
    setFontCycleIndexes((prev) => ({ ...prev, [index]: 0 }));

    if (intervalRefs.current[index]) clearInterval(intervalRefs.current[index]!);

    intervalRefs.current[index] = setInterval(() => {
      setFontCycleIndexes((prev) => ({
        ...prev,
        [index]: ((prev[index] || 0) + 1) % fonts.length,
      }));
    }, 300);
  };

  const handleMouseLeave = (index: number) => {
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]!);
      intervalRefs.current[index] = null;
    }
    setHoveredIndexes((prev) => ({ ...prev, [index]: false }));
    setFontCycleIndexes((prev) => ({ ...prev, [index]: 0 }));
  };

  return (
    <div className="text-center font-bold font-family-default">
      <style>{`
        .interactive-name-letter {
          display: inline-block;
          transition: filter 140ms ease-out;
        }
        .interactive-name-letter[data-hovered="true"] {
          filter: blur(1.5px);
        }
        @media (prefers-reduced-motion: reduce) {
          .interactive-name-letter[data-hovered="true"] { filter: none; }
        }
      `}</style>
      {name.split('').map((letter, index) => {
        const hovered = !!hoveredIndexes[index];
        return (
          <span
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            data-hovered={hovered}
            className={`interactive-name-letter cursor-pointer ${
              hovered ? fonts[fontCycleIndexes[index] || 0] : defaultFont
            } ${colorIndexes[index] || ''}`}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}
