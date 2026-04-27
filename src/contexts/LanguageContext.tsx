import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const STORAGE_KEY = 'cpx-docs-locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default is Spanish — site is bilingual but the audience is mostly ES.
  const [language, setLanguageState] = useState<Language>('es');

  // Hydrate from localStorage after first paint. Browser language is only
  // used to switch to English when the user is clearly English-speaking.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') {
        setLanguageState(stored);
        return;
      }
      const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
      if (browser === 'en') setLanguageState('en');
    } catch {
      /* ignore — incognito mode etc. */
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
