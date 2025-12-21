import React from 'react';
import { Users, Briefcase, Award, Hammer } from 'lucide-react';

const StatItem = ({ icon: Icon, number, label }) => (
  <div className="flex flex-col items-center text-center group cursor-default p-4">
    <div className="mb-6 p-5 rounded-full bg-white/5 text-ujenzi-accent group-hover:bg-ujenzi-accent group-hover:text-ujenzi-dark transition-all duration-500 ring-1 ring-white/10 group-hover:ring-ujenzi-accent shadow-lg">
      <Icon size={40} strokeWidth={1} /> 
    </div>
    <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
      {number}
    </h3>
    <p className="text-slate-400 font-medium uppercase tracking-widest text-xs border-t border-white/10 pt-4 w-full group-hover:border-ujenzi-accent/50 group-hover:text-ujenzi-accent transition-colors">
      {label}
    </p>
  </div>
);

const StatsSection = () => {
  const stats = [
    { icon: Users, number: "50k+", label: "Watembeleaji Kila Mwezi" },
    { icon: Hammer, number: "1.2k", label: "Vifaa Vilivyokadiriwa" },
    { icon: Briefcase, number: "850+", label: "Miradi Iliyosimamiwa" },
    { icon: Award, number: "98%", label: "Wateja Wameridhika" }
  ];

  return (
    <div className="bg-slate-900 py-24 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      {/* 🔥 REKEBISHO HAPA: Wide Container */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;