import React from 'react';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ujenzi-card border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-repeating-linear-gradient(90deg, #F59E0B, #F59E0B 20px, #0F172A 20px, #0F172A 40px)"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand LOGO ONLY */}
          <div>
            <div className="mb-8">
              {/* BRAND LOGO UPDATE - MASSIVE SIZE */}
              <img 
                src={logo} 
                alt="Ujenzi Tips" 
                // CHANGED: h-20 -> h-40 (Huge in footer)
                className="h-40 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{t.footer.desc}</p>
            <div className="flex gap-4">
              <SocialIcon Icon={Instagram} link="https://www.instagram.com/ujenzitips_?igsh=MWljeHU5eGN0OHg3cA==" />
              <SocialIcon Icon={Youtube} link="https://youtube.com/@ujenzitips?si=FbPZUHIjSKFogwc6" />
              <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/19kSKF1fae/" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">{t.footer.explore}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="/" className="hover:text-ujenzi-accent transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-ujenzi-accent transition-colors">{t.nav.services}</a></li>
              <li><a href="#twende-site" className="hover:text-ujenzi-accent transition-colors">{t.hero.cta2}</a></li>
              <li><a href="#blog" className="hover:text-ujenzi-accent transition-colors">{t.nav.blog}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ujenzi-accent shrink-0" />
                <span>{t.contact.locText}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-ujenzi-accent shrink-0" />
                <span>+255 764 533 533</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-ujenzi-accent shrink-0" />
                <span>ujenzitips@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">{t.footer.newsletter}</h4>
            <p className="text-slate-400 text-xs mb-4">{t.footer.newsDesc}</p>
            <form action="https://formsubmit.co/ujenzitips@gmail.com" method="POST" className="flex flex-col gap-3">
              <input type="hidden" name="_subject" value="New Newsletter Subscriber!" />
              <input type="hidden" name="_captcha" value="false" />
              <input 
                type="email" 
                name="email"
                placeholder="name@email.com" 
                required
                className="bg-ujenzi-dark border border-white/10 px-4 py-3 text-white text-sm focus:border-ujenzi-accent focus:outline-none rounded-none"
              />
              <Button variant="primary" className="w-full justify-center">{t.footer.sub}</Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2025 Ujenzi Tips. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center text-slate-400 hover:bg-ujenzi-accent hover:text-ujenzi-dark transition-all duration-300">
    <Icon size={18} />
  </a>
);

export default Footer;