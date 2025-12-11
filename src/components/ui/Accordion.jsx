import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
      >
        <span className={`text-sm lg:text-lg font-bold transition-colors ${isOpen ? 'text-ujenzi-accent' : 'text-slate-900 group-hover:text-ujenzi-accent'}`}>
          {question}
        </span>
        <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-ujenzi-accent text-ujenzi-dark' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed text-sm lg:text-base border-l-2 border-ujenzi-accent pl-4 ml-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 md:p-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;