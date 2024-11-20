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
        "EasyDiceApply is a cutting-edge web-based tool designed to revolutionize the job search process for job seekers on Dice.com. With features like advanced filtering, streamlined automation, and real-time status updates, it helps job seekers apply faster and focus on finding the perfect role. The project aims to empower job seekers by enabling them to efficiently target third-party job postings, reducing repetitive tasks and enhancing the overall application experience.",
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
        "SciKey is a platform designed to assist researchers and academics in quickly identifying essential information from extensive scientific documents. Using advanced NLP techniques like Universal Sentence Encoder and TF-IDF, it provides precise summaries and key phrases, enhancing productivity and simplifying the research process. SciKey supports customizable summarization methods, relevance scoring, and real-time processing.",
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
      <h2 className="text-7xl font-bold mb-20 text-center">
        <span className="block bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500">
          Featured Projects
        </span>
      </h2>

      <motion.div
        layout
        initial={false}
        className={`min-h-[60vh] ${
          isDetailsOpen 
            ? "container mx-auto grid grid-cols-[1fr_2fr] gap-8" 
            : "block"
        }`}
        transition={{
          layout: { duration: 0.6, type: "spring", bounce: 0.2 }
        }}
      >
        {/* Projects Grid */}
        <motion.div
          layout
          className={
            isDetailsOpen 
              ? "grid grid-cols-1 gap-4 max-h-screen overflow-y-auto pr-4" 
              : "grid grid-cols-3 gap-6 mx-auto"
          }
          transition={{
            layout: { duration: 0.6, type: "spring", bounce: 0.2 }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={false}
              onClick={() => handleTileClick(index)}
              className={`relative backdrop-blur-xl bg-gray-800/80 rounded-2xl border
                ${activeProject === index 
                  ? 'border-teal-500/50 ring-2 ring-teal-500/50' 
                  : 'border-blue-500/20 hover:border-teal-500/30'}
                overflow-hidden cursor-pointer h-full ${
                  isDetailsOpen ? 'hover:translate-x-2' : ''
                }`}
              whileHover={!isDetailsOpen ? { scale: 1.05 } : { x: 8 }}
              transition={{
                layout: { duration: 0.6, type: "spring", bounce: 0.2 },
                scale: { duration: 0.2 },
                x: { duration: 0.2 }
              }}
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-900">
                <img
                  src={project.media}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-blue-500/10 
                          text-teal-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 
                        transition-all duration-300 group"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-teal-400 group-hover:scale-110 
                        transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Panel */}
        <AnimatePresence mode="wait">
          {isDetailsOpen && activeProject !== null && (
            <motion.div
              layout
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="backdrop-blur-xl bg-gray-800/80 rounded-2xl border
                border-blue-500/20 p-8 relative max-h-screen overflow-y-auto"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full
                  hover:bg-blue-500/10 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-teal-400" />
              </button>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-blue-400 to-teal-400">
                  {projects[activeProject].title}
                </h3>

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

                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src={projects[activeProject].video}
                    className="w-full h-full"
                    title={projects[activeProject].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;