'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from './translations'
import ThemeToggle from './ThemeToggle'


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  
  const navLinks = [
    { href: '/', label: translations.nav.home[language], icon: '🏠' },
    { href: '/podcasts', label: translations.nav.podcasts[language], icon: '🎙️' },
    { href: '/ebooks', label: translations.nav.ebooks[language], icon: '📚' },
    { href: '/articles', label: translations.nav.articles[language], icon: '✍️' },
    { href: '/about', label: translations.nav.about[language], icon: '👨‍🏫' },
    { href: '/contact', label: translations.nav.contact[language], icon: '📧' },
  ]

  return (
    <nav className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-all hover:scale-[0.98]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/chb-logo.jpg"
                alt="छुपा हुआ भारत Logo"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent hover:from-orange-500 hover:to-orange-400 transition-all">
              {translations.siteName[language]}
            </span>
          </Link>

          {/* Desktop Navigation and Toggles */}
          <div className="hidden md:flex items-center">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6 mr-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-1 text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 font-medium transition-all hover:scale-105"
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
            
            {/* Toggle Buttons Container */}
            <div className="flex items-center space-x-3">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 font-medium text-sm flex items-center space-x-1"
              >
                <span>🌐</span>
                <span>{translations.language.toggle[language]}</span>
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors p-2 rounded-lg hover:bg-orange-100/10 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-50/10 dark:hover:bg-gray-800 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
              
              {/* Toggles Container - Mobile */}
              <div className="flex items-center justify-between py-2 px-4 rounded-lg">
                {/* Language Toggle Button */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-800 dark:text-gray-300 hover:text-orange-600 transition-all"
                >
                  <span>🌐</span>
                  <span>{translations.language.toggle[language]}</span>
                </button>

                {/* Theme Toggle */}
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
