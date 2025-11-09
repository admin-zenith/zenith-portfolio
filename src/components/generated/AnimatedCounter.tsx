"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  mpid?: string;
}
export const AnimatedCounter = ({
  value,
  duration = 1
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef);
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  return <span ref={nodeRef} data-magicpath-id="0" data-magicpath-path="AnimatedCounter.tsx">{count}</span>;
};