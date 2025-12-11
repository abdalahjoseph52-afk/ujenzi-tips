import React, { useState } from 'react';
import { RefreshCw, ArrowLeft, Ruler, LandPlot, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Converter = () => {
  const { t } = useLanguage();
  const data = t.converter || {}; // Safety default

  const [activeTab, setActiveTab] = useState('length');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  // Conversion Logic
  const handleConvert = () => {
    const val = parseFloat(inputValue);
    if (!val || val < 0) return;

    let res = "";
    
    if (activeTab === 'length') {
      // Feet to Meters
      const meters = (val * 0.3048).toFixed(2);
      res = `${val} ${data.labels?.feet} = ${meters} ${data.labels?.meters}`;
    } else if (activeTab === 'area') {
      // Acres to Sqm
      const sqm = (val * 4046.86).toFixed(0);
      // Rough estimation of "20x20m plots" in that acre
      const plots = Math.floor(val * 4046.86 / 400); 
      res = `${val} ${data.labels?.acres} = ${parseFloat(sqm).toLocaleString()} ${data.labels?.sqm} (~${plots} plots of 20x20m)`;
    } else if (activeTab === 'volume') {
      // Buckets to Litres
      const litres = val * 20;
      res = `${val} ${data.labels?.buckets} = ${litres} ${data.labels?.litres}`;
    }

    setResult(res);
  };

  const reset = () => {
    setInputValue('');
    setResult(null);
  };

  const tabs = [
    { id: 'length', icon: Ruler, label: data.tabs?.length },
    { id: 'area', icon: LandPlot, label: data.tabs?.area },
    { id: 'volume', icon: Droplets, label: data.tabs?.volume },
  ];

  return (
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-slate-400">{data.subtitle}</p>
          </div>

          {/* TABS */}
          <div className="flex justify-center gap-4 mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); reset(); }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-sm border transition-all w-28 md:w-32 ${
                    activeTab === tab.id
                      ? 'bg-ujenzi-accent text-ujenzi-dark border-ujenzi-accent font-bold'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-[10px] uppercase tracking-widest">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* CONVERTER BOX */}
          <div className="bg-ujenzi-card border border-white/10 p-8 rounded-sm max-w-xl mx-auto">
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                Enter Value in {activeTab === 'length' ? data.labels?.feet : activeTab === 'area' ? data.labels?.acres : data.labels?.buckets}
              </label>
              <input 
                type="number" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-ujenzi-dark border border-white/10 p-4 text-white text-xl font-bold focus:border-ujenzi-accent focus:outline-none rounded-sm transition-colors"
                placeholder="0"
              />
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleConvert}
                className="flex-1 bg-ujenzi-accent text-ujenzi-dark py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
              >
                Convert
              </button>
              <button 
                onClick={reset}
                className="px-6 bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                <RefreshCw size={20} />
              </button>
            </div>

            {/* RESULT */}
            {result && (
              <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-sm text-center animate-in zoom-in duration-300">
                <span className="text-slate-400 text-xs font-bold uppercase">Result</span>
                <h3 className="text-2xl font-bold text-white mt-2">{result}</h3>
              </div>
            )}
          </div>

          {/* Tips Section */}
          <div className="mt-12 max-w-xl mx-auto">
            <h4 className="text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-4 text-center">Did you know?</h4>
            <div className="space-y-3">
              {data.tips?.map((tip, i) => (
                <p key={i} className="text-slate-400 text-sm text-center border-b border-white/5 pb-3 last:border-0">
                  "{tip}"
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
             <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-ujenzi-accent transition-colors">
                <ArrowLeft size={16} /> Back to Home
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Converter;