import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { key: 'about', label: t.nav.about },
    { key: 'services', label: t.nav.services },
    { key: 'work', label: t.nav.work },
    { key: 'contact', label: t.nav.contact }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <>
      {/* Desktop Floating Island Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-full p-1.5 flex items-center shadow-2xl shadow-black/50">
          
          {/* Logo Area */}
          <div className="pl-5 pr-4 font-bold text-white tracking-tight cursor-pointer select-none text-lg flex items-center gap-1" onClick={() => scrollTo('hero')}>
            Muslim<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-1 py-1 mx-2">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.key)}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pl-2">
             {/* Language Switcher */}
             <div className="relative">
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all border border-transparent hover:border-white/10"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider">{language}</span>
                </button>
                 <AnimatePresence>
                  {langOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-3 w-32 bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1.5 z-50"
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLanguage(l.code);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs font-bold rounded-xl transition-colors ${
                            language === l.code 
                            ? 'bg-blue-600/10 text-blue-400' 
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                 </AnimatePresence>
             </div>

             {/* CTA Button */}
             <button onClick={() => scrollTo('contact')} className="hidden md:flex h-10 px-6 rounded-full bg-white text-black hover:bg-gray-200 text-sm font-bold transition-all items-center gap-2">
                {t.nav.contact} 
             </button>

             {/* Mobile Menu Toggle */}
             <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-32 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.key}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item.key)}
                  className="text-4xl font-bold text-white py-4 border-b border-white/10 text-left active:text-blue-500"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                 <button onClick={() => scrollTo('contact')} className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2">
                    {t.nav.contact} <ArrowRight className="w-5 h-5" />
                 </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;