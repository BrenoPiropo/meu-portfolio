import { ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.3em]">
          © 2026 Breno Piropo
        </p>
        
        <Link 
          href="#top" 
          className="flex items-center gap-2 text-[10px] text-gray-500 hover:text-white uppercase tracking-[0.2em] transition-colors"
        >
          Voltar ao topo
          <ArrowUp size={14} />
        </Link>
      </div>
    </footer>
  );
}
