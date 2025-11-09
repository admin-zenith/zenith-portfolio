"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { WHY_BUILD_WITH_US } from './constants';
import { containerVariants, itemVariants } from './animations';
export const WhyBuildWithUsSection = () => {
  return <SortableContainer dndKitId="5dbe4806-af88-403b-952b-adacbc6b219a" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="0" data-magicpath-path="WhyBuildWithUsSection.tsx">
      <SortableContainer dndKitId="b61296df-2702-4e20-bb83-63813e6a2dc9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="WhyBuildWithUsSection.tsx">
        <SortableContainer dndKitId="d848b67a-10c9-41fd-9609-7697778b5404" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="2" data-magicpath-path="WhyBuildWithUsSection.tsx">
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
        }} data-magicpath-id="3" data-magicpath-path="WhyBuildWithUsSection.tsx">
            <span className="text-[#252525]" data-magicpath-id="4" data-magicpath-path="WhyBuildWithUsSection.tsx">Why build with </span>
            <span className="text-[#c2f12d]" data-magicpath-id="5" data-magicpath-path="WhyBuildWithUsSection.tsx">Zenith?</span>
          </motion.h2>
          <motion.p data-magicpath-motion-tag="motion.p" className="text-xl text-slate-600 max-w-3xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} data-magicpath-id="6" data-magicpath-path="WhyBuildWithUsSection.tsx">
            AI-supercharged development meets human expertise—building the future, together.
          </motion.p>
        </SortableContainer>

        <SortableContainer dndKitId="9a397b2e-08d9-467b-86f6-b3e1d435064f" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} data-magicpath-id="7" data-magicpath-path="WhyBuildWithUsSection.tsx">
          {WHY_BUILD_WITH_US.map((item, index) => {
          const Icon = item.icon;
          return <motion.div data-magicpath-motion-tag="motion.div" key={item.title} variants={itemVariants} whileHover={{
            y: -12,
            scale: 1.03,
            transition: {
              duration: 0.3
            }
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-[#c2f12d]/40 hover:shadow-2xl hover:shadow-[#c2f12d]/10 transition-all duration-500" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="WhyBuildWithUsSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/5 to-transparent rounded-2xl" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="WhyBuildWithUsSection.tsx" />
                
                <div className="relative" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="WhyBuildWithUsSection.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="w-16 h-16 bg-gradient-to-br from-[#c2f12d] to-[#b0dc28] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#c2f12d]/30" whileHover={{
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="WhyBuildWithUsSection.tsx">
                    <Icon className="w-8 h-8 text-[#252525]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="WhyBuildWithUsSection.tsx" />
                  </motion.div>
                  
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-2xl font-bold mb-4 text-slate-900" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="13" data-magicpath-path="WhyBuildWithUsSection.tsx">
                    {item.title}
                  </motion.h3>
                  
                  <motion.p data-magicpath-motion-tag="motion.p" className="text-base text-slate-600 leading-relaxed" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.1
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="14" data-magicpath-path="WhyBuildWithUsSection.tsx">
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>;
        })}
        </SortableContainer>

        {/* Additional Message */}
        <SortableContainer dndKitId="a979bb78-7c05-4542-8c51-80216fc537ab" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="mt-16 text-center" data-magicpath-id="15" data-magicpath-path="WhyBuildWithUsSection.tsx">
          <motion.p data-magicpath-motion-tag="motion.p" className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" whileHover={{
          scale: 1.02
        }} data-magicpath-id="16" data-magicpath-path="WhyBuildWithUsSection.tsx">
            <span className="font-semibold text-[#c2f12d]" data-magicpath-id="17" data-magicpath-path="WhyBuildWithUsSection.tsx">AI is powerful</span>, but it's not a
            replacement for experience. We blend cutting-edge AI tools with human creativity,
            architecture expertise, and quality assurance to deliver products that actually work.
          </motion.p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};