"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { WHY_BUILD_WITH_US } from './constants';
import { containerVariants, itemVariants } from './animations';
export const WhyBuildWithUsSection = () => {
  return <SortableContainer dndKitId="aa54fd42-9536-48fc-aa2e-432a5b02ffd2" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="0" data-magicpath-path="WhyBuildWithUsSection.tsx">
      <SortableContainer dndKitId="612d2b8e-94ac-475e-a431-d44e527549b5" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="1" data-magicpath-path="WhyBuildWithUsSection.tsx">
        <SortableContainer dndKitId="f992f9f2-a041-4064-acf5-11812ecf477f" containerType="regular" prevTag="motion.div" initial={{
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

        <SortableContainer dndKitId="18c3e437-76bc-4f4c-8d1a-31f34914cbf7" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
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

        {/* Collaboration Card with Example Image */}
        <SortableContainer dndKitId="92c85466-c098-4820-818f-6d0ca9743e29" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }} className="mt-16" data-magicpath-id="15" data-magicpath-path="WhyBuildWithUsSection.tsx">
          <SortableContainer dndKitId="fd39c0e0-abf5-4c89-815c-093506fa2562" containerType="regular" prevTag="motion.div" whileHover={{
          scale: 1.02,
          y: -5
        }} transition={{
          duration: 0.3
        }} className="relative p-8 md:p-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden" data-magicpath-id="16" data-magicpath-path="WhyBuildWithUsSection.tsx">
            {/* Background Pattern */}
            <SortableContainer dndKitId="072a72c4-88d6-4959-9145-352c5c79c263" containerType="regular" prevTag="div" className="absolute inset-0 opacity-5" data-magicpath-id="17" data-magicpath-path="WhyBuildWithUsSection.tsx">
              <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} data-magicpath-id="18" data-magicpath-path="WhyBuildWithUsSection.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="45f0d7d5-4fff-4421-963c-0b4393bd6a27" containerType="regular" prevTag="div" className="relative grid md:grid-cols-2 gap-8 items-center" data-magicpath-id="19" data-magicpath-path="WhyBuildWithUsSection.tsx">
              {/* Left Side - Text Content */}
              <SortableContainer dndKitId="fbbdae77-b8fc-4c46-8902-147216afb17a" containerType="regular" prevTag="div" data-magicpath-id="20" data-magicpath-path="WhyBuildWithUsSection.tsx">
                <SortableContainer dndKitId="4f416921-79cc-46d4-9bd8-993e9a1b00c7" containerType="regular" prevTag="motion.div" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c2f12d]/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full mb-6" data-magicpath-id="21" data-magicpath-path="WhyBuildWithUsSection.tsx">
                  <Users className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="22" data-magicpath-path="WhyBuildWithUsSection.tsx" />
                  <span className="text-sm font-semibold text-[#c2f12d]" data-magicpath-id="23" data-magicpath-path="WhyBuildWithUsSection.tsx">OUR TEAM</span>
                </SortableContainer>

                <motion.h3 data-magicpath-motion-tag="motion.h3" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1
              }} className="text-3xl md:text-4xl font-bold mb-4 text-white" data-magicpath-id="24" data-magicpath-path="WhyBuildWithUsSection.tsx">
                  Collaboration is key to our success
                </motion.h3>

                <motion.p data-magicpath-motion-tag="motion.p" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2
              }} className="text-lg text-slate-300 leading-relaxed" data-magicpath-id="25" data-magicpath-path="WhyBuildWithUsSection.tsx">
                  We work together every step of the way to ensure your product meets the highest
                  standards. Our collaborative approach combines AI-powered tools with human
                  expertise for exceptional results.
                </motion.p>
              </SortableContainer>

              {/* Right Side - Example Image */}
              <SortableContainer dndKitId="64834742-d529-47fe-ad84-c2cb0ab057a8" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3,
              duration: 0.5
            }} className="relative" data-magicpath-id="26" data-magicpath-path="WhyBuildWithUsSection.tsx">
                <SortableContainer dndKitId="02cc0fc3-d369-4a65-9a6c-c39975967a5b" containerType="regular" prevTag="div" className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl" data-magicpath-id="27" data-magicpath-path="WhyBuildWithUsSection.tsx">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" alt="Team collaboration" className="w-full h-full object-cover" data-magicpath-id="28" data-magicpath-path="WhyBuildWithUsSection.tsx" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" data-magicpath-id="29" data-magicpath-path="WhyBuildWithUsSection.tsx" />
                  
                  {/* Floating badge on image */}
                  <motion.div data-magicpath-motion-tag="motion.div" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.5
                }} className="absolute bottom-4 right-4 bg-[#c2f12d] text-[#252525] px-4 py-2 rounded-full text-sm font-bold shadow-lg" data-magicpath-id="30" data-magicpath-path="WhyBuildWithUsSection.tsx">
                    ✨ Human + AI
                  </motion.div>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Additional Message */}
        <SortableContainer dndKitId="01f2c748-062d-4501-99a6-0c2c5e1245aa" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="mt-16 text-center" data-magicpath-id="31" data-magicpath-path="WhyBuildWithUsSection.tsx">
          <motion.p data-magicpath-motion-tag="motion.p" className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" whileHover={{
          scale: 1.02
        }} data-magicpath-id="32" data-magicpath-path="WhyBuildWithUsSection.tsx">
            <span className="font-semibold text-[#c2f12d]" data-magicpath-id="33" data-magicpath-path="WhyBuildWithUsSection.tsx">AI is powerful</span>, but it's not a
            replacement for experience. We blend cutting-edge AI tools with human creativity,
            architecture expertise, and quality assurance to deliver products that actually work.
          </motion.p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};