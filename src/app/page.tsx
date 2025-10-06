'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import WaterEffects from '@/components/WaterEffects';
import BackgroundElements from '@/components/BackgroundElements';
import EducationSection from '@/components/EducationSection';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const sections = [
    { id: 'hero', Component: HeroSection, className: 'min-h-screen' },
    { id: 'about', Component: AboutSection, className: 'min-h-screen' },
    { id: 'education', Component: EducationSection, className: 'min-h-screen' },
    { id: 'experience', Component: ExperienceSection, className: 'min-h-screen' },
    { id: 'skills', Component: SkillsSection, className: 'min-h-screen' },
    { id: 'projects', Component: ProjectsSection, className: 'min-h-screen' },
    { id: 'contact', Component: ContactSection, className: 'min-h-screen' },
  ];

  const sectionRefs = sections.reduce((acc, { id }) => {
    acc[id] = useRef(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLElement>>);

  // Detect mobile and mount
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: isMobile ? 0.1 : 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Background & Water Effects */}
      {isMounted && !shouldReduceMotion && (
        <>
          <BackgroundElements isMounted={isMounted} isMobile={isMobile} />
          <WaterEffects isMounted={isMounted} isMobile={isMobile} />
        </>
      )}

      {/* Navigation */}
      <div className="relative z-50">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {sections.map(({ id, Component, className }) => (
          <section key={id} id={id} ref={sectionRefs[id]} className={className}>
            <Component scrollToSection={scrollToSection} />
          </section>
        ))}
      </div>
    </div>
  );
}