import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <img src={logo} alt="Ujenzi Tips" className="h-16 w-auto mb-6 opacity-90" />
            <p className="text-sm leading-relaxed mb-6 text-slate-500">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-ujenzi-accent hover:text-white transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6 border-l-4 border-ujenzi-accent pl-3">
              {t.footer.explore}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/plans" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">House Plans</a></li>
              <li><a href="/calculator" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">Material Calculator</a></li>
              <li><a href="/pros" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">Verified Pros</a></li>
              <li><a href="/order" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2">Order Materials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6 border-l-4 border-ujenzi-accent pl-3">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase">Location:</span>
                <span>Mbezi Beach, Dar es Salaam</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase">Phone:</span>
                <span>+255 764 533 533</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase">Email:</span>
                <span>info@ujenzitips.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6 border-l-4 border-ujenzi-accent pl-3">
              {t.footer.newsletter}
            </h4>
            <p className="text-xs mb-4 text-slate-500">{t.footer.newsDesc}</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-50 border border-slate-200 text-slate-900 text-xs px-4 py-3 rounded-lg w-full focus:outline-none focus:border-ujenzi-accent"
              />
              <button className="bg-slate-900 text-white px-4 rounded-lg hover:bg-ujenzi-accent hover:text-slate-900 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Ujenzi Tips. {t.footer.rights}
          </p>
          
          <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <a href="/terms" className="hover:text-ujenzi-accent">Privacy Policy</a>
            <a href="/terms" className="hover:text-ujenzi-accent">Terms of Service</a>
            
            {/* LINK YA SIRI (SECRET ADMIN DOT) */}
            <a 
              href="https://ujenzi-tips-admin.sanity.studio/" 
              target="_blank" 
              rel="noreferrer"
              title="Staff Access"
              className="w-2 h-2 rounded-full bg-slate-200 hover:bg-ujenzi-accent hover:scale-150 transition-all cursor-pointer"
            >
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;