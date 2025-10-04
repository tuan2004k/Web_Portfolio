import React from 'react';
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

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 bg-slate-950/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Icons */}
        {['⚛️', '🚀', '💻', '🔗', '🎨', '⚡'].map((icon, i) => (
          <div
            key={i}
            className="floating-tech-icon absolute text-2xl opacity-20"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {icon}
          </div>
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(94, 234, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Pulse Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse-orb" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse-orb delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 animate-card-enter"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image with Hover Effect */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 z-10" />
                {project.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-teal-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Github className="w-8 h-8 text-teal-400" />
                    </div>
                  </div>
                )}
                
                {/* Floating Tech Badge */}
                <div className="absolute top-4 right-4 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30 backdrop-blur-sm">
                    {project.tech[0]}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                {/* Animated Title Underline */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-teal-400 mb-3 group-hover:text-teal-300 transition-colors duration-300 inline-block">
                    {project.title}
                  </h3>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500" />
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack with Stagger Animation */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-500/20 rounded-full text-sm text-teal-300 border border-teal-500/30 hover:bg-teal-500/30 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform"
                      style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons with Slide-in Effect */}
                <div className="flex space-x-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg text-teal-400 hover:text-teal-300 transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 flex-1 justify-center hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 rounded-lg text-teal-400 hover:text-teal-300 transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 flex-1 justify-center hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10"
                    >
                      <Globe size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 via-cyan-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* View More Projects Button with Animation */}
        <div className="text-center mt-12 animate-bounce-subtle">
          <a
            href="https://github.com/tuan2004k?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30 relative overflow-hidden group"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <Github size={20} className="relative z-10" />
            <span className="relative z-10">View All Projects on GitHub</span>
            <ExternalLink size={18} className="relative z-10" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes pulseOrb {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-card-enter {
          animation: cardEnter 0.6s ease-out both;
        }

        .floating-tech-icon {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse-orb {
          animation: pulseOrb 4s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}