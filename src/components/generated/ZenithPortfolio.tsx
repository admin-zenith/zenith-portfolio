"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ArrowRight, CheckCircle2, Code2, Palette, Zap, BarChart3, Users, Clock, DollarSign, Calendar, MessageSquare, Github, Figma, ChevronDown, ChevronUp, Target, TrendingUp, XCircle, AlertCircle, RefreshCw, Sparkles, Quote } from 'lucide-react';
type ZenithPortfolioProps = Record<string, never>;

// Tech Stack Logos
const techStack = ['Laravel', 'React', 'Next.js', 'Node.js', 'Tailwind', 'MySQL', 'AWS', 'GitHub', 'Figma', 'TypeScript'];

// Why MVPs Fail Data
const failureReasons = [{
  icon: Target,
  title: 'No clear product direction',
  description: 'Teams build features instead of solving problems.',
  mpid: "3c604a90-c14f-4657-bd4a-9b7d532fbecf"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "9ff27418-c2a9-4d3d-b28a-1c94d5760a7b"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "cc33c587-90d3-4740-af66-d2d386674ddd"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "465440dd-3f2a-48b6-b3ec-585d3aae511f"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-blue-500 to-blue-600',
  mpid: "bbab3b52-069f-4e77-bea0-b5231f31ba38"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-purple-500 to-purple-600',
  mpid: "e9ff6ecc-9417-44eb-8c43-927dadad863f"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-emerald-500 to-emerald-600',
  mpid: "084ba200-df8d-44cb-a9cb-5141c781e680"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-amber-500 to-amber-600',
  mpid: "50d7b3c1-fc73-4e47-b2cc-6264161daf34"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  initials: 'GZ',
  gradient: 'from-amber-500 to-orange-600',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "94815866-88d9-430c-840f-ab013206682d"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  initials: 'AC',
  gradient: 'from-blue-500 to-cyan-600',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "f99cdfab-3c1c-4216-9fff-7c15c9c7866e"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  initials: 'SM',
  gradient: 'from-purple-500 to-pink-600',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "7e1fa326-8169-4059-a514-af2dd0464a78"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  initials: 'MK',
  gradient: 'from-emerald-500 to-teal-600',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "85e9f1d7-26b2-4e09-b657-fe91906874ee"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  initials: 'ET',
  gradient: 'from-rose-500 to-red-600',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  mpid: "59dd879d-f327-4bb0-b339-ce9047d05bb9"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-blue-500 to-cyan-500',
  mpid: "3e250da6-9cdd-4f22-b2da-9fb17d2e462c"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-purple-500 to-pink-500',
  mpid: "b9e70383-1b0d-483f-8561-f429a4742c3e"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-emerald-500 to-teal-500',
  mpid: "ca5892ee-3317-4e0d-a8bb-95ebb52d613e"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "2d3a1c9c-c386-4261-b14a-6f78fd2b3c2e"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "42bd0d1b-2505-46ba-9497-c76ecf65c619"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "cfedb9f5-1174-45b4-89d8-a18d4884314d"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "99a7999a-6305-42ff-a668-f534ab89e60a"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "c33f2512-0df8-4aaa-96f3-199ef7d743de"
}] as any[];
export const ZenithPortfolio = (props: ZenithPortfolioProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [teamSize, setTeamSize] = useState(2);
  const [sprints, setSprints] = useState(2); // 1, 2, or 4 sprints

  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Pricing Calculator
  const calculatePrice = () => {
    const ratePerDevPerSprint = 120000; // ₱120,000
    const total = teamSize * sprints * ratePerDevPerSprint;
    return total.toLocaleString();
  };
  const getDuration = () => {
    return sprints * 2; // Each sprint is 2 weeks
  };
  const getRoleLabels = () => {
    const baseTeam = ['Project Manager', 'UI/UX Designer', 'QA Engineer'];
    const developers = Array(teamSize).fill('Full Stack Developer');
    return [...baseTeam, ...developers];
  };
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="a822edb7-29cd-4c39-8839-8cf33a0c2282" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects */}
      <SortableContainer dndKitId="29c7912f-10aa-4938-878e-60fc519a9799" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="3603f749-bced-4fed-bb11-a3f6a9be1057" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e23f8feb-b7eb-491f-8005-864259b3fe7d" containerType="regular" prevTag="div" className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/20" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="99d38877-8b2e-4499-bef1-ec24cf7cdfe2" containerType="regular" prevTag="div" className="px-8 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="6076f4e3-55f7-4292-8dfd-9d88a73ae0a6" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="c03deb02-b9d6-464c-85ca-631460ef3def" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="1396cabf-344b-45b2-811a-4cc09c2934b4" containerType="regular" prevTag="div" className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 p-[2px]" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="fb90d116-cdf5-4119-819d-9536b7141054" containerType="regular" prevTag="div" className="w-full h-full rounded-full bg-black flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
                    <Rocket className="w-4 h-4 text-amber-400" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <span className="text-lg font-bold tracking-tight" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="987a7b30-320e-4a1e-ae2d-483ae8eb4cc6" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-6" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
                <a href="#approach" className="text-sm text-gray-300 hover:text-white transition-colors" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">How We Work</a>
                <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">Projects</a>
                <a href="#team" className="text-sm text-gray-300 hover:text-white transition-colors" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">Team</a>
                <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">Pricing</a>
                <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">FAQs</a>
              </SortableContainer>

              <button className="px-5 py-2 bg-white text-black hover:bg-gray-100 rounded-full text-sm font-semibold transition-all hover:scale-105" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Free Consultation
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="49bc533b-c393-4815-bad4-2d13be25986f" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e7395929-8c08-408a-a7d4-66796323e205" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="ae88649a-6cec-4a97-b4b0-885c72e28b3a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="d5fccde1-ec56-4fdd-aed5-591486a6dac9" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in<br data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
                30–60 days
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch — fast, affordable, and built for scale. Zenith Technologies helps startups 
              and businesses bring their software ideas to life with agile development and transparent pricing.
            </p>

            <SortableContainer dndKitId="8a4c75b6-7240-4ddd-a8ea-f1da99659eb8" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="19aca7aa-c758-4f31-a6f7-c0f0182b0002" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="a07c30b5-9d8a-4a36-b21d-dade0f2bbd96" containerType="regular" prevTag="button" className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg font-bold transition-all flex items-center space-x-2" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Powered By Tech Stack - Integrated into Hero */}
          <SortableContainer dndKitId="a7999e7e-099f-4c4a-aeae-8792a2f309a1" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="pt-16 space-y-6" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500 uppercase tracking-wider" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
            
            {/* Tech Stack Carousel */}
            <SortableContainer dndKitId="6074bc67-5ecd-4265-bab6-cb55868258a4" containerType="regular" prevTag="div" className="relative overflow-hidden max-w-4xl mx-auto" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex space-x-6 animate-scroll" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
                {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="872700b5-80c9-4b1a-a1c6-b58ea658f07a" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-5 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400/40 transition-colors" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-sm font-semibold text-gray-300 whitespace-nowrap" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator - Now at the bottom of hero section */}
          <SortableContainer dndKitId="2c33df39-0f12-4866-a893-c56a107f939a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="pt-12" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="03932490-c69a-4617-93eb-4f7ce3469f9e" containerType="regular" prevTag="motion.div" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="flex flex-col items-center gap-2" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-xs text-gray-500 uppercase tracking-wider" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">Scroll to explore</span>
              <SortableContainer dndKitId="6edaa0df-51fd-4b53-922a-7a5cf7d7a6c2" containerType="regular" prevTag="div" className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-colors" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
                <ChevronDown className="w-8 h-8 text-blue-400" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Most MVPs Fail */}
      <SortableContainer dndKitId="d6630aaa-9631-4cf6-ad38-b504b3da7cf3" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="965567cf-98e2-4dbe-a84b-849cfe7f1bf6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="da1e85c4-1958-40fe-a66d-5f3d885592b6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
              Most MVPs never make it<br data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-gray-600" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">past launch — here's why</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="f61215c9-3953-44cd-b022-4eb32d898044" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl hover:border-red-400/40 transition-all" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
                  <reason.icon className="w-7 h-7 text-red-400" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-300" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach */}
      <SortableContainer dndKitId="ed09bc3b-92be-4141-98ee-81d0d6c24bd1" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9a59d763-6a74-4f68-af59-5f108829b72c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="29d7c386-7aae-4b6e-a0c6-b935a3ac0019" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
              Our approach turns ideas into<br data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
                real, testable products — fast
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
              We follow a practical, sprint-based workflow designed for clarity, speed, and adaptability.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="0a0bf909-d108-45ef-bf6c-fd562411c20e" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl transition-all group" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                    <span className="text-6xl font-black text-white/5" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="468dfccc-fea9-4c8b-931e-e02b13fae10c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="c80d64af-5821-46fd-9e71-03080c8d8f8c" containerType="regular" prevTag="button" className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 rounded-lg font-semibold transition-all inline-flex items-center space-x-2" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="cc71a98d-dd6b-4879-b15a-0ec56cb3b8de" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c0c2f00f-84ae-4ec8-9320-03d765fec40c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5e3efd2e-517e-499b-8350-78f1a14efd93" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">
              The <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span> Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
              A small but focused team of developers, designers, and project managers — 
              united by one goal: building products that matter.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="16cca387-5623-4bcf-8bd0-e8d9ad789cd9" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
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
            y: -8,
            scale: 1.02
          }} className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
                  {/* Professional Face Image */}
                  <div className="mb-6" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} p-[2px] shadow-lg group-hover:shadow-2xl transition-all duration-300`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
                      <img src={member.image} alt={member.name} className="w-full h-full rounded-2xl object-cover" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="space-y-3" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
                    <div data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="bio:unknown" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Social Links - optional enhancement */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
                    <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
                      <Github className="w-4 h-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
                      <MessageSquare className="w-4 h-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Recent Work */}
      <SortableContainer dndKitId="544ad033-1e7e-4ae5-bf89-560d3b2bd8f8" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="df36a355-0b68-4c6e-b460-1df56eb47150" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="7d796f1d-2ea6-4329-89c7-a725103eaedd" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
              Recent <span className="text-gray-600" data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
              A glimpse of what we've built for startups and growing businesses.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="41804c6a-4587-4827-9eb8-0a19e3e52b12" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
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
            scale: 1.05
          }} className="group relative aspect-square rounded-2xl overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-xs font-medium" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing Section */}
      <SortableContainer dndKitId="6029819d-8a12-462e-9742-0ad75d263671" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9eb75a52-12e8-43c8-8f91-37f816b4299d" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c78645cd-8167-45f6-9e9c-1a7cd35946da" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
              Fair. Transparent.<br data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                Predictable.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
              Get instant pricing estimates — no hidden costs, just clear numbers.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="f4693fee-37ba-4b04-bccc-8e3e76d3fac1" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="774251e7-f565-4eef-aac6-f37afc005e58" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="86ebc472-1b97-481f-aaad-ea8e0ce5787d" containerType="regular" prevTag="div" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="b15dd4a4-4e83-4eda-86ef-13c824bae5e1" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-gray-300 font-medium" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-blue-400" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 scale-110' : 'bg-white/5 border border-white/10 hover:border-white/20 hover:scale-105'}`} data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="85eeb231-2118-4625-8d9d-ba8140abe763" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="711bb649-3784-4fb2-a11c-3ac8b563404f" containerType="regular" prevTag="div" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-gray-300 font-medium mb-4 block" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="f5696dab-4122-4fa4-b445-82c9d7b75bdc" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "4aa35054-f741-42c5-a2e6-dbc221914b9c"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "87d0c72a-9cf4-4c61-98a2-0a740c4cb0d3"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "abd62a62-45f8-4dda-8c07-de2fe6a5605a"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30' : 'bg-white/5 border border-white/10 hover:border-white/20'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className="text-xs text-gray-400" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="ed14d16f-1684-4b53-bb53-0d5e8ec09281" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 rounded-2xl mb-6" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="91cb610e-1672-4f2e-857e-15d58bfe054a" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-gray-300 pt-4 border-t border-white/10" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="a46e4ca9-99f7-4ac9-870e-84c8fc855a3b" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-blue-400" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">Core Team + {teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-gray-600" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="b0f67025-dbd3-4aa5-96ff-c99cd673eb90" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-purple-400" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-gray-400 mt-4" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="314b3008-3def-43c0-ae7a-8c99fd6faccd" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-gray-400" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="4857338e-aaec-4170-a891-d87401dd6e81" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="a42d2825-c18f-4892-9731-0619c1b71155" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="205f526a-04f9-4dfd-ba9d-2a98eb41e989" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/30" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border border-white/20 hover:border-white/30 hover:bg-white/5 rounded-lg font-bold transition-all" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Consultation
              </button>
            </SortableContainer>

            <p className="text-center text-gray-400 text-sm mt-6" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
              <MessageSquare className="w-4 h-4 inline mr-2" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx" />
              Don't know where to start? Let's have a quick talk — we'll help map out your MVP.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="9fb54953-1a1e-4c68-8ab1-152b4c619d6a" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="230f72c3-284b-42c6-b8fa-4202d63f2b83" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3560f731-1988-4912-a1ef-25ac91dcb84b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently Asked <span className="text-gray-600" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">Questions</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="bac49204-225e-4cf2-8232-9097c2807a96" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-blue-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>
                
                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="cbc4c622-f9c4-4df7-8857-a2f2e422e55f" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="0b744366-f040-491a-b26f-d35c321cfc3b" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="a5d26713-3f8b-4cd7-84e0-f3273a8ad07a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden text-center" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="363b8603-1776-48f6-9546-fc6d9e5fa758" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="a58ff56a-fd28-4594-9404-e8684e5c1e8e" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-emerald-400/30 rounded-full" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4 text-emerald-400" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-emerald-300" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to bring your<br data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
                  idea to life?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">
                Let's build your MVP and get it to market fast.
              </p>

              <SortableContainer dndKitId="2567d33c-b3b4-416d-9b87-27b879585500" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="fe53efac-b945-4f75-9632-78921b95e8b5" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">Book a Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border border-white/20 hover:border-white/30 hover:bg-white/5 rounded-lg font-bold transition-all" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="e67465e1-9458-416f-b46b-515f234fc0f4" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-white/10" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="8df84df7-e58c-4ef9-9e0f-6c65f64f3e28" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="98235cf2-4da6-4c1b-a69b-32b739c52b6a" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="fc50aab0-1fa4-4174-91fc-356a9c049538" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="4a61922a-60b2-4837-a147-06435f2aa091" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="16d5187d-aba5-499c-bb06-9275e1d3dbb8" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-6 h-6" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-xl font-bold" data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              </SortableContainer>
              <p className="text-sm text-gray-500" data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">
                Turning startup ideas into successful products since 2015.
              </p>
            </SortableContainer>

            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting', 'Maintenance'],
            mpid: "ae21e124-bd00-4a25-a200-d00309a2475f"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "d96fd3e7-33f7-4b6f-9d10-fd63af2fe891"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "1ee5b06d-1e6c-4d18-84c2-96a62aa456bc"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="b4c63966-2da8-49ca-9a2f-347c39007f6a" containerType="regular" prevTag="div" className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="bb9c38e4-f706-4c07-9ee0-4041b1ad38c5" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">Cookie Policy</a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <style data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Custom slider styling */
        input[type="range"].slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #9333ea);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        input[type="range"].slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #9333ea);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </SortableContainer>;
};