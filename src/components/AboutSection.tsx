import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Hiệu ứng sao băng cải tiến */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sao băng với hiệu ứng thực tế hơn */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="shooting-star-advanced absolute"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${-5 + Math.random() * 10}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.7 + Math.random() * 0.3,
            }}
          >
            <div className="w-full h-full relative">
              {/* Core của sao băng */}
              <div className="absolute w-2 h-2 bg-white rounded-full blur-sm animate-pulse" />
              {/* Trail dài với gradient */}
              <div className="absolute top-1 left-1 w-48 h-1 bg-gradient-to-r from-teal-400/80 via-cyan-400/60 to-transparent rounded-full blur-[1px]" />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur-md" />
            </div>
          </div>
        ))}

        {/* Sao băng ngang */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`horizontal-${i}`}
            className="shooting-star-horizontal absolute"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${-10 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute w-3 h-1 bg-cyan-400 rounded-full blur-sm" />
              <div className="absolute top-0 left-3 w-32 h-0.5 bg-gradient-to-r from-cyan-400/80 to-transparent blur-[1px]" />
            </div>
          </div>
        ))}

        {/* Sao nhấp nháy nền */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star-twinkle absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}

        {/* Particle effects tinh tế */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="floating-particle absolute rounded-full bg-teal-400/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Nội dung chính */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          Giới thiệu
        </h2>
        
        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 shadow-2xl shadow-teal-500/10 hover:shadow-teal-500/20">
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              Tôi là một developer đam mê công nghệ và luôn học hỏi những điều mới. Với kinh nghiệm trong việc phát triển web, tôi chuyên về việc tạo ra những ứng dụng web hiện đại, responsive và thân thiện với người dùng.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              Tôi tin rằng code tốt không chỉ hoạt động được mà còn phải dễ đọc, dễ maintain và mang lại trải nghiệm tuyệt vời cho người dùng.
            </p>

            {/* Thêm các điểm nổi bật */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-teal-300 font-medium">Frontend Development</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 font-medium">React & Next.js</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-teal-300 font-medium">TypeScript</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 font-medium">UI/UX Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          10% {
            transform: translateX(0) translateY(0) rotate(45deg) scale(1);
            opacity: 1;
          }
          20% {
            transform: translateX(200px) translateY(200px) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes shootingStarHorizontal {
          0% {
            transform: translateX(-200px) translateY(0) scale(0.8);
            opacity: 0;
          }
          15% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          30% {
            transform: translateX(200px) translateY(0) scale(0.8);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .shooting-star-advanced {
          animation: shootingStar 8s linear infinite;
          width: 60px;
          height: 60px;
        }

        .shooting-star-horizontal {
          animation: shootingStarHorizontal 6s linear infinite;
          width: 80px;
          height: 20px;
        }

        .star-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .floating-particle {
          animation: float 15s ease-in-out infinite;
        }

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