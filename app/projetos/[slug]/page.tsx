"use client";

import { useParams, useRouter } from "next/navigation";
import { getProjeto } from "@/app/lib/projetos";
import { notFound } from "next/navigation";
import AnimatedSection from "@/app/components/AnimatedSection";
import CursorGlow from "@/app/components/CursorGlow";
import { useState } from "react";

export default function ProjetoPage() {
  const params = useParams();
  const router = useRouter();
  const projeto = getProjeto(params.slug as string);

  if (!projeto) {
    notFound();
  }

  const [showVideo, setShowVideo] = useState(false);

  return (
    <main id="conteudo-principal" className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 antialiased overflow-x-hidden">
      <CursorGlow />

      {/* AMBIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-[#050505]/60 border-b border-white/5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="group flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar
          </button>
          <button
            onClick={() => router.push("/")}
            className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors duration-300"
          >
            BP.
          </button>
        </div>
      </nav>

      <article className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-28">

        {/* HEADER */}
        <header className="mb-20">
          <AnimatedSection animation="fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider ${projeto.tagBg} ${projeto.tagColor} rounded-full`}>
                {projeto.tag}
              </span>
              <span className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">Case Study</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tight mb-8 leading-[0.95] bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
              {projeto.nome}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl text-gray-400 leading-[1.7] max-w-2xl font-light">
              {projeto.overview}
            </p>
          </AnimatedSection>
        </header>

        {/* VIDEO */}
        <AnimatedSection animation="scale-in" delay={300}>
          <div className={`aspect-video bg-[#0a0a0a] rounded-3xl border ${projeto.borderColor} overflow-hidden mb-20 relative group transition-all duration-500 hover:shadow-lg`}>
            {showVideo ? (
              <iframe
                width="100%"
                height="100%"
                src={`${projeto.videoUrl}?autoplay=1`}
                title={`Demonstração do ${projeto.nome}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex w-full items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400"
                aria-label={`Assistir à demonstração do ${projeto.nome}`}
              >
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span className="absolute bottom-6 text-xs text-white/50 font-mono uppercase tracking-widest">
                  Clique para assistir
                </span>
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* O PROBLEMA */}
        <AnimatedSection animation="fade-up">
          <section className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/60 mb-4 block">Contexto</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-8">O Problema</h2>
            <p className="text-gray-400 leading-[1.9] text-[17px]">
              {projeto.problema}
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <section className="mb-20 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
              <span className="mb-2 block text-[9px] font-mono uppercase tracking-[0.25em] text-white/30">Meu papel</span>
              <p className="text-sm leading-6 text-white/70">{projeto.role}</p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
              <span className="mb-2 block text-[9px] font-mono uppercase tracking-[0.25em] text-white/30">Status</span>
              <p className="text-sm leading-6 text-white/70">{projeto.status}</p>
            </div>
          </section>
        </AnimatedSection>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* A SOLUÇÃO */}
        <AnimatedSection animation="fade-up">
          <section className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/60 mb-4 block">Estratégia</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-8">A Solução</h2>
            <p className="text-gray-400 leading-[1.9] text-[17px]">
              {projeto.solucao}
            </p>
          </section>
        </AnimatedSection>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* ARQUITETURA */}
        <section className="mb-20">
          <AnimatedSection animation="fade-up">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/60 mb-4 block">Engenharia</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-12">Arquitetura Técnica</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {projeto.arquitetura.map((item, index) => (
              <AnimatedSection key={index} animation="slide-left" delay={index * 100}>
                <div className="group relative p-8 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl hover:border-white/10 transition-all duration-500 hover:bg-[#0c0c0c]">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-xl text-blue-400 font-mono text-sm font-bold group-hover:bg-blue-500/15 group-hover:scale-110 transition-all duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-3 uppercase text-xs tracking-[0.15em]">{item.titulo}</h3>
                      <p className="text-gray-500 leading-[1.8] text-[15px] group-hover:text-gray-400 transition-colors">{item.descricao}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* STACK */}
        <AnimatedSection animation="fade-up">
          <section className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/60 mb-4 block">Tecnologias</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-10">Stack Utilizada</h2>

            <div className="flex flex-wrap gap-3">
              {projeto.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 text-[11px] font-mono uppercase tracking-wider bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* DESAFIOS */}
        <section className="mb-20">
          <AnimatedSection animation="fade-up">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/60 mb-4 block">Batalhas</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-12">Desafios &amp; Soluções</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {projeto.desafios.map((desafio, index) => (
              <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                <div className="group relative p-8 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl hover:border-red-500/10 transition-all duration-500 hover:bg-[#0c0c0c]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-500/10 rounded-lg group-hover:bg-red-500/15 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <h3 className="font-bold text-white uppercase text-xs tracking-[0.15em] pt-1.5">{desafio.titulo}</h3>
                  </div>
                  <p className="text-gray-500 leading-[1.8] text-[15px] pl-12 group-hover:text-gray-400 transition-colors">{desafio.descricao}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* APRENDIZADOS */}
        <AnimatedSection animation="fade-up">
          <section className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/60 mb-4 block">Reflexões</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-10">O que Aprendi</h2>

            <div className="space-y-6">
              {projeto.aprendizados.map((aprendizado, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-emerald-500/10 rounded-full mt-0.5 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-gray-400 leading-[1.8] text-[16px] group-hover:text-gray-300 transition-colors">{aprendizado}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* RESULTADO */}
        <AnimatedSection animation="scale-in">
          <section className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/60 mb-4 block">Impacto</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-8">Resultados</h2>
            <div className="p-10 bg-gradient-to-br from-blue-500/[0.04] to-purple-500/[0.02] border border-blue-500/10 rounded-3xl hover:border-blue-500/20 transition-all duration-500">
              <p className="text-gray-300 leading-[1.9] text-[17px]">
                {projeto.resultado}
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-wrap gap-4 justify-center pt-10">
            {projeto.githubUrl && (
              <a
                href={projeto.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 uppercase text-[10px] tracking-[0.2em]"
              >
                <svg className="w-[18px] h-[18px] group-hover:rotate-[360deg] transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                {projeto.githubBackendUrl ? "GitHub Frontend" : "Ver no GitHub"}
              </a>
            )}
            {projeto.githubBackendUrl && (
              <a
                href={projeto.githubBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] border border-white/10 text-white font-bold rounded-2xl hover:scale-[1.03] hover:border-white/25 hover:bg-[#111] transition-all duration-300 uppercase text-[10px] tracking-[0.2em]"
              >
                GitHub Backend
              </a>
            )}
            {projeto.documentationUrl && (
              <a
                href={projeto.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/20 text-blue-300 font-bold rounded-2xl hover:scale-[1.03] hover:border-blue-500/40 hover:bg-blue-500/15 transition-all duration-300 uppercase text-[10px] tracking-[0.2em]"
              >
                Documentação
              </a>
            )}
            <button
              onClick={() => router.push("/")}
              className="group flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] border border-white/10 text-white font-bold rounded-2xl hover:scale-[1.03] hover:border-white/25 hover:bg-[#111] transition-all duration-300 uppercase text-[10px] tracking-[0.2em]"
            >
              <svg className="w-[18px] h-[18px] group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Voltar ao Portfólio
            </button>
          </div>
        </AnimatedSection>

      </article>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-white/5 relative z-10">
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.3em]">© 2026 Breno Piropo. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
