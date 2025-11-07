"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useAnimation, AnimatePresence } from 'framer-motion';
import { Rocket, ArrowRight, CheckCircle2, Code2, Palette, Zap, BarChart3, Users, Clock, DollarSign, Calendar, MessageSquare, Github, Figma, ChevronDown, ChevronUp, Target, TrendingUp, XCircle, AlertCircle, RefreshCw, Sparkles, Shield, Lock, Layers } from 'lucide-react';
type ZenithPortfolioProps = Record<string, never>;

// Tech Stack
const techStack = ['Laravel', 'React', 'Next.js', 'Node.js', 'Tailwind', 'MySQL', 'AWS', 'TypeScript'];

// Failure Reasons
const failureReasons = [{
  icon: Target,
  title: 'No clear direction',
  description: 'Building features without solving real problems.',
  mpid: "ca296e3c-8584-461d-9f52-9c4144e13eb9"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "7adb7140-555e-43ce-ae8e-ca93a45318a3"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "bebf1015-a1c0-40b0-ad80-67d4b34dbaef"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "cde6350f-8f20-485e-8dc6-bda0d6981063"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "56a53bc7-b6e9-480d-9cb7-ab0f8da18097"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "7aedc75e-4524-486b-9d91-0d807222b45c"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "37a34e6b-0050-4ba1-9fae-4a0f5f2f66d4"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "34561026-41dc-4c77-997f-838aa4506841"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "1dcd3c71-44ac-4b75-8526-71a7b34d9c37"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "3f48cde8-053a-46c3-b87b-4fc1a08e3484"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "b0fa4d1e-4269-4154-a711-b36a39a36f05"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "9bd234eb-fec8-4105-8709-e81a94873e5f"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "49820889-c49c-4a6f-a88c-3f33a881c661"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "21919816-90fb-409b-ac17-a3e06ad60241"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "2491024c-42e0-488a-9b25-dde1bf9efa20"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "a3edb9e2-c781-408d-b150-4a109572f5bc"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "62e66772-c037-4551-b778-cd561660fa19"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "6ac92c3d-370a-4a59-bd0f-8c87fd0ab00d"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "ea3d72cb-88a5-4caa-936e-6c5ae34a3e21"
}] as any[];

// Animated Counter Component
const AnimatedCounter = ({
  value,
  duration = 1
}: {
  value: number;
  duration?: number;
}) => {
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
  return <span ref={nodeRef} data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">{count}</span>;
};

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({
    length: 20
  });
  return <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
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
      ease: "linear",
      delay: Math.random() * 5
    }} data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />)}
    </div>;
};

// Magnetic Button Component
const MagneticButton = ({
  children,
  className = "",
  onClick
}: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = {
    damping: 25,
    stiffness: 300
  };
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
  }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} onClick={onClick} data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx">
      {children}
    </motion.button>;
};
export const ZenithPortfolio = (props: ZenithPortfolioProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [teamSize, setTeamSize] = useState(2);
  const [sprints, setSprints] = useState(2);
  const {
    scrollYProgress
  } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.98]);
  const heroY = useTransform(smoothProgress, [0, 0.15], [0, -50]);
  const calculatePrice = () => {
    const ratePerDevPerSprint = 120000;
    const total = teamSize * sprints * ratePerDevPerSprint;
    return total.toLocaleString();
  };
  const getDuration = () => sprints * 2;
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scroll to pricing/contact section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle Get Quote - scroll to pricing section
  const handleGetQuote = () => {
    scrollToSection('pricing');
  };

  // Handle Book Call - scroll to CTA section or open calendar
  const handleBookCall = () => {
    scrollToSection('cta');
    // You could also integrate with Calendly or similar:
    // window.open('https://calendly.com/your-link', '_blank');
  };

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  return <SortableContainer dndKitId="f433c66a-b9d4-4857-b0da-ad33492019a9" containerType="regular" prevTag="div" className="min-h-screen bg-[#252525] text-white overflow-x-hidden" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Floating Particles */}
      <FloatingParticles data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Animated Grid Background */}
      <SortableContainer dndKitId="77d8c2b0-011c-4dba-81fe-7371911daf11" containerType="regular" prevTag="motion.div" className="fixed inset-0 z-0" style={{
      opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.3])
    }} data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2f12d10_1px,transparent_1px),linear-gradient(to_bottom,#c2f12d10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Floating Orbs with Enhanced Animation */}
      <SortableContainer dndKitId="919bfd60-1d75-4a50-8843-f51897f37fe1" containerType="regular" prevTag="div" className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
        x: [0, 100, 0],
        y: [0, 50, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.2, 0.1],
        x: [0, -100, 0],
        y: [0, -50, 0]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation with slide-down animation */}
      <SortableContainer dndKitId="f299e412-eb14-4868-8a0a-bf6df492aba6" containerType="regular" prevTag="motion.nav" initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      type: "spring",
      stiffness: 100,
      damping: 20
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="0341919d-394c-42cb-b0f5-427ef3b3ff5e" containerType="regular" prevTag="div" className="bg-[#252525]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 px-8 py-3" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e451a091-89cb-4a8e-b9a6-510d8c3cb3a4" containerType="regular" prevTag="div" className="flex items-center justify-between gap-8" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo with bounce */}
            <SortableContainer dndKitId="ff96f5de-9bfc-4e99-89b0-8731b8951620" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.svg data-magicpath-motion-tag="motion.svg" width="32" height="32" viewBox="0 0 100 100" className="flex-shrink-0" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }} data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.path data-magicpath-motion-tag="motion.path" d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#c2f12d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" initial={{
                pathLength: 0
              }} animate={{
                pathLength: 1
              }} transition={{
                duration: 2,
                ease: "easeInOut"
              }} data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx" />
              </motion.svg>
              <SortableContainer dndKitId="d61447ca-9170-461f-84d4-576edc6744a9" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-xl font-bold text-white tracking-tight" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                <motion.span data-magicpath-motion-tag="motion.span" className="text-xl font-bold text-[#c2f12d]" animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
                  .
                </motion.span>
              </SortableContainer>
            </SortableContainer>

            {/* Nav Links with stagger */}
            <motion.div data-magicpath-motion-tag="motion.div" className="hidden md:flex items-center space-x-1" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
              {['How We Work', 'Projects', 'Pricing', 'FAQs'].map((item, i) => <motion.a data-magicpath-motion-tag="motion.a" key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} variants={itemVariants} whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
                  {item}
                </motion.a>)}
            </motion.div>

            {/* CTA Button with magnetic effect */}
            <MagneticButton className="relative px-5 py-2 rounded-full bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] text-sm font-bold overflow-hidden transition-all duration-300 group" onClick={handleGetQuote} data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" className="absolute inset-0 bg-white" initial={{
              scale: 0,
              opacity: 0
            }} whileHover={{
              scale: 1,
              opacity: 0.2
            }} transition={{
              duration: 0.3
            }} data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">Get Started</span>
            </MagneticButton>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section with Parallax */}
      <SortableContainer dndKitId="be805354-03c1-4cfe-8b5b-2c15b038efa3" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c9a63c70-2d24-4f44-adfa-79b909d4a574" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale,
        y: heroY
      }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="7b7f39c4-2d56-4aba-afda-d688d0c8a984" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Badge with shimmer effect */}
            <SortableContainer dndKitId="0b6426c5-1f17-4ea7-ba90-1a69a70258f1" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            type: "spring"
          }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{
              x: "-100%"
            }} whileHover={{
              x: "100%"
            }} transition={{
              duration: 0.6
            }} data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx" />
              <SortableContainer dndKitId="196b17ce-50ba-4cfb-9fc0-44ef6ab73893" containerType="regular" prevTag="motion.div" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }} data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
                <Shield className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-sm font-medium bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent relative" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
                Trusted by 100+ Startups Worldwide
              </span>
            </SortableContainer>

            {/* Headline with word animation */}
            <motion.h1 data-magicpath-motion-tag="motion.h1" className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" initial="hidden" animate="visible" variants={containerVariants} data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" variants={itemVariants} className="inline-block" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
                Ship your MVP in
              </motion.span>
              <br data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative inline-block" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" className="text-[#c2f12d]" variants={itemVariants} whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring"
              }} data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
                  30–60 days
                </motion.span>
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-2 bg-[#c2f12d]/20 blur-2xl -z-10" animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }} data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx" />
              </span>
            </motion.h1>

            {/* Subheadline with fade-up */}
            <motion.p data-magicpath-motion-tag="motion.p" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch. Fast, affordable, and built to scale.
            </motion.p>

            {/* CTA Buttons with enhanced hover */}
            <SortableContainer dndKitId="a2faf74d-f44e-4795-8743-f7c16d5ef0e0" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
              <MagneticButton className="group relative px-8 py-4 rounded-xl bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] font-bold overflow-hidden transition-all duration-300" onClick={handleGetQuote} data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-[#b0dc28] to-[#c2f12d]" initial={{
                x: "-100%"
              }} whileHover={{
                x: "0%"
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="relative flex items-center space-x-2" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                  <SortableContainer dndKitId="dee109ed-1641-41b9-a641-b35a04935419" containerType="regular" prevTag="motion.div" animate={{
                  x: [0, 5, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
                    <ArrowRight className="w-5 h-5" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </span>
              </MagneticButton>

              <MagneticButton className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#c2f12d]/50 text-white rounded-xl font-semibold transition-all duration-300 group" onClick={handleBookCall} data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="flex items-center space-x-2" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="18a4c2fb-2ea2-4811-8169-d3bc3ad93475" containerType="regular" prevTag="motion.div" animate={{
                  rotate: [0, 360]
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }} data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                  <span data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
                </span>
              </MagneticButton>
            </SortableContainer>

            {/* Tech Stack with stagger animation */}
            <SortableContainer dndKitId="e6a421c9-0df8-4927-bad2-69d6a986fdcf" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={containerVariants} className="space-y-4" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
                Built With
              </motion.p>
              <SortableContainer dndKitId="423815a3-b635-4d36-87b7-77fbec0a3dd2" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
                {techStack.map((tech, i) => <motion.div data-magicpath-motion-tag="motion.div" key={tech} variants={itemVariants} whileHover={{
                scale: 1.1,
                y: -2,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.3
                }
              }} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#c2f12d]/50 hover:bg-white/10 transition-all duration-300 cursor-default" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator with bounce */}
        <SortableContainer dndKitId="f6f05f5a-8c5a-4b9d-82b3-9ad9f7fd2675" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 15, 0],
        opacity: [1, 0.5, 1]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail - Light Section with Reveal Animation */}
      <SortableContainer dndKitId="d167e202-8a9c-4ea0-9f53-44b09dc2e3a7" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b40a47f6-c3c7-484c-821f-1e3cb1382301" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c7f9c050-5412-4898-8632-eb8b4e6ab502" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6
        }} className="text-center mb-20" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" className="text-5xl md:text-6xl font-bold mb-6" initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            type: "spring"
          }} data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-[#252525]" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">Most MVPs </span>
              <span className="text-[#c2f12d]" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">fail</span>
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" className="text-xl text-slate-600 max-w-2xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
              Here's why—and how we fix it
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="0a2b1740-bd71-443c-8d3a-a4194d0786a7" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
            {failureReasons.map((reason, index) => <motion.div data-magicpath-motion-tag="motion.div" key={reason.title} variants={itemVariants} whileHover={{
            y: -12,
            scale: 1.03,
            rotate: [0, -1, 1, 0],
            transition: {
              duration: 0.3
            }
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-[#c2f12d]/40 hover:shadow-2xl hover:shadow-[#c2f12d]/10 transition-all duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/5 to-transparent rounded-2xl" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="w-14 h-14 bg-gradient-to-br from-[#c2f12d] to-[#b0dc28] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#c2f12d]/30" whileHover={{
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                    <reason.icon className="w-7 h-7 text-[#252525]" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach - Dark Section with Card Flip Effect */}
      <SortableContainer dndKitId="76950bef-3142-4cb7-9b7a-ffe2a55798a8" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="40077c36-bab9-4608-8204-f2966b56c21f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="d9cb27c4-fe97-4178-b686-9b00b60e5814" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
              How we build{' '}
              <motion.span data-magicpath-motion-tag="motion.span" className="text-[#c2f12d]" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }} data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
                great products
              </motion.span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
              A practical, sprint-based workflow designed for speed and quality.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="7cf16382-feaa-4fba-86af-50da157c3a39" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
            {approachSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} variants={itemVariants} whileHover={{
            scale: 1.03,
            y: -8,
            rotateY: 5,
            transition: {
              duration: 0.3
            }
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 overflow-hidden" style={{
            perspective: 1000
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/5" initial={{
              opacity: 0,
              scale: 0.8
            }} whileHover={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                  rotate: [0, -15, 15, 0],
                  scale: 1.1
                }} transition={{
                  duration: 0.6
                }} className="w-16 h-16 bg-[#c2f12d] rounded-2xl flex items-center justify-center shadow-xl shadow-[#c2f12d]/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-[#252525]" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx" />
                    </motion.div>
                    <motion.span data-magicpath-motion-tag="motion.span" className="text-7xl font-bold bg-gradient-to-br from-white/5 to-white/0 bg-clip-text text-transparent" initial={{
                  opacity: 0,
                  x: 20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1
                }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
                      {step.number}
                    </motion.span>
                  </div>
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-3xl font-bold mb-4" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.2
              }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
                    {step.title}
                  </motion.h3>
                  <motion.p data-magicpath-motion-tag="motion.p" className="text-slate-400 leading-relaxed text-lg" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + 0.3
              }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>)}
          </SortableContainer>

          {/* Team Photo */}
          <SortableContainer dndKitId="5c4cf29e-c878-4eef-a0da-a5535bce0d81" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="mt-20" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="8f62fdd1-3f5b-4cc1-951b-861f2a4271c7" containerType="regular" prevTag="div" className="relative rounded-3xl overflow-hidden group" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Gradient Overlay */}
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/40 to-transparent z-10" initial={{
              opacity: 0.7
            }} whileHover={{
              opacity: 0.5
            }} transition={{
              duration: 0.4
            }} data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Glow Effect */}
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-[#c2f12d]/20 blur-3xl -z-10" animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx" />

              {/* Team Photo */}
              <motion.img data-magicpath-motion-tag="motion.img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80" alt="Team collaborating on a project" className="w-full h-[400px] md:h-[500px] object-cover" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.6
            }} data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx" />

              {/* Text Overlay */}
              <SortableContainer dndKitId="0268cb76-b5db-4ea0-8247-5edd2a66d48d" containerType="regular" prevTag="motion.div" className="absolute bottom-0 left-0 right-0 p-10 z-20" initial={{
              y: 20,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5
            }} data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="a24a89fb-c66f-4540-b751-e0496ba9fb33" containerType="regular" prevTag="motion.div" className="flex items-center space-x-3 mb-3" initial={{
                x: -20,
                opacity: 0
              }} whileInView={{
                x: 0,
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.6
              }} data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="text-[#c2f12d] text-sm font-semibold uppercase tracking-wider" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
                    Our Team
                  </span>
                </SortableContainer>
                <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-3xl md:text-4xl font-bold text-white mb-3" initial={{
                x: -20,
                opacity: 0
              }} whileInView={{
                x: 0,
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.7
              }} data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
                  Collaboration is key to our success
                </motion.h3>
                <motion.p data-magicpath-motion-tag="motion.p" className="text-lg text-slate-300 max-w-2xl" initial={{
                x: -20,
                opacity: 0
              }} whileInView={{
                x: 0,
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.8
              }} data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
                  We work together every step of the way to ensure your product meets the highest standards.
                </motion.p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Team - Light Section with Image Reveal */}
      <SortableContainer dndKitId="5c038922-60ac-46ff-b4ca-2ea1f4b6bd20" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="6b27b2e6-b17a-4e75-b3c2-e3d156f6e0da" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="81bb6096-7791-4c42-b893-4a0eaea9b052" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
            color: "#252525"
          }} data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the <span className="text-[#c2f12d]" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">team</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">Experts in turning ideas into successful products</p>
          </SortableContainer>

          <SortableContainer dndKitId="e38dfc67-11f2-4e5a-a5e1-0e086db67b80" containerType="collection" prevTag="motion.div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
            {teamMembers.map((member, index) => <motion.div data-magicpath-motion-tag="motion.div" key={member.name} variants={itemVariants} whileHover={{
            y: -15,
            scale: 1.02
          }} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative aspect-[3/4] mb-6 rounded-3xl overflow-hidden bg-slate-200" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-[#c2f12d]/90 via-[#c2f12d]/20 to-transparent z-10" initial={{
                opacity: 0
              }} whileHover={{
                opacity: 1
              }} transition={{
                duration: 0.4
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx" />
                  <motion.img data-magicpath-motion-tag="motion.img" src={member.image} alt={member.name} className="w-full h-full object-cover" whileHover={{
                scale: 1.15
              }} transition={{
                duration: 0.6
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx" />
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 p-6 z-20" initial={{
                y: "100%"
              }} whileHover={{
                y: 0
              }} transition={{
                duration: 0.4,
                type: "spring"
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-2 text-slate-900" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
                  {member.name}
                </motion.h3>
                <motion.p data-magicpath-motion-tag="motion.p" className="text-sm text-slate-600" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1 + 0.1
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
                  {member.role}
                </motion.p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects - Dark Section with 3D Tilt */}
      <SortableContainer dndKitId="45b939f2-5ee4-4f1c-838b-7e3e49d6ef29" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b6ad445c-4c06-4874-9b84-56b5f37e1fb6" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c05e8b9a-fd1d-4e92-85be-89038cd6c96c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">Recent work</h2>
            <p className="text-xl text-slate-400" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">Products we've built for startups and businesses</p>
          </SortableContainer>

          <SortableContainer dndKitId="6003a86a-f921-4bc7-9d04-3ea300aab84d" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
            {recentProjects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={project.title} variants={itemVariants} whileHover={{
            scale: 1.08,
            y: -15,
            rotateX: 5,
            rotateY: 5,
            transition: {
              duration: 0.3
            }
          }} className="group relative aspect-square rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 cursor-pointer" style={{
            perspective: 1000
          }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/20 via-transparent to-[#c2f12d]/10" initial={{
              opacity: 0,
              scale: 0.8
            }} whileHover={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="text-7xl" whileHover={{
                scale: 1.3,
                rotate: [0, -10, 10, 0],
                y: -10,
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                    {project.image}
                  </motion.div>
                  <motion.div data-magicpath-motion-tag="motion.div" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map((tag: string, i: number) => <motion.span data-magicpath-motion-tag="motion.span" key={tag} initial={{
                    opacity: 0,
                    scale: 0.8
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: index * 0.1 + i * 0.05
                  }} whileHover={{
                    scale: 1.1,
                    y: -2
                  }} className="px-3 py-1.5 bg-[#c2f12d]/20 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full text-xs font-medium text-[#c2f12d]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
                          {tag}
                        </motion.span>)}
                    </div>
                  </motion.div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing - Light Section with Animated Counter */}
      <SortableContainer dndKitId="a46db326-fc1a-40a2-9308-83c546d84857" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="f0f59bd1-b8c1-46c1-a332-ba2085e4f96d" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="1f218d1d-abbd-4141-bace-2563362bfe00" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
            color: "#252525"
          }} data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent <span className="text-[#c2f12d]" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">pricing</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">Simple, predictable pricing with no hidden costs</p>
          </SortableContainer>

          <SortableContainer dndKitId="054282e1-8cdc-4fb1-9486-8f5aebb0908c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Gradient Top Bar with animation */}
            <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-0 left-0 right-0 h-2 bg-[#c2f12d]" initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            ease: "easeOut"
          }} style={{
            transformOrigin: "left"
          }} data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx" />

            <h3 className="text-3xl font-bold mb-12 text-slate-900" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="51572a5b-fda7-44be-897a-4b5fafbec8a1" containerType="regular" prevTag="div" className="space-y-10 mb-12" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size with spring animation */}
              <SortableContainer dndKitId="4cccdcb2-b643-42fe-9f3b-6ba937e2b58b" containerType="regular" prevTag="div" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="05704efd-7540-48d8-b3e3-6b55a4a16ed9" containerType="regular" prevTag="div" className="flex justify-between mb-6" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-lg font-semibold text-slate-700" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <AnimatePresence mode="wait" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
                    <motion.span data-magicpath-motion-tag="motion.span" key={teamSize} initial={{
                    scale: 1.5,
                    color: '#c2f12d',
                    y: -10
                  }} animate={{
                    scale: 1,
                    color: '#252525',
                    y: 0
                  }} exit={{
                    scale: 0.5,
                    opacity: 0
                  }} transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }} className="text-3xl font-bold" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
                      {teamSize}
                    </motion.span>
                  </AnimatePresence>
                </SortableContainer>
                <div className="grid grid-cols-5 gap-4" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <SortableContainer dndKitId="3f70c604-27b8-473f-bcac-2ae6ecc60c25" containerType="regular" prevTag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.08,
                  y: -4
                }} whileTap={{
                  scale: 0.95
                }} className={`py-5 rounded-2xl font-bold text-2xl transition-all duration-300 ${teamSize === size ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.span data-magicpath-motion-tag="motion.span" animate={teamSize === size ? {
                    scale: [1, 1.2, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
                        {size}
                      </motion.span>
                    </SortableContainer>)}
                </div>
              </SortableContainer>

              {/* Sprints with slide animation */}
              <SortableContainer dndKitId="f9257aaa-78bb-43ac-a038-05b4489b9b7b" containerType="regular" prevTag="div" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-lg font-semibold text-slate-700 mb-6 block" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="88fa856b-b3ce-4472-bb0a-70d5f42c5106" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "679b82d9-c88e-44a4-90d7-b0b64c1cf03d"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "9c958f7f-5a3c-420a-9a70-2f0c76300202"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "b3bd6d29-b986-4568-8000-e255f7c9de0b"
                }].map(option => <motion.button data-magicpath-motion-tag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05,
                  y: -4
                }} whileTap={{
                  scale: 0.95
                }} className={`py-6 px-4 rounded-2xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.div data-magicpath-motion-tag="motion.div" animate={sprints === option.value ? {
                    scale: [1, 1.1, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
                        <div className="text-lg mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                        <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
                          {option.desc}
                        </div>
                      </motion.div>
                    </motion.button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display with pulse animation */}
            <AnimatePresence mode="wait" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="4934622f-96b0-4168-be84-eb6ad09bdb17" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
              scale: 0.9,
              opacity: 0,
              y: 20
            }} animate={{
              scale: 1,
              opacity: 1,
              y: 0
            }} exit={{
              scale: 0.9,
              opacity: 0,
              y: -20
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }} className="relative text-center p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mb-8 border border-slate-200 overflow-hidden" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/10" animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx" />
                <p className="relative text-sm text-slate-600 uppercase tracking-wider mb-3" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
                <motion.p data-magicpath-motion-tag="motion.p" className="relative text-6xl font-bold text-[#c2f12d] mb-6" initial={{
                scale: 1.2
              }} animate={{
                scale: 1
              }} transition={{
                type: "spring",
                stiffness: 200,
                damping: 15
              }} data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </motion.p>
                <SortableContainer dndKitId="27149a0c-819e-4d47-ad89-3c542397f46f" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-6 text-sm text-slate-600" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="fbae3c25-5370-46a9-b3de-9aaf01340b45" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                  x: -20,
                  opacity: 0
                }} animate={{
                  x: 0,
                  opacity: 1
                }} transition={{
                  delay: 0.1
                }} data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
                    <Users className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="font-medium" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                      {teamSize} Developer{teamSize > 1 ? 's' : ''}
                    </span>
                  </SortableContainer>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx" />
                  <SortableContainer dndKitId="b1d963a8-2082-423e-bd6f-62a4018621ed" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                  x: 20,
                  opacity: 0
                }} animate={{
                  x: 0,
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }} data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                    <Clock className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="font-medium" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                  </SortableContainer>
                </SortableContainer>
                <motion.p data-magicpath-motion-tag="motion.p" className="relative text-xs text-slate-500 mt-5" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.3
              }} data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱120,000 per developer per sprint
                </motion.p>
              </SortableContainer>
            </AnimatePresence>

            {/* Features with stagger */}
            <motion.div data-magicpath-motion-tag="motion.div" className="space-y-4 mb-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map((feature, i) => <SortableContainer dndKitId="35779135-7b09-47ed-ac49-a97bdac9e16a" containerType="regular" prevTag="motion.div" key={feature} variants={itemVariants} className="flex items-start space-x-3" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                    <SortableContainer dndKitId="1de051ab-8048-47e9-a466-36d3fd772411" containerType="regular" prevTag="motion.div" animate={{
                rotate: [0, 360]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }} data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
                      <CheckCircle2 className="w-6 h-6 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx" />
                    </SortableContainer>
                    <p className="text-slate-700" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                  </SortableContainer>)}
            </motion.div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="dc4662cd-8377-4df9-bd9d-d56133eb2f87" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
              <MagneticButton className="flex-1 px-8 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-[#c2f12d]/30" onClick={handleGetQuote} data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </MagneticButton>
              <MagneticButton className="flex-1 px-8 py-5 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-2xl font-bold transition-all duration-300" onClick={handleBookCall} data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </MagneticButton>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs - Dark Section with Accordion Animation */}
      <SortableContainer dndKitId="106e532c-fe71-4703-b246-7dc112150ae6" containerType="regular" prevTag="section" id="faqs" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="689daeb2-e3e1-45ec-b9e4-b42e0c57295e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3772cace-0aba-414e-a27a-7cfe9428a9ee" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">Frequently asked questions</h2>
          </SortableContainer>

          <SortableContainer dndKitId="48aa5297-6288-4d18-bc0d-31b93dc59e7b" containerType="collection" prevTag="motion.div" className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">
            {faqs.map((faq, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#c2f12d]/30 transition-all duration-300" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.button data-magicpath-motion-tag="motion.button" onClick={() => toggleFaq(index)} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.07)'
            }} className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: openFaq === index ? 180 : 0
              }} transition={{
                duration: 0.3,
                type: "spring"
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
                    {openFaq === index ? <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#c2f12d]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx" />}
                  </motion.div>
                </motion.button>

                <AnimatePresence data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                  {openFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3,
                ease: "easeInOut"
              }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.p data-magicpath-motion-tag="motion.p" initial={{
                  y: -10
                }} animate={{
                  y: 0
                }} exit={{
                  y: -10
                }} className="px-8 pb-6 text-slate-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
                        {faq.answer}
                      </motion.p>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA - Light Section with Glow Effect */}
      <SortableContainer dndKitId="d078f898-ee36-416f-8894-6b7edb5bc72a" containerType="regular" prevTag="section" id="cta" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="77a2b37b-fcaa-4523-91af-40d30fbd248d" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="533c1e2a-726e-4eee-94b9-97ab5123c07a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative text-center p-16 md:p-20 bg-gradient-to-br from-[#252525] via-[#3a3a3a] to-[#252525] rounded-[3rem] shadow-2xl overflow-hidden" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="d9f43c15-8ee7-4334-9244-82e9fad803f8" containerType="regular" prevTag="div" className="absolute inset-0" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.35, 0.15],
              x: [-50, 50, -50],
              y: [-50, 50, -50]
            }} transition={{
              duration: 10,
              repeat: Infinity
            }} className="absolute top-0 left-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.25, 0.1],
              x: [50, -50, 50],
              y: [50, -50, 50]
            }} transition={{
              duration: 12,
              repeat: Infinity,
              delay: 1
            }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="1143ff3f-6887-4480-9eec-7eb3750edc84" containerType="regular" prevTag="div" className="relative" data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="7b082255-e14e-4a14-b2b1-ef6a6758a4cd" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8" data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="ca655d0e-692c-4bf0-a703-b60afcd059d4" containerType="regular" prevTag="motion.div" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-sm font-medium text-white" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <motion.h2 data-magicpath-motion-tag="motion.h2" className="text-5xl md:text-6xl font-bold text-white mb-8" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to launch your MVP?
              </motion.h2>

              <motion.p data-magicpath-motion-tag="motion.p" className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }} data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product.
              </motion.p>

              <SortableContainer dndKitId="b17351d1-d41f-4779-87c1-d3f991cbb3b0" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">
                <MagneticButton className="px-10 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold text-lg transition-all shadow-2xl" onClick={handleBookCall} data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="flex items-center space-x-2" data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-6 h-6" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
                  </span>
                </MagneticButton>
                <MagneticButton className="px-10 py-5 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all backdrop-blur-xl" onClick={handleGetQuote} data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </MagneticButton>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Dark with Fade-in */}
      <SortableContainer dndKitId="4b483b09-894c-4b59-af9e-be3f2e5d29d5" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-[#1a1a1a] border-t border-white/5" data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="18acdc6a-8eb6-4a3e-928a-35d73f1dc0bd" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="1705ace8-a4aa-4d90-b988-e87af9837dda" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-4 gap-12 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="1c0a9d29-4df2-4be3-9f32-d008eab34b5a" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="d4992e4c-8256-41d0-b95e-761df83acbe3" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.svg data-magicpath-motion-tag="motion.svg" width="48" height="48" viewBox="0 0 100 100" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.6
              }} data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx">
                  <path d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#c2f12d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx" />
                </motion.svg>
                <SortableContainer dndKitId="fe7a00a6-ddf0-48d6-a8a7-cb3195424a19" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-2xl font-bold text-white tracking-tight" data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                  <span className="text-2xl font-bold text-[#c2f12d]" data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">.</span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">Building MVPs that matter since 2015</p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "a4dabd4c-c35f-49fa-a612-d119655d7188"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "1f322419-eff8-48ae-b093-b86afeb44ff4"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "fa1ad588-55da-4eeb-809d-36606a4680b7"
          }].map(column => <motion.div data-magicpath-motion-tag="motion.div" key={column.title} variants={itemVariants} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-5 text-white text-lg" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="221" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-3" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="222" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="223" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
                  x: 5,
                  color: "#c2f12d"
                }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-all inline-block" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </motion.a>
                    </li>)}
                </ul>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="44222be8-79d2-4d02-897f-8033fcbb2504" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} data-magicpath-id="225" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="226" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="03675bc0-9d7f-476b-af58-323246f770d6" containerType="regular" prevTag="div" className="flex space-x-8" data-magicpath-id="227" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="228" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="229" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};