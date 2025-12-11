import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'; 
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

  // --- GROUPING THE LINKS ---
  
  // 1. Standalone High-Value Links
  const mainLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.plans, href: "/plans" },
    { name: t.nav.order, href: "/order" },
    { name: t.nav.pros, href: "/pros" },
    { name: t.nav.services, href: "/services" },
  ];

  // 2. "Tools" Dropdown Group
  const toolLinks = [
    { name: t.nav.calc, href: "/calculator" },
    { name: t.nav.budget, href: "/budget" },
    { name: t.nav.convert, href: "/converter" },
  ];

  // 3. "Resources" Dropdown Group
  const resourceLinks = [
    { name: t.nav.guide, href: "/guide" },
    { name: t.nav.resources, href: "/resources" },
    { name: t.nav.faq, href: "/faq" },
  ];

  // Helper for Mobile Menu Links
  const MobileLink = ({ href, children }) => (
    <a 
      href={href} 
      onClick={() => setIsOpen(false)} 
      className="flex justify-between items-center text-sm font-bold text-slate-300 py-4 border-b border-white/5 hover:text-ujenzi-accent hover:pl-2 transition-all"
    >
      {children}
      <ChevronRight size={16} className="opacity-50" />
    </a>
  );

  return (
    <nav className={`fixed top-10 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-ujenzi-dark/95 backdrop-blur-md py-2 shadow-lg' : 'bg-ujenzi-dark/50 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center">
          <a href="/">
            <img 
              src={logo} 
              alt="Ujenzi Tips Logo" 
              className="h-24 md:h-28 w-auto object-contain hover:scale-105 transition-transform duration-300" 
            />
          </a>
        </div>

        {/* --- DESKTOP MENU (With Dropdowns) --- */}
        {/* Changed '2xl:flex' to 'xl:flex' so it shows on laptops */}
        <div className="hidden xl:flex items-center gap-6">
          
          {/* Main Links */}
          {mainLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold text-slate-300 hover:text-ujenzi-accent uppercase tracking-widest transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-ujenzi-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Tools Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-ujenzi-accent uppercase tracking-widest transition-colors py-4">
              Tools <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 w-48 bg-ujenzi-card border border-white/10 shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {toolLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-6 py-3 text-xs text-slate-300 hover:bg-white/5 hover:text-ujenzi-accent border-b border-white/5 last:border-0 uppercase tracking-wide">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-ujenzi-accent uppercase tracking-widest transition-colors py-4">
              Resources <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 w-48 bg-ujenzi-card border border-white/10 shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {resourceLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-6 py-3 text-xs text-slate-300 hover:bg-white/5 hover:text-ujenzi-accent border-b border-white/5 last:border-0 uppercase tracking-wide">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

          {/* Language & CTA */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold hover:bg-white/5 transition-colors text-white"
          >
            {lang === 'en' ? 'EN' : 'SW'}
          </button>

          <a href="#contact">
            <Button variant="outline" className="scale-90">{t.nav.btn}</Button>
          </a>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button className="xl:hidden text-white hover:text-ujenzi-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- MOBILE MENU (Flat List) --- */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-ujenzi-dark border-t border-white/10 shadow-2xl h-[85vh] overflow-y-auto">
          <div className="p-6 flex flex-col">
            
            <div className="text-ujenzi-accent text-[10px] font-bold uppercase tracking-widest mb-2 mt-2 opacity-50">Menu</div>
            {mainLinks.map(link => <MobileLink key={link.name} href={link.href}>{link.name}</MobileLink>)}
            
            <div className="text-ujenzi-accent text-[10px] font-bold uppercase tracking-widest mb-2 mt-8 opacity-50">Tools</div>
            {toolLinks.map(link => <MobileLink key={link.name} href={link.href}>{link.name}</MobileLink>)}

            <div className="text-ujenzi-accent text-[10px] font-bold uppercase tracking-widest mb-2 mt-8 opacity-50">Knowledge Base</div>
            {resourceLinks.map(link => <MobileLink key={link.name} href={link.href}>{link.name}</MobileLink>)}
            
            <div className="text-ujenzi-accent text-[10px] font-bold uppercase tracking-widest mb-2 mt-8 opacity-50">Extras</div>
            <MobileLink href="/#blog">{t.nav.blog}</MobileLink>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
              <button onClick={toggleLanguage} className="text-left text-sm font-bold text-slate-400 uppercase tracking-widest">
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