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
    <section className="relative min-h-[60vh] lg:min-h-[90vh] flex items-center pt-28 pb-12 lg:pt-32 overflow-hidden bg-white">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* HAPA: Nimetumia 'grid-cols-2' moja kwa moja hata kwenye simu.
        'gap-3' kwenye simu ili kubana nafasi, 'gap-16' kwenye PC.
      */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-2 gap-3 lg:gap-16 items-center">
        
        {/* Left Content - Maandishi */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left col-span-1" // Inachukua nusu ya kioo
        >
          <div className="inline-flex items-center gap-2 px-2 py-1 bg-ujenzi-accent/10 border border-ujenzi-accent/20 rounded-full text-ujenzi-accent text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mb-3 lg:mb-6">
            <span className="w-1.5 h-1.5 bg-ujenzi-accent rounded-full animate-pulse"></span>
            {t.hero.badge}
          </div>
          
          {/* HAPA: Nimepunguza Font Size kwa simu (text-2xl) ili ienee */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-2 lg:mb-6 text-slate-900 break-words">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-yellow-600">
              {t.hero.titleLine3}
            </span>
          </h1>
          
          <p className="hidden sm:block text-sm sm:text-xl text-slate-600 mb-4 lg:mb-8 leading-relaxed font-medium">
            {t.hero.desc}
          </p>
          {/* Maelezo mafupi sana kwa simu ili yasijaze kioo */}
          <p className="sm:hidden text-xs text-slate-600 mb-4 leading-snug font-medium">
            Jenga kwa uhakika na kuepuka makosa ya gharama.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 mb-6 lg:mb-10 justify-start">
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" icon={ArrowRight} className="w-full justify-center text-xs lg:text-sm py-2 lg:py-3 shadow-lg shadow-ujenzi-accent/20 px-2">
                {t.hero.cta1}
              </Button>
            </a>
            {/* Button ya pili nimeificha kwenye simu ndogo sana ili isibane, ila kwenye PC ipo */}
            <a href="/calculator" className="hidden sm:block w-full sm:w-auto">
              <Button variant="outline" icon={Play} className="w-full justify-center text-sm py-3 border-slate-300 text-slate-700 hover:bg-slate-50">{t.hero.cta2}</Button>
            </a>
          </div>

          <div className="border-t border-slate-100 pt-3 lg:pt-6">
            <p className="text-[8px] lg:text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-2 lg:mb-4">{t.hero.trusted}</p>
            <div className="flex flex-wrap justify-start items-center gap-3 lg:gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <img src={primesiteLogo} alt="Primesite" className="h-4 lg:h-8 w-auto" />
               <img src={pnyLogo} alt="PNY" className="h-4 lg:h-8 w-auto" />
               <img src={siteexploreLogo} alt="Site Explore" className="hidden sm:block h-6 lg:h-8 w-auto" />
            </div>
          </div>
        </motion.div>

        {/* Right Visual - Picha Kulia */}
        {/* Hapa: col-span-1 inahakikisha inakaa kulia kwa maandishi */}
        <div className="relative h-[280px] sm:h-[450px] lg:h-[600px] w-full z-10 col-span-1">
            {/* Background shape */}
            <div className="absolute top-2 lg:top-8 right-0 w-full h-[95%] lg:h-full bg-ujenzi-accent/10 rounded-xl lg:rounded-2xl transform rotate-3"></div>
            
            {/* Image Container */}
            <div className="absolute top-0 right-0 w-full h-[95%] lg:h-full border-2 border-slate-100 bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden z-20">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop" 
                alt="Architectural Plan"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Trust Badge - Nimeificha kwenye simu (hidden) na kuiacha kwenye PC (lg:block) 
                ili isifunike picha ndogo ya simu */}
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5 }}
              className="hidden lg:block absolute bottom-12 -left-4 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-xs z-30"
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