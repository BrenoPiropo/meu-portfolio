'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Only show on non-touch, wide screens
    const mq = window.matchMedia('(min-width: 768px) and (hover: hover)');
    if (!mq.matches) {
      el.style.display = 'none';
      return;
    }

    let animFrame: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      el.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, rgba(59,130,246,0.04), transparent 40%)`;
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
