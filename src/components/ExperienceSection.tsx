import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'project' | 'education';
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: 'Full Stack E-Commerce Platform',
      company: 'Personal Project',
      period: '8/2025 - Present',
      description: 'Developed a fully-featured e-commerce platform with cart, payment, and product management functionalities. Integrated RESTful API and database design.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
      type: 'project'
    },
    {
      title: 'Electric Management System',
      company: 'Academic Project',
      period: '9/2025 - Present',
      description: 'Built an energy management system with a dashboard interface, consumption tracking, and intelligent reporting. Applied knowledge of data visualization.',
      technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'Chart.js'],
      type: 'project'
    },
    {
      title: 'Personal Portfolio Website',
      company: 'Personal Project',
      period: '10/2025 - 11/2025',
      description: 'Designed and developed a portfolio website with smooth animations, responsive design, and optimized performance. Showcased frontend development skills.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      type: 'project'
    },
    {
      title: 'Crew Member',
      company: 'KFC Vietnam',
      period: '6/2022 - 9/2024',
      description: 'Developed communication, teamwork, and problem-solving skills in a fast-paced service environment. Learned to manage time effectively and meet diverse customer needs.',
      technologies: ['Customer Service', 'Teamwork', 'Time Management', 'Problem Solving'],
      type: 'work'
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'project':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'education':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="experience" className="flex items-center justify-center relative py-16 px-4 min-h-[80vh]">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 -right-10 w-60 h-60 bg-teal-500/10 rounded-full blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -left-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-2xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/30 via-cyan-500/50 to-teal-500/30 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5, backgroundColor: "#2dd4bf" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                } md:w-1/2 ml-12 md:ml-0`}>
                  <motion.div 
                    className="bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 border border-teal-500/20 shadow-xl"
                    whileHover={{ 
                      scale: 1.03,
                      y: -5,
                      borderColor: "rgba(45, 212, 191, 0.5)",
                      boxShadow: "0 10px 30px -10px rgba(45, 212, 191, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className={`flex flex-col ${
                      index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                    } mb-4 space-y-2`}>
                      <motion.h3 
                        className="text-2xl font-bold text-teal-400"
                        whileHover={{ color: "#22d3ee" }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <p className="text-lg text-gray-300 font-semibold">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <motion.span 
                          className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(45, 212, 191, 0.3)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {exp.period}
                        </motion.span>
                        <motion.span 
                          className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {exp.type === 'work' ? 'Work Experience' : 
                           exp.type === 'project' ? 'Personal Project' : 'Academic'}
                        </motion.span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed mb-4 text-justify md:text-left">
                      {exp.description}
                    </p>

                    {/* Technologies/Skills */}
                    {exp.technologies && (
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: techIndex * 0.05 
                            }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(34, 211, 238, 0.2)",
                              borderColor: "rgba(34, 211, 238, 0.4)"
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="flex-1 md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}