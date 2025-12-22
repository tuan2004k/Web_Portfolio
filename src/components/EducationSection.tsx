'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EducationSection() {
  const educationData = [
    {
      degree: 'Information Technology Engineer (Major: Web Programming)',
      school: 'Lac Hong University',
      period: 'Aug 2022 - Present',
      gpa: '',
      description: '',
      courses: ['Web Development', 'Database Systems', 'Software Engineering', 'Mobile App Development'],
      achievements: ['Expected graduation: 2026']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credential: 'Credential ID: AWS-CCP-12345'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      credential: 'Credential ID: META-REACT-54321'
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="education" className="min-h-screen flex items-center justify-center relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v6" />
              </svg>
              Education
            </h3>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={fadeUp}
                >
                  <motion.div 
                    className="relative bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 border border-teal-500/20 shadow-xl"
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
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute -left-4 top-6 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900 z-10"
                      whileHover={{ 
                        scale: 1.8,
                        backgroundColor: "#22d3ee",
                        boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <motion.h4 
                          className="text-xl font-bold text-white mb-2"
                          whileHover={{ 
                            color: "#22d3ee",
                            x: 5
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {edu.school}
                        </motion.h4>
                        <motion.p 
                          className="text-teal-300 font-semibold"
                          whileHover={{ color: "#2dd4bf" }}
                          transition={{ duration: 0.3 }}
                        >
                          {edu.degree}
                        </motion.p>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:text-right">
                        <motion.span 
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(34, 211, 238, 0.4)",
                            borderColor: "rgba(34, 211, 238, 0.8)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {edu.period}
                        </motion.span>
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-400 mb-2">Relevant coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(34, 211, 238, 0.2)",
                              borderColor: "rgba(34, 211, 238, 0.5)",
                              color: "#fff"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-2">Status:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.span
                              key={i}
                              className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-lg text-sm border border-amber-500/30 flex items-center"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(245, 158, 11, 0.4)",
                                borderColor: "rgba(245, 158, 11, 0.8)",
                                color: "#fef3c7"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={fadeUp}
                >
                  <motion.div 
                    className="relative bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 shadow-xl"
                    whileHover={{ 
                      scale: 1.05,
                      y: -8,
                      borderColor: "rgba(34, 211, 238, 0.6)",
                      boxShadow: "0 20px 40px -15px rgba(34, 211, 238, 0.4)"
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <motion.h4 
                          className="text-lg font-bold text-white mb-1"
                          whileHover={{ 
                            color: "#22d3ee",
                            x: 5
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {cert.name}
                        </motion.h4>
                        <motion.p 
                          className="text-cyan-300 font-semibold"
                          whileHover={{ color: "#2dd4bf" }}
                          transition={{ duration: 0.3 }}
                        >
                          {cert.issuer}
                        </motion.p>
                      </div>
                      <motion.span 
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(16, 185, 129, 0.4)",
                          borderColor: "rgba(16, 185, 129, 0.8)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {cert.date}
                      </motion.span>
                    </div>
                    
                    <motion.p 
                      className="text-gray-400 text-sm"
                      whileHover={{ color: "#d1d5db" }}
                      transition={{ duration: 0.3 }}
                    >
                      {cert.credential}
                    </motion.p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <motion.button 
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(34, 211, 238, 0.4)",
                          borderColor: "rgba(34, 211, 238, 0.8)",
                          color: "#fff"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        View Credential
                      </motion.button>
                      <motion.div 
                        className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center"
                        whileHover={{
                          scale: 1.3,
                          backgroundColor: "rgba(34, 211, 238, 0.4)",
                          rotate: 360,
                          boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)"
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}