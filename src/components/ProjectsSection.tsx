import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Nền tảng thương mại điện tử với thanh toán online',
      tech: ['Next.js', 'Stripe', 'MongoDB']
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard phân tích mạng xã hội với real-time data',
      tech: ['React', 'Firebase', 'Chart.js']
    },
    {
      title: 'Task Management App',
      description: 'Ứng dụng quản lý công việc với team collaboration',
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio cá nhân với animations đẹp mắt',
      tech: ['Next.js', 'Tailwind', 'Framer Motion']
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Dự án
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-teal-500/20 rounded-full text-sm text-teal-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors">
                <span>Xem chi tiết</span>
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}