import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-ujenzi-dark flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-blueprint opacity-5"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center p-4 bg-ujenzi-accent/10 rounded-full mb-6">
            <AlertTriangle className="text-ujenzi-accent h-12 w-12" />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-2 tracking-tighter">404</h1>
        <h2 className="text-2xl md:text-3xl text-ujenzi-accent font-bold mb-6 uppercase tracking-widest">Page Not Found</h2>
        
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
          The foundation for this page seems to be missing. It might have been moved, deleted, or never existed in our blueprints.
        </p>
        
        <Link to="/">
          <Button variant="primary" icon={Home}>Return Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;