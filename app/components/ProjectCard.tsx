'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Play } from 'lucide-react';
import { useState } from 'react';
import type { Projeto } from '@/app/lib/projetos';

type ProjectCardProps = {
  project: Projeto;
};

function getEmbedUrl(url: string) {
  if (url.includes('youtube.com/shorts/')) {
    const videoId = url.split('youtube.com/shorts/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  if (url.includes('youtube.com/watch?v=')) {
    const videoId = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  return `${url}${url.includes('?') ? '&' : '?'}autoplay=1`;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="project-card group">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#080808]">
        {isPlaying ? (
          <iframe
            src={getEmbedUrl(project.videoUrl)}
            title={`Demonstração do projeto ${project.nome}`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={`Identidade visual do projeto ${project.nome}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400"
              aria-label={`Assistir à demonstração do projeto ${project.nome}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-2xl backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/15">
                <Play size={21} className="ml-0.5 fill-current" aria-hidden="true" />
              </span>
            </button>
          </>
        )}

        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2">
          {project.featured && (
            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-md">
              Destaque
            </span>
          )}
          <span className={`rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] backdrop-blur-md ${project.tagColor}`}>
            {project.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-5">
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.18em] text-white/35">
            {project.status}
          </p>
          <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-white sm:text-[1.75rem]">
            {project.nome}
          </h3>
        </div>

        <p className="mb-6 line-clamp-3 text-sm leading-7 text-white/55">
          {project.overview}
        </p>

        <ul className="mb-7 flex flex-wrap gap-2" aria-label={`Destaques do ${project.nome}`}>
          {project.highlights.map((highlight) => (
            <li key={highlight} className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wide text-white/50">
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/projetos/${project.slug}`} className="project-primary-link">
            <BookOpen size={15} aria-hidden="true" />
            Ver estudo de caso
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-secondary-link"
            >
              Código
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
