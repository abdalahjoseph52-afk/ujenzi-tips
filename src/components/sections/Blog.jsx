import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Tag, BookOpen } from 'lucide-react';
import Button from '../ui/Button';
import BlogModal from '../ui/BlogModal';
import { useLanguage } from '../../hooks/useLanguage';
import { toast } from 'sonner';

const Blog = () => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const richData = [
    { image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop", author: "Malongo Mwasanga", readTime: "5 min read" },
    { image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1884&auto=format&fit=crop", author: "Abdalah Wambura", readTime: "8 min read" },
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", author: "Mohammed Musabaha", readTime: "6 min read" },
    { image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2131&auto=format&fit=crop", author: "Malongo Mwasanga", readTime: "4 min read" }
  ];

  return (
    <>
      <section id="blog" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">
                <BookOpen size={16} /> {t.blog.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {t.blog.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-yellow-600">
                  {t.blog.highlight}
                </span>
              </h2>
            </div>
            <div onClick={() => toast.info("Full Blog Archive launching Q2 2026")}>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">{t.blog.btn}</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.blog.list.map((article, index) => {
              const richArticle = { ...article, ...richData[index] };
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedArticle(richArticle)}
                  className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:border-ujenzi-accent/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full md:w-48 h-48 shrink-0 overflow-hidden relative rounded-xl">
                    <img 
                      src={richArticle.image} 
                      alt={richArticle.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold text-slate-900 uppercase tracking-wider rounded-sm">
                      {richArticle.category}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between py-2 pr-4">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                        <span className="flex items-center gap-1"><Tag size={12} /> {richArticle.category}</span>
                        <span>•</span>
                        <span>{richArticle.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-ujenzi-accent transition-colors">
                        {richArticle.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {richArticle.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs text-slate-400 font-bold">{richArticle.author}</span>
                      <div className="flex items-center gap-1 text-xs font-bold text-ujenzi-accent uppercase tracking-widest group-hover:translate-x-1 transition-transform">
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
      <BlogModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </>
  );
};

export default Blog;