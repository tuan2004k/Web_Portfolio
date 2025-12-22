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

  // Background orb component
  const BackgroundOrb = ({ position, color, delay }: any) => (
    <motion.div
      className={`absolute ${position} w-72 h-72 ${color} rounded-full blur-3xl`}
      animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BackgroundOrb position="top-1/4 -right-20" color="bg-teal-500/10" delay={0} />
        <BackgroundOrb position="bottom-1/4 -left-20" color="bg-cyan-500/10" delay={3} />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <motion.div 
                className="relative bg-slate-900/80 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/20 shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  borderColor: "rgba(45, 212, 191, 0.6)",
                  boxShadow: "0 20px 40px -15px rgba(45, 212, 191, 0.4)"
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-teal-400 mb-6"
                  whileHover={{ 
                    color: "#22d3ee",
                    x: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.category}
                </motion.h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-teal-500/10 text-teal-300 rounded-lg text-sm font-medium border border-teal-500/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(45, 212, 191, 0.3)",
                        borderColor: "rgba(45, 212, 191, 0.6)",
                        color: "#5eead4",
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeOut",
                        delay: skillIndex * 0.1 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Corner accents */}
                <motion.div 
                  className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full"
                  whileHover={{ 
                    scale: 2,
                    backgroundColor: "#22d3ee",
                    boxShadow: "0 0 15px rgba(34, 211, 238, 0.8)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-3 left-3 w-2 h-2 bg-cyan-400 rounded-full"
                  whileHover={{ 
                    scale: 2,
                    backgroundColor: "#2dd4bf",
                    boxShadow: "0 0 15px rgba(45, 212, 191, 0.8)"
                  }}
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