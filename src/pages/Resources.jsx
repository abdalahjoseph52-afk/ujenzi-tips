import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Tag } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../hooks/useLanguage';

// Note: Navbar and Footer are removed because they are handled in App.jsx

const Resources = () => {
  const { t } = useLanguage();

  const handleDownload = (fileName) => {
    // In a real app, this would be a link to a PDF file
    // For now, we simulate a download to show it works
    toast.success(`Downloading ${fileName}...`, {
      description: "This feature will be available once we upload the PDFs."
    });
  };

  return (
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      
      {/* Added top padding (pt-40) to create space below the fixed Header */}
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <FileText size={14} /> Free Downloads
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.resources?.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.resources?.subtitle}
            </p>
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.resources?.list.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-ujenzi-card border border-white/5 p-8 hover:border-ujenzi-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FileText size={100} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                      <Tag size={12} /> {item.category}
                    </span>
                    <span className="text-xs text-ujenzi-accent font-bold">{item.size}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ujenzi-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed border-l-2 border-white/5 pl-4">
                    {item.desc}
                  </p>

                  <button 
                    onClick={() => handleDownload(item.title)}
                    className="flex items-center gap-3 text-sm font-bold text-white hover:text-ujenzi-accent transition-colors uppercase tracking-widest group/btn"
                  >
                    <span className="w-8 h-8 rounded-full bg-ujenzi-accent text-ujenzi-dark flex items-center justify-center group-hover/btn:scale-110 transition-transform">
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