import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Style ya Map
import { MapPin, Phone, Search, Navigation, User, ShoppingBag, ArrowRight } from 'lucide-react';
import L from 'leaflet';

// --- 1. SULUHISHO LA ICONS ZA LEAFLET (Kurekebisha tatizo la icons kupotea) ---
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

// --- 2. DATA ZA MAFUNDI & MADUKA (Dar es Salaam Coordinates) ---
const LOCATIONS = [
  { 
    id: 1, 
    name: "Ujenzi Depot - Tegeta", 
    type: "Duka", 
    category: "materials",
    address: "Tegeta Kibaoni, Bagamoyo Rd", 
    phone: "+255 700 111 222", 
    coords: [-6.6627, 39.1832] // Latitude, Longitude
  },
  { 
    id: 2, 
    name: "Fundi Juma Construction", 
    type: "Fundi", 
    category: "contractor",
    address: "Sinza Mori, Shekilango Rd", 
    phone: "+255 755 333 444", 
    coords: [-6.7780, 39.2200] 
  },
  { 
    id: 3, 
    name: "Kariakoo Hardware City", 
    type: "Duka", 
    category: "materials",
    address: "Msimbazi Street, Kariakoo", 
    phone: "+255 788 555 666", 
    coords: [-6.8184, 39.2742] 
  },
  { 
    id: 4, 
    name: "Mlimani Tiles & Decor", 
    type: "Duka", 
    category: "materials",
    address: "Mlimani City Mall, Mwenge", 
    phone: "+255 711 999 000", 
    coords: [-6.7694, 39.2294] 
  },
  { 
    id: 5, 
    name: "Eng. Baraka Services", 
    type: "Mhandisi", 
    category: "contractor",
    address: "Posta Mpya, Dar es Salaam", 
    phone: "+255 655 777 888", 
    coords: [-6.8163, 39.2893] 
  },
  { 
    id: 6, 
    name: "Gongo la Mboto Cement", 
    type: "Duka", 
    category: "materials",
    address: "Gongo la Mboto, Nyerere Rd", 
    phone: "+255 688 000 111", 
    coords: [-6.8687, 39.1887] 
  },
];

// --- 3. COMPONENT YA KUSOGEZA MAP (Auto-Pan) ---
// Hii inafanya map isogee yenyewe ukibonyeza jina kwenye list
function MapController({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 14, { duration: 2 }); // Zoom level 14, speed 2s
    }
  }, [coords, map]);
  return null;
}

const LocationCard = ({ loc, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`p-5 border-b border-slate-100 cursor-pointer transition-all hover:bg-slate-50 ${isActive ? 'bg-yellow-50 border-l-4 border-l-ujenzi-accent shadow-inner' : ''}`}
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-bold text-slate-900 line-clamp-1">{loc.name}</h3>
      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${loc.category === 'contractor' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
        {loc.type}
      </span>
    </div>
    <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
      <MapPin size={14} className="text-ujenzi-accent shrink-0" />
      <span className="line-clamp-1">{loc.address}</span>
    </div>
    <div className="flex items-center gap-2 text-slate-500 text-sm">
      <Phone size={14} className="text-ujenzi-accent shrink-0" />
      {loc.phone}
    </div>
  </div>
);

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'materials', 'contractor'

  // Filter Logic
  const filteredLocations = LOCATIONS.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || loc.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
      <div className="bg-slate-900 pt-32 pb-12 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800 opacity-50" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1}}></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Tafuta Fundi & Vifaa</h1>
          <p className="text-slate-400 text-lg">Ramani ya wataalamu na maduka yaliyothibitishwa.</p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto h-[85vh] flex flex-col md:flex-row shadow-2xl md:-mt-8 relative z-20 bg-white rounded-none md:rounded-xl overflow-hidden mb-10 border border-slate-200">
        
        {/* SIDEBAR (LIST) */}
        <div className="w-full md:w-1/3 bg-white flex flex-col border-r border-slate-200 z-10 shadow-lg">
          
          {/* Controls: Search & Filter */}
          <div className="p-4 border-b border-slate-200 bg-white">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Tafuta jina au eneo..." 
                className="w-full bg-slate-100 border-none rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-ujenzi-accent outline-none text-sm font-bold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Filter Buttons */}
            <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
              <button onClick={() => setFilter('all')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>Wote</button>
              <button onClick={() => setFilter('contractor')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1 transition-all ${filter === 'contractor' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}><User size={12}/> Mafundi</button>
              <button onClick={() => setFilter('materials')} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1 transition-all ${filter === 'materials' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}><ShoppingBag size={12}/> Maduka</button>
            </div>
          </div>
          
          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto bg-slate-50/50">
            {filteredLocations.length > 0 ? (
              filteredLocations.map(loc => (
                <LocationCard 
                  key={loc.id} 
                  loc={loc} 
                  isActive={activeLocation.id === loc.id}
                  onClick={() => setActiveLocation(loc)}
                />
              ))
            ) : (
              <div className="p-10 text-center text-slate-400 text-sm">Hamna matokeo.</div>
            )}
          </div>
        </div>

        {/* MAP AREA (LEAFLET REAL MAP) */}
        <div className="w-full md:w-2/3 bg-slate-100 relative h-full">
           <MapContainer 
             center={activeLocation.coords} 
             zoom={13} 
             scrollWheelZoom={true} 
             className="w-full h-full z-0"
           >
             {/* 1. Mchoro wa Map (OpenStreetMap) */}
             <TileLayer
               attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />

             {/* 2. Controller wa Kusogeza Map */}
             <MapController coords={activeLocation.coords} />

             {/* 3. Weka Markers Zote */}
             {filteredLocations.map(loc => (
               <Marker 
                 key={loc.id} 
                 position={loc.coords}
                 eventHandlers={{
                   click: () => {
                     setActiveLocation(loc);
                   },
                 }}
               >
                 <Popup>
                   <div className="p-1 min-w-[200px]">
                     <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded text-white mb-2 inline-block ${loc.category === 'contractor' ? 'bg-blue-600' : 'bg-green-600'}`}>
                       {loc.type}
                     </span>
                     <h3 className="font-bold text-base mb-1">{loc.name}</h3>
                     <p className="text-sm text-slate-600 mb-2">{loc.address}</p>
                     
                     {/* 🔥 GOOGLE MAPS DIRECTION LINK (FIXED) 🔥 */}
                     <a 
                       href={`https://www.google.com/maps/dir/?api=1&destination=${loc.coords[0]},${loc.coords[1]}`}
                       target="_blank"
                       rel="noreferrer"
                       className="flex items-center gap-1 text-xs font-bold hover:underline mt-2 bg-slate-900 text-white py-2 px-3 rounded-lg justify-center transition-transform hover:scale-105"
                     >
                       <Navigation size={14} /> Pata Direction
                     </a>
                   </div>
                 </Popup>
               </Marker>
             ))}
           </MapContainer>
        </div>

      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center px-6 pb-20">
        <p className="text-slate-500 mb-4">Je, biashara yako haipo hapa?</p>
        <button className="bg-white border border-slate-300 text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:border-ujenzi-accent hover:text-ujenzi-accent transition-all flex items-center gap-2 mx-auto">
          Sajili Biashara Yako <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default Locations;