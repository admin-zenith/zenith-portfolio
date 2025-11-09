"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { FAILURE_REASONS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const FailureSection = () => {
  return <SortableContainer dndKitId="015a85c6-0503-4bc4-b6c6-485c5c8a0ec7" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="0" data-magicpath-path="FailureSection.tsx">
      <SortableContainer dndKitId="2e8c90ec-5770-46af-8218-182bac2b4f79" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="FailureSection.tsx">
        <SortableContainer dndKitId="32009d53-667c-4bbd-a0c0-f16c2a2d83ef" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.6
      }} className="text-center mb-20" data-magicpath-id="2" data-magicpath-path="FailureSection.tsx">
          <motion.h2 data-magicpath-motion-tag="motion.h2" className="text-5xl md:text-6xl font-bold mb-6" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          type: 'spring'
        }} data-magicpath-id="3" data-magicpath-path="FailureSection.tsx">
            <span className="text-[#252525]" data-magicpath-id="4" data-magicpath-path="FailureSection.tsx">Most MVPs </span>
            <span className="text-[#c2f12d]" data-magicpath-id="5" data-magicpath-path="FailureSection.tsx">fail</span>
          </motion.h2>
          <motion.p data-magicpath-motion-tag="motion.p" className="text-xl text-slate-600 max-w-2xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} data-magicpath-id="6" data-magicpath-path="FailureSection.tsx">
            Here's why—and how we fix it
          </motion.p>
        </SortableContainer>

        <SortableContainer dndKitId="47678879-7d43-41d4-9547-1e33e1c2ab0e" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} data-magicpath-id="7" data-magicpath-path="FailureSection.tsx">
          {FAILURE_REASONS.map(reason => {
          const Icon = reason.icon;
          return <motion.div data-magicpath-motion-tag="motion.div" key={reason.title} variants={itemVariants} whileHover={{
            y: -12,
            scale: 1.03,
            rotate: [0, -1, 1, 0],
            transition: {
              duration: 0.3
            }
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-[#c2f12d]/40 hover:shadow-2xl hover:shadow-[#c2f12d]/10 transition-all duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="FailureSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/5 to-transparent rounded-2xl" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="FailureSection.tsx" />
                <div className="relative" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="FailureSection.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="w-14 h-14 bg-gradient-to-br from-[#c2f12d] to-[#b0dc28] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#c2f12d]/30" whileHover={{
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="FailureSection.tsx">
                    <Icon className="w-7 h-7 text-[#252525]" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="FailureSection.tsx" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="13" data-magicpath-path="FailureSection.tsx">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="14" data-magicpath-path="FailureSection.tsx">{reason.description}</p>
                </div>
              </motion.div>;
        })}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};