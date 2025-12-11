import React from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Accordion from '../components/ui/Accordion';

const FAQ = () => {
  const { t } = useLanguage();

  // Safety check for data
  const faqItems = t.faq?.items || [];

  return (
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-ujenzi-accent/10 rounded-full mb-6 text-ujenzi-accent">
              <HelpCircle size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.faq?.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.faq?.subtitle}
            </p>
          </div>

          {/* The Accordion */}
          <Accordion items={faqItems} />

          {/* Still have questions? */}
          <div className="mt-16 bg-white/5 border border-white/10 p-8 text-center rounded-sm">
            <h3 className="text-xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-slate-400 mb-6">We are ready to answer your specific project inquiries.</p>
            <a 
              href="https://wa.me/255764533533" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-ujenzi-accent text-ujenzi-dark px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;