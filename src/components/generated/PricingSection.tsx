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
  return <SortableContainer dndKitId="d7c72e1a-e47c-4663-bb09-05225d55ac7b" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-slate-50 overflow-hidden" data-magicpath-id="0" data-magicpath-path="PricingSection.tsx">
      {/* Animated Background Elements */}
      <SortableContainer dndKitId="b145f56d-f8d8-4ec9-9855-d45a87bf47d0" containerType="regular" prevTag="div" className="absolute inset-0 opacity-30" data-magicpath-id="1" data-magicpath-path="PricingSection.tsx">
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

      <SortableContainer dndKitId="9aa77a3b-dcc1-43a5-a8fe-4064b9e96968" containerType="regular" prevTag="div" className="max-w-7xl mx-auto relative z-10" data-magicpath-id="4" data-magicpath-path="PricingSection.tsx">
        {/* Section Header */}
        <SortableContainer dndKitId="395cfef4-7ff7-40bf-8f1c-27586be7956d" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="5" data-magicpath-path="PricingSection.tsx">
          <SortableContainer dndKitId="6b088ba8-ea4e-46c4-96b0-7e9e44908b68" containerType="regular" prevTag="motion.div" initial={{
          scale: 0.9,
          opacity: 0
        }} whileInView={{
          scale: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-[#c2f12d]/30 via-[#c2f12d]/20 to-emerald-400/20 backdrop-blur-xl border border-[#c2f12d]/40 rounded-full mb-6 shadow-lg" data-magicpath-id="6" data-magicpath-path="PricingSection.tsx">
            <Zap className="w-4 h-4 text-[#c2f12d] drop-shadow-sm" data-magicpath-id="7" data-magicpath-path="PricingSection.tsx" />
            <span className="text-sm font-bold text-slate-800 tracking-wide" data-magicpath-id="8" data-magicpath-path="PricingSection.tsx">TRANSPARENT PRICING</span>
          </SortableContainer>

          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{
          color: '#252525'
        }} data-magicpath-id="9" data-magicpath-path="PricingSection.tsx">
            Fair. Transparent.{' '}
            <span className="text-[#c2f12d]" data-magicpath-id="10" data-magicpath-path="PricingSection.tsx">
              Predictable.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed" data-magicpath-id="11" data-magicpath-path="PricingSection.tsx">
            Estimate your AI-enhanced MVP development cost instantly — no hidden fees, no guesswork.
          </p>

          {/* AI Workflow Info */}
          <SortableContainer dndKitId="88361c7b-2ac0-4587-b6d5-c5102e48756f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="flex items-center justify-center space-x-2 text-slate-600" data-magicpath-id="12" data-magicpath-path="PricingSection.tsx">
            <Sparkles className="w-5 h-5 text-[#c2f12d]" />
            <span className="text-base font-medium" data-magicpath-id="13" data-magicpath-path="PricingSection.tsx">
              Every project is full-stack with built-in PM, QA, and UI/UX design
            </span>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="64ad15e9-97e2-4666-b39a-5b82910cea96" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto" data-magicpath-id="14" data-magicpath-path="PricingSection.tsx">
          <SortableContainer dndKitId="a4824797-1faa-471a-bf38-2aa2679b4c29" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden" data-magicpath-id="15" data-magicpath-path="PricingSection.tsx">
            {/* Header */}
            <SortableContainer dndKitId="7ba58a47-24bc-4458-b6dd-526777388467" containerType="regular" prevTag="div" className="bg-slate-900 px-8 py-6 flex items-center justify-between" data-magicpath-id="16" data-magicpath-path="PricingSection.tsx">
              <h3 className="text-2xl font-bold text-white" data-magicpath-id="17" data-magicpath-path="PricingSection.tsx">
                Interactive Estimator
              </h3>
              <SortableContainer dndKitId="2c0f9a07-76d6-4956-87b0-b9622f71cea1" containerType="regular" prevTag="div" className="flex items-center space-x-2 px-4 py-2 bg-[#c2f12d] rounded-xl" data-magicpath-id="18" data-magicpath-path="PricingSection.tsx">
                <Sparkles className="w-4 h-4 text-slate-900" />
                <span className="text-sm font-bold text-slate-900" data-magicpath-id="19" data-magicpath-path="PricingSection.tsx">AI-Powered</span>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="b88c57ef-2917-45d7-ae28-7fa31d36f9a1" containerType="regular" prevTag="div" className="p-8 space-y-6" data-magicpath-id="20" data-magicpath-path="PricingSection.tsx">
              {/* Team Size - Compact */}
              <SortableContainer dndKitId="8cdf9b2d-7a4b-4f3a-a010-dd65b6001f61" containerType="regular" prevTag="div" data-magicpath-id="21" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="08a524cc-706f-43ec-9c9d-49f0e3f9e0df" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="22" data-magicpath-path="PricingSection.tsx">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2" data-magicpath-id="23" data-magicpath-path="PricingSection.tsx">
                    <Users className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="24" data-magicpath-path="PricingSection.tsx" />
                    Team Size
                  </label>
                  <AnimatePresence mode="wait" data-magicpath-id="25" data-magicpath-path="PricingSection.tsx">
                    <SortableContainer dndKitId="0c4f7b1d-d936-4136-a23e-ab39e358deaf" containerType="regular" prevTag="motion.div" key={teamSize} initial={{
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
              <SortableContainer dndKitId="5e4e4d18-9c26-41a6-9b07-2adc39583c85" containerType="regular" prevTag="div" data-magicpath-id="31" data-magicpath-path="PricingSection.tsx">
                <SortableContainer dndKitId="e1107470-be14-4770-9e85-3fdc02cc0163" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="32" data-magicpath-path="PricingSection.tsx">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2" data-magicpath-id="33" data-magicpath-path="PricingSection.tsx">
                    <Clock className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="34" data-magicpath-path="PricingSection.tsx" />
                    Duration
                  </label>
                  <div className="text-sm text-slate-500 font-medium" data-magicpath-id="35" data-magicpath-path="PricingSection.tsx">{getDuration()} weeks</div>
                </SortableContainer>

                <div className="grid grid-cols-3 gap-2" data-magicpath-id="36" data-magicpath-path="PricingSection.tsx">
                  {PRICING_CONFIG.SPRINT_OPTIONS.map(option => <SortableContainer dndKitId="c46e8c8b-4bff-4a70-9594-63c5e8eca453" containerType="regular" prevTag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
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
                <SortableContainer dndKitId="ffa7480e-f748-4d5e-a95a-8b73188a3350" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
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
              <SortableContainer dndKitId="449578af-6ee5-4dd5-aabe-dcea5fda35d3" containerType="regular" prevTag="div" className="bg-slate-50 rounded-xl p-5" data-magicpath-id="45" data-magicpath-path="PricingSection.tsx">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2" data-magicpath-id="46" data-magicpath-path="PricingSection.tsx">
                  <CheckCircle2 className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="47" data-magicpath-path="PricingSection.tsx" />
                  Full-Stack Package Includes:
                </h4>
                <SortableContainer dndKitId="ba6c8003-3bff-4ffc-8525-1abdc30a0da0" containerType="collection" prevTag="div" className="grid grid-cols-2 gap-2" data-magicpath-id="48" data-magicpath-path="PricingSection.tsx">
                  {fullStackIncludes.map(feature => <div key={feature} className="flex items-start gap-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="PricingSection.tsx">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="PricingSection.tsx" />
                      <span className="text-xs text-slate-700 font-medium" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="PricingSection.tsx">{feature}</span>
                    </div>)}
                </SortableContainer>
              </SortableContainer>

              {/* CTA Buttons - Compact */}
              <SortableContainer dndKitId="c059f4d7-828e-48d2-a9ed-dd1927b63817" containerType="regular" prevTag="div" className="flex gap-3 pt-2" data-magicpath-id="52" data-magicpath-path="PricingSection.tsx">
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