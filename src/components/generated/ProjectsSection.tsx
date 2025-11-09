"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { RECENT_PROJECTS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const ProjectsSection = () => {
  return <SortableContainer dndKitId="49efae17-0bad-485a-9b1b-5d2e587167e1" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="0" data-magicpath-path="ProjectsSection.tsx">
      <SortableContainer dndKitId="f2a211a3-baf0-4bf7-a468-0acbcfb54f05" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="ProjectsSection.tsx">
        <SortableContainer dndKitId="62584b4e-9849-43e3-bca7-d5dd89a1d155" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="2" data-magicpath-path="ProjectsSection.tsx">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="3" data-magicpath-path="ProjectsSection.tsx">Recent work</h2>
          <p className="text-xl text-slate-400" data-magicpath-id="4" data-magicpath-path="ProjectsSection.tsx">Products we've built for startups and businesses</p>
        </SortableContainer>

        <SortableContainer dndKitId="c5f5e2ac-cfd8-438d-a74d-1cda34840dac" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} data-magicpath-id="5" data-magicpath-path="ProjectsSection.tsx">
          {RECENT_PROJECTS.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={project.title} variants={itemVariants} whileHover={{
          scale: 1.08,
          y: -15,
          rotateX: 5,
          rotateY: 5,
          transition: {
            duration: 0.3
          }
        }} className="group relative aspect-square rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 cursor-pointer" style={{
          perspective: 1000
        }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="ProjectsSection.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/20 via-transparent to-[#c2f12d]/10" initial={{
            opacity: 0,
            scale: 0.8
          }} whileHover={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="ProjectsSection.tsx" />

              <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="ProjectsSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="text-7xl" whileHover={{
              scale: 1.3,
              rotate: [0, -10, 10, 0],
              y: -10,
              transition: {
                duration: 0.5
              }
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="9" data-magicpath-path="ProjectsSection.tsx">
                  {project.image}
                </motion.div>
                <motion.div data-magicpath-motion-tag="motion.div" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="ProjectsSection.tsx">
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="11" data-magicpath-path="ProjectsSection.tsx">{project.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="12" data-magicpath-path="ProjectsSection.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="ProjectsSection.tsx">
                    {project.tags.map((tag, i) => <motion.span data-magicpath-motion-tag="motion.span" key={tag} initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1 + i * 0.05
                }} whileHover={{
                  scale: 1.1,
                  y: -2
                }} className="px-3 py-1.5 bg-[#c2f12d]/20 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full text-xs font-medium text-[#c2f12d]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="ProjectsSection.tsx">
                        {tag}
                      </motion.span>)}
                  </div>
                </motion.div>
              </div>
            </motion.div>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};