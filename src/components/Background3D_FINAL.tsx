'use client'

import { useEffect, useState } from 'react'

export default function Background3D() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, delay: number}>>([])

  useEffect(() => {
    // Generate random particles
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15
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
          className="absolute text-5xl font-bold animate-float-gentle"
          style={{
            top: '10%',
            left: '10%',
            color: '#ff9933',
            opacity: 0.6,
            textShadow: '0 0 20px rgba(255, 153, 51, 0.8)',
            animationDuration: '20s',
            animationDelay: '0s'
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
            opacity: 0.6,
            textShadow: '0 0 20px rgba(255, 153, 51, 0.8)',
            animationDuration: '25s',
            animationDelay: '-8s'
          }}
        >
          ॐ
        </div>
        <div 
          className="absolute text-5xl font-bold animate-float-gentle"
          style={{
            bottom: '20%',
            left: '80%',
            color: '#ff9933',
            opacity: 0.6,
            textShadow: '0 0 20px rgba(255, 153, 51, 0.8)',
            animationDuration: '18s',
            animationDelay: '-15s'
          }}
        >
          ॐ
        </div>
        <div 
          className="absolute text-5xl font-bold animate-float-gentle"
          style={{
            top: '40%',
            left: '5%',
            color: '#ff9933',
            opacity: 0.6,
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
      </div>

      {/* Particle System */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-particle-float"
            style={{
              left: `${particle.x}%`,
              width: '4px',
              height: '4px',
              background: 'radial-gradient(circle, rgba(255, 153, 51, 0.8), transparent)',
              animationDuration: '15s',
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(255, 153, 51, 0.3) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            filter: 'blur(40px)',
            animationDuration: '12s'
          }}
        />
        
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(19, 136, 8, 0.4) 0%, transparent 70%)',
            bottom: '20%',
            left: '15%',
            filter: 'blur(30px)',
            animationDuration: '15s',
            animationDirection: 'reverse'
          }}
        />
      </div>
    </>
  )
}
