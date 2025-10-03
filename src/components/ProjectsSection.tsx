import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

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
      // Original: 'Nền tảng thương mại điện tử đầy đủ tính năng với giỏ hàng, thanh toán và quản lý sản phẩm'
      description: 'Full-featured e-commerce platform with cart, checkout, and product management.',
      tech: ['React', 'Node.js', 'Postgres', 'Express', 'JWT'],
      githubUrl: 'https://github.com/tuan2004k/ecommerce-platform',
      demoUrl: '#',
      // Original: '← Trực tiếp trong public folder'
      image: '/ecommerce.png' // ← Directly in public folder
    },
    {
      title: 'Electric Management System',
      // Original: 'Hệ thống quản lý điện năng với theo dõi tiêu thụ, báo cáo và cảnh báo thông minh'
      description: 'Power management system with consumption tracking, reporting, and smart alerts.',
      tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/tuan2004k/electric-management',
      demoUrl: '#',
      // Original: '← Trực tiếp trong public folder'
      image: '/electric.png' // ← Directly in public folder
    },
    {
      title: 'Personal Portfolio',
      // Original: 'Website portfolio cá nhân với thiết kế hiện đại, animations mượt mà và responsive'
      description: 'Personal portfolio website with a modern design, smooth animations, and responsive layout.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/tuan2004k/portfolio',
      demoUrl: '#',
      // Original: '← Trực tiếp trong public folder'
      image: '/portfolio.png' // ← Directly in public folder
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          Projects {/* Original: Dự Án */}
        </h2>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
            >
              {/* Project Image with fallback (Project Image với fallback) */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-teal-500/30 rounded-full flex items-center justify-center">
                      <Github className="w-8 h-8 text-teal-400" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-teal-400 mb-3 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-500/20 rounded-full text-sm text-teal-300 border border-teal-500/30 hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg text-teal-400 hover:text-teal-300 transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 flex-1 justify-center"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 rounded-lg text-teal-400 hover:text-teal-300 transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 flex-1 justify-center"
                    >
                      <Globe size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/tuan2004k?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span> {/* Original: Xem Tất Cả Dự Án Trên GitHub */}
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* The style block (CSS) remains the same as it contains animation definitions, not text content. */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}