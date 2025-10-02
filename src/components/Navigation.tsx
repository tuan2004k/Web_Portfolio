import React from 'react';
import { Menu, X } from 'lucide-react';
import Cursor from '@/components/Cursor';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection 
}: NavigationProps) {
  const navItems = [
    { id: 'hero', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'experience', label: 'Kinh nghiệm' },
    { id: 'skills', label: 'Kỹ năng' },
    { id: 'projects', label: 'Dự án' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-teal-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <Cursor />
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-teal-400 ${
                  activeSection === item.id ? 'text-teal-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-teal-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}