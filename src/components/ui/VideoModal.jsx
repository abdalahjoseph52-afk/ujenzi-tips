import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-ujenzi-accent z-50"
        >
          <X size={32} />
        </button>

        {/* The Player Container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
            title="Ujenzi Tips Video Player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </motion.div>

      </div>
    </AnimatePresence>
  );
};

export default VideoModal;