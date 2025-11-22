import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-ujenzi-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-ujenzi-accent/30 rounded-full bg-ujenzi-accent/5 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-4">
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building with <span className="text-ujenzi-accent">Purpose.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Ujenzi Tips is a digital media company revolutionizing the Tanzanian construction sector. We bridge the gap between complex engineering and the everyday builder.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="bg-ujenzi-card p-10 border-l-4 border-ujenzi-accent relative group hover:bg-white/5 transition-colors">
            <div className="absolute top-6 right-6 text-ujenzi-accent/10 group-hover:text-ujenzi-accent/20 transition-colors">
              <Target size={80} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="text-ujenzi-accent" size={24} /> Our Vision
            </h3>
            <p className="text-slate-400 leading-relaxed">
              To be the primary, most reliable, and easily accessible source of construction education in Tanzania, empowering people to build efficiently and cost-effectively.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-ujenzi-card p-10 border-l-4 border-white relative group hover:bg-white/5 transition-colors">
            <div className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors">
              <Lightbulb size={80} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lightbulb className="text-white" size={24} /> Our Mission
            </h3>
            <p className="text-slate-400 leading-relaxed">
              To provide simplified, expert content on all aspects of construction, connect builders with the best stakeholders, and debunk common myths hindering progress.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "Integrity", desc: "Truthful, unbiased info." },
            { icon: Target, title: "Quality", desc: "High standards in every video." },
            { icon: Lightbulb, title: "Innovation", desc: "Using tech to simplify building." },
            { icon: Users, title: "Community", desc: "Building together, stronger." }
          ].map((value, index) => (
            <div key={index} className="p-6 border border-white/10 rounded-sm hover:border-ujenzi-accent transition-colors text-center">
              <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center text-ujenzi-accent mb-4">
                <value.icon size={24} />
              </div>
              <h4 className="text-white font-bold mb-2">{value.title}</h4>
              <p className="text-slate-500 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;