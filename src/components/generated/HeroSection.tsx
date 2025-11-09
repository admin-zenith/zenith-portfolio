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
  return <SortableContainer dndKitId="c5397d56-c81e-46f2-9934-954692b083fa" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* AI Network Background */}
      <AINetworkBackground data-magicpath-id="1" data-magicpath-path="HeroSection.tsx" />
      
      <SortableContainer dndKitId="26781327-a279-4b0f-aea1-82bc9788303f" containerType="regular" prevTag="motion.div" style={{
      opacity: heroOpacity,
      scale: heroScale,
      y: heroY
    }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
        <SortableContainer dndKitId="ea6c818a-f925-4178-a3e8-2765c428845b" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="300a049b-6744-4937-9944-9563564a46e3" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="096ae33e-ec9b-4f1b-9e66-fd75d012ddd1" containerType="regular" prevTag="motion.div" animate={{
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
            <motion.span data-magicpath-motion-tag="motion.span" variants={itemVariants} className="inline-block bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
              Ship your AI-ready MVP in
            </motion.span>
            <br data-magicpath-id="10" data-magicpath-path="HeroSection.tsx" />
            <span className="relative inline-block" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" className="text-[#c2f12d]" variants={itemVariants} whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring'
            }} data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
                30–60 days
              </motion.span>
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
          <SortableContainer dndKitId="12d8a77e-e0ef-4a87-b63d-77f02e1b41db" containerType="regular" prevTag="motion.div" initial={{
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
                <SortableContainer dndKitId="cb0d783a-553b-42e5-9048-99657d25b400" containerType="regular" prevTag="motion.div" animate={{
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
                <SortableContainer dndKitId="8203e4a8-c1ca-493a-8312-519d03a5c977" containerType="regular" prevTag="motion.div" animate={{
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
          <SortableContainer dndKitId="11a09d4f-134f-4848-aa30-32983aed99d2" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={containerVariants} className="space-y-6" data-magicpath-id="27" data-magicpath-path="HeroSection.tsx">
            {/* Regular Tech Stack */}
            <SortableContainer dndKitId="130efb45-4da7-42b1-b83a-416f04d4408f" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="28" data-magicpath-path="HeroSection.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="29" data-magicpath-path="HeroSection.tsx">
                Built With
              </motion.p>
              <SortableContainer dndKitId="cbc0c49f-d90c-4e0b-b852-3394c04782cf" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="30" data-magicpath-path="HeroSection.tsx">
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
            <SortableContainer dndKitId="92c545f2-1358-4b0b-a945-cbb8385894cf" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="32" data-magicpath-path="HeroSection.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xs text-[#c2f12d] uppercase tracking-wider font-medium flex items-center justify-center gap-2" data-magicpath-id="33" data-magicpath-path="HeroSection.tsx">
                <Sparkles className="w-3 h-3" />
                Supercharged with AI frameworks
              </motion.p>
              <SortableContainer dndKitId="068cbf4f-a8b1-4deb-a47d-48f9153b14a6" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="34" data-magicpath-path="HeroSection.tsx">
                {AI_STACK.map(tech => <motion.div data-magicpath-motion-tag="motion.div" key={tech} variants={itemVariants} whileHover={{
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
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Scroll Indicator */}
      <SortableContainer dndKitId="811929df-12cf-4106-8127-8a3c57deb21f" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
      y: [0, 15, 0],
      opacity: [1, 0.5, 1]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }} data-magicpath-id="38" data-magicpath-path="HeroSection.tsx">
        <ChevronDown className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="39" data-magicpath-path="HeroSection.tsx" />
      </SortableContainer>
    </SortableContainer>;
};