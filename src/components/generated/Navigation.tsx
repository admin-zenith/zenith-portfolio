"use client";

import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import Logo  from '../img/LOGO.svg';
import { containerVariants, itemVariants } from './animations';
interface NavigationProps {
  onGetStarted: () => void;
}
const NAV_ITEMS = ['How We Work', 'Projects', 'Pricing', 'FAQs'];
export const Navigation = ({
  onGetStarted
}: NavigationProps) => {
  return <motion.nav initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    type: 'spring',
    stiffness: 100,
    damping: 20
  }} className="fixed top-6 w-100 md:w-[50%] left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#252525]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 px-8 py-3">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
         <img src={Logo}  alt="" />

          {/* Nav Links */}
          <motion.div className="hidden md:flex items-center space-x-1" variants={containerVariants} initial="hidden" animate="visible">
            {NAV_ITEMS.map(item => <motion.a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} variants={itemVariants} whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                {item}
              </motion.a>)}
          </motion.div>

          {/* CTA Button */}
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
      </div>
    </motion.nav>;
};