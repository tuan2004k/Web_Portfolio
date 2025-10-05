import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3', 'Vue.js']
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Vite']
    },
    {
      category: 'Others',
      skills: ['Figma', 'Responsive Design', 'Problem Solving']
    }
  ];

  // Animation variants
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
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const skillItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(45, 212, 191, 0.2)",
      borderColor: "rgba(45, 212, 191, 0.4)",
      color: "#5eead4",
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 bg-slate-950">
      {/* Simple Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 3
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className="relative bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-teal-500/20 transition-all duration-500 shadow-2xl shadow-teal-500/10"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-6">
                  <motion.h3 
                    className="text-2xl font-bold text-teal-400"
                    whileHover={{ color: "#22d3ee" }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.category}
                  </motion.h3>
                </div>

                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-teal-500/10 text-teal-300 rounded-lg text-sm font-medium border border-teal-500/20"
                      variants={skillItemVariants}
                      whileHover="hover"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Corner Accents */}
                <motion.div 
                  className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-3 left-3 w-2 h-2 bg-cyan-400 rounded-full"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}