"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { springConfig } from './animations';
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  mpid?: string;
}
export const MagneticButton = ({
  children,
  className = '',
  onClick
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return <motion.button data-magicpath-motion-tag="motion.button" ref={ref} style={{
    x: xSpring,
    y: ySpring
  }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} onClick={onClick} data-magicpath-id="0" data-magicpath-path="MagneticButton.tsx">
      {children}
    </motion.button>;
};