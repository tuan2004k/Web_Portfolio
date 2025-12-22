
'use client';

import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface WaterEffectsProps {
  isMounted: boolean;
  isMobile: boolean;
}

function WaterEffects({ isMounted, isMobile }: WaterEffectsProps) {
  const shouldReduceMotion = useReducedMotion();
  if (!isMounted || shouldReduceMotion) return null;

  const effectCount = isMobile
    ? { waves: 2, smallWaves: 3, drops: 5, bubbles: 4, reflections: 2 }
    : { waves: 4, smallWaves: 5, drops: 8, bubbles: 6, reflections: 3 };

  // Reusable Wave Component
  const Wave = ({ id, size, scaleFactor = 3.5, className }: any) => {
    const duration = 8 + Math.random() * 4;
    return (
      <motion.div
        key={`wave-${id}`}
        className={`fixed pointer-events-none z-5 rounded-full ${className}`}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          willChange: 'transform, opacity',
        }}
        animate={{
          scale: [0, scaleFactor],
          opacity: [0.4, 0],
          translateX: [0, Math.random() * 15 - 7.5],
          translateY: [0, Math.random() * 15 - 7.5],
        }}
        transition={{
          duration,
          delay: id * 0.8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeOut',
        }}
      />
    );
  };

  // Reusable Drop Component
  const Drop = ({ id }: any) => {
    const duration = 1.2 + Math.random() * 0.8;
    return (
      <motion.div
        key={`drop-${id}`}
        className="fixed pointer-events-none z-5"
        style={{ top: '-10%', left: `${Math.random() * 100}%`, willChange: 'transform, opacity' }}
        animate={{ y: ['0vh', '100vh'], opacity: [0, 0.7, 0.5, 0] }}
        transition={{
          duration,
          delay: id * 0.3,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: 'easeInOut',
        }}
      >
        <div className="relative">
          <div className="w-1 h-2 bg-cyan-300/70 rounded-full blur-[0.5px]" />
          <motion.div
            className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-300/30 rounded-full blur-sm"
            animate={{ scale: [0, 2, 0], opacity: [0.4, 0] }}
            transition={{ duration: 0.4, delay: duration * 0.7, repeat: Infinity, ease: 'easeOut' }}
          />
        </div>
      </motion.div>
    );
  };

  // Reusable Bubble Component
  const Bubble = ({ id }: any) => {
    const size = 8 + Math.random() * 10;
    const duration = 3.5 + Math.random() * 1.5;
    return (
      <motion.div
        key={`bubble-${id}`}
        className="fixed pointer-events-none z-5 rounded-full bg-cyan-300/50 blur-[1.5px]"
        style={{
          top: `${90 + Math.random() * 10}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: '0 0 6px rgba(45, 212, 191, 0.4)',
          willChange: 'transform, opacity',
        }}
        animate={{
          y: [0, -window.innerHeight - 20],
          x: [0, Math.random() * 25 - 12.5],
          opacity: [0, 0.6, 0.4, 0],
          scale: [1, 1.4, 0.8],
          rotate: [0, Math.random() * 15 - 7.5],
        }}
        transition={{
          duration,
          delay: id * 0.3,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-200/30 to-teal-300/20 blur-[2px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    );
  };

  // Reusable Reflection Component
  const Reflection = ({ id }: any) => {
    const width = 80 + Math.random() * 100;
    const height = 12 + Math.random() * 6;
    return (
      <motion.div
        key={`reflection-${id}`}
        className="fixed pointer-events-none z-5 bg-gradient-to-r from-transparent via-cyan-300/5 to-transparent blur-sm"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${width}px`,
          height: `${height}px`,
          transform: 'rotate(45deg)',
          willChange: 'transform, opacity',
        }}
        animate={{ x: [0, 150], opacity: [0, 0.15, 0] }}
        transition={{
          duration: 2.5 + Math.random() * 1.5,
          delay: id * 0.8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeInOut',
        }}
      />
    );
  };

  const waveSize = isMobile ? 120 : 200;
  const smallWaveSize = isMobile ? 50 : 80;

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {[...Array(effectCount.waves)].map((_, i) => (
        <Wave key={`wave-${i}`} id={i} size={waveSize} className="border-2 border-teal-300/25" />
      ))}
      {[...Array(effectCount.smallWaves)].map((_, i) => (
        <Wave
          key={`small-wave-${i}`}
          id={i}
          size={smallWaveSize}
          scaleFactor={4}
          className="border border-cyan-300/35"
        />
      ))}
      {[...Array(effectCount.drops)].map((_, i) => (
        <Drop key={`drop-${i}`} id={i} />
      ))}
      {[...Array(effectCount.bubbles)].map((_, i) => (
        <Bubble key={`bubble-${i}`} id={i} />
      ))}
      {[...Array(effectCount.reflections)].map((_, i) => (
        <Reflection key={`reflection-${i}`} id={i} />
      ))}
    </div>
  );
}

export default memo(WaterEffects);
