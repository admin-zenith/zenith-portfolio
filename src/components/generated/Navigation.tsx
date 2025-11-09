"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { Logo } from './Logo';
import { containerVariants, itemVariants } from './animations';
interface NavigationProps {
  onGetStarted: () => void;
  mpid?: string;
}
const NAV_ITEMS = ['How We Work', 'Projects', 'Pricing', 'FAQs'];
export const Navigation = ({
  onGetStarted
}: NavigationProps) => {
  return <SortableContainer dndKitId="75e3715d-feec-45c5-9e26-765c63c74bb5" containerType="regular" prevTag="motion.nav" initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    type: 'spring',
    stiffness: 100,
    damping: 20
  }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50" data-magicpath-id="0" data-magicpath-path="Navigation.tsx">
      <SortableContainer dndKitId="fa92e12f-4a35-4d46-b812-3b03aa4464a9" containerType="regular" prevTag="div" className="bg-[#252525]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 px-8 py-3" data-magicpath-id="1" data-magicpath-path="Navigation.tsx">
        <SortableContainer dndKitId="98727c59-a7f1-448d-a8fe-d2fd55617741" containerType="regular" prevTag="div" className="flex items-center justify-between gap-8" data-magicpath-id="2" data-magicpath-path="Navigation.tsx">
          {/* Logo */}
          <SortableContainer dndKitId="6b371d90-2170-4953-88e6-df086cbad774" containerType="regular" prevTag="motion.div" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2" data-magicpath-id="3" data-magicpath-path="Navigation.tsx">
            <Logo size={36} data-magicpath-id="4" data-magicpath-path="Navigation.tsx" />
            <SortableContainer dndKitId="e539f21d-c05e-4a9a-8e68-a561124b7023" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="5" data-magicpath-path="Navigation.tsx">
              <span className="text-xl font-bold text-white tracking-tight" data-magicpath-id="6" data-magicpath-path="Navigation.tsx">zenith</span>
              <motion.span data-magicpath-motion-tag="motion.span" className="text-xl font-bold text-[#c2f12d]" animate={{
              scale: [1, 1.2, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} data-magicpath-id="7" data-magicpath-path="Navigation.tsx">
                .
              </motion.span>
            </SortableContainer>
          </SortableContainer>

          {/* Nav Links */}
          <SortableContainer dndKitId="5d9ffb45-8028-49b7-ab96-cae3a074038a" containerType="collection" prevTag="motion.div" className="hidden md:flex items-center space-x-1" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="8" data-magicpath-path="Navigation.tsx">
            {NAV_ITEMS.map(item => <motion.a data-magicpath-motion-tag="motion.a" key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} variants={itemVariants} whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Navigation.tsx">
                {item}
              </motion.a>)}
          </SortableContainer>

          {/* CTA Button */}
          <MagneticButton className="relative px-5 py-2 rounded-full bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] text-sm font-bold overflow-hidden transition-all duration-300 group" onClick={onGetStarted} data-magicpath-id="10" data-magicpath-path="Navigation.tsx">
            <motion.span data-magicpath-motion-tag="motion.span" className="absolute inset-0 bg-white" initial={{
            scale: 0,
            opacity: 0
          }} whileHover={{
            scale: 1,
            opacity: 0.2
          }} transition={{
            duration: 0.3
          }} data-magicpath-id="11" data-magicpath-path="Navigation.tsx" />
            <span className="relative" data-magicpath-id="12" data-magicpath-path="Navigation.tsx">Get Started</span>
          </MagneticButton>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};