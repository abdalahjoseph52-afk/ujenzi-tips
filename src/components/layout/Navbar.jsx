import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react'; 
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.plans, href: "/plans" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.guide, href: "/guide" }, 
    { name: t.nav.calc, href: "/calculator" },
    { name: t.nav.pros, href: "/pros" },
    { name: t.nav.resources, href: "/resources" },
    { name: t.nav.faq, href: "/faq" }
  ];

  return (
    // FIXED DARK HEADER
    <nav className="fixed top-10 left-0 w-full z-50 bg-ujenzi-dark border-b border-white/10 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center">
          <a href="/" className="block">
            <img 
              src={logo} 
              alt="Ujenzi Tips Logo" 
              className="h-28 w-auto object-contain hover:scale-105 transition-transform duration-300" 
            />
          </a>
        </div>

        {/* DESKTOP LINKS (Hidden on Mobile) */}
        <div className="hidden 2xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold text-slate-300 hover:text-ujenzi-accent uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

          {/* LANGUAGE */}
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase"
          >
            {lang === 'en' ? 'Swahili' : 'English'}
          </button>

          {/* CTA */}
          <a href="#contact">
            <Button variant="outline" className="scale-90">{t.nav.btn}</Button>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="2xl:hidden p-2 text-white hover:text-ujenzi-accent transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (Clean List Layout) */}
      {isOpen && (
        <div className="2xl:hidden absolute top-full left-0 w-full bg-ujenzi-dark border-t border-white/10 shadow-2xl overflow-y-auto max-h-[85vh]">
          <div className="flex flex-col p-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="flex justify-between items-center text-sm font-bold text-slate-300 py-3 border-b border-white/5 hover:text-ujenzi-accent hover:pl-2 transition-all"
              >
                {link.name}
                <ChevronRight size={16} className="opacity-50" />
              </a>
            ))}
            
            <div className="pt-6 flex flex-col gap-4">
              <button 
                onClick={toggleLanguage} 
                className="text-left text-sm font-bold text-slate-400 uppercase tracking-widest"
              >
                Change Language: <span className="text-white">{lang === 'en' ? 'Swahili' : 'English'}</span>
              </button>
              
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full justify-center">{t.nav.btn}</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;