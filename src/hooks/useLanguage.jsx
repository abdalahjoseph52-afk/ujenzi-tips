import React, { createContext, useState, useContext } from 'react';
import { content } from '../data/content';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'sw' : 'en'));
  };

  const t = content[lang]; 

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);