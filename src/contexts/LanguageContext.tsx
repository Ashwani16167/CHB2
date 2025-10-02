'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'hi' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  isHindi: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('hi')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'hi' ? 'en' : 'hi'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const isHindi = language === 'hi'

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isHindi }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
