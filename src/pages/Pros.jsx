import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

import malongoImg from '../assets/malongo.jpg';
import abdalahImg from '../assets/abdalah.jpg';
import moImg from '../assets/mo.jpg';
import primesiteImg from '../assets/primesite.png';

const Pros = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const imageMap = { malongo: malongoImg, abdalah: abdalahImg, mo: moImg, primesite: primesiteImg };
  const list = t.directory?.list || [];
  const filteredPros = filter === 'all' ? list : list.filter(pro => pro.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-5 lg:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">{t.directory?.title}</h1>
            <p className="text-slate-500 text-lg">{t.directory?.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {t.directory && Object.entries(t.directory.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full border transition-all text-xs font-bold uppercase tracking-wide ${
                  filter === key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPros.map((pro) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={pro.id}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="h-64 relative bg-slate-100">
                    <img src={imageMap[pro.image]} alt={pro.name} className="w-full h-full object-cover" />
                    {pro.verified && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 shadow-sm">
                        <BadgeCheck size={12} fill="currentColor" className="text-white" /> VERIFIED
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{pro.name}</h3>
                      <p className="text-ujenzi-accent text-xs font-bold uppercase tracking-wider">{pro.role}</p>
                    </div>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{pro.bio}</p>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-bold uppercase">
                      <MapPin size={14} /> {pro.location}
                    </div>

                    <a 
                      href={`https://wa.me/${pro.phone}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full py-3 bg-slate-100 hover:bg-ujenzi-accent hover:text-slate-900 text-slate-600 text-center font-bold uppercase tracking-widest text-xs rounded-lg transition-colors"
                    >
                      {t.directory?.contactBtn}
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

export default Pros;