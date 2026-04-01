import { createContext, useState, useContext, useEffect } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app-language') || 'uk';
  });

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'uk' ? 'en' : 'uk'));
  };

  useEffect(() => {
    localStorage.setItem('app-language', language);
  }, [language]);

  return (
    <SettingsContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
