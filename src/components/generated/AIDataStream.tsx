"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
export const AIDataStream = () => {
  const streams = Array.from({
    length: 5
  });
  return <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10" data-magicpath-id="0" data-magicpath-path="AIDataStream.tsx">
      {streams.map((_, i) => <motion.div data-magicpath-motion-tag="motion.div" key={i} className="absolute w-px bg-gradient-to-b from-transparent via-[#c2f12d] to-transparent" style={{
      left: `${20 + i * 20}%`,
      height: '100%'
    }} initial={{
      y: '-100%',
      opacity: 0
    }} animate={{
      y: '200%',
      opacity: [0, 1, 0]
    }} transition={{
      duration: 3 + i * 0.5,
      repeat: Infinity,
      delay: i * 0.4,
      ease: 'linear'
    }} data-magicpath-id="1" data-magicpath-path="AIDataStream.tsx" />)}
      
      {/* Horizontal data pulses */}
      {Array.from({
      length: 3
    }).map((_, i) => <motion.div data-magicpath-motion-tag="motion.div" key={`h-${i}`} className="absolute h-px bg-gradient-to-r from-transparent via-[#c2f12d] to-transparent" style={{
      top: `${30 + i * 20}%`,
      width: '100%'
    }} initial={{
      x: '-100%',
      opacity: 0
    }} animate={{
      x: '200%',
      opacity: [0, 1, 0]
    }} transition={{
      duration: 4 + i * 0.5,
      repeat: Infinity,
      delay: i * 0.6,
      ease: 'linear'
    }} data-magicpath-id="2" data-magicpath-path="AIDataStream.tsx" />)}
    </div>;
};