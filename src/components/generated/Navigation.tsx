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
  return <SortableContainer dndKitId="3fcd5fe9-8d49-43eb-b232-7f985163b3e9" containerType="regular" prevTag="motion.nav" initial={{
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
      <SortableContainer dndKitId="35e74d2f-209d-4303-868f-49c1932fe216" containerType="regular" prevTag="div" className="bg-[#252525]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 px-8 py-3" data-magicpath-id="1" data-magicpath-path="Navigation.tsx">
        <SortableContainer dndKitId="00933013-abe7-4f5d-97ae-d7d45922b91f" containerType="regular" prevTag="div" className="flex items-center justify-between gap-8" data-magicpath-id="2" data-magicpath-path="Navigation.tsx">
          {/* Logo */}
          <SortableContainer dndKitId="54a5eba4-0bf9-41f9-9583-ed00a7744fa6" containerType="regular" prevTag="motion.div" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2" data-magicpath-id="3" data-magicpath-path="Navigation.tsx">
            <Logo size={36} data-magicpath-id="4" data-magicpath-path="Navigation.tsx" />
            <SortableContainer dndKitId="988758a1-7bba-4e8e-910e-251cf09e592e" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="5" data-magicpath-path="Navigation.tsx">
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
          <SortableContainer dndKitId="07f6f045-5d49-49fb-9ae7-a9f2eb7ed97a" containerType="collection" prevTag="motion.div" className="hidden md:flex items-center space-x-1" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="8" data-magicpath-path="Navigation.tsx">
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