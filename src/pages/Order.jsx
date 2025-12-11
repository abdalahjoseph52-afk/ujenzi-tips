import React, { useState } from 'react';
import { ShoppingCart, Truck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Order = () => {
  const { t } = useLanguage();
  const data = t.order || { materials: [], form: {} };
  const [selectedItem, setSelectedItem] = useState(data.materials[0]?.id || '');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const material = data.materials.find(m => m.id === selectedItem);
  const priceNum = material ? parseInt(material.price.replace(/[^0-9]/g, '')) : 0;
  const qtyNum = parseInt(quantity) || 0;
  const total = (priceNum * qtyNum).toLocaleString();
  const waLink = `https://wa.me/255764533533?text=Order: ${material?.name}, Qty: ${quantity}, Loc: ${location}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-5 lg:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <ShoppingCart size={14} /> {t.order?.title}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Genuine Materials. <br />
              <span className="text-ujenzi-accent">Market Prices.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{t.order?.subtitle}</p>
            <div className="p-6 bg-green-50 border border-green-100 rounded-xl flex items-start gap-4">
              <Truck className="text-green-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Fast Delivery</h4>
                <p className="text-xs text-slate-500">Materials arrive within 24-48 hours.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xl relative">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{data.form.itemLabel}</label>
                <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 rounded-lg focus:outline-none focus:border-ujenzi-accent transition-colors">
                  {data.materials.map((m) => <option key={m.id} value={m.id}>{m.name} - {m.price}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{data.form.qtyLabel}</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 rounded-lg focus:outline-none focus:border-ujenzi-accent" placeholder="0" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{data.form.locLabel}</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 rounded-lg focus:outline-none focus:border-ujenzi-accent" placeholder="e.g. Bunju B" />
              </div>
              <div className="py-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm text-slate-500 font-bold uppercase">Estimated Total</span>
                <span className="text-2xl font-bold text-slate-900">{qtyNum > 0 ? `${total}/=` : '---'}</span>
              </div>
              <a href={quantity && location ? waLink : '#'} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 w-full py-4 font-bold uppercase tracking-widest text-xs rounded-lg transition-all ${quantity && location ? 'bg-slate-900 text-white hover:bg-ujenzi-accent hover:text-slate-900' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
                <ShoppingCart size={18} /> {data.form.btn}
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;