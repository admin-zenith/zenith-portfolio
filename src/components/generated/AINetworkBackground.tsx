"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
import { useMemo } from 'react';
interface Node {
  x: number;
  y: number;
  size: number;
  mpid?: string;
}
export const AINetworkBackground = () => {
  // Generate nodes for the neural network
  const nodes = useMemo<Node[]>(() => {
    const nodeCount = 25;
    const generated: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      generated.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2
      });
    }
    return generated;
  }, []);

  // Generate connections between nearby nodes
  const connections = useMemo(() => {
    const lines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }> = [];
    const maxDistance = 20;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
          lines.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y
          });
        }
      }
    }
    return lines;
  }, [nodes]);
  return <SortableContainer dndKitId="9bdffcb9-348f-47d7-b4b3-5e7125851668" containerType="regular" prevTag="div" className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" data-magicpath-id="0" data-magicpath-path="AINetworkBackground.tsx">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" data-magicpath-id="1" data-magicpath-path="AINetworkBackground.tsx">
        <defs data-magicpath-id="2" data-magicpath-path="AINetworkBackground.tsx">
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-magicpath-id="3" data-magicpath-path="AINetworkBackground.tsx">
            <stop offset="0%" stopColor="#c2f12d" stopOpacity="0" />
            <stop offset="50%" stopColor="#c2f12d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c2f12d" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Render connections */}
        {connections.map((line, i) => <motion.line data-magicpath-motion-tag="motion.line" key={`line-${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="url(#lineGradient)" strokeWidth="0.15" initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: [0, 1, 0],
        opacity: [0, 0.6, 0]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: 'easeInOut'
      }} data-magicpath-uuid={(line as any)["mpid"] ?? "unsafe"} data-magicpath-id="4" data-magicpath-path="AINetworkBackground.tsx" />)}

        {/* Render nodes */}
        {nodes.map((node, i) => <motion.circle data-magicpath-motion-tag="motion.circle" key={`node-${i}`} cx={node.x} cy={node.y} r={node.size / 10} fill="#c2f12d" initial={{
        scale: 0,
        opacity: 0
      }} animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.8, 0.4]
      }} transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: 'easeInOut'
      }} data-magicpath-uuid={(node as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="AINetworkBackground.tsx" />)}

        {/* Data flow particles */}
        {connections.slice(0, 8).map((line, i) => <motion.circle data-magicpath-motion-tag="motion.circle" key={`particle-${i}`} r="0.4" fill="#c2f12d" initial={{
        cx: line.x1,
        cy: line.y1,
        opacity: 0
      }} animate={{
        cx: [line.x1, line.x2, line.x1],
        cy: [line.y1, line.y2, line.y1],
        opacity: [0, 1, 0]
      }} transition={{
        duration: 4,
        repeat: Infinity,
        delay: i * 0.5,
        ease: 'linear'
      }} data-magicpath-uuid={(line as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="AINetworkBackground.tsx" />)}
      </svg>
    </SortableContainer>;
};