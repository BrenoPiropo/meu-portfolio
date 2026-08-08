'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from './AnimatedSection';
import { Download, Send, CheckCircle2 } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build mailto link as direct fallback
    const subject = encodeURIComponent(formData.assunto || `Contato de ${formData.nome} via Portfólio`);
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:brenopiropo14@gmail.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contato" className="max-w-5xl mx-auto px-6 py-32 text-center">
      <AnimatedSection>
        <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em] mb-4 block">
          Contato
        </span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-14 leading-relaxed font-light">
          Preencha o formulário abaixo ou entre em contato diretamente. Responderei o mais rápido possível!
        </p>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-[#0a0a0a] border border-white/[0.08] rounded-3xl p-8 md:p-12 text-left mb-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] pointer-events-none" />

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Mensagem Preparada!</h3>
              <p className="text-sm text-gray-400 max-w-sm">
                Seu leitor de e-mail foi aberto para confirmar o envio para <span className="text-blue-400 font-mono">brenopiropo14@gmail.com</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-mono uppercase tracking-widest text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Assunto / Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ex: Oportunidade de Projeto / Vaga"
                  value={formData.assunto}
                  onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Sua Mensagem *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group flex items-center justify-center gap-3 py-4 px-8 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl uppercase text-xs tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contacts & Links */}
        <div className="flex flex-col items-center gap-4 mb-14">
          <p className="text-gray-500 text-xs tracking-widest uppercase font-mono">
            E-mail: <span className="text-gray-300">brenopiropo14@gmail.com</span>
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
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.03]"
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
