import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHome from './components/DashboardHome';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome setActiveTab={setActiveTab} />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      default:
        return <DashboardHome setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-darkBg text-gray-200 flex flex-col lg:flex-row relative">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:pl-72 min-h-screen flex flex-col pt-20 lg:pt-0">
        <div className="flex-1 p-6 lg:p-12 max-w-6xl w-full mx-auto flex flex-col justify-between">
          
          {/* Main Tab Render */}
          <div className="animate-fade-in duration-300">
            {renderContent()}
          </div>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-darkBorder flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
            <p>© {new Date().getFullYear()} Aman Gupta. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with React & TypeScript
              <span className="w-1.5 h-1.5 rounded-full bg-neonPurple animate-ping"></span>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
