"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useAnimation, AnimatePresence } from 'framer-motion';
import { Rocket, ArrowRight, CheckCircle2, Code2, Palette, Zap, BarChart3, Users, Clock, DollarSign, Calendar, MessageSquare, Github, Figma, ChevronDown, ChevronUp, Target, TrendingUp, XCircle, AlertCircle, RefreshCw, Sparkles, Shield, Lock, Layers } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { Navigation } from './Navigation';
import { FailureSection } from './FailureSection';
import { ApproachSection } from './ApproachSection';
import { TeamSection } from './TeamSection';
import { ProjectsSection } from './ProjectsSection';
import { PricingSection } from './PricingSection';
import { WhyBuildWithUsSection } from './WhyBuildWithUsSection';
import { FloatingParticles } from './FloatingParticles';
import { Logo } from './Logo';
import { FAQS } from './constants';
type ZenithPortfolioProps = Record<string, never>;

// Tech Stack
const techStack = ['Laravel', 'React', 'Next.js', 'Node.js', 'Tailwind', 'MySQL', 'AWS', 'TypeScript'];

// Failure Reasons
const failureReasons = [{
  icon: Target,
  title: 'No clear direction',
  description: 'Building features without solving real problems.',
  mpid: "dda705ee-0531-48f9-ad96-d7f6c97ffa8a"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "aae1be49-9293-4cf4-b847-aae1924d791c"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "4c132d81-afb2-4d9d-b38e-92ba50dbf130"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "bbc4f918-e1da-4521-8eb9-7517505d0f1d"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "8200d73f-8a11-4b80-9eba-b4181be3d4d3"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "c937bd4e-518f-43ba-afa1-d749e3b095cc"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "fab00ab5-dc8b-4776-9838-eb1f7d27730d"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "978e827f-d491-448e-a5fe-67936b3c082c"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "302549b0-32ee-4507-a811-83975728801e"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "98f841bf-4a07-4d76-aedb-899aaacd2526"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "5f8d3b0e-8851-4c85-903b-c7f54286f826"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "9765effd-104a-428f-8a59-03f819a6f40c"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "51bb446e-9e8e-4af0-9b8d-97393c85ae88"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "bd74eddf-e384-4a77-b102-7ab0596a62e9"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "b780014d-fb29-41c7-a5db-173eabdba5d9"
}] as any[];

// FAQs
const faqs = FAQS;

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
  }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} onClick={onClick} data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
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
  return <SortableContainer dndKitId="e7fe2d59-861e-428b-87de-b7a7ac5c178d" containerType="regular" prevTag="div" className="min-h-screen bg-[#252525] text-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Floating Particles */}
      <FloatingParticles data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Animated Grid Background */}
      <SortableContainer dndKitId="8d36adb7-f4b8-4d5a-83d5-58c1e5b8f0c4" containerType="regular" prevTag="motion.div" className="fixed inset-0 z-0" style={{
      opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.3])
    }} data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2f12d10_1px,transparent_1px),linear-gradient(to_bottom,#c2f12d10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Floating Orbs with Enhanced Animation */}
      <SortableContainer dndKitId="d05357bb-e0f4-4190-b8a7-88291df22ecf" containerType="regular" prevTag="div" className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
        x: [0, 100, 0],
        y: [0, 50, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx" />
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
      }} className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <Navigation onGetStarted={handleGetQuote} data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Hero Section */}
      <HeroSection scrollProgress={smoothProgress} onGetQuote={handleGetQuote} onBookCall={handleBookCall} data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Why MVPs Fail */}
      <FailureSection data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Our Approach */}
      <ApproachSection data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Why Build With Us Section */}
      <WhyBuildWithUsSection data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Team */}
      <TeamSection data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Projects */}
      <ProjectsSection data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* Pricing */}
      <PricingSection onGetQuote={handleGetQuote} onBookCall={handleBookCall} data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx" />

      {/* FAQs - Dark Section with Accordion Animation */}
      <SortableContainer dndKitId="d39c25a2-3ddd-46f9-9ca3-bea4754756d3" containerType="regular" prevTag="section" id="faqs" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b0028de2-b107-4bd7-97d8-1d2c339f89b7" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e12b606c-9ae9-4ef1-8be1-56b3c07beef0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">Frequently asked questions</h2>
          </SortableContainer>

          <SortableContainer dndKitId="a49377fd-6008-4b83-990a-9b9f001c8918" containerType="collection" prevTag="motion.div" className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
            {faqs.map((faq, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#c2f12d]/30 transition-all duration-300" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.button data-magicpath-motion-tag="motion.button" onClick={() => toggleFaq(index)} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.07)'
            }} className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: openFaq === index ? 180 : 0
              }} transition={{
                duration: 0.3,
                type: "spring"
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
                    {openFaq === index ? <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#c2f12d]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx" />}
                  </motion.div>
                </motion.button>

                <AnimatePresence data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.p data-magicpath-motion-tag="motion.p" initial={{
                  y: -10
                }} animate={{
                  y: 0
                }} exit={{
                  y: -10
                }} className="px-8 pb-6 text-slate-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
                        {faq.answer}
                      </motion.p>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA - Light Section with Glow Effect */}
      <SortableContainer dndKitId="0e10451e-5726-4048-b6e8-2e393b977b4a" containerType="regular" prevTag="section" id="cta" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c6bca3ca-08ba-4b79-b4c5-da62d0699c6a" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="01b30865-b31c-42e1-a0c3-3f46adcbcb4a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative text-center p-16 md:p-20 bg-gradient-to-br from-[#252525] via-[#3a3a3a] to-[#252525] rounded-[3rem] shadow-2xl overflow-hidden" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="57a44181-26e8-4f31-b273-d18103a680c4" containerType="regular" prevTag="div" className="absolute inset-0" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.35, 0.15],
              x: [-50, 50, -50],
              y: [-50, 50, -50]
            }} transition={{
              duration: 10,
              repeat: Infinity
            }} className="absolute top-0 left-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.25, 0.1],
              x: [50, -50, 50],
              y: [50, -50, 50]
            }} transition={{
              duration: 12,
              repeat: Infinity,
              delay: 1
            }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="964f2d09-7ce5-485b-8e34-04f57677128e" containerType="regular" prevTag="div" className="relative" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="ed185316-1999-41be-b4a0-415c9ce585e9" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="174d328c-74c3-44b1-b1f4-34e781815aab" containerType="regular" prevTag="motion.div" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-sm font-medium text-white" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
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
            }} data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to launch your AI-ready MVP?
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
            }} data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product—supercharged with AI.
              </motion.p>

              <SortableContainer dndKitId="d19034ff-8c56-43b5-bf93-852cfb1fbee9" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                <MagneticButton className="px-10 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold text-lg transition-all shadow-2xl" onClick={handleBookCall} data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="flex items-center space-x-2" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-6 h-6" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
                  </span>
                </MagneticButton>
                <MagneticButton className="px-10 py-5 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all backdrop-blur-xl" onClick={handleGetQuote} data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </MagneticButton>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Dark with Fade-in */}
      <SortableContainer dndKitId="b61dfa5c-27ae-406a-95a5-27b0fbcd664d" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-[#1a1a1a] border-t border-white/5" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c8d9dd92-5a09-42d9-97c8-ffc46de77918" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="1dd5449b-b28e-4044-9464-e06c376415ee" containerType="collection" prevTag="motion.div" className="grid md:grid-cols-4 gap-12 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="7161d366-594a-4e1c-b9a4-e8d68fe93861" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="0e1168ec-a409-4147-957b-c0d0d79f98ba" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
                <Logo size={48} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="fa33cb3b-b12d-4365-930d-33c685e22862" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-2xl font-bold text-white tracking-tight" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                  <span className="text-2xl font-bold text-[#c2f12d]" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">.</span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-sm text-slate-400 leading-relaxed mb-3" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
                Building the future, supercharged with AI.
              </p>
              <SortableContainer dndKitId="2cc2c4cd-aa43-4e1d-b956-85e3b20511c8" containerType="regular" prevTag="div" className="flex items-center space-x-1.5 text-xs text-[#c2f12d]" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
                <Sparkles className="w-3 h-3" />
                <span className="font-semibold" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">Zenith Technologies</span>
              </SortableContainer>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "ff9dbec6-2cf2-4473-8112-f3d8b05e0569"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "23283a51-6606-4984-86c6-5e490b9d5d15"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "4fe018cc-b6fe-40c3-a54f-6e597c29f0dc"
          }].map(column => <motion.div data-magicpath-motion-tag="motion.div" key={column.title} variants={itemVariants} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-5 text-white text-lg" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-3" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
                  x: 5,
                  color: "#c2f12d"
                }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-all inline-block" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </motion.a>
                    </li>)}
                </ul>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="09e2d3b2-60e3-4c9b-8d47-4c9c5b0e93d6" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="88f62bb5-464c-42f0-89eb-d3c42284b37e" containerType="regular" prevTag="div" className="flex space-x-8" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05,
              color: "#c2f12d"
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};