'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Background3D() {
  const { theme } = useTheme()
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, size: number, color: string}>>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Generate enhanced particles with more variety
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 20,
      size: Math.random() * 3 + 2,
      color: Math.random() > 0.5 ? '#ff9933' : '#138808'
    }))
    setParticles(particleArray)
  }, [])

  return (
    <>
      {/* Floating Sacred Elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      >
        {/* Floating Om Symbols */}
        <div 
          className="absolute text-6xl font-bold animate-float-gentle"
          style={{
            top: '10%',
            left: '10%',
            color: '#ff9933',
            opacity: theme === 'light' ? 0.7 : 0.9,
            textShadow: `0 0 30px rgba(255, 153, 51, ${theme === 'light' ? 0.8 : 1})`,
            animationDuration: '20s',
            animationDelay: '0s',
            filter: 'blur(0.5px)'
          }}
        >
          ॐ
        </div>
        <div 
          className="absolute text-5xl font-bold animate-float-gentle"
          style={{
            top: '70%',
            right: '15%',
            color: '#ff9933',
            opacity: theme === 'light' ? 0.6 : 0.8,
            textShadow: '0 0 25px rgba(255, 153, 51, 0.9)',
            animationDuration: '25s',
            animationDelay: '-8s',
            filter: 'blur(0.3px)'
          }}
        >
          ॐ
        </div>
        <div 
          className="absolute text-4xl font-bold animate-float-gentle"
          style={{
            bottom: '20%',
            left: '80%',
            color: '#ff9933',
            opacity: theme === 'light' ? 0.5 : 0.7,
            textShadow: '0 0 20px rgba(255, 153, 51, 0.8)',
            animationDuration: '18s',
            animationDelay: '-15s'
          }}
        >
          ॐ
        </div>
        <div 
          className="absolute text-7xl font-bold animate-float-gentle"
          style={{
            top: '40%',
            left: '5%',
            color: '#ff9933',
            opacity: theme === 'light' ? 0.8 : 1,
            textShadow: '0 0 20px rgba(255, 153, 51, 0.8)',
            animationDuration: '22s',
            animationDelay: '-22s'
          }}
        >
          ॐ
        </div>
        
        {/* Geometric Shapes */}
        <div 
          className="absolute border-2 rounded-full animate-float-3d"
          style={{
            width: '80px',
            height: '80px',
            top: '15%',
            right: '25%',
            borderColor: '#138808',
            opacity: 0.4,
            boxShadow: '0 0 30px rgba(19, 136, 8, 0.6)',
            animationDuration: '16s',
            animationDelay: '-5s'
          }}
        />
        <div 
          className="absolute border-2 animate-float-3d"
          style={{
            width: '60px',
            height: '60px',
            top: '60%',
            left: '20%',
            borderColor: '#ff9933',
            opacity: 0.4,
            boxShadow: '0 0 25px rgba(255, 153, 51, 0.6)',
            animationDuration: '14s',
            animationDelay: '-12s'
          }}
        />
        
        {/* Additional geometric elements */}
        <div 
          className="absolute border-2 rounded-lg animate-float-gentle"
          style={{
            width: '45px',
            height: '45px',
            top: '35%',
            right: '10%',
            borderColor: '#138808',
            opacity: 0.35,
            boxShadow: '0 0 20px rgba(19, 136, 8, 0.5)',
            animationDuration: '18s',
            animationDelay: '-3s',
            transform: 'rotate(45deg)'
          }}
        />
        <div 
          className="absolute border-2 animate-float-3d"
          style={{
            width: '35px',
            height: '35px',
            bottom: '25%',
            left: '75%',
            borderColor: '#ff9933',
            borderRadius: '50%',
            opacity: 0.3,
            boxShadow: '0 0 18px rgba(255, 153, 51, 0.4)',
            animationDuration: '22s',
            animationDelay: '-16s'
          }}
        />
        <div 
          className="absolute border-2 animate-symbol-float"
          style={{
            width: '50px',
            height: '50px',
            top: '85%',
            left: '30%',
            borderColor: '#138808',
            opacity: 0.25,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            boxShadow: '0 0 22px rgba(19, 136, 8, 0.4)',
            animationDuration: '20s',
            animationDelay: '-9s'
          }}
        />
        
        {/* Sacred Symbols */}
        <div 
          className="absolute text-4xl animate-symbol-float"
          style={{
            top: '30%',
            right: '5%',
            color: '#ff9933',
            opacity: 0.6,
            textShadow: '0 0 15px rgba(255, 153, 51, 0.8)',
            animationDuration: '18s',
            animationDelay: '-7s'
          }}
        >
          卍
        </div>
        <div 
          className="absolute text-4xl animate-symbol-float"
          style={{
            bottom: '40%',
            left: '15%',
            color: '#138808',
            opacity: 0.6,
            textShadow: '0 0 15px rgba(19, 136, 8, 0.8)',
            animationDuration: '16s',
            animationDelay: '-14s'
          }}
        >
          🪷
        </div>
        <div 
          className="absolute text-4xl animate-symbol-float"
          style={{
            top: '80%',
            right: '70%',
            color: '#ff9933',
            opacity: 0.6,
            textShadow: '0 0 15px rgba(255, 153, 51, 0.8)',
            animationDuration: '20s',
            animationDelay: '-21s'
          }}
        >
          🔱
        </div>
        
        {/* Additional floating elements for more depth */}
        <div 
          className="absolute text-3xl animate-float-gentle"
          style={{
            top: '25%',
            right: '80%',
            color: '#138808',
            opacity: 0.4,
            textShadow: '0 0 12px rgba(19, 136, 8, 0.6)',
            animationDuration: '24s',
            animationDelay: '-6s'
          }}
        >
          🕉️
        </div>
        <div 
          className="absolute text-2xl animate-symbol-float"
          style={{
            bottom: '15%',
            right: '25%',
            color: '#ff9933',
            opacity: 0.5,
            textShadow: '0 0 10px rgba(255, 153, 51, 0.7)',
            animationDuration: '19s',
            animationDelay: '-11s'
          }}
        >
          🌸
        </div>
        <div 
          className="absolute text-3xl animate-float-gentle"
          style={{
            top: '60%',
            left: '85%',
            color: '#138808',
            opacity: 0.45,
            textShadow: '0 0 14px rgba(19, 136, 8, 0.8)',
            animationDuration: '26s',
            animationDelay: '-18s'
          }}
        >
          🪔
        </div>
      </div>

      {/* Enhanced Particle System */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {isClient && particles.map((particle) => {
          const baseOpacity = theme === 'light' ? 0.7 : 1
          const shadowOpacity = theme === 'light' ? 0.6 : 0.9
          return (
            <div
              key={particle.id}
              className="absolute rounded-full animate-particle-float"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size * 1.5}px`,
                height: `${particle.size * 1.5}px`,
                background: `radial-gradient(circle, ${particle.color === '#ff9933' ? `rgba(255, 153, 51, ${baseOpacity})` : `rgba(19, 136, 8, ${baseOpacity})`}, transparent)`,
                boxShadow: `0 0 ${particle.size * 3}px ${particle.color === '#ff9933' ? `rgba(255, 153, 51, ${shadowOpacity})` : `rgba(19, 136, 8, ${shadowOpacity})`}`,
                animationDuration: `${12 + Math.random() * 8}s`,
                animationDelay: `${particle.delay}s`,
                filter: 'blur(0.5px)'
              }}
            />
          )
        })}
      </div>

      {/* Enhanced Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Large Saffron Orb */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-30 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(255, 153, 51, 0.6) 0%, rgba(255, 153, 51, 0.3) 40%, transparent 70%)',
            top: '10%',
            right: '10%',
            filter: 'blur(40px)',
            animationDuration: '12s'
          }}
        />
        
        {/* Large Green Orb */}
        <div 
          className="absolute w-64 h-64 rounded-full opacity-25 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(19, 136, 8, 0.7) 0%, rgba(19, 136, 8, 0.4) 40%, transparent 70%)',
            bottom: '20%',
            left: '15%',
            filter: 'blur(30px)',
            animationDuration: '15s',
            animationDirection: 'reverse'
          }}
        />
        
        {/* Medium floating orbs */}
        <div 
          className="absolute w-48 h-48 rounded-full opacity-20 animate-float-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(255, 153, 51, 0.5) 0%, rgba(255, 153, 51, 0.2) 50%, transparent 70%)',
            top: '50%',
            right: '40%',
            filter: 'blur(25px)',
            animationDuration: '18s',
            animationDelay: '-6s'
          }}
        />
        <div 
          className="absolute w-32 h-32 rounded-full opacity-18 animate-float-3d"
          style={{
            background: 'radial-gradient(circle, rgba(19, 136, 8, 0.6) 0%, rgba(19, 136, 8, 0.3) 50%, transparent 70%)',
            bottom: '40%',
            right: '75%',
            filter: 'blur(20px)',
            animationDuration: '20s',
            animationDelay: '-10s'
          }}
        />
        
        {/* Small accent orbs */}
        <div 
          className="absolute w-24 h-24 rounded-full opacity-15 animate-symbol-float"
          style={{
            background: 'radial-gradient(circle, rgba(255, 153, 51, 0.8) 0%, rgba(255, 153, 51, 0.4) 40%, transparent 60%)',
            top: '75%',
            left: '60%',
            filter: 'blur(15px)',
            animationDuration: '16s',
            animationDelay: '-4s'
          }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full opacity-12 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(19, 136, 8, 0.9) 0%, rgba(19, 136, 8, 0.5) 40%, transparent 60%)',
            top: '30%',
            left: '80%',
            filter: 'blur(12px)',
            animationDuration: '14s',
            animationDelay: '-8s'
          }}
        />
        
        {/* Additional mystical orbs */}
        <div 
          className="absolute w-40 h-40 rounded-full opacity-10 animate-float-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(255, 153, 51, 0.4) 0%, rgba(19, 136, 8, 0.3) 50%, transparent 70%)',
            top: '5%',
            left: '30%',
            filter: 'blur(35px)',
            animationDuration: '25s',
            animationDelay: '-12s'
          }}
        />
        <div 
          className="absolute w-28 h-28 rounded-full opacity-8 animate-symbol-float"
          style={{
            background: 'radial-gradient(circle, rgba(19, 136, 8, 0.6) 0%, rgba(255, 153, 51, 0.4) 50%, transparent 70%)',
            bottom: '10%',
            right: '50%',
            filter: 'blur(22px)',
            animationDuration: '19s',
            animationDelay: '-15s'
          }}
        />
      </div>
      
      {/* Magical Sparkles */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-[3]">
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                background: theme === 'light' 
                  ? (Math.random() > 0.5 ? '#ff9933' : '#138808')
                  : (Math.random() > 0.5 ? '#ffff00' : '#ffffff'),
                borderRadius: '50%',
                boxShadow: `0 0 ${12 + Math.random() * 8}px currentColor`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: theme === 'light' ? 0.8 : 1,
                filter: 'brightness(1.5)'
              }}
            />
          ))}
          {/* Additional golden sparkles */}
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`golden-sparkle-${i}`}
              className="absolute animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '2px',
                height: '2px',
                background: theme === 'light' ? '#ff9933' : '#ffd700',
                borderRadius: '50%',
                boxShadow: theme === 'light' 
                  ? '0 0 8px #ff9933, 0 0 12px #ff9933'
                  : '0 0 8px #ffd700, 0 0 12px #ffd700',
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}
