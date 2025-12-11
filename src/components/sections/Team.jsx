import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

// LOCAL IMAGES
import malongoImg from '../../assets/malongo.jpg';
import abdalahImg from '../../assets/abdalah.jpg';
import moImg from '../../assets/mo.jpg';

const Team = () => {
  const { t } = useLanguage();
  const images = [malongoImg, abdalahImg, moImg];
  const links = [
    "https://www.instagram.com/malongo_mwansanga?igsh=ZDBrajAzb2V6cWtp",
    "https://www.instagram.com/abdalahwambura?igsh=MTg5NWZraXA5eTcxZw==",
    "https://www.instagram.com/kreative_mo?igsh=MTl3ZHhkanFhdmRrdw=="
  ];

  return (
    <section id="team" className="py-12 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="mb-10 lg:mb-20 text-center max-w-3xl mx-auto">
          <p className="text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">{t.team.badge}</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t.team.title} <span className="text-ujenzi-accent">{t.team.highlight}</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm lg:text-lg">{t.team.desc}</p>
        </div>

        {/* MOBILE GRID FIX: Changed to grid-cols-2 (2 per row) on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {t.team.list.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              // Aspect ratio ensures consistent height
              className="group relative aspect-[3/4] md:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img src={images[index]} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Compact Padding for Mobile */}
              <div className="absolute bottom-0 left-0 w-full p-3 md:p-6 lg:p-8 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Role Badge: Smaller on mobile */}
                <div className="inline-block px-2 md:px-3 py-1 bg-ujenzi-accent text-ujenzi-dark text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-full mb-1 md:mb-3 shadow-sm line-clamp-1">
                  {leader.role}
                </div>
                
                {/* Name: Readable size */}
                <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-4 leading-tight">
                  {leader.name}
                </h3>
                
                {/* Bio: Hidden on tiny mobile screens to save space, visible on tablet/desktop */}
                <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-slate-200 text-xs lg:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-2 hidden sm:block">
                    {leader.bio}
                  </p>
                  
                  {/* Connect Button */}
                  <div className="flex gap-4 text-white">
                    <a 
                      href={links[index]} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-ujenzi-accent transition-colors flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/10 px-2 py-1 rounded md:bg-transparent md:p-0"
                    >
                      <Instagram size={14} className="md:w-4 md:h-4" /> 
                      <span className="hidden sm:inline">{t.team.connect}</span>
                      <span className="sm:hidden">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;