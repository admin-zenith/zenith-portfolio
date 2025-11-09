"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Users, Clock, Sparkles, ArrowRight, Calendar, Zap, TrendingUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { PRICING_CONFIG } from './constants';
import { containerVariants, itemVariants } from './animations';
interface PricingSectionProps {
  onGetQuote: () => void;
  onBookCall: () => void;
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
  return <section id="pricing" className="relative py-24 px-6 bg-slate-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c2f12d]/20 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20">
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} whileInView={{
          scale: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-[#c2f12d]/30 via-[#c2f12d]/20 to-emerald-400/20 backdrop-blur-xl border border-[#c2f12d]/40 rounded-full mb-6 shadow-lg">
            <Zap className="w-4 h-4 text-[#c2f12d] drop-shadow-sm" />
            <span className="text-sm font-bold text-slate-800 tracking-wide">TRANSPARENT PRICING</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{
          color: '#252525'
        }}>
            Fair. Transparent.{' '}
            <span className="text-[#c2f12d]">
              Predictable.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Estimate your AI-enhanced MVP development cost instantly — no hidden fees, no guesswork.
          </p>

          {/* AI Workflow Info */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="flex items-center justify-center space-x-2 text-slate-600">
            <Sparkles className="w-5 h-5 text-[#c2f12d]" />
            <span className="text-base font-medium">
              Every project is full-stack with built-in PM, QA, and UI/UX design
            </span>
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-slate-900 px-8 py-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                Interactive Estimator
              </h3>
              <div className="flex items-center space-x-2 px-4 py-2 bg-[#c2f12d] rounded-xl">
                <Sparkles className="w-4 h-4 text-slate-900" />
                <span className="text-sm font-bold text-slate-900">AI-Powered</span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Team Size - Compact */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#c2f12d]" />
                    Team Size
                  </label>
                  <AnimatePresence mode="wait">
                    <motion.div key={teamSize} initial={{
                    scale: 1.3,
                    opacity: 0
                  }} animate={{
                    scale: 1,
                    opacity: 1
                  }} exit={{
                    scale: 0.8,
                    opacity: 0
                  }} className="text-2xl font-bold text-slate-900">
                      {teamSize} <span className="text-sm text-slate-500 font-medium">dev{teamSize > 1 ? 's' : ''}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(size => <motion.button key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className={`flex-1 py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-200 ${teamSize === size ? 'bg-[#c2f12d] text-slate-900 shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                      {size}
                    </motion.button>)}
                </div>
                {teamSize > 0 && <p className="text-xs text-slate-500 mt-2">
                    Includes PM, QA & UI/UX
                  </p>}
              </div>

              {/* Duration - Compact */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c2f12d]" />
                    Duration
                  </label>
                  <div className="text-sm text-slate-500 font-medium">{getDuration()} weeks</div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {PRICING_CONFIG.SPRINT_OPTIONS.map(option => <motion.button key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className={`py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-200 ${sprints === option.value ? 'bg-[#c2f12d] text-slate-900 shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                      <div>{option.label}</div>
                      <div className="text-xs opacity-70 mt-0.5">{option.desc}</div>
                    </motion.button>)}
                </div>
              </div>

              {/* Price Display - Compact */}
              <AnimatePresence mode="wait">
                <motion.div key={`${teamSize}-${sprints}`} initial={{
                scale: 0.95,
                opacity: 0
              }} animate={{
                scale: 1,
                opacity: 1
              }} exit={{
                scale: 0.95,
                opacity: 0
              }} className="bg-slate-900 rounded-2xl p-6 text-center">
                  <div className="text-sm text-slate-400 uppercase tracking-wide mb-2">
                    Estimated Cost
                  </div>
                  <div className="text-5xl font-bold text-[#c2f12d] mb-3">
                    ₱{calculatePrice()}
                  </div>
                  <div className="text-xs text-slate-400">
                    ₱120,000 per developer per 2-week sprint
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* What's Included - Compact */}
              <div className="bg-slate-50 rounded-xl p-5">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c2f12d]" />
                  Full-Stack Package Includes:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {fullStackIncludes.map(feature => <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c2f12d] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{feature}</span>
                    </div>)}
                </div>
              </div>

              {/* CTA Buttons - Compact */}
              <div className="flex gap-3 pt-2">
                <MagneticButton className="flex-1 px-6 py-3 bg-[#c2f12d] hover:bg-[#b0dc28] text-slate-900 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2" onClick={onGetQuote}>
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton className="flex-1 px-6 py-3 border-2 border-slate-200 hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2" onClick={onBookCall}>
                  <Calendar className="w-4 h-4" />
                  Book Call
                </MagneticButton>
              </div>

              {/* Footer Note - Compact */}
              <p className="text-xs text-center text-slate-500 pt-2">
                💡 Need help scoping your project? Let's chat — we'll help define your MVP roadmap.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};