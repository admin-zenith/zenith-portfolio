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
  mpid: "a88c4d36-ab5a-4b3c-b2f8-758d232cdfa6"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "4508b649-ab5f-4a83-8ce8-f744818896bb"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "ef1e56db-0c97-48f6-a261-8a9be6f57450"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "04db64ef-0bb1-47ae-8eb4-e499c9ce36e3"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "86da65f7-170a-430b-9e0d-c1dc20674950"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "f7d61554-5e31-4ac3-9d23-3a8d5d04eafc"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "b58326af-8446-4ed5-806d-b34c6a7ccb1a"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "11ec7254-1d6b-4441-bd5a-052c29c67b96"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "c0f1ce81-1581-40ab-931e-6b18ae9824a2"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "98bbb7d1-b3c9-4c42-abde-5e6670430674"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "a221ec61-d1f0-4f5b-9a4b-58fec9c2b70e"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "e172f504-235c-4628-b106-22927aa2a54f"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "fc8af5c8-0d5f-44bc-8858-5512f5adf110"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "f3933fbb-3a43-42af-87b4-29957280a5a3"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "9bbbee37-e869-4fe4-a483-8179b75c0686"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "8768d7a2-13a5-4af0-b80d-cfd9f8440682"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "f3604a42-7953-4806-81cf-fa31042954b2"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "e359b63d-2475-4c84-81b9-73dce64572e8"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "dba5859a-bc47-4188-80bf-ba8e709a533d"
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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
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

  // Track mouse position for custom cursor effects
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

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
  return <SortableContainer dndKitId="d787bc45-5980-422c-943c-05a11c7dc68b" containerType="regular" prevTag="div" className="min-h-screen bg-[#252525] text-white overflow-x-hidden" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Custom Cursor */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed w-8 h-8 border-2 border-[#c2f12d] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block" animate={{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: cursorVariant === "hover" ? 1.5 : 1
    }} transition={{
      type: "spring",
      stiffness: 500,
      damping: 28,
      mass: 0.5
    }} data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Floating Particles */}
      <FloatingParticles data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Animated Grid Background */}
      <SortableContainer dndKitId="6d8cca07-8999-499c-8bf6-f1c673c8ca77" containerType="regular" prevTag="motion.div" className="fixed inset-0 z-0" style={{
      opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.3])
    }} data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2f12d10_1px,transparent_1px),linear-gradient(to_bottom,#c2f12d10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Floating Orbs with Enhanced Animation */}
      <SortableContainer dndKitId="7924c887-7bc0-4b6d-a173-7b1697099c46" containerType="regular" prevTag="div" className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
        x: [0, 100, 0],
        y: [0, 50, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx" />
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
      }} className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation with slide-down animation */}
      <SortableContainer dndKitId="1ec831a3-f588-4aed-96b2-6879e1a892b7" containerType="regular" prevTag="motion.nav" initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      type: "spring",
      stiffness: 100,
      damping: 20
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e099a89d-b3ce-466f-8c5b-6897702411e1" containerType="regular" prevTag="div" className="bg-[#252525]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 px-8 py-3" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="84a6e29a-d87e-4afe-b825-0911d5109960" containerType="regular" prevTag="div" className="flex items-center justify-between gap-8" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo with bounce */}
            <SortableContainer dndKitId="c9144131-c2d7-4153-bc6e-33acb1a3e47d" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.svg data-magicpath-motion-tag="motion.svg" width="32" height="32" viewBox="0 0 100 100" className="flex-shrink-0" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }} data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.path data-magicpath-motion-tag="motion.path" d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#c2f12d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" initial={{
                pathLength: 0
              }} animate={{
                pathLength: 1
              }} transition={{
                duration: 2,
                ease: "easeInOut"
              }} data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx" />
              </motion.svg>
              <SortableContainer dndKitId="baa1ec16-a281-4261-adce-67b9366c2946" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-xl font-bold text-white tracking-tight" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                <motion.span data-magicpath-motion-tag="motion.span" className="text-xl font-bold text-[#c2f12d]" animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
                  .
                </motion.span>
              </SortableContainer>
            </SortableContainer>

            {/* Nav Links with stagger */}
            <motion.div data-magicpath-motion-tag="motion.div" className="hidden md:flex items-center space-x-1" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
              {['How We Work', 'Projects', 'Pricing', 'FAQs'].map((item, i) => <motion.a data-magicpath-motion-tag="motion.a" key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} variants={itemVariants} whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
                  {item}
                </motion.a>)}
            </motion.div>

            {/* CTA Button with magnetic effect */}
            <MagneticButton className="relative px-5 py-2 rounded-full bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] text-sm font-bold overflow-hidden transition-all duration-300 group" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" className="absolute inset-0 bg-white" initial={{
              scale: 0,
              opacity: 0
            }} whileHover={{
              scale: 1,
              opacity: 0.2
            }} transition={{
              duration: 0.3
            }} data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">Get Started</span>
            </MagneticButton>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section with Parallax */}
      <SortableContainer dndKitId="81cedcf1-e522-416b-b4ae-95b32d3e7f47" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="d6f0f19c-03f3-498b-bc1b-8c5c3b5a6042" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale,
        y: heroY
      }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="41f99c24-3480-4f20-aec3-a0b0265c2557" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Badge with shimmer effect */}
            <SortableContainer dndKitId="8ce87da9-3ce6-4204-8a07-24424c600130" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            type: "spring"
          }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{
              x: "-100%"
            }} whileHover={{
              x: "100%"
            }} transition={{
              duration: 0.6
            }} data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx" />
              <SortableContainer dndKitId="34bdd9de-e4c2-429f-b620-8cfbe3360d24" containerType="regular" prevTag="motion.div" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }} data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                <Shield className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-sm font-medium bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent relative" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
                Trusted by 100+ Startups Worldwide
              </span>
            </SortableContainer>

            {/* Headline with word animation */}
            <motion.h1 data-magicpath-motion-tag="motion.h1" className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" initial="hidden" animate="visible" variants={containerVariants} data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" variants={itemVariants} className="inline-block" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                Ship your MVP in
              </motion.span>
              <br data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative inline-block" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" className="text-[#c2f12d]" variants={itemVariants} whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring"
              }} data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
                  30–60 days
                </motion.span>
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-2 bg-[#c2f12d]/20 blur-2xl -z-10" animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }} data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx" />
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
          }} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch. Fast, affordable, and built to scale.
            </motion.p>

            {/* CTA Buttons with enhanced hover */}
            <SortableContainer dndKitId="411f280e-12ce-4c35-b16d-6943cc80d028" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
              <MagneticButton className="group relative px-8 py-4 rounded-xl bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] font-bold overflow-hidden transition-all duration-300" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-[#b0dc28] to-[#c2f12d]" initial={{
                x: "-100%"
              }} whileHover={{
                x: "0%"
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="relative flex items-center space-x-2" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                  <SortableContainer dndKitId="58cc8d13-bc7b-4cfb-816a-4a5a1c72ffbe" containerType="regular" prevTag="motion.div" animate={{
                  x: [0, 5, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
                    <ArrowRight className="w-5 h-5" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </span>
              </MagneticButton>

              <MagneticButton className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#c2f12d]/50 text-white rounded-xl font-semibold transition-all duration-300 group" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="flex items-center space-x-2" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="60e9f9a8-735f-4eb0-9c1c-7ad6c36b7c2e" containerType="regular" prevTag="motion.div" animate={{
                  rotate: [0, 360]
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }} data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                  <span data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
                </span>
              </MagneticButton>
            </SortableContainer>

            {/* Tech Stack with stagger animation */}
            <SortableContainer dndKitId="765b83ce-1bbf-4d8e-a9dd-62bed697a674" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={containerVariants} className="space-y-4" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
                Built With
              </motion.p>
              <SortableContainer dndKitId="280f0659-051d-4a01-8cf7-813910c99214" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                {techStack.map((tech, i) => <motion.div data-magicpath-motion-tag="motion.div" key={tech} variants={itemVariants} whileHover={{
                scale: 1.1,
                y: -2,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.3
                }
              }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#c2f12d]/50 hover:bg-white/10 transition-all duration-300 cursor-default" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator with bounce */}
        <SortableContainer dndKitId="af9043fb-f672-45c0-80bb-d21f2cb43df3" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 15, 0],
        opacity: [1, 0.5, 1]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail - Light Section with Reveal Animation */}
      <SortableContainer dndKitId="699bdbc7-ef68-468b-ad0f-0930596a0b68" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="ac5cec4d-0d44-4522-8460-fd320c432410" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c28aed69-d398-4a07-ac52-2b3021d96e03" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="text-center mb-20" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="bg-gradient-to-r from-slate-900 via-[#252525] to-[#c2f12d] bg-clip-text text-transparent" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
                Most MVPs fail
              </span>
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

          <SortableContainer dndKitId="2535b44f-a587-4d87-ab0e-908a012844c9" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
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
          }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-2xl" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30" whileHover={{
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                    <reason.icon className="w-7 h-7 text-white" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach - Dark Section with Card Flip Effect */}
      <SortableContainer dndKitId="cc280cd1-6c1c-4359-b06f-52bb6bbe7cbf" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="bcda1c83-05de-4b56-b47d-bb4fca2c9ee6" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3a7a3160-244d-41e0-96b8-abbb6983ba60" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="8c49ba7d-3280-47d4-ba19-3b448b8b108e" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
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
          }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 overflow-hidden" style={{
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
        </SortableContainer>
      </SortableContainer>

      {/* Team - Light Section with Image Reveal */}
      <SortableContainer dndKitId="f14ed0a2-857f-44b5-b803-4726d324bf1d" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="3410c4be-ea3b-4255-b65f-235d0a81fa2c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="28c1e094-fd53-44ed-9609-de38f9189492" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the <span className="text-[#c2f12d]" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">team</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">Experts in turning ideas into successful products</p>
          </SortableContainer>

          <SortableContainer dndKitId="f8fb22d0-5354-4ae8-b4f6-9bbc8a1bfa75" containerType="collection" prevTag="motion.div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
            {teamMembers.map((member, index) => <motion.div data-magicpath-motion-tag="motion.div" key={member.name} variants={itemVariants} whileHover={{
            y: -15,
            scale: 1.02
          }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative aspect-[3/4] mb-6 rounded-3xl overflow-hidden bg-slate-200" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-[#c2f12d]/90 via-[#c2f12d]/20 to-transparent z-10" initial={{
                opacity: 0
              }} whileHover={{
                opacity: 1
              }} transition={{
                duration: 0.4
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx" />
                  <motion.img data-magicpath-motion-tag="motion.img" src={member.image} alt={member.name} className="w-full h-full object-cover" whileHover={{
                scale: 1.15
              }} transition={{
                duration: 0.6
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx" />
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 p-6 z-20" initial={{
                y: "100%"
              }} whileHover={{
                y: 0
              }} transition={{
                duration: 0.4,
                type: "spring"
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className="flex gap-3" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                    scale: 1.2,
                    rotate: 360
                  }} whileTap={{
                    scale: 0.9
                  }} transition={{
                    duration: 0.3
                  }} className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
                        <Github className="w-5 h-5 text-white" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx" />
                      </motion.button>
                      <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                    scale: 1.2,
                    rotate: 360
                  }} whileTap={{
                    scale: 0.9
                  }} transition={{
                    duration: 0.3
                  }} className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
                        <MessageSquare className="w-5 h-5 text-white" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
                <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-2 text-slate-900" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
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
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                  {member.role}
                </motion.p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects - Dark Section with 3D Tilt */}
      <SortableContainer dndKitId="0518294a-967f-46e3-9085-fb482ac87490" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="7558c931-5ea5-4aa6-b7ce-506de0c1c44e" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3407ac7d-64b9-4d37-a38c-739cdc638660" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">Recent work</h2>
            <p className="text-xl text-slate-400" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">Products we've built for startups and businesses</p>
          </SortableContainer>

          <SortableContainer dndKitId="4a381807-55dc-4355-8c35-b4c3d6a39d54" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
            {recentProjects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={project.title} variants={itemVariants} whileHover={{
            scale: 1.08,
            y: -15,
            rotateX: 5,
            rotateY: 5,
            transition: {
              duration: 0.3
            }
          }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="group relative aspect-square rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 cursor-pointer" style={{
            perspective: 1000
          }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/20 via-transparent to-[#c2f12d]/10" initial={{
              opacity: 0,
              scale: 0.8
            }} whileHover={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="text-7xl" whileHover={{
                scale: 1.3,
                rotate: [0, -10, 10, 0],
                y: -10,
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
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
                  }} className="px-3 py-1.5 bg-[#c2f12d]/20 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full text-xs font-medium text-[#c2f12d]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="67abc71b-05f3-4ce9-8633-ee03addaa303" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="5561e973-8aa3-4833-9274-7c48aeeacbf1" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="91858aaa-c8f3-42d8-b38e-5ea70c3d42b6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent <span className="text-[#c2f12d]" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">pricing</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">Simple, predictable pricing with no hidden costs</p>
          </SortableContainer>

          <SortableContainer dndKitId="96898cc3-43d3-41d2-afbe-5ddc9067eb87" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx" />

            <h3 className="text-3xl font-bold mb-12 text-center text-slate-900" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="14dfe78c-0beb-42f4-8bfd-05d4a3125b9f" containerType="regular" prevTag="div" className="space-y-10 mb-12" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size with spring animation */}
              <SortableContainer dndKitId="da5697b1-128b-45f4-be75-acd3e6ce00f3" containerType="regular" prevTag="div" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="10be3bef-92a8-433b-ab43-473ff54636c3" containerType="regular" prevTag="div" className="flex justify-between mb-6" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-lg font-semibold text-slate-700" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <AnimatePresence mode="wait" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
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
                  }} className="text-3xl font-bold" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                      {teamSize}
                    </motion.span>
                  </AnimatePresence>
                </SortableContainer>
                <div className="grid grid-cols-5 gap-4" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <SortableContainer dndKitId="3a4f9472-8cb6-4e99-bcf9-49522c68fe81" containerType="regular" prevTag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.08,
                  y: -4
                }} whileTap={{
                  scale: 0.95
                }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className={`py-5 rounded-2xl font-bold text-2xl transition-all duration-300 ${teamSize === size ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.span data-magicpath-motion-tag="motion.span" animate={teamSize === size ? {
                    scale: [1, 1.2, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">
                        {size}
                      </motion.span>
                    </SortableContainer>)}
                </div>
              </SortableContainer>

              {/* Sprints with slide animation */}
              <SortableContainer dndKitId="3ed8f5b1-68a2-4978-92e8-a0ac8ab99d90" containerType="regular" prevTag="div" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-lg font-semibold text-slate-700 mb-6 block" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="f523f617-5988-4deb-9052-8ef01098c4b2" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "c1ee1c46-b22e-4bb4-83b6-84972db4dff1"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "ed1fe181-ff0f-432d-b43a-5aa45a16d869"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "2df3d3ad-bff6-4977-9d67-d62888177f5f"
                }].map(option => <motion.button data-magicpath-motion-tag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05,
                  y: -4
                }} whileTap={{
                  scale: 0.95
                }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className={`py-6 px-4 rounded-2xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.div data-magicpath-motion-tag="motion.div" animate={sprints === option.value ? {
                    scale: [1, 1.1, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
                        <div className="text-lg mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                        <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                          {option.desc}
                        </div>
                      </motion.div>
                    </motion.button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display with pulse animation */}
            <AnimatePresence mode="wait" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="73149860-69ac-46db-86de-9330d067f7ac" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
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
            }} className="relative text-center p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mb-8 border border-slate-200 overflow-hidden" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/10" animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx" />
                <p className="relative text-sm text-slate-600 uppercase tracking-wider mb-3" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
                <motion.p data-magicpath-motion-tag="motion.p" className="relative text-6xl font-bold text-[#c2f12d] mb-6" initial={{
                scale: 1.2
              }} animate={{
                scale: 1
              }} transition={{
                type: "spring",
                stiffness: 200,
                damping: 15
              }} data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </motion.p>
                <SortableContainer dndKitId="e87db7a8-2653-4389-9017-d9ab828a7532" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-6 text-sm text-slate-600" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="a2e609c6-be29-44e1-b3b2-b75421b28533" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                  x: -20,
                  opacity: 0
                }} animate={{
                  x: 0,
                  opacity: 1
                }} transition={{
                  delay: 0.1
                }} data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                    <Users className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="font-medium" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
                      {teamSize} Developer{teamSize > 1 ? 's' : ''}
                    </span>
                  </SortableContainer>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx" />
                  <SortableContainer dndKitId="e57436d7-06d3-4d70-88f7-bc3fcf4999fe" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                  x: 20,
                  opacity: 0
                }} animate={{
                  x: 0,
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }} data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
                    <Clock className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="font-medium" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                  </SortableContainer>
                </SortableContainer>
                <motion.p data-magicpath-motion-tag="motion.p" className="relative text-xs text-slate-500 mt-5" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.3
              }} data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱120,000 per developer per sprint
                </motion.p>
              </SortableContainer>
            </AnimatePresence>

            {/* Features with stagger */}
            <motion.div data-magicpath-motion-tag="motion.div" className="space-y-4 mb-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map((feature, i) => <SortableContainer dndKitId="da88ad96-d16d-4c50-b4c4-2560f34fa697" containerType="regular" prevTag="motion.div" key={feature} variants={itemVariants} className="flex items-start space-x-3" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                    <SortableContainer dndKitId="01d384a2-6756-47b5-9da6-e4173811c889" containerType="regular" prevTag="motion.div" animate={{
                rotate: [0, 360]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }} data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                      <CheckCircle2 className="w-6 h-6 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx" />
                    </SortableContainer>
                    <p className="text-slate-700" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                  </SortableContainer>)}
            </motion.div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="2e0086f7-46b8-4801-b350-a558e756eea5" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
              <MagneticButton className="flex-1 px-8 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-[#c2f12d]/30" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </MagneticButton>
              <MagneticButton className="flex-1 px-8 py-5 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-2xl font-bold transition-all duration-300" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </MagneticButton>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs - Dark Section with Accordion Animation */}
      <SortableContainer dndKitId="c72b2000-fb0b-42c5-b308-c960486d4db4" containerType="regular" prevTag="section" id="faqs" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="2cad23a8-dc44-4b8e-ab84-953972c0e919" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="6ab57036-4738-4dbb-a6fa-a6d8a713a65a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">Frequently asked questions</h2>
          </SortableContainer>

          <SortableContainer dndKitId="93aed723-8453-4d5a-a1e6-c847c5bd35de" containerType="collection" prevTag="motion.div" className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
            {faqs.map((faq, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#c2f12d]/30 transition-all duration-300" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.button data-magicpath-motion-tag="motion.button" onClick={() => toggleFaq(index)} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.07)'
            }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: openFaq === index ? 180 : 0
              }} transition={{
                duration: 0.3,
                type: "spring"
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
                    {openFaq === index ? <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#c2f12d]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx" />}
                  </motion.div>
                </motion.button>

                <AnimatePresence data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.p data-magicpath-motion-tag="motion.p" initial={{
                  y: -10
                }} animate={{
                  y: 0
                }} exit={{
                  y: -10
                }} className="px-8 pb-6 text-slate-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
                        {faq.answer}
                      </motion.p>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA - Light Section with Glow Effect */}
      <SortableContainer dndKitId="25e608ca-8b4f-4da4-bde2-689d65108d13" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e59c1f1f-7e68-4d0a-974e-96cfd683443e" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="368de04f-727b-42f3-8a03-7fb48cda063f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative text-center p-16 md:p-20 bg-gradient-to-br from-[#252525] via-[#3a3a3a] to-[#252525] rounded-[3rem] shadow-2xl overflow-hidden" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="54ee94e7-e1e3-4ebd-b06d-1fbc584adb83" containerType="regular" prevTag="div" className="absolute inset-0" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.35, 0.15],
              x: [-50, 50, -50],
              y: [-50, 50, -50]
            }} transition={{
              duration: 10,
              repeat: Infinity
            }} className="absolute top-0 left-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.25, 0.1],
              x: [50, -50, 50],
              y: [50, -50, 50]
            }} transition={{
              duration: 12,
              repeat: Infinity,
              delay: 1
            }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="b17711e6-fef3-4179-ba94-6fb643d57206" containerType="regular" prevTag="div" className="relative" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="bebbbc95-c2f8-4584-9216-c6391ed43867" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="259db0d5-619f-41fb-acd8-774bb41d529f" containerType="regular" prevTag="motion.div" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-sm font-medium text-white" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
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
            }} data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
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
            }} data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product.
              </motion.p>

              <SortableContainer dndKitId="f5a0dbe1-0f79-40aa-97c4-e4112719b591" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
                <MagneticButton className="px-10 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold text-lg transition-all shadow-2xl" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="flex items-center space-x-2" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-6 h-6" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
                  </span>
                </MagneticButton>
                <MagneticButton className="px-10 py-5 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all backdrop-blur-xl" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </MagneticButton>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Dark with Fade-in */}
      <SortableContainer dndKitId="20bee21a-e454-4b56-8bf6-f3f2f6f49710" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-[#1a1a1a] border-t border-white/5" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="eede40ee-43ad-456e-8c5f-e89da7750950" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="220f9d19-9c17-4f13-b584-8961213316b8" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-4 gap-12 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="a0829016-f212-4c54-8d84-4b1603daafbd" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="42f27a77-97a4-4409-9ace-c24d69676b2d" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.svg data-magicpath-motion-tag="motion.svg" width="48" height="48" viewBox="0 0 100 100" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.6
              }} data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">
                  <path d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#c2f12d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx" />
                </motion.svg>
                <SortableContainer dndKitId="89db2066-7dd7-4ea6-a787-de4253585706" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-2xl font-bold text-white tracking-tight" data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                  <span className="text-2xl font-bold text-[#c2f12d]" data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx">.</span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">Building MVPs that matter since 2015</p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "a54971ad-f8ed-47ef-b852-aae859b9ec02"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "af0135ec-23f6-4a3d-b1a7-55cfafa19ebe"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "e7716b06-136c-461e-9b97-88c260a4e6b6"
          }].map(column => <motion.div data-magicpath-motion-tag="motion.div" key={column.title} variants={itemVariants} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-5 text-white text-lg" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-3" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
                  x: 5,
                  color: "#c2f12d"
                }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-all inline-block" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </motion.a>
                    </li>)}
                </ul>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="6d87da2b-2463-4656-b98c-f6360b7a327b" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="3eab14ba-f412-48c5-9437-296987d957ed" containerType="regular" prevTag="div" className="flex space-x-8" data-magicpath-id="221" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="222" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="223" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};