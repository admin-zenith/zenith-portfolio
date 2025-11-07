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
  mpid: "0d657321-b628-4486-91df-0b85599ef5b1"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "3a1a3d60-c6d9-4121-8034-555288d32f0e"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "8a50871a-b4b6-40ce-bb9f-0b313ba7ec5c"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "3b56fd0d-e533-4c88-aeb9-2f397b316e97"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-blue-500 to-blue-600',
  mpid: "29fcc718-19df-4fa7-93f7-ec730b922b7a"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-purple-500 to-purple-600',
  mpid: "ca64d970-a98f-4658-bb41-c72fa9028c04"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-emerald-500 to-emerald-600',
  mpid: "a5223f7e-a6e4-467c-a8a2-92f8def544f6"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-amber-500 to-amber-600',
  mpid: "9e6400ce-d23f-46e0-b847-dcd33838a249"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  initials: 'GZ',
  gradient: 'from-amber-500 to-orange-600',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "50cfe56c-5bad-4f18-887d-072328095161"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  initials: 'AC',
  gradient: 'from-blue-500 to-cyan-600',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "62deca45-dd24-48c4-915b-e9d4d41df958"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  initials: 'SM',
  gradient: 'from-purple-500 to-pink-600',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "626e30f5-b074-4fab-bd72-e50e0a4e541c"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  initials: 'MK',
  gradient: 'from-emerald-500 to-teal-600',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "b5d161d2-766c-4865-a232-c16336699a57"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  initials: 'ET',
  gradient: 'from-rose-500 to-red-600',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  mpid: "9c35d856-1025-455a-ab00-c89f57491055"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-blue-500 to-cyan-500',
  mpid: "486b75ec-fdbf-40c3-827c-a47419622a09"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-purple-500 to-pink-500',
  mpid: "eda779fc-2091-4165-b8c6-262837659075"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-emerald-500 to-teal-500',
  mpid: "d561307d-a5d3-46de-bb26-b86a367f6643"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "acfa4a00-c4c3-4647-b827-db1b4faff5dc"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "6c36fa26-a14d-49be-9f6c-e9871ba49e7e"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "e7726149-0f07-4b44-884b-f93a4461b206"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "14abb7ce-3a9d-4db0-b546-43e73e4ccfd1"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "6a153b95-abb1-499f-b9ca-14b74c34d9c6"
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
  return <SortableContainer dndKitId="5be2ed66-f422-4b55-80fd-21b25b781e09" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects */}
      <SortableContainer dndKitId="dd3fb601-3a06-4b46-b682-47b943a8867b" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="6d491f99-4747-4cd0-a288-62a8308082f7" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="be44d64f-4a46-4059-ab83-3d839c541d5e" containerType="regular" prevTag="div" className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/20" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3c12bd8b-80b7-445c-81fa-cc97de6e2bf8" containerType="regular" prevTag="div" className="px-8 py-4" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="ce396e15-2443-401b-b51d-9fcacee8b085" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="a3eaa909-cd73-47f7-8e9e-a66ee1fefc7b" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="97cce30d-e3ed-485c-a76f-da183963ca63" containerType="regular" prevTag="div" className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 p-[2px]" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="a0b4195b-3888-4dfd-99e7-270ece2e99a5" containerType="regular" prevTag="div" className="w-full h-full rounded-full bg-black flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
                    <Rocket className="w-4 h-4 text-amber-400" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <span className="text-lg font-bold tracking-tight" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="ddbaf4ac-bd40-4465-8aee-fd788ab1b2b4" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-6" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="2d394c27-14ff-4577-a635-6e7fb371a096" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-purple-50" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
        {/* Light theme animated background effects */}
        <SortableContainer dndKitId="1f5febf7-958f-4007-ab58-35085d52a557" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="3b9fedb3-2f1c-4451-8d1d-ed57c7a0abb8" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="87165c7a-5572-4266-b343-79000bfccb0d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="e813e9d7-055f-4c5e-9811-32dacb9cec72" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-8" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-slate-900" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in<br data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
                30–60 days
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch — fast, affordable, and built for scale. Zenith Technologies helps startups 
              and businesses bring their software ideas to life with agile development and transparent pricing.
            </p>

            <SortableContainer dndKitId="3209d460-8dfb-45ee-8771-a639f2611572" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="35cbec15-d1b6-4a0b-b518-16c2e1ec4e7e" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="e0e936e3-b143-474b-8957-278c5deef87e" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 rounded-lg font-bold transition-all flex items-center space-x-2 shadow-sm" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Powered By Tech Stack - Integrated into Hero */}
          <SortableContainer dndKitId="4ce1c6ec-4527-4f1f-83f1-fc8a0f7d3f90" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="b98a7469-575a-4be9-af54-0b2a62261e99" containerType="regular" prevTag="div" className="relative overflow-hidden max-w-4xl mx-auto" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex space-x-6 animate-scroll" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="5271bf88-3689-4b85-8343-c00607531b5b" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-5 py-2 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                  </SortableContainer>)}
              </div>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator - Now at the bottom of hero section */}
          <SortableContainer dndKitId="b91d9b2c-131b-4c98-96b8-87843e0191d4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="pt-12" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="bd72c1d1-c55b-495d-bf68-2cba556ba28a" containerType="regular" prevTag="motion.div" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="flex flex-col items-center gap-2" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
              <span className="text-xs text-slate-400 uppercase tracking-wider" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">Scroll to explore</span>
              <SortableContainer dndKitId="addc2492-563d-47d3-b48a-25cababc4e08" containerType="regular" prevTag="div" className="p-3 bg-white backdrop-blur-sm border border-slate-200 rounded-full hover:bg-slate-50 hover:shadow-md transition-all" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
                <ChevronDown className="w-8 h-8 text-blue-600" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Most MVPs Fail */}
      <SortableContainer dndKitId="da1b7040-595a-4d20-86a9-a8fbcc22694d" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="a9d2e21f-811b-4995-9799-f93102e37694" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="d2c30376-fc44-4e86-91be-f08343c820e8" containerType="regular" prevTag="motion.div" initial={{
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
              <span className="text-gray-600" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">past launch — here's why</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="801e7d97-7e8b-4a11-bebb-58d1879ae280" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="cba244f1-3d94-4312-a910-ad98255bcb5e" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="92ff7053-e3b4-4150-b135-68d27d3792f0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="804023ed-64f7-4887-80c5-72767107ed23" containerType="regular" prevTag="motion.div" initial={{
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
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                real, testable products — fast
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
              We follow a practical, sprint-based workflow designed for clarity, speed, and adaptability.
            </p>
          </SortableContainer>

          {/* Team Photo */}
          <SortableContainer dndKitId="aab95699-06d2-48c5-a8a2-3365a57039bd" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="7226ceea-3d67-4e60-b991-726d0ecba07c" containerType="regular" prevTag="div" className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden group" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Decorative border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx" />
              
              {/* Team Photo */}
              <SortableContainer dndKitId="64ab7438-3e65-45b9-9776-9f90a74ae0e1" containerType="regular" prevTag="div" className="relative border border-slate-200 rounded-3xl overflow-hidden shadow-2xl" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80" alt="Zenith Team Collaboration" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx" />
                
                {/* Caption overlay */}
                <SortableContainer dndKitId="0aadaa68-3f60-4c55-a4cb-c11240b33382" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 p-8 z-20" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="5e3289da-d2b9-4da6-91b6-1ae52d078219" containerType="regular" prevTag="div" className="flex items-center space-x-3 mb-2" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
                    <Users className="w-5 h-5 text-blue-600" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx" />
                    <span className="text-sm font-semibold text-blue-700" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">Our Team in Action</span>
                  </SortableContainer>
                  <p className="text-slate-900 text-lg font-medium" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
                    Collaboration, innovation, and execution — all under one roof
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="2e637782-5d97-4f83-ab9c-63108b126e24" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="relative p-8 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl transition-all group hover:shadow-2xl" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
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

          <SortableContainer dndKitId="d43733cf-258b-4759-a193-2d1accb930e9" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="ffedc62b-9ea4-44f5-8998-6a1afe037c5b" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-sm" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="2ffe00e9-4a45-46ab-8f8d-b651ac30f1ad" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="05582f03-8c4a-42b4-8f6c-d6aff6cfc6e1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5f2a8e42-02ad-4ef9-b12d-753efbecf0c0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
              The <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span> Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
              A small but focused team of developers, designers, and project managers — 
              united by one goal: building products that matter.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="6b7808ea-4725-4022-ade0-8dff3b8dfb4c" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
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
                  
                  {/* Social Links - optional enhancement */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                    <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
                      <Github className="w-4 h-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
                      <MessageSquare className="w-4 h-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx" />
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Recent Work */}
      <SortableContainer dndKitId="50ceec60-76ea-4c73-a089-6e22bf33cbfa" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9627f6a4-939c-4c8c-baa8-8acb71cc0b92" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="8e144c76-958e-4d62-99eb-0838485af95c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
              Recent <span className="text-gray-600" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
              A glimpse of what we've built for startups and growing businesses.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="fcad2cd2-f263-4f0e-a3b2-28ee59601259" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-2xl overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-xs font-medium" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="187cab54-bef4-44d6-963b-e66c2f15ab3c" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="516c428b-d8e6-46d0-b1a5-ee207bea527b" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="2a7d3e2f-0929-4cc9-b6c7-c25e59f58dde" containerType="regular" prevTag="motion.div" initial={{
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
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
                Predictable.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
              Get instant pricing estimates — no hidden costs, just clear numbers.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="3c52bef7-d6f7-4db3-882e-db0ce23340de" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-white border border-slate-200 rounded-3xl shadow-2xl" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="fd592a81-4b69-4965-aae9-6d90037d8215" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="a06c6d06-e576-4bbf-9eee-43755172fa13" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="54f1ee2e-f7dc-4f3f-b203-87adff31f0b0" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-slate-700 font-medium" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-blue-600" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-110' : 'bg-slate-100 border border-slate-200 hover:border-slate-300 hover:bg-slate-200 hover:scale-105 text-slate-700'}`} data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="10c2470d-bbea-4549-8b56-f5962004166b" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-700" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="a5d3ea3f-0388-49c5-81a7-776ec3d95282" containerType="regular" prevTag="div" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-slate-700 font-medium mb-4 block" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="b5de3ebf-de58-4a3c-8685-693def1ef29c" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "7692feb6-9b50-46f6-bbe3-1eb35f499169"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "a399b127-7232-4641-bdcb-160d70eec67f"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "e9c26fdb-a6a9-4adb-b113-1508ea3f2885"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 border border-slate-200 hover:border-slate-300 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-blue-100' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="7191afd6-0af2-463d-a9e2-4be20584b313" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl mb-6" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="986c60de-7f5e-465f-a76f-6ccabc4907f9" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-slate-700 pt-4 border-t border-slate-200" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="fd297296-e41c-4940-a1f5-cdb493ca7f51" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-blue-600" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">Core Team + {teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="92ad8e9d-45e2-42e0-9b57-655bb6134e25" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-purple-600" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-slate-600 mt-4" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="d165f84c-b684-4c90-879f-dfc067009930" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-slate-700" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="7c0ce78b-4d51-49d4-aeea-232879a86565" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="f8949a0c-064c-4520-a3ba-bfc235c0c21f" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="3fa2a348-d5fc-4135-a465-3649df836bb1" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-500/30" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 rounded-lg font-bold transition-all" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Consultation
              </button>
            </SortableContainer>

            <p className="text-center text-slate-600 text-sm mt-6" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
              <MessageSquare className="w-4 h-4 inline mr-2" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx" />
              Don't know where to start? Let's have a quick talk — we'll help map out your MVP.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="a2ac6b01-c1fe-4ddf-98f0-22b2e02e4831" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="d5939245-3f97-446b-b572-0828cf62bf27" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="2636e828-3c66-4f2e-862b-54d97a1fc9ed" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently Asked <span className="text-gray-600" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">Questions</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="3b3b45fc-342d-4f15-af8e-15a9d1780a75" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-blue-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx" />}
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
      <SortableContainer dndKitId="ca87c35c-d8c2-4afa-a3c6-1952ddb2092d" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9605861c-ee1d-44bd-b870-ac637b124ee8" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="4af08c47-12b7-40c5-a624-afb829928495" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden text-center" data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="9631fbb5-7beb-4b4e-8bff-c1c91b93c451" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="92c81085-ba94-4757-afc1-2fc4c1fc5c34" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-emerald-400/30 rounded-full" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4 text-emerald-400" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-emerald-300" data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to bring your<br data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">
                  idea to life?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="209" data-magicpath-path="ZenithPortfolio.tsx">
                Let's build your MVP and get it to market fast.
              </p>

              <SortableContainer dndKitId="07f7d271-cc13-4fb2-8c85-584b28c9b3f4" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="210" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="12a0a84c-fc22-4da7-92be-bfce58621f00" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="211" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="212" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="213" data-magicpath-path="ZenithPortfolio.tsx">Book a Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border border-white/20 hover:border-white/30 hover:bg-white/5 rounded-lg font-bold transition-all" data-magicpath-id="214" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="5c960a28-1b0f-4dca-a27a-3c353ba8a0b4" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-white/10" data-magicpath-id="215" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="67cf9e5b-d4cd-4c95-8983-e79088bbeba8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="216" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="1a7861d5-d942-473e-8cfd-79a6c135e000" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="217" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="815f38fa-0d49-4cba-8d1f-782709b45279" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="218" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="93d89db6-7c46-41b2-b46e-154477027597" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="219" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="b839ca36-1ff8-408f-b1d7-58ea808709e3" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="220" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-6 h-6" data-magicpath-id="221" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-xl font-bold" data-magicpath-id="222" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              </SortableContainer>
              <p className="text-sm text-gray-500" data-magicpath-id="223" data-magicpath-path="ZenithPortfolio.tsx">
                Turning startup ideas into successful products since 2015.
              </p>
            </SortableContainer>

            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting', 'Maintenance'],
            mpid: "179df345-919e-46a4-8617-c1990a7db9ee"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "0eaa0698-66fd-47d7-aea2-f419469a10f6"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "ca1ed729-e2c4-4755-8918-c385403366c8"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="225" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="227" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="228" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="4a195379-4e5a-40cd-912f-5eaf5b5b0a6a" containerType="regular" prevTag="div" className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="229" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500" data-magicpath-id="230" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="dcad7bba-d84b-4232-9821-d76f00a39f89" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="231" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="232" data-magicpath-path="ZenithPortfolio.tsx">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="233" data-magicpath-path="ZenithPortfolio.tsx">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="234" data-magicpath-path="ZenithPortfolio.tsx">Cookie Policy</a>
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