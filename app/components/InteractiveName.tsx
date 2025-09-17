// File: components/InteractiveName.js

'use client';

import { useState, useRef } from 'react';

interface InteractiveNameProps {
  name: string;
  colorIndexes?: { [key: number]: string };
}

const fonts = [
  'font-family-hover-one',
  'font-family-hover-two',
  'font-family-hover-three'
];
const defaultFont = 'font-family-default';

export default function InteractiveName({ name, colorIndexes = {} }: InteractiveNameProps) {
  const [hoveredIndexes, setHoveredIndexes] = useState<{ [key: number]: boolean }>({});
  const [fontCycleIndexes, setFontCycleIndexes] = useState<{ [key: number]: number }>({});
  const intervalRefs = useRef<{ [key: number]: NodeJS.Timeout | null }>({});
  const timeoutRefs = useRef<{ [key: number]: NodeJS.Timeout | null }>({});

  const handleMouseEnter = (index: number) => {
    setHoveredIndexes((prev) => ({ ...prev, [index]: true }));
    setFontCycleIndexes((prev) => ({ ...prev, [index]: 0 }));

    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]!);
      timeoutRefs.current[index] = null;
    }
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
    // Wait 2 seconds before resetting
    timeoutRefs.current[index] = setTimeout(() => {
      setHoveredIndexes((prev) => ({ ...prev, [index]: false }));
      setFontCycleIndexes((prev) => ({ ...prev, [index]: 0 }));
    }, 2000);
  };

  return (
    <div className="text-center font-bold font-family-default">
      {name.split('').map((letter, index) => (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={`cursor-pointer transition-all duration-300 ${
            hoveredIndexes[index] ? fonts[fontCycleIndexes[index] || 0] : defaultFont
          } ${colorIndexes[index] || ''}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}