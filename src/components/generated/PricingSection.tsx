"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Users, Clock, Sparkles, Info, ArrowRight, Calendar } from 'lucide-react';
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
  const calculatePrice = () => {
    const total = teamSize * sprints * PRICING_CONFIG.RATE_PER_DEV_PER_SPRINT;
    return total.toLocaleString();
  };
  const getDuration = () => sprints * 2;
  const fullStackIncludes = ['Full-Stack Development', 'Project Management', 'Quality Assurance (QA)', 'UI/UX Design', 'AI-Assisted Workflow', 'Architecture & Scalability'];
  return <SortableContainer dndKitId="733dfe95-95d6-4e4e-874f-a83951771718" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="0" data-magicpath-path="PricingSection.tsx">
      <SortableContainer dndKitId="96a0c826-3775-4762-986b-9b1fef058d0d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="PricingSection.tsx">
        {/* Section Header */}
        <SortableContainer dndKitId="8bda56dd-35c1-4952-beaf-b4d36e32ca11" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16" data-magicpath-id="2" data-magicpath-path="PricingSection.tsx">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
          color: '#252525'
        }} data-magicpath-id="3" data-magicpath-path="PricingSection.tsx">
            Fair. Transparent.{' '}
            <span className="text-[#c2f12d]" data-magicpath-id="4" data-magicpath-path="PricingSection.tsx">Predictable.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6" data-magicpath-id="5" data-magicpath-path="PricingSection.tsx">
            Estimate your AI-enhanced MVP development cost instantly — no hidden fees, no guesswork.
          </p>

          {/* AI Workflow Tooltip */}
          <SortableContainer dndKitId="4d35840c-ab55-4b39-b500-926c615bedf4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#c2f12d]/10 to-emerald-500/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full" data-magicpath-id="6" data-magicpath-path="PricingSection.tsx">
            <Sparkles className="w-5 h-5 text-[#c2f12d]" />
            <span className="text-sm font-medium text-slate-700" data-magicpath-id="7" data-magicpath-path="PricingSection.tsx">
              Every project is full-stack with built-in project management, QA, and UI/UX design
            </span>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="a4905387-c6fd-413e-901c-cde24c37c8c6" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="relative p-10 bg-white/90 backdrop-blur-2xl rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="8" data-magicpath-path="PricingSection.tsx">
          {/* Gradient Top Bar */}
          <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#c2f12d] via-emerald-400 to-[#c2f12d]" initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1,
          ease: 'easeOut'
        }} style={{
          transformOrigin: 'left'
        }} data-magicpath-id="9" data-magicpath-path="PricingSection.tsx" />

          {/* Header with AI Badge */}
          <SortableContainer dndKitId="4af0fee2-fa9f-40f1-9d65-ba728bb125a3" containerType="regular" prevTag="div" className="flex items-center justify-between mb-10" data-magicpath-id="10" data-magicpath-path="PricingSection.tsx">
            <h3 className="text-3xl font-bold text-slate-900" data-magicpath-id="11" data-magicpath-path="PricingSection.tsx">Interactive Estimator</h3>
            <SortableContainer dndKitId="06c2360b-fd69-4108-905d-c0830b958f19" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} className="group relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#c2f12d]/20 to-emerald-500/20 rounded-full cursor-help" data-magicpath-id="12" data-magicpath-path="PricingSection.tsx">
              <Sparkles className="w-5 h-5 text-[#c2f12d]" />
              <span className="text-sm font-bold text-slate-900" data-magicpath-id="13" data-magicpath-path="PricingSection.tsx">AI-Supercharged MVP</span>
              
              {/* Tooltip */}
              <SortableContainer dndKitId="03af7e04-81ae-48e4-863c-89bd9c37ac74" containerType="regular" prevTag="div" className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-72 p-4 bg-slate-900 text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 shadow-2xl" data-magicpath-id="14" data-magicpath-path="PricingSection.tsx">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-slate-900" data-magicpath-id="15" data-magicpath-path="PricingSection.tsx"></div>
                Our AI-assisted workflow accelerates delivery while ensuring quality and scalability. You get faster builds without compromising on engineering excellence.
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="a6dce9e6-c201-48f1-a110-0aad25e0635b" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-10" data-magicpath-id="16" data-magicpath-path="PricingSection.tsx">
            {/* LEFT: Interactive Inputs */}
            <SortableContainer dndKitId="cfbcc750-152e-4ebe-9510-683c30735a0b" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="17" data-magicpath-path="PricingSection.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="5045817c-c0ab-4f16-acaa-488e6b05daa8" containerType="regular" prevTag="div" data-magicpath-id="18" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="76177c7e-9f13-4949-a194-e3f46f425bbd" containerType="regular" prevTag="div" className="flex justify-between items-center mb-5" data-magicpath-id="19" data-magicpath-path="PricingSection.tsx">
                  <label className="text-lg font-bold text-slate-800 flex items-center gap-2" data-magicpath-id="20" data-magicpath-path="PricingSection.tsx">
                    <Users className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="21" data-magicpath-path="PricingSection.tsx" />
                    Team Size
                  </label>
                  <AnimatePresence mode="wait" data-magicpath-id="22" data-magicpath-path="PricingSection.tsx">
                    <motion.span data-magicpath-motion-tag="motion.span" key={teamSize} initial={{
                    scale: 1.5,
                    color: '#c2f12d',
                    y: -10
                  }} animate={{
                    scale: 1,
                    color: '#252525',
                    y: 0
                  }} exit={{
                    scale: 0.5,
                    opacity: 0
                  }} transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }} className="text-3xl font-bold" data-magicpath-id="23" data-magicpath-path="PricingSection.tsx">
                      {teamSize}
                    </motion.span>
                  </AnimatePresence>
                </SortableContainer>

                {/* Team Size Buttons */}
                <div className="space-y-3" data-magicpath-id="24" data-magicpath-path="PricingSection.tsx">
                  {[1, 2, 3, 4, 5].map(size => <SortableContainer dndKitId="f7449f33-d310-4b16-9ed4-cb8154a1422a" containerType="regular" prevTag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.02,
                  x: 4
                }} whileTap={{
                  scale: 0.98
                }} className={`w-full py-4 px-5 rounded-xl font-semibold text-left transition-all duration-300 ${teamSize === size ? 'bg-gradient-to-r from-[#c2f12d] to-emerald-400 text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="25" data-magicpath-path="PricingSection.tsx">
                      <SortableContainer dndKitId="78241d78-e7dd-4d33-a891-7d1c4ea6a7a8" containerType="regular" prevTag="motion.div" animate={teamSize === size ? {
                    scale: [1, 1.05, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} className="flex items-center justify-between" data-magicpath-id="26" data-magicpath-path="PricingSection.tsx">
                        <SortableContainer dndKitId="9f28fe54-4ece-4c84-b4fc-811057c6c2fe" containerType="regular" prevTag="div" data-magicpath-id="27" data-magicpath-path="PricingSection.tsx">
                          <div className="text-base font-bold" data-magicpath-id="28" data-magicpath-path="PricingSection.tsx">
                            {size} Full-Stack Developer{size > 1 ? 's' : ''}
                          </div>
                          <div className={`text-xs mt-1 ${teamSize === size ? 'text-[#252525]/70' : 'text-slate-500'}`} data-magicpath-id="29" data-magicpath-path="PricingSection.tsx">
                            Includes PM, QA, UI/UX
                          </div>
                        </SortableContainer>
                        {teamSize === size && <SortableContainer dndKitId="189c575b-4f69-4bf4-9907-e8bfef96b959" containerType="regular" prevTag="motion.div" initial={{
                      scale: 0
                    }} animate={{
                      scale: 1
                    }} transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 25
                    }} data-magicpath-id="30" data-magicpath-path="PricingSection.tsx">
                            <CheckCircle2 className="w-6 h-6 text-[#252525]" data-magicpath-id="31" data-magicpath-path="PricingSection.tsx" />
                          </SortableContainer>}
                      </SortableContainer>
                    </SortableContainer>)}
                </div>
              </SortableContainer>

              {/* Duration Selector */}
              <SortableContainer dndKitId="8818fd49-1853-41f9-9e30-319d59fb6da4" containerType="regular" prevTag="div" data-magicpath-id="32" data-magicpath-path="PricingSection.tsx">
                <label className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2" data-magicpath-id="33" data-magicpath-path="PricingSection.tsx">
                  <Clock className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="34" data-magicpath-path="PricingSection.tsx" />
                  Project Duration
                </label>
                <div className="grid grid-cols-3 gap-3 mt-5" data-magicpath-id="35" data-magicpath-path="PricingSection.tsx">
                  {PRICING_CONFIG.SPRINT_OPTIONS.map(option => <SortableContainer dndKitId="678e3004-d109-491a-9327-ac431ff40a4a" containerType="regular" prevTag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05,
                  y: -4
                }} whileTap={{
                  scale: 0.95
                }} className={`py-5 px-4 rounded-xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-gradient-to-br from-[#c2f12d] to-emerald-400 text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="36" data-magicpath-path="PricingSection.tsx">
                      <SortableContainer dndKitId="390a4f50-ee3e-4f24-8ac0-664edfdd2048" containerType="regular" prevTag="motion.div" animate={sprints === option.value ? {
                    scale: [1, 1.08, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} data-magicpath-id="37" data-magicpath-path="PricingSection.tsx">
                        <div className="text-base font-bold mb-1" data-magicpath-id="38" data-magicpath-path="PricingSection.tsx">{option.label}</div>
                        <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/70' : 'text-slate-500'}`} data-magicpath-id="39" data-magicpath-path="PricingSection.tsx">
                          {option.desc}
                        </div>
                      </SortableContainer>
                    </SortableContainer>)}
                </div>
              </SortableContainer>
            </SortableContainer>

            {/* RIGHT: Price Display & Details */}
            <SortableContainer dndKitId="a9a993c0-f112-4658-af7c-fe9eab1598c6" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="40" data-magicpath-path="PricingSection.tsx">
              {/* Price Card */}
              <AnimatePresence mode="wait" data-magicpath-id="41" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="6a093d4a-39bf-4dff-ab46-3e0a8209e2a1" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
                scale: 0.9,
                opacity: 0,
                y: 20
              }} animate={{
                scale: 1,
                opacity: 1,
                y: 0
              }} exit={{
                scale: 0.9,
                opacity: 0,
                y: -20
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25
              }} className="relative text-center p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl" data-magicpath-id="42" data-magicpath-path="PricingSection.tsx">
                  {/* Animated Background */}
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/20 via-transparent to-emerald-500/20" animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }} data-magicpath-id="43" data-magicpath-path="PricingSection.tsx" />

                  <SortableContainer dndKitId="b3bb6db9-5124-4ee6-8969-0f3ff3d663e9" containerType="regular" prevTag="div" className="relative z-10" data-magicpath-id="44" data-magicpath-path="PricingSection.tsx">
                    <SortableContainer dndKitId="eac4f2cf-da55-4405-af3a-1155b7e7f2a6" containerType="regular" prevTag="div" className="flex items-center justify-center gap-2 mb-3" data-magicpath-id="45" data-magicpath-path="PricingSection.tsx">
                      <Sparkles className="w-5 h-5 text-[#c2f12d]" />
                      <p className="text-xs text-slate-300 uppercase tracking-wider font-bold" data-magicpath-id="46" data-magicpath-path="PricingSection.tsx">
                        Estimated Cost
                      </p>
                    </SortableContainer>
                    
                    <motion.p data-magicpath-motion-tag="motion.p" className="text-6xl font-bold text-[#c2f12d] mb-4" initial={{
                    scale: 1.3
                  }} animate={{
                    scale: 1
                  }} transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }} data-magicpath-id="47" data-magicpath-path="PricingSection.tsx">
                      ₱{calculatePrice()}
                    </motion.p>

                    <SortableContainer dndKitId="25b1c8a6-50a4-4d39-b219-be5d165a09d8" containerType="regular" prevTag="motion.div" initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 0.2
                  }} className="inline-block px-4 py-2 bg-[#c2f12d]/20 backdrop-blur-xl rounded-full mb-4" data-magicpath-id="48" data-magicpath-path="PricingSection.tsx">
                      <span className="text-sm font-semibold text-[#c2f12d]" data-magicpath-id="49" data-magicpath-path="PricingSection.tsx">
                        AI-Supercharged MVP
                      </span>
                    </SortableContainer>

                    <SortableContainer dndKitId="80f236c2-d820-4ed1-b26b-94594492f990" containerType="regular" prevTag="div" className="flex items-center justify-center gap-5 text-sm text-slate-300 mb-4" data-magicpath-id="50" data-magicpath-path="PricingSection.tsx">
                      <SortableContainer dndKitId="7273b655-e2c0-4700-900b-eed183cca6c5" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                      x: -20,
                      opacity: 0
                    }} animate={{
                      x: 0,
                      opacity: 1
                    }} transition={{
                      delay: 0.1
                    }} data-magicpath-id="51" data-magicpath-path="PricingSection.tsx">
                        <Users className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="52" data-magicpath-path="PricingSection.tsx" />
                        <span className="font-medium" data-magicpath-id="53" data-magicpath-path="PricingSection.tsx">
                          {teamSize} Developer{teamSize > 1 ? 's' : ''}
                        </span>
                      </SortableContainer>
                      
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500" data-magicpath-id="54" data-magicpath-path="PricingSection.tsx" />
                      
                      <SortableContainer dndKitId="365d7ceb-141e-4926-99f9-b7c96a50587b" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                      x: 20,
                      opacity: 0
                    }} animate={{
                      x: 0,
                      opacity: 1
                    }} transition={{
                      delay: 0.2
                    }} data-magicpath-id="55" data-magicpath-path="PricingSection.tsx">
                        <Clock className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="56" data-magicpath-path="PricingSection.tsx" />
                        <span className="font-medium" data-magicpath-id="57" data-magicpath-path="PricingSection.tsx">{getDuration()} weeks</span>
                      </SortableContainer>
                    </SortableContainer>

                    <motion.p data-magicpath-motion-tag="motion.p" className="text-xs text-slate-400" initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 0.3
                  }} data-magicpath-id="58" data-magicpath-path="PricingSection.tsx">
                      ₱120,000 per developer per 2-week sprint
                    </motion.p>
                  </SortableContainer>
                </SortableContainer>
              </AnimatePresence>

              {/* What's Included */}
              <SortableContainer dndKitId="da7fa4b4-91a4-443b-85b5-8a46c32bf16a" containerType="regular" prevTag="motion.div" className="p-6 bg-slate-50 rounded-2xl border border-slate-200" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} data-magicpath-id="59" data-magicpath-path="PricingSection.tsx">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4" data-magicpath-id="60" data-magicpath-path="PricingSection.tsx">
                  Full-Stack Package Includes:
                </h4>
                <SortableContainer dndKitId="23b86bea-a499-4ce7-a377-1f9bb4748c22" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="61" data-magicpath-path="PricingSection.tsx">
                  {fullStackIncludes.map((feature, i) => <motion.div data-magicpath-motion-tag="motion.div" key={feature} variants={itemVariants} className="flex items-start space-x-3" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="PricingSection.tsx">
                      <CheckCircle2 className="w-5 h-5 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="PricingSection.tsx" />
                      <p className="text-sm text-slate-700 font-medium" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="PricingSection.tsx">{feature}</p>
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* CTA Buttons */}
          <SortableContainer dndKitId="5cd9d350-8569-4b37-8f13-daa13d3b9692" containerType="regular" prevTag="div" className="mt-10 flex flex-col sm:flex-row gap-4" data-magicpath-id="65" data-magicpath-path="PricingSection.tsx">
            <MagneticButton className="flex-1 px-8 py-4 bg-gradient-to-r from-[#c2f12d] to-emerald-400 hover:from-[#b0dc28] hover:to-emerald-500 text-[#252525] rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-[#c2f12d]/30 flex items-center justify-center gap-2" onClick={onGetQuote} data-magicpath-id="66" data-magicpath-path="PricingSection.tsx">
              Get Detailed Quote
              <ArrowRight className="w-5 h-5" data-magicpath-id="67" data-magicpath-path="PricingSection.tsx" />
            </MagneticButton>
            <MagneticButton className="flex-1 px-8 py-4 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2" onClick={onBookCall} data-magicpath-id="68" data-magicpath-path="PricingSection.tsx">
              <Calendar className="w-5 h-5" data-magicpath-id="69" data-magicpath-path="PricingSection.tsx" />
              Schedule Consultation
            </MagneticButton>
          </SortableContainer>

          {/* Footer Note */}
          <motion.p data-magicpath-motion-tag="motion.p" className="text-center text-sm text-slate-500 mt-6" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.5
        }} data-magicpath-id="70" data-magicpath-path="PricingSection.tsx">
            Don't know where to start? Let's talk — we'll help shape your MVP roadmap and define the scope.
          </motion.p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};