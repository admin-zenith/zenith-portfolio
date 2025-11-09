"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
export const FloatingParticles = () => {
  const particles = Array.from({
    length: 20
  });
  return <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" data-magicpath-id="0" data-magicpath-path="FloatingParticles.tsx">
      {particles.map((_, i) => <motion.div data-magicpath-motion-tag="motion.div" key={i} className="absolute w-1 h-1 bg-[#c2f12d]/30 rounded-full" initial={{
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.5 + 0.5
    }} animate={{
      y: [null, Math.random() * window.innerHeight],
      x: [null, Math.random() * window.innerWidth],
      opacity: [0, 1, 0]
    }} transition={{
      duration: Math.random() * 10 + 10,
      repeat: Infinity,
      ease: 'linear',
      delay: Math.random() * 5
    }} data-magicpath-id="1" data-magicpath-path="FloatingParticles.tsx" />)}
    </div>;
};