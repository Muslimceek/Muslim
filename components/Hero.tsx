import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-10">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none opacity-60 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 w-full text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
            
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
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.95]"
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
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed md:pl-1"
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
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

        {/* Floating Abstract Elements */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-[400px] h-[400px] pointer-events-none"
        >
             {/* Abstract grid decoration */}
             <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             <div className="absolute inset-20 border border-purple-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 10, 0] }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer hover:opacity-100 transition-opacity"
          onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
        >
           <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;