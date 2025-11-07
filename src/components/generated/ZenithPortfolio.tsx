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
  mpid: "7f663b2a-0975-4803-a4a7-63b109c4253e"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "f7d03d34-ab31-44a4-9ea1-6831a194b580"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "7d100b29-23b0-437d-b53a-e2a4bc9e7ba5"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "2a54c9c7-7dcc-4911-8a8b-bdd9add9fec4"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "c6390a51-f932-4ad0-b24b-6a4d389edf30"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "4ce13d35-3aa6-4b54-a4ba-ba9f044ff620"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "e476f9b4-4851-43f2-b419-abe1ef87a6ca"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "08c4c5e7-deed-43eb-b927-9f38acff0e52"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "1c60c995-8de5-4654-b37d-2bff5b380a30"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "a4a759a3-4ada-458b-9f45-6bd1aa1cfeb0"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "309f1ab3-1f73-45fb-9df7-1c45833060fa"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "5abe5a10-d87e-465c-bb7e-d5bb0084add3"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "a0cf1dce-05e6-4110-8d65-77fcdfc3c0e5"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "c4f10a21-9e95-4251-b1aa-65ab5594c9df"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "fdf71d95-2965-48a2-bbf6-4313fde8b846"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "c34ace50-d15e-4b59-8828-2acd88321dd1"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "2f89ebd6-933c-430b-bdeb-16a0f0324ee5"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "fb4b0075-4015-4b1f-b054-4d8034aa1b23"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "4a4cb9cf-4124-4d40-a567-31069e090905"
}] as any[];
export const ZenithPortfolio = (props: ZenithPortfolioProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [teamSize, setTeamSize] = useState(2);
  const [sprints, setSprints] = useState(2);
  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const calculatePrice = () => {
    const ratePerDevPerSprint = 120000;
    const total = teamSize * sprints * ratePerDevPerSprint;
    return total.toLocaleString();
  };
  const getDuration = () => sprints * 2;
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="178468b2-95f7-484c-be42-3246ce9b683d" containerType="regular" prevTag="div" className="min-h-screen bg-[#1a1d2e] text-white" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated Grid Background */}
      <SortableContainer dndKitId="b7280e2e-529a-4205-a429-bb7736b9f226" containerType="regular" prevTag="div" className="fixed inset-0 z-0 opacity-20" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(57, 92, 102, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 92, 102, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="5f732c2e-6092-4b20-a16c-8dd358120187" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#1a1d2e]/90 backdrop-blur-xl border-b border-[#395c66]/20" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b4719613-979d-4878-af6f-ae9106c146a3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e3956ba2-6ede-490b-a6a1-2096c73395f4" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="01942ccf-be70-4549-a95b-25cb87e52cb2" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="9a691c37-ec2a-4fd7-bf4a-8be51fda0de7" containerType="regular" prevTag="div" className="relative w-10 h-10 bg-gradient-to-br from-[#395c66] via-[#4a6d78] to-[#b8973f] rounded-lg flex items-center justify-center shadow-lg shadow-[#395c66]/50" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-[2px] bg-[#1a1d2e] rounded-lg" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="relative text-[#b8973f] font-bold text-xl" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">Z</span>
              </SortableContainer>
              <span className="text-xl font-bold tracking-tight" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </span>
            </SortableContainer>

            {/* Nav Links */}
            <SortableContainer dndKitId="704bf4f5-6157-4684-a352-117e86a56883" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#approach" className="text-sm font-medium text-slate-300 hover:text-[#b8973f] transition-colors" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">How We Work</a>
              <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-[#b8973f] transition-colors" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">Projects</a>
              <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-[#b8973f] transition-colors" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-[#b8973f] transition-colors" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">FAQs</a>
            </SortableContainer>

            {/* CTA Button */}
            <button className="px-5 py-2.5 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-[#395c66]/50 hover:shadow-[#395c66]/70" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
              Get Started
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section - Dark */}
      <SortableContainer dndKitId="b88aec0f-00e7-4b67-9297-94e5ff2e16c4" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#395c66]/30 to-transparent rounded-full blur-3xl" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#b8973f]/20 to-transparent rounded-full blur-3xl" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx" />

        <SortableContainer dndKitId="94826fd1-e494-4dcd-b921-cfebdf5da07b" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity
      }} className="relative z-10 max-w-6xl mx-auto text-center" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c95c49eb-8927-4fcd-a8e6-19826b8758e4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Badge */}
            <SortableContainer dndKitId="f2f6a3cd-31dd-4449-8665-8114e6d17115" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#395c66]/20 to-[#b8973f]/20 border border-[#395c66]/30 rounded-full mb-8 backdrop-blur-sm" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
              <Shield className="w-4 h-4 text-[#b8973f]" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-sm font-medium bg-gradient-to-r from-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in
              <br data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">30–60 days</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch. Fast, affordable, and built to scale.
            </p>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="ab00fb70-9624-4987-88f4-be8abbfce72b" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="9a447445-b9d4-4ae9-a0cc-e53ca217de04" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#b8973f] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#395c66]/50 hover:shadow-[#b8973f]/50 flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="c8a099f5-16c3-43a9-8736-e6d85626caf8" containerType="regular" prevTag="button" className="px-8 py-4 bg-white/5 border-2 border-[#395c66]/30 hover:border-[#b8973f]/50 backdrop-blur-sm text-white rounded-lg font-semibold transition-all flex items-center space-x-2" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5 text-[#b8973f]" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
              </SortableContainer>
            </SortableContainer>

            {/* Tech Stack */}
            <SortableContainer dndKitId="34c8b9de-7936-4476-895f-8e5aae50bd46" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">Built With</p>
              <SortableContainer dndKitId="42a80c18-e634-4d41-872d-c134dd53fde6" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
                {techStack.map(tech => <div key={tech} className="px-4 py-2 bg-white/5 border border-[#395c66]/20 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-300 hover:border-[#b8973f]/50 hover:bg-[#395c66]/10 transition-all" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator */}
        <SortableContainer dndKitId="4995add8-3614-4f98-aa99-acb410952c8d" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-[#b8973f]" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail - Light */}
      <SortableContainer dndKitId="bf0d015c-c45b-40d8-917c-ec7b27c9b62b" containerType="regular" prevTag="section" className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="5c5bb4f1-f12f-441a-9a37-1f776e1318ed" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e8365774-1fb9-49b1-a193-71466354af12" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2d2d2d] to-[#395c66] bg-clip-text text-transparent" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
              Most MVPs fail
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">Here's why—and how we fix it</p>
          </SortableContainer>

          <SortableContainer dndKitId="200de0c0-7d12-41f1-bdca-407bae607774" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
            {failureReasons.map((reason, index) => <motion.div data-magicpath-motion-tag="motion.div" key={reason.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group relative p-6 bg-white border border-slate-200 rounded-xl hover:border-[#395c66]/30 hover:shadow-xl hover:shadow-[#395c66]/5 transition-all overflow-hidden" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center mb-4" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
                    <reason.icon className="w-6 h-6 text-red-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach - Dark */}
      <SortableContainer dndKitId="ab0b2c53-050f-4953-8dc2-937a84156c83" containerType="regular" prevTag="section" id="approach" className="relative py-24 px-6 bg-gradient-to-b from-[#1a1d2e] to-[#0f1119] overflow-hidden" data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-[#395c66]/10 via-transparent to-transparent blur-3xl" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx" />

        <SortableContainer dndKitId="d91a3c72-5c46-4582-afbc-589659df7eff" containerType="regular" prevTag="div" className="relative max-w-6xl mx-auto" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3b9a12cf-1395-4bb6-951f-2292eb058b80" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
              How we build{' '}
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
                great products
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
              A practical, sprint-based workflow designed for speed and quality.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="5f954542-ce06-472c-99b6-e489ac7eaded" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-6" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
            {approachSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-[#395c66]/20 hover:border-[#b8973f]/40 backdrop-blur-sm transition-all overflow-hidden" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/10 via-transparent to-[#b8973f]/5 opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#395c66] to-[#4a6d78] rounded-xl flex items-center justify-center shadow-lg shadow-[#395c66]/50" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-7 h-7 text-white" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                    <span className="text-5xl font-bold bg-gradient-to-br from-white/10 to-white/5 bg-clip-text text-transparent group-hover:from-[#395c66]/20 group-hover:to-[#b8973f]/10 transition-all" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Team - Light */}
      <SortableContainer dndKitId="0cbeb468-e435-4249-a626-5028ab920fbb" containerType="regular" prevTag="section" id="team" className="relative py-24 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9d71aa55-38e0-4b0a-83f4-5436782ef43c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="6bfcb629-b1e3-44ca-aa2c-e4820cacce4d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the{' '}
              <span className="bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
                team
              </span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
              Experts in turning ideas into successful products
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="03cecc50-7bb8-428a-a7c6-e6239ab0f4de" containerType="collection" prevTag="div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
            {teamMembers.map((member, index) => <motion.div data-magicpath-motion-tag="motion.div" key={member.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative aspect-[3/4] mb-4 rounded-2xl overflow-hidden bg-slate-200 border-2 border-transparent group-hover:border-[#395c66]/30 transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#395c66]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-slate-900" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                <p className="text-sm text-slate-600" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects - Dark */}
      <SortableContainer dndKitId="c17ba4b9-4437-4e84-90e6-eb94eca108fd" containerType="regular" prevTag="section" id="projects" className="relative py-24 px-6 bg-gradient-to-b from-[#0f1119] to-[#1a1d2e] overflow-hidden" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Decorative Elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-l from-[#b8973f]/10 to-transparent rounded-full blur-3xl" data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx" />

        <SortableContainer dndKitId="029e2585-3f36-4f76-91d7-b85092236c30" containerType="regular" prevTag="div" className="relative max-w-6xl mx-auto" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="edc8961f-1eee-4e50-872b-f96951dcd2e5" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
              Recent work
            </h2>
            <p className="text-xl text-slate-400" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
              Products we've built for startups and businesses
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="8a49d732-1bd3-462a-bd0e-2c334661d37e" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-6" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
            {recentProjects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={project.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#395c66]/20 hover:border-[#b8973f]/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#395c66]/20 transition-all" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/10 via-transparent to-[#b8973f]/5 opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-6xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-gradient-to-r from-[#395c66]/20 to-[#b8973f]/20 border border-[#395c66]/30 rounded-full text-xs font-medium text-[#b8973f]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing - Light */}
      <SortableContainer dndKitId="6de46383-324d-484d-8141-10684cd762dc" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="32210732-6fbf-431a-a9de-c80c0a21112c" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="70a58a71-2262-4888-b173-256480e7ac94" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent{' '}
              <span className="bg-gradient-to-r from-[#b8973f] to-[#d4a84f] bg-clip-text text-transparent" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
                pricing
              </span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
              Simple, predictable pricing with no hidden costs
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="4af24284-3402-4eb3-b29b-f7056fff74f9" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative p-10 bg-white border-2 border-[#395c66]/20 rounded-3xl shadow-2xl shadow-[#395c66]/10 overflow-hidden" data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f]" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx" />

            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="34a9197e-2a6f-423d-a9fa-c28428040843" containerType="regular" prevTag="div" className="space-y-8 mb-10" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size */}
              <SortableContainer dndKitId="9d0922d9-92fe-4f90-8570-5e1fdf31ba4f" containerType="regular" prevTag="div" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="36cbd957-8fd3-4ee2-83e1-c39f8d955f27" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="font-semibold text-slate-700" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
                    {teamSize}
                  </span>
                </SortableContainer>
                <div className="grid grid-cols-5 gap-3" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>
              </SortableContainer>

              {/* Sprints */}
              <SortableContainer dndKitId="33449789-2b00-4e59-859c-b35b3fa720e6" containerType="regular" prevTag="div" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="font-semibold text-slate-700 mb-4 block" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="eba08207-4162-427d-8e7f-2e301a495e39" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "e7e96298-5f65-4a8c-9207-478895066baf"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "571ee1df-049d-49bb-aeb1-b9c619a759ff"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "16744506-e3bd-4848-a7ea-9c8f5a6c204d"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 px-4 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-white/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                        {option.desc}
                      </div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="ec42f1f1-8229-42ea-aa2e-c3bd68729d4b" containerType="regular" prevTag="div" className="relative text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl mb-6 border border-[#395c66]/10 overflow-hidden" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#b8973f]/10 to-transparent rounded-full blur-2xl" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx" />
              <p className="relative text-sm text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
              <p className="relative text-5xl font-bold bg-gradient-to-r from-[#b8973f] to-[#d4a84f] bg-clip-text text-transparent mb-4" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                ₱{calculatePrice()}
              </p>
              <SortableContainer dndKitId="99cffa6c-8f03-43f4-8ec2-ce4c67d3c6ea" containerType="regular" prevTag="div" className="relative flex items-center justify-center gap-4 text-sm text-slate-600" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="5110c4af-c76a-4d1a-9818-7a970bc82bc7" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-[#395c66]" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="7d85645a-23c8-4695-86ce-1eec1819e653" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-[#395c66]" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                </SortableContainer>
              </SortableContainer>
              <p className="relative text-xs text-slate-500 mt-4" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint</p>
            </SortableContainer>

            {/* Features */}
            <div className="space-y-3 mb-8" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map(feature => <SortableContainer dndKitId="1fe1365a-de27-472e-bfd1-9945dd873966" containerType="regular" prevTag="div" key={feature} className="flex items-start space-x-3" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                  <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx" />
                  <p className="text-sm text-slate-700" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                </SortableContainer>)}
            </div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="56cb2080-781d-49c2-bce0-656c3b01cddc" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#395c66]/20" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border-2 border-[#395c66] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-semibold transition-all" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs - Dark */}
      <SortableContainer dndKitId="ef7921af-05b3-4ada-b930-673ed0297d16" containerType="regular" prevTag="section" id="faq" className="relative py-24 px-6 bg-gradient-to-b from-[#1a1d2e] to-[#0f1119]" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="09e68005-4d3d-44ec-be04-c9fe80dd68b4" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4862bb7c-9d56-4e08-9b48-661b10b7bad3" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently asked questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="fffcddea-6c67-4b49-af62-9eb9effb6d29" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
            {faqs.map((faq, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }} className="bg-white/5 border border-[#395c66]/20 rounded-xl overflow-hidden hover:border-[#b8973f]/30 backdrop-blur-sm transition-all" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#b8973f]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>

                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-6 pb-5 text-slate-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA - Light */}
      <SortableContainer dndKitId="7bf1d9c0-6a5d-4784-8cb9-fc01d5859413" containerType="regular" prevTag="section" className="relative py-24 px-6 bg-gradient-to-b from-white to-slate-50" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="2ae9dc74-e624-4a80-82b3-43e9681a1f36" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="eec5b5e3-073a-4259-9159-1e5c6736cf89" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative text-center p-16 bg-gradient-to-br from-[#395c66] via-[#4a6d78] to-[#395c66] rounded-3xl shadow-2xl overflow-hidden" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Animated Background */}
            <SortableContainer dndKitId="d4f89652-110a-4752-8646-0fc2521247d4" containerType="regular" prevTag="div" className="absolute inset-0 opacity-30" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#b8973f]/20 rounded-full blur-3xl" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4a6d78]/20 rounded-full blur-3xl" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>

            <SortableContainer dndKitId="3cd2ec4f-94ed-4a12-a4f9-b03d69dc1e34" containerType="regular" prevTag="div" className="relative" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="42b1c93a-b4f7-4e06-8f5d-0a533ec58451" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4 text-white" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-white" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to launch your MVP?
              </h2>

              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
                Let's turn your idea into a real, testable product.
              </p>

              <SortableContainer dndKitId="229686c4-8397-477c-9e30-8d9ed371ee4c" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="382e60c8-ae9a-4410-a3c4-c2907712af07" containerType="regular" prevTag="button" className="px-8 py-4 bg-white hover:bg-slate-50 text-[#395c66] rounded-lg font-semibold transition-all shadow-lg flex items-center space-x-2" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-lg font-semibold transition-all backdrop-blur-sm" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Dark */}
      <SortableContainer dndKitId="62c96873-3a69-4c97-94a0-8e91b51d130e" containerType="regular" prevTag="footer" className="relative py-16 px-6 bg-[#0f1119] border-t border-[#395c66]/20" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="5a94af63-c534-4c00-b7b0-09c2b2b714b4" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="dfec0c3a-47a2-40b0-a1ab-36e8f79086b8" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="06b38a83-6afe-4cb7-a836-1756925c73c9" containerType="regular" prevTag="div" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="873f5030-30f8-46cc-a3ad-8358c10612cf" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-4" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="15576083-2048-4528-a138-279c5955aec5" containerType="regular" prevTag="div" className="relative w-10 h-10 bg-gradient-to-br from-[#395c66] via-[#4a6d78] to-[#b8973f] rounded-lg flex items-center justify-center shadow-lg shadow-[#395c66]/50" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="absolute inset-[2px] bg-[#0f1119] rounded-lg" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span className="relative text-[#b8973f] font-bold text-xl" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">Z</span>
                </SortableContainer>
                <span className="text-xl font-bold bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
                  ZENITH
                </span>
              </SortableContainer>
              <p className="text-sm text-slate-400" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                Building MVPs that matter since 2015
              </p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "2a18cc3f-5d3b-4392-89e1-f329ba89e55d"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "776f1969-fc5f-4fbe-a7b8-bc1d68dc91db"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "61af6187-c65c-4fd2-abd4-66efb1610b63"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-4 text-white" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-slate-400 hover:text-[#b8973f] transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="b6b2a316-4470-40ff-a319-12073afbe19d" containerType="regular" prevTag="div" className="pt-8 border-t border-[#395c66]/20 flex flex-col md:flex-row justify-between items-center gap-4" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
              © 2024 Zenith Technologies. All rights reserved.
            </p>
            <SortableContainer dndKitId="910580c3-33be-41b3-93f1-cbfe29e51356" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-slate-400 hover:text-[#b8973f] transition-colors" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-[#b8973f] transition-colors" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};