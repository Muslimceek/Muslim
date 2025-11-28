import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Terminal, Cpu, Globe, CheckCircle2, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Эффект слежения мыши (работает в основном на десктопе)
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const { scrollY } = useScroll();
  // Параллакс слабее на мобильных для производительности
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); 
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="hero" className="relative overflow-hidden bg-[#030305] text-white pt-28 pb-12 lg:pt-0 lg:min-h-screen flex flex-col justify-center">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      
      {/* 1. Grid Pattern & Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-[1]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-[0]"></div>

      {/* 2. Spotlight Glow (Desktop Only mostly) */}
      <div 
        className="hidden md:block fixed top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none transition-transform duration-75 z-[0]"
        style={{ transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)` }}
      />
      
      {/* 3. Static Accent Glows (Mobile Optimized) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-600/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-[0]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 z-10 w-full grid lg:grid-cols-12 gap-10 md:gap-12 items-center relative">
        
        {/* --- LEFT COLUMN: TEXT & CONTENT --- */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[12px] font-medium text-blue-300 backdrop-blur-md mb-6 md:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t.hero.available || "Available for new projects"}
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 md:mb-6 leading-[1.1] lg:leading-[0.95]"
            >
              <span className="block text-gray-400 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-1 md:mb-2 tracking-tight">
                Building the
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200 animate-gradient-x">
                 Digital Future
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl md:max-w-2xl mb-8 leading-relaxed font-light px-2 md:px-0"
            >
              {t.hero.description}
            </motion.p>

            {/* --- TRIGGER BLOCK (STATS) --- */}
            {/* Mobile: Grid Layout | Desktop: Flex Layout */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="w-full md:w-auto grid grid-cols-3 md:flex md:flex-wrap items-center justify-center md:justify-start gap-2 md:gap-8 mb-8 md:mb-10 border-y border-white/5 py-4 md:py-6"
            >
                {/* Stat 1 */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 bg-blue-500/10 rounded-lg text-blue-400"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /></div>
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-2xl font-bold text-white leading-none">100%</p>
                        <p className="text-[9px] md:text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">Success</p>
                    </div>
                </div>
                
                {/* Divider (Hidden on mobile) */}
                <div className="hidden md:block w-px h-10 bg-white/10"></div>
                
                {/* Stat 2 */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 border-x border-white/5 md:border-none px-2 md:px-0">
                    <div className="p-1.5 md:p-2 bg-purple-500/10 rounded-lg text-purple-400"><Star className="w-4 h-4 md:w-5 md:h-5" /></div>
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-2xl font-bold text-white leading-none">5.0</p>
                        <p className="text-[9px] md:text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">Rating</p>
                    </div>
                </div>

                {/* Divider (Hidden on mobile) */}
                <div className="hidden md:block w-px h-10 bg-white/10"></div>
                
                {/* Stat 3 */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><Terminal className="w-4 h-4 md:w-5 md:h-5" /></div>
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-2xl font-bold text-white leading-none">Senior</p>
                        <p className="text-[9px] md:text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">Level</p>
                    </div>
                </div>
            </motion.div>

            {/* Buttons (Full width on mobile) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} 
                className="group relative w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white text-black font-bold rounded-xl active:scale-95 hover:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                  {t.hero.cta_service} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})} 
                className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white/5 text-white font-bold rounded-xl active:scale-95 hover:rounded-2xl hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-sm md:text-base">{t.nav.work}</span>
              </button>
            </motion.div>
        </div>

        {/* --- RIGHT COLUMN: IMAGE & FLOATING CARDS --- */}
        <div className="lg:col-span-5 relative h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            
            {/* Background Shape */}
            <motion.div style={{ y: y2 }} className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent blur-[50px] md:blur-[60px] rounded-full z-0" />

            {/* Main Image Container */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-10 w-[240px] sm:w-[300px] md:w-[380px] aspect-[3/4]"
            >
                {/* Image Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] border border-white/10 backdrop-blur-sm transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
                
                <div className="relative w-full h-full rounded-[1.8rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
                    <img 
                      src="https://i.ibb.co/TDXSzVkW/gemini-3-pro-image-preview-nano-banana-pro-a-A-highly-stylized-po.png" 
                      alt="Portfolio Portrait" 
                      className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-105 grayscale md:hover:grayscale-0"
                    />
                </div>

                {/* Floating "Tech Stack" Card (Top Right) */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-2.5 md:p-4 rounded-xl shadow-xl flex gap-2 md:gap-3 items-center z-20 max-w-[140px] md:max-w-none"
                >
                   <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-lg">
                      <Cpu className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-400 animate-pulse" />
                   </div>
                   <div>
                      <div className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase">Stack</div>
                      <div className="text-[10px] md:text-xs font-bold text-white leading-tight">React & Node</div>
                   </div>
                </motion.div>

                {/* Floating "CV Download" Card (Bottom Left) */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-4 -left-2 md:bottom-8 md:-left-12 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-2.5 md:p-4 rounded-xl shadow-2xl flex items-center gap-2 md:gap-3 z-20 cursor-pointer active:scale-95 transition-transform"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-black">
                      <Download className="w-3.5 h-3.5 md:w-5 md:h-5" />
                    </div>
                    <div className="text-left pr-2">
                        <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider font-bold">Resume</div>
                        <div className="text-[10px] md:text-sm font-bold text-white">Download CV</div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
