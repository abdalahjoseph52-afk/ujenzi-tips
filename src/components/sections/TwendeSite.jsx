import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, MapPin, Clock } from 'lucide-react';
import Button from '../ui/Button';
import VideoModal from '../ui/VideoModal';
import { useLanguage } from '../../hooks/useLanguage';

const TwendeSite = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { t } = useLanguage();

  const videoIds = ["npnSan2ckYY", "ZRU_iTxXeOs", "OlSK2iaVAVM"];
  const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const durations = ["14:10", "08:20", "12:15"];

  return (
    <>
      <section id="twende-site" className="py-12 lg:py-24 bg-ujenzi-dark relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                {t.twende.badge}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                {t.twende.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-white">
                  {t.twende.highlight}
                </span>
              </h2>
            </div>
            
            <a href="https://youtube.com/@ujenzitips?si=FbPZUHIjSKFogwc6" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" icon={Play} className="w-full justify-center text-sm py-3">{t.twende.btn}</Button>
            </a>
          </div>

          {/* Featured Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedVideo("npnSan2ckYY")} 
            className="relative w-full aspect-video lg:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 mb-8 lg:mb-12 group cursor-pointer shadow-2xl"
          >
            <img 
              src={getThumbnail("npnSan2ckYY")} 
              alt="Featured Site Visit" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 lg:w-20 lg:h-20 bg-ujenzi-accent/90 rounded-full flex items-center justify-center text-ujenzi-dark shadow-lg group-hover:scale-110 transition-transform">
                <Play size={24} className="lg:w-8 lg:h-8" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 lg:p-12">
              <h3 className="text-xl lg:text-4xl font-bold text-white mb-2">{t.twende.heroTitle}</h3>
              <div className="flex items-center gap-4 lg:gap-6 text-slate-300 text-xs lg:text-sm font-medium">
                <span className="flex items-center gap-1"><MapPin size={14} className="text-ujenzi-accent"/> {t.twende.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Grid - Horizontal Scroll on small mobile? No, Stacked is clearer. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {t.twende.list.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedVideo(videoIds[index])} 
                className="group bg-white/5 border border-white/5 rounded-lg overflow-hidden flex flex-row sm:flex-col h-24 sm:h-auto cursor-pointer"
              >
                <div className="relative w-32 sm:w-full sm:h-48 overflow-hidden shrink-0">
                  <img 
                    src={getThumbnail(videoIds[index])} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 lg:p-4 flex flex-col justify-center w-full">
                  <h4 className="text-sm lg:text-lg font-bold text-white mb-1 line-clamp-2 leading-tight group-hover:text-ujenzi-accent">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-auto">
                    <span className="flex items-center gap-1"><MapPin size={10} /> {video.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
};

export default TwendeSite;