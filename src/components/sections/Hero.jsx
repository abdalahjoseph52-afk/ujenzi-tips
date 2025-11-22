import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage'; // <--- IMPORT

import pnyLogo from '../../assets/pny.png';
import primesiteLogo from '../../assets/primesite.png';
import siteexploreLogo from '../../assets/siteexplore.png';

const Hero = () => {
  const { t } = useLanguage(); // <--- USE TRANSLATIONS

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-[length:40px_40px] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ujenzi-dark via-ujenzi-dark/95 to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-ujenzi-accent/30 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 bg-ujenzi-accent rounded-full animate-pulse"></span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-yellow-200">
              {t.hero.titleLine3}
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed pl-6 border-l-4 border-ujenzi-accent">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact">
              <Button variant="primary" icon={ArrowRight}>{t.hero.cta1}</Button>
            </a>
            <a href="#twende-site">
              <Button variant="outline" icon={Play}>{t.hero.cta2}</Button>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-xs font-bold uppercase text-slate-500 tracking-widest mb-6">{t.hero.trusted}</p>
            <div className="flex flex-wrap items-center gap-8">
               <div className="group flex flex-col items-center gap-2">
                 <img src={primesiteLogo} alt="Primesite International" className="h-12 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
               </div>
               <div className="group flex flex-col items-center gap-2">
                 <img src={pnyLogo} alt="PNY Company Ltd" className="h-10 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
               </div>
               <div className="group flex flex-col items-center gap-2">
                 <img src={siteexploreLogo} alt="Site Explore" className="h-10 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
               </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Visual (Unchanged) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] hidden lg:block"
        >
          <div className="absolute top-0 right-0 w-4/5 h-full border-2 border-white/10 p-2">
             <div className="w-full h-full bg-ujenzi-card overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" alt="Construction Site" className="w-full h-full object-cover opacity-60 hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ujenzi-dark to-transparent p-8">
                   <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-ujenzi-accent flex items-center justify-center font-bold text-ujenzi-dark text-xl">14%</div>
                      <div>
                        <p className="text-white font-bold">GDP Contribution</p>
                        <p className="text-xs text-slate-400">Construction Sector in TZ</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 left-0 bg-ujenzi-card border border-white/10 p-6 shadow-2xl max-w-xs">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-ujenzi-accent shrink-0" />
              <div>
                <h4 className="font-bold text-white text-sm">Verified Professionals</h4>
                <p className="text-xs text-slate-400 mt-1">Access our directory of vetted architects and engineers.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;