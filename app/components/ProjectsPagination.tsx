'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProjectsPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function ProjectsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectsPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-12 flex flex-col items-center gap-4" aria-label="Paginação dos projetos">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35" aria-live="polite">
        Página {currentPage} de {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-control"
          aria-label="Ir para a página anterior"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-2" aria-label="Páginas disponíveis">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const active = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={`pagination-page ${active ? 'pagination-page-active' : ''}`}
                aria-label={`Ir para a página ${page}`}
                aria-current={active ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-control"
          aria-label="Ir para a próxima página"
        >
          <span className="hidden sm:inline">Próximo</span>
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
