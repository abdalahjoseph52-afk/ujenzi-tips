import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-[10px] font-bold uppercase tracking-widest mb-4 rounded-full">
            Who We Are
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
            Building with <span className="text-ujenzi-accent">Purpose.</span>
          </h2>
          <p className="text-slate-600 text-sm lg:text-lg leading-relaxed px-2">
            Ujenzi Tips is a digital media company revolutionizing the Tanzanian construction sector. We bridge the gap between complex engineering and the everyday builder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-20">
          <div className="bg-slate-50 p-6 lg:p-10 rounded-2xl border border-slate-100 relative group overflow-hidden">
            <h3 className="text-lg lg:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-ujenzi-accent"><Target size={20} /></div>
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed relative z-10">
              To be the primary, most reliable, and easily accessible source of construction education in Tanzania.
            </p>
          </div>

          <div className="bg-ujenzi-dark p-6 lg:p-10 rounded-2xl border border-slate-800 relative group overflow-hidden">
            <h3 className="text-lg lg:text-2xl font-bold text-white mb-3 flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg shadow-sm text-ujenzi-accent"><Lightbulb size={20} /></div>
              Our Mission
            </h3>
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed relative z-10">
              To provide simplified, expert content on all aspects of construction, connecting builders with stakeholders.
            </p>
          </div>
        </div>

        {/* 2x2 Grid for Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {[
            { icon: ShieldCheck, title: "Integrity", desc: "Truthful info." },
            { icon: Target, title: "Quality", desc: "High standards." },
            { icon: Lightbulb, title: "Innovation", desc: "Tech solutions." },
            { icon: Users, title: "Community", desc: "Building together." }
          ].map((value, index) => (
            <div key={index} className="p-4 lg:p-6 bg-white border border-slate-100 rounded-xl hover:border-ujenzi-accent/30 text-center group shadow-sm transition-all">
              {/* FIXED LINE BELOW: Added 'group-hover:' to avoid conflict */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto bg-slate-50 group-hover:bg-ujenzi-accent/10 rounded-full flex items-center justify-center text-slate-400 group-hover:text-ujenzi-accent transition-colors mb-2 lg:mb-4">
                <value.icon size={20} />
              </div>
              <h4 className="text-slate-900 font-bold text-xs lg:text-sm mb-1">{value.title}</h4>
              <p className="text-slate-500 text-[10px] hidden lg:block">{value.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;