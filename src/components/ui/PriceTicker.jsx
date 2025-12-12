import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { client } from '../../lib/sanity';

const PriceTicker = () => {
  const [tickerItems, setTickerItems] = useState([]);

  useEffect(() => {
    // Fetch data sorted by lastUpdated (newest first)
    const query = `*[_type == "marketPrice"] | order(_updatedAt desc) { materialName, price }`;

    client.fetch(query)
      .then((data) => {
        console.log("Ticker Data:", data); // Check Console
        setTickerItems(data);
      })
      .catch(console.error);
  }, []);

  // Fallback: If list is empty, show generic items so it doesn't look broken
  const defaultItems = [
    { materialName: "Cement (Twiga)", price: "18,500/=" },
    { materialName: "Iron Bar (12mm)", price: "28,000/=" },
    { materialName: "Mchanga (Lorry)", price: "180,000/=" }
  ];

  const itemsToShow = tickerItems.length > 0 ? tickerItems : defaultItems;

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-ujenzi-dark z-[60] flex items-center shadow-sm border-b border-white/10">
      <div className="bg-ujenzi-accent text-ujenzi-dark px-3 lg:px-4 h-full flex items-center gap-2 z-10 font-bold text-[10px] lg:text-xs uppercase tracking-widest relative">
        <TrendingUp size={14} />
        <span className="hidden md:inline">Market Prices</span>
        <div className="absolute right-[-12px] top-0 w-0 h-0 border-l-[12px] border-l-ujenzi-accent border-t-[40px] border-t-transparent z-10"></div>
      </div>

      <div className="flex overflow-hidden w-full bg-ujenzi-dark text-white">
        <motion.div 
          className="flex gap-8 lg:gap-12 whitespace-nowrap px-4"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
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