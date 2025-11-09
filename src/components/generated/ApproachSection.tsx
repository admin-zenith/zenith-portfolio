"use client";

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { APPROACH_STEPS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const ApproachSection = () => {
  return <section id="how-we-work" className="relative py-32 px-6 bg-[#252525]">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How we build{' '}
            <motion.span className="text-[#c2f12d]" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }}>
              great products
            </motion.span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A practical, sprint-based workflow designed for speed and quality.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {APPROACH_STEPS.map((step, index) => {
          const Icon = step.icon;
          return <motion.div key={step.title} variants={itemVariants} whileHover={{
            scale: 1.03,
            y: -8,
            rotateY: 5,
            transition: {
              duration: 0.3
            }
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]" style={{
            perspective: 1000
          }}>
                <motion.div className="absolute inset-0 bg-[#c2f12d]/10" initial={{
              opacity: 0,
              scale: 0.8
            }} whileHover={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-8">
                    <motion.div whileHover={{
                  rotate: [0, -15, 15, 0],
                  scale: 1.1
                }} transition={{
                  duration: 0.6
                }} className="w-16 h-16 bg-[#c2f12d] rounded-2xl flex items-center justify-center shadow-xl shadow-[#c2f12d]/30">
                      <Icon className="w-8 h-8 text-[#252525]" />
                    </motion.div>
                    <motion.span className="text-6xl font-bold text-white/5" initial={{
                  opacity: 0,
                  x: 20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1
                }}>
                      {step.number}
                    </motion.span>
                  </div>
                  <motion.h3 className="text-2xl font-bold mb-4" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.2
              }}>
                    {step.title}
                  </motion.h3>
                  <motion.p className="text-slate-400 leading-relaxed text-base" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.3
              }}>
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>;
        })}
        </motion.div>

        {/* Team Photo */}
        <motion.div initial={{
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
      }} className="mt-20">
          <div className="relative rounded-3xl overflow-hidden group">
            {/* Gradient Overlay */}
            <motion.div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/40 to-transparent z-10" initial={{
            opacity: 0.7
          }} whileHover={{
            opacity: 0.5
          }} transition={{
            duration: 0.4
          }} style={{
            display: "none"
          }} />

            {/* Glow Effect */}
            <motion.div className="absolute inset-0 bg-[#c2f12d]/20 blur-3xl -z-10" animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />

            {/* Team Photo */}
            <motion.img src="https://images.unsplash.com/photo-1522071820081-0a1dd7228f2d?w=1200&h=600&fit=crop&q=80" alt="Team collaborating on a project" className="w-full h-[400px] md:h-[500px] object-cover" whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.6
          }} style={{
            display: "none"
          }} />

            {/* Text Overlay */}
            <motion.div className="absolute bottom-0 left-0 right-0 p-10 z-20" initial={{
            y: 20,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5
          }}>
              <motion.div className="flex items-center space-x-3 mb-3" initial={{
              x: -20,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.6
            }}>
                <Users className="w-6 h-6 text-[#c2f12d]" />
                <span className="text-[#c2f12d] text-sm font-semibold uppercase tracking-wider">
                  Our Team
                </span>
              </motion.div>
              <motion.h3 className="text-3xl md:text-4xl font-bold text-white mb-3" initial={{
              x: -20,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.7
            }}>
                Collaboration is key to our success
              </motion.h3>
              <motion.p className="text-lg text-slate-300 max-w-2xl" initial={{
              x: -20,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.8
            }}>
                We work together every step of the way to ensure your product meets the highest standards.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};