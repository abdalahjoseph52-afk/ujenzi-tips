import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Briefcase } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    // REMOVED Navbar/Footer from here
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <Briefcase size={14} /> Professional Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.pricing.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pricing.packages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-ujenzi-card border p-8 flex flex-col ${
                  pkg.recommended 
                    ? 'border-ujenzi-accent shadow-[0_0_30px_rgba(245,158,11,0.1)] scale-105 z-10' 
                    : 'border-white/5 hover:border-ujenzi-accent/30'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ujenzi-accent text-ujenzi-dark text-xs font-bold uppercase px-4 py-1 tracking-widest rounded-full">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-ujenzi-accent">{pkg.price}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                    {pkg.desc}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check size={16} className="text-ujenzi-accent shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/255764533533?text=Hello, I am interested in the ${pkg.title} package.`}
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                    pkg.recommended 
                      ? 'bg-ujenzi-accent text-ujenzi-dark hover:bg-white' 
                      : 'bg-white/5 text-white hover:bg-ujenzi-accent hover:text-ujenzi-dark'
                  }`}
                >
                  <MessageCircle size={18} /> {t.pricing.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center border-t border-white/5 pt-10">
            <p className="text-slate-500 text-sm">
              All services include a <span className="text-white font-bold">Free Initial Call</span> (15 Minutes) to understand your needs.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;