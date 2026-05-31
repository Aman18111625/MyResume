import React from 'react';
import { ShieldCheck, ExternalLink, Trophy } from 'lucide-react';

export default function Certifications() {
  const achievements = [
    {
      platform: "GeeksforGeeks",
      title: "Institute Rank 4",
      metric: "Rank 4 / 1.8K+ students",
      description: "Ranked 4th on GeeksforGeeks at NIT Agartala, and achieved a worldwide Rank 200 out of over 100,000+ developers in DSA practice.",
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      badge: "GFG"
    },
    {
      platform: "CodeChef",
      title: "August Long Challenge 2021 (Div 3)",
      metric: "Worldwide Rank 242",
      description: "Ranked 242nd globally out of 25,000+ competitive programmers.",
      accent: "text-sky-400 border-sky-500/20 bg-sky-500/5",
      badge: "Div 3"
    },
    {
      platform: "CodeChef",
      title: "September Cook-Off 2021 (Div 2)",
      metric: "Worldwide Rank 715",
      description: "Ranked 715th globally among 5,000+ intermediate/advanced coders.",
      accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
      badge: "Div 2"
    },
    {
      platform: "SnackDown '21",
      title: "Snackdown Round 1 Qualifier",
      metric: "Worldwide Rank 1288",
      description: "Qualified Round 1 of Snackdown '21 global tournament, ranking 1288th out of 36,000+ competing developers.",
      accent: "text-amber-400 border-amber-500/20 bg-amber-500/5",
      badge: "Round 1"
    },
    {
      platform: "LeetCode",
      title: "Weekly Contest 296",
      metric: "Worldwide Rank 3201",
      description: "Placed 3201st out of 24,000+ developers globally in weekly speed-coding challenges.",
      accent: "text-orange-400 border-orange-500/20 bg-orange-500/5",
      badge: "Contest"
    }
  ];

  const certificates = [
    {
      name: "JavaScript Basic Certification",
      issuer: "HackerRank",
      date: "Verified",
      link: "https://www.hackerrank.com/certificates/b688466ca8a2",
      id: "b688466ca8a2"
    },
    {
      name: "Problem Solving Basic Certification",
      issuer: "HackerRank",
      date: "Verified",
      link: "https://www.hackerrank.com/certificates/c23aa0d76b8b",
      id: "c23aa0d76b8b"
    },
    {
      name: "SQL Basic Certification",
      issuer: "HackerRank",
      date: "Verified",
      link: "https://www.hackerrank.com/certificates/66ae4d60f6c5",
      id: "66ae4d60f6c5"
    }
  ];

  return (
    <div className="space-y-10 max-w-5xl">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Achievements & Certifications</h2>
        <p className="text-gray-400 font-mono text-sm">Competitive coding milestones and technical credentials</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Competitive Programming */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Trophy size={18} className="text-neonPurple" />
            Competitive Coding Honors
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {achievements.map((item, idx) => (
              <div 
                key={idx}
                className={`glass-panel p-5 rounded-2xl border flex items-start gap-4 hover:border-white/10 transition-all ${item.accent}`}
              >
                <div className="p-3 rounded-xl bg-darkBg border border-darkBorder flex items-center justify-center font-bold font-mono text-xs w-12 h-12 shrink-0">
                  {item.badge}
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-gray-400">{item.platform}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs font-semibold text-white">{item.metric}</span>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Verified Certificates */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck size={18} className="text-neonCyan" />
            Technical Certifications
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {certificates.map((cert, idx) => (
              <div 
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-between h-40 hover:border-neonCyan/30 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-semibold py-0.5 px-2 bg-neonCyan/10 text-neonCyan border border-neonCyan/20 rounded-md">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-gray-500">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight leading-snug">{cert.name}</h4>
                  <p className="text-[10px] text-gray-500 font-mono">ID: {cert.id}</p>
                </div>

                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full mt-2 py-2 rounded-xl bg-darkBg border border-darkBorder hover:border-neonCyan/30 hover:bg-neonCyan/5 text-gray-400 hover:text-neonCyan font-semibold text-xs font-mono transition-all flex items-center justify-center gap-1.5"
                >
                  Verify Certificate
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
