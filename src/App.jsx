// src/App.jsx
import React, { useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import InteractiveBg from './components/ui/InteractiveBg';
import BackToTop from './components/ui/BackToTop';
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100; // Add offset for header

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

  return (
    <div className="bg-gray-900 text-gray-100">
      <CustomCursor />
      <ScrollProgress />
      <InteractiveBg />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`text-lg transition-all duration-300 relative hover:text-shadow-blue
                    ${activeSection === section.toLowerCase() 
                      ? 'text-blue-400 font-bold' 
                      : 'text-gray-400 hover:text-blue-300'}`}
                >
                  {section}
                  {activeSection === section.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center min-h-screen text-center">
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

        {/* Social icons */}
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

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-gray-800">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 bg-gray-900">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gray-800">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-gray-900">
        <Contact />
      </section>

      {/* Progress Indicator */}
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
