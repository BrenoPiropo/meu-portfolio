'use client';

import { useRef, useState, MouseEvent } from 'react';

type SkillCardProps = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  color: 'blue' | 'purple' | 'cyan';
  className?: string;
};

export default function SkillCard({ icon, title, description, tags, color, className = '' }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    blue: 'rgba(59,130,246,0.15)',
    purple: 'rgba(139,92,246,0.15)',
    cyan: 'rgba(6,182,212,0.15)'
  };

  const borderColors = {
    blue: 'group-hover:border-blue-500/30',
    purple: 'group-hover:border-purple-500/30',
    cyan: 'group-hover:border-cyan-500/30'
  };

  const bgColors = {
    blue: 'bg-blue-500/10 text-blue-400',
    purple: 'bg-purple-500/10 text-purple-400',
    cyan: 'bg-cyan-500/10 text-cyan-400'
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--glow-x', `${x}px`);
    cardRef.current.style.setProperty('--glow-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`card-glow group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/[0.06] transition-all duration-500 p-6 flex flex-col gap-4 ${borderColors[color]} ${className}`}
    >
      {/* Dynamic Glow effect overlay */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at var(--glow-x, 50%) var(--glow-y, 50%), ${colors[color]}, transparent 40%)`
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-500 group-hover:scale-110 ${bgColors[color]}`}>
          {icon}
        </div>
        
        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-[9px] font-mono uppercase bg-white/5 rounded-full text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
