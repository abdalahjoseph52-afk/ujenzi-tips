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
    const results = t.budget.phases.map(phase => ({ ...phase, value: (total * phase.percent) / 100 }));
    setBreakdown({ total, results });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-5 lg:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <PieChart size={14} /> Financial Planning
            </div>
            <h1 className="text-3xl lg:text-6xl font-bold text-slate-900 mb-4">{t.budget?.title}</h1>
            <p className="text-slate-500 text-lg">{t.budget?.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm sticky top-40">
                <form onSubmit={calculateBudget} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{t.budget?.inputLabel}</label>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="e.g. 50000000"
                      className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 text-xl font-bold focus:border-ujenzi-accent focus:outline-none rounded-lg"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-ujenzi-accent hover:text-slate-900 transition-colors">
                    <Calculator size={18} /> {t.budget?.btn}
                  </button>
                </form>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg flex gap-3 text-blue-600">
                  <Info size={20} className="shrink-0" />
                  <p className="text-xs leading-relaxed">{t.budget?.disclaimer}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {breakdown ? (
                <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md flex justify-between items-center mb-6">
                    <span className="text-sm font-bold uppercase text-slate-400">Total Project</span>
                    <span className="text-2xl font-bold">{breakdown.total.toLocaleString()} /=</span>
                  </div>
                  {breakdown.results.map((item, index) => (
                    <div key={index} className="bg-white border border-slate-100 p-4 rounded-lg hover:shadow-md transition-all">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                          <h4 className="font-bold text-slate-900">{item.name}</h4>
                        </div>
                        <span className="font-bold text-ujenzi-accent">{item.value.toLocaleString()} /=</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }}></div>
                      </div>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-300 border-2 border-dashed border-slate-200 rounded-xl min-h-[300px]">
                  <PieChart size={64} className="mb-4" />
                  <p className="text-sm uppercase tracking-widest font-bold text-slate-400">Waiting for input...</p>
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