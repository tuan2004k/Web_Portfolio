// components/CustomCursor.tsx
'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateCursor = (e: MouseEvent) => {
      // Sử dụng requestAnimationFrame để mượt hơn
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handlePointerCheck = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handlePointerCheck);

    document.body.style.cursor = 'none';

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handlePointerCheck);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor - Đơn giản hóa để performance tốt hơn */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`transition-all duration-150 ${isPointer ? 'scale-125' : 'scale-100'}`}>
          {/* React Logo đơn giản - không animation phức tạp */}
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-70"></div>
            <div className="absolute inset-1 border border-teal-400 rounded-full opacity-50"></div>
            <div className={`absolute inset-2 bg-cyan-400 rounded-full transition-all duration-200 ${
              isPointer ? 'scale-125 bg-teal-400' : 'scale-100'
            }`}></div>
          </div>
        </div>
      </div>

      {/* Trail đơn giản - chỉ hiển thị khi cần */}
      {isPointer && (
        <div
          className="fixed pointer-events-none z-40 transition-all duration-200 ease-out"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="text-cyan-400 text-xs font-mono bg-slate-800/80 px-2 py-1 rounded border border-cyan-400/30">
            Click!
          </div>
        </div>
      )}
    </>
  );
}