'use client';

import { useState, useRef, MouseEvent } from 'react';
import { Play } from 'lucide-react';

type ProjectCardProps = {
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  videoUrl: string;
  imageUrl?: string;
  slug: string;
  accentColor: string;
  hashtags: string[];
  index: number;
};

export default function ProjectCard({
  name, tag, tagColor, description, videoUrl, imageUrl, accentColor, hashtags
}: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 300ms ease-out'
    });
  };

  // Convert youtube watch/shorts URL to embed URL if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/shorts/')) {
      const parts = url.split('youtube.com/shorts/');
      const videoId = parts[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = new URL(url).searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtube.com/embed/')) {
      return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
    }
    return url;
  };

  return (
    <div 
      className="group rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06] flex flex-col h-full transition-all duration-500 hover:border-white/20 relative"
      style={{
        ...tiltStyle,
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          boxShadow: `0 0 40px ${accentColor}15, inset 0 0 0 1px ${accentColor}30`,
        }}
      />
      <div 
        className="w-full aspect-video relative overflow-hidden cursor-pointer z-10 bg-[#050505]"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <div className="absolute inset-0 overflow-hidden">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-center justify-center transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40 shadow-xl">
                <Play className="text-white fill-white ml-1" size={24} />
              </div>
            </div>
          </div>
        ) : (
          <iframe 
            src={getEmbedUrl(videoUrl)} 
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold uppercase tracking-wide">{name}</h3>
          <span className={`px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full bg-white/5 ${tagColor}`}>
            {tag}
          </span>
        </div>

        <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2 font-mono text-[10px]">
            {hashtags.map((ht, i) => (
              <span key={i} style={{ color: accentColor, opacity: 0.7 }}>
                {ht}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
