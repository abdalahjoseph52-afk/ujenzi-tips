import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import Button from '../ui/Button';
import BlogModal from '../ui/BlogModal';
import { useLanguage } from '../../hooks/useLanguage';
import { toast } from 'sonner';

const Blog = () => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const richData = [
    { image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop", author: "Malongo M.", readTime: "5 min" },
    { image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1884&auto=format&fit=crop", author: "Abdalah W.", readTime: "8 min" },
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", author: "Mohammed M.", readTime: "6 min" },
    { image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2131&auto=format&fit=crop", author: "Malongo M.", readTime: "4 min" }
  ];

  return (
    <>
      <section id="blog" className="py-12 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
                <BookOpen size={14} /> {t.blog.badge}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {t.blog.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-yellow-600">
                  {t.blog.highlight}
                </span>
              </h2>
            </div>
            <div onClick={() => toast.info("Full Blog Archive launching Q2 2026")}>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-xs py-3">{t.blog.btn}</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {t.blog.list.map((article, index) => {
              const richArticle = { ...article, ...richData[index] };
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedArticle(richArticle)}
                  // COMPACT HORIZONTAL LAYOUT
                  className="group flex flex-row gap-4 lg:gap-6 bg-white border border-slate-100 p-3 lg:p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer items-center"
                >
                  <div className="w-24 h-24 lg:w-48 lg:h-48 shrink-0 overflow-hidden relative rounded-lg">
                    <img 
                      src={richArticle.image} 
                      alt={richArticle.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex flex-col justify-center py-1 w-full">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-1 font-bold uppercase">
                      <span className="text-ujenzi-accent">{richArticle.category}</span>
                      <span>•</span>
                      <span>{richArticle.readTime}</span>
                    </div>
                    <h3 className="text-sm lg:text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-ujenzi-accent transition-colors line-clamp-2">
                      {richArticle.title}
                    </h3>
                    <p className="text-slate-500 text-xs lg:text-sm line-clamp-2 mb-2 hidden lg:block">
                      {richArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-1 text-[10px] lg:text-xs font-bold text-slate-900 uppercase tracking-widest mt-auto">
                      {t.blog.read} <ArrowUpRight size={12} />
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