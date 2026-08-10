'use client';

import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  const interesses = [
    { name: 'IA', icon: '🤖', color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400' },
    { name: 'Desenvolvimento', icon: '💻', color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400' },
    { name: 'Tecnologia', icon: '⚡', color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400' },
    { name: 'Ciência', icon: '🔬', color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400' },
    { name: 'Dados', icon: '📊', color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400' },
  ];

  return (
    <section id="sobre" className="max-w-6xl mx-auto px-6 py-32">
      <AnimatedSection className="mb-16">
        <span className="text-[10px] font-mono text-purple-500 uppercase tracking-[0.3em] mb-4 block">
          Sobre
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          Quem eu sou
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection delay={200} className="flex flex-col justify-center">
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Sou estudante de <span className="text-blue-400 font-medium">Ciência da Computação</span> na UESC, focado em construir produtos digitais de alto impacto. Minha paixão é aliar <span className="text-blue-400 font-medium">experiência de usuário</span> impecável com engenharia de software robusta, transformando ideias complexas em interfaces intuitivas.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              Aberto a oportunidades
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/55">
              Bahia · Brasil · UTC−3
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/55">
              Remoto ou híbrido
            </span>
          </div>
          
          <div className="relative pl-6 border-l border-white/10 space-y-6 mt-4">
            <div className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-black" />
              <p className="text-sm text-gray-400"><span className="text-white font-bold">Ciência da Computação</span> — UESC (Atual)</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-white/20 ring-4 ring-black" />
              <p className="text-sm text-gray-400">Projetos Full Stack independentes</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-white/20 ring-4 ring-black" />
              <p className="text-sm text-gray-400">Foco em <span className="text-white font-medium">React Native</span> + <span className="text-white font-medium">NestJS</span></p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="flex flex-col justify-center">
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Interesses
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interesses.map((item, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border backdrop-blur-sm flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default ${
                  index === interesses.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <span className="text-base font-bold tracking-wide text-white block">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
