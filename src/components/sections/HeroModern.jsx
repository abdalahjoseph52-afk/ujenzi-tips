import React from 'react';
import { ArrowRight, Calculator, HardHat } from 'lucide-react';

const HeroModern = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-slate-900 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND IMAGE (Iliyofifia kidogo) */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay ili maandishi yasomeke */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      {/* 2. MAANDISHI (Content) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        {/* Lebo ndogo juu */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-12 h-1 bg-ujenzi-accent"></div>
          <span className="text-ujenzi-accent font-bold uppercase tracking-widest text-sm">
            Ujenzi Tips Tanzania
          </span>
        </div>

        {/* Headline Kubwa */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-3xl mb-6">
          Jenga kwa <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Uhakika</span>,<br />
          Ishi kwa Amani.
        </h1>

        {/* Maelezo */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Tunakupa zana za kisasa za makadirio, ushauri wa kitaalamu, na teknolojia ya AI ili kuhakikisha ujenzi wako unakamilika kwa bajeti sahihi na ubora wa kimataifa.
        </p>

        {/* Vitufe (Buttons) */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-ujenzi-accent text-ujenzi-dark px-8 py-4 rounded-none font-bold text-lg hover:bg-white hover:text-ujenzi-dark transition-all flex items-center gap-3 group">
            <Calculator size={20} />
            Kadiria Vifaa
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-none font-bold text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center gap-3">
            <HardHat size={20} />
            Tafuta Fundi
          </button>
        </div>

      </div>

      {/* Mapambo ya chini (Bottom Bar) */}
      <div className="absolute bottom-0 left-0 w-full bg-ujenzi-accent h-2"></div>
    </div>
  );
};

export default HeroModern;