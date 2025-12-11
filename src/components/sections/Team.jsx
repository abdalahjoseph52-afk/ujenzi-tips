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
        <div className="mb-12 lg:mb-20 text-center max-w-3xl mx-auto">
          <p className="text-ujenzi-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">{t.team.badge}</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t.team.title} <span className="text-ujenzi-accent">{t.team.highlight}</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm lg:text-lg">{t.team.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.team.list.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              // ADJUSTED HEIGHT: Aspect ratio for mobile, Fixed height for Desktop
              className="group relative aspect-[3/4] md:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img src={images[index]} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-3 py-1 bg-ujenzi-accent text-ujenzi-dark text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-sm">{leader.role}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-4">{leader.name}</h3>
                
                {/* On Mobile: Bio is hidden by default to save space, shown on tap/hover if needed, or kept brief */}
                <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-slate-200 text-xs lg:text-sm leading-relaxed mb-4 line-clamp-2 lg:line-clamp-none">{leader.bio}</p>
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