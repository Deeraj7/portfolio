// src/components/Hero.jsx
import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e
      const { innerWidth: width, innerHeight: height } = window
      const rotateX = (y - height / 2) / height * 20
      const rotateY = (x - width / 2) / width * 20
      setMousePosition({ x, y })
      setRotation({ x: rotateX, y: rotateY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden bg-dark">
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20 animate-cyber-bg"
        style={{
          transform: `rotate3d(1, 1, 1, ${rotation.x * 0.1}deg)`
        }}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <div 
          className="relative group"
          style={{
            transform: `rotateX(${rotation.x * 0.2}deg) rotateY(${rotation.y * 0.2}deg)`,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {/* 3D Card */}
          <div className="backdrop-blur-xl bg-dark-card/40 rounded-2xl p-8 border border-purple-500/20
            shadow-[0_0_15px_rgba(147,51,234,0.1)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]
            transition-all duration-500">

            {/* Main Title */}
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-400 animate-gradient">
                Deeraj Thakkilapati
              </span>
            </h1>

            <h2 className="text-3xl font-semibold mb-8 text-purple-300">
              Data Engineer & ML Enthusiast
            </h2>

            {/* Bio */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Transforming complex data challenges into efficient engineering solutions. 
              Currently pursuing MS in Data Science at University of North Texas.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/Deeraj7", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/deerajthakkilapati/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:deerajthakkilapati@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-lighter border border-purple-500/20
                    hover:border-purple-500/60 group/icon transition-all duration-300
                    hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  style={{
                    transform: `translateZ(${30 + index * 5}px)`,
                  }}
                >
                  <social.icon className="w-6 h-6 text-purple-400 group-hover/icon:scale-110
                    transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero