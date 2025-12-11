import React from 'react';
import { motion } from 'framer-motion';
import { Map, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Guide = () => {
  const { t } = useLanguage();
  // Safety check for data
  const steps = t.guide?.steps || [];

  return (
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-4 bg-ujenzi-accent/10 rounded-full mb-6 text-ujenzi-accent">
              <Map size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.guide?.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              {t.guide?.subtitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 md:translate-x-0"></div>

            <div className="space-y-12">
              {steps.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className={`bg-ujenzi-card border border-white/5 p-8 rounded-sm hover:border-ujenzi-accent/30 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-4xl font-bold text-white/10 mb-4 block">{item.step}</span>
                      
                      {/* FIXED LINE BELOW: Removed 'text-white' so 'text-ujenzi-accent' works properly */}
                      <h3 className="text-xl font-bold mb-3 text-ujenzi-accent">{item.title}</h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      
                      <div className={`p-3 bg-white/5 rounded-sm border border-white/5 mb-6 text-xs text-slate-300 flex items-start gap-2 ${index % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse'}`}>
                        <CheckCircle2 size={14} className="text-ujenzi-accent shrink-0 mt-0.5" />
                        <span>{item.tip}</span>
                      </div>

                      {item.linkUrl && (
                        <Link 
                          to={item.linkUrl}
                          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-ujenzi-accent transition-colors ${index % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse'}`}
                        >
                          {item.linkText} <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-ujenzi-dark border-4 border-ujenzi-accent rounded-full z-10 top-8 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>

                  {/* Empty Side (For spacing) */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Guide;