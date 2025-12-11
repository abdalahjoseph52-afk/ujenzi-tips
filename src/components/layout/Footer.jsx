import React from 'react';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ujenzi-dark pt-24 pb-12 relative overflow-hidden border-t-4 border-ujenzi-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <img src={logo} alt="Ujenzi Tips" className="h-24 w-auto object-contain" />
            <p className="text-slate-400 text-sm leading-relaxed">{t.footer.desc}</p>
            <div className="flex gap-3">
              <SocialIcon Icon={Instagram} link="https://www.instagram.com/ujenzitips_?igsh=MWljeHU5eGN0OHg3cA==" />
              <SocialIcon Icon={Youtube} link="https://youtube.com/@ujenzitips?si=FbPZUHIjSKFogwc6" />
              <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/19kSKF1fae/" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">{t.footer.explore}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/" className="hover:text-ujenzi-accent transition-colors block py-1">{t.nav.home}</a></li>
              <li><a href="/plans" className="hover:text-ujenzi-accent transition-colors block py-1">{t.nav.plans}</a></li>
              <li><a href="/calculator" className="hover:text-ujenzi-accent transition-colors block py-1">{t.nav.calc}</a></li>
              <li><a href="/pros" className="hover:text-ujenzi-accent transition-colors block py-1">{t.nav.pros}</a></li>
              <li><a href="/faq" className="hover:text-ujenzi-accent transition-colors block py-1">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin size={18} className="text-ujenzi-accent shrink-0" />
                <span>{t.contact.locText}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-ujenzi-accent shrink-0" />
                <span className="font-mono">+255 764 533 533</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-ujenzi-accent shrink-0" />
                <span>ujenzitips@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">{t.footer.newsletter}</h4>
            <p className="text-slate-400 text-xs mb-4">{t.footer.newsDesc}</p>
            <form action="https://formsubmit.co/ujenzitips@gmail.com" method="POST" className="flex flex-col gap-2">
              <input type="hidden" name="_subject" value="New Newsletter Subscriber!" />
              <input 
                type="email" 
                name="email"
                placeholder="name@email.com" 
                required
                className="bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:border-ujenzi-accent focus:outline-none rounded-sm w-full"
              />
              <Button variant="primary" className="w-full justify-center">{t.footer.sub}</Button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2025 Ujenzi Tips. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-ujenzi-accent hover:text-ujenzi-dark transition-all duration-300">
    <Icon size={18} />
  </a>
);

export default Footer;