import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    // BADILIKO 1: Background nyeusi (bg-slate-900) ili Logo nyeupe ionekane
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GRID SYSTEM: Imeboreshwa kwa Simu (1 column) na PC (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* 1. BRAND SECTION */}
          <div className="flex flex-col items-start">
            {/* Logo sasa itaonekana vizuri kwenye background nyeusi */}
            <img src={logo} alt="Ujenzi Tips" className="h-20 w-auto mb-6 object-contain" />
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-ujenzi-accent hover:text-slate-900 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-4 border-ujenzi-accent pl-3">
              {t.footer.explore}
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/plans" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">House Plans</a></li>
              <li><a href="/calculator" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">Material Calculator</a></li>
              <li><a href="/pros" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">Verified Pros</a></li>
              <li><a href="/order" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">Order Materials</a></li>
            </ul>
          </div>

          {/* 3. WADAU (STAKEHOLDERS) - NEW SECTION */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-4 border-ujenzi-accent pl-3">
              Wadau (Stakeholders)
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="https://www.ardhi.go.tz/" target="_blank" rel="noreferrer" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" /> Wizara ya Ardhi
                </a>
              </li>
              <li>
                <a href="https://www.crb.go.tz/" target="_blank" rel="noreferrer" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" /> CRB (Contractors)
                </a>
              </li>
              <li>
                <a href="https://www.erb.go.tz/" target="_blank" rel="noreferrer" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" /> ERB (Engineers)
                </a>
              </li>
              <li>
                <a href="https://www.nhc.co.tz/" target="_blank" rel="noreferrer" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" /> NHC (Housing)
                </a>
              </li>
            </ul>
          </div>

          {/* 4. NEWSLETTER & CONTACT */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-4 border-ujenzi-accent pl-3">
              {t.footer.newsletter}
            </h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex flex-col">
                <span className="text-xs font-bold text-slate-500 uppercase">Phone:</span>
                <span className="text-white">+255 764 533 533</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-slate-500 uppercase">Email:</span>
                <span className="text-white">info@ujenzitips.com</span>
              </li>
            </ul>
            
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-800 border border-slate-700 text-white text-xs px-4 py-3 rounded-lg w-full focus:outline-none focus:border-ujenzi-accent placeholder-slate-500"
              />
              <button className="bg-ujenzi-accent text-slate-900 px-4 rounded-lg hover:bg-white transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Ujenzi Tips. {t.footer.rights}
          </p>
          
          <div className="flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <a href="/terms" className="hover:text-ujenzi-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-ujenzi-accent transition-colors">Terms of Service</a>
            
            {/* SECRET ADMIN DOT (Bado Ipo Hapa) */}
            <a 
              href="https://ujenzi-tips-admin.sanity.studio/" 
              target="_blank" 
              rel="noreferrer"
              title="Staff Access"
              className="w-2 h-2 rounded-full bg-slate-700 hover:bg-ujenzi-accent hover:scale-150 transition-all cursor-pointer"
            >
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;