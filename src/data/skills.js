// src/data/skills.js
export const skillsData = {
    languages: ['Scala', 'Python', 'SQL', 'Stored Procedures'],
    databases: ['Oracle', 'MySQL', 'Cassandra', 'Postgres'],
    cloud: ['AWS', 'Oracle Cloud'],
    bigdata: ['Hive', 'Hadoop', 'MapReduce'],
    tools: ['Apache Spark', 'Tableau', 'Git', 'Linux', 'Postman', 'Power BI'],
    concepts: ['Design Patterns', 'Machine Learning', 'NB Classifiers', 'SVM', 'Decision Tree', 'K-Means']
  };
  
  // src/components/Header.jsx
  import React from 'react';
  import { profileData } from '../data/profile';
  import { Github, Linkedin, Mail } from 'lucide-react';
  
  const Header = () => {
    return (
      <header className="fixed top-0 w-full backdrop-blur-md bg-gray-900/50 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {profileData.name}
            </h1>
            
            <nav>
              <ul className="flex space-x-8">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300
                        relative px-2 py-1 before:absolute before:inset-0 before:border-b-2 
                        before:border-blue-400 before:scale-x-0 hover:before:scale-x-100 
                        before:transition-transform before:duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
  
            <div className="flex items-center space-x-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  