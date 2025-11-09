"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { RECENT_PROJECTS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const ProjectsSection = () => {
  return <SortableContainer dndKitId="d2a8a19a-91d7-4a9c-b2fa-5852e1b60763" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="0" data-magicpath-path="ProjectsSection.tsx">
      <SortableContainer dndKitId="bf95817b-bffa-4a6e-b1b5-b1662882aca9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="ProjectsSection.tsx">
        <SortableContainer dndKitId="cd00db32-a89c-442f-a3ec-b10b4e9ef813" containerType="regular" prevTag="motion.div" initial={{
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

        <SortableContainer dndKitId="4eee716e-510f-48fd-a172-d11603929f09" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
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

              {/* AI-Enhanced Badge */}
              {project.aiEnhanced && <motion.div data-magicpath-motion-tag="motion.div" initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1 + 0.3
          }} className="absolute top-6 right-6 z-20 px-3 py-1.5 bg-[#c2f12d]/90 backdrop-blur-xl rounded-full flex items-center space-x-1.5" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="ProjectsSection.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="ProjectsSection.tsx">
                    <Sparkles className="w-3 h-3 text-[#252525]" />
                  </motion.div>
                  <span className="text-xs font-bold text-[#252525]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="ProjectsSection.tsx">AI-Enhanced</span>
                </motion.div>}

              <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="ProjectsSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="text-7xl" whileHover={{
              scale: 1.3,
              rotate: [0, -10, 10, 0],
              y: -10,
              transition: {
                duration: 0.5
              }
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="12" data-magicpath-path="ProjectsSection.tsx">
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
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="ProjectsSection.tsx">
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="14" data-magicpath-path="ProjectsSection.tsx">{project.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="15" data-magicpath-path="ProjectsSection.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="ProjectsSection.tsx">
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
                }} className="px-3 py-1.5 bg-[#c2f12d]/20 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full text-xs font-medium text-[#c2f12d]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="ProjectsSection.tsx">
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