"use client";

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { WHY_BUILD_WITH_US } from './constants';
import GPhoto from '../img/Zenith Image 9438.png'
import { containerVariants, itemVariants } from './animations';
export const WhyBuildWithUsSection = () => {
  return <section className="relative py-32 px-6 bg-slate-50">
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
          <motion.h2 className="text-5xl md:text-6xl font-bold mb-6" initial={{
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
        }}>
            <span className="text-[#252525]">Why build with </span>
            <span className="text-[#c2f12d] bg-[#252525] px-4 rounded-lg">Zenith?</span>
          </motion.h2>
          <motion.p className="text-xl text-slate-600 max-w-3xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            AI-supercharged development meets human expertise—building the future, together.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {WHY_BUILD_WITH_US.map((item, index) => {
          const Icon = item.icon;
          return <motion.div key={item.title} variants={itemVariants} whileHover={{
            y: -12,
            scale: 1.03,
            transition: {
              duration: 0.3
            }
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-[#c2f12d]/40 hover:shadow-2xl hover:shadow-[#c2f12d]/10 transition-all duration-500">
                <motion.div className="absolute inset-0 bg-[#c2f12d]/5 rounded-2xl" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} />
                
                <div className="relative">
                  <motion.div className="w-16 h-16 bg-[#c2f12d] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#c2f12d]/30" whileHover={{
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }}>
                    <Icon className="w-8 h-8 text-[#252525]" />
                  </motion.div>
                  
                  <motion.h3 className="text-2xl font-bold mb-4 text-slate-900" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                    {item.title}
                  </motion.h3>
                  
                  <motion.p className="text-base text-slate-600 leading-relaxed" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.1
              }}>
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>;
        })}
        </motion.div>

        {/* Collaboration Card with Example Image */}
        {/* <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }} className="mt-16">
          <motion.div whileHover={{
          scale: 1.02,
          y: -5
        }} transition={{
          duration: 0.3
        }} className="relative p-8 md:p-12 bg-gray-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
            
            <div className="absolute inset-0 opacity-20">
            <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${GPhoto})` }}
    />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
            
              <div className='pt-24'>
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c2f12d]/10 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full mb-6" style={{
                display: "none"
              }}>
                  <Users className="w-4 h-4 text-[#c2f12d]" />
                
                </motion.div>

                <motion.h3 initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1
              }} className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Collaboration is key to our success
                </motion.h3>

                <motion.p initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2
              }} className="text-lg text-slate-300 leading-relaxed">
                  We work together every step of the way to ensure your product meets the highest
                  standards. Our collaborative approach combines AI-powered tools with human
                  expertise for exceptional results.
                </motion.p>
              </div>

             
            </div>
          </motion.div>
        </motion.div> */}

        {/* Additional Message */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="mt-16 text-center">
          <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed" whileHover={{
          scale: 1.02
        }}>
            <span className="font-semibold text-[#c2f12d] bg-[#252525] p-1 rounded-sm">AI is powerful</span>, but it's not a
            replacement for experience. We blend cutting-edge AI tools with human creativity,
            architecture expertise, and quality assurance to deliver products that actually work.
          </motion.p>
        </motion.div>
      </div>
    </section>;
};