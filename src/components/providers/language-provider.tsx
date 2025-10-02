"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { chbConfig, type Locale } from "@/config/chb-config";

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  t: (key: string, options?: { hi: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("hi");

  useEffect(() => {
    // Check localStorage for saved language preference
    const stored = localStorage.getItem("chb-language") as Locale;
    if (stored && (stored === "hi" || stored === "en")) {
      setLocale(stored);
    }
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === "hi" ? "en" : "hi";
    setLocale(newLocale);
    localStorage.setItem("chb-language", newLocale);
  };

  // Translation function
  const t = (key: string, options?: { hi: string; en: string }) => {
    if (options) {
      return options[locale];
    }
    
    // For nested objects in config, you can extend this
    const keys = key.split('.');
    let value: any = chbConfig;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value && typeof value === 'object' && (value.hi || value.en)) {
      return value[locale] || value.hi || value.en || key;
    }
    
    return key;
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
