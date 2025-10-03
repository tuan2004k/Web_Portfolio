import React from 'react';

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
      title: 'Crew Member',
      company: 'KFC Vietnam',
      period: '6/2022 - 9/2024',
      description: 'Developed communication, teamwork, and problem-solving skills in a fast-paced service environment. Learned to manage time effectively and meet diverse customer needs.',
      technologies: ['Customer Service', 'Teamwork', 'Time Management', 'Problem Solving'],
      type: 'work'
    },
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
    }
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'project':
        return '🚀';
      case 'education':
        return '🎓';
      default:
        return '⭐';
    }
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Shooting star background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal shooting stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="shooting-star-experience absolute"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${-5 + Math.random() * 15}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm" />
              <div className="absolute top-1 left-1 w-32 h-1 bg-gradient-to-r from-cyan-400/80 via-teal-400/60 to-transparent rounded-full blur-[1px]" />
            </div>
          </div>
        ))}

        {/* Horizontal shooting stars */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`horizontal-${i}`}
            className="shooting-star-horizontal-experience absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${-8 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              opacity: 0.5 + Math.random() * 0.3,
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute w-3 h-1 bg-teal-400 rounded-full blur-sm" />
              <div className="absolute top-0 left-3 w-24 h-0.5 bg-gradient-to-r from-teal-400/70 to-transparent blur-[1px]" />
            </div>
          </div>
        ))}

        {/* Particle effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="experience-particle absolute rounded-full bg-teal-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-10 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          Journey
        </h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/30 via-cyan-500/50 to-teal-500/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 group`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-teal-400 transition-all duration-300" />
                
                {/* Content card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                } md:w-1/2 ml-12 md:ml-0`}>
                  <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-teal-500/30 hover:border-teal-500/60 transition-all duration-500 shadow-2xl shadow-teal-500/10 hover:shadow-teal-500/20 group-hover:scale-105 transform">
                    {/* Header */}
                    <div className={`flex flex-col ${
                      index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                    } mb-4 space-y-2`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{getTypeIcon(exp.type)}</span>
                        <h3 className="text-2xl font-bold text-teal-400 group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-300 font-semibold">{exp.company}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30">
                          {exp.period}
                        </span>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}>
                          {exp.type === 'work' ? 'Work Experience' : 
                           exp.type === 'project' ? 'Personal Project' : 'Academic'}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4 text-justify md:text-left">
                      {exp.description}
                    </p>

                    {/* Technologies/Skills */}
                    {exp.technologies && (
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="flex-1 md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-teal-400/10 rounded-full blur-xl animate-float" />
        <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-float-delayed" />
      </div>

      <style jsx>{`
        @keyframes shootingStarExperience {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          10% {
            transform: translateX(0) translateY(0) rotate(45deg) scale(1);
            opacity: 1;
          }
          20% {
            transform: translateX(150px) translateY(150px) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes shootingStarHorizontalExperience {
          0% {
            transform: translateX(-150px) translateY(0) scale(0.8);
            opacity: 0;
          }
          15% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          30% {
            transform: translateX(150px) translateY(0) scale(0.8);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes twinkleParticle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(20px) rotate(180deg); }
        }

        .shooting-star-experience {
          animation: shootingStarExperience 7s linear infinite;
          width: 50px;
          height: 50px;
        }

        .shooting-star-horizontal-experience {
          animation: shootingStarHorizontalExperience 5s linear infinite;
          width: 60px;
          height: 15px;
        }

        .experience-particle {
          animation: twinkleParticle 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}