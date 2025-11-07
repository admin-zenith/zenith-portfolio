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
  mpid: "744190f0-c85d-4f7c-8869-5f9894b44a0e"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "a669dfb9-eb1d-4e36-ac66-b82eba8627ea"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "87fcbce2-07ef-4824-9b83-bec19d7c0549"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "03b66ba3-a013-40e2-b237-6b525c984d2a"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "08128e43-20b4-4bd6-aaf8-cc781cf38d25"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-[#4a6d78] to-[#395c66]',
  mpid: "e8eb07d3-da79-4d10-be27-4c14843ef375"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "01779661-d1db-4a2a-afc4-ef7e0b14dc44"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-[#b8973f] to-[#c9a550]',
  mpid: "29af3726-2589-4ca6-8293-76b7f45d92c2"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  initials: 'GZ',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "eda910f8-6084-4d31-bdf4-43bf81f91734"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  initials: 'AC',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "ea757df0-0fa9-442e-9c12-56399bd9809b"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  initials: 'SM',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "8d398bd5-046c-4a66-9ecb-2670f1672fbb"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  initials: 'MK',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "63ab4ab3-f3ba-4854-81fb-f0c2efbaeca2"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  initials: 'ET',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  mpid: "83dc6135-c66b-49e2-b471-c501481e9000"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  mpid: "705f0f29-f26d-4be9-b261-770b3f074805"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  mpid: "3e779452-0c4b-485c-aa6c-d317aab222c7"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  mpid: "13509cfe-f431-4b20-8e89-7d879d73e472"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "7a285c94-9f0b-4a2d-9aae-b22711c43333"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "9d98e3ec-400e-4bb7-95a3-4384494e0c00"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "fe3592e0-37c3-446e-ae89-83f807547efc"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "ca214033-e32a-4a3f-aeed-a3d26ac9c8d9"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "06e6e2e0-5571-4eec-b32a-fd2dfbecd29b"
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
  return <SortableContainer dndKitId="584efefd-0a5c-4237-89ea-3d5388de2e0a" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects - Charcoal & Teal */}
      <SortableContainer dndKitId="6d3031ed-96f4-4706-8718-a04d77b11bc7" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="9831cd95-a40b-42df-b749-7a52c044e43d" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="d7cf51d3-1ab4-411c-929d-4ca6fa1f604d" containerType="regular" prevTag="div" className="bg-[#2d2d2d]/90 backdrop-blur-xl border border-[#395c66]/20 rounded-full shadow-2xl shadow-[#395c66]/10" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="958be67e-7a2e-4a02-99d6-9ba98a177c5e" containerType="regular" prevTag="div" className="px-8 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="bce5ab78-7ee2-4174-9c45-ea55205988df" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="300c7a26-6bcb-4e3f-9e0b-930208b722ae" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="8a3107f6-bf9d-46a6-b9f8-406974d11cef" containerType="regular" prevTag="div" className="h-10 flex items-center" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="beb99aef-8466-4223-ac70-192c099f44d0" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
                    <SortableContainer dndKitId="c3cb7a18-56a1-4625-b9f1-9a7e4ad8410f" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-[#395c66] to-[#4a6d78] rounded-lg flex items-center justify-center shadow-lg" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
                      <span className="text-[#b8973f] font-black text-xl" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">Z</span>
                    </SortableContainer>
                    <span className="text-xl font-black" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
                      <span className="bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
                      <span className="text-[#b8973f] ml-1" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">TECH</span>
                    </span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              <SortableContainer dndKitId="c15e54c7-e2c6-41b4-b283-131a6ed85cbc" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-6" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
                <a href="#approach" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">How We Work</a>
                <a href="#projects" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">Projects</a>
                <a href="#team" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">Team</a>
                <a href="#pricing" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">Pricing</a>
                <a href="#faq" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">FAQs</a>
              </SortableContainer>

              <button className="px-5 py-2 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-[#395c66]/30" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Free Consultation
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="cb4ddb46-db27-4776-a048-abfe4f30ddb7" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Light theme animated background effects */}
        <SortableContainer dndKitId="3f57a946-b3f3-4e2d-96a3-fd038f5d8c5f" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/5 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="31fa967b-4f54-4d89-87eb-9111309861f3" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="ab780965-f8c6-4b31-91f0-a93d28901606" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="a8fdce60-0495-4d43-ade4-21203d3cd339" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full mb-8" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
              <Sparkles className="w-4 h-4 text-[#395c66]" />
              <span className="text-sm font-medium text-[#395c66]" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-slate-900" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in<br data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#395c66] bg-clip-text text-transparent" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                30–60 days
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch — fast, affordable, and built for scale. Zenith Technologies helps startups 
              and businesses bring their software ideas to life with agile development and transparent pricing.
            </p>

            <SortableContainer dndKitId="18b75664-134c-4157-9a05-edc1b6c04717" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="3bb48420-db5e-4096-93c1-ddb01e1a174b" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="13da9d2f-0a49-4910-a02a-68be742aec5c" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-[#395c66] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-bold transition-all flex items-center space-x-2 shadow-sm" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5 text-[#395c66]" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Powered By Tech Stack - Integrated into Hero */}
          <SortableContainer dndKitId="d259ae55-9f32-4356-9b0f-a103f91330e2" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="pt-16 space-y-6" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400 uppercase tracking-wider" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
            
            {/* Tech Stack Carousel */}
            <SortableContainer dndKitId="6cdd5764-fef9-45db-beed-f2265c85c10d" containerType="regular" prevTag="div" className="relative overflow-hidden max-w-4xl mx-auto" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex space-x-6 animate-scroll" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
                {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="76e7564f-e3aa-4077-b136-869981215441" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-5 py-2 bg-white border border-slate-200 rounded-lg hover:border-[#395c66] hover:shadow-md transition-all" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator - Now at the bottom of hero section */}
          <SortableContainer dndKitId="efec01a6-0d5f-4921-8aa3-745a79876787" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="pt-12" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="a0a8ff97-70dc-45c3-8162-59423d5dbebf" containerType="regular" prevTag="motion.div" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="flex flex-col items-center gap-2" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-xs text-slate-400 uppercase tracking-wider" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">Scroll to explore</span>
              <SortableContainer dndKitId="bb02b3e8-85fd-4380-949b-4d2bbea04312" containerType="regular" prevTag="div" className="p-3 bg-white backdrop-blur-sm border border-[#395c66]/20 rounded-full hover:bg-[#395c66]/5 hover:shadow-md transition-all" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
                <ChevronDown className="w-8 h-8 text-[#395c66]" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Most MVPs Fail */}
      <SortableContainer dndKitId="4e3d0f88-661b-4b3d-8c65-1ed47ffde33d" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="fb677ede-4b6a-44ae-ae30-3402aac135ad" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="47a0225b-666d-4948-9309-33bd7df2c44c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
              Most MVPs never make it<br data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-gray-400" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">past launch — here's why</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="770e7506-5ce4-4b21-ac2c-8a8efa8409e8" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl hover:border-red-400/40 transition-all" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
                  <reason.icon className="w-7 h-7 text-red-400" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-300" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach */}
      <SortableContainer dndKitId="592a71c1-1e8c-46d8-895c-6759e7f5741e" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9173f039-3952-4497-801b-696ebb7a02f8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="7b524bcd-d164-475f-b5b9-463bce6b50dc" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
              Our approach turns ideas into<br data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#395c66] bg-clip-text text-transparent" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
                real, testable products — fast
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
              We follow a practical, sprint-based workflow designed for clarity, speed, and adaptability.
            </p>
          </SortableContainer>

          {/* Team Photo */}
          <SortableContainer dndKitId="26bf5ea8-3769-43fa-806a-e5518251540e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="1620c1b3-abed-42b9-85dd-0c4f4c0546e9" containerType="regular" prevTag="div" className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden group" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Decorative border glow - Teal & Gold */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#395c66]/20 via-[#b8973f]/20 to-[#395c66]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Team Photo */}
              <SortableContainer dndKitId="4ba38999-5420-48ee-952c-02be200bb1bc" containerType="regular" prevTag="div" className="relative border border-[#395c66]/20 rounded-3xl overflow-hidden shadow-2xl" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80" alt="Zenith Team Collaboration" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx" />
                
                {/* Caption overlay */}
                <SortableContainer dndKitId="8bf88b33-91fb-48e7-b4d2-26a61ed8bb5e" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-8 z-20" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="0b6a1fc0-0f68-45df-8086-eaea70b42b4f" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-2" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
                    <Users className="w-5 h-5 text-[#395c66]" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="text-sm font-semibold text-[#395c66]" data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">Our Team in Action</span>
                  </SortableContainer>
                  <p className="text-slate-900 text-lg font-medium" data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">
                    Collaboration, innovation, and execution — all under one roof
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="3ae2c24f-c3a1-4997-b250-6a33024a043b" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="relative p-8 bg-white border border-slate-200 hover:border-[#395c66]/30 rounded-2xl transition-all group hover:shadow-2xl hover:shadow-[#395c66]/10" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-white" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                    <span className="text-6xl font-black text-slate-100" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="4a6951ac-0a29-4849-a93e-c0437cda577b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="586bf969-db5a-4b46-8f60-2769b5c99726" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-[#395c66] hover:border-[#4a6d78] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-sm" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5 text-[#395c66]" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="8f8f81cc-d520-493d-978f-89fe4f2553dc" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="3418b1d0-fa61-4c8d-a1d2-60a65f54d13b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="b5ea93a1-a91c-42af-b0f4-43e170c3c588" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
              The <span className="bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span> Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
              A small but focused team of developers, designers, and project managers — 
              united by one goal: building products that matter.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="0d19db61-42cc-4165-bf48-59963f584c08" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
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
            y: -8
          }} className="group relative" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
                {/* Main Card Container */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                  {/* Portrait Image */}
                  <div className="aspect-[3/4] overflow-hidden" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  
                  {/* Overlapping Name Badge */}
                  <div className="absolute -bottom-6 left-6 right-6 z-10" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className="bg-white rounded-2xl shadow-2xl p-5 border-4 border-[#2d2d2d] transform group-hover:-translate-y-2 transition-transform duration-300" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
                      <h3 className="text-lg font-bold text-slate-900 mb-1" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                      <p className="text-sm text-slate-600 font-medium" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Spacing for overlapping badge */}
                <div className="h-8" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx" />
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Recent Work */}
      <SortableContainer dndKitId="4c2231ab-287c-4003-a63f-aeff0d6653bf" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="323131b8-d3cc-47d7-b652-f289c7649a05" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="bf2df9d6-58e4-454f-a838-2ee73fbf2e1b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
              Recent <span className="text-gray-400" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
              A glimpse of what we've built for startups and growing businesses.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="24bb4ab9-fb9e-431d-9494-dad2ba3b17bc" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-2xl overflow-hidden border border-[#395c66]/20 hover:border-[#395c66]/40 transition-all" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d] via-[#2d2d2d]/50 to-transparent" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-[#395c66]/10 backdrop-blur-xl border border-[#395c66]/30 rounded-full text-xs font-medium text-[#395c66]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="dfd24f26-46cd-4c30-9c5c-39c07bbb1d75" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="91e8452c-89d0-4e23-8ddf-19dbd33fc6b3" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="aee051fb-1c33-41dc-a2bc-2c3479f64e04" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
              Fair. Transparent.<br data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#b8973f] via-[#c9a550] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                Predictable.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
              Get instant pricing estimates — no hidden costs, just clear numbers.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="4ce1e588-42df-492d-a5fd-98d649e72095" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-white border border-[#395c66]/20 rounded-3xl shadow-2xl shadow-[#395c66]/10" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="5ce97a32-fc5e-472c-aecd-ff10c0f3e80e" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="bb4724da-d910-45ca-b414-88292830ff4f" containerType="regular" prevTag="div" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="4bf7eb31-bba7-454f-8e46-6baa3407640a" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-slate-700 font-medium" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-[#395c66]" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30 scale-110' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 hover:scale-105 text-slate-700'}`} data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="5bbd3104-31a5-46a8-b34b-ceeb51baed00" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full text-xs font-semibold text-[#395c66]" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="d79e433d-3c71-430d-aca2-4e07bcdb3dc0" containerType="regular" prevTag="div" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-slate-700 font-medium mb-4 block" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="6dccf428-6b1d-4954-89af-ef7f57dca73d" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "3219b9fc-3341-48f0-9f66-1ef6d3f1c8db"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "76a8c342-490f-43d9-a2e4-89f05d5a5bd5"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "f686b84d-f3e9-44cf-9053-cbbcf6ab9730"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-white/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="3095fe25-9319-44f1-aaeb-7cf494877280" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-[#395c66]/5 to-[#4a6d78]/5 border border-[#395c66]/20 rounded-2xl mb-6" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-[#b8973f] via-[#c9a550] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="79fd02b7-5985-45c0-b902-f88fefc93981" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-slate-700 pt-4 border-t border-[#395c66]/20" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="0f93a808-9ff3-45e7-a034-158bf9caddc8" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-[#395c66]" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">Core Team + {teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="2f7fa123-4dff-440a-827f-de65ab56264c" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-[#395c66]" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-slate-600 mt-4" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="3f322957-e096-46b9-9b23-cb3c51f35ce7" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-slate-700" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="979ffdf1-4afd-4a78-ba91-34b30282cf6d" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="26999276-45ca-4ffc-9790-649847d51a42" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="33493032-a558-4d10-a7bc-a8aeb9425940" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-bold transition-all shadow-lg shadow-[#395c66]/30" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border-2 border-[#395c66] hover:border-[#4a6d78] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-bold transition-all" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Consultation
              </button>
            </SortableContainer>

            <p className="text-center text-slate-600 text-sm mt-6" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">
              <MessageSquare className="w-4 h-4 inline mr-2 text-[#395c66]" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx" />
              Don't know where to start? Let's have a quick talk — we'll help map out your MVP.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="a1a427f5-a6e2-4e6f-a22b-0eae483637ac" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9780154f-229c-4458-a795-16cc51659bee" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="95fed890-b780-4c4a-8a88-6cafb430f78b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently Asked <span className="text-gray-400" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">Questions</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="f7e3f0c9-5d65-4bb6-b46e-67452f1d0df0" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-[#3d3d3d]/60 backdrop-blur-xl border border-[#395c66]/20 rounded-xl overflow-hidden hover:border-[#395c66]/40 transition-all" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#395c66]/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#395c66]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>
                
                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="fc7340a9-4ac0-4700-9ff4-3ddd0c980b0c" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="319447f7-2a0e-473d-9d11-0b9277c8afc1" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="477c70ae-46f1-4b23-83b2-40027b2c32ea" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-[#395c66]/20 via-[#4a6d78]/20 to-[#b8973f]/10 backdrop-blur-xl border border-[#395c66]/30 rounded-3xl overflow-hidden text-center" data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/10 to-[#4a6d78]/10" data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="2bddd9e2-ad18-4bef-aa13-ba6090841bff" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="4eccbd88-8992-4d6b-8d14-9061c1ebed2e" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b8973f]/20 border border-[#b8973f]/30 rounded-full" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-[#b8973f]" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to bring your<br data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
                  idea to life?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">
                Let's build your MVP and get it to market fast.
              </p>

              <SortableContainer dndKitId="a820fa1a-70a4-4091-98c8-e04938d212b5" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="f78c53de-9018-4398-a2a8-8342a4ef3ff0" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx">Book a Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border border-[#395c66]/40 hover:border-[#395c66]/60 hover:bg-[#395c66]/10 rounded-lg font-bold transition-all" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="c04a1357-266d-40b6-b465-e9963ae0785a" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-[#395c66]/20 bg-[#2d2d2d]" data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="a25dfb78-d3d3-43f6-9c5c-608f6e30ce27" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5b1213e4-d6b3-4856-b55f-029c9e4df72a" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="fb450e93-646c-4f07-8b8b-39b0c4efe5e5" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="d7f15e51-3cc5-47d1-ae67-3e27f7efb157" containerType="regular" prevTag="div" className="flex items-center h-10" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="384b109b-89a6-41f0-9a77-0d8809f36005" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="eba33707-dcf0-47ed-bf6b-72df8b27477d" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-[#395c66] to-[#4a6d78] rounded-lg flex items-center justify-center shadow-lg" data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-[#b8973f] font-black text-xl" data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">Z</span>
                  </SortableContainer>
                  <span className="text-xl font-black" data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
                    <span className="text-[#b8973f] ml-1" data-magicpath-id="221" data-magicpath-path="ZenithPortfolio.tsx">TECH</span>
                  </span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="222" data-magicpath-path="ZenithPortfolio.tsx">
                Turning startup ideas into successful products since 2015.
              </p>
            </SortableContainer>

            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting', 'Maintenance'],
            mpid: "587ea01f-7f70-454b-a7c7-1b9a8eacb001"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "95fe85e9-5d1e-469e-acd8-b3c6c7fc4e09"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "9b133875-c146-417d-a0d7-9f446a0ad58c"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="223" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4 text-[#395c66]" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="224" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="225" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="227" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="414c5d50-e53f-4288-a287-929995554029" containerType="regular" prevTag="div" className="pt-8 border-t border-[#395c66]/20 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="228" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-400" data-magicpath-id="229" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="12db4c2b-d9e9-4d8d-80b0-b61a2a3e956d" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="230" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="231" data-magicpath-path="ZenithPortfolio.tsx">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="232" data-magicpath-path="ZenithPortfolio.tsx">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="233" data-magicpath-path="ZenithPortfolio.tsx">Cookie Policy</a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <style data-magicpath-id="234" data-magicpath-path="ZenithPortfolio.tsx">{`
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