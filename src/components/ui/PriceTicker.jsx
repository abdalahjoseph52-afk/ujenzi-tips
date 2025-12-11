import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { client } from '../../lib/sanity'; // <--- Import the connection

const PriceTicker = () => {
  const [tickerItems, setTickerItems] = useState([]);

  // FETCH DATA ON LOAD
  useEffect(() => {
    const query = `*[_type == "marketPrice"] { materialName, price }`;

    client.fetch(query)
      .then((data) => {
        console.log("Sanity Data:", data); // Check console if it works
        setTickerItems(data);
      })
      .catch(console.error);
  }, []);

  // Fallback if Sanity is empty (Prevent crash)
  const itemsToShow = tickerItems.length > 0 ? tickerItems : [
    { materialName: "Loading Data...", price: "..." }
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-ujenzi-dark z-[60] flex items-center shadow-sm border-b border-white/10">
      
      {/* Label */}
      <div className="bg-ujenzi-accent text-ujenzi-dark px-3 lg:px-4 h-full flex items-center gap-2 z-10 font-bold text-[10px] lg:text-xs uppercase tracking-widest relative">
        <TrendingUp size={14} />
        <span className="hidden md:inline">Market Prices</span>
        <div className="absolute right-[-12px] top-0 w-0 h-0 border-l-[12px] border-l-ujenzi-accent border-t-[40px] border-t-transparent z-10"></div>
      </div>

      {/* Scrolling Content */}
      <div className="flex overflow-hidden w-full bg-ujenzi-dark text-white">
        <motion.div 
          className="flex gap-8 lg:gap-12 whitespace-nowrap px-4"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear"
          }}
        >
          {/* Repeat list 3 times for smooth infinite scroll */}
          {[...itemsToShow, ...itemsToShow, ...itemsToShow].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase">
              <span className="text-slate-300">{item.materialName}:</span>
              <span className="text-ujenzi-accent">{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PriceTicker;