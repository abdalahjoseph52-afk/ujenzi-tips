import React, { useState } from 'react';
import { Pickaxe, BrickWall, PaintRoller, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "1. Kusafisha Site & Msingi",
    icon: Pickaxe,
    desc: "Hatua ya kwanza na muhimu zaidi. Hakikisha vipimo vya ramani vimefuatwa na kina cha msingi kinalingana na aina ya udongo.",
    tips: ["Tumia 'Blind Concrete' chini kabisa.", "Tibu udongo dhidi ya mchwa.", "Hakikisha nondo za nguzo zimefungwa vizuri."]
  },
  {
    id: 2,
    title: "2. Kuinua Boma (Walling)",
    icon: BrickWall,
    desc: "Hapa ndipo nyumba huanza kuonekana. Uchaguzi wa matofali (Block vs Brick) na uwiano wa simenti na mchanga ni muhimu.",
    tips: ["Loweka matofali kabla ya kujenga (kama ni ya kuchoma).", "Weka 'Linta' juu ya milango na madirisha.", "Mwagilia kuta maji kwa siku 7 baada ya kujenga."]
  },
  {
    id: 3,
    title: "3. Paa & Finishing",
    icon: PaintRoller,
    desc: "Hatua ya kuremba na kulinda nyumba. Paa imara huzuia maji, na finishing nzuri huleta thamani.",
    tips: ["Tumia mbao zilizotibiwa dawa.", "Weka 'Waterproofing' kwenye bafu na choo.", "Skim kuta kabla ya kupaka rangi ya mwisho."]
  },
  {
    id: 4,
    title: "4. Kukabidhiwa Mradi",
    icon: CheckCircle2,
    desc: "Ukaguzi wa mwisho kabla ya kuhamia au kumlipa fundi malipo ya mwisho.",
    tips: ["Kagua mifumo ya umeme na maji.", "Hakikisha milango inafunga vizuri.", "Dai 'Guarantee' ya miezi 3-6 kutoka kwa fundi."]
  }
];

const StepCard = ({ step, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = step.icon;

  return (
    <div className="flex gap-4 md:gap-8 relative">
      {/* Mstari wa kushoto (Timeline Line) */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${isOpen ? 'bg-ujenzi-accent text-ujenzi-dark shadow-lg scale-110' : 'bg-slate-200 text-slate-500'} transition-all duration-300`}>
          <Icon size={24} />
        </div>
        {/* Usichore mstari kwa item ya mwisho */}
        {index !== STEPS.length - 1 && (
          <div className="w-1 h-full bg-slate-200 my-2 rounded-full"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-white border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${isOpen ? 'border-ujenzi-accent shadow-xl ring-1 ring-ujenzi-accent/20' : 'border-slate-100 hover:border-slate-300 shadow-sm'}`}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-xl font-bold ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
              {step.title}
            </h3>
            {isOpen ? <ChevronUp className="text-ujenzi-accent" /> : <ChevronDown className="text-slate-400" />}
          </div>

          <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="text-slate-600 mb-4 leading-relaxed border-l-4 border-slate-100 pl-4">
                {step.desc}
              </p>
              
              <div className="bg-yellow-50 rounded-xl p-5">
                <span className="text-xs font-bold text-ujenzi-dark uppercase tracking-wider mb-3 block">💡 Ujenzi Tips:</span>
                <ul className="space-y-2">
                  {step.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-ujenzi-accent mt-0.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConstructionRoadmap = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-ujenzi-accent font-bold uppercase text-sm tracking-widest">Mwongozo wa Ujenzi</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Hatua kwa Hatua Mpaka <br/>Nyumba Imara.
          </h2>
        </div>

        <div className="relative">
          {STEPS.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ConstructionRoadmap;