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

        {/* Contact Info Card */}
        <motion.div 
          className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 shadow-2xl shadow-teal-500/10 hover:shadow-teal-500/20 mx-4"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <div className="space-y-4">
            <motion.div 
              className="flex items-center justify-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Mail size={20} className="text-teal-400 flex-shrink-0" />
              <a 
                href="mailto:dautuan032004@gmail.com"
                className="text-gray-300 hover:text-teal-400 transition-colors break-all sm:break-normal text-sm sm:text-base"
              >
                dautuan032004@gmail.com
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                className="w-5 h-5 text-teal-400 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a 
                href="tel:+84325586629"
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm sm:text-base"
              >
                +84 325 586 629
              </a>
            </motion.div>
          </div>

          {/* Decorative corners */}
          <motion.div 
            className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-3 left-3 w-2 h-2 bg-cyan-400 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
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