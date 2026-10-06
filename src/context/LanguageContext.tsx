import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';

type TranslationType = typeof TRANSLATIONS.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationType;
  isKannada: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('agrisethu_lang');
      return (saved === 'kn' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('agrisethu_lang', lang);
    } catch {
      // localstorage unavailable
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'kn') {
      document.body.classList.add('font-kannada');
    } else {
      document.body.classList.remove('font-kannada');
    }
  }, [language]);

  const t = TRANSLATIONS[language] as unknown as TranslationType;
  const isKannada = language === 'kn';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isKannada }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
