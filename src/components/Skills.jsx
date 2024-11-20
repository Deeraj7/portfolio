import React from "react";
import { Database, Cloud, Code, Brain, Monitor, Settings } from "lucide-react";

const Skills = () => {
  // Simple icons mapping for skills
  const getSkillIcon = (skillName) => {
    switch (skillName.toLowerCase()) {
      case "python":
      case "scala":
        return <Code className="w-5 h-5" />;
      case "sql":
      case "oracle":
      case "mysql":
      case "postgres":
      case "cassandra":
        return <Database className="w-5 h-5" />;
      case "aws":
      case "oracle cloud":
        return <Cloud className="w-5 h-5" />;
      case "apache spark":
      case "hadoop":
      case "hive":
        return <Monitor className="w-5 h-5" />;
      case "git":
      case "linux":
      case "power bi":
      case "tableau":
        return <Settings className="w-5 h-5" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  const skillsCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Scala", "SQL", "Stored Procedures"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["Oracle", "MySQL", "Cassandra", "Postgres"],
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Oracle Cloud"],
    },
    {
      title: "Big Data",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Hive", "Hadoop", "MapReduce"],
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        "Apache Spark",
        "Tableau",
        "Git",
        "Linux",
        "Postman",
        "Power BI",
      ],
    },
    {
      title: "Concepts",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "Design Patterns",
        "Machine Learning",
        "NB Classifiers",
        "SVM",
        "Decision Tree",
        "K-Means",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-6xl font-bold mb-12 text-center">
        <span
          className="block bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
        >
          Technical Skills
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 border
              border-blue-500/20 hover:scale-105 hover:border-blue-500/40 
              transition-transform duration-500 shadow-lg"
          >
            {/* Category Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-300">{category.title}</h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm 
                    bg-blue-500/10 text-gray-300 hover:bg-blue-500/20 
                    hover:text-blue-300 transition-colors duration-300"
                >
                  {getSkillIcon(skill)}
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
