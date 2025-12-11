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
    <section id="team" className="py-12 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="mb-10 lg:mb-20 text-center max-w-3xl mx-auto">
          <p className="text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-3">{t.team.badge}</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
            {t.team.title} <span className="text-ujenzi-accent">{t.team.highlight}</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm lg:text-lg">{t.team.desc}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {t.team.list.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative aspect-[3/4] md:h-[450px] rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-100"
            >
              <div className="absolute inset-0">
                <img src={images[index]} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-3 lg:p-6 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block px-2 py-0.5 bg-ujenzi-accent text-ujenzi-dark text-[8px] lg:text-[10px] font-bold uppercase tracking-wider rounded-sm mb-1 lg:mb-3 shadow-sm truncate max-w-full">
                  {leader.role}
                </div>
                <h3 className="text-sm lg:text-2xl font-bold text-white mb-1 lg:mb-4 leading-tight">{leader.name}</h3>
                <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-slate-200 text-sm leading-relaxed mb-4 line-clamp-3">{leader.bio}</p>
                </div>
                <a href={links[index]} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] lg:text-xs font-bold text-white/90 hover:text-ujenzi-accent uppercase tracking-widest mt-1">
                   <Instagram size={12} className="lg:w-4 lg:h-4" /> 
                   <span className="lg:inline">{t.team.connect}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;