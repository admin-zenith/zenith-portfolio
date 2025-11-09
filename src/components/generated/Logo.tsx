"use client";

import { motion } from 'framer-motion';
interface LogoProps {
  size?: number;
  gradientId?: string;
  filterId?: string;
}
export const Logo = ({
  size = 36,
  gradientId = 'logoGradient',
  filterId = 'logoGlow'
}: LogoProps) => {
  return <motion.svg width={size} height={size} viewBox="0 0 100 100" className="flex-shrink-0" whileHover={{
    rotate: [0, -10, 10, 0]
  }} transition={{
    duration: 0.5
  }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4ff3d" />
          <stop offset="50%" stopColor="#c2f12d" />
          <stop offset="100%" stopColor="#a8d420" />
        </linearGradient>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.8" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Mountain peak symbol */}
      <g filter={`url(#${filterId})`}>
        {/* Base mountain */}
        <path d="M50 20 L70 60 L30 60 Z" fill={`url(#${gradientId})`} opacity="0.3" />
        {/* Main peak */}
        <path d="M50 15 L65 50 L35 50 Z" fill={`url(#${gradientId})`} />
        {/* Accent peak line */}
        <path d="M50 15 L65 50" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        {/* Star/Zenith point at peak */}
        <circle cx="50" cy="15" r="4" fill="#d4ff3d" />
        <path d="M50 11 L50 19 M46 15 L54 15" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
        {/* Bottom base */}
        <line x1="30" y1="50" x2="70" y2="50" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
        {/* Additional sparkle elements */}
        <circle cx="40" cy="35" r="1.5" fill="#c2f12d" opacity="0.8" />
        <circle cx="60" cy="38" r="1.5" fill="#c2f12d" opacity="0.8" />
      </g>
    </motion.svg>;
};