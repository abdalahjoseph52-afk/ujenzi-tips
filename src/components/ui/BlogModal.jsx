import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Share2, MessageCircle } from 'lucide-react';

const BlogModal = ({ article, onClose }) => {
  
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [article]);

  if (!article) return null;

  // 1. SMART SHARE FUNCTION
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: `Read this amazing construction guide: ${article.title}`,
          url: window.location.href, // Shares the current site link
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("Link copied to clipboard!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // 2. SMART WHATSAPP MESSAGE
  // This grabs the specific article title and puts it in the message
  const waMessage = `Habari Ujenzi Tips! I just read your article "${article.title}" and I would like to book a consultation regarding this topic.`;
  const waLink = `https://wa.me/255616166496?text=${encodeURIComponent(waMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ujenzi-dark/95 backdrop-blur-sm"
        />

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="relative w-full max-w-4xl h-[85vh] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col"
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-ujenzi-accent hover:text-ujenzi-dark transition-colors"
          >
            <X size={24} />
          </button>

          <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-ujenzi-accent">
            
            <div className="relative h-64 md:h-80 w-full shrink-0">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="inline-block px-3 py-1 bg-ujenzi-accent text-ujenzi-dark text-xs font-bold uppercase tracking-widest rounded-sm mb-3 w-max">
                  {article.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight shadow-black drop-shadow-md">
                  {article.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 p-6 border-b border-slate-100 bg-slate-50 text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-ujenzi-accent" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-ujenzi-accent" />
                {article.readTime}
              </div>
              
              {/* SHARE BUTTON */}
              <button 
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 text-ujenzi-dark hover:text-ujenzi-accent transition-colors cursor-pointer"
              >
                <Share2 size={16} /> Share
              </button>
            </div>

            <div className="p-6 md:p-12 max-w-3xl mx-auto">
              <div className="text-lg text-slate-700 leading-relaxed space-y-6 font-medium">
                {article.content ? article.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )) : <p>{article.excerpt}</p>}
              </div>

              <div className="mt-12 p-8 bg-ujenzi-dark rounded-xl text-center border border-ujenzi-accent/20">
                <h3 className="text-white text-xl font-bold mb-2">Need help with this?</h3>
                <p className="text-slate-400 mb-6">Get expert advice on your specific plot or project.</p>
                
                {/* WHATSAPP BUTTON */}
                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-ujenzi-accent text-ujenzi-dark font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
                >
                  <MessageCircle size={20} /> Book Consultation
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BlogModal;