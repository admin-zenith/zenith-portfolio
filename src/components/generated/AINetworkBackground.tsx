"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
export const AINetworkBackground = () => {
  return <SortableContainer dndKitId="af7eea80-1236-4572-980b-ba417a9185e1" containerType="regular" prevTag="div" className="absolute inset-0 overflow-hidden pointer-events-none" data-magicpath-id="0" data-magicpath-path="AINetworkBackground.tsx">
      {/* Gradient Orbs */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c2f12d]/20 rounded-full blur-3xl" animate={{
      x: [0, 50, 0],
      y: [0, 30, 0],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="1" data-magicpath-path="AINetworkBackground.tsx" />
      
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" animate={{
      x: [0, -40, 0],
      y: [0, -20, 0],
      scale: [1, 1.3, 1]
    }} transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="2" data-magicpath-path="AINetworkBackground.tsx" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(194,241,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(194,241,45,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" data-magicpath-id="3" data-magicpath-path="AINetworkBackground.tsx" />

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" data-magicpath-id="4" data-magicpath-path="AINetworkBackground.tsx">
        <defs data-magicpath-id="5" data-magicpath-path="AINetworkBackground.tsx">
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%" data-magicpath-id="6" data-magicpath-path="AINetworkBackground.tsx">
            <stop offset="0%" stopColor="#c2f12d" stopOpacity="0" />
            <stop offset="50%" stopColor="#c2f12d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c2f12d" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Flowing curves */}
        <motion.path data-magicpath-motion-tag="motion.path" d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" initial={{
        pathLength: 0
      }} animate={{
        pathLength: [0, 1, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="7" data-magicpath-path="AINetworkBackground.tsx" />
        
        <motion.path data-magicpath-motion-tag="motion.path" d="M1000,200 Q750,250 500,200 T0,200" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" initial={{
        pathLength: 0
      }} animate={{
        pathLength: [0, 1, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} data-magicpath-id="8" data-magicpath-path="AINetworkBackground.tsx" />
      </svg>

      {/* Floating subtle particles */}
      {Array.from({
      length: 15
    }).map((_, i) => <motion.div data-magicpath-motion-tag="motion.div" key={i} className="absolute w-1 h-1 bg-[#c2f12d] rounded-full opacity-40" style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }} animate={{
      y: [0, -100, 0],
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0]
    }} transition={{
      duration: 8 + Math.random() * 4,
      repeat: Infinity,
      delay: Math.random() * 5,
      ease: "easeInOut"
    }} data-magicpath-id="9" data-magicpath-path="AINetworkBackground.tsx" />)}
    </SortableContainer>;
};