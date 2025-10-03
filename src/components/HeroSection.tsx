import React, { useState, useEffect } from "react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  // Original Vietnamese: "Đậu Minh Tuấn"
  const fullName = "Dau Minh Tuan"; // Use the name as a string

  useEffect(() => {
    // Start typing after 1 second
    const timer = setTimeout(() => {
      setIsTyping(true);
      typeName();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const typeName = () => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Optional: Add blink effect after typing is done
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 500);
        }, 2000);
      }
    }, 100); // Typing speed (ms)
  };

  const handleNameClick = () => {
    // Reset and re-type on click
    setDisplayedName("");
    setIsTyping(true);

    // Clear any existing intervals
    const timer = setTimeout(() => {
      typeName();
    }, 100);

    return () => clearTimeout(timer);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-slate-950"
    >
      {/* Background Effects (Bối cảnh nền) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 -right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-8">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(94,234,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.08) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)'
            }}
          ></div>
        </div>

        {/* Shooting Stars (Sao băng) */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="shooting-star-enhanced absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.5 + Math.random() * 0.3,
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute w-2 h-2 bg-white/80 rounded-full blur-sm animate-pulse" />
              <div className="absolute top-1 left-1 w-32 h-1 bg-gradient-to-r from-white/60 via-teal-400/70 to-transparent rounded-full blur-[1px]" />
            </div>
          </div>
        ))}

        {/* Particle effects */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: `rgba(94, 234, 212, ${0.2 + Math.random() * 0.3})`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content (Nội dung chính) */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          {/* Image Section (Phần ảnh) */}
          <div className="lg:w-2/5 flex justify-center lg:justify-start order-2 lg:order-1 lg:mt-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 p-2 transform group-hover:scale-105 transition-all duration-500">
                <img
                  src="/avatar.png"
                  alt="Dau Minh Tuan" // Translated alt text
                  className="w-full h-full object-cover rounded-full border-4 border-slate-800 group-hover:border-teal-400/50 transition-all duration-500"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-400/20 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>

          {/* Text Section (Phần chữ) */}
          <div className="lg:w-3/5 text-center lg:text-left order-1 lg:order-2 flex flex-col justify-center lg:min-h-[80vh] lg:py-20">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                Hello! {/* Original: Xin chào! */}
              </h1>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6">
              I am{" "} {/* Original: Tôi là */}
              <span
                className="text-teal-400 font-bold relative inline-block cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                onClick={handleNameClick}
                title="Click to re-type!"
              >
                {displayedName}
                {/* Typing Cursor (Con trỏ nhấp nháy) */}
                {isTyping && (
                  <span className="ml-1 w-0.5 h-8 bg-cyan-400 animate-pulse inline-block align-middle"></span>
                )}
                {/* Animated underline (Gạch chân animated) */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transform origin-left transition-transform duration-500 scale-x-100"></span>
              </span>
            </p>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Full Stack Developer with React, Next.js, TypeScript — passionate about creating
              amazing web experiences <span className="text-cyan-400 animate-pulse text-xl"></span>
            </p>

            {/* Buttons (Nút bấm) */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden w-full sm:w-auto min-w-[160px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                <span className="relative z-10 flex items-center justify-center">
                  View Projects {/* Original: Xem dự án */}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-4 border-2 border-teal-500/70 rounded-full font-semibold hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden w-full sm:w-auto min-w-[160px]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Contact Me {/* Original: Liên hệ */}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The style block (CSS) remains the same as it contains animation definitions, not text content. */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(20px) rotate(180deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes shootingStarEnhanced {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          10% {
            transform: translateX(0) translateY(0) rotate(45deg) scale(1);
            opacity: 0.8;
          }
          20% {
            transform: translateX(150px) translateY(150px) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .shooting-star-enhanced {
          animation: shootingStarEnhanced 5s linear infinite;
          width: 50px;
          height: 50px;
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}