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
      {/* KEPT DARK FOR CINEMA EXPERIENCE */}
      <section id="twende-site" className="py-24 bg-ujenzi-dark relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                {t.twende.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {t.twende.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ujenzi-accent to-white">
                  {t.twende.highlight}
                </span>
              </h2>
            </div>
            
            <a href="https://youtube.com/@ujenzitips?si=FbPZUHIjSKFogwc6" target="_blank" rel="noreferrer">
              <Button variant="outline" icon={Play}>{t.twende.btn}</Button>
            </a>
          </div>

          {/* Featured Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedVideo("npnSan2ckYY")} 
            className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 mb-12 group cursor-pointer shadow-2xl"
          >
            <img 
              src={getThumbnail("npnSan2ckYY")} 
              alt="Featured Site Visit" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-ujenzi-accent/90 rounded-full flex items-center justify-center text-ujenzi-dark shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.twende.heroTitle}</h3>
              <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
                <span className="flex items-center gap-2"><MapPin size={16} className="text-ujenzi-accent"/> {t.twende.location}</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-ujenzi-accent"/> {t.twende.time}</span>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.twende.list.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedVideo(videoIds[index])} 
                className="group bg-white/5 border border-white/5 hover:border-ujenzi-accent/30 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:bg-white/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase z-10">
                    {video.category}
                  </div>
                  <img 
                    src={getThumbnail(videoIds[index])} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Play size={24} className="text-white" fill="white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-ujenzi-accent transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                    {video.desc}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {video.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {durations[index]}</span>
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