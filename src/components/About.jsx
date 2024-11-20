import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Briefcase, Award, ChevronRight } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: "2+", text: "Years Experience" },
    { number: "10+", text: "Projects Completed" },
    { number: "3+", text: "Programming Languages" },
    { number: "5+", text: "Tools & Frameworks" }
  ];

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
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-7xl font-bold mb-20 text-center">
        <span className="block bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500">
          About Me
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
        {/* Left Column - Image and Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Image Container */}
          <div className="relative group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/img/profile.jpg" // Add your image path
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

          {/* Quick Info Card */}
          <motion.div
            className="backdrop-blur-xl bg-gray-800/80 rounded-2xl p-8 border
              border-blue-500/20 hover:border-teal-500/40 transition-all duration-500"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
            I believe great data solutions, like great designs, are about simplicity and impact. 
            Inspired by a relentless curiosity and a drive to connect the dots, 
            I’m a Data Engineer crafting scalable systems that not only work but inspire. 
            As Steve Jobs said, 'The people who are crazy enough to think they can change the world are the ones who do'—and I bring that spirit to every project I take on.
            </p>
            
            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-blue-500/5 border
                    border-blue-500/20 hover:border-teal-500/30 
                    transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold bg-clip-text text-transparent
                    bg-gradient-to-r from-blue-400 to-teal-400">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {achievement.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.a
              href="/path-to-your-resume.pdf" // Add your resume path
              download
              className="mt-8 w-full flex items-center justify-center space-x-2 px-6 py-3
                bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl font-semibold
                hover:from-blue-600 hover:to-teal-600 transition-all duration-300
                transform hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Timeline */}
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
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/20" />
                  
                  {/* Timeline Dot */}
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
            <div className="flex items-center space-x-4 mb-8">
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
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/20" />
                  
                  {/* Timeline Dot */}
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