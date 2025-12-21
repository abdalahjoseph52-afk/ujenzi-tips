import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, Calendar, MapPin, Filter, ArrowRight, AlertCircle } from 'lucide-react';

const MARKET_DATA = [
  {
    category: "Simenti (50kg)",
    items: [
      { name: "Twiga Cement (OPC)", price: 17500, prev: 17000, region: "Dar es Salaam", trend: "up" },
      { name: "Simba Cement (42.5N)", price: 16800, prev: 17000, region: "Dar es Salaam", trend: "down" },
      { name: "Dangote Cement", price: 16500, prev: 16500, region: "Mtwara/Lindi", trend: "stable" },
      { name: "Camel Cement", price: 15500, prev: 15000, region: "Dar es Salaam", trend: "up" },
    ]
  },
  {
    category: "Nondo (1 Pc)",
    items: [
      { name: "Nondo 12mm (Treated)", price: 23000, prev: 24500, region: "Dar es Salaam", trend: "down" },
      { name: "Nondo 10mm", price: 16000, prev: 15500, region: "Dar es Salaam", trend: "up" },
      { name: "Nondo 16mm", price: 38000, prev: 38000, region: "Arusha", trend: "stable" },
    ]
  },
  {
    category: "Mchanga & Kokoto (Lori 15-Tons)",
    items: [
      { name: "Mchanga wa Mto", price: 180000, prev: 180000, region: "Dar (Bunju)", trend: "stable" },
      { name: "Kokoto (3/4)", price: 350000, prev: 320000, region: "Dar (Mbezi)", trend: "up" },
    ]
  },
  {
    category: "Mabati (Gauge 28)",
    items: [
      { name: "ALAF Migongo Mipana", price: 42000, prev: 42000, region: "National", trend: "stable" },
      { name: "Sun Share Colour", price: 35000, prev: 36500, region: "National", trend: "down" },
    ]
  }
];

const PriceCard = ({ item }) => {
  const diff = item.price - item.prev;
  const percent = ((diff / item.prev) * 100).toFixed(1);

  return (
    <div className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-slate-800 text-lg group-hover:text-ujenzi-accent transition-colors">{item.name}</h3>
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-1">
            <MapPin size={10} /> {item.region}
          </span>
        </div>
        <div className={`p-2 rounded-full ${item.trend === 'up' ? 'bg-red-50 text-red-500' : item.trend === 'down' ? 'bg-green-50 text-green-500' : 'bg-slate-50 text-slate-400'}`}>
          {item.trend === 'up' && <TrendingUp size={20} />}
          {item.trend === 'down' && <TrendingDown size={20} />}
          {item.trend === 'stable' && <Minus size={20} />}
        </div>
      </div>

      <div className="flex items-end justify-between mt-4">
        <div>
          <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Bei ya Leo</div>
          <div className="text-2xl font-extrabold text-slate-900">
            {item.price.toLocaleString()} <span className="text-xs font-normal text-slate-500">TZS</span>
          </div>
        </div>
        
        {item.trend !== 'stable' && (
          <div className={`text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${item.trend === 'up' ? 'text-red-500 bg-red-50' : 'text-green-600 bg-green-50'}`}>
            {item.trend === 'up' ? '+' : ''}{diff.toLocaleString()} ({percent}%)
          </div>
        )}
      </div>
    </div>
  );
};

const MarketPrices = () => {
  const [activeRegion, setActiveRegion] = useState('All');
  const lastUpdated = new Date().toLocaleDateString('sw-TZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* HEADER */}
      <div className="bg-slate-900 pt-32 pb-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800 opacity-50" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1}}></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-ujenzi-accent text-xs font-bold mb-4 border border-white/20">
            <Calendar size={12} /> Updated: {lastUpdated}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Bei za Vifaa <span className="text-ujenzi-accent">Sokoni</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Fuatilia mabadiliko ya bei za simenti, nondo, na vifaa vingine sokoni ili upange bajeti yako kwa usahihi.
          </p>
        </div>
      </div>

      {/* FILTER & ALERTS */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 border border-slate-200">
          
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Filter size={18} className="text-ujenzi-accent" />
            <span>Chuja kwa Mkoa:</span>
            <select 
              className="bg-slate-100 border-none rounded-lg py-1.5 px-3 focus:ring-2 focus:ring-ujenzi-accent outline-none ml-2"
              value={activeRegion}
              onChange={(e) => setActiveRegion(e.target.value)}
            >
              <option value="All">Tanzania Nzima</option>
              <option value="Dar">Dar es Salaam</option>
              <option value="Arusha">Arusha</option>
              <option value="Mwanza">Mwanza</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-lg border border-blue-100">
            <AlertCircle size={16} />
            <span>Bei hizi ni za wastani kwa maduka ya jumla (Retail).</span>
          </div>

        </div>
      </div>

      {/* PRICE LISTS */}
      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-16">
        
        {MARKET_DATA.map((section, index) => (
          <div key={index}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-ujenzi-accent rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-900">{section.category}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, i) => (
                <PriceCard key={i} item={item} />
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* CTA BOTTOM (Hapa ndipo kulikuwa na shida ya mx-6 na mx-auto) */}
      <div className="max-w-4xl mx-6 md:mx-auto mt-20 bg-ujenzi-dark text-white rounded-3xl p-10 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">Unahitaji Nukuu Maalum (Quotation)?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Kama una mradi mkubwa na unahitaji bei ya jumla au punguzo, wasiliana na wauzaji wetu waliohakikiwa.
          </p>
          <button className="bg-ujenzi-accent text-ujenzi-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-all inline-flex items-center gap-2">
            Pata Quotation <ArrowRight size={18} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default MarketPrices;