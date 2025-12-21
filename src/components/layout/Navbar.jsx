import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, 
  Calculator, FileText, ShoppingCart, Ruler, 
  Building2, MapPin, 
  BookOpen, HardHat, GraduationCap 
} from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    tools: [
      { name: 'Kikokotozi (Calculator)', path: '/calculator', icon: Calculator },
      { name: 'QR Card Maker', path: '/?tool=qr', icon: FileText },
      { name: 'Bajeti Planner', path: '/budget', icon: ShoppingCart },
      { name: 'Converter (Vipimo)', path: '/converter', icon: Ruler },
    ],
    market: [
      { name: 'Ramani za Nyumba', path: '/plans', icon: Building2 },
      { name: 'Tafuta Fundi (Map)', path: '/locations', icon: MapPin },
      { name: 'Bei za Vifaa', path: '/market-prices', icon: ShoppingCart },
    ],
    resources: [
      { name: 'Maktaba (Downloads)', path: '/resources', icon: BookOpen },
      { name: 'Mwongozo wa Ujenzi', path: '/guide', icon: HardHat },
      { name: 'Ujenzi Blog', path: '/#blog', icon: GraduationCap },
    ]
  };

  const DesktopDropdown = ({ title, items, id }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-ujenzi-accent py-6 transition-colors">
        {title} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === id ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-xl overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === id ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
        <div className="py-2">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className="flex items-center gap-3 px-6 py-3 hover:bg-slate-50 group/item transition-colors border-b border-slate-50 last:border-0"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center group-hover/item:bg-ujenzi-accent group-hover/item:text-ujenzi-dark transition-colors">
                <item.icon size={16} strokeWidth={2} />
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-800 group-hover/item:text-ujenzi-dark">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className={`w-full transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-ujenzi-dark/95 backdrop-blur-md shadow-lg py-1' : 'bg-gradient-to-r from-ujenzi-dark to-slate-900 py-2'}`}>
      {/* 🔥 REKEBISHO HAPA: 
         Nimebadilisha 'max-w-7xl' kuwa 'max-w-[1600px]'. 
         Hii inaruhusu navbar itanuke zaidi kwenye screen kubwa.
         Pia nimeongeza padding 'px-4 md:px-8' ili isiguse kingo za screen.
      */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 flex justify-between items-center relative">
        
        <Link to="/" className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Ujenzi Tips" 
            className="h-24 md:h-32 lg:h-40 w-auto object-contain hover:scale-105 transition-transform drop-shadow-lg relative z-50" 
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 xl:gap-12"> {/* Gap kubwa zaidi */}
          <Link to="/" className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-ujenzi-accent transition-colors">Nyumbani</Link>
          <DesktopDropdown title="Vifaa & Tools" items={menuItems.tools} id="tools" />
          <DesktopDropdown title="Soko & Ramani" items={menuItems.market} id="market" />
          <DesktopDropdown title="Elimu" items={menuItems.resources} id="resources" />
          <Link to="/services" className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-ujenzi-accent transition-colors">Huduma</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://wa.me/255XXXXXXXXX" target="_blank" rel="noreferrer" className="hidden xl:flex flex-col items-end text-right mr-2">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Wasiliana Nasi</span>
            <span className="text-white font-bold text-sm tracking-wide hover:text-green-400 transition-colors">+255 700 000 000</span>
          </a>
          <Link to="/calculator">
             <button className="bg-ujenzi-accent text-ujenzi-dark px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)]">
               Kadiria Vifaa
             </button>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white hover:text-ujenzi-accent transition-colors p-2">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[140px] bg-ujenzi-dark z-40 overflow-y-auto pb-20 animate-in slide-in-from-right duration-200 border-t border-white/10">
          <div className="p-6 flex flex-col gap-8">
            {[
              { title: 'Vifaa & Tools', items: menuItems.tools },
              { title: 'Soko & Ramani', items: menuItems.market },
              { title: 'Elimu & Maktaba', items: menuItems.resources }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-4 opacity-70 border-b border-white/10 pb-2">{section.title}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {section.items.map((item, i) => (
                    <Link key={i} to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-slate-200">
                      <item.icon size={18} className="text-ujenzi-accent" />
                      <span className="font-bold text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-4 pt-6 border-t border-white/10">
               <Link to="/calculator" onClick={() => setIsOpen(false)}>
                 <button className="w-full bg-ujenzi-accent text-ujenzi-dark py-4 rounded-xl font-bold text-lg mb-4">Kadiria Vifaa Sasa</button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;