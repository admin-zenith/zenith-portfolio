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
  mpid: "434e4418-6164-46e7-8eeb-35887e3278f8"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "1871fe82-d0fe-4ece-b824-17f3e9aa3575"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "627739c0-ede3-4924-ab3a-aa2f22e8fd19"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "f8585bad-8603-4203-b8e9-3a4ed88f4e54"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "b4106674-9602-4570-a014-c4b134bd6591"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "50250623-d4a7-4837-beae-574a5286c544"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "87a5ea8a-fced-4598-91ee-43bbc559b1e2"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "3802c1f7-8c48-4bb2-86fd-eaec14410e33"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "b4a1488b-5fe3-45b5-89b3-d8f3ee320bb4"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "c4b8cf58-6477-452e-8b0a-fbddacc47b1e"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "bf9ed177-471f-4b90-9690-04ec9f3bb873"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "3a0e9517-ad4d-4209-8fd5-a9d4273db39e"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "59dc1714-8e29-4ffe-aa16-3e03ca8e2edc"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "e0174cb7-c8da-4d4a-9209-5d3288e08851"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "1bc8cc51-b892-4e75-9cbb-b2e18f32de9b"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "d7a5b043-a8f8-43d5-9d43-6000ed8485c3"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "5cb33524-0646-4295-9a15-72c6388bfb15"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "70b50484-c65b-4a9e-ac0d-cf84d0cf4dc6"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "9cf19ec8-95b7-46d9-96f7-dae7435fae55"
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
  return <SortableContainer dndKitId="eaa606f9-a6dc-49d5-94ff-8b816900f276" containerType="regular" prevTag="div" className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated Grid Background */}
      <SortableContainer dndKitId="d48213b3-8a39-4b7a-baec-27143ca98841" containerType="regular" prevTag="div" className="fixed inset-0 z-0" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#395c6610_1px,transparent_1px),linear-gradient(to_bottom,#395c6610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Floating Orbs */}
      <SortableContainer dndKitId="ed41e38e-74c8-456d-a903-fe600693e836" containerType="regular" prevTag="div" className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-[#395c66] to-[#4a6d78] rounded-full blur-[128px]" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-l from-[#b8973f] to-[#d4a84f] rounded-full blur-[128px]" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="15b1f40d-e1e1-4d10-bc65-44cf1cab7151" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/60 backdrop-blur-2xl border-b border-white/5" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="95a56ba7-5e16-401b-9f12-f454dc75c48c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="a387a6e0-3ad2-45a6-b1e6-1e87e09b9d29" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="7061affe-dab4-47c5-b1fa-65071d2c9087" containerType="regular" prevTag="motion.div" whileHover={{
            scale: 1.05
          }} className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="9cc160ea-c821-4dbf-b665-fd2fd3918e6c" containerType="regular" prevTag="div" className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#395c66] via-[#4a6d78] to-[#b8973f] p-[2px]" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="8a1bd80c-9141-42ed-b3c8-2dd7d702dea6" containerType="regular" prevTag="div" className="w-full h-full bg-[#0a0e1a] rounded-[10px] flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
                  <Sparkles className="w-5 h-5 text-[#b8973f]" />
                </SortableContainer>
              </SortableContainer>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#4a6d78] via-white to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
                ZENITH
              </span>
            </SortableContainer>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-1" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
              {['How We Work', 'Projects', 'Pricing', 'FAQs'].map((item, i) => <motion.a data-magicpath-motion-tag="motion.a" key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
                  {item}
                </motion.a>)}
            </div>

            {/* CTA Button */}
            <SortableContainer dndKitId="be439a54-e735-4c50-9cbc-13f519e30e84" containerType="regular" prevTag="motion.button" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white text-sm font-semibold overflow-hidden group" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4a6d78] to-[#b8973f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">Get Started</span>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="d4bb590f-e1fa-4c63-905c-c712aba15964" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="d4a14714-885e-4867-befb-b1bed88573a7" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4192f4b8-2495-456c-bb9f-8486e7eafd32" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="e5cf38bb-3537-4ec2-b2bc-3f243d23fb94" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
              <Shield className="w-4 h-4 text-[#b8973f]" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-sm font-medium bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
                Trusted by 100+ Startups Worldwide
              </span>
            </SortableContainer>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.9]" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in
              <br data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="relative inline-block" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
                  30–60 days
                </span>
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -inset-2 bg-gradient-to-r from-[#395c66]/20 via-[#4a6d78]/20 to-[#b8973f]/20 blur-2xl -z-10" animate={{
                opacity: [0.5, 0.8, 0.5]
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
            <SortableContainer dndKitId="c4e13fd7-ec28-4d93-81ed-6aad6c938573" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="a47fd273-1f4a-42c0-a548-4cc0fe8fc7a9" containerType="regular" prevTag="motion.button" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white font-semibold overflow-hidden" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4a6d78] to-[#b8973f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="relative flex items-center space-x-2" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx" />
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="b25c17d2-e756-4f35-aae1-6ca8391272f1" containerType="regular" prevTag="motion.button" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#b8973f]/50 text-white rounded-xl font-semibold transition-all duration-300" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="flex items-center space-x-2" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5 text-[#b8973f]" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
                </span>
              </SortableContainer>
            </SortableContainer>

            {/* Tech Stack */}
            <SortableContainer dndKitId="58177ba6-0a3e-49a1-809a-d088b8a93590" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8
          }} className="space-y-4" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">Built With</p>
              <SortableContainer dndKitId="39bcc3c5-e785-4024-ab66-6635ce4ef9d2" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
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
              }} className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:border-[#b8973f]/50 hover:bg-white/10 transition-all duration-300 cursor-default" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </motion.div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator */}
        <SortableContainer dndKitId="6052a2ea-12c8-4811-aa1b-4ffa10348de3" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-[#b8973f]" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail - Light Section */}
      <SortableContainer dndKitId="f1c9a086-ff49-4137-bd7b-90a369796321" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="8fa95c78-65ed-4b51-86a6-ca75d7d379e8" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="cffb3a82-f5da-4889-bf2d-f1065272b00f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-20" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="bg-gradient-to-r from-slate-900 via-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
                Most MVPs fail
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">Here's why—and how we fix it</p>
          </SortableContainer>

          <SortableContainer dndKitId="729a3224-a1cb-4874-b83b-f4251a8f95ba" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
                    <reason.icon className="w-7 h-7 text-white" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach - Dark Section */}
      <SortableContainer dndKitId="74e10db1-0693-43d3-bfbc-02cddbe50391" containerType="regular" prevTag="section" id="how-we-work" className="relative py-32 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#0f1119]" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="3c0d7c22-aad1-428e-a171-3a51edeb3c64" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="33beef7a-8914-46ae-b50b-1056af90bcfd" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
              How we build{' '}
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
                great products
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
              A practical, sprint-based workflow designed for speed and quality.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="e4599770-cfc3-4c53-8efa-619450df3dad" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#b8973f]/40 transition-all duration-500 overflow-hidden" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/10 via-transparent to-[#b8973f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }} className="w-16 h-16 bg-gradient-to-br from-[#395c66] to-[#4a6d78] rounded-2xl flex items-center justify-center shadow-xl shadow-[#395c66]/50 group-hover:shadow-[#b8973f]/50 transition-shadow duration-500" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-white" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx" />
                    </motion.div>
                    <span className="text-7xl font-bold bg-gradient-to-br from-white/5 to-white/0 bg-clip-text text-transparent" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Team - Light Section */}
      <SortableContainer dndKitId="bf5ce249-5b47-40b7-9e3e-4491b7217b76" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c052527a-4b34-4ec2-aef4-a144a39fdf06" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="df89284f-b917-4608-9099-b4760b990d16" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the{' '}
              <span className="bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
                team
              </span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
              Experts in turning ideas into successful products
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="1147372d-6a46-4cdf-95dc-14c4e5dd2802" containerType="collection" prevTag="div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative aspect-[3/4] mb-6 rounded-3xl overflow-hidden bg-slate-200" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#395c66]/90 via-[#395c66]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className="flex gap-3" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                    scale: 1.1
                  }} whileTap={{
                    scale: 0.9
                  }} className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
                        <Github className="w-5 h-5 text-white" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx" />
                      </motion.button>
                      <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                    scale: 1.1
                  }} whileTap={{
                    scale: 0.9
                  }} className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
                        <MessageSquare className="w-5 h-5 text-white" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                <p className="text-sm text-slate-600" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects - Dark Section */}
      <SortableContainer dndKitId="f92edcd6-c856-401d-9086-a2c34cdf400f" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-[#0f1119] to-[#0a0e1a]" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="a43933b4-9e6c-4298-9d43-b793edb7e045" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="69cfd293-cdff-4dfa-be4a-5a31e51b1334" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
              Recent work
            </h2>
            <p className="text-xl text-slate-400" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
              Products we've built for startups and businesses
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="40d21b5d-7ebd-436c-a355-cb7d6dbe5eb2" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#b8973f]/40 transition-all duration-500 cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/20 via-transparent to-[#b8973f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
                  <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                scale: 1.2,
                rotate: 10
              }} className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
                    {project.image}
                  </motion.div>
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1.5 bg-gradient-to-r from-[#395c66]/20 to-[#b8973f]/20 backdrop-blur-xl border border-[#b8973f]/30 rounded-full text-xs font-medium text-[#b8973f]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="e13a5001-1a9f-4d9c-968c-54f37c17ecac" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e32d68a4-9e6c-4220-9189-48cdb1af0b29" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3b0018f1-6db4-44c1-82ae-45fc33ce2cd9" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent{' '}
              <span className="bg-gradient-to-r from-[#b8973f] to-[#d4a84f] bg-clip-text text-transparent" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                pricing
              </span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
              Simple, predictable pricing with no hidden costs
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="2e675f96-7257-499b-868d-f2a01da4f377" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] border-2 border-slate-200 shadow-2xl overflow-hidden" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Gradient Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f]" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx" />

            <h3 className="text-3xl font-bold mb-12 text-center text-slate-900" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="0c6bfc7a-4081-4f6f-9887-2021392f0b49" containerType="regular" prevTag="div" className="space-y-10 mb-12" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size */}
              <SortableContainer dndKitId="5c8d3d99-1092-448b-b100-347a668cd774" containerType="regular" prevTag="div" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="f8ce987d-d939-4a68-a5cb-5c83ccd6da03" containerType="regular" prevTag="div" className="flex justify-between mb-6" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-lg font-semibold text-slate-700" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <motion.span data-magicpath-motion-tag="motion.span" key={teamSize} initial={{
                  scale: 1.2,
                  color: '#b8973f'
                }} animate={{
                  scale: 1,
                  color: '#395c66'
                }} className="text-3xl font-bold" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                    {teamSize}
                  </motion.span>
                </SortableContainer>
                <div className="grid grid-cols-5 gap-4" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <motion.button data-magicpath-motion-tag="motion.button" key={size} onClick={() => setTeamSize(size)} whileHover={{
                  scale: 1.05,
                  y: -2
                }} whileTap={{
                  scale: 0.95
                }} className={`py-5 rounded-2xl font-bold text-2xl transition-all duration-300 ${teamSize === size ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-xl shadow-[#395c66]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </motion.button>)}
                </div>
              </SortableContainer>

              {/* Sprints */}
              <SortableContainer dndKitId="15aea31e-4096-4984-8d65-365b6b9cfd93" containerType="regular" prevTag="div" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-lg font-semibold text-slate-700 mb-6 block" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="89b37911-cd7b-4172-9910-c057d2318973" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "40bd2fa9-5086-4839-9a01-6303a7df683d"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "4bc4cfa4-6bb3-418c-891a-768f10532cbb"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "e8875fa1-5dc0-4590-a1ea-d8c569d88376"
                }].map(option => <motion.button data-magicpath-motion-tag="motion.button" key={option.value} onClick={() => setSprints(option.value)} whileHover={{
                  scale: 1.05,
                  y: -2
                }} whileTap={{
                  scale: 0.95
                }} className={`py-6 px-4 rounded-2xl font-semibold transition-all duration-300 ${sprints === option.value ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-xl shadow-[#395c66]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-lg mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-white/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
                        {option.desc}
                      </div>
                    </motion.button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="3c46f172-b3b2-4c83-907b-11efbe4a16e4" containerType="regular" prevTag="motion.div" key={calculatePrice()} initial={{
            scale: 0.95,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} className="relative text-center p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mb-8 border border-slate-200 overflow-hidden" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b8973f]/10 via-transparent to-[#395c66]/10 animate-pulse" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx" />
              <p className="relative text-sm text-slate-600 uppercase tracking-wider mb-3" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
              <p className="relative text-6xl font-bold bg-gradient-to-r from-[#b8973f] to-[#d4a84f] bg-clip-text text-transparent mb-6" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                ₱{calculatePrice()}
              </p>
              <SortableContainer dndKitId="bd111d74-0ec7-49e4-a896-366cda35e79f" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-6 text-sm text-slate-600" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="f943ae82-3567-4ace-966a-838f30ae9511" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-5 h-5 text-[#395c66]" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="font-medium" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="76a13b6d-324f-452e-b178-781cf4b5ddbc" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-5 h-5 text-[#395c66]" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="font-medium" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                </SortableContainer>
              </SortableContainer>
              <p className="relative text-xs text-slate-500 mt-5" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint</p>
            </SortableContainer>

            {/* Features */}
            <div className="space-y-4 mb-10" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map((feature, i) => <SortableContainer dndKitId="4a6928cc-38d9-45e4-ae36-fb5e4a5ed378" containerType="regular" prevTag="motion.div" key={feature} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="flex items-start space-x-3" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
                  <CheckCircle2 className="w-6 h-6 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx" />
                  <p className="text-slate-700" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                </SortableContainer>)}
            </div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="a67c3a64-93b5-4dbd-bab7-00bf87197656" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="flex-1 px-8 py-5 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#b8973f] text-white rounded-2xl font-semibold transition-all duration-500 shadow-xl shadow-[#395c66]/30" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </motion.button>
              <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="flex-1 px-8 py-5 border-2 border-[#395c66] hover:bg-[#395c66]/10 text-slate-900 rounded-2xl font-semibold transition-all duration-300" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </motion.button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs - Dark Section */}
      <SortableContainer dndKitId="5806db53-7bbf-47ab-bbe2-bca651842b87" containerType="regular" prevTag="section" id="faqs" className="relative py-32 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#0f1119]" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="0d730a01-d0d4-448f-9c22-bef681a7f275" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="8378a02e-f78a-4a99-80b4-77b0ca95fba3" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently asked questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="7c78d1df-ff16-4881-82dc-79d0e2fc15f4" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#b8973f]/30 transition-all duration-300" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                <motion.button data-magicpath-motion-tag="motion.button" onClick={() => toggleFaq(index)} whileHover={{
              backgroundColor: 'rgba(255,255,255,0.05)'
            }} className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  <motion.div data-magicpath-motion-tag="motion.div" animate={{
                rotate: openFaq === index ? 180 : 0
              }} transition={{
                duration: 0.3
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
                    {openFaq === index ? <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#b8973f]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-6 h-6 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx" />}
                  </motion.div>
                </motion.button>

                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-slate-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA - Light Section */}
      <SortableContainer dndKitId="839ed208-12e8-4bad-998c-9f4cd15b10c9" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="88b4f5cb-4c78-4b76-89c8-d8aff15b4b91" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="2b6a8b3a-8ef4-4148-9b1c-2c96fe6215a5" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative text-center p-16 md:p-20 bg-gradient-to-br from-[#395c66] via-[#4a6d78] to-[#395c66] rounded-[3rem] shadow-2xl overflow-hidden" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="8d8179d1-a88c-4fc6-b1df-b1d5778ade71" containerType="regular" prevTag="div" className="absolute inset-0" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }} transition={{
              duration: 8,
              repeat: Infinity
            }} className="absolute top-0 left-0 w-96 h-96 bg-[#b8973f]/30 rounded-full blur-3xl" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }} transition={{
              duration: 10,
              repeat: Infinity,
              delay: 1
            }} className="absolute bottom-0 right-0 w-96 h-96 bg-[#4a6d78]/30 rounded-full blur-3xl" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="8f808742-12c1-4c5d-816c-aeee819dd273" containerType="regular" prevTag="div" className="relative" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="5d3a80cb-dbf4-4d8b-8581-44691e3d4a8c" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-5 h-5 text-white" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-white" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to launch your MVP?
              </h2>

              <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product.
              </p>

              <SortableContainer dndKitId="09532c91-611b-41c7-9f2e-1c434b5e5409" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-5" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="e0aa62cb-eea8-42e3-8a14-233c9aa17bc0" containerType="regular" prevTag="motion.button" whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.98
              }} className="px-10 py-5 bg-white hover:bg-slate-50 text-[#395c66] rounded-2xl font-bold text-lg transition-all shadow-2xl" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="flex items-center space-x-2" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">
                    <Calendar className="w-6 h-6" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
                  </span>
                </SortableContainer>
                <motion.button data-magicpath-motion-tag="motion.button" whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.98
              }} className="px-10 py-5 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all backdrop-blur-xl" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </motion.button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Dark */}
      <SortableContainer dndKitId="c7a1fedc-9f3a-4cb2-8521-6ee4f5d8d4a7" containerType="regular" prevTag="footer" className="relative py-20 px-6 bg-[#0a0e1a] border-t border-white/5" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="2ceaaa83-78c8-482c-a125-64bd7aa8be62" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c1409629-92f6-4369-b19e-2fb5dab40661" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-16" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="2068dc9a-53b3-4d80-9330-30e42e3f30af" containerType="regular" prevTag="div" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="2be7dc85-7e5c-4eba-a6d0-a4f2d7f9f2bf" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="e017ca33-12cb-4cde-bb19-f8a8ce6992af" containerType="regular" prevTag="div" className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#395c66] via-[#4a6d78] to-[#b8973f] p-[2px]" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="35bc83eb-eaef-409c-b7a0-224ca8151b12" containerType="regular" prevTag="div" className="w-full h-full bg-[#0a0e1a] rounded-[10px] flex items-center justify-center" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
                    <Sparkles className="w-6 h-6 text-[#b8973f]" />
                  </SortableContainer>
                </SortableContainer>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#395c66] via-white to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
                  ZENITH
                </span>
              </SortableContainer>
              <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
                Building MVPs that matter since 2015
              </p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "dcb0216d-3d4f-4525-b91c-f04d1d06a742"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "24312019-70bf-4314-8bdc-33150f760e19"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "f71cce89-41e7-463e-aea7-94f2f8243b48"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-5 text-white text-lg" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-3" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
                      <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
                  x: 5
                }} className="text-sm text-slate-400 hover:text-[#b8973f] transition-all inline-block" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </motion.a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="fc388ba5-37ae-40e6-8d42-0e5689007d33" containerType="regular" prevTag="div" className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4" data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
              © 2024 Zenith Technologies. All rights reserved.
            </p>
            <SortableContainer dndKitId="b3c2e942-0b0f-4ac0-b936-e278c3dbbaa0" containerType="regular" prevTag="div" className="flex space-x-8" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05
            }} className="text-sm text-slate-400 hover:text-[#b8973f] transition-colors" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="#" whileHover={{
              scale: 1.05
            }} className="text-sm text-slate-400 hover:text-[#b8973f] transition-colors" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};