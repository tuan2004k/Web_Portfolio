import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullName = "Dau Minh Tuan";

  // Cursor blink effect
  useEffect(() => {
    if (!isTyping) {
      const cursorInterval = setInterval(() => setCursorVisible(v => !v), 500);
      return () => clearInterval(cursorInterval);
    }
  }, [isTyping]);

  const typeName = () => {
    let currentIndex = 0;
    setDisplayedName("");
    setIsTyping(true);
    setCursorVisible(true);

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 120);
  };

  useEffect(() => {
    setTimeout(typeName, 800);
  }, []);

  // Unified variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-10 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(94,234,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.08) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          
          {/* Image Section */}
          <motion.div 
            className="lg:w-2/5 flex justify-center lg:justify-start order-2 lg:order-1 lg:mt-1"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              
              <motion.div 
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/avatar.png"
                  alt="Dau Minh Tuan" 
                  width={384}
                  height={384}
                  className="w-full h-full object-cover rounded-full border-4 border-slate-800 group-hover:border-teal-400/50 transition-all duration-500"
                  priority
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 bg-cyan-400/20 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-4 h-4 bg-teal-400/20 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            className="lg:w-3/5 text-center lg:text-left order-1 lg:order-2 flex flex-col justify-center lg:min-h-[80vh] lg:py-20"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Hello!
            </motion.h1>

            <motion.p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6">
              I am{" "}
              <motion.span
                className="text-teal-400 font-bold relative inline-block cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                onClick={typeName}
                title="Click to re-type!"
                whileHover={{ scale: 1.05 }}
              >
                {displayedName}
                {isTyping && cursorVisible && (
                  <span className="ml-1 w-0.5 h-8 bg-cyan-400 inline-block align-middle animate-pulse" />
                )}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
              </motion.span>
            </motion.p>

            <motion.p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Full Stack Developer with React, Next.js, TypeScript — passionate about creating
              amazing web experiences{" "}
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-400 text-xl inline-block"
              >
                ✨
              </motion.span>
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-semibold text-white overflow-hidden w-full sm:w-auto min-w-[160px]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
                <span className="relative z-10 flex items-center justify-center">
                  View Projects
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-4 border-2 border-teal-500/70 rounded-full font-semibold text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 w-full sm:w-auto min-w-[160px]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center">
                  Contact Me
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}