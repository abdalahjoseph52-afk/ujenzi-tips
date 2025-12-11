import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Megaphone, HardHat, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();
  const icons = [Youtube, Megaphone, HardHat, Users];

  return (
    <section id="services" className="py-12 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        
        <div className="mb-8 lg:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1 w-6 lg:w-10 bg-ujenzi-accent rounded-full"></span>
            <span className="text-ujenzi-accent font-bold uppercase tracking-widest text-[10px] lg:text-xs">{t.services.badge}</span>
          </div>
          <h2 className="text-2xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {t.services.title} <br />
            <span className="text-ujenzi-accent">{t.services.highlight}</span>
          </h2>
        </div>

        {/* COMPACT 2-COL GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {t.services.list.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.a
                key={index}
                href={service.link}
                whileHover={{ y: -5 }}
                className="group bg-slate-50 p-4 lg:p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-ujenzi-accent/30 transition-all duration-300 block"
              >
                <div className="w-8 h-8 lg:w-14 lg:h-14 bg-white rounded-lg lg:rounded-xl shadow-sm flex items-center justify-center text-ujenzi-dark mb-3 lg:mb-6 group-hover:bg-ujenzi-accent group-hover:text-white transition-colors">
                  <Icon size={18} className="lg:w-7 lg:h-7" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-sm lg:text-xl font-bold text-slate-900 mb-1 lg:mb-3 group-hover:text-ujenzi-accent transition-colors line-clamp-1">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-[10px] lg:text-sm leading-relaxed mb-3 lg:mb-6 line-clamp-2 lg:line-clamp-3">
                  {service.desc}
                </p>

                <div className="flex items-center gap-1 text-[10px] lg:text-xs font-bold text-ujenzi-dark uppercase tracking-wide group-hover:gap-2 transition-all">
                  {t.services.action} <ArrowRight size={12} />
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