import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-4 rounded-full">
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Building with <span className="text-ujenzi-accent">Purpose.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Ujenzi Tips is a digital media company revolutionizing the Tanzanian construction sector. We bridge the gap between complex engineering and the everyday builder.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={100} className="text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-ujenzi-accent"><Target size={24} /></div>
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              To be the primary, most reliable, and easily accessible source of construction education in Tanzania, empowering people to build efficiently and cost-effectively.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-ujenzi-dark p-10 rounded-2xl border border-slate-800 hover:shadow-lg transition-all relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lightbulb size={100} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg shadow-sm text-ujenzi-accent"><Lightbulb size={24} /></div>
              Our Mission
            </h3>
            <p className="text-slate-400 leading-relaxed relative z-10">
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
            <div key={index} className="p-6 bg-white border border-slate-100 rounded-xl hover:shadow-md hover:border-ujenzi-accent/30 transition-all text-center group">
              <div className="w-12 h-12 mx-auto bg-slate-50 group-hover:bg-ujenzi-accent/10 rounded-full flex items-center justify-center text-slate-400 group-hover:text-ujenzi-accent transition-colors mb-4">
                <value.icon size={24} />
              </div>
              <h4 className="text-slate-900 font-bold mb-2">{value.title}</h4>
              <p className="text-slate-500 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;