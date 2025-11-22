import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon: Icon, onClick }) => {
  const variants = {
    primary: "bg-ujenzi-accent text-ujenzi-dark hover:bg-white",
    outline: "bg-transparent border border-ujenzi-accent text-ujenzi-accent hover:bg-ujenzi-accent hover:text-ujenzi-dark"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${variants[variant]} px-8 py-4 rounded-none font-bold uppercase tracking-widest text-sm transition-all flex items-center gap-3 relative overflow-hidden group`}
    >
      {/* The "Construction Stripe" Effect */}
      <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:w-full transition-all duration-300 ease-out"></div>
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon size={18} strokeWidth={3} />}
      </span>
    </motion.button>
  );
};

export default Button;