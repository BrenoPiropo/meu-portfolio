'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-black/60 backdrop-blur-xl border-b border-white/5'
          : 'py-4 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors"
        >
          BP.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-white'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors block py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
