"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { APPROACH_STEPS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const ApproachSection = () => {
  return <SortableContainer dndKitId="8eaeaa25-79b9-42ad-8e85-06d3ea4d872f" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="0" data-magicpath-path="ApproachSection.tsx">
      <SortableContainer dndKitId="6f5e7c6e-0f68-404f-84eb-658bb46d1541" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="ApproachSection.tsx">
        <SortableContainer dndKitId="214343d5-18e2-4caa-9ac4-402637464c75" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="2" data-magicpath-path="ApproachSection.tsx">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="3" data-magicpath-path="ApproachSection.tsx">
            How we build{' '}
            <motion.span data-magicpath-motion-tag="motion.span" className="text-[#c2f12d]" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} data-magicpath-id="4" data-magicpath-path="ApproachSection.tsx">
              great products
            </motion.span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto" data-magicpath-id="5" data-magicpath-path="ApproachSection.tsx">
            A practical, sprint-based workflow designed for speed and quality.
          </p>
        </SortableContainer>

        <SortableContainer dndKitId="446840b3-0911-4965-9065-0089946d5bc1" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} data-magicpath-id="6" data-magicpath-path="ApproachSection.tsx">
          {APPROACH_STEPS.map((step, index) => {
          const Icon = step.icon;
          return <motion.div data-magicpath-motion-tag="motion.div" key={step.title} variants={itemVariants} whileHover={{
            scale: 1.03,
            y: -8,
            rotateY: 5,
            transition: {
              duration: 0.3
            }
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 overflow-hidden" style={{
            perspective: 1000
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="ApproachSection.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/5" initial={{
              opacity: 0,
              scale: 0.8
            }} whileHover={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="ApproachSection.tsx" />

                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="ApproachSection.tsx">
                  <div className="flex items-start justify-between mb-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="ApproachSection.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                  rotate: [0, -15, 15, 0],
                  scale: 1.1
                }} transition={{
                  duration: 0.6
                }} className="w-16 h-16 bg-[#c2f12d] rounded-2xl flex items-center justify-center shadow-xl shadow-[#c2f12d]/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="ApproachSection.tsx">
                      <Icon className="w-8 h-8 text-[#252525]" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="ApproachSection.tsx" />
                    </motion.div>
                    <motion.span data-magicpath-motion-tag="motion.span" className="text-6xl font-bold bg-gradient-to-br from-white/5 to-white/0 bg-clip-text text-transparent" initial={{
                  opacity: 0,
                  x: 20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1
                }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="13" data-magicpath-path="ApproachSection.tsx">
                      {step.number}
                    </motion.span>
                  </div>
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-2xl font-bold mb-4" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.2
              }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="14" data-magicpath-path="ApproachSection.tsx">
                    {step.title}
                  </motion.h3>
                  <motion.p data-magicpath-motion-tag="motion.p" className="text-slate-400 leading-relaxed text-base" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.3
              }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="15" data-magicpath-path="ApproachSection.tsx">
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>;
        })}
        </SortableContainer>

        {/* Team Photo */}
        <SortableContainer dndKitId="2789e7d3-514e-480b-8130-e1711928bd7f" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="mt-20" data-magicpath-id="16" data-magicpath-path="ApproachSection.tsx">
          <SortableContainer dndKitId="9b0a48c8-651e-4868-ad16-95b2e0992c46" containerType="regular" prevTag="div" className="relative rounded-3xl overflow-hidden group" data-magicpath-id="17" data-magicpath-path="ApproachSection.tsx">
            {/* Gradient Overlay */}
            <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/40 to-transparent z-10" initial={{
            opacity: 0.7
          }} whileHover={{
            opacity: 0.5
          }} transition={{
            duration: 0.4
          }} data-magicpath-id="18" data-magicpath-path="ApproachSection.tsx" />

            {/* Glow Effect */}
            <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-[#c2f12d]/20 blur-3xl -z-10" animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }} data-magicpath-id="19" data-magicpath-path="ApproachSection.tsx" />

            {/* Team Photo */}
            <motion.img data-magicpath-motion-tag="motion.img" src="https://images.unsplash.com/photo-1522071820081-0a1dd7228f2d?w=1200&h=600&fit=crop&q=80" alt="Team collaborating on a project" className="w-full h-[400px] md:h-[500px] object-cover" whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="20" data-magicpath-path="ApproachSection.tsx" />

            {/* Text Overlay */}
            <SortableContainer dndKitId="d6b507f8-19da-4e29-8cf7-00184ed14639" containerType="regular" prevTag="motion.div" className="absolute bottom-0 left-0 right-0 p-10 z-20" initial={{
            y: 20,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5
          }} data-magicpath-id="21" data-magicpath-path="ApproachSection.tsx">
              <SortableContainer dndKitId="224687bd-3e7f-4f66-a68b-c1d15167f848" containerType="regular" prevTag="motion.div" className="flex items-center space-x-3 mb-3" initial={{
              x: -20,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.6
            }} data-magicpath-id="22" data-magicpath-path="ApproachSection.tsx">
                <Users className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="23" data-magicpath-path="ApproachSection.tsx" />
                <span className="text-[#c2f12d] text-sm font-semibold uppercase tracking-wider" data-magicpath-id="24" data-magicpath-path="ApproachSection.tsx">
                  Our Team
                </span>
              </SortableContainer>
              <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-3xl md:text-4xl font-bold text-white mb-3" initial={{
              x: -20,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.7
            }} data-magicpath-id="25" data-magicpath-path="ApproachSection.tsx">
                Collaboration is key to our success
              </motion.h3>
              <motion.p data-magicpath-motion-tag="motion.p" className="text-lg text-slate-300 max-w-2xl" initial={{
              x: -20,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.8
            }} data-magicpath-id="26" data-magicpath-path="ApproachSection.tsx">
                We work together every step of the way to ensure your product meets the highest standards.
              </motion.p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};