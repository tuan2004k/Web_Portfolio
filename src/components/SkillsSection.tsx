import React from 'react';

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

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shooting Stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="shooting-star-smooth absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute w-1 h-1 bg-white rounded-full blur-[1px]" />
              <div className="absolute top-0.5 left-0.5 w-20 h-0.5 bg-gradient-to-r from-white/80 via-teal-400/60 to-transparent rounded-full" />
            </div>
          </div>
        ))}

        {/* Background Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="skill-particle absolute rounded-full bg-teal-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-3000" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-500 group-hover:scale-105 shadow-2xl shadow-teal-500/10 hover:shadow-teal-500/20">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-teal-400 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-teal-500/10 text-teal-300 rounded-lg text-sm font-medium hover:bg-teal-500/20 hover:text-teal-200 hover:border-teal-400/50 transition-all duration-300 border border-teal-500/20 hover:scale-105 transform"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner Accents */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shootingStarSmooth {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
          10% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          20% {
            transform: translateX(100px) translateY(100px) rotate(45deg);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .shooting-star-smooth {
          animation: shootingStarSmooth 6s linear infinite;
          width: 40px;
          height: 40px;
        }

        .skill-particle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}