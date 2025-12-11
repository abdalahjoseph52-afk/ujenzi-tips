import React from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Accordion from '../components/ui/Accordion';

const FAQ = () => {
  const { t } = useLanguage();
  const faqItems = t.faq?.items || [];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-5 lg:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-ujenzi-accent/10 rounded-full mb-6 text-ujenzi-accent">
              <HelpCircle size={32} />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">{t.faq?.title}</h1>
            <p className="text-slate-500 text-lg">{t.faq?.subtitle}</p>
          </div>
          <Accordion items={faqItems} />
          <div className="mt-12 bg-white border border-slate-200 p-8 text-center rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-500 mb-6">We are ready to answer your specific project inquiries.</p>
            <a href="https://wa.me/255764533533" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 font-bold uppercase tracking-widest rounded-lg hover:bg-ujenzi-accent hover:text-slate-900 transition-colors">
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;