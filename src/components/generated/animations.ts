// Animation variants and configurations for Framer Motion
import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: 'spring', stiffness: 100, damping: 20 }
};

export const slideInLeft = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 }
};

export const slideInRight = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 }
};

export const springConfig = {
  damping: 25,
  stiffness: 300
};

export const smoothScrollConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
};
