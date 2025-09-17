import React from "react";

interface OverlappingTitleProps {
  text: string;
  sizeClass?: string;      // e.g. "text-3xl"
  positionClass?: string;  // e.g. "left-1/2 top-1/3"
  rotationClass?: string;  // e.g. "rotate-[8deg]"
  className?: string;      // for any extra classes
  style?: React.CSSProperties;
}

const OverlappingTitle: React.FC<OverlappingTitleProps> = ({
  text,
  sizeClass = "text-3xl",
  positionClass = "left-1/2 top-1/3",
  rotationClass = "rotate-[8deg]",
  className = "",
  style = {},
}) => (
  <div
    className={`
      absolute
      ${positionClass}
      -translate-x-1/2
      -translate-y-full
      z-20
      ${sizeClass}
      font-extrabold
      tracking-wider
      maroontext
      font-family-hover-three
      ${rotationClass}
      pointer-events-none
      select-none
      ${className}
    `}
    style={{ whiteSpace: "nowrap", ...style }}
  >
    {text}
  </div>
);

export default OverlappingTitle;