// src/components/Footer.jsx
import React from 'react'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-400 to-purple-400">
              Navigation
            </h3>
            <nav>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-400 to-purple-400">
              Connect
            </h3>
            <div className="space-y-2">
              <a
                href="https://github.com/Deeraj7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 
                  transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/deerajthakkilapati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 
                  transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:deerajthakkilapati@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 
                  transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-400 to-purple-400">
              Status
            </h3>
            <p className="text-gray-400 mb-4">
              Currently open for Data Engineering opportunities
            </p>
            <p className="text-sm text-gray-500">
              Based in Denton, TX
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row 
          justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2024 Deeraj Thakkilapati</span>
            <span>•</span>
            <span className="flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-400" /> using React
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 
              transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-400 
              transition-colors duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer