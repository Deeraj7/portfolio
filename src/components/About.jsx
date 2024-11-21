import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, BookOpen, Briefcase, Award, ChevronRight,
  MapPin, Target
} from 'lucide-react';

const About = () => {
  // Ref for scrolling to experience section
  const experienceRef = useRef(null);

  const scrollToExperience = () => {
    if (experienceRef.current) {
      const yOffset = -100; 
      const element = experienceRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const education = [
    {
      degree: "Master of Science in Data Engineering",
      school: "University of North Texas",
      period: "Jan 2023 - Dec 2024",
      location: "Denton, TX",
      details: [
        "GPA: 4.0/4.0",
        "Related Coursework: Machine Learning, Big Data & Data Sciences, Fundamentals of Databases, Distributed and Parallel Databases, Data Mining, Scientific Data Visualization, Natural Language Processing, Methods of Empirical Analysis"
      ]
    },
    {
      degree: "Bachelor of Technology in Electronics and Communications",
      school: "Rajiv Gandhi University of Knowledge and Technologies",
      period: "Aug 2016 - May 2021",
      location: "Kadapa, India",
      details: []
    }
  ];

  const experience = [
    {
      role: "Graduate Teaching Assistant",
      company: "University of North Texas",
      period: "2023 - Present",
      location: "Denton, TX",
      details: [
        <>
          Delivered tutorials on <strong>Hadoop</strong>, <strong>Spark</strong>, <strong>AWS</strong>, and <strong>Cassandra</strong>, emphasizing hands-on <strong>data pipeline design</strong> and <strong>distributed computing</strong>.
        </>,
        <>
          Developed course materials on <strong>ETL workflows</strong>, <strong>data modeling</strong>, and <strong>fault-tolerant system design</strong> using <strong>PySpark</strong>, <strong>Hive</strong>, and <strong>Amazon S3</strong>.
        </>,
        <>
          Graded assignments and projects involving scalable <strong>big data solutions</strong>, providing feedback on <strong>pipeline optimization</strong> and <strong>system performance</strong>.
        </>,
        <>
          Mentored students on building end-to-end <strong>data workflows</strong>, including <strong>ingestion</strong>, <strong>transformation</strong>, and <strong>visualization</strong>, aligned with <strong>industry practices</strong>.
        </>,
        <>
          Enhanced course content with tools like <strong>Amazon EMR</strong>, <strong>Apache Spark</strong>, and <strong>NoSQL databases</strong> to reflect current <strong>data engineering trends</strong>.
        </>
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <h2 className="text-4xl md:text-7xl font-bold mb-12 md:mb-20 text-center">
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500">
          About Me
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 md:gap-12">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-8">
          <div className="relative group">
            {/* Image container */}
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src="./img/profile.jpg"
                alt="Deeraj Thakkilapati"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            </div>
            
            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 
              -rotate-2 scale-[1.02] group-hover:rotate-0 group-hover:scale-105
              transition-transform duration-500" />
          </div>

          {/* Action Buttons and Status */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={scrollToExperience}
                className="flex items-center justify-center space-x-2 px-6 py-3 
                  rounded-xl font-semibold border border-blue-500/20 hover:border-teal-500/40 
                  backdrop-blur-xl bg-gray-800/80 transition-all duration-300 
                  transform hover:scale-[1.02] group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Briefcase className="w-5 h-5 text-teal-400 group-hover:rotate-12 transition-transform" />
                <span>{`${2}+ Years Experience`}</span>
              </motion.button>

              <motion.a
                href="https://docs.google.com/document/d/1GLlu5lGS86fnqoz7ehuxWXt_C802yb1Z32gxiTa4M80/export?format=pdf"
                target="_blank"
                className="flex items-center justify-center space-x-2 px-6 py-3 
                  rounded-xl font-semibold border border-blue-500/20 hover:border-teal-500/40 
                  backdrop-blur-xl bg-gray-800/80 transition-all duration-300 
                  transform hover:scale-[1.02] group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Professional Status Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-xl bg-gray-800/80 rounded-xl p-6 border
                border-blue-500/20 hover:border-teal-500/40 transition-all duration-500"
            >
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-teal-400 mt-1" />
                  <p className="text-gray-300">
                    Open to Data Engineer and Analytical roles
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-teal-400 mt-1" />
                  <p className="text-gray-300">
                    Based in Dallas, TX • Open to relocation
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-teal-400 mt-1" />
                  <p className="text-gray-300">
                    Focusing on advanced data engineering practices and cloud architecture
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Education Section */}
          <div className="backdrop-blur-xl bg-gray-800/80 rounded-2xl p-8 border
            border-blue-500/20 hover:border-teal-500/40 transition-all duration-500">
            <div className="flex items-center space-x-4 mb-8">
              <BookOpen className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-blue-400 to-teal-400">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-6 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/20" />
                  <div className="absolute left-0 top-2 w-2 h-2 -ml-1 rounded-full
                    bg-gradient-to-r from-blue-400 to-teal-400" />

                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-teal-400">{edu.school}</p>
                  <p className="text-gray-400">{edu.period} • {edu.location}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <ChevronRight className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="backdrop-blur-xl bg-gray-800/80 rounded-2xl p-8 border
            border-blue-500/20 hover:border-teal-500/40 transition-all duration-500">
            <div ref={experienceRef} className="flex items-center space-x-4 mb-8">
              <Briefcase className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-blue-400 to-teal-400">
                Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-6"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/20" />
                  <div className="absolute left-0 top-2 w-2 h-2 -ml-1 rounded-full
                    bg-gradient-to-r from-blue-400 to-teal-400" />

                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-teal-400">{exp.company}</p>
                  <p className="text-gray-400">{exp.period} • {exp.location}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <ChevronRight className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;