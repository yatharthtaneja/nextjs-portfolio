'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface FloatingImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
  animationDelay?: number;
  initialRotation?: number;
}

const FloatingImage: React.FC<FloatingImageProps> = ({
  imageUrl,
  alt,
  className = "",
  animationDelay = 0,
  initialRotation = 0,
}) => {
  // Hover only fires on pointer-fine devices. On touch, taps would otherwise
  // leave the stamp stuck mid-hover with no way to release.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return (
    <motion.div
      whileHover={canHover ? { scale: 1.06, rotate: 4 } : undefined}
      whileTap={canHover ? { scale: 0.97 } : undefined}
      className={`absolute cursor-pointer ${className}`}
    >
      <style>{`
        @keyframes floating-stamp {
          0%, 100% { transform: translateY(-5%); }
          50%      { transform: translateY(5%); }
        }
        .floating-stamp-inner {
          animation: floating-stamp 3s linear infinite alternate;
          will-change: transform;
        }
      `}</style>
      <div style={{ transform: `rotate(${initialRotation}deg)` }}>
        <div
          className="floating-stamp-inner"
          style={{ animationDelay: `${animationDelay}s` }}
        >
          <Image src={imageUrl} alt={alt} width={150} height={150} className="w-full h-auto" />
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingImage;
