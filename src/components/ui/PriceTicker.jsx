import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus, Zap } from 'lucide-react';

const PriceTicker = () => {
  const navigate = useNavigate();

  const prices = [
    { item: "Simenti (Twiga)", price: "17,500", trend: "up", change: "+500" },
    { item: "Nondo 12mm", price: "23,000", trend: "down", change: "-1,500" },
    { item: "Mabati (G28)", price: "42,000", trend: "stable", change: "0" },
    { item: "Mchanga (Lori)", price: "180,000", trend: "up", change: "+10k" },
    { item: "Kokoto (3/4)", price: "350,000", trend: "up", change: "+20k" },
    { item: "Rangi (Gold)", price: "85,000", trend: "stable", change: "0" },
    { item: "Gypsum Powder", price: "22,000", trend: "down", change: "-200" },
  ];

  // Tunarudia data mara nyingi ili strip iwe ndefu na isikatike
  const items = [...prices, ...prices, ...prices, ...prices];

  return (
    <div 
      onClick={() => navigate('/market-prices')}
      className="bg-slate-900 border-b border-white/10 h-10 flex items-center relative overflow-hidden cursor-pointer group font-mono text-sm"
    >
      {/* 1. CSS YA KU-ANIMATE (Hii inahakikisha inatembea bila config) */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: flex;
          animation: ticker 40s linear infinite;
        }
        /* Simamisha ikigusa mouse */
        .group:hover .animate-ticker {
          animation-play-state: paused;
        }
      `}</style>

      {/* 2. STATIC BADGE (Haikimbii) */}
      <div className="absolute left-0 top-0 bottom-0 z-20 bg-ujenzi-accent text-ujenzi-dark font-bold px-4 flex items-center gap-2 shadow-[4px_0_15px_rgba(0,0,0,0.5)]">
        <Zap size={14} className="fill-current animate-pulse" />
        <span className="hidden md:inline tracking-wider text-xs">SOKONI:</span>
      </div>

      {/* 3. SCROLLING AREA */}
      <div className="flex items-center w-full overflow-hidden mask-gradient pl-28 md:pl-32">
        <div className="animate-ticker">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-6 border-r border-white/10 min-w-max">
              <span className="text-slate-400 uppercase text-xs font-bold tracking-tight">{item.item}</span>
              <span className="text-white font-bold tracking-widest">{item.price}</span>
              
              <div className={`flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded ${
                item.trend === 'up' ? 'bg-red-500/10 text-red-500' : 
                item.trend === 'down' ? 'bg-green-500/10 text-green-500' : 
                'text-slate-500'
              }`}>
                {item.trend === 'up' && <TrendingUp size={12} />}
                {item.trend === 'down' && <TrendingDown size={12} />}
                {item.trend === 'stable' && <Minus size={12} />}
                <span>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PriceTicker;