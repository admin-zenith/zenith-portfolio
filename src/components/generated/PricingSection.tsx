"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Users, Clock } from 'lucide-react';
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
  return <SortableContainer dndKitId="90709419-b956-4ab1-8244-7e07f0cf626c" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="0" data-magicpath-path="PricingSection.tsx">
      <SortableContainer dndKitId="5f6c8dee-fda3-4cd1-9d98-025853e30f6e" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="1" data-magicpath-path="PricingSection.tsx">
        <SortableContainer dndKitId="82f6d3bb-fd1f-4cc7-a771-7d7ecb5e3c76" containerType="regular" prevTag="motion.div" initial={{
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
        </SortableContainer>

        <SortableContainer dndKitId="ffd05202-0f3d-4abe-b5cb-ae9b61d2014f" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="relative p-8 bg-white/80 backdrop-blur-2xl rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="6" data-magicpath-path="PricingSection.tsx">
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
        }} data-magicpath-id="7" data-magicpath-path="PricingSection.tsx" />

          <h3 className="text-2xl font-bold mb-8 text-slate-900" data-magicpath-id="8" data-magicpath-path="PricingSection.tsx">Quick Estimator</h3>

          <SortableContainer dndKitId="209bcfeb-54eb-46d4-8334-5fa554fbdf23" containerType="regular" prevTag="div" className="space-y-6 mb-8" data-magicpath-id="9" data-magicpath-path="PricingSection.tsx">
            {/* Team Size */}
            <SortableContainer dndKitId="0ca4a23d-7f3e-4ecd-b17b-67fa45438f00" containerType="regular" prevTag="div" data-magicpath-id="10" data-magicpath-path="PricingSection.tsx">
              <SortableContainer dndKitId="ec9f4722-10d9-467e-b8cd-d97c0e47c4e2" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="11" data-magicpath-path="PricingSection.tsx">
                <label className="text-base font-semibold text-slate-700" data-magicpath-id="12" data-magicpath-path="PricingSection.tsx">Developers</label>
                <AnimatePresence mode="wait" data-magicpath-id="13" data-magicpath-path="PricingSection.tsx">
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
                }} className="text-2xl font-bold" data-magicpath-id="14" data-magicpath-path="PricingSection.tsx">
                    {teamSize}
                  </motion.span>
                </AnimatePresence>
              </SortableContainer>
              <div className="grid grid-cols-5 gap-3" data-magicpath-id="15" data-magicpath-path="PricingSection.tsx">
                {[1, 2, 3, 4, 5].map(size => <SortableContainer dndKitId="5dd8e6e3-83cb-4079-9e01-0742f257b7cc" containerType="regular" prevTag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                scale: 1.08,
                y: -4
              }} whileTap={{
                scale: 0.95
              }} className={`py-3 rounded-xl font-bold text-lg transition-all duration-300 ${teamSize === size ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="16" data-magicpath-path="PricingSection.tsx">
                    <motion.span data-magicpath-motion-tag="motion.span" animate={teamSize === size ? {
                  scale: [1, 1.2, 1]
                } : {}} transition={{
                  duration: 0.3
                }} data-magicpath-id="17" data-magicpath-path="PricingSection.tsx">
                      {size}
                    </motion.span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>

            {/* Sprints */}
            <SortableContainer dndKitId="fe307e8c-3845-427d-a84b-a84fc86da246" containerType="regular" prevTag="div" data-magicpath-id="18" data-magicpath-path="PricingSection.tsx">
              <label className="text-base font-semibold text-slate-700 mb-4 block" data-magicpath-id="19" data-magicpath-path="PricingSection.tsx">Duration</label>
              <div className="grid grid-cols-3 gap-3" data-magicpath-id="20" data-magicpath-path="PricingSection.tsx">
                {PRICING_CONFIG.SPRINT_OPTIONS.map(option => <SortableContainer dndKitId="dd07e116-e2af-42c3-a081-3549412fa4b8" containerType="regular" prevTag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                scale: 1.05,
                y: -4
              }} whileTap={{
                scale: 0.95
              }} className={`py-4 px-3 rounded-xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="21" data-magicpath-path="PricingSection.tsx">
                    <SortableContainer dndKitId="594bee07-1045-4298-8c6b-af22da33650e" containerType="regular" prevTag="motion.div" animate={sprints === option.value ? {
                  scale: [1, 1.1, 1]
                } : {}} transition={{
                  duration: 0.3
                }} data-magicpath-id="22" data-magicpath-path="PricingSection.tsx">
                      <div className="text-base mb-0.5" data-magicpath-id="23" data-magicpath-path="PricingSection.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/80' : 'text-slate-500'}`} data-magicpath-id="24" data-magicpath-path="PricingSection.tsx">
                        {option.desc}
                      </div>
                    </SortableContainer>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Price Display */}
          <AnimatePresence mode="wait" data-magicpath-id="25" data-magicpath-path="PricingSection.tsx">
            <SortableContainer dndKitId="c39ba54b-89d7-4d16-9ae6-f09596cd3a3a" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
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
          }} className="relative text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl mb-6 border border-slate-200 overflow-hidden" data-magicpath-id="26" data-magicpath-path="PricingSection.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/10" animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} data-magicpath-id="27" data-magicpath-path="PricingSection.tsx" />
              <p className="relative text-xs text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="28" data-magicpath-path="PricingSection.tsx">
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
            }} data-magicpath-id="29" data-magicpath-path="PricingSection.tsx">
                ₱{calculatePrice()}
              </motion.p>
              <SortableContainer dndKitId="ed5451df-482a-4c9a-8685-22f5a3bf9493" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-4 text-sm text-slate-600" data-magicpath-id="30" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="2b91b9ff-3e9a-4289-9de5-669200500975" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                x: -20,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                delay: 0.1
              }} data-magicpath-id="31" data-magicpath-path="PricingSection.tsx">
                  <Users className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="32" data-magicpath-path="PricingSection.tsx" />
                  <span className="font-medium" data-magicpath-id="33" data-magicpath-path="PricingSection.tsx">
                    {teamSize} Developer{teamSize > 1 ? 's' : ''}
                  </span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="34" data-magicpath-path="PricingSection.tsx" />
                <SortableContainer dndKitId="0dd23cb4-6352-4fb1-8568-9d7f5dd62585" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                x: 20,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                delay: 0.2
              }} data-magicpath-id="35" data-magicpath-path="PricingSection.tsx">
                  <Clock className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="36" data-magicpath-path="PricingSection.tsx" />
                  <span className="font-medium" data-magicpath-id="37" data-magicpath-path="PricingSection.tsx">{getDuration()} weeks</span>
                </SortableContainer>
              </SortableContainer>
              <motion.p data-magicpath-motion-tag="motion.p" className="relative text-xs text-slate-500 mt-3" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3
            }} data-magicpath-id="38" data-magicpath-path="PricingSection.tsx">
                ₱120,000 per developer per sprint
              </motion.p>
            </SortableContainer>
          </AnimatePresence>

          {/* Features */}
          <SortableContainer dndKitId="cb19a566-6ce0-4a08-9d3d-7b1d6f7da665" containerType="collection" prevTag="motion.div" className="space-y-3 mb-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} data-magicpath-id="39" data-magicpath-path="PricingSection.tsx">
            {features.map((feature, i) => <motion.div data-magicpath-motion-tag="motion.div" key={feature} variants={itemVariants} className="flex items-start space-x-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="PricingSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.3
            }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="PricingSection.tsx">
                  <CheckCircle2 className="w-5 h-5 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="PricingSection.tsx" />
                </motion.div>
                <p className="text-sm text-slate-700" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="PricingSection.tsx">{feature}</p>
              </motion.div>)}
          </SortableContainer>

          {/* CTA Buttons */}
          <SortableContainer dndKitId="a8ae74c2-b1be-4ac5-8c9e-38ee07ea60c3" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-3" data-magicpath-id="44" data-magicpath-path="PricingSection.tsx">
            <MagneticButton className="flex-1 px-6 py-3.5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#c2f12d]/30" onClick={onGetQuote} data-magicpath-id="45" data-magicpath-path="PricingSection.tsx">
              Get Detailed Quote
            </MagneticButton>
            <MagneticButton className="flex-1 px-6 py-3.5 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-xl font-bold transition-all duration-300" onClick={onBookCall} data-magicpath-id="46" data-magicpath-path="PricingSection.tsx">
              Book Consultation
            </MagneticButton>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};