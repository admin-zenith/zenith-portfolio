"use client";

import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { RECENT_PROJECTS } from './constants';
import { containerVariants } from './animations';
export const ProjectsSection = () => {
  return <section id="projects" className="relative py-32 px-6 bg-gradient-to-b from-[#252525] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#c2f12d]/10 border border-[#c2f12d]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#c2f12d]" />
            <span className="text-sm font-semibold text-[#c2f12d]">Recent Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Products we've built
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            AI-enhanced solutions for startups and businesses
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {RECENT_PROJECTS.map((project, index) => <motion.div key={project.title} initial={{
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
        }} className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#c2f12d]/40 overflow-hidden transition-all duration-500 cursor-pointer">
              {/* Gradient overlay on hover */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              
              {/* Content */}
              <div className="relative p-8 flex flex-col h-full">
                {/* Project Image */}
                <div className="mb-6">
                  <motion.div className="w-full h-48 rounded-2xl overflow-hidden border border-[#c2f12d]/20" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.5
              }}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#c2f12d] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => <motion.span key={tag} initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + i * 0.05
              }} className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-slate-300">
                      {tag}
                    </motion.span>)}
                </div>

                {/* View Project Link */}
                <motion.div className="flex items-center gap-2 text-sm font-semibold text-[#c2f12d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{
              x: 4
            }}>
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c2f12d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};