"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const TeamSection = () => {
  return <SortableContainer dndKitId="ba5a2bf5-c51f-49a3-a04f-3ce08d414e56" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="0" data-magicpath-path="TeamSection.tsx">
      <SortableContainer dndKitId="87d7124b-e99b-422e-a02f-a79557cba7da" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="TeamSection.tsx">
        <SortableContainer dndKitId="0b61f91e-1583-4d9e-a4a2-d546555f65c7" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="2" data-magicpath-path="TeamSection.tsx">
          {/* AI Empowerment Badge */}
          <SortableContainer dndKitId="f24e1607-d6ef-413b-9a8e-d6cab0f4687f" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c2f12d]/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full mb-6" data-magicpath-id="3" data-magicpath-path="TeamSection.tsx">
            <SortableContainer dndKitId="2974fa60-4788-48da-86fd-8a86c909ccd6" containerType="regular" prevTag="motion.div" animate={{
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

        <SortableContainer dndKitId="fd0a601b-9e5c-48a3-a761-cbbefdcb30c5" containerType="collection" prevTag="motion.div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} data-magicpath-id="9" data-magicpath-path="TeamSection.tsx">
          {TEAM_MEMBERS.map((member, index) => <motion.div data-magicpath-motion-tag="motion.div" key={member.name} variants={itemVariants} whileHover={{
          y: -15,
          scale: 1.02
        }} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="TeamSection.tsx">
              <div className="relative aspect-[3/4] mb-6 rounded-3xl overflow-hidden bg-slate-200" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="TeamSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-[#c2f12d]/90 via-[#c2f12d]/20 to-transparent z-10" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.4
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="TeamSection.tsx" />
                <motion.img data-magicpath-motion-tag="motion.img" src={member.image} alt={member.name} className="w-full h-full object-cover" whileHover={{
              scale: 1.15
            }} transition={{
              duration: 0.6
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="13" data-magicpath-path="TeamSection.tsx" />
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 p-6 z-20" initial={{
              y: '100%'
            }} whileHover={{
              y: 0
            }} transition={{
              duration: 0.4,
              type: 'spring'
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="TeamSection.tsx" />
              </div>
              <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-2 text-slate-900" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="15" data-magicpath-path="TeamSection.tsx">
                {member.name}
              </motion.h3>
              <motion.p data-magicpath-motion-tag="motion.p" className="text-sm text-slate-600" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1 + 0.1
          }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="16" data-magicpath-path="TeamSection.tsx">
                {member.role}
              </motion.p>
            </motion.div>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};