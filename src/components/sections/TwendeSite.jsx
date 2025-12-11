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
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">
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
              <Button variant="outline" icon={Play} className="w-full justify-center">{t.twende.btn}</Button>
            </a>
          </div>

          {/* Featured Video - Aspect Ratio Fixed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedVideo("npnSan2ckYY")} 
            className="relative w-full aspect-video lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 mb-8 lg:mb-12 group cursor-pointer shadow-2xl"
          >
            <img 
              src={getThumbnail("npnSan2ckYY")} 
              alt="Featured Site Visit" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-ujenzi-accent/90 rounded-full flex items-center justify-center text-ujenzi-dark shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Play size={24} className="lg:w-8 lg:h-8" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 lg:p-12">
              <h3 className="text-xl lg:text-4xl font-bold text-white mb-2 lg:mb-4">{t.twende.heroTitle}</h3>
              <div className="flex items-center gap-4 lg:gap-6 text-slate-300 text-xs lg:text-sm font-medium">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-ujenzi-accent"/> {t.twende.location}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-ujenzi-accent"/> {t.twende.time}</span>
              </div>
            </div>
          </motion.div>

          {/* Grid - Scrollable on Mobile or Stacked? Stacked is better for visibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.twende.list.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedVideo(videoIds[index])} 
                className="group bg-white/5 border border-white/5 hover:border-ujenzi-accent/30 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:bg-white/10 flex flex-row sm:flex-col h-28 sm:h-auto"
              >
                <div className="relative w-1/3 sm:w-full sm:h-48 overflow-hidden shrink-0">
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[8px] sm:text-[10px] font-bold text-white uppercase z-10">
                    {video.category}
                  </div>
                  <img 
                    src={getThumbnail(videoIds[index])} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center w-2/3 sm:w-full">
                  <h4 className="text-sm lg:text-lg font-bold text-white mb-1 lg:mb-2 line-clamp-2 group-hover:text-ujenzi-accent transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-slate-400 text-xs line-clamp-1 mb-2 hidden sm:block">
                    {video.desc}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-auto">
                    <span className="flex items-center gap-1"><MapPin size={10} /> {video.location}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {durations[index]}</span>
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