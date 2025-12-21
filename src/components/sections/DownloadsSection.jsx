import React from 'react';
import { FileText, FileSpreadsheet, Download, Lock, CheckCircle2 } from 'lucide-react';

const ResourceCard = ({ title, type, size, downloads, isLocked }) => {
  // Tofautisha rangi kulingana na aina ya faili (Excel = Kijani, PDF = Nyekundu/Slate)
  const Icon = type === 'Excel' ? FileSpreadsheet : FileText;
  const iconColor = type === 'Excel' ? 'text-green-600' : 'text-red-500';
  const bgColor = type === 'Excel' ? 'bg-green-50' : 'bg-red-50';

  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      
      {/* Mapambo ya Background */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

      {/* Header ya Kadi */}
      <div className="flex items-start justify-between relative z-10">
        <div className={`p-4 rounded-xl ${bgColor} ${iconColor}`}>
          <Icon size={32} />
        </div>
        {isLocked && (
          <div className="bg-slate-100 text-slate-500 p-2 rounded-full" title="Inahitaji Usajili">
            <Lock size={16} />
          </div>
        )}
      </div>

      {/* Maelezo */}
      <div className="mt-6 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${type === 'Excel' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {type}
          </span>
          <span className="text-xs font-bold text-slate-400">• {size}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-ujenzi-accent transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">
          Pakua nyaraka hii bure ili ikusaidie kusimamia mradi wako kwa ufanisi zaidi.
        </p>

        {/* Kitufe */}
        <button className={`w-full py-3 rounded-xl border-2 font-bold flex items-center justify-center gap-2 transition-all
          ${isLocked 
            ? 'border-slate-100 text-slate-400 cursor-not-allowed' 
            : 'border-slate-100 text-slate-600 hover:border-ujenzi-accent hover:bg-ujenzi-accent hover:text-ujenzi-dark shadow-sm hover:shadow-md'
          }
        `}>
          {isLocked ? (
            <span className="flex items-center gap-2"><Lock size={16}/> Imeungwa</span>
          ) : (
            <>
              <Download size={18} /> Download
            </>
          )}
        </button>
      </div>

      {/* Social Proof ndogo chini */}
      <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-1 text-xs text-slate-400 font-medium">
        <CheckCircle2 size={12} className="text-green-500" />
        {downloads} wamepakua wiki hii
      </div>
    </div>
  );
};

const DownloadsSection = () => {
  const resources = [
    {
      title: "Mkataba wa Kazi (Fundi)",
      type: "PDF",
      size: "2.4 MB",
      downloads: "1.2k",
      isLocked: false
    },
    {
      title: "Bajeti ya Nyumba (Template)",
      type: "Excel",
      size: "1.8 MB",
      downloads: "850",
      isLocked: false
    },
    {
      title: "Checklist ya Vifaa vya Msingi",
      type: "PDF",
      size: "500 KB",
      downloads: "3.4k",
      isLocked: false
    },
    {
      title: "Ramani ya Nyumba (Mfano)",
      type: "PDF",
      size: "5.2 MB",
      downloads: "5k+",
      isLocked: true // Hii ni mfano wa Premium content
    }
  ];

  return (
    <div className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-ujenzi-accent font-bold uppercase text-sm tracking-widest">Maktaba ya Ujenzi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              Nyaraka Muhimu <br/>Kiganjani Mwako.
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Tumekuandalia nyaraka hizi ili kukurahisishia kazi. Pakua bure na uanze kutumia leo.
            </p>
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-slate-900 font-bold border-b-2 border-ujenzi-accent hover:text-ujenzi-accent transition-colors pb-1">
            Angalia Maktaba Yote
          </button>
        </div>

        {/* Grid ya Kadi */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default DownloadsSection;