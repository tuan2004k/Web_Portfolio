import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
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
      y: 30 
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

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 3
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="max-w-4xl mx-auto w-full text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent px-4"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-10 md:mb-12 px-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center items-center gap-4 sm:gap-6 mb-10 md:mb-12 px-4"
          variants={containerVariants}
        >
          <motion.a
            href="https://github.com/tuan2004k"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900/70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-teal-500/30 hover:border-teal-500 hover:bg-slate-800 transition-all"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} className="text-teal-400" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/minh-tu%E1%BA%A5n-%C4%91%E1%BA%ADu-bb61aa360/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900/70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-teal-500/30 hover:border-teal-500 hover:bg-slate-800 transition-all"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} className="text-teal-400" />
          </motion.a>

          <motion.a
            href="mailto:dautuan032004@gmail.com"
            className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900/70 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-teal-500/30 hover:border-teal-500 hover:bg-slate-800 transition-all"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} className="text-teal-400" />
          </motion.a>
        </motion.div>

       
          

          

        {/* Optional: Call to Action */}
        <motion.div 
          className="mt-8 md:mt-10 px-4"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:dautuan032004@gmail.com"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-full font-semibold text-white transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            <span>Send me a message</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}