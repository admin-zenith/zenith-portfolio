"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import  Logo  from '../img/LOGO.svg';
import { containerVariants, itemVariants } from './animations';
interface NavigationProps {
  onGetStarted: () => void;
}
const NAV_ITEMS = ['How We Work', 'Projects', 'Pricing', 'FAQs'];
export const Navigation = ({
  onGetStarted
}: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleNavClick = (item: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      {/* Desktop & Mobile Nav Bar */}
      <motion.nav initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      type: 'spring',
      stiffness: 100,
      damping: 20
    }} className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto">
        <div className="bg-[#252525]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 px-4 md:px-8 py-3">
          <div className="flex items-center justify-between gap-4 md:gap-8">
          <img src={Logo} alt="" />

            {/* Desktop Nav Links */}
            <motion.div className="hidden lg:flex items-center space-x-1" variants={containerVariants} initial="hidden" animate="visible">
              {NAV_ITEMS.map(item => <motion.a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} variants={itemVariants} whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5" onClick={e => {
              e.preventDefault();
              handleNavClick(item);
            }}>
                  {item}
                </motion.a>)}
            </motion.div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <MagneticButton className="relative px-5 py-2 rounded-full bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] text-sm font-bold overflow-hidden transition-all duration-300 group" onClick={onGetStarted}>
                <motion.span className="absolute inset-0 bg-white" initial={{
                scale: 0,
                opacity: 0
              }} whileHover={{
                scale: 1,
                opacity: 0.2
              }} transition={{
                duration: 0.3
              }} />
                <span className="relative">Get Started</span>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button whileTap={{
            scale: 0.9
          }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && <>
            {/* Backdrop */}
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2
        }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" onClick={() => setMobileMenuOpen(false)} />

            {/* Menu Panel */}
            <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3,
          ease: 'easeOut'
        }} className="fixed top-20 md:top-24 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
              <div className="bg-[#252525]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 p-6">
                {/* Navigation Links */}
                <div className="flex flex-col space-y-2 mb-6">
                  {NAV_ITEMS.map((item, index) => <motion.a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} whileTap={{
                scale: 0.98
              }} className="px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" onClick={e => {
                e.preventDefault();
                handleNavClick(item);
              }}>
                      {item}
                    </motion.a>)}
                </div>

                {/* Mobile CTA Button */}
                <motion.button initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} whileTap={{
              scale: 0.98
            }} onClick={() => {
              setMobileMenuOpen(false);
              onGetStarted();
            }} className="w-full px-6 py-3 rounded-full bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] text-base font-bold transition-all duration-300">
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
};