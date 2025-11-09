"use client";

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
}
export const HeroSection = ({
  scrollProgress,
  onGetQuote,
  onBookCall
}: HeroSectionProps) => {
  const heroOpacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollProgress, [0, 0.15], [1, 0.98]);
  const heroY = useTransform(scrollProgress, [0, 0.15], [0, -50]);
  return <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      {/* AI Network Background */}
      <AINetworkBackground />
      
      <motion.div style={{
      opacity: heroOpacity,
      scale: heroScale,
      y: heroY
    }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          type: 'spring'
        }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
            <motion.div className="absolute inset-0 bg-white/10" initial={{
            x: '-100%'
          }} whileHover={{
            x: '100%'
          }} transition={{
            duration: 0.6
          }} />
            <motion.div animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}>
              <Sparkles className="w-4 h-4 text-[#c2f12d]" />
            </motion.div>
            <span className="text-sm font-medium text-white relative">
              AI-Supercharged Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.span variants={itemVariants} className="inline-block text-white my-4">Ship your  MVP in</motion.span>
            <br />
            <span className="relative inline-block">
              <motion.span className="text-[#c2f12d]" variants={itemVariants} whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring'
            }}>30 days</motion.span>
              <motion.div className="absolute -inset-2 bg-[#c2f12d]/20 blur-2xl -z-10" animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }} />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            From idea to launch — supercharged with AI and human expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <MagneticButton className="group relative px-8 py-4 rounded-xl bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] font-bold overflow-hidden transition-all duration-300" onClick={onGetQuote}>
              <motion.div className="absolute inset-0 bg-[#b0dc28]" initial={{
              x: '-100%'
            }} whileHover={{
              x: '0%'
            }} transition={{
              duration: 0.3
            }} />
              <span className="relative flex items-center space-x-2">
                <span>Get a Quote</span>
                <motion.div animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </MagneticButton>

            <MagneticButton className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#c2f12d]/50 text-white rounded-xl font-semibold transition-all duration-300 group" onClick={onBookCall}>
              <span className="flex items-center space-x-2">
                <motion.div animate={{
                rotate: [0, 360]
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}>
                  <Calendar className="w-5 h-5 text-[#c2f12d]" />
                </motion.div>
                <span>Schedule Consultation</span>
              </span>
            </MagneticButton>
          </motion.div>

          {/* Tech Stack */}
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
            {/* Regular Tech Stack */}
            <div className="space-y-4">
              <motion.p variants={itemVariants} className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Built With
              </motion.p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {TECH_STACK.map(tech => <motion.div key={tech} variants={itemVariants} whileHover={{
                scale: 1.1,
                y: -2,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.3
                }
              }} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#c2f12d]/50 hover:bg-white/10 transition-all duration-300 cursor-default">
                    {tech}
                  </motion.div>)}
              </div>
            </div>

            {/* AI Tech Stack */}
            <div className="space-y-4">
              <motion.p variants={itemVariants} className="text-xs text-[#c2f12d] uppercase tracking-wider font-medium flex items-center justify-center gap-2">
                <Sparkles className="w-3 h-3" />
                Supercharged with AI frameworks
              </motion.p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {AI_STACK.slice(0, 5).map(tech => <motion.div key={tech} variants={itemVariants} whileHover={{
                scale: 1.1,
                y: -2,
                transition: {
                  duration: 0.3
                }
              }} className="relative px-5 py-2.5 bg-[#c2f12d]/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-xl text-sm font-medium text-[#c2f12d] hover:bg-[#c2f12d]/20 transition-all duration-300 cursor-default overflow-hidden group">
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c2f12d]/20 to-transparent" initial={{
                  x: '-100%'
                }} whileHover={{
                  x: '100%'
                }} transition={{
                  duration: 0.6
                }} />
                    <span className="relative">{tech}</span>
                  </motion.div>)}
                <motion.div variants={itemVariants} whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3
                }
              }} className="px-5 py-2.5 bg-[#c2f12d]/5 backdrop-blur-xl border-2 border-dashed border-[#c2f12d]/20 rounded-xl text-sm font-medium text-[#c2f12d]/70 hover:text-[#c2f12d] hover:bg-[#c2f12d]/10 hover:border-[#c2f12d]/40 transition-all duration-300 cursor-default">
                  + more
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      
    </section>;
};