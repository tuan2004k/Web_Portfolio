import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Liên hệ
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Hãy kết nối với tôi! Tôi luôn sẵn sàng cho những cơ hội mới.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="w-16 h-16 bg-slate-900/50 rounded-full flex items-center justify-center border border-teal-500/20 hover:border-teal-500 hover:bg-slate-900 transition-all transform hover:scale-110"
          >
            <Github size={24} className="text-teal-400" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-slate-900/50 rounded-full flex items-center justify-center border border-teal-500/20 hover:border-teal-500 hover:bg-slate-900 transition-all transform hover:scale-110"
          >
            <Linkedin size={24} className="text-teal-400" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-slate-900/50 rounded-full flex items-center justify-center border border-teal-500/20 hover:border-teal-500 hover:bg-slate-900 transition-all transform hover:scale-110"
          >
            <Mail size={24} className="text-teal-400" />
          </a>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20">
          <p className="text-gray-300 mb-2">Email: example@email.com</p>
          <p className="text-gray-300">Phone: +84 123 456 789</p>
        </div>
      </div>
    </section>
  );
}