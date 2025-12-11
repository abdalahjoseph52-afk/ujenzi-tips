import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

// Logos
import pnyLogo from '../../assets/pny.png';
import primesiteLogo from '../../assets/primesite.png';
import siteexploreLogo from '../../assets/siteexplore.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 lg:pt-20 overflow-hidden bg-ujenzi-dark text-white">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-ujenzi-dark via-ujenzi-dark/95 to-ujenzi-dark/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 z-0"
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-ujenzi-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-ujenzi-accent rounded-full animate-pulse"></span>
            {t.hero.badge}
          </div>
          
          {/* RESPONSIVE FONTS: Smaller on mobile (text-4xl), Huge on desktop (text-7xl) */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 lg:mb-6">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-yellow-200">
              {t.hero.titleLine3}
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" icon={ArrowRight} className="w-full justify-center">{t.hero.cta1}</Button>
            </a>
            <a href="/calculator" className="w-full sm:w-auto">
              <Button variant="outline" icon={Play} className="w-full justify-center">{t.hero.cta2}</Button>
            </a>
          </div>

          <div className="border-t border-white/10 pt-6 lg:pt-8">
            <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-4">{t.hero.trusted}</p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <img src={primesiteLogo} alt="Primesite" className="h-6 lg:h-8 w-auto" />
               <img src={pnyLogo} alt="PNY" className="h-6 lg:h-8 w-auto" />
               <img src={siteexploreLogo} alt="Site Explore" className="h-6 lg:h-8 w-auto" />
            </div>
          </div>
        </motion.div>

        {/* Right Visual (Desktop Only - To keep mobile clean) */}
        <div className="hidden lg:block relative h-[600px]">
           <div className="absolute top-10 right-0 w-full h-full bg-ujenzi-accent/10 rounded-2xl transform rotate-3"></div>
           <div className="absolute top-0 right-10 w-full h-full border-2 border-white/10 rounded-2xl"></div>
           <img 
             src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop" 
             alt="Architectural Plan"
             className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
           />
           
           <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ repeat: Infinity, duration: 5 }}
             className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs"
           >
             <div className="flex items-start gap-4">
               <div className="bg-green-100 p-3 rounded-full text-green-600">
                 <CheckCircle2 size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm">Verified Experts</h4>
                 <p className="text-xs text-slate-500 mt-1">We vet every fundi and engineer so you don't have to.</p>
               </div>
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;