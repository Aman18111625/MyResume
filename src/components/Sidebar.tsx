import React from 'react';
import {
  LayoutDashboard,
  Briefcase,
  Code2,
  Award,
  Mail,
  Menu,
  X,
  Terminal
} from 'lucide-react';
import avatarImg from '../assets/Aman_Gupta_Profile.png';

const Github = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Terminal },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-darkCard/80 backdrop-blur-md border-b border-darkBorder flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neonPurple to-neonCyan flex items-center justify-center font-bold text-white shadow-neon-purple">
            A
          </div>
          <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            AMAN GUPTA
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-400 hover:text-white rounded-lg border border-darkBorder bg-darkBg/50 hover:bg-darkCard transition-all"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-darkCard/95 border-r border-darkBorder lg:bg-darkCard/40 lg:backdrop-blur-xl
        flex flex-col justify-between py-8 px-6 transition-transform duration-300 lg:translate-x-0
        ${isOpen ? 'translate-x-0 pt-20 lg:pt-8' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top: Brand & Profile Card */}
        <div className="flex flex-col gap-6">
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neonPurple to-neonCyan flex items-center justify-center font-black text-xl text-white shadow-neon-purple">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-wider text-white">AMAN GUPTA</span>
              <span className="text-xs text-gray-500 font-mono">Software Engineer</span>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-neonPurple/10 rounded-full blur-2xl group-hover:bg-neonPurple/25 transition-all"></div>
            <div className="relative">
              <img
                src={avatarImg}
                alt="Aman Gupta"
                className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow-lg"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80';
                }}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-neonGreen rounded-full border-2 border-darkCard shadow-[0_0_10px_#10b981]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-gray-200">Aman Gupta</span>
              <span className="text-xs text-neonGreen font-mono">Status: Online</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5 mt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full flex items-center gap-4 py-3.5 px-4 rounded-xl text-sm font-medium transition-all group duration-200
                    ${isActive
                      ? 'bg-gradient-to-r from-neonPurple/15 to-transparent border-l-2 border-neonPurple text-white shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={`transition-colors duration-200 ${isActive ? 'text-neonPurple shadow-neon-purple' : 'text-gray-400 group-hover:text-white'}`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Social Profiles */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="h-[1px] bg-darkBorder"></div>
          <div className="flex items-center justify-around px-2">
            <a
              href="https://github.com/aman18111625"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-darkBorder transition-all"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-gupta-00a6321b5/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-darkBorder transition-all"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://leetcode.com/aman18111625"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-darkBorder transition-all"
              title="LeetCode"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.88 9.88a1.374 1.374 0 0 0 0 1.94l6.006 6.005a1.37 1.37 0 0 0 1.417.309 1.36 1.36 0 0 0 .918-.947l1.081-3.806 3.86 3.86a1.375 1.375 0 0 0 1.948-.006l6.007-6.006a1.37 1.37 0 0 0 0-1.94l-7.7-7.7A1.37 1.37 0 0 0 13.483 0zm.012 2.307a.38.38 0 0 1 .27.12l7.7 7.7a.38.38 0 0 1 0 .539l-6.007 6.006a.379.379 0 0 1-.537 0l-4.52-4.517a.38.38 0 0 1-.09-.379l1.455-5.11a.38.38 0 0 1 .37-.275H13.5zm-5.06 7.37a.38.38 0 0 1 .27.12l4.52 4.516a.38.38 0 0 1-.269.658h-3.41l-1.121 3.96a.38.38 0 0 1-.689.102l-6.007-6.006a.38.38 0 0 1 0-.539l9.88-9.88a.38.38 0 0 1 .536 0l1.621 1.62a.38.38 0 0 1-.536.538l-1.35-1.35-8.49 8.49 4.886 4.886 1.134-4.004a.38.38 0 0 1 .37-.275h3.407l-4.886-4.886a.38.38 0 0 1 .27-.12z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
