import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const PriceTicker = () => {
  const { t } = useLanguage();

  return (
    // UPDATED: Added 'fixed top-0 z-[60] w-full' to lock it above everything
    <div className="fixed top-0 left-0 w-full h-10 bg-ujenzi-accent z-[60] flex items-center shadow-md">
      
      {/* Label */}
      <div className="bg-ujenzi-dark text-ujenzi-accent px-4 h-full flex items-center gap-2 z-10 font-bold text-xs uppercase tracking-widest relative">
        <TrendingUp size={16} />
        <span className="hidden md:inline">{t.ticker.title}</span>
        {/* Little triangle arrow effect */}
        <div className="absolute right-[-12px] top-0 w-0 h-0 border-l-[12px] border-l-ujenzi-dark border-t-[40px] border-t-transparent z-10"></div>
      </div>

      {/* Scrolling Content */}
      <div className="flex overflow-hidden w-full bg-ujenzi-accent text-ujenzi-dark">
        <motion.div 
          className="flex gap-12 whitespace-nowrap px-4"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear"
          }}
        >
          {[...t.ticker.items, ...t.ticker.items, ...t.ticker.items].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xs font-bold uppercase">
              <span>{item.name}:</span>
              <span className="bg-black/10 px-2 py-0.5 rounded text-black">{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PriceTicker;