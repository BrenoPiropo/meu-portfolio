'use client';

import { useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import ProjectsPagination from './ProjectsPagination';
import { projetos } from '@/app/lib/projetos';

const PROJECTS_PER_PAGE = 4;

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const totalPages = Math.ceil(projetos.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = projetos.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    setCurrentPage(page);
    window.setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  return (
    <section ref={sectionRef} id="projetos" className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-4 block text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400">
                Portfólio
              </span>
              <h2 className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
                Projetos em destaque
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-right">
              Produtos mobile e experiências full stack apresentados com contexto, decisões técnicas e aprendizados reais.
            </p>
          </div>
        </AnimatedSection>

        <div
          key={currentPage}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 motion-safe:animate-[fadeUp_450ms_ease-out_both]"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <ProjectsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
