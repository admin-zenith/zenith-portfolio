"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import { motion } from 'framer-motion';
interface LogoProps {
  size?: number;
  gradientId?: string;
  filterId?: string;
  mpid?: string;
}
export const Logo = ({
  size = 36,
  gradientId = 'logoGradient',
  filterId = 'logoGlow'
}: LogoProps) => {
  return <motion.svg data-magicpath-motion-tag="motion.svg" width={size} height={size} viewBox="0 0 100 100" className="flex-shrink-0" whileHover={{
    rotate: [0, -10, 10, 0]
  }} transition={{
    duration: 0.5
  }} data-magicpath-id="0" data-magicpath-path="Logo.tsx">
      <defs data-magicpath-id="1" data-magicpath-path="Logo.tsx">
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%" data-magicpath-id="2" data-magicpath-path="Logo.tsx">
          <stop offset="0%" stopColor="#d4ff3d" />
          <stop offset="50%" stopColor="#c2f12d" />
          <stop offset="100%" stopColor="#a8d420" />
        </linearGradient>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%" data-magicpath-id="3" data-magicpath-path="Logo.tsx">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" data-magicpath-id="4" data-magicpath-path="Logo.tsx" />
          <feOffset dx="0" dy="0" result="offsetblur" data-magicpath-id="5" data-magicpath-path="Logo.tsx" />
          <feComponentTransfer data-magicpath-id="6" data-magicpath-path="Logo.tsx">
            <feFuncA type="linear" slope="0.8" data-magicpath-id="7" data-magicpath-path="Logo.tsx" />
          </feComponentTransfer>
          <feMerge data-magicpath-id="8" data-magicpath-path="Logo.tsx">
            <feMergeNode data-magicpath-id="9" data-magicpath-path="Logo.tsx" />
            <feMergeNode in="SourceGraphic" data-magicpath-id="10" data-magicpath-path="Logo.tsx" />
          </feMerge>
        </filter>
      </defs>
      {/* Mountain peak symbol */}
      <g filter={`url(#${filterId})`} data-magicpath-id="11" data-magicpath-path="Logo.tsx">
        {/* Base mountain */}
        <path d="M50 20 L70 60 L30 60 Z" fill={`url(#${gradientId})`} opacity="0.3" data-magicpath-id="12" data-magicpath-path="Logo.tsx" />
        {/* Main peak */}
        <path d="M50 15 L65 50 L35 50 Z" fill={`url(#${gradientId})`} data-magicpath-id="13" data-magicpath-path="Logo.tsx" />
        {/* Accent peak line */}
        <path d="M50 15 L65 50" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" opacity="0.7" data-magicpath-id="14" data-magicpath-path="Logo.tsx" />
        {/* Star/Zenith point at peak */}
        <circle cx="50" cy="15" r="4" fill="#d4ff3d" data-magicpath-id="15" data-magicpath-path="Logo.tsx" />
        <path d="M50 11 L50 19 M46 15 L54 15" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" data-magicpath-id="16" data-magicpath-path="Logo.tsx" />
        {/* Bottom base */}
        <line x1="30" y1="50" x2="70" y2="50" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
        {/* Additional sparkle elements */}
        <circle cx="40" cy="35" r="1.5" fill="#c2f12d" opacity="0.8" data-magicpath-id="17" data-magicpath-path="Logo.tsx" />
        <circle cx="60" cy="38" r="1.5" fill="#c2f12d" opacity="0.8" data-magicpath-id="18" data-magicpath-path="Logo.tsx" />
      </g>
    </motion.svg>;
};