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
  mpid: "21f8268f-285c-4612-bd51-cd240b86f744"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "96a485df-0749-4161-9fe1-125dd17d7c0d"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "ba929f4a-eeb5-48ec-886b-28a476c8ba9c"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "f47f00e4-650e-4719-9825-a32e0318a8a1"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "1ee83dda-1818-49d8-9bfd-e3945eaf1ecf"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-[#4a6d78] to-[#395c66]',
  mpid: "62be5e43-b359-4d96-b495-21a6d57142b7"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "64aae3a3-5f6f-4a05-8557-2573fc0fd508"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-[#b8973f] to-[#c9a550]',
  mpid: "e1892d35-c44d-4243-a9ff-99becdaac113"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  initials: 'GZ',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "d6175bc6-ea36-45c5-a937-789adeaddedd"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  initials: 'AC',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "091852b5-8763-41f3-b41f-968cec34b152"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  initials: 'SM',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "3ad6284c-d341-4cae-a4ac-3a0aa58f068b"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  initials: 'MK',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "c8800803-7254-48a2-af0d-92c9dcc753f0"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  initials: 'ET',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  mpid: "0d6ae70f-46b2-4ac1-b8f1-5e38e4bb3a82"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  mpid: "6759b5d1-e51b-4e23-8bad-ab7c5c149124"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  mpid: "7ab9bde3-f457-431a-b832-4b4c3bcb4846"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  mpid: "961780e5-e63d-40fb-86ea-18b163eeb7ef"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "a8720d49-791c-49e9-acaf-e5552c54390f"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "d117dcc9-02f7-4622-aa98-0716ce945bfb"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "343c4583-6216-431d-b01b-9cd1ff7b7dac"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "63fbe8b9-8b37-4a57-b69f-29e97b151f18"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "21d78c11-e8ba-43a9-9baa-4bb56d9b651f"
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
  return <SortableContainer dndKitId="67a82fda-d2f7-4475-bd33-44d2bef10fc0" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects - Charcoal & Teal */}
      <SortableContainer dndKitId="0a47e15f-7126-40a6-8a69-ecd5f833c890" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="b93ea011-7aca-4b56-8051-0b713e873bb3" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="51deaac2-ecb1-48d2-a9b4-9fb4ce296afb" containerType="regular" prevTag="div" className="bg-[#2d2d2d]/90 backdrop-blur-xl border border-[#395c66]/20 rounded-full shadow-2xl shadow-[#395c66]/10" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="ad860b2f-d63a-4ff8-9e5f-eb3166bd7ab4" containerType="regular" prevTag="div" className="px-8 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="21ce1233-1cb5-4dce-ae58-cd195b04e16f" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="5b9a50f9-073c-43c6-a772-2c33d0073e71" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="28e6584f-7a07-477e-8c36-086e34316b22" containerType="regular" prevTag="div" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b8973f] via-[#c9a550] to-[#b8973f] p-[2px]" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="e75fa314-134b-4cce-8d73-621a2b84c813" containerType="regular" prevTag="div" className="w-full h-full rounded-full bg-[#2d2d2d] flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
                    <Rocket className="w-4 h-4 text-[#b8973f]" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <span className="text-lg font-bold tracking-tight" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="ccbe4526-63d4-4184-b46c-5ba75320fb77" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-6" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="0ed5fb01-3a95-4a93-8a46-4184c9c2d2ca" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Light theme animated background effects */}
        <SortableContainer dndKitId="2c430794-44cf-4af8-8e86-5b61d3bbb3f1" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/5 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="896473aa-e60f-4804-86d9-fa94b7ec8d7d" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="2b073b12-39eb-4ffd-99f7-d493aa433674" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="006b54a9-1839-4eab-a28e-2f39a2502fa0" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full mb-8" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
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

            <SortableContainer dndKitId="f1264fa3-ba1e-4b75-8ebb-471dd562ab61" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="f05a040f-3926-44fc-9fcc-ebf5c08317e0" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="fa02ce28-3d2d-465f-9118-360944425d6f" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-[#395c66] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-bold transition-all flex items-center space-x-2 shadow-sm" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5 text-[#395c66]" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Powered By Tech Stack - Integrated into Hero */}
          <SortableContainer dndKitId="967dc5a2-b7fa-430e-8c8e-6d869bfe7bb2" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="8b1343c5-be2e-4384-9f97-a1ca03063222" containerType="regular" prevTag="div" className="relative overflow-hidden max-w-4xl mx-auto" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex space-x-6 animate-scroll" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="cabbae80-eda0-402c-909f-c3c268c3628d" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-5 py-2 bg-white border border-slate-200 rounded-lg hover:border-[#395c66] hover:shadow-md transition-all" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator - Now at the bottom of hero section */}
          <SortableContainer dndKitId="a00d6523-e235-4efb-b514-cc78517b8bb5" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="pt-12" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="ad9bd6b4-d273-463f-8731-51d834a5be61" containerType="regular" prevTag="motion.div" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="flex flex-col items-center gap-2" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-xs text-slate-400 uppercase tracking-wider" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">Scroll to explore</span>
              <SortableContainer dndKitId="b380a1e3-54a9-4c65-9b9b-6763e5239502" containerType="regular" prevTag="div" className="p-3 bg-white backdrop-blur-sm border border-[#395c66]/20 rounded-full hover:bg-[#395c66]/5 hover:shadow-md transition-all" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
                <ChevronDown className="w-8 h-8 text-[#395c66]" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Most MVPs Fail */}
      <SortableContainer dndKitId="ff53c40c-d7da-4553-b6d0-56f77a20834b" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="afd936ed-77f0-411e-b680-ff68073a330d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3a1e7e0a-309d-470c-983e-71e3d467a806" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="2867d9f2-c36d-4da8-a1b5-c69aebf94b02" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="9eec7d2c-c791-4500-b3e5-c63cf313621b" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="06ef857a-5e1b-4f23-9bfa-64accb3cefeb" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="990865d1-c9bd-4189-bfdd-8a8ab9cd0719" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="08e700d2-01ac-48c7-99ef-b7ad79525924" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="206b1e73-b0af-4337-b852-8281c4d78372" containerType="regular" prevTag="div" className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden group" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Decorative border glow - Teal & Gold */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#395c66]/20 via-[#b8973f]/20 to-[#395c66]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Team Photo */}
              <SortableContainer dndKitId="869037f9-5e4b-483c-a9f1-ad8d518f6b77" containerType="regular" prevTag="div" className="relative border border-[#395c66]/20 rounded-3xl overflow-hidden shadow-2xl" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80" alt="Zenith Team Collaboration" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx" />
                
                {/* Caption overlay */}
                <SortableContainer dndKitId="2107f320-10c8-4540-bb36-bfd24d54ac6d" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-8 z-20" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="a67e4fe7-0c4a-438d-8ec7-9434211dac5d" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-2" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
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

          <SortableContainer dndKitId="20bef7c9-a1e0-408f-82a2-cc18a52a15a4" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
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

          <SortableContainer dndKitId="17d7494c-a19c-41ce-b12d-0df4e57ed3d9" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="b13097e1-9661-474e-8afb-1a05703efecc" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-[#395c66] hover:border-[#4a6d78] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-sm" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5 text-[#395c66]" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="9078e3c9-3b64-4c7e-a6eb-ccd787b43136" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="bada3955-063c-4e7c-b820-d4fd28d79756" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="1e274d0a-8393-4980-8549-9d1e66f998b4" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="71421f20-842d-4336-8047-4e8436a8f2a2" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="eae61e25-9b39-445e-a985-6cc9d25cbb3d" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e789e61a-0ecd-4c0b-9148-5c9f2be48b65" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4fbf7885-a9d2-4b59-a80a-13b4842bf003" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="c2ca7816-5fa9-4e86-98a8-55b8213bc61b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="bae57ad0-00d2-4dea-b692-28b30fbdf882" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="34045fc6-62f2-4d7c-91e4-37be609777b7" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="954e9fff-c561-457c-b646-28d3cfe9023e" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="131624c2-f047-4786-b973-a5a2a9c20f9c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-white border border-[#395c66]/20 rounded-3xl shadow-2xl shadow-[#395c66]/10" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="77a41217-e624-42d8-94f4-8527592c04e2" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="1f64be35-e5ed-4005-b611-b561ffcddc84" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="9f1fb86d-8ed2-4398-a48f-4c3633a3023f" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-slate-700 font-medium" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-[#395c66]" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30 scale-110' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 hover:scale-105 text-slate-700'}`} data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="e386054c-6593-4b34-844b-1e840edd7559" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full text-xs font-semibold text-[#395c66]" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="6455b69c-f987-494a-b1d6-3a211118becb" containerType="regular" prevTag="div" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-slate-700 font-medium mb-4 block" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="6e03aa2b-8cb9-4847-9c4e-b9716cd5404d" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "956be528-79c7-4e07-930a-eed8eb6060d2"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "02a8f869-a59f-45bf-bdba-5a5167df4ee2"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "4e08a720-d1aa-4a83-a01e-16fc8d0fc4fa"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-white/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="4db1dc31-6f39-485f-af26-c5fab8b930c6" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-[#395c66]/5 to-[#4a6d78]/5 border border-[#395c66]/20 rounded-2xl mb-6" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-[#b8973f] via-[#c9a550] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="1177a129-42bd-4627-ab9a-574151db73cc" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-slate-700 pt-4 border-t border-[#395c66]/20" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="4bd4cc44-a4c0-4fa7-b7cb-b9fa80e47221" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-[#395c66]" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">Core Team + {teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="184a61e9-425d-4f8e-87fe-3d64619dfac5" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-[#395c66]" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-slate-600 mt-4" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="be72fafd-82db-42f4-9972-e791e1be807a" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-slate-700" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="831fcd31-5eb0-436e-bd8e-999c6826a697" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="4ab6c7db-518e-4cc9-97d7-9d0d76971766" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="ee0ef735-a853-400f-83aa-9b88a123ed89" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="df6dd606-231e-44b6-94df-2be3f16f8ba5" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="027c1833-9d72-42ab-998b-552cfa2ff834" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="37e08146-39f6-4697-a400-17936d74546e" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="afb3fd93-0f4b-419a-86ac-5fc19b6c0979" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="662f7661-ce39-4ce2-9e81-34460d2566b6" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="acb09034-9c12-48d1-98d4-9f37b21e0b4a" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c5b89b8d-83e5-41b7-882e-49dfcf9d62ea" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-[#395c66]/20 via-[#4a6d78]/20 to-[#b8973f]/10 backdrop-blur-xl border border-[#395c66]/30 rounded-3xl overflow-hidden text-center" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/10 to-[#4a6d78]/10" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="743cfbbe-85de-49a9-a250-517241ab331a" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="fd36fa97-3b08-45cb-a9a2-ec672ed9773f" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b8973f]/20 border border-[#b8973f]/30 rounded-full" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">
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

              <SortableContainer dndKitId="3d15f963-66eb-4a32-823f-c2c0aebd94c6" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="7b61ff50-8f8d-44c7-b874-2864c307b4e8" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="52241522-6fb5-4ea7-97d0-6f963093f4ff" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-[#395c66]/20 bg-[#2d2d2d]" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="4c53ec69-6b26-4729-886c-27d40a9b5843" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4a2b9163-e07c-40a2-bb27-cf369d41e0a1" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="7caa0062-33c4-457b-84a2-fa0a9b1a2877" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="1e013692-3a99-4350-a201-20fa57e3ef6f" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="bfa7779e-0576-415c-aac4-944b7dbbf20c" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#395c66] to-[#4a6d78] flex items-center justify-center" data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">
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
            mpid: "f998a13f-e3f6-466e-bc74-533fc488412f"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "288f4617-ebef-4b19-9d64-42b1314666fd"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "c2b700fa-52e4-4e82-904b-58f12e69479f"
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

          <SortableContainer dndKitId="d96fa97c-26a7-4d1c-887e-732954c151af" containerType="regular" prevTag="div" className="pt-8 border-t border-[#395c66]/20 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="229" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-400" data-magicpath-id="230" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="0b89088d-de58-441c-95c5-e5d907d9cc7d" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="231" data-magicpath-path="ZenithPortfolio.tsx">
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