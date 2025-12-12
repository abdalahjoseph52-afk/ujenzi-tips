import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { client } from '../../lib/sanity'; // <--- Connect to Sanity

const Testimonials = () => {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "testimonial"]`)
      .then(setReviews)
      .catch(console.error);
  }, []);

  return (
    <section className="py-12 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        
        <div className="mb-10 lg:mb-16">
          <p className="text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
            {t.testimonials.badge}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {reviews.map((item) => (
            <div 
              key={item._id} 
              className="bg-white border border-slate-100 p-6 lg:p-8 rounded-xl relative group shadow-sm hover:shadow-md transition-all"
            >
              <div className="absolute top-4 right-4 text-slate-100 group-hover:text-ujenzi-accent/10 transition-colors">
                <Quote size={32} />
              </div>
              
              <div className="mb-4 relative z-10">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-ujenzi-accent text-xs">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-[10px]">
                  {item.name ? item.name.charAt(0) : 'U'}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xs">{item.name}</h4>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">{item.role}</p>
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