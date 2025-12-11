import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, BedDouble, Wallet, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Plans = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const list = t.plans?.list || [];
  const filteredPlans = filter === 'all' ? list : list.filter(plan => plan.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-5 lg:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <Ruler size={14} /> Architectural Designs
            </div>
            <h1 className="text-3xl lg:text-6xl font-bold text-slate-900 mb-4">{t.plans?.title}</h1>
            <p className="text-slate-500 text-lg">{t.plans?.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {t.plans && Object.entries(t.plans.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full border transition-all text-xs font-bold uppercase tracking-wide ${
                  filter === key 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-400'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredPlans.map((plan) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={plan.id}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase shadow-sm">
                      {plan.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-900">{plan.title}</h3>
                      <div className="text-right">
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Est. Cost</p>
                        <p className="text-sm font-bold text-ujenzi-accent">{plan.cost}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-6 text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-1"><BedDouble size={16} /> {plan.rooms}</span>
                      <span className="flex items-center gap-1"><Ruler size={16} /> {plan.area}</span>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{plan.desc}</p>

                    <a 
                      href={`https://wa.me/255764533533?text=Interested in ${plan.title}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 bg-slate-900 hover:bg-ujenzi-accent hover:text-slate-900 text-white flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs rounded-lg transition-colors"
                    >
                      <MessageCircle size={16} /> {t.plans?.btn}
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