import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, BedDouble, Wallet, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Plans = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  // SAFETY CHECK: If data hasn't loaded
  const list = t.plans?.list || [];

  const filteredPlans = filter === 'all' 
    ? list 
    : list.filter(plan => plan.category === filter);

  return (
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      
      {/* Container with top padding for fixed header */}
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <Ruler size={14} /> Architectural Designs
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.plans?.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.plans?.subtitle}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {t.plans && Object.entries(t.plans.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wider ${
                  filter === key 
                    ? 'bg-ujenzi-accent border-ujenzi-accent text-ujenzi-dark' 
                    : 'bg-transparent border-white/10 text-slate-400 hover:border-ujenzi-accent/50 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Plans Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence>
              {filteredPlans.map((plan) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={plan.id}
                  className="bg-ujenzi-card border border-white/5 overflow-hidden group hover:border-ujenzi-accent/30 transition-all duration-300 flex flex-col"
                >
                  {/* Image with Overlay */}
                  <div className="h-64 md:h-80 relative overflow-hidden">
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ujenzi-dark/90 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <span className="bg-ujenzi-accent text-ujenzi-dark text-[10px] font-bold uppercase px-2 py-1 mb-2 inline-block rounded-sm">
                          {plan.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white leading-none">{plan.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="grid grid-cols-2 gap-4 mb-6 border-b border-white/5 pb-6">
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <BedDouble size={18} className="text-ujenzi-accent" /> {plan.rooms}
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Ruler size={18} className="text-ujenzi-accent" /> {plan.area}
                      </div>
                      <div className="col-span-2 flex items-center gap-2 text-white font-bold text-sm">
                        <Wallet size={18} className="text-ujenzi-accent" /> Est. Cost: {plan.cost}
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {plan.desc}
                    </p>

                    <a 
                      href={`https://wa.me/255764533533?text=Hello, I am interested in the house plan: ${plan.title}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-4 bg-white/5 hover:bg-ujenzi-accent hover:text-ujenzi-dark text-white flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs transition-colors border border-white/10 group-hover:border-transparent"
                    >
                      <MessageCircle size={16} /> {t.plans?.btn} <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Plans;