import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with cart, checkout, and product management.',
      tech: ['React', 'Node.js', 'Postgres', 'Express', 'JWT'],
      githubUrl: 'https://github.com/tuan2004k/ecommerce-platform',
      demoUrl: '#',
      image: '/ecommerce.png'
    },
    {
      title: 'Electric Management System',
      description: 'Power management system with consumption tracking, reporting, and smart alerts.',
      tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/tuan2004k/electric-management',
      demoUrl: '#',
      image: '/electric.png'
    },
    {
      title: 'Personal Portfolio',
      description: 'Personal portfolio website with a modern design, smooth animations, and responsive layout.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/tuan2004k/portfolio',
      demoUrl: '#',
      image: '/portfolio.png'
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

  const techItemVariants = {
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
      scale: 1.1,
      backgroundColor: "rgba(34, 211, 238, 0.3)",
      borderColor: "rgba(34, 211, 238, 0.6)",
      color: "#5eead4",
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(34, 211, 238, 0.3)",
      borderColor: "rgba(34, 211, 238, 0.6)",
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 bg-slate-950/50 relative overflow-hidden">
      {/* Simple Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 2
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-slate-900/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-teal-500/20 shadow-xl"
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
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 z-10" />
                  {project.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-teal-500/30 rounded-full flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.2,
                          backgroundColor: "rgba(45, 212, 191, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Github className="w-8 h-8 text-teal-400" />
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Tech Badge */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30 backdrop-blur-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(34, 211, 238, 0.4)",
                        borderColor: "rgba(34, 211, 238, 0.8)"
                      }}
                    >
                      {project.tech[0]}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative">
                  {/* Title */}
                  <motion.div className="relative mb-3">
                    <motion.h3 
                      className="text-2xl font-bold text-teal-400 inline-block"
                      whileHover={{ 
                        color: "#22d3ee",
                        x: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    variants={containerVariants}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-teal-500/20 rounded-full text-sm text-teal-300 border border-teal-500/30"
                        variants={techItemVariants}
                        whileHover="hover"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 rounded-lg text-teal-400 border border-teal-500/30 flex-1 justify-center"
                      variants={buttonVariants}
                      whileHover="hover"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-teal-500/20 rounded-lg text-teal-400 border border-teal-500/30 flex-1 justify-center"
                        variants={buttonVariants}
                        whileHover="hover"
                      >
                        <Globe size={18} />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Corner Accents */}
                  <motion.div 
                    className="absolute top-2 right-2 w-2 h-2 bg-teal-400 rounded-full"
                    whileHover={{ 
                      scale: 2,
                      backgroundColor: "#22d3ee",
                      boxShadow: "0 0 15px rgba(34, 211, 238, 0.8)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded-full"
                    whileHover={{ 
                      scale: 2,
                      backgroundColor: "#2dd4bf",
                      boxShadow: "0 0 15px rgba(45, 212, 191, 0.8)"
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/tuan2004k?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl font-semibold text-white relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -15px rgba(45, 212, 191, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%]"
              transition={{ duration: 1 }}
            />
            <Github size={20} className="relative z-10" />
            <span className="relative z-10">View All Projects on GitHub</span>
            <ExternalLink size={18} className="relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}