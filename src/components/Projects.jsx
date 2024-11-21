import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const projects = [
    {
      title: "EasyDiceApply",
      description: "Comprehensive job application automation tool for Dice.com.",
      longDescription:
        "EasyDiceApply is a web tool that automates job applications on Dice.com, specifically targeting third-party job postings. With a single click, job seekers can submit multiple applications efficiently, eliminating repetitive manual steps.",
      tech: ["Python", "Selenium", "Flask", "Automation", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Deeraj7/EasyDiceApply",
      highlights: [
        "End-to-end automation of the job application process on Dice.com",
        "Intelligent filtering to target relevant third-party job listings",
        "Real-time tracking of application progress through a web-based dashboard",
        "User-friendly interface built with Flask, HTML, CSS, and JavaScript",
        "Seamless handling of modern web elements using Selenium (including Shadow DOM)",
        "Built-in resume management with customizable search preferences",
        "Support for headless operation for efficient automation"
      ],
      media: "./img/Easy_dice_apply poster-1.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "SciKey",
      description: "Scientific article summarization and key phrase extraction platform.",
      longDescription:
        "SciKey is a research assistant platform that helps users explore scientific literature through natural conversations. Users can ask questions in plain language and receive relevant answers extracted from research papers, along with recommendations for top related articles. Built with NLP technologies like Universal Sentence Encoder and TF-IDF, it processes scientific documents to deliver quick, accurate information.",
      tech: [
        "Flask",
        "Python",
        "Natural Language Processing",
        "Universal Sentence Encoder",
        "TF-IDF",
        "ROUGE Metrics"
      ],
      github: "https://github.com/Deeraj7/SciKey-Advanced-Key-Phrase-Extraction-and-Summarization-for-Scientific-Research.git",
      highlights: [
        "Semantic and TF-IDF-based key phrase extraction",
        "Precise article summarization with customizable sentence count",
        "Relevance and ROUGE scoring for summary evaluation",
        "Real-time document processing via an interactive web interface",
        "Support for semantic similarity analysis using Universal Sentence Encoder",
        "Integration of modern NLP techniques for enhanced accuracy"
      ],
      media: "./img/scikey.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "News Cognizer",
      description: "AI-powered news classification system.",
      longDescription:
        "Uses NLP techniques to categorize news articles and identify fake news.",
      tech: ["Python", "NLP", "Machine Learning", "Classification"],
      github: "https://github.com/Deeraj7/NewsCognizer",
      highlights: [
        "Real-time news analysis",
        "Multi-label classification",
        "Sentiment analysis integration",
        "High accuracy detection"
      ],
      media: "./img/email.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const handleTileClick = (index) => {
    setActiveProject(index);
    setIsDetailsOpen(true);
  };

  const handleClose = () => {
    setIsDetailsOpen(false);
    setTimeout(() => setActiveProject(null), 500);
  };

  return (
    <div className="w-full px-4 py-16">
      <h2 className="text-4xl md:text-7xl font-bold mb-10 md:mb-20 text-center">
        <span className="block bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500">
          Featured Projects
        </span>
      </h2>

      <motion.div
        layout
        className={`min-h-[60vh] ${
          isDetailsOpen 
            ? "md:container md:mx-auto md:grid md:grid-cols-[1fr_2fr] md:gap-8" 
            : "block"
        }`}
      >
        {/* Project Grid */}
        <motion.div
          layout
          className={
            isDetailsOpen 
              ? "hidden md:grid md:grid-cols-1 md:gap-4 md:max-h-screen md:overflow-y-auto md:pr-4" 
              : "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              onClick={() => handleTileClick(index)}
              className={`relative backdrop-blur-xl bg-gray-800/80 rounded-2xl border
                ${activeProject === index 
                  ? 'border-teal-500/50 ring-2 ring-teal-500/50' 
                  : 'border-blue-500/20 hover:border-teal-500/30'}
                overflow-hidden cursor-pointer`}
            >
              <div className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden bg-gray-900">
                  <img
                    src={project.media}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold bg-clip-text text-transparent 
                    bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs md:text-sm rounded-full 
                          bg-blue-500/10 text-teal-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-blue-500/10 
                        hover:bg-blue-500/20 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-teal-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Screen Project Details for Mobile */}
        <AnimatePresence mode="wait">
          {isDetailsOpen && activeProject !== null && (
            <motion.div
              layout
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-0 bg-gray-900 z-50 md:relative md:inset-auto
                md:backdrop-blur-xl md:bg-gray-800/80 md:rounded-2xl md:border
                md:border-blue-500/20 overflow-y-auto"
            >
              {/* Close button - only visible on mobile */}
              <button
                onClick={handleClose}
                className="fixed top-4 right-4 p-2 rounded-full bg-gray-800/80 
                  border border-blue-500/20 z-50 md:hidden
                  hover:bg-blue-500/10 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-teal-400" />
              </button>

              {/* Project Details Content */}
              <div className="p-6 pt-16 md:p-8 space-y-6">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-blue-400 to-teal-400">
                  {projects[activeProject].title}
                </h3>

                {/* Project Image - Larger on mobile */}
                <div className="aspect-video w-full rounded-xl overflow-hidden">
                  <img
                    src={projects[activeProject].media}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-300">
                  {projects[activeProject].longDescription}
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-teal-400 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {projects[activeProject].highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-gray-300"
                      >
                        <span className="h-2 w-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500/10 
                        text-teal-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2
                    bg-blue-500/10 hover:bg-blue-500/20 
                    rounded-lg transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-300">View Source</span>
                </a>
              </div>

              {/* Close button for desktop */}
              <button
                onClick={handleClose}
                className="hidden md:block absolute top-4 right-4 p-2 rounded-full
                  hover:bg-blue-500/10 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-teal-400" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;