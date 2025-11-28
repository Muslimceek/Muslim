import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getServices } from '../constants';
import { Check, X, ArrowRight, Zap, Code2, Layers, Hand } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services = () => {
  const { language, t } = useLanguage();
  const services = getServices(language);
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);

  const activeService = services.find(s => s.id === activeTab) || services[0];

  // Сброс скролла карточек при переключении таба
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  return (
    <section id="services" className="py-20 md:py-32 bg-[#030305] min-h-screen relative overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Zap size={12} fill="currentColor" /> {t.services.subtitle || "Pricing & Plans"}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight"
          >
            {t.services.title}
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed px-2"
          >
            Transparent pricing for world-class engineering.
          </motion.p>
        </div>

        {/* --- MOBILE OPTIMIZED TABS --- */}
        <div className="sticky top-[80px] md:top-24 z-30 flex justify-center mb-10 md:mb-16 px-4">
          <motion.div 
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-1 rounded-2xl flex overflow-x-auto max-w-full no-scrollbar shadow-2xl items-center snap-x"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative px-5 py-3 md:px-6 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap snap-center shrink-0 ${
                  activeTab === service.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {service.id === 'landing' ? <Layers size={14} className="md:w-4 md:h-4" /> : <Code2 size={14} className="md:w-4 md:h-4" />}
                {service.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* --- CONTENT AREA --- */}
        <AnimatePresence mode='wait'>
          {activeService && (
            <motion.div
              key={`${activeService.id}-${language}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              
              {/* Stack Chips (Scrollable on mobile) */}
              {activeService.stack && (
                <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2 pb-2 md:pb-0 no-scrollbar mask-gradient">
                   {activeService.stack.map((tech, idx) => (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        key={tech} 
                        className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 text-gray-300 text-[11px] md:text-xs font-mono font-medium border border-white/5 flex-shrink-0"
                     >
                       {tech}
                     </motion.div>
                   ))}
                </div>
              )}

              {/* --- CARDS CONTAINER (MOBILE SWIPE / DESKTOP GRID) --- */}
              <div className="relative">
                
                {/* Mobile Swipe Hint */}
                <div className="md:hidden flex justify-end items-center gap-2 mb-2 text-gray-500 text-xs px-2 animate-pulse">
                   <span>Swipe</span> <ArrowRight size={12} />
                </div>

                <div 
                  ref={scrollContainerRef}
                  className="
                    flex md:grid md:grid-cols-3 
                    overflow-x-auto md:overflow-visible 
                    snap-x snap-mandatory 
                    gap-4 md:gap-8 
                    pb-8 md:pb-0 
                    px-2 md:px-0
                    no-scrollbar
                  "
                >
                  {activeService.packages.map((pkg, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`
                        min-w-[85vw] md:min-w-0 
                        snap-center 
                        relative p-1 rounded-[2rem] flex flex-col h-full 
                        transition-transform duration-300 
                        ${pkg.isPopular ? 'md:-translate-y-4' : ''}
                      `}
                    >
                      {/* Popular Glow */}
                      {pkg.isPopular && (
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-20 blur-xl rounded-[2rem]"></div>
                      )}
                      
                      {/* Card Body */}
                      <div className={`
                          relative flex flex-col h-full rounded-[1.8rem] p-6 md:p-8 border backdrop-blur-sm overflow-hidden
                          ${pkg.isPopular 
                              ? 'bg-[#0F0F0F] border-blue-500/30 shadow-2xl shadow-blue-900/10' 
                              : 'bg-[#0A0A0A] border-white/5'
                          }
                      `}>
                          {/* Popular Badge */}
                          {pkg.isPopular && (
                            <div className="absolute top-0 right-0 p-6">
                                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/20">
                                    Popular
                                </span>
                            </div>
                          )}

                          {/* Header */}
                          <div className="mb-6 md:mb-8 mt-2">
                              <h4 className={`text-xl md:text-2xl font-bold mb-2 ${pkg.isPopular ? 'text-white' : 'text-gray-200'}`}>
                                  {pkg.name}
                              </h4>
                              <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                                  {pkg.description}
                              </p>
                          </div>

                          {/* Pricing */}
                          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/5">
                              <div className="flex items-baseline gap-1">
                                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                                      {pkg.price}
                                  </span>
                              </div>
                              <div className="text-sm text-gray-500 mt-2 font-mono">
                                  / {pkg.duration}
                              </div>
                          </div>

                          {/* Features */}
                          <ul className="space-y-4 mb-8 flex-1">
                            {pkg.features.map((feat, i) => {
                               const isNegative = feat.toLowerCase().includes('not included') || feat.includes('не входят') || feat.includes('mavjud emas') || feat.includes('Без');
                               return (
                                  <li key={i} className={`flex items-start gap-3 text-sm transition-colors ${isNegative ? 'text-gray-600' : 'text-gray-300'}`}>
                                     {isNegative ? (
                                       <X className="w-5 h-5 text-gray-700 shrink-0" />
                                     ) : (
                                       <Check className={`w-5 h-5 shrink-0 ${pkg.isPopular ? 'text-blue-400' : 'text-gray-500'}`} />
                                     )}
                                     <span className="leading-snug">{feat}</span>
                                  </li>
                               )
                            })}
                          </ul>

                          {/* Button */}
                          <button className={`
                              w-full py-3.5 md:py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group text-sm md:text-base
                              active:scale-95
                              ${pkg.isPopular 
                                  ? 'bg-white text-black hover:bg-blue-50' 
                                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                              }
                          `}>
                            {t.services.order_btn}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* --- EXTRAS GRID --- */}
              {activeService.extraInfo && (
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="mt-8 md:mt-16"
                >
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Details</span>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {activeService.extraInfo.map((info, idx) => (
                        <div key={idx} className="bg-[#0A0A0A] p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border border-white/5">
                          <h4 className="flex items-center gap-2 text-xs md:text-sm font-bold text-white mb-4 md:mb-6 uppercase tracking-widest">
                             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
                             {info.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {info.items.map((item, i) => (
                              <span key={i} className="px-3 py-1.5 rounded-lg bg-[#111] text-gray-400 text-xs md:text-sm font-medium border border-white/5">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                </motion.div>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
