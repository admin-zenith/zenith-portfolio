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
  mpid: "cf02b614-5f5b-4380-8284-60d8f42b08bb"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "88fac188-d0a8-4631-b462-ccf78361c459"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "a4451bf5-4896-4c06-8d88-006057efc5bb"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "1fbec41a-e122-40e5-82f9-6d7d6dc269af"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "657a3c01-549d-4d62-b8bd-ec17b8a52fec"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-[#4a6d78] to-[#395c66]',
  mpid: "56b93f15-c060-4975-b781-bb1f7a33662b"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-[#395c66] to-[#4a6d78]',
  mpid: "d248480d-3717-43c9-bc23-fc3c9a4528da"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-[#b8973f] to-[#c9a550]',
  mpid: "64b699f8-c5ee-423d-acb1-715009e15f88"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  initials: 'GZ',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "b10c7272-c6d8-477e-b804-27aec14124cf"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  initials: 'AC',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "e8123f0f-bdd2-4890-8b0c-f7a9e22f3cb8"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  initials: 'SM',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "123cc1c2-12cd-4a2b-b24a-c912bcabe67b"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  initials: 'MK',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "f95bcaba-0349-4cb2-8b58-d7a18222a2da"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  initials: 'ET',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  mpid: "6ec1a9c6-d6d6-4e3c-b489-521350c0e123"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-[#395c66] to-[#4a6d78]',
  mpid: "c5dfcd33-9058-4fdf-8479-2657c35581ea"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-[#b8973f] to-[#c9a550]',
  mpid: "d1a0c65b-6011-4c68-9770-d3b6cba34590"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-[#4a6d78] to-[#395c66]',
  mpid: "7e8d9415-bad6-4398-8081-55a89c90348a"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "43db9819-fc10-4efe-92a4-e7f1425f535d"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "ec07f20a-be3c-4fdb-bee9-913f5ee3b946"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "a8f2293b-7d9c-4d7a-b850-92fe3c5fd32c"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "f7914958-c1b2-4050-9ccf-8678ba97ba5a"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "a6bb68f7-7a5b-47cf-9fc6-3984243a0045"
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
  return <SortableContainer dndKitId="01443946-6d10-4c51-9a8b-0bd43a91a469" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects - Charcoal & Teal */}
      <SortableContainer dndKitId="f46ec438-ab93-40c7-a0c2-c0311c3e6029" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="1797aa7c-1e27-49bc-b965-c1e6c4d909ba" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="56a96309-da79-4575-842d-55145c786a12" containerType="regular" prevTag="div" className="bg-[#2d2d2d]/90 backdrop-blur-xl border border-[#395c66]/20 rounded-full shadow-2xl shadow-[#395c66]/10" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="829c37c4-466c-43e1-9381-629665d91b9d" containerType="regular" prevTag="div" className="px-8 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="c61de0ec-2f09-4e11-aba3-dda51ac4c262" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="5fa4f1f9-2051-4178-bd0b-a2956b2f4b00" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="1ef766ad-179b-41aa-8ce7-f20c8a86ad65" containerType="regular" prevTag="div" className="h-10 flex items-center" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                  <img src="https://i.imgur.com/9YJlQZv.png" alt="Zenith Technologies" className="h-10 w-auto object-contain" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
              </SortableContainer>
              
              <SortableContainer dndKitId="296190e9-da10-41e9-ab0f-5edd564793de" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-6" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
                <a href="#approach" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">How We Work</a>
                <a href="#projects" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">Projects</a>
                <a href="#team" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">Team</a>
                <a href="#pricing" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">Pricing</a>
                <a href="#faq" className="text-sm text-gray-300 hover:text-[#395c66] transition-colors" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">FAQs</a>
              </SortableContainer>

              <button className="px-5 py-2 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-[#395c66]/30" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Free Consultation
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="59d4a7a0-782c-42ce-8932-37aaabf1c665" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Light theme animated background effects */}
        <SortableContainer dndKitId="891d14eb-de45-452a-99a3-4803d9992d36" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8973f]/5 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#395c66]/5 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="1c9d6679-32fd-4d00-895b-2d867b28f830" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="816b635d-3b7a-4e41-8cb3-3c95ee2f2e8b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="aae9b756-dafc-477d-9935-f4a5f555a6fa" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full mb-8" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
              <Sparkles className="w-4 h-4 text-[#395c66]" />
              <span className="text-sm font-medium text-[#395c66]" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-slate-900" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in<br data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#395c66] bg-clip-text text-transparent" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
                30–60 days
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch — fast, affordable, and built for scale. Zenith Technologies helps startups 
              and businesses bring their software ideas to life with agile development and transparent pricing.
            </p>

            <SortableContainer dndKitId="c64d6166-4ef8-4e90-851c-8b74365a145b" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="330b2d61-4700-42c4-b18e-43bda00df9ba" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="b85aa1fe-b512-4166-87ab-ff1e9222d087" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-[#395c66] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-bold transition-all flex items-center space-x-2 shadow-sm" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5 text-[#395c66]" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Powered By Tech Stack - Integrated into Hero */}
          <SortableContainer dndKitId="795ac6b1-586a-431d-9284-9052ca990798" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="pt-16 space-y-6" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-400 uppercase tracking-wider" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
            
            {/* Tech Stack Carousel */}
            <SortableContainer dndKitId="cbd296ec-efdd-4d35-9584-087eccf47265" containerType="regular" prevTag="div" className="relative overflow-hidden max-w-4xl mx-auto" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex space-x-6 animate-scroll" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
                {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="697b4267-d2ff-4670-ac1b-8c4532cb64dc" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-5 py-2 bg-white border border-slate-200 rounded-lg hover:border-[#395c66] hover:shadow-md transition-all" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator - Now at the bottom of hero section */}
          <SortableContainer dndKitId="c4bf8fa0-5dc0-402e-9a91-7077037c5867" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="pt-12" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="d837d67c-7627-482d-b3a9-aa6b4381b0d5" containerType="regular" prevTag="motion.div" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="flex flex-col items-center gap-2" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-xs text-slate-400 uppercase tracking-wider" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">Scroll to explore</span>
              <SortableContainer dndKitId="d24be238-0a46-4ea2-94d2-af24e081b81b" containerType="regular" prevTag="div" className="p-3 bg-white backdrop-blur-sm border border-[#395c66]/20 rounded-full hover:bg-[#395c66]/5 hover:shadow-md transition-all" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
                <ChevronDown className="w-8 h-8 text-[#395c66]" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Most MVPs Fail */}
      <SortableContainer dndKitId="5ffb2aea-4576-4f48-b655-5e42c2a44fca" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="fb308098-5d9e-4ec4-9f39-5176af179c9d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="6677c607-140e-4511-a65e-752684122b48" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
              Most MVPs never make it<br data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-gray-400" data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">past launch — here's why</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="8e0e3a98-d31a-48cb-a0aa-6d68b4d28cc3" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl hover:border-red-400/40 transition-all" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
                  <reason.icon className="w-7 h-7 text-red-400" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-300" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach */}
      <SortableContainer dndKitId="30464f55-3990-4cc2-b8dd-5b2770e2f4aa" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b96b7e20-0477-4f7f-a579-4f5f3933da5f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="cb6ccc5e-db0b-4add-9f20-3b6b4bd8fc3a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
              Our approach turns ideas into<br data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#395c66] bg-clip-text text-transparent" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
                real, testable products — fast
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
              We follow a practical, sprint-based workflow designed for clarity, speed, and adaptability.
            </p>
          </SortableContainer>

          {/* Team Photo */}
          <SortableContainer dndKitId="23fe6404-c17c-474a-8f2c-fedd464c369f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="ed6bc2b0-4efb-4875-80bb-0d1d3d7b5dd7" containerType="regular" prevTag="div" className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden group" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Decorative border glow - Teal & Gold */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#395c66]/20 via-[#b8973f]/20 to-[#395c66]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Team Photo */}
              <SortableContainer dndKitId="bee1043f-a6f0-48b8-8616-5f41cc192bf4" containerType="regular" prevTag="div" className="relative border border-[#395c66]/20 rounded-3xl overflow-hidden shadow-2xl" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80" alt="Zenith Team Collaboration" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx" />
                
                {/* Caption overlay */}
                <SortableContainer dndKitId="ac4352c7-8439-4a2d-b68d-5d6040d65bc6" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-8 z-20" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="c926064e-f70d-4a4a-9c69-4db42944bf14" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-2" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
                    <Users className="w-5 h-5 text-[#395c66]" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="text-sm font-semibold text-[#395c66]" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">Our Team in Action</span>
                  </SortableContainer>
                  <p className="text-slate-900 text-lg font-medium" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
                    Collaboration, innovation, and execution — all under one roof
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="3c5180ca-bbe1-46e2-b078-d2fb44114565" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="relative p-8 bg-white border border-slate-200 hover:border-[#395c66]/30 rounded-2xl transition-all group hover:shadow-2xl hover:shadow-[#395c66]/10" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8 text-white" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                    <span className="text-6xl font-black text-slate-100" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-900" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="9b0b358e-e358-42ea-bbb3-31b95d502170" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="c788b2e3-801d-441c-80a4-4cb71cc0890d" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-[#395c66] hover:border-[#4a6d78] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-sm" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5 text-[#395c66]" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="6ef56fd2-0dd9-4f41-8da0-ac68749ceb94" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="27dd1d8a-246d-4913-b0f9-169a464da35e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="2ec14d3e-98af-4968-8824-ab17fb302d7f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
              The <span className="bg-gradient-to-r from-[#395c66] to-[#4a6d78] bg-clip-text text-transparent" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span> Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
              A small but focused team of developers, designers, and project managers — 
              united by one goal: building products that matter.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="cb7f50be-a25b-40f8-afc2-91732b6d3941" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative p-8 bg-gradient-to-br from-[#3d3d3d]/80 to-[#2d2d2d]/80 backdrop-blur-xl border border-[#395c66]/20 hover:border-[#395c66]/40 rounded-2xl transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
                  {/* Professional Face Image */}
                  <div className="mb-6" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} p-[2px] shadow-lg group-hover:shadow-2xl transition-all duration-300`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
                      <img src={member.image} alt={member.name} className="w-full h-full rounded-2xl object-cover" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="space-y-3" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                    <div data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`} data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="bio:unknown" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="mt-6 pt-6 border-t border-[#395c66]/20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
                    <button className="w-9 h-9 rounded-lg bg-[#395c66]/10 hover:bg-[#395c66]/20 border border-[#395c66]/20 hover:border-[#395c66]/40 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
                      <Github className="w-4 h-4 text-[#395c66]" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-[#395c66]/10 hover:bg-[#395c66]/20 border border-[#395c66]/20 hover:border-[#395c66]/40 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
                      <MessageSquare className="w-4 h-4 text-[#395c66]" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Recent Work */}
      <SortableContainer dndKitId="018351c5-a117-4a66-8ec2-187f5339656a" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="a3672cae-df5e-4c27-b617-6ae92bc4e2d2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="d4daf124-bea5-4169-90eb-aaeb3c2f4fa8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
              Recent <span className="text-gray-400" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
              A glimpse of what we've built for startups and growing businesses.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="dbb67de4-85cf-4bf0-a5e4-a134b9fb722e" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-2xl overflow-hidden border border-[#395c66]/20 hover:border-[#395c66]/40 transition-all" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d] via-[#2d2d2d]/50 to-transparent" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-[#395c66]/10 backdrop-blur-xl border border-[#395c66]/30 rounded-full text-xs font-medium text-[#395c66]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="205b34d3-b0be-4e22-9e56-75a8cfb9079b" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f0f5f6] to-[#e8f0f2]" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="0f053291-2b39-489b-ad5d-12e4395463d3" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="b7eae19d-e00e-4de8-ad30-2c4357e4a50c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
              Fair. Transparent.<br data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-[#b8973f] via-[#c9a550] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
                Predictable.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">
              Get instant pricing estimates — no hidden costs, just clear numbers.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="e784015b-e265-4e42-a59e-6adc14aaf775" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-white border border-[#395c66]/20 rounded-3xl shadow-2xl shadow-[#395c66]/10" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="c0dc6e4e-e6b0-4cef-ab59-29b36f95adac" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="a94f57aa-6107-4dc4-8523-2d299a7a829e" containerType="regular" prevTag="div" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="47ee6d2e-5e5d-444c-8fb8-8de09b1ff2c0" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-slate-700 font-medium" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-[#395c66]" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30 scale-110' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 hover:scale-105 text-slate-700'}`} data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="18333576-0e40-4caa-813f-e2802b5cc3b1" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full text-xs font-semibold text-[#395c66]" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="b70971fc-143a-4eab-9899-31beeb8173d8" containerType="regular" prevTag="div" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-slate-700 font-medium mb-4 block" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="1a3c4096-64e3-47cc-a297-f31921c262a7" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "5764a4c7-e1e0-40c1-9467-b8a994b4783b"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "d5f7188c-90f0-4be5-88df-d2e4342f0f43"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "c9bf5eff-d1be-45b1-8da5-f76d43744650"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-[#395c66] to-[#4a6d78] text-white shadow-lg shadow-[#395c66]/30' : 'bg-slate-100 border border-slate-200 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-white/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="e65abe8e-9905-4fb4-9d06-801290637975" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-[#395c66]/5 to-[#4a6d78]/5 border border-[#395c66]/20 rounded-2xl mb-6" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-[#b8973f] via-[#c9a550] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="435cfe59-0f96-431e-b862-f4a49d9f960d" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-slate-700 pt-4 border-t border-[#395c66]/20" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="255a50b5-0d63-4138-a816-3d2cc51aafa6" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-[#395c66]" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">Core Team + {teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="e64971ed-b83e-4fdf-9b0c-ee73b9c64a20" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-[#395c66]" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-slate-600 mt-4" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="7f4f0e5f-d2e3-4c3e-a065-0de2217e033c" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-slate-700" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="454c2fd1-cff4-4b63-a881-2b2cea8c7563" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="05511257-abc4-4c6c-80be-e2af77c18ac7" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="edd66ca5-d1c9-430c-a1b1-f03def18b47c" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] text-white rounded-lg font-bold transition-all shadow-lg shadow-[#395c66]/30" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border-2 border-[#395c66] hover:border-[#4a6d78] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-bold transition-all" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Consultation
              </button>
            </SortableContainer>

            <p className="text-center text-slate-600 text-sm mt-6" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
              <MessageSquare className="w-4 h-4 inline mr-2 text-[#395c66]" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx" />
              Don't know where to start? Let's have a quick talk — we'll help map out your MVP.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="0667a594-b06c-47aa-b44a-8e42e3988c48" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#395c66]/5 to-transparent" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9aae26f6-638a-42ec-aa5c-c5c554209ad9" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e4ba32ce-693c-4204-8213-7c483e2ede2e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently Asked <span className="text-gray-400" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">Questions</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="aef13516-db8f-466b-be47-a1571bffef95" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-[#3d3d3d]/60 backdrop-blur-xl border border-[#395c66]/20 rounded-xl overflow-hidden hover:border-[#395c66]/40 transition-all" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#395c66]/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#395c66]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>
                
                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="bd2d465f-cc79-4e48-8802-dd3c6d7b6657" containerType="regular" prevTag="section" className="relative py-32 px-6 bg-[#2d2d2d]" data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="53fbb414-e48b-4eaf-a637-9072d9c1134f" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="d877c2be-3f47-4d99-ab1b-7236b1da23d0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-[#395c66]/20 via-[#4a6d78]/20 to-[#b8973f]/10 backdrop-blur-xl border border-[#395c66]/30 rounded-3xl overflow-hidden text-center" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-[#395c66]/10 to-[#4a6d78]/10" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="c4117ac8-0ffe-45d6-9422-7759bfba810e" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="162f4b6d-417b-491d-b1f2-bf720b4b8469" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b8973f]/20 border border-[#b8973f]/30 rounded-full" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-[#b8973f]" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to bring your<br data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-[#395c66] via-[#4a6d78] to-[#b8973f] bg-clip-text text-transparent" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx">
                  idea to life?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx">
                Let's build your MVP and get it to market fast.
              </p>

              <SortableContainer dndKitId="7c7638df-8810-4b16-a74a-dbffc5eda9d1" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="8b65151d-841d-4b87-a9e6-7ad9fa6e3253" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-[#395c66] to-[#4a6d78] hover:from-[#4a6d78] hover:to-[#395c66] rounded-lg font-bold transition-all shadow-xl shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">Book a Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border border-[#395c66]/40 hover:border-[#395c66]/60 hover:bg-[#395c66]/10 rounded-lg font-bold transition-all" data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="1b471472-245f-45bf-aa28-f8704a1264dc" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-[#395c66]/20 bg-[#2d2d2d]" data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="61b18cc1-35eb-4a2d-813e-f6172c346d00" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="ef946d77-bee9-40e3-984e-630f4ed7067e" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="72d3d8d5-84fd-4b84-9db3-7f1470d4bd67" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="24d45b95-9255-4cb1-9cf2-aca70282a650" containerType="regular" prevTag="div" className="flex items-center h-10" data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">
                <img src="https://i.imgur.com/9YJlQZv.png" alt="Zenith Technologies" className="h-10 w-auto object-contain brightness-110" data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <p className="text-sm text-gray-400" data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">
                Turning startup ideas into successful products since 2015.
              </p>
            </SortableContainer>

            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting', 'Maintenance'],
            mpid: "e36e5cc3-9d5e-4b85-929f-d1bd63206a77"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "02bad9cc-fece-4107-a22a-a2bce0785326"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "57fb20bc-609c-4b1b-901c-672574dcf0a5"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4 text-[#395c66]" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="221" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="222" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="223" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="7ae0f77d-8a02-4b9b-9d65-0053b703f1a7" containerType="regular" prevTag="div" className="pt-8 border-t border-[#395c66]/20 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="225" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-400" data-magicpath-id="226" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="43e0754d-bd36-4b4d-a160-2508d69477fd" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="227" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="228" data-magicpath-path="ZenithPortfolio.tsx">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="229" data-magicpath-path="ZenithPortfolio.tsx">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#395c66] transition-colors" data-magicpath-id="230" data-magicpath-path="ZenithPortfolio.tsx">Cookie Policy</a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <style data-magicpath-id="231" data-magicpath-path="ZenithPortfolio.tsx">{`
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