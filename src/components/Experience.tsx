import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      type: 'work',
      role: 'Software Development Engineer (SDE-1)',
      company: 'Capillary Technologies',
      duration: 'January 2023 - April 2026',
      description: 'Designing and developing high-throughput customer engagement and CRM platforms. Building premium, responsive modular dashboards and user management tools, focusing on web optimization and client analytics interfaces.',
      points: [
        'Maintain and scale core frontend React repositories using TypeScript, ensuring clean coding standards and high code coverage.',
        'Collaborate closely with backend teams to integrate complex REST APIs and design seamless state management using Redux Toolkit.',
        'Refactor legacy features to improve lighthouse web vital scores, leading to faster page loads and improved client retention metrics.'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'Node.js', 'React.js', 'TypeScript', 'Redux', 'Ant Design', 'Webpack', 'Express.js', 'MongoDB', 'WebDriverIO', 'Jest', 'React Testing Library', 'JIRA', 'PostMan', 'NewRelics', 'Grafana']
    },
    {
      type: 'education',
      role: 'Bachelor Of Technology',
      company: 'National Institute Of Technology, Agartala',
      duration: '2019 - 2023',
      description: 'Completed B.Tech in Chemical Engineering with a solid foundation in computer science and data structures. Achieved an aggregate CGPA of 8.03/10.',
      points: [
        'Specialized in CS fundamentals: Data Structures and Algorithms, Object-Oriented Programming (OOP), Operating Systems (OS), and Database Management Systems (DBMS).',
      ],
      tech: ['Data Structures & Algorithms', 'C++', 'Object-Oriented Programming', 'Operating Systems', 'Database Management Systems', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Git', 'Tailwind CSS']
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Experience & Education</h2>
        <p className="text-gray-400 font-mono text-sm">Professional journey and academic timeline</p>
      </div>

      <div className="relative border-l border-darkBorder ml-4 lg:ml-6 pl-8 lg:pl-10 space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Icon */}
            <span className="absolute -left-[45px] lg:-left-[53px] top-1.5 flex h-9 w-9 items-center justify-center rounded-xl bg-darkCard border border-darkBorder group-hover:border-neonPurple/50 group-hover:shadow-neon-purple text-gray-400 group-hover:text-neonPurple transition-all">
              {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
            </span>

            {/* Content Panel */}
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden space-y-4">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-neonPurple/5 rounded-full blur-2xl group-hover:bg-neonPurple/10 transition-all pointer-events-none"></div>

              {/* Title & Organization */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{item.role}</h3>
                  <p className="text-sm font-semibold text-neonCyan">{item.company}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-darkBg/60 border border-darkBorder py-1 px-3 rounded-lg w-fit">
                  <Calendar size={12} className="text-neonPurple" />
                  {item.duration}
                </div>
              </div>

              {/* Main Description */}
              <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>

              {/* Bullet points */}
              <ul className="list-none space-y-2 text-xs text-gray-400">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neonPurple shadow-neon-purple"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack used */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tech.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[10px] px-2.5 py-0.5 bg-darkBg text-gray-400 border border-darkBorder rounded-md font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
