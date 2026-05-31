import React from 'react';
import {
  ArrowUpRight,
  Terminal,
  Award,
  Sparkles,
  Activity,
  ExternalLink
} from 'lucide-react';
import avatarImg from '../assets/Aman_Gupta_Profile.png';

interface DashboardHomeProps {
  setActiveTab: (tab: string) => void;
}

export default function DashboardHome({ setActiveTab }: DashboardHomeProps) {
  // Stats data
  const stats = [
    {
      title: "LeetCode Profile",
      value: "1000+ Solved",
      color: "from-amber-500 to-orange-600",
      accent: "text-orange-400",
      link: "https://leetcode.com/aman18111625",
      details: [
        { label: "Medium", count: "610+", color: "bg-amber-500" },
        { label: "Hard", count: "218+", color: "bg-red-500" },
      ]
    },
    {
      title: "GFG Rankings",
      value: "Institute Rank 4",
      color: "from-emerald-500 to-green-700",
      accent: "text-emerald-400",
      link: "https://auth.geeksforgeeks.org/user/guptaboyaman143/practice",
      details: [
        { label: "NIT Agartala", count: "Rank 4 / 1.8K+", color: "bg-emerald-500" },
        { label: "Worldwide", count: "Top 200 / 100K+", color: "bg-teal-500" },
      ]
    },
    {
      title: "CodeChef Stats",
      value: "3★ / 1634",
      color: "from-sky-500 to-blue-700",
      accent: "text-sky-400",
      link: "https://www.codechef.com/users/aman18111625",
      details: [
        { label: "August Long", count: "Rank 242 / 25K", color: "bg-sky-500" },
        { label: "September Cook-Off", count: "Rank 715 / 5K", color: "bg-indigo-500" },
      ]
    }
  ];

  // Certifications summary
  const certs = [
    { name: "JavaScript (Basic)", issuer: "HackerRank" },
    { name: "Problem Solving (Basic)", issuer: "HackerRank" },
    { name: "SQL (Basic)", issuer: "HackerRank" }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden glass-panel rounded-3xl p-8 lg:p-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Background glow overlay */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-neonPurple/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-neonCyan/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Text Details */}
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-neonPurple/10 border border-neonPurple/30 rounded-full py-1.5 px-4 text-xs font-mono text-neonPurple font-semibold shadow-sm">
            <Sparkles size={14} className="animate-pulse" />
            <span>AVAILABLE FOR FULL-STACK & FRONTEND ROLES</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Hello, I'm <span className="bg-gradient-to-r from-neonPurple via-neonPink to-neonCyan bg-clip-text text-transparent">Aman Gupta</span>
            </h1>
            <p className="text-xl lg:text-2xl font-semibold text-gray-300">
              Software Development Engineer @ Capillary Technologies
            </p>
          </div>

          <p className="text-gray-400 max-w-2xl leading-relaxed text-base lg:text-lg">
            I am a results-driven <strong className="text-white">SDE-2</strong> with ~3 years of experience building scalable, high-performance customer engagement and CRM platforms. An alumnus of <strong className="text-white">NIT Agartala</strong>, I couple a strong foundation in Data Structures & Algorithms with an eye for premium frontend aesthetics and system design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-neonPurple to-neonCyan text-white font-semibold text-sm hover:shadow-neon-purple hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              Contact Me
              <ArrowUpRight size={16} />
            </button>
            <a
              href="https://www.linkedin.com/in/aman-gupta-00a6321b5/"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-6 rounded-xl border border-darkBorder hover:border-neonPurple/50 hover:bg-neonPurple/5 text-gray-300 hover:text-white font-semibold text-sm transition-all flex items-center gap-2"
            >
              View LinkedIn Profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Profile Image Display */}
        <div className="relative z-10 w-44 h-44 lg:w-56 lg:h-56">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-neonPurple via-neonPink to-neonCyan p-1 animate-gradient-xy shadow-neon-purple">
            <div className="w-full h-full bg-darkCard rounded-[22px] overflow-hidden flex items-center justify-center p-1.5">
              <img
                src={avatarImg}
                alt="Aman Gupta Profile"
                className="w-full h-full object-cover rounded-[18px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Stats Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Activity size={20} className="text-neonCyan" />
            Developer Stats & Competitive Coding
          </h2>
          <span className="text-xs text-gray-500 font-mono">Real-time Profiles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <a
              key={i}
              href={stat.link}
              target="_blank"
              rel="noreferrer"
              className="glass-panel-interactive p-6 rounded-2xl group flex flex-col justify-between h-48 relative overflow-hidden"
            >
              {/* Backglow on Hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-neonPurple/5 rounded-full blur-2xl group-hover:bg-neonPurple/10 transition-all pointer-events-none"></div>

              <div className="flex justify-between items-start">
                <span className="text-sm font-mono text-gray-400">{stat.title}</span>
                <ArrowUpRight size={18} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>

              <div className="my-3">
                <span className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                  {stat.value}
                </span>
              </div>

              {/* Progress bars and detail pills */}
              <div className="space-y-2 mt-auto">
                <div className="flex gap-2">
                  {stat.details.map((det, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-darkBg border border-darkBorder rounded-md text-gray-300 font-medium">
                      {det.label}: <strong className="text-white font-semibold">{det.count}</strong>
                    </span>
                  ))}
                </div>
                <div className="w-full h-1.5 bg-darkBg rounded-full overflow-hidden border border-darkBorder">
                  <div className={`h-full bg-gradient-to-r ${stat.color} w-4/5 rounded-full`}></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Projects & Hackerrank Certs Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Experience & Recent Projects */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Terminal size={20} className="text-neonPurple" />
              Key Experience
            </h2>
            <button
              onClick={() => setActiveTab('experience')}
              className="text-xs text-neonPurple hover:underline font-mono"
            >
              View Full Timeline
            </button>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-neonCyan font-bold text-lg">
                  CT
                </div>
                <div>
                  <h3 className="font-bold text-gray-100 text-lg">Software Development Engineer - 2</h3>
                  <p className="text-gray-400 text-sm">Capillary Technologies • Full-time</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-mono bg-darkBg py-1 px-2.5 rounded-lg border border-darkBorder">
                May,2026-Present
              </span>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-neonCyan font-bold text-lg">
                  CT
                </div>
                <div>
                  <h3 className="font-bold text-gray-100 text-lg">Software Development Engineer - 1</h3>
                  <p className="text-gray-400 text-sm">Capillary Technologies • Full-time</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-mono bg-darkBg py-1 px-2.5 rounded-lg border border-darkBorder">
                July,2023-Apr,2026
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading the development of highly interactive CRM modules and enterprise dashboards. Collaborating with cross-functional teams to integrate secure RESTful APIs, streamline Redux architecture, and improve web vitals for customer-facing interfaces.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "TypeScript", "Redux", "Tailwind CSS", "Ant Design", "REST APIs"].map((tech, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 bg-neonCyan/5 border border-neonCyan/20 rounded-lg text-neonCyan font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Right 1 Col: Certifications & Competencies */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Award size={20} className="text-neonPink" />
            HackerRank Badges
          </h2>
          <div className="glass-panel p-6 rounded-2xl space-y-4 h-[calc(100%-2.5rem)] flex flex-col justify-between">
            <div className="space-y-3">
              {certs.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-darkBg/60 border border-darkBorder rounded-xl hover:border-neonPink/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-neonPink/10 border border-neonPink/30 flex items-center justify-center text-neonPink text-xs font-bold font-mono">
                    HR
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">{cert.name}</h4>
                    <p className="text-xs text-gray-500 font-mono">{cert.issuer} Certified</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveTab('certifications')}
              className="w-full mt-4 py-2.5 rounded-xl border border-darkBorder hover:border-neonPink/50 hover:bg-neonPink/5 text-gray-400 hover:text-white font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2"
            >
              See All Certificates
              <ArrowUpRight size={14} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
