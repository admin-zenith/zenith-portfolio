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
  mpid: "edd348e3-503b-4b43-b5a8-d1d82f6c6f1d"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "7ea9ab77-d0a6-4fe1-978b-2f78539ebe1b"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "7861aef1-7fec-4107-b040-880be9d01f9c"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "10783d3f-db21-4c94-9bf3-8e18971d722d"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "69ef6681-45f2-48d3-8a8d-bfcf93c887b3"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "373bb368-d21f-4e8b-ae66-278b6f8321b2"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "03514412-cfb8-4913-aea0-c5ff312471e3"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "0df42c0a-6dae-41e1-9e60-ff68e0bea94c"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "bb70e794-9863-4559-8e85-eaf490e6bf51"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "0fd97528-360f-4b4b-853d-cc1be50f3fbf"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "d9dd48bb-cd95-49dd-a778-97fc02ae8fb0"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "d0a822a1-ca7c-47a1-af04-86ac5eda2f63"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "d3ce87b1-6683-44bd-8eef-021ba3eb694f"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "f1f73ab0-3f47-473b-8acf-4d5aecb6d9a6"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "fe8e6841-0c29-4168-897d-8ae7eed8ceb0"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "2f90ea24-12fa-4d44-873a-7a91dcc9e20b"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "07cb6fb4-6c0d-456d-8ca2-893aed81c13a"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "17273abb-00a1-46be-af7a-aedde9a74dd9"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "b66fd6ef-62a2-4f6e-ab61-43d618afbab8"
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
  return <SortableContainer dndKitId="bf465202-99cf-4c2f-aafb-273bf7bea175" containerType="regular" prevTag="div" className="min-h-screen bg-[#252525] text-white overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated Grid Background */}
      <SortableContainer dndKitId="cefb67ea-5bab-4785-9213-b5416bf26a6d" containerType="regular" prevTag="div" className="fixed inset-0 z-0" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2f12d10_1px,transparent_1px),linear-gradient(to_bottom,#c2f12d10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Floating Orbs */}
      <SortableContainer dndKitId="f99d1dfa-cf0a-4fd8-b0e6-b7f765180cbf" containerType="regular" prevTag="div" className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c2f12d] rounded-full blur-[128px]" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="d0b11739-2526-43c4-8d79-ac360222681d" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#252525]/80 backdrop-blur-2xl border-b border-white/5" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e7680211-b53f-4ec7-bfdc-5f06f94a4cb9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f22c960a-a569-4af0-b353-de84c4eb71bc" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="b6c63a6f-2cf0-430b-8429-9c251bfd1970" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
              {/* VA Logo Symbol */}
              <svg width="40" height="40" viewBox="0 0 100 100" className="flex-shrink-0" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                <path d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#c2f12d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx" />
              </svg>
              <SortableContainer dndKitId="2eae9a5f-0e57-455e-a1de-d820511c341c" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-3xl font-bold text-white tracking-tight" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                <span className="text-3xl font-bold text-[#c2f12d]" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">.</span>
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
          }} className="relative px-6 py-2.5 rounded-xl bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] text-sm font-bold overflow-hidden transition-all duration-300" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
              Get Started
            </motion.button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="e66e1fa3-b835-4468-a8a4-7578626efd85" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="49971b8e-e8bc-4016-bca3-a48ec261721f" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="25f5b1f5-f370-43f3-946d-00a8921f4e0f" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="eed79392-73a7-4d9c-8c78-a4054d289cfa" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
              <Shield className="w-4 h-4 text-[#c2f12d]" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-sm font-medium bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
                Trusted by 100+ Startups Worldwide
              </span>
            </SortableContainer>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in
              <br data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative inline-block" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-[#c2f12d]" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">30–60 days</span>
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-2 bg-[#c2f12d]/20 blur-2xl -z-10" animate={{
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
            <SortableContainer dndKitId="04758ed7-405b-4185-8c5b-ad6f1d8ad751" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="959ff6ef-8ced-40fa-9e15-a121a3e4b7e3" containerType="regular" prevTag="motion.button" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="group relative px-8 py-4 rounded-xl bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] font-bold overflow-hidden transition-all duration-300" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="relative flex items-center space-x-2" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx" />
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="98e81bf8-dd37-4ff7-8bfb-f7741210793b" containerType="regular" prevTag="motion.button" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#c2f12d]/50 text-white rounded-xl font-semibold transition-all duration-300" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="flex items-center space-x-2" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
                </span>
              </SortableContainer>
            </SortableContainer>

            {/* Tech Stack */}
            <SortableContainer dndKitId="2984dca4-3b82-4d54-a014-dab353c365ea" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8
          }} className="space-y-4" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">Built With</p>
              <SortableContainer dndKitId="ee33ee43-4255-4897-8881-1133200fc019" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#c2f12d]/50 hover:bg-white/10 transition-all duration-300 cursor-default" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator */}
        <SortableContainer dndKitId="c25344d8-81d9-4980-ab94-13babd41c213" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-[#c2f12d]" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail - Light Section */}
      <SortableContainer dndKitId="30c102a4-6ee4-4275-8a66-4d5f4d44c23b" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="6d29804e-798c-495f-9ca9-d77e5d9e18fb" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="7f791a6d-4989-4679-88a6-19f6e82cf051" containerType="regular" prevTag="motion.div" initial={{
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
              <span className="bg-gradient-to-r from-slate-900 via-[#252525] to-[#c2f12d] bg-clip-text text-transparent" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                Most MVPs fail
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">Here's why—and how we fix it</p>
          </SortableContainer>

          <SortableContainer dndKitId="ff8d6b23-b68d-4bde-93e2-4456923f7875" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="fd278182-d47b-4fc1-8c18-a31f005d2454" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c522f723-c67e-4f69-91f5-35b812c96730" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="6be9f308-64be-4d6d-9e31-f845d88605f4" containerType="regular" prevTag="motion.div" initial={{
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
              <span className="text-[#c2f12d]" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">great products</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
              A practical, sprint-based workflow designed for speed and quality.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="bb77af65-aeab-4b6f-b55e-a9ceceece3dd" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 overflow-hidden" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx" />

                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }} className="w-16 h-16 bg-[#c2f12d] rounded-2xl flex items-center justify-center shadow-xl shadow-[#c2f12d]/30 transition-shadow duration-500" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-[#252525]" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx" />
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
      <SortableContainer dndKitId="a0bfd183-d64a-4453-a06c-b82b61dfab38" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="44274df2-d9b2-44a5-853b-495192f75c04" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f02b468e-8a5d-420e-9387-a5f666d44ffc" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the <span className="text-[#c2f12d]" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">team</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">Experts in turning ideas into successful products</p>
          </SortableContainer>

          <SortableContainer dndKitId="ba450af0-35cc-481c-b964-0be7c7469555" containerType="collection" prevTag="div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c2f12d]/90 via-[#c2f12d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx" />
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
      <SortableContainer dndKitId="f15608b1-9cb5-490e-b8e5-45c6ebd19e1e" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="34018052-c78c-4e57-bece-04f0f21189d4" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="bc013bb9-0f1d-4e94-8d35-15ff3822a051" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="54dda567-f96a-4191-976b-b12f040ee0b3" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#c2f12d]/40 transition-all duration-500 cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/20 via-transparent to-[#c2f12d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx" />

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
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1.5 bg-[#c2f12d]/20 backdrop-blur-xl border border-[#c2f12d]/30 rounded-full text-xs font-medium text-[#c2f12d]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="1f7ec089-0c93-4567-91f4-905012399e52" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="2483e00b-b31f-4980-aec2-b7c014bac215" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e0d63e3b-e711-4c3b-b101-ec2e31f1d4c7" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent <span className="text-[#c2f12d]" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">pricing</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">Simple, predictable pricing with no hidden costs</p>
          </SortableContainer>

          <SortableContainer dndKitId="08f424a3-760e-47c3-bdfb-dbc6575a3c06" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Gradient Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#c2f12d]" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx" />

            <h3 className="text-3xl font-bold mb-12 text-center text-slate-900" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="19e45e5b-ec69-4d6e-9857-d97211dc5474" containerType="regular" prevTag="div" className="space-y-10 mb-12" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size */}
              <SortableContainer dndKitId="47984c76-d392-42e4-ae19-a23b9663e69f" containerType="regular" prevTag="div" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="872b4cfe-3a3b-49ed-82dd-d51c1771bf51" containerType="regular" prevTag="div" className="flex justify-between mb-6" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-lg font-semibold text-slate-700" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <motion.span data-magicpath-motion-tag="motion.span" key={teamSize} initial={{
                  scale: 1.2,
                  color: '#c2f12d'
                }} animate={{
                  scale: 1,
                  color: '#252525'
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
                }} className={`py-5 rounded-2xl font-bold text-2xl transition-all duration-300 ${teamSize === size ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </motion.button>)}
                </div>
              </SortableContainer>

              {/* Sprints */}
              <SortableContainer dndKitId="f005f5c9-fde2-4260-bc31-e6dc5e859705" containerType="regular" prevTag="div" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-lg font-semibold text-slate-700 mb-6 block" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="7344473d-ce44-45ef-b136-ac82f4bc4509" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "8e52c6fe-6c35-4287-b56b-f9e5b90be720"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "b8eacc36-deaf-44be-b3f4-da7ca4b413d9"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "8eb832b1-5f70-469f-9d75-e0353fc3c37c"
                }].map(option => <motion.button data-magicpath-motion-tag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05,
                  y: -2
                }} whileTap={{
                  scale: 0.95
                }} className={`py-6 px-4 rounded-2xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-[#c2f12d] text-[#252525] shadow-xl shadow-[#c2f12d]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-lg mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-[#252525]/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
                        {option.desc}
                      </div>
                    </motion.button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="4b3711d0-a5b9-4f0d-9750-035ec3f49815" containerType="regular" prevTag="motion.div" key={calculatePrice()} initial={{
            scale: 0.95,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} className="relative text-center p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mb-8 border border-slate-200 overflow-hidden" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c2f12d]/10 via-transparent to-[#c2f12d]/10 animate-pulse" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx" />
              <p className="relative text-sm text-slate-600 uppercase tracking-wider mb-3" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
              <p className="relative text-6xl font-bold text-[#c2f12d] mb-6" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">₱{calculatePrice()}</p>
              <SortableContainer dndKitId="346a9b39-479a-4350-87a2-fbc1bca0e2e3" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-6 text-sm text-slate-600" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="13dc8bba-3a09-4a39-a6e9-54b897d7d5d2" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="font-medium" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                    {teamSize} Developer{teamSize > 1 ? 's' : ''}
                  </span>
                </SortableContainer>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="11b65e86-05dd-413e-b952-f00de809aa7a" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="font-medium" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                </SortableContainer>
              </SortableContainer>
              <p className="relative text-xs text-slate-500 mt-5" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint</p>
            </SortableContainer>

            {/* Features */}
            <div className="space-y-4 mb-10" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map((feature, i) => <SortableContainer dndKitId="31c5fbb6-37ba-4668-b147-d2e301703660" containerType="regular" prevTag="motion.div" key={feature} initial={{
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
                  <CheckCircle2 className="w-6 h-6 text-[#c2f12d] flex-shrink-0 mt-0.5" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx" />
                  <p className="text-slate-700" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                </SortableContainer>)}
            </div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="344a527a-6f40-465c-957b-56ce09a7bd94" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="flex-1 px-8 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-[#c2f12d]/30" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </motion.button>
              <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="flex-1 px-8 py-5 border-2 border-[#c2f12d] hover:bg-[#c2f12d]/10 text-slate-900 rounded-2xl font-bold transition-all duration-300" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </motion.button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs - Dark Section */}
      <SortableContainer dndKitId="c7da2738-c3fd-445a-b586-aa462efc7976" containerType="regular" prevTag="section" id="faqs" className="relative py-32 px-6 bg-[#252525]" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9bb668f2-0571-489a-b791-26ddcf0ec2b4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4e604bd5-ef6d-4819-8c63-531ce08b834a" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="1f04f069-509c-4163-aa87-eeecb5c45d4c" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#c2f12d]/30 transition-all duration-300" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.button data-magicpath-motion-tag="motion.button" onClick={() => toggleFaq(index)} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.05)'
            }} className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: openFaq === index ? 180 : 0
              }} transition={{
                duration: 0.3
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
                    {openFaq === index ? <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#c2f12d]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx" />}
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
      <SortableContainer dndKitId="13d36c81-03c2-4ab9-9c3d-fdde8160715f" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="18878317-fb45-4abd-9269-382961f8d74a" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="8dc47dd8-0b35-4f16-99c1-8c8b973544e0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative text-center p-16 md:p-20 bg-gradient-to-br from-[#252525] via-[#3a3a3a] to-[#252525] rounded-[3rem] shadow-2xl overflow-hidden" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="500a94d3-3656-445b-88c1-a3164479ba35" containerType="regular" prevTag="div" className="absolute inset-0" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15]
            }} transition={{
              duration: 8,
              repeat: Infinity
            }} className="absolute top-0 left-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }} transition={{
              duration: 10,
              repeat: Infinity,
              delay: 1
            }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#c2f12d]/30 rounded-full blur-3xl" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="8150544e-4d45-4aa8-8f88-08f0493786c8" containerType="regular" prevTag="div" className="relative" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="6d9dc027-59dc-48b3-a0df-9f05c192543a" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-5 h-5 text-[#c2f12d]" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-white" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">Ready to launch your MVP?</h2>

              <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product.
              </p>

              <SortableContainer dndKitId="827e9289-5860-4232-8fc2-43c740c9a2a1" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-5" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="fca1076b-fdf3-4192-b2b3-4d00bbccce3f" containerType="regular" prevTag="motion.button" whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.98
              }} className="px-10 py-5 bg-[#c2f12d] hover:bg-[#b0dc28] text-[#252525] rounded-2xl font-bold text-lg transition-all shadow-2xl" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="deaf79e3-c864-4e54-9773-18fbd3bb4a3b" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-[#1a1a1a] border-t border-white/5" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b21c128c-a358-44e3-bd18-57384e831393" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="0096dc65-4588-4733-b823-942e29ec2c60" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-16" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="1dc10f7a-d38a-41f2-a05f-c2f2e7830ad8" containerType="regular" prevTag="div" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="4aaee043-50d5-474b-8d39-ec5ced2c3f2f" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
                {/* VA Logo Symbol */}
                <svg width="48" height="48" viewBox="0 0 100 100" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                  <path d="M15,20 L35,80 L45,80 L65,20 M55,80 L75,20 L85,20 L65,80 Z" fill="none" stroke="#c2f12d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx" />
                </svg>
                <SortableContainer dndKitId="e29312db-1d99-422c-b429-15a37583f5cf" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-2xl font-bold text-white tracking-tight" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">zenith</span>
                  <span className="text-2xl font-bold text-[#c2f12d]" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">.</span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">Building MVPs that matter since 2015</p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "a3e2c624-fbf6-485a-9a11-9ecf87b96fcb"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "ef81a61b-b1da-4075-98bb-63e562c80021"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "cc3fd028-b804-4f6e-9cfd-e9c0d560e6bc"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-5 text-white text-lg" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-3" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
                  x: 5
                }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-all inline-block" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </motion.a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="72d40de3-a147-4a59-bb11-780269a7b202" containerType="regular" prevTag="div" className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="1be23e32-6a67-4ecd-99fa-2de078533e0d" containerType="regular" prevTag="div" className="flex space-x-8" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05
            }} className="text-sm text-slate-400 hover:text-[#c2f12d] transition-colors" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};