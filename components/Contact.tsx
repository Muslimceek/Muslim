import React from 'react';
import { Send, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-[#0A0A0A] border border-white/5 rounded-[48px] p-8 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-colors duration-700"></div>

          <div className="max-w-2xl relative z-10">
             <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
               {t.contact.title}
             </h2>
             <p className="text-xl text-gray-400 mb-10 max-w-lg">
               {t.contact.subtitle}
             </p>
             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <a 
                 href="https://t.me/username" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-5 bg-white text-black rounded-full font-bold transition-transform hover:scale-105 text-lg flex items-center gap-3"
               >
                 <Send className="w-5 h-5" />
                 Telegram
               </a>
               <a 
                  href="mailto:contact@muslim.dev"
                  className="px-8 py-5 bg-[#1A1A1A] hover:bg-[#222] text-white rounded-full font-bold transition-colors text-lg border border-white/5 flex items-center gap-3"
               >
                 <Mail className="w-5 h-5" />
                 Email
               </a>
             </div>
          </div>

          <motion.div 
             whileHover={{ rotate: 45, scale: 1.1 }}
             transition={{ type: "spring", stiffness: 300 }}
             className="relative cursor-pointer hidden md:flex items-center justify-center"
          >
             <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center relative z-10 shadow-[0_0_60px_-10px_rgba(37,99,235,0.5)]">
                <ArrowUpRight className="w-16 h-16 text-white" />
             </div>
          </motion.div>

        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 gap-6 border-t border-white/5 pt-10">
          <p className="font-mono">{t.contact.footer_rights}</p>
          <div className="flex gap-8 font-medium">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <p className="opacity-50 hover:opacity-100 transition-opacity cursor-default">{t.contact.footer_made}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;