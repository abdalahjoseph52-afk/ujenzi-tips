import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ image, title, category, className }) => (
  <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
    {/* Image */}
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <span className="text-ujenzi-accent text-xs font-bold uppercase tracking-wider mb-2 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        {category}
      </span>
      <div className="flex justify-between items-end">
        <h3 className="text-xl md:text-2xl font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  </div>
);

const InspirationGallery = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ujenzi-accent font-bold uppercase text-sm tracking-widest">Inspirasi Nyata</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6">
            Jenga Nyumba ya <span className="relative inline-block">
              Ndoto Yako
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200/50 -z-10"></span>
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Angalia miradi iliyokamilika na upate maono ya nini kinawezekana ukiwa na bajeti sahihi na ushauri bora.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">
          
          {/* Nyumba Kubwa (Kushoto) - Span 2 cols, 2 rows */}
          <ProjectCard 
            image="https://images.unsplash.com/photo-1600596542815-e32c87f3108c?q=80&w=1000&auto=format&fit=crop"
            title="Modern Villa, Masaki"
            category="Residential"
            className="md:col-span-2 md:row-span-2"
          />

          {/* Nyumba Ndogo 1 (Juu Kulia) */}
          <ProjectCard 
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
            title="Eco Bungalow"
            category="Sustainable"
            className="md:col-span-1 md:row-span-1"
          />

          {/* Nyumba Ndogo 2 (Juu Mwisho) */}
          <ProjectCard 
            image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
            title="Apartment Complex"
            category="Commercial"
            className="md:col-span-1 md:row-span-1"
          />

          {/* Nyumba ya Kati (Chini) - Span 2 cols */}
          <ProjectCard 
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
            title="Family Home, Kigamboni"
            category="Residential"
            className="md:col-span-2 md:row-span-1"
          />
        </div>

      </div>
    </div>
  );
};

export default InspirationGallery;