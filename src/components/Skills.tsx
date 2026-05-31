import React from 'react';
import { Layout, Database, BookOpen, Settings, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      color: "text-neonPurple bg-neonPurple/5 border-neonPurple/20",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "Tailwind CSS",
        "Ant Design",
        "HTML5 / CSS3",
        "Bootstrap"
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "text-neonCyan bg-neonCyan/5 border-neonCyan/20",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "MySQL",
        "Database Design"
      ]
    },
    {
      title: "Computer Science Core",
      icon: BookOpen,
      color: "text-neonPink bg-neonPink/5 border-neonPink/20",
      skills: [
        "Data Structures & Algorithms",
        "C / C++",
        "Object Oriented Programming (OOP)",
        "Operating Systems (OS)",
        "Database Management Systems (DBMS)"
      ]
    },
    {
      title: "Tools & Workflows",
      icon: Settings,
      color: "text-neonGreen bg-neonGreen/5 border-neonGreen/20",
      skills: [
        "Git & GitHub",
        "Webpack / Build Tools",
        "npm / yarn",
        "VS Code",
        "Chrome Developer Tools"
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Technical Skills</h2>
        <p className="text-gray-400 font-mono text-sm">Frameworks, languages, and computer science foundations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div 
              key={idx} 
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 hover:border-white/10 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${category.color}`}>
                  <Icon size={18} className="stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-darkBg/60 border border-darkBorder rounded-xl text-xs text-gray-300 hover:text-white hover:border-darkBorder/80 hover:bg-darkBg transition-all font-mono"
                  >
                    <CheckCircle2 size={12} className="text-neonGreen" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
