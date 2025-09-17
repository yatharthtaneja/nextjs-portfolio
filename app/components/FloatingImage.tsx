// File: components/FloatingImage.js

'use client'; // This MUST be a client component for animations and hover events

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function FloatingImage({
  imageUrl,
  alt,
  annotation,
  className, // For custom positioning
  animationDelay = 0,
  initialRotation = 0,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // PARENT: Handles hover effects and positioning ONLY.
      whileHover={{ scale: 1.1, rotate: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`absolute cursor-pointer ${className}`} // Positioning class stays on the parent
    >
      <motion.div
        // CHILD: Handles the continuous floating animation.
        initial={{ rotate: initialRotation }}
        animate={{ y: ['-5%', '5%'] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: animationDelay,
        }}
      >
        <Image src={imageUrl} alt={alt} width={150} height={150} className="w-full h-auto" />
      </motion.div>

      {/* The annotation logic remains the same and correctly tied to the parent's hover state */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-sm text-black shadow-lg"
          >
            {annotation}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}