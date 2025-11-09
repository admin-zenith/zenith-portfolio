"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Users, Clock, Sparkles, Info } from 'lucide-react';
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
  const features = ['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'];
  return <SortableContainer dndKitId="9b22526c-68ec-4e2b-895d-fb5fc327e53f" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="0" data-magicpath-path="PricingSection.tsx">
      <SortableContainer dndKitId="8c160780-59c5-465e-81d0-e57aade00d35" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="1" data-magicpath-path="PricingSection.tsx">
        <SortableContainer dndKitId="317d8530-7cee-4b2f-b87e-e9aed4980ee7" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12" data-magicpath-id="2" data-magicpath-path="PricingSection.tsx">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{
          color: '#252525'
        }} data-magicpath-id="3" data-magicpath-path="PricingSection.tsx">
            Transparent <span className="text-[#c2f12d]" data-magicpath-id="4" data-magicpath-path="PricingSection.tsx">pricing</span>
          </h2>
          <p className="text-lg text-slate-600" data-magicpath-id="5" data-magicpath-path="PricingSection.tsx">Simple, predictable pricing with no hidden costs</p>
          
          {/* AI Workflow Note */}
          <SortableContainer dndKitId="be70a7e6-522a-44be-ae64-b1d25077592c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-[#c2f12d]/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full" data-magicpath-id="6" data-magicpath-path="PricingSection.tsx">
            <Sparkles className="w-4 h-4 text-[#c2f12d]" />
            <span className="text-sm font-medium text-slate-700" data-magicpath-id="7" data-magicpath-path="PricingSection.tsx">
              AI-assisted workflow lets us deliver faster, reducing time and cost
            </span>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="7152318c-7ee9-4be1-b1b7-5680df146f25" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="relative p-8 bg-white/80 backdrop-blur-2xl rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="8" data-magicpath-path="PricingSection.tsx">
          {/* Gradient Top Bar */}
          <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-0 left-0 right-0 h-1.5 bg-[#c2f12d]" initial={{
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

          <SortableContainer dndKitId="bf27cab6-1c08-4043-b478-10337bab08d2" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="10" data-magicpath-path="PricingSection.tsx">
            <h3 className="text-2xl font-bold text-slate-900" data-magicpath-id="11" data-magicpath-path="PricingSection.tsx">Quick Estimator</h3>
            <SortableContainer dndKitId="47cd7d3e-7947-4653-bc2a-611830c59f82" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} className="flex items-center space-x-2 px-3 py-1.5 bg-[#c2f12d]/10 rounded-full cursor-help" title="Our AI-powered workflow accelerates development without compromising quality" data-magicpath-id="12" data-magicpath-path="PricingSection.tsx">
              <Info className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="13" data-magicpath-path="PricingSection.tsx" />
              <span className="text-xs font-semibold text-slate-700" data-magicpath-id="14" data-magicpath-path="PricingSection.tsx">AI-Powered</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="4637b7ad-4bed-4605-be62-9d488ad59572" containerType="regular" prevTag="div" className="space-y-6 mb-8" data-magicpath-id="15" data-magicpath-path="PricingSection.tsx">
            {/* Team Size */}
            <SortableContainer dndKitId="671113fc-63e2-41ca-8f11-c511d597cfff" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="PricingSection.tsx">
              <SortableContainer dndKitId="42b470af-ac6f-4b92-b3db-132e1490de98" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="17" data-magicpath-path="PricingSection.tsx">
                <label className="text-base font-semibold text-slate-700" data-magicpath-id="18" data-magicpath-path="PricingSection.tsx">Developers</label>
                <AnimatePresence mode="wait" data-magicpath-id="19" data-magicpath-path="PricingSection.tsx">
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
                }} className="text-2xl font-bold" data-magicpath-id="20" data-magicpath-path="PricingSection.tsx">
                    {teamSize}
                  </motion.span>
                </AnimatePresence>
              </SortableContainer>
              <div className="grid grid-cols-5 gap-3" data-magicpath-id="21" data-magicpath-path="PricingSection.tsx">
                {[1, 2, 3, 4, 5].map(size => <SortableContainer dndKitId="ffe2f3ef-af00-478e-a0c7-998dca1ef29e" containerType="regular" prevTag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                scale: 1.08,
                y: -4
              }} whileTap={{
                scale: 0.95
              }} className={`py-3 rounded-xl font-bold text-lg transition-all duration-300 ${teamSize === size ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="22" data-magicpath-path="PricingSection.tsx">
                    <motion.span data-magicpath-motion-tag="motion.span" animate={teamSize === size ? {
                  scale: [1, 1.2, 1]
                } : {}} transition={{
                  duration: 0.3
                }} data-magicpath-id="23" data-magicpath-path="PricingSection.tsx">
                      {size}
                    </motion.span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>

            {/* Sprints */}
            <SortableContainer dndKitId="6e5ba6e5-1fba-4a40-8c70-41101641b926" containerType="regular" prevTag="div" data-magicpath-id="24" data-magicpath-path="PricingSection.tsx">
              <label className="text-base font-semibold text-slate-700 mb-4 block" data-magicpath-id="25" data-magicpath-path="PricingSection.tsx">Duration</label>
              <div className="grid grid-cols-3 gap-3" data-magicpath-id="26" data-magicpath-path="PricingSection.tsx">
                {PRICING_CONFIG.SPRINT_OPTIONS.map(option => <SortableContainer dndKitId="22ddfddc-09ed-4de3-95d9-2fd5d4eb5bce" containerType="regular" prevTag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                scale: 1.05,
                y: -4
              }} whileTap={{
                scale: 0.95
              }} className={`py-4 px-3 rounded-xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="27" data-magicpath-path="PricingSection.tsx">
                    <SortableContainer dndKitId="ec353f46-26b9-4115-9f43-93d13cd12e51" containerType="regular" prevTag="motion.div" animate={sprints === option.value ? {
                  scale: [1, 1.1, 1]
                } : {}} transition={{
                  duration: 0.3
                }} data-magicpath-id="28" data-magicpath-path="PricingSection.tsx">
                      <div className="text-base mb-0.5" data-magicpath-id="29" data-magicpath-path="PricingSection.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/80' : 'text-slate-500'}`} data-magicpath-id="30" data-magicpath-path="PricingSection.tsx">
                        {option.desc}
                      </div>
                    </SortableContainer>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Price Display */}
          <AnimatePresence mode="wait" data-magicpath-id="31" data-magicpath-path="PricingSection.tsx">
            <SortableContainer dndKitId="c139c6fc-2b58-4baf-b34a-356bba8a2cc0" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
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
          }} className="relative text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl mb-6 border border-slate-200 overflow-hidden" data-magicpath-id="32" data-magicpath-path="PricingSection.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/10" animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} data-magicpath-id="33" data-magicpath-path="PricingSection.tsx" />
              <p className="relative text-xs text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="34" data-magicpath-path="PricingSection.tsx">
                Total Investment
              </p>
              <motion.p data-magicpath-motion-tag="motion.p" className="relative text-4xl font-bold text-[#c2f12d] mb-4" initial={{
              scale: 1.2
            }} animate={{
              scale: 1
            }} transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15
            }} data-magicpath-id="35" data-magicpath-path="PricingSection.tsx">
                ₱{calculatePrice()}
              </motion.p>
              <SortableContainer dndKitId="b08e6221-0f6c-41f1-b9a9-0a6254aa042a" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-4 text-sm text-slate-600" data-magicpath-id="36" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="61a420d8-a603-412e-8cca-ab818904b048" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                x: -20,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                delay: 0.1
              }} data-magicpath-id="37" data-magicpath-path="PricingSection.tsx">
                  <Users className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="38" data-magicpath-path="PricingSection.tsx" />
                  <span className="font-medium" data-magicpath-id="39" data-magicpath-path="PricingSection.tsx">
                    {teamSize} Developer{teamSize > 1 ? 's' : ''}
                  </span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="40" data-magicpath-path="PricingSection.tsx" />
                <SortableContainer dndKitId="7413f3d5-8f42-41b5-b0cb-fa640d321e35" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                x: 20,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                delay: 0.2
              }} data-magicpath-id="41" data-magicpath-path="PricingSection.tsx">
                  <Clock className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="42" data-magicpath-path="PricingSection.tsx" />
                  <span className="font-medium" data-magicpath-id="43" data-magicpath-path="PricingSection.tsx">{getDuration()} weeks</span>
                </SortableContainer>
              </SortableContainer>
              <motion.p data-magicpath-motion-tag="motion.p" className="relative text-xs text-slate-500 mt-3" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3
            }} data-magicpath-id="44" data-magicpath-path="PricingSection.tsx">
                ₱120,000 per developer per 2-week sprint
              </motion.p>
            </SortableContainer>
          </AnimatePresence>

          {/* Features */}
          <SortableContainer dndKitId="b7b771de-8ce1-409d-aed1-af26d178f767" containerType="collection" prevTag="motion.div" className="space-y-3 mb-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} data-magicpath-id="45" data-magicpath-path="PricingSection.tsx">
            {features.map((feature, i) => <motion.div data-magicpath-motion-tag="motion.div" key={feature} variants={itemVariants} className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="PricingSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.3
            }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="PricingSection.tsx">
                  <CheckCircle2 className="w-5 h-5 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="PricingSection.tsx" />
                </motion.div>
                <p className="text-sm text-slate-700" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="PricingSection.tsx">{feature}</p>
              </motion.div>)}
          </SortableContainer>

          {/* CTA Buttons */}
          <SortableContainer dndKitId="be6a73d1-980d-4c6f-b41b-fbe6b858e4ca" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-3" data-magicpath-id="50" data-magicpath-path="PricingSection.tsx">
            <MagneticButton className="flex-1 px-6 py-3.5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#c2f12d]/30" onClick={onGetQuote} data-magicpath-id="51" data-magicpath-path="PricingSection.tsx">
              Get Detailed Quote
            </MagneticButton>
            <MagneticButton className="flex-1 px-6 py-3.5 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-xl font-bold transition-all duration-300" onClick={onBookCall} data-magicpath-id="52" data-magicpath-path="PricingSection.tsx">
              Book Consultation
            </MagneticButton>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};