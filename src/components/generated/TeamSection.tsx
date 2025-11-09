"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const TeamSection = () => {
  return <section id="team" className="relative py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20">
          {/* AI Empowerment Badge */}
          <motion.div initial={{
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
        }}>
            <motion.div animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}>
              <Sparkles className="w-4 h-4 text-[#c2f12d]" />
            </motion.div>
            <span className="text-sm font-semibold text-[#252525]">
              A human team empowered by AI tools
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
          color: '#252525'
        }}>
            Meet the <span className="text-[#c2f12d]">team</span>
          </h2>
          <p className="text-xl text-slate-600">Experts in turning ideas into successful products</p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {TEAM_MEMBERS.map((member, index) => <motion.div key={member.name} variants={itemVariants} whileHover={{
          y: -15,
          scale: 1.02
        }} className="group relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-200 shadow-lg">
                {/* Image with grayscale filter that transitions to color on hover */}
                <motion.img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" whileHover={{
              scale: 1.1
            }} transition={{
              duration: 0.6
            }} />
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Name and title overlay - always visible but animates on hover */}
                <motion.div className="absolute bottom-0 left-0 right-0 p-6 z-10" initial={{
              y: 0
            }} whileHover={{
              y: -10
            }} transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 300
            }}>
                  <motion.h3 className="text-xl font-bold mb-1 text-white group-hover:text-[#c2f12d] transition-colors duration-500" initial={{
                opacity: 0.9
              }} whileHover={{
                opacity: 1
              }}>
                    {member.name}
                  </motion.h3>
                  <motion.p className="text-sm text-slate-200 font-medium group-hover:text-[#c2f12d] transition-colors duration-500" initial={{
                opacity: 0.8
              }} whileHover={{
                opacity: 1
              }}>
                    {member.role}
                  </motion.p>
                </motion.div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-[#c2f12d]/50 transition-all duration-500" />
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};