import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Megaphone, HardHat, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();
  const icons = [Youtube, Megaphone, HardHat, Users];

  return (
    // SWITCHED TO WHITE BACKGROUND
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1 w-10 bg-ujenzi-accent rounded-full"></span>
            <span className="text-ujenzi-accent font-bold uppercase tracking-widest text-xs">{t.services.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            {t.services.title} <br />
            <span className="text-ujenzi-accent">{t.services.highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.list.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.a
                key={index}
                href={service.link}
                whileHover={{ y: -5 }}
                className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-ujenzi-accent/30 transition-all duration-300 block"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-ujenzi-dark mb-6 group-hover:bg-ujenzi-accent group-hover:text-white transition-colors">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ujenzi-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-ujenzi-dark uppercase tracking-wide group-hover:gap-3 transition-all">
                  {t.services.action} <ArrowRight size={14} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;