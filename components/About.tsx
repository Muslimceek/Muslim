import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Github, Linkedin, Instagram, Code2, Terminal, ExternalLink, Globe2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// --- КОМПОНЕНТЫ ---

// 1. Bento Card Wrapper (Оптимизированные отступы для мобильных)
const BentoCard = ({ children, className = "", noHover = false }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, scale: 0.95, y: 20 },
      visible: { opacity: 1, scale: 1, y: 0 }
    }}
    className={`relative overflow-hidden bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 flex flex-col ${className} ${!noHover ? 'group hover:border-white/20 transition-all duration-500 active:scale-[0.98]' : ''}`}
  >
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
    
    {/* Gradient Glow */}
    {!noHover && (
      <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
    )}
    
    <div className="relative z-10 w-full h-full flex flex-col">
      {children}
    </div>
  </motion.div>
);

// 2. Tech Tag
const TechTag = ({ name }) => (
  <div className="px-2.5 py-1.5 rounded-lg bg-[#151515] border border-white/5 text-[10px] md:text-xs font-mono text-zinc-400 whitespace-nowrap flex items-center gap-1.5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
    {name}
  </div>
);

// 3. Marquee
const Marquee = ({ items, reverse = false }) => (
  <div className="flex overflow-hidden w-full select-none py-2 mask-linear-fade">
    <motion.div 
      initial={{ x: reverse ? "-100%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-100%" }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="flex gap-2 md:gap-3 pr-2 md:pr-3"
    >
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <TechTag key={i} name={item} />
      ))}
    </motion.div>
  </div>
);

const About = () => {
  const { t } = useLanguage();

  const stackRow1 = ["React", "TypeScript", "Next.js", "Node.js", "Redux", "TailwindCSS"];
  const stackRow2 = ["Python", "Django", "PostgreSQL", "Docker", "AWS", "Git", "Figma"];

  // Activity Graph (Только для десктопа)
  const weeks = Array.from({ length: 14 });
  const days = Array.from({ length: 5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-[#030303] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-10 md:mb-16">
           <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
           >
             About <span className="text-zinc-600">Me.</span>
           </motion.h2>
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 60 }}
             viewport={{ once: true }}
             className="h-1 bg-blue-600 rounded-full"
           />
        </div>

        {/* --- BENTO GRID LAYOUT (MOBILE OPTIMIZED) --- */}
        {/* 
           grid-cols-2: На мобильном делим экран пополам для мелких карточек.
           md:grid-cols-3: Планшет.
           lg:grid-cols-4: Десктоп.
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-[minmax(160px,auto)]"
        >
          
          {/* 1. MAIN BIO (Full width on mobile - col-span-2) */}
          <BentoCard className="col-span-2 md:col-span-2 md:row-span-2 min-h-[auto] md:min-h-[350px] justify-between group">
             <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 hidden md:block">
               <Terminal className="w-32 h-32 text-white -rotate-12" />
             </div>
             
             <div>
               <div className="flex gap-2 mb-4 md:mb-6">
                 <div className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                   Open to work
                 </div>
               </div>
               
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                 {t.about.title}
               </h3>
               <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-md">
                 {t.about.p1}
               </p>
             </div>

             {/* Graph visible only on Tablet/Desktop to save space on mobile */}
             <div className="mt-6 md:mt-8 pt-6 border-t border-white/5 hidden md:block">
                <div className="flex items-end gap-2 mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Coding Activity</span>
                </div>
                <div className="flex gap-[3px] opacity-60 mask-gradient-right">
                  {weeks.map((_, i) => (
                    <div key={i} className="flex flex-col gap-[3px]">
                      {days.map((_, j) => (
                        <div 
                          key={j} 
                          className={`w-2.5 h-2.5 rounded-[2px] ${Math.random() > 0.6 ? 'bg-blue-500' : Math.random() > 0.3 ? 'bg-blue-500/40' : 'bg-zinc-800'}`} 
                        />
                      ))}
                    </div>
                  ))}
                </div>
             </div>
          </BentoCard>

          {/* 2. EXPERIENCE (Half width on mobile - col-span-1) */}
          <BentoCard className="col-span-1 bg-gradient-to-br from-[#111] to-blue-900/10 relative group">
             <div className="absolute inset-0 bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
             <div className="flex flex-col justify-between h-full relative z-10">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2 md:mb-4">
                 <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
               </div>
               <div>
                 <h4 className="text-3xl md:text-6xl font-bold text-white tracking-tighter">
                   5<span className="text-blue-500">+</span>
                 </h4>
                 <p className="text-zinc-400 font-medium text-[10px] md:text-sm mt-1 leading-tight">Years Exp.</p>
               </div>
             </div>
          </BentoCard>

          {/* 3. LOCATION (Half width on mobile - col-span-1) */}
          <BentoCard className="col-span-1 group overflow-hidden">
             <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
             </div>
             
             <div className="flex flex-col justify-between h-full relative z-10">
               <div className="flex justify-between items-start">
                 <div className="relative">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center backdrop-blur-md">
                      <MapPin className="text-white w-4 h-4 md:w-5 md:h-5" />
                   </div>
                   <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 md:h-3 md:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-full w-full bg-green-500 border-2 border-[#0A0A0A]"></span>
                   </span>
                 </div>
               </div>
               
               <div>
                 <div className="text-[9px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Location</div>
                 <div className="font-bold text-white text-base md:text-xl">Tashkent</div>
                 <div className="text-zinc-500 text-[10px] md:text-sm">Uzbekistan</div>
               </div>
             </div>
          </BentoCard>

          {/* 4. TECH STACK (Full width on mobile - col-span-2) */}
          <BentoCard className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-center gap-4 md:gap-6 bg-[#0C0C0C]" noHover>
             <div className="flex items-center justify-between px-1 md:px-2">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-zinc-800"><Code2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400" /></div>
                    <span className="text-white font-bold text-xs md:text-sm">Tech Arsenal</span>
                </div>
             </div>
             
             <div className="relative">
                <Marquee items={stackRow1} />
                <Marquee items={stackRow2} reverse />
                <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>
             </div>
          </BentoCard>

          {/* 5. EDUCATION (Half width on mobile - col-span-1) */}
           <BentoCard className="col-span-1">
             <div className="flex flex-col justify-between h-full">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                 <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
               </div>
               <div>
                 <div className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1 md:mb-2">{t.about.stats.edu}</div>
                 <div className="font-bold text-white text-base md:text-lg leading-tight mb-0.5 md:mb-1">{t.about.stats.edu_val}</div>
                 <div className="text-[10px] md:text-xs text-zinc-500">Degree</div>
               </div>
             </div>
          </BentoCard>

          {/* 6. SOCIALS (Half width on mobile - col-span-1) */}
           <BentoCard className="col-span-1 bg-[#0A0A0A]">
             <div className="flex flex-col h-full">
               <div className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4">Connect</div>
               <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1">
                 {[
                   { Icon: Github, href: "https://github.com" },
                   { Icon: Linkedin, href: "https://linkedin.com" },
                   { Icon: Instagram, href: "https://instagram.com" },
                   { Icon: ExternalLink, href: "#contact" }
                 ].map((item, i) => (
                   <a 
                    key={i} 
                    href={item.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-lg md:rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:bg-white hover:text-black active:scale-95 transition-all duration-300"
                   >
                     <item.Icon className="w-4 h-4 md:w-5 md:h-5" />
                   </a>
                 ))}
               </div>
             </div>
          </BentoCard>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
