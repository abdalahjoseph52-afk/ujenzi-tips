import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';
import Button from '../ui/Button';
import BlogModal from '../ui/BlogModal';
import { useLanguage } from '../../hooks/useLanguage';
import { toast } from 'sonner';

const Blog = () => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState(null);

  // CONSTANT IMAGES & AUTHORS (These don't change with language)
  const richData = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop",
      author: "Malongo Mwasanga",
      readTime: "5 min read"
    },
    {
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1884&auto=format&fit=crop",
      author: "Abdalah Wambura",
      readTime: "8 min read"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      author: "Mohammed Musabaha",
      readTime: "6 min read"
    },
    {
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2131&auto=format&fit=crop",
      author: "Malongo Mwasanga",
      readTime: "4 min read"
    }
  ];

  return (
    <>
      <section id="blog" className="py-24 bg-ujenzi-dark border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">
                <span className="w-3 h-3 bg-white rounded-full"></span>
                {t.blog.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {t.blog.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-white">
                  {t.blog.highlight}
                </span>
              </h2>
            </div>
            <div onClick={() => toast.info("Full Blog Archive launching Q2 2026", { description: "We are currently populating our database." })}>
              <Button variant="outline">{t.blog.btn}</Button>
            </div>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.blog.list.map((article, index) => {
              // MERGE LOGIC: Combine the translated text (article) with the static images (richData)
              const richArticle = { ...article, ...richData[index] };

              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedArticle(richArticle)}
                  className="group flex flex-col md:flex-row gap-6 bg-ujenzi-card border border-white/5 p-4 hover:border-ujenzi-accent/50 transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-full md:w-48 h-48 shrink-0 overflow-hidden relative bg-slate-800">
                    <img 
                      src={richArticle.image} 
                      alt={richArticle.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-2 left-2 bg-ujenzi-dark/90 backdrop-blur px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                      {richArticle.category}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between py-2 pr-4">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                        <span className="flex items-center gap-1"><Tag size={12} /> {richArticle.category}</span>
                        <span>•</span>
                        <span>{richArticle.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-ujenzi-accent transition-colors">
                        {richArticle.title}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {richArticle.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-xs text-slate-500 font-medium">{richArticle.readTime}</span>
                      <div className="flex items-center gap-1 text-xs font-bold text-ujenzi-accent uppercase tracking-widest group-hover:translate-x-1 transition-transform cursor-pointer">
                        {t.blog.read} <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* THE READER MODAL */}
      <BlogModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </>
  );
};

export default Blog;