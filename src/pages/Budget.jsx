import React, { useState } from 'react';
import { PieChart, Calculator, Info } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Budget = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('');
  const [breakdown, setBreakdown] = useState(null);

  const calculateBudget = (e) => {
    e.preventDefault();
    const total = parseInt(amount.replace(/,/g, '')); 
    
    if (!total || total <= 0) return;

    const results = t.budget.phases.map(phase => ({
      ...phase,
      value: (total * phase.percent) / 100
    }));

    setBreakdown({ total, results });
  };

  return (
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <PieChart size={14} /> Financial Planning
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.budget?.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.budget?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="bg-ujenzi-card border border-white/10 p-8 rounded-sm sticky top-40">
                <form onSubmit={calculateBudget} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                      {t.budget?.inputLabel}
                    </label>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder={t.budget?.placeholder}
                      className="w-full bg-ujenzi-dark border border-white/10 p-4 text-white text-xl font-bold focus:border-ujenzi-accent focus:outline-none rounded-sm transition-colors"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-ujenzi-accent text-ujenzi-dark py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
                  >
                    <Calculator size={18} /> {t.budget?.btn}
                  </button>
                </form>

                <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-sm flex gap-3">
                  <Info className="text-blue-400 shrink-0" size={20} />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.budget?.disclaimer}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {breakdown ? (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8">
                    <span className="text-slate-400 text-sm font-bold uppercase">Total Project Value</span>
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {breakdown.total.toLocaleString()} <span className="text-sm text-ujenzi-accent">TZS</span>
                    </span>
                  </div>

                  <div className="grid gap-4">
                    {breakdown.results.map((item, index) => (
                      <div key={index} className="bg-white/5 border border-white/5 p-4 rounded-sm hover:border-white/10 transition-all group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                            <h4 className="font-bold text-white">{item.name}</h4>
                          </div>
                          <span className="font-bold text-ujenzi-accent text-lg">
                            {item.value.toLocaleString()} /=
                          </span>
                        </div>
                        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden mb-2">
                          <div 
                            className={`h-full ${item.color}`} 
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>{item.desc}</span>
                          <span className="font-bold text-slate-400">{item.percent}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 border-2 border-dashed border-white/5 rounded-sm min-h-[300px]">
                  <PieChart size={64} className="mb-4 opacity-20" />
                  <p className="text-sm uppercase tracking-widest font-bold">Waiting for input...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;