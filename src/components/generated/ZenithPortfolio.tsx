"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ArrowRight, CheckCircle2, Code2, Palette, Zap, BarChart3, Users, Clock, DollarSign, Calendar, MessageSquare, Github, Figma, ChevronDown, ChevronUp, Target, TrendingUp, XCircle, AlertCircle, RefreshCw, Sparkles, Shield, Lock, Layers } from 'lucide-react';
type ZenithPortfolioProps = Record<string, never>;

// Tech Stack
const techStack = ['Laravel', 'React', 'Next.js', 'Node.js', 'Tailwind', 'MySQL', 'AWS', 'TypeScript'];

// Failure Reasons
const failureReasons = [{
  icon: Target,
  title: 'No clear direction',
  description: 'Building features without solving real problems.',
  mpid: "34ea97ce-a7f2-44a4-b936-748d3b5e2c9b"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "209e9f36-b92f-404b-bc87-1b4dd6df16d6"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "8c8892d7-d46b-449e-baac-3cdb428c4a25"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "282c7389-e602-44b6-9bb9-eda363d34f73"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "cf03d6d4-1087-4ac1-980d-6521910b1d4d"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "98cb377b-638c-4165-9c3e-243624ae4f6a"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "abfac563-58a6-45b8-99b7-14cdfc204ff1"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "ee180609-7127-45d0-a70f-c47b1cba831d"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "831282af-f00e-4b53-8177-a57f776df693"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "9ab5eb9a-60e7-449d-b628-0231dc801379"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "d4fb8d29-73d2-43c0-af98-c445bcd6e626"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "5ac339a4-c4cd-45e3-a8ef-76b4e332a980"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "c11246b1-c64a-4139-a47f-c1b57aab3047"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "a34df79a-cc06-4717-a6b6-85284f115317"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "54d4597c-bb15-41da-8586-39e095b1f5dd"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "aaddde81-ac2c-4a70-9f98-801f132753c0"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "3544e8aa-6f31-40ca-8ad9-ccb57fd25abc"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "621a27b3-5584-43c4-a878-243dc4f05035"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "3dffd55e-49b7-420a-a0f5-4fe4d4808740"
}] as any[];
export const ZenithPortfolio = (props: ZenithPortfolioProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [teamSize, setTeamSize] = useState(2);
  const [sprints, setSprints] = useState(2);
  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const calculatePrice = () => {
    const ratePerDevPerSprint = 120000;
    const total = teamSize * sprints * ratePerDevPerSprint;
    return total.toLocaleString();
  };
  const getDuration = () => sprints * 2;
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="ae3d25df-3c19-4adb-9deb-d3d0ad37ce5a" containerType="regular" prevTag="div" className="min-h-screen bg-[#2d2d2d] text-white overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated Grid Background */}
      <SortableContainer dndKitId="636ab71a-75db-4a28-89dc-0b9d345ce95d" containerType="regular" prevTag="div" className="fixed inset-0 z-0" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a4c63910_1px,transparent_1px),linear-gradient(to_bottom,#a4c63910_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Floating Orbs */}
      <SortableContainer dndKitId="c2afc655-3415-425e-a00c-6eff6b2a603d" containerType="regular" prevTag="div" className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 -left-48 w-96 h-96 bg-[#a4c639] rounded-full blur-[128px]" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#8cb82b] rounded-full blur-[128px]" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="c9163e8c-b912-4d69-af03-0b0b84645770" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#2d2d2d]/80 backdrop-blur-2xl border-b border-white/5" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="823cde62-f23b-475e-882a-bc34817b1d1c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c00d4184-de1d-4ae5-bd90-0ddbd001e984" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="dae64746-7a3c-44a2-bdb3-afd6641235ce" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
              {/* VA Logo Symbol */}
              <svg width="40" height="40" viewBox="0 0 100 100" className="flex-shrink-0" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                <path d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#a4c639" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx" />
              </svg>
              <SortableContainer dndKitId="09844083-b9bc-4603-b2ed-dbbc0d57dc27" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-3xl font-bold text-white tracking-tight" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                <span className="text-3xl font-bold text-[#a4c639]" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">.</span>
              </SortableContainer>
            </SortableContainer>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-1" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
              {['How We Work', 'Projects', 'Pricing', 'FAQs'].map(item => <motion.a data-magicpath-motion-tag="motion.a" key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">
                  {item}
                </motion.a>)}
            </div>

            {/* CTA Button */}
            <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="relative px-6 py-2.5 rounded-xl bg-[#a4c639] hover:bg-[#8cb82b] text-[#2d2d2d] text-sm font-bold overflow-hidden transition-all duration-300" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
              Get Started
            </motion.button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="dcf32db8-3576-44b7-8468-d102afee12ea" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="13da07ee-c973-4284-aba2-c33669ac281e" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="55f2e953-ddfe-4f2f-b9f1-1ebaf8942d8b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Badge */}
            <SortableContainer dndKitId="28735d2d-ddba-450a-b75f-d0ded230a128" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
              <Shield className="w-4 h-4 text-[#a4c639]" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-sm font-medium bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
                Trusted by 100+ Startups Worldwide
              </span>
            </SortableContainer>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in
              <br data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative inline-block" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-[#a4c639]" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">30–60 days</span>
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-2 bg-[#a4c639]/20 blur-2xl -z-10" animate={{
                opacity: [0.3, 0.6, 0.3]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }} data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx" />
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p data-magicpath-motion-tag="motion.p" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4
          }} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch. Fast, affordable, and built to scale.
            </motion.p>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="351ea143-2c05-467e-872e-977e3bc4b1b4" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="c53279dc-a8bb-4d41-8878-88900b75faf7" containerType="regular" prevTag="motion.button" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="group relative px-8 py-4 rounded-xl bg-[#a4c639] hover:bg-[#8cb82b] text-[#2d2d2d] font-bold overflow-hidden transition-all duration-300" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="relative flex items-center space-x-2" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx" />
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="e79ef6fa-aca0-4fae-9226-8b279d0aa077" containerType="regular" prevTag="motion.button" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#a4c639]/50 text-white rounded-xl font-semibold transition-all duration-300" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="flex items-center space-x-2" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5 text-[#a4c639]" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
                </span>
              </SortableContainer>
            </SortableContainer>

            {/* Tech Stack */}
            <SortableContainer dndKitId="2b50f55a-1edf-4e36-b9d5-d158beecc6cf" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8
          }} className="space-y-4" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">Built With</p>
              <SortableContainer dndKitId="c0ca7192-3454-4563-88c9-54846e086df7" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
                {techStack.map((tech, i) => <motion.div data-magicpath-motion-tag="motion.div" key={tech} initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.9 + i * 0.05
              }} whileHover={{
                scale: 1.1,
                y: -2
              }} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#a4c639]/50 hover:bg-white/10 transition-all duration-300 cursor-default" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator */}
        <SortableContainer dndKitId="3efd679b-da49-4082-beaa-4b8d71556737" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-[#a4c639]" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail - Light Section */}
      <SortableContainer dndKitId="2d3e2ae7-9cf0-4282-81b6-1e60f91758a2" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e01fabfe-7653-46a7-8698-929e1abce60c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f7925ae0-d929-4088-b142-17de7568de7f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-20" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="bg-gradient-to-r from-slate-900 via-[#2d2d2d] to-[#a4c639] bg-clip-text text-transparent" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                Most MVPs fail
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">Here's why—and how we fix it</p>
          </SortableContainer>

          <SortableContainer dndKitId="7cdc9d58-05ad-45c7-b064-2d8457ce7b90" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
            {failureReasons.map((reason, index) => <motion.div data-magicpath-motion-tag="motion.div" key={reason.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                    <reason.icon className="w-7 h-7 text-white" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach - Dark Section */}
      <SortableContainer dndKitId="a6b8ce40-f55c-4db2-b54b-8c1e73e1e09a" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="3571eb76-d2f1-40d8-b208-4e8468e748be" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="9d0ea459-3ad4-4e07-a687-988822e95fda" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
              How we build{' '}
              <span className="text-[#a4c639]" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">great products</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
              A practical, sprint-based workflow designed for speed and quality.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="50bf5d95-ba7d-4bcf-a0a4-1dde5ee1a89d" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
            {approachSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} whileHover={{
            scale: 1.02,
            y: -5
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#a4c639]/40 transition-all duration-500 overflow-hidden" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a4c639]/10 via-transparent to-[#8cb82b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }} className="w-16 h-16 bg-[#a4c639] rounded-2xl flex items-center justify-center shadow-xl shadow-[#a4c639]/30 transition-shadow duration-500" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-[#2d2d2d]" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx" />
                    </motion.div>
                    <span className="text-7xl font-bold bg-gradient-to-br from-white/5 to-white/0 bg-clip-text text-transparent" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Team - Light Section */}
      <SortableContainer dndKitId="4ad3232d-ef94-434e-8d6d-9ad604fe442b" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="7f57b5d2-7512-4c5c-8ea3-d4cafa5264f7" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="1c97842c-2ee7-4ac5-8998-619dfb6b816a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the <span className="text-[#a4c639]" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">team</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">Experts in turning ideas into successful products</p>
          </SortableContainer>

          <SortableContainer dndKitId="cdd7f69b-40a7-4dd7-8eea-50682a3e8435" containerType="collection" prevTag="div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
            {teamMembers.map((member, index) => <motion.div data-magicpath-motion-tag="motion.div" key={member.name} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -10
          }} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative aspect-[3/4] mb-6 rounded-3xl overflow-hidden bg-slate-200" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#a4c639]/90 via-[#a4c639]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className="flex gap-3" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                    scale: 1.1
                  }} whileTap={{
                    scale: 0.9
                  }} className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
                        <Github className="w-5 h-5 text-white" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx" />
                      </motion.button>
                      <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                    scale: 1.1
                  }} whileTap={{
                    scale: 0.9
                  }} className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
                        <MessageSquare className="w-5 h-5 text-white" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                <p className="text-sm text-slate-600" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects - Dark Section */}
      <SortableContainer dndKitId="5b1efc81-c3f6-401a-8cef-067758b71cac" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="91a0360a-b842-42e2-a4c9-c91fd5a1d2c2" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="7ab7b20b-c79b-479f-bc1e-490f9b44ea44" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">Recent work</h2>
            <p className="text-xl text-slate-400" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">Products we've built for startups and businesses</p>
          </SortableContainer>

          <SortableContainer dndKitId="36fd9488-083a-4ae5-8b17-e0f480572018" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
            {recentProjects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={project.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} whileHover={{
            scale: 1.05,
            y: -10
          }} className="group relative aspect-square rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#a4c639]/40 transition-all duration-500 cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a4c639]/20 via-transparent to-[#8cb82b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                scale: 1.2,
                rotate: 10
              }} className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
                    {project.image}
                  </motion.div>
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1.5 bg-[#a4c639]/20 backdrop-blur-xl border border-[#a4c639]/30 rounded-full text-xs font-medium text-[#a4c639]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing - Light Section */}
      <SortableContainer dndKitId="16c57774-a501-4e60-a08a-21b0ce099986" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="1332bf52-77c9-40a5-a541-42eb1f60d933" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="2ebc07c7-c2c0-4d29-a272-c529e2a2257f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent <span className="text-[#a4c639]" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">pricing</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">Simple, predictable pricing with no hidden costs</p>
          </SortableContainer>

          <SortableContainer dndKitId="1a2303e7-e566-41f7-bc1d-bd6e6d586509" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Gradient Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#a4c639]" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx" />

            <h3 className="text-3xl font-bold mb-12 text-center text-slate-900" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="7b9c33c2-39e5-4566-bfaa-90eb8136c497" containerType="regular" prevTag="div" className="space-y-10 mb-12" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size */}
              <SortableContainer dndKitId="9995262d-5bb0-4a64-b317-0af033aa3c87" containerType="regular" prevTag="div" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="a4160739-bc84-4a55-abd9-c3e06529e22f" containerType="regular" prevTag="div" className="flex justify-between mb-6" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-lg font-semibold text-slate-700" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <motion.span data-magicpath-motion-tag="motion.span" key={teamSize} initial={{
                  scale: 1.2,
                  color: '#a4c639'
                }} animate={{
                  scale: 1,
                  color: '#2d2d2d'
                }} className="text-3xl font-bold" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
                    {teamSize}
                  </motion.span>
                </SortableContainer>
                <div className="grid grid-cols-5 gap-4" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <motion.button data-magicpath-motion-tag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.05,
                  y: -2
                }} whileTap={{
                  scale: 0.95
                }} className={`py-5 rounded-2xl font-bold text-2xl transition-all duration-300 ${teamSize === size ? 'bg-[#a4c639] text-[#2d2d2d] shadow-xl shadow-[#a4c639]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </motion.button>)}
                </div>
              </SortableContainer>

              {/* Sprints */}
              <SortableContainer dndKitId="fb7c8d45-ae95-489d-a2cb-e2477b6e868e" containerType="regular" prevTag="div" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-lg font-semibold text-slate-700 mb-6 block" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="49e71402-b5c9-4c38-af57-97691f641536" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "92117a1a-8c44-4fc1-9986-381a79522705"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "c4e9cbe5-0de8-40cf-92f2-ab8192c57670"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "68c4feaf-f270-4abf-bb47-95a95d83abca"
                }].map(option => <motion.button data-magicpath-motion-tag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05,
                  y: -2
                }} whileTap={{
                  scale: 0.95
                }} className={`py-6 px-4 rounded-2xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-[#a4c639] text-[#2d2d2d] shadow-xl shadow-[#a4c639]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-lg mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-[#2d2d2d]/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
                        {option.desc}
                      </div>
                    </motion.button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="3ef8318d-d416-474f-8a4c-aca3a72a3a02" containerType="regular" prevTag="motion.div" key={calculatePrice()} initial={{
            scale: 0.95,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} className="relative text-center p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mb-8 border border-slate-200 overflow-hidden" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a4c639]/10 via-transparent to-[#a4c639]/10 animate-pulse" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx" />
              <p className="relative text-sm text-slate-600 uppercase tracking-wider mb-3" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
              <p className="relative text-6xl font-bold text-[#a4c639] mb-6" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">₱{calculatePrice()}</p>
              <SortableContainer dndKitId="0cdc3f56-e869-45c7-8e6b-1901b2917531" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-6 text-sm text-slate-600" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="5b103ff1-e096-4899-911b-c2daa7caa2f8" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-5 h-5 text-[#a4c639]" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="font-medium" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                    {teamSize} Developer{teamSize > 1 ? 's' : ''}
                  </span>
                </SortableContainer>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="62ed84b6-f081-483e-b290-e75cb6a3e69b" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-5 h-5 text-[#a4c639]" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="font-medium" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                </SortableContainer>
              </SortableContainer>
              <p className="relative text-xs text-slate-500 mt-5" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint</p>
            </SortableContainer>

            {/* Features */}
            <div className="space-y-4 mb-10" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map((feature, i) => <SortableContainer dndKitId="8e88c274-7a54-4e98-b9ad-77bc574e7997" containerType="regular" prevTag="motion.div" key={feature} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="flex items-start space-x-3" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
                  <CheckCircle2 className="w-6 h-6 text-[#a4c639] flex-shrink-0 mt-0.5" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx" />
                  <p className="text-slate-700" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                </SortableContainer>)}
            </div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="b6d49131-8745-404a-8c97-6f7ebcdb94fa" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="flex-1 px-8 py-5 bg-[#a4c639] hover:bg-[#8cb82b] text-[#2d2d2d] rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-[#a4c639]/30" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </motion.button>
              <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="flex-1 px-8 py-5 border-2 border-[#a4c639] hover:bg-[#a4c639]/10 text-slate-900 rounded-2xl font-bold transition-all duration-300" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </motion.button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs - Dark Section */}
      <SortableContainer dndKitId="e9a64f76-9262-44da-872d-cfc3bcac6a62" containerType="regular" prevTag="section" id="faqs" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="f8914f6a-8861-4d60-a9da-2fa95a5adf90" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4b480d22-6218-4afb-a1de-a443361604c4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">Frequently asked questions</h2>
          </SortableContainer>

          <SortableContainer dndKitId="78dc6b94-8081-487a-9464-70f0457ebad1" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
            {faqs.map((faq, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#a4c639]/30 transition-all duration-300" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.button data-magicpath-motion-tag="motion.button" onClick={() => toggleFaq(index)} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.05)'
            }} className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: openFaq === index ? 180 : 0
              }} transition={{
                duration: 0.3
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
                    {openFaq === index ? <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#a4c639]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx" />}
                  </motion.div>
                </motion.button>

                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-slate-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">{faq.answer}</p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA - Light Section */}
      <SortableContainer dndKitId="461364cb-3bda-4b3b-830e-2c5e6b6ae37e" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="bf482835-deac-48a7-b9e6-27a2661acbfc" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="745f39a1-2338-43f4-99d8-1740f42c15b8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative text-center p-16 md:p-20 bg-gradient-to-br from-[#2d2d2d] via-[#3a3a3a] to-[#2d2d2d] rounded-[3rem] shadow-2xl overflow-hidden" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="55b7d946-3edb-48a1-8207-c03e63225ad4" containerType="regular" prevTag="div" className="absolute inset-0" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15]
            }} transition={{
              duration: 8,
              repeat: Infinity
            }} className="absolute top-0 left-0 w-96 h-96 bg-[#a4c639]/30 rounded-full blur-3xl" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }} transition={{
              duration: 10,
              repeat: Infinity,
              delay: 1
            }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#8cb82b]/30 rounded-full blur-3xl" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="8fb9a673-8da7-4e52-895f-db49b641cdc5" containerType="regular" prevTag="div" className="relative" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="1d58ea36-e3b0-41eb-825b-e074bf387f73" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-5 h-5 text-[#a4c639]" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-white" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">Ready to launch your MVP?</h2>

              <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product.
              </p>

              <SortableContainer dndKitId="414177e6-0053-4b42-8840-8195a0cc266f" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-5" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="d02adc92-b09f-4762-bd30-89567c863769" containerType="regular" prevTag="motion.button" whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.98
              }} className="px-10 py-5 bg-[#a4c639] hover:bg-[#8cb82b] text-[#2d2d2d] rounded-2xl font-bold text-lg transition-all shadow-2xl" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="flex items-center space-x-2" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-6 h-6" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
                  </span>
                </SortableContainer>
                <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.98
              }} className="px-10 py-5 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all backdrop-blur-xl" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </motion.button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Dark */}
      <SortableContainer dndKitId="35fd8d5c-99de-4936-b4a6-376c4f3a2e08" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-[#1a1a1a] border-t border-white/5" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="31cc9557-0060-4481-9b0f-48a3564b46d0" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="fff80a9b-089a-4829-99aa-3c5b61f13773" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-16" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="59a55414-348a-4cf7-a444-71c0ac9c0c6b" containerType="regular" prevTag="div" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="64d5a025-4e45-496e-9193-e834ed5bc1ad" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
                {/* VA Logo Symbol */}
                <svg width="48" height="48" viewBox="0 0 100 100" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                  <path d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#a4c639" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx" />
                </svg>
                <SortableContainer dndKitId="e59a9a06-7d61-4467-a9e6-f046a3a3fc3f" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-2xl font-bold text-white tracking-tight" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                  <span className="text-2xl font-bold text-[#a4c639]" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">.</span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">Building MVPs that matter since 2015</p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "da07ddd5-d676-45ad-a2ce-4e65f29f9d31"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "e268b584-4cc1-4729-bf27-6673b8952a8e"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "19834949-ebd9-4b63-b728-8b43bbba897e"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-5 text-white text-lg" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-3" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
                  x: 5
                }} className="text-sm text-slate-400 hover:text-[#a4c639] transition-all inline-block" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </motion.a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="fbc89475-12fb-411d-b619-134244524db6" containerType="regular" prevTag="div" className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="f46558b3-12cb-4ab9-b663-5f89a546a3f1" containerType="regular" prevTag="div" className="flex space-x-8" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05
            }} className="text-sm text-slate-400 hover:text-[#a4c639] transition-colors" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05
            }} className="text-sm text-slate-400 hover:text-[#a4c639] transition-colors" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};