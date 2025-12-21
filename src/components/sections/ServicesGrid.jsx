import React from 'react';
import { 
  ArrowRight, Calculator, HardHat, FileSignature, Building, Ruler 
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, link }) => (
  <div className="group bg-white border border-slate-200 hover:border-ujenzi-accent hover:shadow-2xl transition-all duration-300 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
    <div className="absolute top-0 right-0 w-20 h-20 bg-ujenzi-accent/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
    <div className="mb-6 w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-ujenzi-accent flex items-center justify-center transition-colors duration-300 shadow-sm border border-slate-100 relative z-10">
      <Icon size={32} strokeWidth={1.5} className="text-slate-700 group-hover:text-ujenzi-dark transition-colors" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-ujenzi-dark transition-colors relative z-10">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed flex-grow text-sm md:text-base relative z-10">{desc}</p>
    <a href={link} className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider group/link relative z-10">
      <span className="border-b-2 border-transparent group-hover/link:border-ujenzi-accent transition-all">Angalia</span>
      <ArrowRight size={16} className="text-ujenzi-accent group-hover/link:translate-x-1 transition-transform" />
    </a>
  </div>
);

const ServicesGrid = () => {
  const services = [
    {
      icon: Calculator,
      title: "Material Calculator",
      desc: "Epuka wizi na upotevu site. Pata idadi kamili ya matofali, mifuko ya simenti na mchanga kwa sekunde chache.",
      link: "/calculator"
    },
    {
      icon: FileSignature,
      title: "Digital QR Cards",
      desc: "Tengeneza kitambulisho chako cha kazi cha kidijitali. Wape wateja wako imani na uonekana wa kishua.",
      link: "/?tool=qr"
    },
    {
      icon: HardHat,
      title: "Tafuta Fundi",
      desc: "Orodha ya mafundi waliohakikiwa, maduka ya vifaa, na wataalamu wa ujenzi karibu na eneo lako.",
      link: "/locations"
    },
    {
      icon: Building,
      title: "Ramani za Kisasa",
      desc: "Chagua ramani za nyumba zilizokamilika (Standard & Premium) zinazoendana na bajeti yako.",
      link: "/plans"
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-10 right-0 p-10 opacity-[0.03] pointer-events-none">
         <Ruler size={400} strokeWidth={0.5} />
      </div>

      {/* 🔥 REKEBISHO HAPA: Wide Container */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-ujenzi-accent font-bold uppercase text-xs tracking-[0.2em] mb-2 block">Huduma Zetu Kuu</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Kila Kitu Unachohitaji <br/>Kujenga kwa Amani.
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-600 hover:text-ujenzi-accent font-bold transition-colors border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-50">
            Ona Huduma Zote <ArrowRight size={18}/>
          </button>
        </div>

        {/* Grid imetanuliwa gap-8 ili ijae vizuri */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesGrid;