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
  mpid: "49556660-0fd8-489e-b727-497bdea006a4"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "74446852-fc40-4ba0-b28d-d4ce49d695f6"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "3864d78b-e78e-4507-82e1-cda62d7f1aa9"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "840f9cd7-7ecf-44a9-b675-622b934de3d9"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "0076ab3a-7107-4a07-ad38-a1a46d0564fb"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-[#4a6d78] to-[#395c66]',
  mpid: "32014666-b21a-4dc5-b82a-88d4dd8325ca"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "7bbc0168-d24a-4328-bee5-5aa75d61a73b"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-[#b8973f] to-[#c9a550]',
  mpid: "a911a3cd-9e70-449f-82d6-40f9692c8266"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  initials: 'GZ',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "8c65577c-5057-4855-85fb-d767675e76a2"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  initials: 'AC',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "30c7198b-9580-4a8b-9ff1-1db6c9cb05e6"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  initials: 'SM',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "55e6e71e-7a85-4203-b3cc-1dcff0ab6661"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  initials: 'MK',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "a7d9b60d-8169-4d77-8b09-925d9e923c4b"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  initials: 'ET',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  mpid: "0760ce7e-75dc-4ce7-b6b3-80961d302257"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  mpid: "e33d2bfa-2f23-433a-99c9-d1848a135b44"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  mpid: "98f68662-ed97-468b-85b7-c7781a55faa5"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  mpid: "b8a8ca04-1057-4f1b-aff8-b0469dff9ae0"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "95536cab-a6ad-4114-9e89-1358b54d2fb7"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "5af2228c-134f-474f-9c41-94d98be48316"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "1edf876a-133c-4c59-bffa-7dac27688e89"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "02c6b75c-f150-4e37-9545-9eeb6bb2fc87"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "c1a3fc08-1d3e-4b01-9892-eb4a56bd4d6b"
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
  return <SortableContainer dndKitId="625785a3-27c1-4a86-a871-70748c8f2e75" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects - Charcoal & Teal */}
      <SortableContainer dndKitId="10846480-e32b-4872-8733-984371522373" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="1dc4a883-f4dd-43b6-a67a-cb6484f45f7f" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="35e4774f-8e56-466f-927c-73e4b70ec303" containerType="regular" prevTag="div" className="bg-[#2d2d2d]/90 backdrop-blur-xl border border-[#395c66]/20 rounded-full shadow-2xl shadow-[#395c66]/10" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="88225316-2b33-4cef-8902-f64d682ffa86" containerType="regular" prevTag="div" className="px-8 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="2bbb7398-2408-47f1-ba65-de6ea0daeb62" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="7cebcdcd-7e3d-4680-b0ed-8c9d096e3482" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="6d735899-b70e-4d01-ac46-106ad6097560" containerType="regular" prevTag="div" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b8973f] via-[#c9a550] to-[#b8973f] p-[2px]" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="aa71f87e-5fd3-45ac-9961-6a888f176934" containerType="regular" prevTag="div" className="w-full h-full rounded-full bg-[#2d2d2d] flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
                    <Rocket className="w-4 h-4 text-[#b8973f]" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <span className="text-lg font-bold tracking-tight" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="90f357da-974c-4a11-930a-a4558cd768b1" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-6" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
                <a href="#approach" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">How We Work</a>
                <a href="#projects" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">Projects</a>
                <a href="#team" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">Team</a>
                <a href="#pricing" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">Pricing</a>
                <a href="#faq" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">FAQs</a>
              </SortableContainer>

              <button className="px-5 py-2 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-[#395c66]/30" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Free Consultation
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="0aa5ecb7-0c5a-48a2-897b-560bd0e26e9f" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Light theme animated background effects */}
        <SortableContainer dndKitId="a9e82f94-e8e9-41b1-aa08-590bd3e32099" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/5 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="a32041fb-d2c5-4def-a1a1-bc48fca1683d" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e0492040-d4b1-4a1d-90a6-daecf3dda03f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="67ab9c89-8083-4872-bc74-2dfcb4924a2d" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full mb-8" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
              <Sparkles className="w-4 h-4 text-[#395c66]" />
              <span className="text-sm font-medium text-[#395c66]" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-slate-900" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in<br data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#395c66] bg-clip-text text-transparent" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
                30–60 days
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch — fast, affordable, and built for scale. Zenith Technologies helps startups 
              and businesses bring their software ideas to life with agile development and transparent pricing.
            </p>

            <SortableContainer dndKitId="05952f54-b47e-4129-9f57-cea3d236c6b6" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="67481191-ea3c-432f-a6a5-193bd027a72b" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="0811db7d-c820-41ff-947c-a4907c89d2cb" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-[#395c66] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-bold transition-all flex items-center space-x-2 shadow-sm" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5 text-[#395c66]" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Powered By Tech Stack - Integrated into Hero */}
          <SortableContainer dndKitId="b4a47bee-664b-4ed4-9ee3-5309ac3b3731" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="pt-16 space-y-6" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400 uppercase tracking-wider" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
            
            {/* Tech Stack Carousel */}
            <SortableContainer dndKitId="d995dd16-1e43-477c-bf17-038d61a4a573" containerType="regular" prevTag="div" className="relative overflow-hidden max-w-4xl mx-auto" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex space-x-6 animate-scroll" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="8b75f811-4e2c-4d6a-840c-5ca93c98d859" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-5 py-2 bg-white border border-slate-200 rounded-lg hover:border-[#395c66] hover:shadow-md transition-all" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator - Now at the bottom of hero section */}
          <SortableContainer dndKitId="f4fe7131-4e2b-415f-8bf1-e4020b605df2" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="pt-12" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="7c7841bf-bf54-4fb9-a539-f89df425d5f4" containerType="regular" prevTag="motion.div" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="flex flex-col items-center gap-2" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-xs text-slate-400 uppercase tracking-wider" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">Scroll to explore</span>
              <SortableContainer dndKitId="bac0e8e6-1ff5-4e16-9aa6-1afcfa6508dd" containerType="regular" prevTag="div" className="p-3 bg-white backdrop-blur-sm border border-[#395c66]/20 rounded-full hover:bg-[#395c66]/5 hover:shadow-md transition-all" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
                <ChevronDown className="w-8 h-8 text-[#395c66]" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Most MVPs Fail */}
      <SortableContainer dndKitId="9d0f6d14-0e26-4cb3-99f7-86a47fe213a9" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e511f243-e397-4a39-a136-de1423b10115" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="34e21350-ada7-4368-b607-cdff0bb3e1a7" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
              Most MVPs never make it<br data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-gray-400" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">past launch — here's why</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="d257eaa7-cb8c-4be6-b026-dc593ada7d4f" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl hover:border-red-400/40 transition-all" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
                  <reason.icon className="w-7 h-7 text-red-400" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-300" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach */}
      <SortableContainer dndKitId="28ff3371-58ba-45e3-a802-839835bcffe8" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="eb9eeaac-4077-4d6a-b0dd-1d4b38e36ce1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="d3483225-8564-4601-aae1-58872079d6c7" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
              Our approach turns ideas into<br data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#395c66] bg-clip-text text-transparent" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                real, testable products — fast
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
              We follow a practical, sprint-based workflow designed for clarity, speed, and adaptability.
            </p>
          </SortableContainer>

          {/* Team Photo */}
          <SortableContainer dndKitId="5be4a34e-e849-4a71-ba9a-7242f6a77a87" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="bb63c653-6327-4213-aeea-f2aa33fda3e7" containerType="regular" prevTag="div" className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden group" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Decorative border glow - Teal & Gold */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#395c66]/20 via-[#b8973f]/20 to-[#395c66]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Team Photo */}
              <SortableContainer dndKitId="99c96619-2802-4019-ba1f-433846b47196" containerType="regular" prevTag="div" className="relative border border-[#395c66]/20 rounded-3xl overflow-hidden shadow-2xl" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80" alt="Zenith Team Collaboration" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx" />
                
                {/* Caption overlay */}
                <SortableContainer dndKitId="8c7f8248-9902-409a-b896-3d02a00ae582" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-8 z-20" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="da8630f5-a5f3-4e63-9f28-19bd2de10440" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-2" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
                    <Users className="w-5 h-5 text-[#395c66]" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="text-sm font-semibold text-[#395c66]" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">Our Team in Action</span>
                  </SortableContainer>
                  <p className="text-slate-900 text-lg font-medium" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
                    Collaboration, innovation, and execution — all under one roof
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="ec3196f0-7389-461d-af57-69e47c61f3fc" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="relative p-8 bg-white border border-slate-200 hover:border-[#395c66]/30 rounded-2xl transition-all group hover:shadow-2xl hover:shadow-[#395c66]/10" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-white" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                    <span className="text-6xl font-black text-slate-100" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="753319db-7cea-4d1c-a0e4-6b30715c2293" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="d2780012-9c1a-4ce2-a076-a09efea17bcf" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-[#395c66] hover:border-[#4a6d78] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-sm" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5 text-[#395c66]" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="9a19b815-b282-4bf9-9574-869abdb16787" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="41238367-45b8-4de8-bada-cf0936ef32a8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4ae78f16-a6f3-464c-8284-7314e6920e71" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
              The <span className="bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span> Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
              A small but focused team of developers, designers, and project managers — 
              united by one goal: building products that matter.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="68cbd488-7c2f-43e6-8351-013c9c3750ae" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative p-8 bg-gradient-to-br from-[#3d3d3d]/80 to-[#2d2d2d]/80 backdrop-blur-xl border border-[#395c66]/20 hover:border-[#395c66]/40 rounded-2xl transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
                  {/* Professional Face Image */}
                  <div className="mb-6" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} p-[2px] shadow-lg group-hover:shadow-2xl transition-all duration-300`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                      <img src={member.image} alt={member.name} className="w-full h-full rounded-2xl object-cover" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="space-y-3" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
                    <div data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="bio:unknown" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="mt-6 pt-6 border-t border-[#395c66]/20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                    <button className="w-9 h-9 rounded-lg bg-[#395c66]/10 hover:bg-[#395c66]/20 border border-[#395c66]/20 hover:border-[#395c66]/40 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
                      <Github className="w-4 h-4 text-[#395c66]" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-[#395c66]/10 hover:bg-[#395c66]/20 border border-[#395c66]/20 hover:border-[#395c66]/40 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
                      <MessageSquare className="w-4 h-4 text-[#395c66]" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Recent Work */}
      <SortableContainer dndKitId="7c4132be-19b8-497d-9c33-cf6a219d5253" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="d050e5be-41ed-4615-b217-7b6423a9d4de" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4f3c9793-1b3d-4062-8863-49d6fa8bdc59" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
              Recent <span className="text-gray-400" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
              A glimpse of what we've built for startups and growing businesses.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="11ece8f3-72ff-4880-96fa-41fe6df6fc87" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-2xl overflow-hidden border border-[#395c66]/20 hover:border-[#395c66]/40 transition-all" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d] via-[#2d2d2d]/50 to-transparent" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-[#395c66]/10 backdrop-blur-xl border border-[#395c66]/30 rounded-full text-xs font-medium text-[#395c66]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="03e2e4e3-7c6b-466d-8f33-f3fb6d9a4e2e" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="05394b76-4879-49c1-955a-68c1bcc6e04f" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="9ba36a47-1dff-420b-af6e-b956945ff4ee" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
              Fair. Transparent.<br data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#b8973f] via-[#c9a550] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
                Predictable.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
              Get instant pricing estimates — no hidden costs, just clear numbers.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="15f35624-3ec5-4fc2-b5f0-24804eb79d27" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-white border border-[#395c66]/20 rounded-3xl shadow-2xl shadow-[#395c66]/10" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="6fa18e8f-7efc-42b2-aeda-aa408c5d827e" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="f67d96ef-e0f9-41e0-b458-be496de6b7d7" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="ef0cf5ba-2c45-4abb-8346-ac530a371672" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-slate-700 font-medium" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-[#395c66]" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30 scale-110' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 hover:scale-105 text-slate-700'}`} data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="d2c547e2-4ce7-4bd3-882f-37865762b3a3" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full text-xs font-semibold text-[#395c66]" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="fda8417a-d0d8-425b-a982-ca2c1d65893b" containerType="regular" prevTag="div" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-slate-700 font-medium mb-4 block" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="0ff3e425-6658-4445-8520-07ae86ea3bcc" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "1769f48a-9e23-4d6b-a55e-cf87cb6ea315"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "a996153c-61be-4ae8-a837-3d40ec047ce2"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "6a97c377-3790-4548-b205-a3970b1057e1"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-white/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="7881a29b-8579-430d-96b1-dbf4126c16a2" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-[#395c66]/5 to-[#4a6d78]/5 border border-[#395c66]/20 rounded-2xl mb-6" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-[#b8973f] via-[#c9a550] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="015a0c76-d548-4daa-9f2a-8241f0ecce43" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-slate-700 pt-4 border-t border-[#395c66]/20" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="4c9d0bbf-ec3d-465e-96ab-8f0e181b3007" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-[#395c66]" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">Core Team + {teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="4a0df64d-066a-4021-8050-8674eaa4004c" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-[#395c66]" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-slate-600 mt-4" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="c40c48b9-3874-41f2-9374-74df922732d8" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-slate-700" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="a92e40f2-acc6-45b2-89c6-a6eec6e0ba7a" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="9fc0a0cb-afb1-4def-bb80-0a243ccaca67" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="f71a2991-8039-4810-bf1f-c31d503ffb14" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-bold transition-all shadow-lg shadow-[#395c66]/30" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border-2 border-[#395c66] hover:border-[#4a6d78] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-bold transition-all" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Consultation
              </button>
            </SortableContainer>

            <p className="text-center text-slate-600 text-sm mt-6" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
              <MessageSquare className="w-4 h-4 inline mr-2 text-[#395c66]" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx" />
              Don't know where to start? Let's have a quick talk — we'll help map out your MVP.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="2ab57c16-cd33-45df-b1a0-f5cae5469168" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="2cdf6e92-b242-4e7d-8a88-0db9e6b590fd" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c6cd9ef7-9297-430f-a072-cadedc6ebf69" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently Asked <span className="text-gray-400" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">Questions</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="3d6bed37-36f1-4a2f-9a10-c2c71b67385f" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-[#3d3d3d]/60 backdrop-blur-xl border border-[#395c66]/20 rounded-xl overflow-hidden hover:border-[#395c66]/40 transition-all" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#395c66]/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#395c66]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>
                
                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="cfce67c5-1c00-4711-8570-5ff8174c5972" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="a0128c0d-cbeb-415d-8832-499432e8f579" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="8bbcb399-811c-48b2-88b6-ab6e81b094e8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-[#395c66]/20 via-[#4a6d78]/20 to-[#b8973f]/10 backdrop-blur-xl border border-[#395c66]/30 rounded-3xl overflow-hidden text-center" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/10 to-[#4a6d78]/10" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="80058452-e509-4675-9a7e-9cc6c012263d" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="7688096d-425c-4e25-bd2c-59d729ab5261" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b8973f]/20 border border-[#b8973f]/30 rounded-full" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-[#b8973f]" data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to bring your<br data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">
                  idea to life?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx">
                Let's build your MVP and get it to market fast.
              </p>

              <SortableContainer dndKitId="0f6715c5-2ac6-4fd5-bcb8-bb3a33b17d28" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="8c85f373-47f5-449d-b172-1b760c8df13a" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">Book a Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border border-[#395c66]/40 hover:border-[#395c66]/60 hover:bg-[#395c66]/10 rounded-lg font-bold transition-all" data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="6f5b4d13-c052-4d61-a7da-302402cc7b93" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-[#395c66]/20 bg-[#2d2d2d]" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="ba839809-cf60-4758-b058-a12df4745648" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="86997ec7-992a-4d0b-8a29-5e512b32a243" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="e2df2cfe-0794-4052-b2d1-55acad96ddf2" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="5b12e6c7-198f-413c-aa9c-efcb2f001bb4" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="8f3d1f65-cd90-4c0b-adf7-e593cc405b25" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#395c66] to-[#4a6d78] flex items-center justify-center" data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-6 h-6" data-magicpath-id="221" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-xl font-bold" data-magicpath-id="222" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="223" data-magicpath-path="ZenithPortfolio.tsx">
                Turning startup ideas into successful products since 2015.
              </p>
            </SortableContainer>

            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting', 'Maintenance'],
            mpid: "d4e58b82-a610-43c5-8788-48e7b32ae917"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "bb7b1dd1-a18f-4b71-8edd-3e491f523731"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "c84502b9-7521-41f1-8cc4-7a14ce08c187"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4 text-[#395c66]" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="225" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="227" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="228" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="995c903b-ced8-42d3-a2c4-2f50df54d166" containerType="regular" prevTag="div" className="pt-8 border-t border-[#395c66]/20 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="229" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-400" data-magicpath-id="230" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="4929a3ca-65f6-4c24-8733-f6418dfee34b" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="231" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="232" data-magicpath-path="ZenithPortfolio.tsx">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="233" data-magicpath-path="ZenithPortfolio.tsx">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="234" data-magicpath-path="ZenithPortfolio.tsx">Cookie Policy</a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <style data-magicpath-id="235" data-magicpath-path="ZenithPortfolio.tsx">{`
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
          background: linear-gradient(to right, #395c66, #4a6d78);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(57, 92, 102, 0.5);
        }
        
        input[type="range"].slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #395c66, #4a6d78);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(57, 92, 102, 0.5);
        }
      `}</style>
    </SortableContainer>;
};