'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    experience: false,
    skills: false,
    projects: false,
    contact: false,
  });

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Sóng nước chính - các gợn sóng lan tỏa, giảm chói
  const waterWaves = [...Array(6)].map((_, i) => {
    const size = 300 + Math.random() * 400;
    const duration = 12 + Math.random() * 8;
    
    return (
      <motion.div
        key={`wave-${i}`}
        className="fixed pointer-events-none z-5 rounded-full border-2 border-teal-400/20"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        animate={{
          scale: [0, 4],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: duration,
          delay: i * 1.5 + Math.random() * 3,
          repeat: Infinity,
          repeatDelay: 8 + Math.random() * 6,
          ease: "easeOut",
        }}
      />
    );
  });

  // Sóng nhỏ - nhanh hơn và to hơn, giảm chói
  const smallWaves = [...Array(8)].map((_, i) => {
    const size = 80 + Math.random() * 120;
    const duration = 6 + Math.random() * 4;
    
    return (
      <motion.div
        key={`small-wave-${i}`}
        className="fixed pointer-events-none z-5 rounded-full border border-cyan-400/30"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        animate={{
          scale: [0, 5],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: duration,
          delay: i * 0.8 + Math.random() * 2,
          repeat: Infinity,
          repeatDelay: 4 + Math.random() * 5,
          ease: "easeOut",
        }}
      />
    );
  });

  // Giọt nước rơi
  const waterDrops = [...Array(15)].map((_, i) => {
    const startY = -20;
    const endY = typeof window !== 'undefined' ? window.innerHeight + 20 : 1000;
    const startX = Math.random() * 100;
    const duration = 2 + Math.random() * 2;
    
    return (
      <motion.div
        key={`drop-${i}`}
        className="fixed pointer-events-none z-5"
        style={{
          top: `${startY}%`,
          left: `${startX}%`,
        }}
        animate={{
          y: [0, endY],
          opacity: [0, 0.8, 0.6, 0],
        }}
        transition={{
          duration: duration,
          delay: i * 0.5 + Math.random() * 2,
          repeat: Infinity,
          repeatDelay: 3 + Math.random() * 4,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <div className="w-1 h-2 bg-cyan-400/60 rounded-full blur-[0.5px]" />
          <motion.div
            className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-400/30 rounded-full blur-sm"
            animate={{
              scale: [0, 3],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 0.8,
              delay: duration * 0.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </div>
      </motion.div>
    );
  });

  // Bong bóng nước - giảm chói nhưng vẫn nổi bật
  const waterBubbles = [...Array(10)].map((_, i) => {
    const size = 8 + Math.random() * 15;
    const startY = 90 + Math.random() * 10;
    const endY = -20;
    const startX = Math.random() * 100;
    const duration = 5 + Math.random() * 3;
    
    return (
      <motion.div
        key={`bubble-${i}`}
        className="fixed pointer-events-none z-5 rounded-full bg-cyan-400/50 blur-[1.5px]"
        style={{
          top: `${startY}%`,
          left: `${startX}%`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        animate={{
          y: [0, endY],
          x: [0, Math.random() * 40 - 20],
          opacity: [0, 0.7, 0.5, 0.3, 0],
          scale: [1, 1.8, 0.8],
        }}
        transition={{
          duration: duration,
          delay: i * 0.5 + Math.random() * 1.5,
          repeat: Infinity,
          repeatDelay: 3 + Math.random() * 5,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/30 to-teal-400/20 blur-[2px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-300/20"
          animate={{ scale: [0.95, 1.1, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    );
  });

  // Hiệu ứng ánh sáng phản chiếu trên nước
  const waterReflections = [...Array(6)].map((_, i) => {
    const width = 100 + Math.random() * 200;
    const height = 20 + Math.random() * 10;
    
    return (
      <motion.div
        key={`reflection-${i}`}
        className="fixed pointer-events-none z-5 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent blur-sm"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${width}px`,
          height: `${height}px`,
          transform: 'rotate(45deg)',
        }}
        animate={{
          x: [0, 300],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          delay: i * 1.5 + Math.random() * 2,
          repeat: Infinity,
          repeatDelay: 8 + Math.random() * 6,
          ease: "easeInOut",
        }}
      />
    );
  });

  // Các hạt nước nhỏ lơ lửng
  const waterParticles = [...Array(40)].map((_, i) => (
    <motion.div
      key={`water-particle-${i}`}
      className="fixed rounded-full pointer-events-none z-0 bg-cyan-400/20"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 0.5}px`,
        height: `${Math.random() * 3 + 0.5}px`,
      }}
      animate={{
        opacity: [0.1, 0.4, 0.1],
        scale: [1, 1.3, 1],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay: i * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Background Elements với z-index thấp */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {waterParticles}
        
        {/* Gradient Orbs nền với màu nước */}
        <motion.div
          className="absolute top-1/4 -left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.06, 0.12, 0.06],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Hiệu ứng bề mặt nước */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-teal-950/10" />
      </div>

      {/* Hiệu ứng sóng nước với z-index trung bình */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {waterWaves}
        {smallWaves}
        {waterDrops}
        {waterBubbles}
        {waterReflections}
      </div>

      {/* Navigation - cao nhất */}
      <div className="relative z-50">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Main Content - cao hơn hiệu ứng nước nhưng thấp hơn navigation */}
      <div className="relative z-10">
        <section id="hero" ref={sectionRefs.hero} className={`transition-opacity duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'} py-8`}> {/* Giảm padding từ mặc định */}
          <HeroSection scrollToSection={scrollToSection} />
        </section>
        <section id="about" ref={sectionRefs.about} className={`transition-opacity duration-1000 ${visibleSections.about ? 'opacity-100' : 'opacity-0'} py-8`}>
          <AboutSection />
        </section>
        <section id="experience" ref={sectionRefs.experience} className={`transition-opacity duration-1000 ${visibleSections.experience ? 'opacity-100' : 'opacity-0'} py-8`}>
          <ExperienceSection />
        </section>
        <section id="skills" ref={sectionRefs.skills} className={`transition-opacity duration-1000 ${visibleSections.skills ? 'opacity-100' : 'opacity-0'} py-8`}>
          <SkillsSection />
        </section>
        <section id="projects" ref={sectionRefs.projects} className={`transition-opacity duration-1000 ${visibleSections.projects ? 'opacity-100' : 'opacity-0'} py-8`}>
          <ProjectsSection />
        </section>
        <section id="contact" ref={sectionRefs.contact} className={`transition-opacity duration-1000 ${visibleSections.contact ? 'opacity-100' : 'opacity-0'} py-8`}>
          <ContactSection />
        </section>
      </div>

      <style jsx global>{`
        /* Hiệu ứng tổng thể cho theme nước */
        body {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
        }
        
        /* Đảm bảo các section có background phù hợp */
        #hero {
          position: relative;
          background: transparent;
        }
        
        #skills {
          position: relative;
          background: transparent;
        }
        
        /* Tối ưu hiệu suất */
        section {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
        }
        
        /* Scrollbar với theme nước */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #22d3ee, #2dd4bf);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #67e8f9, #5eead4);
        }
        
        /* Hiệu ứng glow nhẹ nhàng hơn */
        .glow {
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.3), 0 0 15px rgba(45, 212, 191, 0.2);
        }
        
        /* Giảm khoảng cách giữa các section */
        section {
          padding: 1rem; 
        }
      `}</style>
    </div>
  );
}