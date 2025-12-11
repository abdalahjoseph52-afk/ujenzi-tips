import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

// IMAGES
import malongoImg from '../assets/malongo.jpg';
import abdalahImg from '../assets/abdalah.jpg';
import moImg from '../assets/mo.jpg';
import primesiteImg from '../assets/primesite.png';

const Pros = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const imageMap = {
    malongo: malongoImg,
    abdalah: abdalahImg,
    mo: moImg,
    primesite: primesiteImg
  };

  // SAFETY CHECK: If data hasn't loaded yet, show empty list
  const list = t.directory?.list || [];

  const filteredPros = filter === 'all' 
    ? list 
    : list.filter(pro => pro.category === filter);

  return (
    // REMOVED Navbar/Footer from here
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.directory?.title || "Verified Pros"} <span className="text-ujenzi-accent">.</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {t.directory?.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {t.directory && Object.entries(t.directory.filters).map(([key, label]) => (
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

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPros.map((pro) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={pro.id}
                  className="bg-ujenzi-card border border-white/5 overflow-hidden group hover:border-ujenzi-accent/30 transition-all duration-300"
                >
                  <div className="h-64 relative overflow-hidden bg-white/5">
                    <img 
                      src={imageMap[pro.image]} 
                      alt={pro.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {pro.verified && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <BadgeCheck size={14} fill="currentColor" className="text-white" /> VERIFIED
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{pro.name}</h3>
                      <p className="text-ujenzi-accent text-sm font-bold uppercase tracking-wider">{pro.role}</p>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {pro.bio}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 uppercase font-bold tracking-widest">
                      <MapPin size={14} /> {pro.location}
                    </div>

                    <a 
                      href={`https://wa.me/${pro.phone}?text=Hello ${pro.name}, I found your profile on Ujenzi Tips.`}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full py-3 bg-white/5 hover:bg-ujenzi-accent hover:text-ujenzi-dark text-white text-center font-bold uppercase tracking-widest text-xs transition-colors border border-white/10"
                    >
                      {t.directory?.contactBtn || "Contact"}
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