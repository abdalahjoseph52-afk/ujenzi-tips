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
  
  // Combine translation data with static assets
  const images = [malongoImg, abdalahImg, moImg];
  const links = [
    "https://www.instagram.com/malongo_mwansanga?igsh=ZDBrajAzb2V6cWtp",
    "https://www.instagram.com/abdalahwambura?igsh=MTg5NWZraXA5eTcxZw==",
    "https://www.instagram.com/kreative_mo?igsh=MTl3ZHhkanFhdmRrdw=="
  ];

  return (
    <section id="team" className="py-24 bg-ujenzi-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">{t.team.badge}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t.team.title} <span className="text-ujenzi-accent">{t.team.highlight}</span>
          </h2>
          <p className="text-slate-400 max-w-md mt-4 leading-relaxed text-sm">{t.team.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.team.list.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] bg-ujenzi-card border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img src={images[index]} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ujenzi-dark via-ujenzi-dark/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-2 py-1 bg-ujenzi-accent text-ujenzi-dark text-[10px] font-bold uppercase tracking-widest mb-3">{leader.role}</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-sans">{leader.name}</h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 border-l-2 border-white/20 pl-4">{leader.bio}</p>
                  <div className="flex gap-4 text-white">
                    <a href={links[index]} target="_blank" rel="noreferrer" className="hover:text-ujenzi-accent transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                      <Instagram size={18} /> {t.team.connect}
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