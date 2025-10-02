'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { spiritualQuotes } from '@/data/spiritualQuotes'

export default function QuoteDisplay() {
  const { language } = useLanguage()
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    // Change quote every 10 seconds
    const interval = setInterval(() => {
      setQuoteIndex((current) => (current + 1) % spiritualQuotes.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const currentQuote = spiritualQuotes[quoteIndex]

  return (
    <blockquote>
      <p className="text-lg md:text-xl italic font-medium text-gray-900 dark:text-white">
        &ldquo;{currentQuote.text[language]}&rdquo;
      </p>
      <footer className="mt-4 text-sm font-medium text-gray-800 dark:text-white/80">
        — {currentQuote.author[language]}
      </footer>
    </blockquote>
  )
}
