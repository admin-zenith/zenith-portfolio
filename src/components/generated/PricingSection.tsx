"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Users, Clock, Sparkles, ArrowRight, Calendar, Zap, TrendingUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { PRICING_CONFIG } from './constants';
import { containerVariants, itemVariants } from './animations';
interface PricingSectionProps {
  onGetQuote: () => void;
  onBookCall: () => void;
  mpid?: string;
}
export const PricingSection = ({
  onGetQuote,
  onBookCall
}: PricingSectionProps) => {
  const [teamSize, setTeamSize] = useState(2);
  const [sprints, setSprints] = useState(2);
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null);
  const calculatePrice = () => {
    const total = teamSize * sprints * PRICING_CONFIG.RATE_PER_DEV_PER_SPRINT;
    return total.toLocaleString();
  };
  const getDuration = () => sprints * 2;
  const fullStackIncludes = ['Full-Stack Development', 'Project Management', 'Quality Assurance (QA)', 'UI/UX Design', 'AI-Assisted Workflow', 'Architecture & Scalability'];
  return <SortableContainer dndKitId="5ae736a9-fb3b-4863-96ec-38ed3bf25d77" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden" data-magicpath-id="0" data-magicpath-path="PricingSection.tsx">
      {/* Animated Background Elements */}
      <SortableContainer dndKitId="f395d6e1-3c70-40c7-9d2b-d75c2aa9b3ab" containerType="regular" prevTag="div" className="absolute inset-0 opacity-30" data-magicpath-id="1" data-magicpath-path="PricingSection.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c2f12d]/20 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="2" data-magicpath-path="PricingSection.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} data-magicpath-id="3" data-magicpath-path="PricingSection.tsx" />
      </SortableContainer>

      <SortableContainer dndKitId="6a5c7767-4eee-4842-9f65-82f3de0134e0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto relative z-10" data-magicpath-id="4" data-magicpath-path="PricingSection.tsx">
        {/* Section Header */}
        <SortableContainer dndKitId="235c1dda-023d-4b63-ae13-8bb7d907705b" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="5" data-magicpath-path="PricingSection.tsx">
          <SortableContainer dndKitId="4bb0dd18-565c-4077-b536-a54d4223921f" containerType="regular" prevTag="motion.div" initial={{
          scale: 0.9,
          opacity: 0
        }} whileInView={{
          scale: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-[#c2f12d]/20 to-emerald-400/20 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full mb-6" data-magicpath-id="6" data-magicpath-path="PricingSection.tsx">
            <Zap className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="7" data-magicpath-path="PricingSection.tsx" />
            <span className="text-sm font-bold text-slate-700" data-magicpath-id="8" data-magicpath-path="PricingSection.tsx">TRANSPARENT PRICING</span>
          </SortableContainer>

          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{
          color: '#252525'
        }} data-magicpath-id="9" data-magicpath-path="PricingSection.tsx">
            Fair. Transparent.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c2f12d] to-emerald-400" data-magicpath-id="10" data-magicpath-path="PricingSection.tsx">
              Predictable.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed" data-magicpath-id="11" data-magicpath-path="PricingSection.tsx">
            Estimate your AI-enhanced MVP development cost instantly — no hidden fees, no guesswork.
          </p>

          {/* AI Workflow Tooltip */}
          <SortableContainer dndKitId="0e6e944e-e614-46e5-ad3c-a47811b17a0d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#c2f12d]/10 to-emerald-500/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-2xl shadow-lg" data-magicpath-id="12" data-magicpath-path="PricingSection.tsx">
            <Sparkles className="w-6 h-6 text-[#c2f12d]" />
            <span className="text-base font-semibold text-slate-700" data-magicpath-id="13" data-magicpath-path="PricingSection.tsx">
              Every project is full-stack with built-in PM, QA, and UI/UX design
            </span>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="036b7ee7-765a-4857-af14-00b8a2493932" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="relative p-1 bg-gradient-to-br from-[#c2f12d] via-emerald-400 to-[#c2f12d] rounded-[2rem] shadow-2xl" data-magicpath-id="14" data-magicpath-path="PricingSection.tsx">
          <SortableContainer dndKitId="374e5c55-6eb6-4669-bde9-558775b34890" containerType="regular" prevTag="div" className="relative p-12 bg-white rounded-[1.85rem] overflow-hidden" data-magicpath-id="15" data-magicpath-path="PricingSection.tsx">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c2f12d]/10 to-transparent rounded-full blur-3xl" data-magicpath-id="16" data-magicpath-path="PricingSection.tsx" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/10 to-transparent rounded-full blur-3xl" data-magicpath-id="17" data-magicpath-path="PricingSection.tsx" />

            {/* Header with AI Badge */}
            <SortableContainer dndKitId="a9eb5dc0-8702-4503-869a-4f39b435f21f" containerType="regular" prevTag="div" className="relative z-10 flex flex-col sm:flex-row items-center justify-between mb-12 gap-4" data-magicpath-id="18" data-magicpath-path="PricingSection.tsx">
              <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} data-magicpath-id="19" data-magicpath-path="PricingSection.tsx">
                Interactive Estimator
              </motion.h3>
              <SortableContainer dndKitId="0fad4c35-8e15-45d1-af76-c08d914cdc20" containerType="regular" prevTag="motion.div" whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, 0]
            }} className="group relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#c2f12d] to-emerald-400 rounded-2xl cursor-help shadow-lg shadow-[#c2f12d]/30" data-magicpath-id="20" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="fab63c06-bdf5-4be4-9c2a-36d4a54a367e" containerType="regular" prevTag="motion.div" animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="21" data-magicpath-path="PricingSection.tsx">
                  <Sparkles className="w-5 h-5 text-[#252525]" />
                </SortableContainer>
                <span className="text-base font-bold text-[#252525]" data-magicpath-id="22" data-magicpath-path="PricingSection.tsx">AI-Supercharged MVP</span>
                
                {/* Enhanced Tooltip */}
                <SortableContainer dndKitId="7693d11a-25c5-4965-9e93-609096f8a08b" containerType="regular" prevTag="div" className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 w-80 p-6 bg-slate-900 text-white text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-2xl" data-magicpath-id="23" data-magicpath-path="PricingSection.tsx">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-slate-900" data-magicpath-id="24" data-magicpath-path="PricingSection.tsx"></div>
                  <SortableContainer dndKitId="fe7104e7-dc5f-45be-9884-ebb643936921" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="25" data-magicpath-path="PricingSection.tsx">
                    <TrendingUp className="w-5 h-5 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-id="26" data-magicpath-path="PricingSection.tsx" />
                    <p className="leading-relaxed" data-magicpath-id="27" data-magicpath-path="PricingSection.tsx">
                      Our AI-assisted workflow accelerates delivery while ensuring quality and scalability. You get faster builds without compromising on engineering excellence.
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="972cb5f7-1538-45d9-9ca3-b1bc8e1f836b" containerType="regular" prevTag="div" className="relative z-10 grid lg:grid-cols-[1.2fr,1fr] gap-12" data-magicpath-id="28" data-magicpath-path="PricingSection.tsx">
              {/* LEFT: Interactive Inputs */}
              <SortableContainer dndKitId="108c4fce-5a9e-4ed9-b94f-e7692e8e9ce8" containerType="regular" prevTag="div" className="space-y-10" data-magicpath-id="29" data-magicpath-path="PricingSection.tsx">
                {/* Team Size Selector */}
                <SortableContainer dndKitId="27b1c07b-b2fc-4ef1-9d1b-9f8833ff0db9" containerType="regular" prevTag="div" data-magicpath-id="30" data-magicpath-path="PricingSection.tsx">
                  <SortableContainer dndKitId="269baf6e-8c6c-4533-96d7-4dd0b7e218a5" containerType="regular" prevTag="div" className="flex justify-between items-center mb-6" data-magicpath-id="31" data-magicpath-path="PricingSection.tsx">
                    <label className="text-xl font-bold text-slate-800 flex items-center gap-3" data-magicpath-id="32" data-magicpath-path="PricingSection.tsx">
                      <SortableContainer dndKitId="91bfcaca-75ea-4a9e-9543-a7b6fe87ec72" containerType="regular" prevTag="div" className="p-2 bg-gradient-to-br from-[#c2f12d]/20 to-emerald-400/20 rounded-xl" data-magicpath-id="33" data-magicpath-path="PricingSection.tsx">
                        <Users className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="34" data-magicpath-path="PricingSection.tsx" />
                      </SortableContainer>
                      Team Size
                    </label>
                    <AnimatePresence mode="wait" data-magicpath-id="35" data-magicpath-path="PricingSection.tsx">
                      <SortableContainer dndKitId="63b14829-f9c4-40e1-8ecb-9378872f0c9c" containerType="regular" prevTag="motion.div" key={teamSize} initial={{
                      scale: 1.5,
                      opacity: 0,
                      y: -20
                    }} animate={{
                      scale: 1,
                      opacity: 1,
                      y: 0
                    }} exit={{
                      scale: 0.5,
                      opacity: 0
                    }} transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }} className="flex items-center gap-2" data-magicpath-id="36" data-magicpath-path="PricingSection.tsx">
                        <span className="text-5xl font-bold bg-gradient-to-r from-[#c2f12d] to-emerald-400 bg-clip-text text-transparent" data-magicpath-id="37" data-magicpath-path="PricingSection.tsx">
                          {teamSize}
                        </span>
                        <span className="text-lg font-semibold text-slate-500" data-magicpath-id="38" data-magicpath-path="PricingSection.tsx">
                          dev{teamSize > 1 ? 's' : ''}
                        </span>
                      </SortableContainer>
                    </AnimatePresence>
                  </SortableContainer>

                  {/* Team Size Buttons */}
                  <div className="space-y-3" data-magicpath-id="39" data-magicpath-path="PricingSection.tsx">
                    {[1, 2, 3, 4, 5].map(size => <SortableContainer dndKitId="922c61ce-ca9c-4719-9253-4e54c5c0e78d" containerType="regular" prevTag="motion.button" key={size} onClick={() => setTeamSize(size)} onHoverStart={() => setHoveredTeam(size)} onHoverEnd={() => setHoveredTeam(null)} whileHover={{
                    scale: 1.02,
                    x: 6
                  }} whileTap={{
                    scale: 0.98
                  }} className={`relative w-full py-5 px-6 rounded-2xl font-semibold text-left transition-all duration-300 ${teamSize === size ? 'bg-gradient-to-r from-[#c2f12d] to-emerald-400 text-[#252525] shadow-xl shadow-[#c2f12d]/40' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-2 border-slate-200'}`} data-magicpath-id="40" data-magicpath-path="PricingSection.tsx">
                        {/* Selection Indicator */}
                        <AnimatePresence data-magicpath-id="41" data-magicpath-path="PricingSection.tsx">
                          {teamSize === size && <motion.div data-magicpath-motion-tag="motion.div" layoutId="teamSelection" className="absolute inset-0 bg-gradient-to-r from-[#c2f12d] to-emerald-400 rounded-2xl" initial={{
                        opacity: 0
                      }} animate={{
                        opacity: 1
                      }} exit={{
                        opacity: 0
                      }} transition={{
                        duration: 0.3
                      }} data-magicpath-id="42" data-magicpath-path="PricingSection.tsx" />}
                        </AnimatePresence>

                        <SortableContainer dndKitId="2981cc2d-3915-4dc6-8c3b-7d2fdbb5b60a" containerType="regular" prevTag="div" className="relative z-10 flex items-center justify-between" data-magicpath-id="43" data-magicpath-path="PricingSection.tsx">
                          <SortableContainer dndKitId="b6d561e4-80a3-4a20-881a-2dfda698c972" containerType="regular" prevTag="div" data-magicpath-id="44" data-magicpath-path="PricingSection.tsx">
                            <div className="text-lg font-bold mb-1" data-magicpath-id="45" data-magicpath-path="PricingSection.tsx">
                              {size} Full-Stack Developer{size > 1 ? 's' : ''}
                            </div>
                            <div className={`text-sm ${teamSize === size ? 'text-[#252525]/70' : 'text-slate-500'}`} data-magicpath-id="46" data-magicpath-path="PricingSection.tsx">
                              Includes PM, QA, UI/UX
                            </div>
                          </SortableContainer>
                          <AnimatePresence data-magicpath-id="47" data-magicpath-path="PricingSection.tsx">
                            {teamSize === size && <SortableContainer dndKitId="19fd96c8-f16e-4b9b-8ebe-5eefb4e1a92f" containerType="regular" prevTag="motion.div" initial={{
                          scale: 0,
                          rotate: -180
                        }} animate={{
                          scale: 1,
                          rotate: 0
                        }} exit={{
                          scale: 0,
                          rotate: 180
                        }} transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 25
                        }} data-magicpath-id="48" data-magicpath-path="PricingSection.tsx">
                                <CheckCircle2 className="w-7 h-7 text-[#252525]" data-magicpath-id="49" data-magicpath-path="PricingSection.tsx" />
                              </SortableContainer>}
                          </AnimatePresence>
                        </SortableContainer>

                        {/* Hover Effect */}
                        {hoveredTeam === size && teamSize !== size && <motion.div data-magicpath-motion-tag="motion.div" layoutId="teamHover" className="absolute inset-0 bg-gradient-to-r from-[#c2f12d]/10 to-emerald-400/10 rounded-2xl" initial={{
                      opacity: 0
                    }} animate={{
                      opacity: 1
                    }} exit={{
                      opacity: 0
                    }} data-magicpath-id="50" data-magicpath-path="PricingSection.tsx" />}
                      </SortableContainer>)}
                  </div>
                </SortableContainer>

                {/* Duration Selector */}
                <SortableContainer dndKitId="f5c227db-3cd7-44f8-aebe-d4e3527d9394" containerType="regular" prevTag="div" data-magicpath-id="51" data-magicpath-path="PricingSection.tsx">
                  <label className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" data-magicpath-id="52" data-magicpath-path="PricingSection.tsx">
                    <SortableContainer dndKitId="f658acce-b7a9-4d24-bbff-bf6b122e5c43" containerType="regular" prevTag="div" className="p-2 bg-gradient-to-br from-[#c2f12d]/20 to-emerald-400/20 rounded-xl" data-magicpath-id="53" data-magicpath-path="PricingSection.tsx">
                      <Clock className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="54" data-magicpath-path="PricingSection.tsx" />
                    </SortableContainer>
                    Project Duration
                  </label>
                  <div className="grid grid-cols-3 gap-4 mt-6" data-magicpath-id="55" data-magicpath-path="PricingSection.tsx">
                    {PRICING_CONFIG.SPRINT_OPTIONS.map(option => <SortableContainer dndKitId="7b5ae4e6-5e2a-4872-81b2-5c3d3209b2c6" containerType="regular" prevTag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                    scale: 1.05,
                    y: -6
                  }} whileTap={{
                    scale: 0.95
                  }} className={`relative py-7 px-5 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${sprints === option.value ? 'bg-gradient-to-br from-[#c2f12d] to-emerald-400 text-[#252525] shadow-2xl shadow-[#c2f12d]/40' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-2 border-slate-200'}`} data-magicpath-id="56" data-magicpath-path="PricingSection.tsx">
                        {sprints === option.value && <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }} transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} data-magicpath-id="57" data-magicpath-path="PricingSection.tsx" />}
                        <SortableContainer dndKitId="a00926a4-b632-4bf2-838d-21625bba2db9" containerType="regular" prevTag="motion.div" animate={sprints === option.value ? {
                      scale: [1, 1.1, 1]
                    } : {}} transition={{
                      duration: 0.3
                    }} className="relative z-10" data-magicpath-id="58" data-magicpath-path="PricingSection.tsx">
                          <div className="text-lg font-bold mb-2" data-magicpath-id="59" data-magicpath-path="PricingSection.tsx">{option.label}</div>
                          <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/70' : 'text-slate-500'}`} data-magicpath-id="60" data-magicpath-path="PricingSection.tsx">
                            {option.desc}
                          </div>
                        </SortableContainer>
                      </SortableContainer>)}
                  </div>
                </SortableContainer>
              </SortableContainer>

              {/* RIGHT: Price Display & Details */}
              <SortableContainer dndKitId="594976fc-c305-4ec4-996a-36e19cbc77ad" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="61" data-magicpath-path="PricingSection.tsx">
                {/* Price Card */}
                <AnimatePresence mode="wait" data-magicpath-id="62" data-magicpath-path="PricingSection.tsx">
                  <SortableContainer dndKitId="ee363fc4-0f6b-4151-ab77-ef2e268e99a8" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
                  scale: 0.9,
                  opacity: 0,
                  rotateY: 90
                }} animate={{
                  scale: 1,
                  opacity: 1,
                  rotateY: 0
                }} exit={{
                  scale: 0.9,
                  opacity: 0,
                  rotateY: -90
                }} transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }} className="relative text-center p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl" data-magicpath-id="63" data-magicpath-path="PricingSection.tsx">
                    {/* Animated Background Grid */}
                    <SortableContainer dndKitId="c90e2556-5c7b-4580-a832-dedfc7e50c4c" containerType="regular" prevTag="div" className="absolute inset-0 opacity-10" data-magicpath-id="64" data-magicpath-path="PricingSection.tsx">
                      <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(#c2f12d 1px, transparent 1px), linear-gradient(90deg, #c2f12d 1px, transparent 1px)',
                      backgroundSize: '50px 50px'
                    }} data-magicpath-id="65" data-magicpath-path="PricingSection.tsx" />
                    </SortableContainer>

                    {/* Animated Glow */}
                    <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/30 via-transparent to-emerald-500/30" animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity
                  }} data-magicpath-id="66" data-magicpath-path="PricingSection.tsx" />

                    <SortableContainer dndKitId="d58e277c-fe07-4e98-b39b-cda974c5060b" containerType="regular" prevTag="div" className="relative z-10" data-magicpath-id="67" data-magicpath-path="PricingSection.tsx">
                      <SortableContainer dndKitId="2fb2a367-5d90-42a8-8da7-98ba27ed8cfb" containerType="regular" prevTag="div" className="flex items-center justify-center gap-2 mb-4" data-magicpath-id="68" data-magicpath-path="PricingSection.tsx">
                        <SortableContainer dndKitId="fb079a0c-d25f-4816-9907-236be8fb926b" containerType="regular" prevTag="motion.div" animate={{
                        rotate: 360
                      }} transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }} data-magicpath-id="69" data-magicpath-path="PricingSection.tsx">
                          <Sparkles className="w-6 h-6 text-[#c2f12d]" />
                        </SortableContainer>
                        <p className="text-sm text-slate-300 uppercase tracking-widest font-bold" data-magicpath-id="70" data-magicpath-path="PricingSection.tsx">
                          Estimated Cost
                        </p>
                      </SortableContainer>
                      
                      <motion.p data-magicpath-motion-tag="motion.p" className="text-7xl font-bold mb-6" initial={{
                      scale: 1.5,
                      opacity: 0
                    }} animate={{
                      scale: 1,
                      opacity: 1
                    }} transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }} data-magicpath-id="71" data-magicpath-path="PricingSection.tsx">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c2f12d] via-emerald-300 to-[#c2f12d]" data-magicpath-id="72" data-magicpath-path="PricingSection.tsx">
                          ₱{calculatePrice()}
                        </span>
                      </motion.p>

                      <SortableContainer dndKitId="913a5f25-e718-4413-a9bb-ade0148bece5" containerType="regular" prevTag="motion.div" initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.2
                    }} className="inline-block px-5 py-2 bg-[#c2f12d]/20 backdrop-blur-xl rounded-full mb-6 border border-[#c2f12d]/30" data-magicpath-id="73" data-magicpath-path="PricingSection.tsx">
                        <span className="text-sm font-bold text-[#c2f12d]" data-magicpath-id="74" data-magicpath-path="PricingSection.tsx">
                          AI-Supercharged MVP
                        </span>
                      </SortableContainer>

                      <SortableContainer dndKitId="d5d2b664-6f1f-40af-83a8-300a4e184fd0" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-base text-slate-300 mb-6" data-magicpath-id="75" data-magicpath-path="PricingSection.tsx">
                        <SortableContainer dndKitId="f3c0d206-1fc0-4909-9e86-84707396465a" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                        x: -20,
                        opacity: 0
                      }} animate={{
                        x: 0,
                        opacity: 1
                      }} transition={{
                        delay: 0.1
                      }} data-magicpath-id="76" data-magicpath-path="PricingSection.tsx">
                          <Users className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="77" data-magicpath-path="PricingSection.tsx" />
                          <span className="font-semibold" data-magicpath-id="78" data-magicpath-path="PricingSection.tsx">
                            {teamSize} Dev{teamSize > 1 ? 's' : ''}
                          </span>
                        </SortableContainer>
                        
                        <div className="w-2 h-2 rounded-full bg-slate-500" data-magicpath-id="79" data-magicpath-path="PricingSection.tsx" />
                        
                        <SortableContainer dndKitId="7a84f9b4-10cf-41b5-a2f8-1c6fa990ea8f" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                        x: 20,
                        opacity: 0
                      }} animate={{
                        x: 0,
                        opacity: 1
                      }} transition={{
                        delay: 0.2
                      }} data-magicpath-id="80" data-magicpath-path="PricingSection.tsx">
                          <Clock className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="81" data-magicpath-path="PricingSection.tsx" />
                          <span className="font-semibold" data-magicpath-id="82" data-magicpath-path="PricingSection.tsx">{getDuration()} weeks</span>
                        </SortableContainer>
                      </SortableContainer>

                      <motion.p data-magicpath-motion-tag="motion.p" className="text-sm text-slate-400" initial={{
                      opacity: 0
                    }} animate={{
                      opacity: 1
                    }} transition={{
                      delay: 0.3
                    }} data-magicpath-id="83" data-magicpath-path="PricingSection.tsx">
                        ₱120,000 per developer per 2-week sprint
                      </motion.p>
                    </SortableContainer>
                  </SortableContainer>
                </AnimatePresence>

                {/* What's Included */}
                <SortableContainer dndKitId="c59d4e5f-4b55-4954-8ae6-a17386415851" containerType="regular" prevTag="motion.div" className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 shadow-lg" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
                once: true
              }} data-magicpath-id="84" data-magicpath-path="PricingSection.tsx">
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2" data-magicpath-id="85" data-magicpath-path="PricingSection.tsx">
                    <CheckCircle2 className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="86" data-magicpath-path="PricingSection.tsx" />
                    Full-Stack Package Includes:
                  </h4>
                  <SortableContainer dndKitId="2d5abe3d-1a4c-4d77-b434-8674e53248c8" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="87" data-magicpath-path="PricingSection.tsx">
                    {fullStackIncludes.map((feature, i) => <motion.div data-magicpath-motion-tag="motion.div" key={feature} variants={itemVariants} className="flex items-start space-x-3 group" whileHover={{
                    x: 4
                  }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="PricingSection.tsx">
                        <div className="p-1 bg-[#c2f12d]/10 rounded-lg group-hover:bg-[#c2f12d]/20 transition-colors" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="PricingSection.tsx">
                          <CheckCircle2 className="w-5 h-5 text-[#c2f12d] flex-shrink-0" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="PricingSection.tsx" />
                        </div>
                        <p className="text-sm text-slate-700 font-semibold pt-1" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="PricingSection.tsx">{feature}</p>
                      </motion.div>)}
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="76f22991-b911-4b3c-bf68-35642a641e33" containerType="regular" prevTag="div" className="relative z-10 mt-12 flex flex-col sm:flex-row gap-5" data-magicpath-id="92" data-magicpath-path="PricingSection.tsx">
              <MagneticButton className="flex-1 px-10 py-5 bg-gradient-to-r from-[#c2f12d] to-emerald-400 hover:from-[#b0dc28] hover:to-emerald-500 text-[#252525] rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-[#c2f12d]/40 flex items-center justify-center gap-3 group" onClick={onGetQuote} data-magicpath-id="93" data-magicpath-path="PricingSection.tsx">
                Get Detailed Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" data-magicpath-id="94" data-magicpath-path="PricingSection.tsx" />
              </MagneticButton>
              <MagneticButton className="flex-1 px-10 py-5 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group" onClick={onBookCall} data-magicpath-id="95" data-magicpath-path="PricingSection.tsx">
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" data-magicpath-id="96" data-magicpath-path="PricingSection.tsx" />
                Schedule Consultation
              </MagneticButton>
            </SortableContainer>

            {/* Footer Note */}
            <motion.p data-magicpath-motion-tag="motion.p" className="relative z-10 text-center text-base text-slate-600 mt-8 font-medium" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5
          }} data-magicpath-id="97" data-magicpath-path="PricingSection.tsx">
              💡 Don't know where to start? Let's talk — we'll help shape your MVP roadmap and define the scope.
            </motion.p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};