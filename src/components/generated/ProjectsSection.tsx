"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { RECENT_PROJECTS } from './constants';
import { containerVariants } from './animations';
export const ProjectsSection = () => {
  return <SortableContainer dndKitId="759bd818-c159-40b9-9305-85a7da73d620" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-[#252525] to-[#1a1a1a]" data-magicpath-id="0" data-magicpath-path="ProjectsSection.tsx">
      <SortableContainer dndKitId="ca1714cb-7a06-4dad-b5fa-855804e6a243" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="ProjectsSection.tsx">
        <SortableContainer dndKitId="7cdbe33d-0fb8-4c33-9594-2730cf8f3035" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16" data-magicpath-id="2" data-magicpath-path="ProjectsSection.tsx">
          <SortableContainer dndKitId="e748b02e-fe6d-44cb-b2e2-e8c170bdddd3" containerType="regular" prevTag="motion.div" initial={{
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

        <SortableContainer dndKitId="e39951e7-e508-4dda-962f-33c0ffa02773" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
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
                {/* Project Icon */}
                <div className="mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="ProjectsSection.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="w-16 h-16 bg-gradient-to-br from-[#c2f12d]/20 to-[#c2f12d]/5 rounded-2xl flex items-center justify-center text-4xl border border-[#c2f12d]/20" whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.05
              }} transition={{
                duration: 0.5
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="16" data-magicpath-path="ProjectsSection.tsx">
                    {project.image}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="flex-1" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="ProjectsSection.tsx">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#c2f12d] transition-colors" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="18" data-magicpath-path="ProjectsSection.tsx">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="19" data-magicpath-path="ProjectsSection.tsx">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="ProjectsSection.tsx">
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
              }} className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-slate-300" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="ProjectsSection.tsx">
                      {tag}
                    </motion.span>)}
                </div>

                {/* View Project Link */}
                <motion.div data-magicpath-motion-tag="motion.div" className="flex items-center gap-2 text-sm font-semibold text-[#c2f12d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{
              x: 4
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="ProjectsSection.tsx">
                  <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="ProjectsSection.tsx">View Project</span>
                  <ArrowUpRight className="w-4 h-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="ProjectsSection.tsx" />
                </motion.div>
              </div>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c2f12d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="ProjectsSection.tsx" />
            </motion.div>)}
        </SortableContainer>

        {/* Bottom CTA */}
        <SortableContainer dndKitId="4709a4e2-5c2e-44ad-99b0-57f0991051ef" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-16 text-center" data-magicpath-id="26" data-magicpath-path="ProjectsSection.tsx">
          <p className="text-slate-400 mb-4" data-magicpath-id="27" data-magicpath-path="ProjectsSection.tsx">Want to see more?</p>
          <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-6 py-3 bg-white/5 border border-white/10 hover:border-[#c2f12d]/40 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-white/10" data-magicpath-id="28" data-magicpath-path="ProjectsSection.tsx">
            View Full Portfolio
          </motion.button>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};