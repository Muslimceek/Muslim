import React, { useRef } from 'react';
import { Send, Mail, ArrowUpRight, Github, Linkedin, Instagram, Copy, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';

// Компонент кнопки с эффектом (Адаптивный)
interface SocialButtonProps {
  href?: string;
  icon: React.ElementType;
  label: string;
  primary?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const SocialButton = ({ href, icon: Icon, label, primary = false, onClick }: SocialButtonProps) => {
  return (
    <motion.a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base md:text-lg font-medium overflow-hidden transition-all duration-300 w-full md:w-auto
        ${primary 
          ? 'bg-white text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]' 
          : 'bg-white/5 text-white border border-white/10 active:bg-white/10'
        }
      `}
    >
      {/* Блик только на десктопе для производительности */}
      {primary && (
        <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
      )}
      
      <Icon className={`w-5 h-5 ${primary ? 'text-black' : 'text-zinc-400 group-hover:text-white transition-colors'}`} />
      <span className="relative z-10">{label}</span>
      
      {!primary && (
        <ArrowUpRight className="hidden md:block w-4 h-4 text-zinc-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
      )}
    </motion.a>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [copied, setCopied] = React.useState(false);

  // Параллакс (слабый на мобильных)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("contact@muslim.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={containerRef} className="py-16 md:py-24 bg-[#030303] relative overflow-hidden">
      
      {/* Background Grids & Noise */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <motion.div style={{ y: yBg }} className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Card */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
           className="relative bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[40px] p-6 md:p-16 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 relative z-10">
            
            <div className="w-full max-w-3xl">
               {/* Badge */}
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-4 md:mb-6">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                 </span>
                 Available for projects
               </div>

               {/* Headline */}
               <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.1] md:leading-[0.9]">
                 <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
                   {t.contact.title}
                 </span>
               </h2>
               
               {/* Subtitle */}
               <p className="text-base md:text-xl text-zinc-400 mb-8 md:mb-10 max-w-xl leading-relaxed">
                 {t.contact.subtitle}
               </p>
               
               {/* Buttons Stack */}
               <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
                 <SocialButton 
                   href="https://t.me/Musim_Ostanov" 
                   icon={Send} 
                   label="Telegram" 
                   primary 
                 />
                 <SocialButton 
                   href="mailto:contact@muslim.dev" 
                   icon={copied ? Check : Copy} 
                   label={copied ? "Copied!" : "Copy Email"} 
                   onClick={handleCopyEmail}
                 />
               </div>
            </div>

            {/* Circular Decoration (Desktop Only) */}
            <div className="hidden md:flex relative shrink-0">
               <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center relative transition-colors duration-500 hover:border-white/10">
                  <div className="absolute inset-0 rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite]" />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] cursor-pointer"
                  >
                    <a href="mailto:contact@muslim.dev">
                      <ArrowUpRight className="w-10 h-10 text-white" />
                    </a>
                  </motion.div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 md:mt-20 border-t border-white/5 pt-8 md:pt-12 flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8"
        >
          {/* Rights */}
          <div className="text-center md:text-left w-full md:w-auto">
            <h3 className="text-white font-bold text-lg mb-1">Muslim.dev</h3>
            <p className="text-zinc-500 text-xs md:text-sm font-mono">{t.contact.footer_rights}</p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 md:gap-6">
             {[
               { icon: Instagram, href: "#" },
               { icon: Linkedin, href: "#" },
               { icon: Github, href: "#" }
             ].map((social, index) => (
               <a 
                 key={index} 
                 href={social.href}
                 className="p-3 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
               >
                 <social.icon className="w-5 h-5" />
               </a>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
