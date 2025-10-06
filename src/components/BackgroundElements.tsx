
'use client';

import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface BackgroundElementsProps {
  isMounted: boolean;
  isMobile: boolean;
}

function BackgroundElements({ isMounted, isMobile }: BackgroundElementsProps) {
  const shouldReduceMotion = useReducedMotion();
  if (!isMounted || shouldReduceMotion) return null;

  const particleCount = isMobile ? 8 : 15;

  const Orb = ({ id, position, size, color, duration }: any) => (
    <motion.div
      key={`orb-${id}`}
      className={`fixed ${position} ${size} ${color} rounded-full blur-3xl`}
      style={{ willChange: 'transform, opacity' }}
      animate={
        isMobile
          ? { opacity: [0.1, 0.2, 0.1] }
          : { y: [0, -25, 0], opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }
      }
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  );

  const Particle = ({ id }: any) => {
    const size = Math.random() * 2 + 0.5;
    return (
      <motion.div
        key={`particle-${id}`}
        className="fixed rounded-full pointer-events-none z-0 bg-cyan-300/20"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          willChange: 'transform, opacity',
        }}
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1], y: [0, -4, 0] }}
        transition={{ duration: 2.5, delay: id * 0.1, repeat: Infinity, ease: 'easeInOut' }}
      />
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {!isMobile && [...Array(particleCount)].map((_, i) => <Particle key={`particle-${i}`} id={i} />)}
      <Orb
        id="orb-1"
        position="top-1/4 -left-10"
        size={isMobile ? 'w-56 h-56' : 'w-72 h-72'}
        color="bg-cyan-300/15"
        duration={isMobile ? 6 : 12}
      />
      <Orb
        id="orb-2"
        position="bottom-1/4 -right-10"
        size={isMobile ? 'w-56 h-56' : 'w-64 h-64'}
        color="bg-teal-300/15"
        duration={isMobile ? 8 : 10}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-700/5 via-transparent to-teal-700/5" />
    </div>
  );
}

export default memo(BackgroundElements);