import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

import pnyLogo from '../../assets/pny.png';
import primesiteLogo from '../../assets/primesite.png';
import siteexploreLogo from '../../assets/siteexplore.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    // WHITE BACKGROUND
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-12 lg:pt-32 overflow-hidden bg-white">
      
      {/* Subtle Grid Background for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 border border-ujenzi-accent/20 rounded-full text-ujenzi-accent text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-ujenzi-accent rounded-full animate-pulse"></span>
            {t.hero.badge}
          </div>
          
          {/* DARK TEXT FOR WHITE THEME */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-slate-900">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-yellow-600">
              {t.hero.titleLine3}
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg text-slate-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" icon={ArrowRight} className="w-full justify-center text-sm py-3 shadow-lg shadow-ujenzi-accent/20">{t.hero.cta1}</Button>
            </a>
            <a href="/calculator" className="w-full sm:w-auto">
              <Button variant="outline" icon={Play} className="w-full justify-center text-sm py-3 border-slate-300 text-slate-700 hover:bg-slate-50">{t.hero.cta2}</Button>
            </a>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-4">{t.hero.trusted}</p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <img src={primesiteLogo} alt="Primesite" className="h-6 lg:h-8 w-auto" />
               <img src={pnyLogo} alt="PNY" className="h-6 lg:h-8 w-auto" />
               <img src={siteexploreLogo} alt="Site Explore" className="h-6 lg:h-8 w-auto" />
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <div className="hidden lg:block relative h-[600px]">
           <div className="absolute top-8 right-0 w-full h-full bg-ujenzi-accent/10 rounded-2xl transform rotate-3"></div>
           <div className="absolute top-0 right-8 w-full h-full border-2 border-slate-100 bg-white rounded-2xl shadow-2xl overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop" 
               alt="Architectural Plan"
               className="w-full h-full object-cover"
             />
           </div>
           
           {/* Floating Trust Badge */}
           <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ repeat: Infinity, duration: 5 }}
             className="absolute bottom-12 -left-4 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-xs"
           >
             <div className="flex items-start gap-3">
               <div className="bg-green-100 p-2 rounded-full text-green-600">
                 <CheckCircle2 size={20} />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm">Verified Experts</h4>
                 <p className="text-[11px] text-slate-500 mt-1">We vet every fundi and engineer so you don't have to.</p>
               </div>
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;