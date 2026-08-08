'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = {
    'fade-up': 'animate-fade-up',
    'fade-in': 'animate-fade-in',
    'scale-in': 'animate-scale-in',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
  }[animation];

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
