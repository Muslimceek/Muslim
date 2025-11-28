import React from 'react';
import { MapPin, Globe, Briefcase, Cpu, GraduationCap, Github, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-[#0F0F0F] border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-all duration-300 relative overflow-hidden group ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => {
  const { t } = useLanguage();

  const stack = ["Python", "TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Next.js", "Aiogram", "Figma", "Adobe Illustrator"];

  return (
    <section id="about" className="py-24 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 md:mb-20"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.nav.about}</h2>
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Main Bio (Large) */}
          <BentoCard className="md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col justify-center relative bg-gradient-to-br from-[#111] to-[#080808]">
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
             <div className="relative z-10">
               <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                 {t.about.title}
               </h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                 {t.about.p1}
               </p>
               <div className="flex items-center gap-3">
                 <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wide">
                   Senior
                 </div>
                 <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wide">
                   Fullstack
                 </div>
               </div>
             </div>
          </BentoCard>

          {/* 2. Experience (Small) */}
          <BentoCard className="bg-blue-600 border-none text-white flex flex-col justify-between" delay={0.1}>
             <Briefcase className="w-8 h-8 opacity-80" />
             <div>
               <div className="text-5xl font-bold tracking-tighter mb-1">5+</div>
               <div className="text-sm font-medium opacity-80">Years Experience</div>
             </div>
          </BentoCard>

          {/* 3. Location (Small) */}
          <BentoCard className="flex flex-col justify-between group" delay={0.2}>
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <MapPin className="text-white w-5 h-5" />
             </div>
             <div>
               <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{t.about.stats.loc}</div>
               <div className="font-bold text-white text-lg">{t.about.stats.loc_val.split(' ')[0]}</div>
             </div>
          </BentoCard>

           {/* 4. Tech Stack Marquee (Wide) */}
           <BentoCard className="md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col justify-center bg-[#0C0C0C]" delay={0.3}>
             <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Tech Stack</span>
             </div>
             <div className="relative flex w-full overflow-hidden mask-linear-fade">
                <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
                  {stack.map((item) => (
                    <span key={item} className="text-2xl md:text-3xl font-bold text-[#333] hover:text-white transition-colors cursor-default uppercase">{item}</span>
                  ))}
                  {/* Duplicated for seamless loop */}
                  {stack.map((item) => (
                    <span key={item + "dup"} className="text-2xl md:text-3xl font-bold text-[#333] hover:text-white transition-colors cursor-default uppercase">{item}</span>
                  ))}
                </div>
             </div>
          </BentoCard>

          {/* 5. Education (Small) */}
           <BentoCard className="flex flex-col justify-between" delay={0.4}>
             <GraduationCap className="w-8 h-8 text-gray-400" />
             <div>
               <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{t.about.stats.edu}</div>
               <div className="font-bold text-white text-lg">{t.about.stats.edu_val}</div>
             </div>
          </BentoCard>

          {/* 6. Languages & Socials (Medium) */}
           <BentoCard className="md:col-span-1 lg:col-span-1 flex flex-col justify-between" delay={0.5}>
             <div className="flex justify-between items-start">
               <Globe className="w-8 h-8 text-gray-400" />
               <div className="flex gap-2">
                 {[Github, Linkedin, Instagram].map((Icon, i) => (
                   <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                     <Icon className="w-4 h-4" />
                   </a>
                 ))}
               </div>
             </div>
             <div>
               <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">{t.about.stats.lang}</div>
               <div className="flex gap-2 flex-wrap">
                 {['RU', 'EN', 'UZ'].map((lang) => (
                   <span key={lang} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-white border border-white/5">
                     {lang}
                   </span>
                 ))}
               </div>
             </div>
          </BentoCard>

        </div>
        
        {/* CSS for specific gradient mask on text marquee */}
        <style>{`
          .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;