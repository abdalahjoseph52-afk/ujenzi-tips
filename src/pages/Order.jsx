import React, { useState } from 'react';
import { ShoppingCart, Truck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from '../components/layout/Navbar'; // We import but don't use inside if App.jsx handles it globally. Wait, let's stick to global structure.

// Since App.jsx handles Navbar/Footer globally now, we remove them from here.
const Order = () => {
  const { t } = useLanguage();
  const data = t.order || { materials: [], form: {} }; // Safety default

  // Form State
  const [selectedItem, setSelectedItem] = useState(data.materials[0]?.id || '');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  // Find selected material object
  const material = data.materials.find(m => m.id === selectedItem);

  // Simple Total Calculation (stripping non-numeric chars from price string)
  const priceNum = material ? parseInt(material.price.replace(/[^0-9]/g, '')) : 0;
  const qtyNum = parseInt(quantity) || 0;
  const total = (priceNum * qtyNum).toLocaleString();

  // WhatsApp Link Logic
  const waMessage = `Hello Ujenzi Tips, I would like to order: %0A%0A📦 *Item:* ${material?.name}%0A🔢 *Qty:* ${quantity} ${material?.unit}%0A📍 *Location:* ${location}%0A💰 *Est. Total:* TZS ${total}/=%0A%0APlease confirm availability.`;
  const waLink = `https://wa.me/255764533533?text=${waMessage}`;

  return (
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      {/* Navbar handled globally in App.jsx */}
      
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Pitch */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <ShoppingCart size={14} /> {t.order?.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Genuine Materials. <br />
              <span className="text-ujenzi-accent">Market Prices.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {t.order?.subtitle}
            </p>

            <ul className="space-y-4 mb-8">
              {t.order?.steps.map((step, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-ujenzi-accent">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ul>

            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-sm flex items-start gap-4">
              <Truck className="text-green-500 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Fast Delivery</h4>
                <p className="text-xs text-slate-400">We coordinate directly with wholesalers to ensure your materials arrive on site within 24-48 hours.</p>
              </div>
            </div>
          </div>

          {/* Right: Order Calculator Form */}
          <div className="bg-ujenzi-card border border-white/10 p-8 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ujenzi-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
              
              {/* Material Select */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{data.form.itemLabel}</label>
                <select 
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full bg-ujenzi-dark border border-white/10 p-4 text-white focus:border-ujenzi-accent focus:outline-none rounded-sm transition-colors cursor-pointer"
                >
                  {data.materials.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} - {m.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{data.form.qtyLabel} ({material?.unit})</label>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 50" 
                  className="w-full bg-ujenzi-dark border border-white/10 p-4 text-white focus:border-ujenzi-accent focus:outline-none rounded-sm transition-colors"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">{data.form.locLabel}</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Bunju B, Mtaa wa Amani" 
                  className="w-full bg-ujenzi-dark border border-white/10 p-4 text-white focus:border-ujenzi-accent focus:outline-none rounded-sm transition-colors"
                />
              </div>

              {/* Total Display */}
              <div className="py-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm text-slate-400 font-bold uppercase">Estimated Total</span>
                <span className="text-2xl font-bold text-ujenzi-accent">
                  {qtyNum > 0 ? `${total}/=` : '---'}
                </span>
              </div>

              {/* Submit Button */}
              <a 
                href={quantity && location ? waLink : '#'}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-4 font-bold uppercase tracking-widest text-xs rounded-sm transition-all ${
                  quantity && location 
                    ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg cursor-pointer' 
                    : 'bg-white/5 text-slate-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={18} /> {data.form.btn}
              </a>

            </form>
          </div>

        </div>
      </div>
      {/* Footer handled globally in App.jsx */}
    </div>
  );
};

export default Order;