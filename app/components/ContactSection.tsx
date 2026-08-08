import AnimatedSection from './AnimatedSection';
import { Download } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contato" className="max-w-5xl mx-auto px-6 py-32 text-center">
      <AnimatedSection>
        <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em] mb-4 block">
          Contato
        </span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-12 leading-relaxed">
          Estou aberto a novos projetos e oportunidades. Entre em contato e vamos transformar sua ideia em produto.
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-16">
          <a 
            href="mailto:brenopiropo14@gmail.com" 
            className="group text-2xl md:text-3xl font-mono text-blue-400 hover:text-blue-300 transition-all hover:tracking-wide font-medium inline-flex items-center gap-3"
          >
            brenopiropo14@gmail.com
            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <p className="text-gray-600 text-sm tracking-widest uppercase font-mono">
            (73) 9 8864-0435 <span className="mx-3 text-gray-700">|</span> Ilhéus, Bahia
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/BrenoPiropo"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.03]"
          >
            <GithubIcon size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">GitHub</span>
          </a>

          <a
            href="/Curriculo_Breno_Piropo.pdf"
            download="Curriculo_Breno_Piropo.pdf"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-[1.03]"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            <span className="text-sm font-bold uppercase tracking-wider">Baixar CV</span>
          </a>

          <a
            href="https://www.linkedin.com/in/breno-piropo-29567921b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.03]"
          >
            <LinkedinIcon size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">LinkedIn</span>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
