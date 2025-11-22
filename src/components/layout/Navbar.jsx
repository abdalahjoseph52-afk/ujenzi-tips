import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.consultation, href: "#contact" }, 
    { name: t.nav.team, href: "#team" }, 
    { name: t.nav.blog, href: "#blog" } 
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-ujenzi-dark/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* BRAND LOGO - MASSIVE SIZE UPDATE */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Ujenzi Tips Logo" 
            // CHANGED: h-20 -> h-32 (Much Bigger)
            className="h-40 w-auto object-contain hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-ujenzi-accent uppercase tracking-wider transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-ujenzi-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* LANGUAGE SWITCHER */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 text-xs font-bold hover:bg-white/5 transition-colors"
          >
            <span className={lang === 'en' ? 'text-ujenzi-accent' : 'text-slate-500'}>EN</span>
            <span className="text-slate-500">|</span>
            <span className={lang === 'sw' ? 'text-ujenzi-accent' : 'text-slate-500'}>SW</span>
          </button>

          <a href="#contact">
            <Button variant="outline">{t.nav.btn}</Button>
          </a>
        </div>

        <button className="md:hidden text-white hover:text-ujenzi-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ujenzi-dark border-b border-ujenzi-accent/20 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-white py-3 border-b border-white/5 hover:text-ujenzi-accent hover:pl-2 transition-all">
              {link.name}
            </a>
          ))}
          <button onClick={toggleLanguage} className="text-left text-slate-400 font-bold">
            Change Language: <span className="text-ujenzi-accent">{lang === 'en' ? 'Swahili' : 'English'}</span>
          </button>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full mt-4">{t.nav.btn}</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;