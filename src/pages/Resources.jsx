import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Tag } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../hooks/useLanguage';

const Resources = () => {
  const { t } = useLanguage();

  const handleDownload = (fileName) => {
    toast.success(`Downloading ${fileName}...`, { description: "This feature will be available once we upload the PDFs." });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-5 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <FileText size={14} /> Free Downloads
            </div>
            <h1 className="text-3xl lg:text-6xl font-bold text-slate-900 mb-4">{t.resources?.title}</h1>
            <p className="text-slate-500 text-lg">{t.resources?.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.resources?.list.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-lg hover:border-ujenzi-accent/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-slate-100 group-hover:text-slate-50 transition-colors">
                  <FileText size={100} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                      <Tag size={12} /> {item.category}
                    </span>
                    <span className="text-xs text-ujenzi-accent font-bold">{item.size}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ujenzi-accent transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed border-l-2 border-slate-100 pl-4">{item.desc}</p>
                  <button onClick={() => handleDownload(item.title)} className="flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-ujenzi-accent transition-colors uppercase tracking-widest group/btn">
                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                      <Download size={16} />
                    </span>
                    {t.resources?.btn}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;