"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { RECENT_PROJECTS } from './constants';
import { containerVariants } from './animations';
export const ProjectsSection = () => {
  return <SortableContainer dndKitId="5489a32d-c46c-465b-b70b-1203adc0f54a" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-[#252525] to-[#1a1a1a]" data-magicpath-id="0" data-magicpath-path="ProjectsSection.tsx">
      <SortableContainer dndKitId="9000c2a5-9eb4-4c35-89c9-66d0954e0979" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="ProjectsSection.tsx">
        <SortableContainer dndKitId="6a216b5f-cc7e-4680-9347-b1a833f998e1" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16" data-magicpath-id="2" data-magicpath-path="ProjectsSection.tsx">
          <SortableContainer dndKitId="4108786c-6b61-49ed-a340-06f60c5ee337" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#c2f12d]/10 border border-[#c2f12d]/20 rounded-full mb-6" data-magicpath-id="3" data-magicpath-path="ProjectsSection.tsx">
            <Sparkles className="w-4 h-4 text-[#c2f12d]" />
            <span className="text-sm font-semibold text-[#c2f12d]" data-magicpath-id="4" data-magicpath-path="ProjectsSection.tsx">Recent Work</span>
          </SortableContainer>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent" data-magicpath-id="5" data-magicpath-path="ProjectsSection.tsx">
            Products we've built
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" data-magicpath-id="6" data-magicpath-path="ProjectsSection.tsx">
            AI-enhanced solutions for startups and businesses
          </p>
        </SortableContainer>

        <SortableContainer dndKitId="d34ae406-f4a4-4bd6-884f-e05a9c1d6bae" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} data-magicpath-id="7" data-magicpath-path="ProjectsSection.tsx">
          {RECENT_PROJECTS.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={project.title} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -8
        }} className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#c2f12d]/40 overflow-hidden transition-all duration-500 cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="ProjectsSection.tsx">
              {/* Gradient overlay on hover */}
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="ProjectsSection.tsx" />

              {/* AI Badge */}
              {project.aiEnhanced && <div className="absolute top-4 right-4 z-10" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="ProjectsSection.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1 + 0.2
            }} className="px-3 py-1.5 bg-[#c2f12d] rounded-full flex items-center gap-1.5" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="ProjectsSection.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: 360
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="ProjectsSection.tsx">
                      <Sparkles className="w-3 h-3 text-[#252525]" />
                    </motion.div>
                    <span className="text-xs font-bold text-[#252525]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="ProjectsSection.tsx">AI</span>
                  </motion.div>
                </div>}

              {/* Content */}
              <div className="relative p-8 flex flex-col h-full" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="ProjectsSection.tsx">
                {/* Project Image */}
                <div className="mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="ProjectsSection.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="w-full h-48 rounded-2xl overflow-hidden border border-[#c2f12d]/20" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.5
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="ProjectsSection.tsx">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="17" data-magicpath-path="ProjectsSection.tsx" />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="flex-1" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="ProjectsSection.tsx">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#c2f12d] transition-colors" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="19" data-magicpath-path="ProjectsSection.tsx">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="20" data-magicpath-path="ProjectsSection.tsx">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="ProjectsSection.tsx">
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
              }} className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-slate-300" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="ProjectsSection.tsx">
                      {tag}
                    </motion.span>)}
                </div>

                {/* View Project Link */}
                <motion.div data-magicpath-motion-tag="motion.div" className="flex items-center gap-2 text-sm font-semibold text-[#c2f12d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{
              x: 4
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="ProjectsSection.tsx">
                  <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="ProjectsSection.tsx">View Project</span>
                  <ArrowUpRight className="w-4 h-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="ProjectsSection.tsx" />
                </motion.div>
              </div>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c2f12d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="ProjectsSection.tsx" />
            </motion.div>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};