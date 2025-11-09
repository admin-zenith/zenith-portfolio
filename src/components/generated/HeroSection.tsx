"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion, useTransform, MotionValue } from 'framer-motion';
import { Shield, ArrowRight, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { TECH_STACK, AI_STACK } from './constants';
import { containerVariants, itemVariants } from './animations';
import { AINetworkBackground } from './AINetworkBackground';
interface HeroSectionProps {
  scrollProgress: MotionValue<number>;
  onGetQuote: () => void;
  onBookCall: () => void;
  mpid?: string;
}
export const HeroSection = ({
  scrollProgress,
  onGetQuote,
  onBookCall
}: HeroSectionProps) => {
  const heroOpacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollProgress, [0, 0.15], [1, 0.98]);
  const heroY = useTransform(scrollProgress, [0, 0.15], [0, -50]);
  return <SortableContainer dndKitId="435def9d-be97-4f07-9371-a3af7784e7aa" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* AI Network Background */}
      <AINetworkBackground data-magicpath-id="1" data-magicpath-path="HeroSection.tsx" />
      
      <SortableContainer dndKitId="ef004bd0-3392-490d-97c1-f6c4c9b31b61" containerType="regular" prevTag="motion.div" style={{
      opacity: heroOpacity,
      scale: heroScale,
      y: heroY
    }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
        <SortableContainer dndKitId="adea9f8d-e623-4346-87cd-a7e2989216c7" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
          {/* Badge */}
          <SortableContainer dndKitId="08c6b637-6954-4aa4-9c93-6f99abffef94" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          type: 'spring'
        }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">
            <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{
            x: '-100%'
          }} whileHover={{
            x: '100%'
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="5" data-magicpath-path="HeroSection.tsx" />
            <SortableContainer dndKitId="8af20a7d-a287-465f-9a9b-c75b09e4888e" containerType="regular" prevTag="motion.div" animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }} data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">
              <Sparkles className="w-4 h-4 text-[#c2f12d]" />
            </SortableContainer>
            <span className="text-sm font-medium bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent relative" data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
              AI-Supercharged Development
            </span>
          </SortableContainer>

          {/* Headline */}
          <motion.h1 data-magicpath-motion-tag="motion.h1" className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" initial="hidden" animate="visible" variants={containerVariants} data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
            <motion.span data-magicpath-motion-tag="motion.span" variants={itemVariants} className="inline-block bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">Ship your  MVP in</motion.span>
            <br data-magicpath-id="10" data-magicpath-path="HeroSection.tsx" />
            <span className="relative inline-block" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" className="text-[#c2f12d]" variants={itemVariants} whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring'
            }} data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">30 days</motion.span>
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-2 bg-[#c2f12d]/20 blur-2xl -z-10" animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }} data-magicpath-id="13" data-magicpath-path="HeroSection.tsx" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p data-magicpath-motion-tag="motion.p" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed" data-magicpath-id="14" data-magicpath-path="HeroSection.tsx">
            From idea to launch — supercharged with AI and human expertise.
          </motion.p>

          {/* CTA Buttons */}
          <SortableContainer dndKitId="7f3b34dc-a401-4952-a6e8-0e6359cda65e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">
            <MagneticButton className="group relative px-8 py-4 rounded-xl bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] font-bold overflow-hidden transition-all duration-300" onClick={onGetQuote} data-magicpath-id="16" data-magicpath-path="HeroSection.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-[#b0dc28] to-[#c2f12d]" initial={{
              x: '-100%'
            }} whileHover={{
              x: '0%'
            }} transition={{
              duration: 0.3
            }} data-magicpath-id="17" data-magicpath-path="HeroSection.tsx" />
              <span className="relative flex items-center space-x-2" data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">
                <span data-magicpath-id="19" data-magicpath-path="HeroSection.tsx">Get a Quote</span>
                <SortableContainer dndKitId="f817ca93-3945-4a50-aafb-3bb7119af4bf" containerType="regular" prevTag="motion.div" animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }} data-magicpath-id="20" data-magicpath-path="HeroSection.tsx">
                  <ArrowRight className="w-5 h-5" data-magicpath-id="21" data-magicpath-path="HeroSection.tsx" />
                </SortableContainer>
              </span>
            </MagneticButton>

            <MagneticButton className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#c2f12d]/50 text-white rounded-xl font-semibold transition-all duration-300 group" onClick={onBookCall} data-magicpath-id="22" data-magicpath-path="HeroSection.tsx">
              <span className="flex items-center space-x-2" data-magicpath-id="23" data-magicpath-path="HeroSection.tsx">
                <SortableContainer dndKitId="8e967a6a-e67d-4c34-9d6e-f51dbb201cf8" containerType="regular" prevTag="motion.div" animate={{
                rotate: [0, 360]
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }} data-magicpath-id="24" data-magicpath-path="HeroSection.tsx">
                  <Calendar className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="25" data-magicpath-path="HeroSection.tsx" />
                </SortableContainer>
                <span data-magicpath-id="26" data-magicpath-path="HeroSection.tsx">Schedule Consultation</span>
              </span>
            </MagneticButton>
          </SortableContainer>

          {/* Tech Stack */}
          <SortableContainer dndKitId="a23c9bd9-776e-47b1-9f1d-0abfcbd98e45" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={containerVariants} className="space-y-6" data-magicpath-id="27" data-magicpath-path="HeroSection.tsx">
            {/* Regular Tech Stack */}
            <SortableContainer dndKitId="c68374b0-42b6-4a71-b04c-d1bf1225812e" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="28" data-magicpath-path="HeroSection.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="29" data-magicpath-path="HeroSection.tsx">
                Built With
              </motion.p>
              <SortableContainer dndKitId="f7cda98e-0e1d-422e-8042-ecf1fbcaecc3" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="30" data-magicpath-path="HeroSection.tsx">
                {TECH_STACK.map(tech => <motion.div data-magicpath-motion-tag="motion.div" key={tech} variants={itemVariants} whileHover={{
                scale: 1.1,
                y: -2,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.3
                }
              }} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#c2f12d]/50 hover:bg-white/10 transition-all duration-300 cursor-default" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="HeroSection.tsx">
                    {tech}
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer>

            {/* AI Tech Stack */}
            <SortableContainer dndKitId="a7a27fff-b8cc-4745-a62d-fdaf00c11be5" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="32" data-magicpath-path="HeroSection.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xs text-[#c2f12d] uppercase tracking-wider font-medium flex items-center justify-center gap-2" data-magicpath-id="33" data-magicpath-path="HeroSection.tsx">
                <Sparkles className="w-3 h-3" />
                Supercharged with AI frameworks
              </motion.p>
              <SortableContainer dndKitId="44bd8e00-8138-48a3-acc0-42aee5f67aea" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="34" data-magicpath-path="HeroSection.tsx">
                {AI_STACK.slice(0, 5).map(tech => <motion.div data-magicpath-motion-tag="motion.div" key={tech} variants={itemVariants} whileHover={{
                scale: 1.1,
                y: -2,
                transition: {
                  duration: 0.3
                }
              }} className="relative px-5 py-2.5 bg-[#c2f12d]/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-xl text-sm font-medium text-[#c2f12d] hover:bg-[#c2f12d]/20 transition-all duration-300 cursor-default overflow-hidden group" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="HeroSection.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c2f12d]/20 to-transparent" initial={{
                  x: '-100%'
                }} whileHover={{
                  x: '100%'
                }} transition={{
                  duration: 0.6
                }} data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="HeroSection.tsx" />
                    <span className="relative" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="HeroSection.tsx">{tech}</span>
                  </motion.div>)}
                <motion.div data-magicpath-motion-tag="motion.div" variants={itemVariants} whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3
                }
              }} className="px-5 py-2.5 bg-[#c2f12d]/5 backdrop-blur-xl border-2 border-dashed border-[#c2f12d]/20 rounded-xl text-sm font-medium text-[#c2f12d]/70 hover:text-[#c2f12d] hover:bg-[#c2f12d]/10 hover:border-[#c2f12d]/40 transition-all duration-300 cursor-default" data-magicpath-id="38" data-magicpath-path="HeroSection.tsx">
                  + more
                </motion.div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Scroll Indicator */}
      <SortableContainer dndKitId="b2daa660-d757-4089-bcb3-938b73d190c7" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
      y: [0, 15, 0],
      opacity: [1, 0.5, 1]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }} data-magicpath-id="39" data-magicpath-path="HeroSection.tsx">
        <ChevronDown className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="40" data-magicpath-path="HeroSection.tsx" />
      </SortableContainer>
    </SortableContainer>;
};