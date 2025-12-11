import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <p className="text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">
            {t.testimonials.badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.list.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 p-8 rounded-2xl relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-ujenzi-accent/10 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="mb-6 relative z-10">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-ujenzi-accent text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">{item.name}</h4>
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;