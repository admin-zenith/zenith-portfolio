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
  const [teamSize, setTeamSize] = useState(1);
  const [sprints, setSprints] = useState(1);
  const calculatePrice = () => {
    const total = teamSize * sprints * PRICING_CONFIG.RATE_PER_DEV_PER_SPRINT;
    return total.toLocaleString();
  };
  const getDuration = () => sprints * 2;
  const fullStackIncludes = ['Full-Stack Development', 'Project Management', 'Quality Assurance (QA)', 'UI/UX Design', 'AI-Assisted Workflow', 'Architecture & Scalability'];
  return <SortableContainer dndKitId="88eff672-2d97-439f-8588-3166204280a5" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden" data-magicpath-id="0" data-magicpath-path="PricingSection.tsx">
      {/* Animated Background Elements */}
      <SortableContainer dndKitId="651c33a2-bc98-4f30-af5d-4410f50fb692" containerType="regular" prevTag="div" className="absolute inset-0 opacity-30" data-magicpath-id="1" data-magicpath-path="PricingSection.tsx">
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

      <SortableContainer dndKitId="7ffa8aab-a9cf-426c-a0df-2ade8defd59e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto relative z-10" data-magicpath-id="4" data-magicpath-path="PricingSection.tsx">
        {/* Section Header */}
        <SortableContainer dndKitId="a851540e-f54e-413a-b42f-7ce46fe2ae7b" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="5" data-magicpath-path="PricingSection.tsx">
          <SortableContainer dndKitId="abb6f791-175c-4b30-8edf-6a95bc92d928" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="f9ebc3f6-5b2a-48fd-8adf-0991abceeaf5" containerType="regular" prevTag="motion.div" initial={{
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

        <SortableContainer dndKitId="ed9a9e04-74ad-46e7-9fcd-d313434fbad3" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto" data-magicpath-id="14" data-magicpath-path="PricingSection.tsx">
          <SortableContainer dndKitId="a9881459-71f6-4ea8-bb86-93706786c588" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden" data-magicpath-id="15" data-magicpath-path="PricingSection.tsx">
            {/* Header */}
            <SortableContainer dndKitId="2bbbc726-badf-4825-b0a0-2501e015257c" containerType="regular" prevTag="div" className="bg-slate-900 px-8 py-6 flex items-center justify-between" data-magicpath-id="16" data-magicpath-path="PricingSection.tsx">
              <h3 className="text-2xl font-bold text-white" data-magicpath-id="17" data-magicpath-path="PricingSection.tsx">
                Interactive Estimator
              </h3>
              <SortableContainer dndKitId="627c6333-2fcc-46d0-b083-f8015c66551c" containerType="regular" prevTag="div" className="flex items-center space-x-2 px-4 py-2 bg-[#c2f12d] rounded-xl" data-magicpath-id="18" data-magicpath-path="PricingSection.tsx">
                <Sparkles className="w-4 h-4 text-slate-900" />
                <span className="text-sm font-bold text-slate-900" data-magicpath-id="19" data-magicpath-path="PricingSection.tsx">AI-Powered</span>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="e4bfd284-2288-4a96-af15-8078b0b1e502" containerType="regular" prevTag="div" className="p-8 space-y-6" data-magicpath-id="20" data-magicpath-path="PricingSection.tsx">
              {/* Team Size - Compact */}
              <SortableContainer dndKitId="b862f68e-af38-4df4-a996-38f1ee17665b" containerType="regular" prevTag="div" data-magicpath-id="21" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="504e53a0-51a3-442b-aa10-752e78dbb6c0" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="22" data-magicpath-path="PricingSection.tsx">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2" data-magicpath-id="23" data-magicpath-path="PricingSection.tsx">
                    <Users className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="24" data-magicpath-path="PricingSection.tsx" />
                    Team Size
                  </label>
                  <AnimatePresence mode="wait" data-magicpath-id="25" data-magicpath-path="PricingSection.tsx">
                    <SortableContainer dndKitId="3e60defb-3e6d-47be-a173-f342c8c85cdb" containerType="regular" prevTag="motion.div" key={teamSize} initial={{
                    scale: 1.3,
                    opacity: 0
                  }} animate={{
                    scale: 1,
                    opacity: 1
                  }} exit={{
                    scale: 0.8,
                    opacity: 0
                  }} className="text-2xl font-bold text-slate-900" data-magicpath-id="26" data-magicpath-path="PricingSection.tsx">
                      {teamSize} <span className="text-sm text-slate-500 font-medium" data-magicpath-id="27" data-magicpath-path="PricingSection.tsx">dev{teamSize > 1 ? 's' : ''}</span>
                    </SortableContainer>
                  </AnimatePresence>
                </SortableContainer>

                <div className="flex gap-2" data-magicpath-id="28" data-magicpath-path="PricingSection.tsx">
                  {[1, 2, 3, 4, 5].map(size => <motion.button data-magicpath-motion-tag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className={`flex-1 py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-200 ${teamSize === size ? 'bg-[#c2f12d] text-slate-900 shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="29" data-magicpath-path="PricingSection.tsx">
                      {size}
                    </motion.button>)}
                </div>
                {teamSize > 0 && <p className="text-xs text-slate-500 mt-2" data-magicpath-id="30" data-magicpath-path="PricingSection.tsx">
                    Includes PM, QA & UI/UX
                  </p>}
              </SortableContainer>

              {/* Duration - Compact */}
              <SortableContainer dndKitId="b6d0e711-04ea-402e-a819-a24ff19ff1e9" containerType="regular" prevTag="div" data-magicpath-id="31" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="976371b7-5d56-4e06-83c4-58e5e914aaf5" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="32" data-magicpath-path="PricingSection.tsx">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2" data-magicpath-id="33" data-magicpath-path="PricingSection.tsx">
                    <Clock className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="34" data-magicpath-path="PricingSection.tsx" />
                    Duration
                  </label>
                  <div className="text-sm text-slate-500 font-medium" data-magicpath-id="35" data-magicpath-path="PricingSection.tsx">{getDuration()} weeks</div>
                </SortableContainer>

                <div className="grid grid-cols-3 gap-2" data-magicpath-id="36" data-magicpath-path="PricingSection.tsx">
                  {PRICING_CONFIG.SPRINT_OPTIONS.map(option => <SortableContainer dndKitId="8ee7f916-cdf0-4160-8628-4b3d4ef7bf27" containerType="regular" prevTag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className={`py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-200 ${sprints === option.value ? 'bg-[#c2f12d] text-slate-900 shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="37" data-magicpath-path="PricingSection.tsx">
                      <div data-magicpath-id="38" data-magicpath-path="PricingSection.tsx">{option.label}</div>
                      <div className="text-xs opacity-70 mt-0.5" data-magicpath-id="39" data-magicpath-path="PricingSection.tsx">{option.desc}</div>
                    </SortableContainer>)}
                </div>
              </SortableContainer>

              {/* Price Display - Compact */}
              <AnimatePresence mode="wait" data-magicpath-id="40" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="61e5e891-6860-42ed-80d2-dd0e81616bff" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
                scale: 0.95,
                opacity: 0
              }} animate={{
                scale: 1,
                opacity: 1
              }} exit={{
                scale: 0.95,
                opacity: 0
              }} className="bg-slate-900 rounded-2xl p-6 text-center" data-magicpath-id="41" data-magicpath-path="PricingSection.tsx">
                  <div className="text-sm text-slate-400 uppercase tracking-wide mb-2" data-magicpath-id="42" data-magicpath-path="PricingSection.tsx">
                    Estimated Cost
                  </div>
                  <div className="text-5xl font-bold text-[#c2f12d] mb-3" data-magicpath-id="43" data-magicpath-path="PricingSection.tsx">
                    ₱{calculatePrice()}
                  </div>
                  <div className="text-xs text-slate-400" data-magicpath-id="44" data-magicpath-path="PricingSection.tsx">
                    ₱120,000 per developer per 2-week sprint
                  </div>
                </SortableContainer>
              </AnimatePresence>

              {/* What's Included - Compact */}
              <SortableContainer dndKitId="b411e58e-1225-4ac2-9da1-fba84fe6d67c" containerType="regular" prevTag="div" className="bg-slate-50 rounded-xl p-5" data-magicpath-id="45" data-magicpath-path="PricingSection.tsx">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2" data-magicpath-id="46" data-magicpath-path="PricingSection.tsx">
                  <CheckCircle2 className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="47" data-magicpath-path="PricingSection.tsx" />
                  Full-Stack Package Includes:
                </h4>
                <SortableContainer dndKitId="3a268907-9fda-4a04-b951-8379314a09f7" containerType="collection" prevTag="div" className="grid grid-cols-2 gap-2" data-magicpath-id="48" data-magicpath-path="PricingSection.tsx">
                  {fullStackIncludes.map(feature => <div key={feature} className="flex items-start gap-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="PricingSection.tsx">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="PricingSection.tsx" />
                      <span className="text-xs text-slate-700 font-medium" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="PricingSection.tsx">{feature}</span>
                    </div>)}
                </SortableContainer>
              </SortableContainer>

              {/* CTA Buttons - Compact */}
              <SortableContainer dndKitId="9e8720dd-49af-4ae4-a55b-841a761de2b6" containerType="regular" prevTag="div" className="flex gap-3 pt-2" data-magicpath-id="52" data-magicpath-path="PricingSection.tsx">
                <MagneticButton className="flex-1 px-6 py-3 bg-[#c2f12d] hover:bg-[#b0dc28] text-slate-900 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2" onClick={onGetQuote} data-magicpath-id="53" data-magicpath-path="PricingSection.tsx">
                  Get Quote
                  <ArrowRight className="w-4 h-4" data-magicpath-id="54" data-magicpath-path="PricingSection.tsx" />
                </MagneticButton>
                <MagneticButton className="flex-1 px-6 py-3 border-2 border-slate-200 hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2" onClick={onBookCall} data-magicpath-id="55" data-magicpath-path="PricingSection.tsx">
                  <Calendar className="w-4 h-4" data-magicpath-id="56" data-magicpath-path="PricingSection.tsx" />
                  Book Call
                </MagneticButton>
              </SortableContainer>

              {/* Footer Note - Compact */}
              <p className="text-xs text-center text-slate-500 pt-2" data-magicpath-id="57" data-magicpath-path="PricingSection.tsx">
                💡 Need help scoping your project? Let's chat — we'll help define your MVP roadmap.
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};