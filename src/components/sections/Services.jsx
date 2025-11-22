import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Megaphone, HardHat, Users, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();
  
  // Correct Icons and Links
  const icons = [Youtube, Megaphone, HardHat, Users];
  const links = ["#blog", "#contact", "#contact", "#contact"]; // All lead to action

  return (
    <section id="services" className="py-24 bg-ujenzi-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-ujenzi-accent"></span>
            <span className="text-ujenzi-accent font-bold uppercase tracking-widest text-sm">{t.services.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {t.services.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-yellow-100">{t.services.highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.list.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.a
                key={index}
                href={links[index]} // <--- FUNCTIONAL LINKS
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative bg-ujenzi-card border border-white/5 p-8 md:p-12 overflow-hidden block cursor-pointer"
              >
                <div className="absolute inset-0 bg-blueprint bg-[length:20px_20px] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <motion.div 
                  variants={{ rest: { height: "4px", width: "40px" }, hover: { height: "100%", width: "4px" } }}
                  className="absolute top-0 left-0 bg-ujenzi-accent transition-all duration-300"
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 bg-white/5 rounded-sm text-ujenzi-accent group-hover:bg-ujenzi-accent group-hover:text-ujenzi-dark transition-colors duration-300">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 border ${index === 3 ? 'border-slate-600 text-slate-500' : 'border-ujenzi-accent text-ujenzi-accent'}`}>
                        {service.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-white/20 transition-colors">{service.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-ujenzi-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {t.services.action} <ArrowUpRight size={16} />
                  </div>
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