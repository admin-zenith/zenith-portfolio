"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { APPROACH_STEPS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const ApproachSection = () => {
  return <SortableContainer dndKitId="69184542-a6cc-44de-ac9c-066dfa2e8e81" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="0" data-magicpath-path="ApproachSection.tsx">
      <SortableContainer dndKitId="0e7d444b-eccc-4c08-901c-b1922ee0aaa8" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="ApproachSection.tsx">
        <SortableContainer dndKitId="ec362fae-e80d-4d55-860c-41f42a89d9a3" containerType="regular" prevTag="motion.div" initial={{
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

        <SortableContainer dndKitId="943c4840-7252-461c-9751-b1c3e0148837" containerType="collection" prevTag="motion.div" className="flex flex-wrap justify-center gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
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
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]" style={{
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
        <SortableContainer dndKitId="7c2d2eb5-2f95-4f7d-8005-2a3f660193e8" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="fc14dcf4-64ca-44a6-93fd-96ba1942fa76" containerType="regular" prevTag="div" className="relative rounded-3xl overflow-hidden group" data-magicpath-id="17" data-magicpath-path="ApproachSection.tsx">
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
            <SortableContainer dndKitId="2c74a29a-f511-446b-9e31-0a6acf0a6fb1" containerType="regular" prevTag="motion.div" className="absolute bottom-0 left-0 right-0 p-10 z-20" initial={{
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
              <SortableContainer dndKitId="fa03eb6f-1f1b-4847-a1d1-71bc1996a5b1" containerType="regular" prevTag="motion.div" className="flex items-center space-x-3 mb-3" initial={{
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