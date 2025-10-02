'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import QuoteDisplay from './QuoteDisplay'

export default function Hero() {
  const { language } = useLanguage()

  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      {/* Main content */}
      <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold">
        <span className="text-orange-600 dark:text-orange-500">
          {translations.siteName[language]}
        </span>
      </h1>
      
      <p className="mb-8 text-xl md:text-2xl font-bold" style={{ color: '#FDC700' }}>
        {translations.siteTagline[language]}
      </p>

      {/* Spiritual Quote */}
      <div className="w-full max-w-3xl mx-auto bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl">
        <QuoteDisplay />
      </div>
    </div>
  )
}
