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
  mpid: "810e54bf-c8f1-4059-a5ab-bb8541609b81"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "c23b698b-4293-4721-9038-5c04c6bcbd71"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "d798cdcc-54bd-4786-b7f9-2b698f567156"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "2a5969fc-c527-4e3d-ba99-aff3da5b1798"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "2b1fc221-bf2f-4168-a3ab-104e802b3bd0"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "af3416f6-75d1-494f-b39a-210d9b90f62b"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "bf0d67f8-5503-4a0a-bb74-bfb8662c607d"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "8adec13e-a49e-4495-a518-38119290252e"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "5204270f-f6d9-4cf1-b89a-7236b11cffe0"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "407c9981-1bf7-4dd6-9028-78735b3650c8"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "1f23d903-6396-46f0-9a02-1f3d5ae9e509"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "e2d594b6-3075-416d-a475-71929dcf88a6"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "7e04d068-9fc9-4035-9133-98f02c82965d"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "9c32f716-66e9-4f12-b5f3-0789973ade94"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "aedf37cc-43ba-4012-91b3-c73bb4a1f1e2"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "e4167c17-44a0-4efa-8c0c-0c5688b3fc19"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "aeb38c9c-f065-469d-8ebc-afa95e490fcb"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "2ec8b6d9-182b-45e0-afb3-ae3745341969"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "7a191e29-068c-4ef6-8bb3-638e4238d095"
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
  return <SortableContainer dndKitId="0cfa54df-5dc6-40ed-91aa-b8a4a5a39f62" containerType="regular" prevTag="div" className="min-h-screen bg-[#252525] text-white overflow-x-hidden" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Floating Particles */}
      <FloatingParticles data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Animated Grid Background */}
      <SortableContainer dndKitId="3a9739c4-5b0c-427d-ab56-761e2a226f99" containerType="regular" prevTag="motion.div" className="fixed inset-0 z-0" style={{
      opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.3])
    }} data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2f12d10_1px,transparent_1px),linear-gradient(to_bottom,#c2f12d10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Floating Orbs with Enhanced Animation */}
      <SortableContainer dndKitId="cbd90584-e2e2-496e-8c35-8c872e619fe6" containerType="regular" prevTag="div" className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="4d8464b6-2210-46b9-a6e0-bcf6bc14c225" containerType="regular" prevTag="motion.nav" initial={{
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
        <SortableContainer dndKitId="fed4b978-bcca-4d4d-97a6-042d68dc22b5" containerType="regular" prevTag="div" className="bg-[#252525]/70 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 px-8 py-3" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="712f78b0-4a59-4b40-a908-b850bc6ce365" containerType="regular" prevTag="div" className="flex items-center justify-between gap-8" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo with bounce */}
            <SortableContainer dndKitId="0d9d059c-f488-42bc-8474-23b007cdaaa3" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.svg data-magicpath-motion-tag="motion.svg" width="36" height="36" viewBox="0 0 100 100" className="flex-shrink-0" whileHover={{
              rotate: [0, -10, 10, 0]
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
                <defs data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
                    <stop offset="0%" stopColor="#d4ff3d" />
                    <stop offset="50%" stopColor="#c2f12d" />
                    <stop offset="100%" stopColor="#a8d420" />
                  </linearGradient>
                  <filter id="logoShadow" x="-50%" y="-50%" width="200%" height="200%" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx" />
                    <feOffset dx="0" dy="2" result="offsetblur" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx" />
                    <feComponentTransfer data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
                      <feFuncA type="linear" slope="0.5" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx" />
                    </feComponentTransfer>
                    <feMerge data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
                      <feMergeNode data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx" />
                      <feMergeNode in="SourceGraphic" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Modern Z shape */}
                <g filter="url(#logoShadow)" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
                  <path d="M20,25 L70,25 L30,75 L80,75" fill="none" stroke="url(#logoGradient)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx" />
                  <circle cx="20" cy="25" r="6" fill="url(#logoGradient)" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx" />
                  <circle cx="70" cy="25" r="6" fill="url(#logoGradient)" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx" />
                  <circle cx="30" cy="75" r="6" fill="url(#logoGradient)" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx" />
                  <circle cx="80" cy="75" r="6" fill="url(#logoGradient)" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx" />
                </g>
              </motion.svg>
              <SortableContainer dndKitId="c1d7ff0b-ed7d-4906-8925-daa5fa85b263" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-xl font-bold text-white tracking-tight" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                <motion.span data-magicpath-motion-tag="motion.span" className="text-xl font-bold text-[#c2f12d]" animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
                  .
                </motion.span>
              </SortableContainer>
            </SortableContainer>

            {/* Nav Links with stagger */}
            <motion.div data-magicpath-motion-tag="motion.div" className="hidden md:flex items-center space-x-1" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
              {['How We Work', 'Projects', 'Pricing', 'FAQs'].map((item, i) => <motion.a data-magicpath-motion-tag="motion.a" key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} variants={itemVariants} whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
                  {item}
                </motion.a>)}
            </motion.div>

            {/* CTA Button with magnetic effect */}
            <MagneticButton className="relative px-5 py-2 rounded-full bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] text-sm font-bold overflow-hidden transition-all duration-300 group" onClick={handleGetQuote} data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" className="absolute inset-0 bg-white" initial={{
              scale: 0,
              opacity: 0
            }} whileHover={{
              scale: 1,
              opacity: 0.2
            }} transition={{
              duration: 0.3
            }} data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">Get Started</span>
            </MagneticButton>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section with Parallax */}
      <SortableContainer dndKitId="514bf8d0-2c0a-4a92-ac8c-4373945ca1b5" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9e0863de-8f27-4053-b5fe-37bd0c32099e" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale,
        y: heroY
      }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="b314774f-cdc6-4260-9ede-1abad357de4e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Badge with shimmer effect */}
            <SortableContainer dndKitId="b3161715-11dc-45df-8b9e-4378a7089bb1" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            type: "spring"
          }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{
              x: "-100%"
            }} whileHover={{
              x: "100%"
            }} transition={{
              duration: 0.6
            }} data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx" />
              <SortableContainer dndKitId="0fd73869-e423-40b6-89e4-c65ec20aaa3f" containerType="regular" prevTag="motion.div" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }} data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
                <Shield className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-sm font-medium bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent relative" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
                Fresh Ideas, Modern Solutions
              </span>
            </SortableContainer>

            {/* Headline with word animation */}
            <motion.h1 data-magicpath-motion-tag="motion.h1" className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" initial="hidden" animate="visible" variants={containerVariants} data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.span data-magicpath-motion-tag="motion.span" variants={itemVariants} className="inline-block bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                Ship your MVP in
              </motion.span>
              <br data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative inline-block" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" className="text-[#c2f12d]" variants={itemVariants} whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring"
              }} data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
                  30–60 days
                </motion.span>
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-2 bg-[#c2f12d]/20 blur-2xl -z-10" animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }} data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx" />
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
          }} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch. Fast, affordable, and built to scale.
            </motion.p>

            {/* CTA Buttons with enhanced hover */}
            <SortableContainer dndKitId="146c3853-f88f-4b43-8ad1-590c49b6176b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
              <MagneticButton className="group relative px-8 py-4 rounded-xl bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] font-bold overflow-hidden transition-all duration-300" onClick={handleGetQuote} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-[#b0dc28] to-[#c2f12d]" initial={{
                x: "-100%"
              }} whileHover={{
                x: "0%"
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="relative flex items-center space-x-2" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                  <SortableContainer dndKitId="c8bb2810-353b-4b57-b202-2ee1a1ce29d9" containerType="regular" prevTag="motion.div" animate={{
                  x: [0, 5, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
                    <ArrowRight className="w-5 h-5" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </span>
              </MagneticButton>

              <MagneticButton className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#c2f12d]/50 text-white rounded-xl font-semibold transition-all duration-300 group" onClick={handleBookCall} data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="flex items-center space-x-2" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="618b05cc-7d6c-49ac-b0e4-4f7266a9b358" containerType="regular" prevTag="motion.div" animate={{
                  rotate: [0, 360]
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }} data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                  <span data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
                </span>
              </MagneticButton>
            </SortableContainer>

            {/* Tech Stack with stagger animation */}
            <SortableContainer dndKitId="88dfb89a-3856-4c41-9e27-eeac6e10639c" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={containerVariants} className="space-y-4" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
                Built With
              </motion.p>
              <SortableContainer dndKitId="10007e56-e306-4b47-8857-466f2a84615b" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                {techStack.map((tech, i) => <motion.div data-magicpath-motion-tag="motion.div" key={tech} variants={itemVariants} whileHover={{
                scale: 1.1,
                y: -2,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.3
                }
              }} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#c2f12d]/50 hover:bg-white/10 transition-all duration-300 cursor-default" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator with bounce */}
        <SortableContainer dndKitId="c6e97735-8c62-437f-97a1-95260548b57b" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 15, 0],
        opacity: [1, 0.5, 1]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail - Light Section with Reveal Animation */}
      <SortableContainer dndKitId="889607a7-e7cf-4325-946a-ba9bf4e00905" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="7a1611b4-783a-4e35-a560-d1afb3a94220" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="a88f5e7d-2330-4b23-9511-3df0370108cd" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="text-center mb-20" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-[#252525]" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">Most MVPs </span>
              <span className="text-[#c2f12d]" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">fail</span>
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" className="text-xl text-slate-600 max-w-2xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
              Here's why—and how we fix it
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="97df3191-9712-4337-9c69-e90f8988fd3d" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
            {failureReasons.map((reason, index) => <motion.div data-magicpath-motion-tag="motion.div" key={reason.title} variants={itemVariants} whileHover={{
            y: -12,
            scale: 1.03,
            rotate: [0, -1, 1, 0],
            transition: {
              duration: 0.3
            }
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-[#c2f12d]/40 hover:shadow-2xl hover:shadow-[#c2f12d]/10 transition-all duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/5 to-transparent rounded-2xl" initial={{
              opacity: 0
            }} whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="w-14 h-14 bg-gradient-to-br from-[#c2f12d] to-[#b0dc28] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#c2f12d]/30" whileHover={{
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">
                    <reason.icon className="w-7 h-7 text-[#252525]" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach - Dark Section with Card Flip Effect */}
      <SortableContainer dndKitId="9b456616-42b1-44bf-af32-a928c05073b5" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="1c3dcc9c-6adf-41cc-9f4c-59cd17fcdb89" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="92ab38a0-e175-4e7e-aec0-04d90e4143f5" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
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
            }} data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
                great products
              </motion.span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
              A practical, sprint-based workflow designed for speed and quality.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="f0751471-3a1a-4138-b17c-e3ced0605c0a" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
            {approachSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} variants={itemVariants} whileHover={{
            scale: 1.03,
            y: -8,
            rotateY: 5,
            transition: {
              duration: 0.3
            }
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 overflow-hidden" style={{
            perspective: 1000
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/5" initial={{
              opacity: 0,
              scale: 0.8
            }} whileHover={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                  rotate: [0, -15, 15, 0],
                  scale: 1.1
                }} transition={{
                  duration: 0.6
                }} className="w-16 h-16 bg-[#c2f12d] rounded-2xl flex items-center justify-center shadow-xl shadow-[#c2f12d]/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-[#252525]" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx" />
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
                }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>)}
          </SortableContainer>

          {/* Team Photo */}
          <SortableContainer dndKitId="02bb9d80-a4a5-4353-a166-2047aa117c76" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="mt-20" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="64ae61cf-3d85-4fb8-a75a-cfd0636b00fd" containerType="regular" prevTag="div" className="relative rounded-3xl overflow-hidden group" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Gradient Overlay */}
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/40 to-transparent z-10" initial={{
              opacity: 0.7
            }} whileHover={{
              opacity: 0.5
            }} transition={{
              duration: 0.4
            }} data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Glow Effect */}
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-[#c2f12d]/20 blur-3xl -z-10" animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx" />

              {/* Team Photo */}
              <motion.img data-magicpath-motion-tag="motion.img" src="https://images.unsplash.com/photo-1522071820081-0a1dd7228f2d?w=1200&h=600&fit=crop&q=80" alt="Team collaborating on a project" className="w-full h-[400px] md:h-[500px] object-cover" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.6
            }} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx" />

              {/* Text Overlay */}
              <SortableContainer dndKitId="562677ef-47cf-4091-825a-89f7132def8e" containerType="regular" prevTag="motion.div" className="absolute bottom-0 left-0 right-0 p-10 z-20" initial={{
              y: 20,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5
            }} data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="11956dce-77ed-4201-861b-0237a1a88f75" containerType="regular" prevTag="motion.div" className="flex items-center space-x-3 mb-3" initial={{
                x: -20,
                opacity: 0
              }} whileInView={{
                x: 0,
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.6
              }} data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="text-[#c2f12d] text-sm font-semibold uppercase tracking-wider" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                  We work together every step of the way to ensure your product meets the highest standards.
                </motion.p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Team - Light Section with Image Reveal */}
      <SortableContainer dndKitId="acb1a17f-ddfb-4738-bdb8-8e04fbfe5b5a" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="996e2918-83ff-4f7b-b253-102c46a193ca" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c8224ba5-7fdf-45be-8ee7-0f6e2baab116" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
            color: "#252525"
          }} data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the <span className="text-[#c2f12d]" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">team</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">Experts in turning ideas into successful products</p>
          </SortableContainer>

          <SortableContainer dndKitId="fa497d9d-0490-4a46-901f-6d448b04d4b3" containerType="collection" prevTag="motion.div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
            {teamMembers.map((member, index) => <motion.div data-magicpath-motion-tag="motion.div" key={member.name} variants={itemVariants} whileHover={{
            y: -15,
            scale: 1.02
          }} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative aspect-[3/4] mb-6 rounded-3xl overflow-hidden bg-slate-200" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-t from-[#c2f12d]/90 via-[#c2f12d]/20 to-transparent z-10" initial={{
                opacity: 0
              }} whileHover={{
                opacity: 1
              }} transition={{
                duration: 0.4
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx" />
                  <motion.img data-magicpath-motion-tag="motion.img" src={member.image} alt={member.name} className="w-full h-full object-cover" whileHover={{
                scale: 1.15
              }} transition={{
                duration: 0.6
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx" />
                  <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 p-6 z-20" initial={{
                y: "100%"
              }} whileHover={{
                y: 0
              }} transition={{
                duration: 0.4,
                type: "spring"
              }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-2 text-slate-900" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
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
            }} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
                  {member.role}
                </motion.p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects - Dark Section with 3D Tilt */}
      <SortableContainer dndKitId="cb72f91c-a90d-4b4e-aa68-d06fa5fc229a" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="2d9b4ff8-f7d1-4d03-937a-2d28e3fbe120" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="88aa6e25-1d55-49ee-8eb5-d0e5fc31ca41" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">Recent work</h2>
            <p className="text-xl text-slate-400" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">Products we've built for startups and businesses</p>
          </SortableContainer>

          <SortableContainer dndKitId="7645666c-162b-4ecb-a546-35282a889c35" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/20 via-transparent to-[#c2f12d]/10" initial={{
              opacity: 0,
              scale: 0.8
            }} whileHover={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" className="text-7xl" whileHover={{
                scale: 1.3,
                rotate: [0, -10, 10, 0],
                y: -10,
                transition: {
                  duration: 0.5
                }
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
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
                  }} className="px-3 py-1.5 bg-[#c2f12d]/20 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full text-xs font-medium text-[#c2f12d]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="a3da149b-c9a6-4747-a209-c382679c354d" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="f81ac250-3574-41ba-95e9-ff521c0ac97b" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="35e6c5f7-5052-49ac-aed0-80b40a2c259b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
            color: "#252525"
          }} data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent <span className="text-[#c2f12d]" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">pricing</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">Simple, predictable pricing with no hidden costs</p>
          </SortableContainer>

          <SortableContainer dndKitId="63ba73d4-c1e5-40fa-b041-80f13e36f188" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx" />

            <h3 className="text-3xl font-bold mb-12 text-slate-900" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="ff8c6581-377d-49aa-940c-9ab018e21bc1" containerType="regular" prevTag="div" className="space-y-10 mb-12" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size with spring animation */}
              <SortableContainer dndKitId="b547cfc5-ef76-4f08-a9c7-2aea1be96c37" containerType="regular" prevTag="div" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="dbc6ad34-934a-4879-a347-05dab8e14088" containerType="regular" prevTag="div" className="flex justify-between mb-6" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-lg font-semibold text-slate-700" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <AnimatePresence mode="wait" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
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
                  }} className="text-3xl font-bold" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
                      {teamSize}
                    </motion.span>
                  </AnimatePresence>
                </SortableContainer>
                <div className="grid grid-cols-5 gap-4" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <SortableContainer dndKitId="2cc44ac5-68a4-4b9a-8a9e-a1b2d88bce06" containerType="regular" prevTag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.08,
                  y: -4
                }} whileTap={{
                  scale: 0.95
                }} className={`py-5 rounded-2xl font-bold text-2xl transition-all duration-300 ${teamSize === size ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.span data-magicpath-motion-tag="motion.span" animate={teamSize === size ? {
                    scale: [1, 1.2, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">
                        {size}
                      </motion.span>
                    </SortableContainer>)}
                </div>
              </SortableContainer>

              {/* Sprints with slide animation */}
              <SortableContainer dndKitId="2890d182-3bc3-4893-a1e2-b71eba9d51ed" containerType="regular" prevTag="div" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-lg font-semibold text-slate-700 mb-6 block" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="9de75dfa-846f-46ee-9b00-ae93caa7e9b8" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "972a78f3-37d1-4959-8f05-b5364ed0ad2f"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "7ea7695e-46d7-45a6-84af-82450b203476"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "67a207af-211c-4466-b7b4-4cf8655b6609"
                }].map(option => <motion.button data-magicpath-motion-tag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05,
                  y: -4
                }} whileTap={{
                  scale: 0.95
                }} className={`py-6 px-4 rounded-2xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.div data-magicpath-motion-tag="motion.div" animate={sprints === option.value ? {
                    scale: [1, 1.1, 1]
                  } : {}} transition={{
                    duration: 0.3
                  }} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
                        <div className="text-lg mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                        <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
                          {option.desc}
                        </div>
                      </motion.div>
                    </motion.button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display with pulse animation */}
            <AnimatePresence mode="wait" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="568fca52-a3d2-4903-8a89-6ae4dd981563" containerType="regular" prevTag="motion.div" key={`${teamSize}-${sprints}`} initial={{
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
            }} className="relative text-center p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mb-8 border border-slate-200 overflow-hidden" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/10" animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx" />
                <p className="relative text-sm text-slate-600 uppercase tracking-wider mb-3" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
                <motion.p data-magicpath-motion-tag="motion.p" className="relative text-6xl font-bold text-[#c2f12d] mb-6" initial={{
                scale: 1.2
              }} animate={{
                scale: 1
              }} transition={{
                type: "spring",
                stiffness: 200,
                damping: 15
              }} data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </motion.p>
                <SortableContainer dndKitId="8313270f-ecc1-498d-99f7-6718bcb70ce3" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-6 text-sm text-slate-600" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="d6426a4c-51cf-490f-9e40-0f2642fc41d9" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                  x: -20,
                  opacity: 0
                }} animate={{
                  x: 0,
                  opacity: 1
                }} transition={{
                  delay: 0.1
                }} data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
                    <Users className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="font-medium" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                      {teamSize} Developer{teamSize > 1 ? 's' : ''}
                    </span>
                  </SortableContainer>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx" />
                  <SortableContainer dndKitId="e692be0c-5a29-416b-b448-280175404b5b" containerType="regular" prevTag="motion.div" className="flex items-center gap-2" initial={{
                  x: 20,
                  opacity: 0
                }} animate={{
                  x: 0,
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }} data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">
                    <Clock className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="font-medium" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                  </SortableContainer>
                </SortableContainer>
                <motion.p data-magicpath-motion-tag="motion.p" className="relative text-xs text-slate-500 mt-5" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.3
              }} data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱120,000 per developer per sprint
                </motion.p>
              </SortableContainer>
            </AnimatePresence>

            {/* Features with stagger */}
            <motion.div data-magicpath-motion-tag="motion.div" className="space-y-4 mb-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map((feature, i) => <SortableContainer dndKitId="8e65a23b-8406-4f65-babf-0acc20d9bccc" containerType="regular" prevTag="motion.div" key={feature} variants={itemVariants} className="flex items-start space-x-3" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
                    <SortableContainer dndKitId="1b2d2607-a5d6-4572-90fe-d7164fcfb5a4" containerType="regular" prevTag="motion.div" animate={{
                rotate: [0, 360]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }} data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
                      <CheckCircle2 className="w-6 h-6 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx" />
                    </SortableContainer>
                    <p className="text-slate-700" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                  </SortableContainer>)}
            </motion.div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="f151f023-6958-4d7a-a222-3db9b2474a0f" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
              <MagneticButton className="flex-1 px-8 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-[#c2f12d]/30" onClick={handleGetQuote} data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </MagneticButton>
              <MagneticButton className="flex-1 px-8 py-5 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-2xl font-bold transition-all duration-300" onClick={handleBookCall} data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </MagneticButton>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs - Dark Section with Accordion Animation */}
      <SortableContainer dndKitId="44b09aa2-3038-4027-b25a-11d73d6481ca" containerType="regular" prevTag="section" id="faqs" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="27078b6e-a730-41f1-bd76-78eab1eaff0e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="89894a57-4aa8-4fe3-9f52-54fbc4f3cee2" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">Frequently asked questions</h2>
          </SortableContainer>

          <SortableContainer dndKitId="dd18bee9-deec-4129-b30c-9010103cd1c7" containerType="collection" prevTag="motion.div" className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
            {faqs.map((faq, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#c2f12d]/30 transition-all duration-300" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.button data-magicpath-motion-tag="motion.button" onClick={() => toggleFaq(index)} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.07)'
            }} className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: openFaq === index ? 180 : 0
              }} transition={{
                duration: 0.3,
                type: "spring"
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
                    {openFaq === index ? <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#c2f12d]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx" />}
                  </motion.div>
                </motion.button>

                <AnimatePresence data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.p data-magicpath-motion-tag="motion.p" initial={{
                  y: -10
                }} animate={{
                  y: 0
                }} exit={{
                  y: -10
                }} className="px-8 pb-6 text-slate-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
                        {faq.answer}
                      </motion.p>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA - Light Section with Glow Effect */}
      <SortableContainer dndKitId="a165fb6b-beae-414f-8645-287b1800fe04" containerType="regular" prevTag="section" id="cta" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="035fb4c7-e4bc-4f97-b50c-a2aefaff1be0" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="95a1252c-e609-4517-be1e-09f8f3a8d9ac" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative text-center p-16 md:p-20 bg-gradient-to-br from-[#252525] via-[#3a3a3a] to-[#252525] rounded-[3rem] shadow-2xl overflow-hidden" data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="d66e94de-b98c-45a0-abc8-2e79f495a383" containerType="regular" prevTag="div" className="absolute inset-0" data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.35, 0.15],
              x: [-50, 50, -50],
              y: [-50, 50, -50]
            }} transition={{
              duration: 10,
              repeat: Infinity
            }} className="absolute top-0 left-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.25, 0.1],
              x: [50, -50, 50],
              y: [50, -50, 50]
            }} transition={{
              duration: 12,
              repeat: Infinity,
              delay: 1
            }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="b286e5bb-b78a-4aec-a076-2770c82d6954" containerType="regular" prevTag="div" className="relative" data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="a8c973cd-c140-479a-a222-5dcbaceb132a" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8" data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="eb647fd7-1a21-47b9-aff7-8c9b2b71192d" containerType="regular" prevTag="motion.div" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-sm font-medium text-white" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
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
            }} data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
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
            }} data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product.
              </motion.p>

              <SortableContainer dndKitId="260a4d6a-7502-4b03-a975-3604953861c5" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">
                <MagneticButton className="px-10 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold text-lg transition-all shadow-2xl" onClick={handleBookCall} data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="flex items-center space-x-2" data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-6 h-6" data-magicpath-id="221" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span data-magicpath-id="222" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
                  </span>
                </MagneticButton>
                <MagneticButton className="px-10 py-5 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all backdrop-blur-xl" onClick={handleGetQuote} data-magicpath-id="223" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </MagneticButton>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Dark with Fade-in */}
      <SortableContainer dndKitId="daad98a2-7799-474c-868f-934d6c965160" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-[#1a1a1a] border-t border-white/5" data-magicpath-id="224" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="85aa5cf6-c666-4550-a702-ad0f653d2e05" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="225" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5591a179-2805-4ebb-b259-dbb0cdd371e4" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-4 gap-12 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} data-magicpath-id="226" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="393797c4-50d4-412c-86e2-0cdf84e31427" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="227" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="074bcc94-1b15-4bde-958a-e77caf805948" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="228" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.svg data-magicpath-motion-tag="motion.svg" width="48" height="48" viewBox="0 0 100 100" whileHover={{
                rotate: [0, -10, 10, 0]
              }} transition={{
                duration: 0.5
              }} data-magicpath-id="229" data-magicpath-path="ZenithPortfolio.tsx">
                  <defs data-magicpath-id="230" data-magicpath-path="ZenithPortfolio.tsx">
                    <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%" data-magicpath-id="231" data-magicpath-path="ZenithPortfolio.tsx">
                      <stop offset="0%" stopColor="#d4ff3d" />
                      <stop offset="50%" stopColor="#c2f12d" />
                      <stop offset="100%" stopColor="#a8d420" />
                    </linearGradient>
                    <filter id="logoShadowFooter" x="-50%" y="-50%" width="200%" height="200%" data-magicpath-id="232" data-magicpath-path="ZenithPortfolio.tsx">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="3" data-magicpath-id="233" data-magicpath-path="ZenithPortfolio.tsx" />
                      <feOffset dx="0" dy="2" result="offsetblur" data-magicpath-id="234" data-magicpath-path="ZenithPortfolio.tsx" />
                      <feComponentTransfer data-magicpath-id="235" data-magicpath-path="ZenithPortfolio.tsx">
                        <feFuncA type="linear" slope="0.5" data-magicpath-id="236" data-magicpath-path="ZenithPortfolio.tsx" />
                      </feComponentTransfer>
                      <feMerge data-magicpath-id="237" data-magicpath-path="ZenithPortfolio.tsx">
                        <feMergeNode data-magicpath-id="238" data-magicpath-path="ZenithPortfolio.tsx" />
                        <feMergeNode in="SourceGraphic" data-magicpath-id="239" data-magicpath-path="ZenithPortfolio.tsx" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Modern Z shape */}
                  <g filter="url(#logoShadowFooter)" data-magicpath-id="240" data-magicpath-path="ZenithPortfolio.tsx">
                    <path d="M20,25 L70,25 L30,75 L80,75" fill="none" stroke="url(#logoGradientFooter)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="241" data-magicpath-path="ZenithPortfolio.tsx" />
                    <circle cx="20" cy="25" r="6" fill="url(#logoGradientFooter)" data-magicpath-id="242" data-magicpath-path="ZenithPortfolio.tsx" />
                    <circle cx="70" cy="25" r="6" fill="url(#logoGradientFooter)" data-magicpath-id="243" data-magicpath-path="ZenithPortfolio.tsx" />
                    <circle cx="30" cy="75" r="6" fill="url(#logoGradientFooter)" data-magicpath-id="244" data-magicpath-path="ZenithPortfolio.tsx" />
                    <circle cx="80" cy="75" r="6" fill="url(#logoGradientFooter)" data-magicpath-id="245" data-magicpath-path="ZenithPortfolio.tsx" />
                  </g>
                </motion.svg>
                <SortableContainer dndKitId="aea71a6b-ae6e-4717-8313-be7ccf2cc8dc" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="246" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-2xl font-bold text-white tracking-tight" data-magicpath-id="247" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                  <span className="text-2xl font-bold text-[#c2f12d]" data-magicpath-id="248" data-magicpath-path="ZenithPortfolio.tsx">.</span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="249" data-magicpath-path="ZenithPortfolio.tsx">Building MVPs that matter since 2015</p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "925120c4-da25-4645-b8f1-4b8dcad64911"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "2f6f4f63-b37a-4eb9-ba7d-e2041a4a0526"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "0c544407-b776-4274-923d-1cb641d8bc8f"
          }].map(column => <motion.div data-magicpath-motion-tag="motion.div" key={column.title} variants={itemVariants} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="250" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-5 text-white text-lg" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="251" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-3" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="252" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="253" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
                  x: 5,
                  color: "#c2f12d"
                }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-all inline-block" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="254" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </motion.a>
                    </li>)}
                </ul>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="580726b8-60b5-4053-b38e-dcd40acfa5c7" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} data-magicpath-id="255" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="256" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="e3d6349b-6171-4692-b9bb-364d678ea5b1" containerType="regular" prevTag="div" className="flex space-x-8" data-magicpath-id="257" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="258" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="259" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};