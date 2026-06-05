import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      type: 'work',
      badge: 'FULL-TIME',
      role: 'Software Development Engineer 2 (SDE-2)',
      company: 'Capillary Technologies',
      duration: 'May 2026 - Present · 1 mo',
      description: 'Promoted to SDE-2, leading complex feature development and system design decisions for enterprise CRM and customer engagement platforms.',
      points: [
        'Developed Archival Support to efficiently manage inactive templates, campaigns, and journeys.',
        'Implemented Test/Control Support in Journeys to enhance user experience and data analysis.',
        'Introduced Anonymous User Support in Journeys, allowing for broader user engagement and interaction.',
      ],
      tech: ['React.js', 'TypeScript', 'Redux', 'Ant Design', 'Node.js', 'REST APIs', 'JIRA', 'Grafana', 'NewRelics']
    },
    {
      type: 'work',
      badge: 'FULL-TIME',
      role: 'Software Development Engineer 1 (SDE-1)',
      company: 'Capillary Technologies',
      duration: 'Jul 2023 - Apr 2026 · 2 yrs 10 mos',
      description: 'Designed and developed high-throughput customer engagement and CRM platforms. Built premium, responsive modular dashboards and user management tools, focusing on web optimization and client analytics interfaces.',
      points: [
        'Architected and scaled UI capabilities for CRM and customer engagement products generating $72M+ in annual revenue, collaborating cross-functionally with Product and Design teams.',
        'Delivered 20+ enterprise features across core CRM modules within a distributed microservices architecture serving large global clients.',
        'Led React v16 → v18 migration of the core UI platform, enabling concurrent rendering, improving responsiveness and long-term maintainability across multiple products.',
        'Led end-to-end integration of third-party messaging gateways (WhatsApp/ICS and Zalo/GAPIT), delivering flagship engagement capabilities adopted by enterprise clients.',
        'Integrated an in-house HTML editor across 4 major modules, standardizing email creative workflows and eliminating cross-platform inconsistencies.',
        'Expanded journey orchestration by implementing Webhook, Random Split, Loyalty Promotion, and In-App messaging blocks; optimized approval APIs reducing response times by 70%.',
        'Implemented a file upload validation framework addressing VAPT security findings, improving both upload safety and performance.',
        'Maintained 90%+ unit and integration test coverage across sprint deliverables while owning the full development lifecycle — design, implementation, automation, and release.',
        'Proactively diagnosed and resolved high-priority production incidents, contributing to near-zero downtime and stable production releases.',
        'Mentored junior engineers and interns through code reviews and architectural guidance, improving code quality and debugging efficiency across the team.',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'React.js', 'TypeScript', 'Redux', 'Ant Design', 'Webpack', 'Node.js', 'Express.js', 'MongoDB', 'Jest', 'React Testing Library', 'JIRA', 'PostMan', 'NewRelics', 'Grafana']
    },
    {
      type: 'work',
      badge: 'INTERNSHIP',
      role: 'Software Development Engineer Intern',
      company: 'Capillary Technologies',
      duration: 'Jan 2023 - Jul 2023 · 7 mos · Remote',
      description: 'Worked in the Core UI team, contributing to internal platform tools focused on UI automation, API automation, and localization support.',
      points: [
        'Developed and maintained UI automation flows to streamline testing and reduce regression time.',
        'Built and tested backend services using Node.js, focusing on automation and test coverage.',
        'Contributed to localized UI projects, ensuring internationalization compliance and consistent interface behaviour.',
        'Gained experience with enterprise-scale frontend systems and agile team collaboration.',
      ],
      tech: ['React.js', 'Node.js', 'JavaScript', 'WebDriverIO', 'Jest', 'HTML', 'CSS', 'Git', 'PostMan']
    },
    {
      type: 'education',
      badge: 'DEGREE',
      role: 'Bachelor Of Technology',
      company: 'National Institute Of Technology, Agartala',
      duration: '2019 - 2023',
      description: 'Completed B.Tech in Chemical Engineering with a solid foundation in computer science and data structures. Achieved an aggregate CGPA of 8.03/10.',
      points: [
        'Specialized in CS fundamentals: Data Structures and Algorithms, Object-Oriented Programming (OOP), Operating Systems (OS), and Database Management Systems (DBMS).',
        'Represented NIT Agartala as a member of the drama team at Cultural Fests in IIT Guwahati and IIT Kharagpur.',
        'Actively participated in Inter-Year Cricket Tournaments and Hindi Saptaah (Drama team, 2019).',
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
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-white tracking-tight">{item.role}</h3>
                    <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded-full border tracking-widest uppercase
                      ${item.badge === 'INTERNSHIP'
                        ? 'bg-neonGreen/10 text-neonGreen border-neonGreen/30'
                        : item.badge === 'DEGREE'
                        ? 'bg-neonPink/10 text-neonPink border-neonPink/30'
                        : 'bg-neonPurple/10 text-neonPurple border-neonPurple/30'
                      }`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-neonCyan">{item.company}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-darkBg/60 border border-darkBorder py-1 px-3 rounded-lg w-fit shrink-0">
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
