import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getServices } from '../constants';
import { Check, X, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services = () => {
  const { language, t } = useLanguage();
  const services = getServices(language);
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section id="services" className="py-24 bg-[#050505] min-h-screen relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            {t.services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Floating Segmented Control */}
        <div className="sticky top-28 z-30 flex justify-center mb-16">
          <motion.div 
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="bg-[#111]/80 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full flex overflow-x-auto max-w-full no-scrollbar shadow-2xl"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === service.id ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full shadow-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                   {service.icon} {service.title}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode='wait'>
          {activeService && (
            <motion.div
              key={`${activeService.id}-${language}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              
              {/* Service Description & Stack */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                 {activeService.stack && (
                   <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {activeService.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-md bg-[#1A1A1A] text-gray-300 text-[10px] font-bold border border-white/5 uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                   </div>
                 )}
                 <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{activeService.description}</h3>
              </div>

              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {activeService.packages.map((pkg, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative p-8 rounded-[32px] flex flex-col h-full group ${
                      pkg.isPopular 
                        ? 'bg-[#111] border border-blue-500/30 shadow-[0_0_50px_-20px_rgba(37,99,235,0.3)] z-10' 
                        : 'bg-[#0A0A0A] border border-white/5 hover:border-white/10'
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-current" /> {t.services.popular}
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h4 className={`text-xl font-bold mb-2 ${pkg.isPopular ? 'text-white' : 'text-gray-200'}`}>{pkg.name}</h4>
                      <p className="text-sm text-gray-500 min-h-[40px] leading-relaxed">{pkg.description}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-white/5">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-white tracking-tight">{pkg.price}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 font-medium">{pkg.duration}</div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                           {feat.toLowerCase().includes('not included') || feat.includes('не входят') || feat.includes('mavjud emas') || feat.includes('Без') ? (
                             <X className="w-5 h-5 text-zinc-600 shrink-0" />
                           ) : (
                             <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.isPopular ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400'}`}>
                               <Check className="w-3 h-3" />
                             </div>
                           )}
                           <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                      pkg.isPopular 
                        ? 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02]' 
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
                    }`}>
                      {t.services.order_btn}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Extras */}
              {activeService.extraInfo && (
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.4 }}
                   className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
                >
                  {activeService.extraInfo.map((info, idx) => (
                    <div key={idx} className="bg-[#0F0F0F] p-8 rounded-[32px] border border-white/5">
                      <h4 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">{info.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {info.items.map((item, i) => (
                          <span key={i} className="px-4 py-2 rounded-xl bg-[#1A1A1A] text-gray-300 text-sm font-medium border border-white/5 hover:border-white/20 transition-colors">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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