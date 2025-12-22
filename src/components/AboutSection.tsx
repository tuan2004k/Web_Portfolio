import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Content animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const skillItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Simple background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          variants={cardVariants}
          className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 shadow-2xl shadow-teal-500/10 hover:shadow-teal-500/20"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed text-justify"
            >
             I am an enthusiastic IT Web Developer with a strong eagerness to learn and adapt to new technologies. With a passion for building user-friendly and efficient web applications, I am committed to enhancing my technical skills and contributing to innovative projects for the company.
            </motion.p>
            
          
            {/* Highlighted skills */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
            >
              {[
                { skill: "Frontend Development", color: "teal" },
                { skill: "React & Next.js", color: "cyan" },
                { skill: "TypeScript", color: "teal" },
                { skill: "UI/UX Focus", color: "cyan" }
              ].map((item) => (
                <motion.div
                  key={item.skill}
                  variants={skillItemVariants}
                  className={`flex items-center space-x-3 p-3 rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/20 hover:border-${item.color}-500/40 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`w-2 h-2 bg-${item.color}-400 rounded-full`}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut" as const
                    }}
                  />
                  <span className={`text-${item.color}-300 font-medium`}>
                    {item.skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}