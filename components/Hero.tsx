import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 pb-20 lg:pt-0">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none opacity-60 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-blue-400 mb-8 backdrop-blur-md uppercase tracking-widest shadow-lg shadow-blue-900/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.hero.available}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.95]"
            >
              {t.hero.role.split(' ')[0]} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-white animate-shimmer bg-[length:200%_100%]">
                 {t.hero.role.split(' ')[1] || 'Engineer'}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed lg:pr-10"
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                {t.hero.cta_service}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-[#111] text-white font-bold rounded-full hover:bg-[#222] border border-white/10 transition-all">
                {t.nav.work}
              </button>
            </motion.div>

        </div>

        {/* Right Column: Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9, x: 50 }}
           animate={{ opacity: 1, scale: 1, x: 0 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
             <div className="relative w-[280px] h-[340px] md:w-[400px] md:h-[480px]">
                {/* Glow Behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[80px] opacity-40 rounded-[3rem]"></div>
                
                {/* Rotating Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-[3rem] opacity-30 blur-sm animate-spin-slow"></div>

                {/* The Image */}
                <img 
                  src="https://i.ibb.co/TDXSzVkW/gemini-3-pro-image-preview-nano-banana-pro-a-A-highly-stylized-po.png" 
                  alt="Muslim Portfolio" 
                  className="w-full h-full object-cover rounded-[3rem] border border-white/10 shadow-2xl relative z-10"
                />

                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 -left-6 md:-left-12 bg-[#111]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <Download className="w-5 h-5" />
                    </div>
                    <div className="text-left pr-4">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Resume</div>
                        <div className="text-sm font-bold text-white">Download CV</div>
                    </div>
                </motion.div>

                {/* Abstract Element Top Right */}
                <div className="absolute -top-10 -right-10 w-20 h-20 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
             </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 10, 0] }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer hover:opacity-100 transition-opacity lg:hidden"
          onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
        >
           <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
