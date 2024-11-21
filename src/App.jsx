import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import InteractiveBg from './components/ui/InteractiveBg';
import BackToTop from './components/ui/BackToTop';

const FloatingAvatar = ({ activeSection }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      // Reset position when screen size changes
      if (window.innerWidth <= 768) {
        setPosition({ x: 20, y: 80 }); // You can adjust this y value
      } else {
        setPosition({ x: window.innerWidth - 100, y: 150 });
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e) => {
    if (isMobile) return; // Disable dragging on mobile
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging && !isMobile) {
      setPosition({
        x: Math.min(Math.max(0, e.clientX - 25), window.innerWidth - 50),
        y: Math.min(Math.max(0, e.clientY - 25), window.innerHeight - 50)
      });
    }
  }, [isDragging, isMobile]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (isMobile) {
      setIsAnimating(true);
      // Reset animation and opacity after animation duration
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    } else if (!isDragging) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  // Mobile styles with low opacity by default
  const mobileStyles = {
    position: 'absolute',
    top: '5rem',  // Adjust this value to position it lower
    right: '1rem',
    transform: 'none',
    opacity: isAnimating ? 1 : 0.1, // 10% opacity by default, 100% when animating
    transition: 'opacity 0.3s ease',
  };

  // Desktop styles
  const desktopStyles = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: activeSection === 'home' ? 1 : 0.5,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div
      className={`z-50 ${isMobile ? '' : 'cursor-move'}`}
      style={isMobile ? mobileStyles : desktopStyles}
    >
      <div 
        className="relative" 
        onClick={handleClick} 
        onMouseDown={handleMouseDown}
      >
        <div className={`
          w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden 
          border-2 border-blue-500/30 hover:border-blue-500 
          transition-all duration-300 bg-gray-800
          ${isAnimating ? 'animate-bounce' : ''}
          ${isMobile ? 'hover:scale-110' : ''}
        `}>
          <img
            src="./img/avatar.jpg"
            alt="Floating Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <span className={`
          absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-blue-400 
          whitespace-nowrap transition-opacity duration-300
          ${isAnimating ? 'opacity-100' : 'opacity-0'}
        `}>
          sup
        </span>
      </div>
    </div>
  );
};

const LoadingScreen = ({ onLoadComplete }) => {
  const hellos = [
    "Hello",
    "నమస్కారం",
    "नमस्ते",
    "Hola",
    "Bonjour",
    "Ciao",
    "你好",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "Olá",
    "Привет",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (currentIndex < hellos.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else if (currentIndex === hellos.length - 1) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onLoadComplete, 300);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className={`text-center ${!isAnimating ? 'animate-fade-out' : ''}`}>
        <div className="h-32 flex items-center justify-center">
          <div key={currentIndex} className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-500 to-teal-400 animate-slide-up">
            {hellos[currentIndex]}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
        }
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-gray-900 text-gray-100">
      <FloatingAvatar activeSection={activeSection} />
      <CustomCursor />
      <ScrollProgress />
      <InteractiveBg />
      
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-2 md:py-4">
          <button 
            className="md:hidden absolute right-4 top-3 text-gray-400 hover:text-blue-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <ul className={`
            flex flex-col md:flex-row items-center 
            ${isMenuOpen ? 'py-2' : 'hidden md:flex'} 
            md:justify-center md:space-x-8 space-y-2 md:space-y-0
          `}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <li key={section} className="w-full md:w-auto">
                <button
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`
                    w-full md:w-auto text-base md:text-lg py-2 px-4 md:px-0
                    transition-all duration-300 relative hover:text-shadow-blue
                    ${activeSection === section.toLowerCase() 
                      ? 'text-blue-400 font-bold' 
                      : 'text-gray-400 hover:text-blue-300'}
                  `}
                >
                  {section}
                  {activeSection === section.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 hidden md:block" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-[8rem] leading-tight font-bold">
          <span className="block bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-500 via-teal-400 to-green-500">
            Hi, I'm
          </span>
          <span className="block bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-500 via-teal-400 to-green-500">
            Deeraj Thakkilapati
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-teal-300 mb-8">
          Data Engineer & ML Enthusiast
        </h2>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          <a
            href="https://github.com/Deeraj7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-700/50 border border-blue-500/20
              hover:border-blue-500/60 transition-all duration-300 hover:scale-110
              hover:shadow-[0_0_15px_rgba(0,255,242,0.3)] group backdrop-blur-sm"
          >
            <Github className="w-6 h-6 text-blue-400 group-hover:animate-pulse" />
          </a>
          <a
            href="https://www.linkedin.com/in/deerajthakkilapati/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-700/50 border border-blue-500/20
              hover:border-blue-500/60 transition-all duration-300 hover:scale-110
              hover:shadow-[0_0_15px_rgba(0,255,242,0.3)] group backdrop-blur-sm"
          >
            <Linkedin className="w-6 h-6 text-blue-400 group-hover:animate-pulse" />
          </a>
          <a
            href="mailto:deerajthakkilapati@gmail.com"
            className="p-3 rounded-xl bg-gray-700/50 border border-blue-500/20
              hover:border-blue-500/60 transition-all duration-300 hover:scale-110
              hover:shadow-[0_0_15px_rgba(0,255,242,0.3)] group backdrop-blur-sm"
          >
            <Mail className="w-6 h-6 text-blue-400 group-hover:animate-pulse" />
          </a>
        </div>
      </header>

      <section id="about" className="min-h-screen py-20 bg-gray-800">
        <About />
      </section>

      <section id="skills" className="min-h-screen py-20 bg-gray-900">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen py-20 bg-gray-800">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen py-20 bg-gray-900">
        <Contact />
      </section>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="group relative flex items-center gap-4"
          >
            <span className={`w-3 h-3 rounded-full transition-all duration-300
              ${activeSection === section 
                ? 'bg-blue-500 scale-125' 
                : 'bg-blue-500/30 hover:bg-blue-500/50'}`}
            />
            <span className="absolute right-full mr-4 text-sm text-gray-400 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 capitalize whitespace-nowrap">
              {section}
            </span>
          </button>
        ))}
      </div>
      <BackToTop />
    </div>
  );
};

export default App;