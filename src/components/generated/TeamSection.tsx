"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const TeamSection = () => {
  return <SortableContainer dndKitId="1dde406b-63d6-43ee-b949-6860de086521" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-slate-50" data-magicpath-id="0" data-magicpath-path="TeamSection.tsx">
      <SortableContainer dndKitId="4590be09-04ee-42a5-a6de-fc77738b084b" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="TeamSection.tsx">
        <SortableContainer dndKitId="714b7562-8fe1-4c59-86f1-37a6a5fa48f0" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="2" data-magicpath-path="TeamSection.tsx">
          {/* AI Empowerment Badge */}
          <SortableContainer dndKitId="52ea7499-ef06-466f-a55a-116eb01cb4a9" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1,
          type: 'spring'
        }} className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c2f12d]/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full mb-6" style={{
          display: "none"
        }} data-magicpath-id="3" data-magicpath-path="TeamSection.tsx">
            <SortableContainer dndKitId="9be19e2e-9e6a-4c4e-9bb0-4a6fe1289303" containerType="regular" prevTag="motion.div" animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }} data-magicpath-id="4" data-magicpath-path="TeamSection.tsx">
              <Sparkles className="w-4 h-4 text-[#c2f12d]" />
            </SortableContainer>
            <span className="text-sm font-semibold text-[#252525]" data-magicpath-id="5" data-magicpath-path="TeamSection.tsx">
              A human team empowered by AI tools
            </span>
          </SortableContainer>

          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
          color: '#252525'
        }} data-magicpath-id="6" data-magicpath-path="TeamSection.tsx">
            Meet the <span className="text-[#c2f12d]" data-magicpath-id="7" data-magicpath-path="TeamSection.tsx">team</span>
          </h2>
          <p className="text-xl text-slate-600" data-magicpath-id="8" data-magicpath-path="TeamSection.tsx">Experts in turning ideas into successful products</p>
        </SortableContainer>

        <SortableContainer dndKitId="a35afb93-a026-45d3-8fe4-b981bb2dd673" containerType="collection" prevTag="motion.div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} data-magicpath-id="9" data-magicpath-path="TeamSection.tsx">
          {TEAM_MEMBERS.map((member, index) => <motion.div data-magicpath-motion-tag="motion.div" key={member.name} variants={itemVariants} whileHover={{
          y: -15,
          scale: 1.02
        }} className="group relative" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="TeamSection.tsx">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-200 shadow-lg" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="TeamSection.tsx">
                {/* Image with grayscale filter that transitions to color on hover */}
                <motion.img data-magicpath-motion-tag="motion.img" src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" whileHover={{
              scale: 1.1
            }} transition={{
              duration: 0.6
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="12" data-magicpath-path="TeamSection.tsx" />
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="TeamSection.tsx" />
                
                {/* Name and title overlay - always visible but animates on hover */}
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 p-6 z-10" initial={{
              y: 0
            }} whileHover={{
              y: -10
            }} transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 300
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="TeamSection.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-1 text-white group-hover:text-[#c2f12d] transition-colors duration-500" initial={{
                opacity: 0.9
              }} whileHover={{
                opacity: 1
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="15" data-magicpath-path="TeamSection.tsx">
                    {member.name}
                  </motion.h3>
                  <motion.p data-magicpath-motion-tag="motion.p" className="text-sm text-slate-200 font-medium group-hover:text-[#c2f12d] transition-colors duration-500" initial={{
                opacity: 0.8
              }} whileHover={{
                opacity: 1
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="16" data-magicpath-path="TeamSection.tsx">
                    {member.role}
                  </motion.p>
                </motion.div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-[#c2f12d]/50 transition-all duration-500" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="TeamSection.tsx" />
              </div>
            </motion.div>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};