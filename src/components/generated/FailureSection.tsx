"use client";

import { motion } from 'framer-motion';
import { FAILURE_REASONS } from './constants';
import { containerVariants, itemVariants } from './animations';
export const FailureSection = () => {
  return <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.6
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
            <span className="text-[#252525]">Most MVPs </span>
            <span className="text-[#c2f12d]">fail</span>
          </motion.h2>
          <motion.p className="text-xl text-slate-600 max-w-2xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            Here's why—and how we fix it
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {FAILURE_REASONS.map(reason => {
          const Icon = reason.icon;
          return <motion.div key={reason.title} variants={itemVariants} whileHover={{
            y: -12,
            scale: 1.03,
            rotate: [0, -1, 1, 0],
            transition: {
              duration: 0.3
            }
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-[#c2f12d]/40 hover:shadow-2xl hover:shadow-[#c2f12d]/10 transition-all duration-500">
                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/5 to-transparent rounded-2xl" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} />
                <div className="relative">
                  <motion.div className="w-14 h-14 bg-gradient-to-br from-[#c2f12d] to-[#b0dc28] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#c2f12d]/30" whileHover={{
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }}>
                    <Icon className="w-7 h-7 text-[#252525]" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>;
        })}
        </motion.div>
      </div>
    </section>;
};