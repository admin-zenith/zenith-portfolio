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
  mpid: "c7156342-01ee-4b01-9daf-5702df6efa30"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "7ff94758-2155-4a2b-969a-927b44768ef9"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "c8bd0737-bfbe-4dc2-a98e-4104403569d1"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "08ce0184-8c56-4a47-ac5b-69c15bc710fb"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-blue-500 to-blue-600',
  mpid: "62007fe3-57fd-4bde-b2c9-db7fa3f4782b"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-purple-500 to-purple-600',
  mpid: "eaf3c5ab-70b7-47b7-ade0-999a624f02e9"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-emerald-500 to-emerald-600',
  mpid: "6edd1d9e-4d12-442d-a39e-55378e24b22f"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-amber-500 to-amber-600',
  mpid: "82a631f3-59c3-429f-99c9-8ebb8f8af47d"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  avatar: '👨‍💼',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  mpid: "d15c5475-c83b-436f-bbdf-f54bd3cbd576"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  avatar: '👨‍💻',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  mpid: "97e7dc47-8bb8-490b-9d87-162bd5c9d45b"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  avatar: '👩‍🎨',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  mpid: "8b9c67c5-6f79-4f00-9527-dc83174df620"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  avatar: '👨‍🔬',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  mpid: "d044b743-7d7d-4154-97a1-5c21b743d078"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  avatar: '👩‍💻',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  mpid: "da6830e4-1c9c-43ed-b005-6512fc3ccb7d"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-blue-500 to-cyan-500',
  mpid: "df923105-3260-4c44-a6dd-8afb550161c6"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-purple-500 to-pink-500',
  mpid: "b59b951b-dcc5-4331-b464-2cd7fc3fb61e"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-emerald-500 to-teal-500',
  mpid: "63d33033-b60e-420f-95f4-5b08556b0303"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "a619e892-ac97-4a74-b453-cc517b23649b"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "9212d705-88a9-4f44-bb9e-055142b83f1d"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "c066b444-cffb-4773-82ac-d653a2a6c671"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "5f136930-983a-45fa-9bf2-dc4345595549"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "ea8f599c-e064-4bbe-b4e9-c648c02e42bc"
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
    const roles = ['Frontend', 'Backend', 'UI/UX', 'QA', 'AI/ML'];
    return roles.slice(0, teamSize);
  };
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="c532ea59-e293-4909-a1ca-35beb203546a" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects */}
      <SortableContainer dndKitId="f63b2d21-81bc-495d-afa6-18757d946d8e" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="ae9a6942-489f-4200-857a-7d35d36d9a8d" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="58f6b83e-d603-4a62-bffc-4f868214d4a7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="46e27132-6b30-4408-accf-786260b5116e" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="ee73382d-4aaf-47e0-9b18-715c1a9912fc" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="589d7e37-46db-42e9-8882-1dfb75bdee7a" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-xl font-bold" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              <span className="text-sm text-gray-400" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">Technologies</span>
            </SortableContainer>
            
            <SortableContainer dndKitId="28df9f9e-19f3-485e-947f-125b44a936e8" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#approach" className="text-gray-300 hover:text-white transition-colors" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">How We Work</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">Projects</a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">Team</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">FAQ</a>
            </SortableContainer>

            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/25" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
              Get Started
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="17e6b3b4-7252-4494-8390-c54dcf1e740c" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="418d7527-71c6-4437-baed-d7cebe6898a7" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="fb14356f-72c7-4e4a-ae7c-0b1ec0ee663c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="c4694ec7-a086-4b88-90bd-9c24cced0b8f" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in<br data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
                30–60 days
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch — fast, affordable, and built for scale. Zenith Technologies helps startups 
              and businesses bring their software ideas to life with agile development and transparent pricing.
            </p>

            <SortableContainer dndKitId="ce1b8164-97b4-46e4-ac45-86d3872b809a" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="08cd2fc4-c020-43de-ab37-94ad4fbd9475" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="059633cc-70d4-409e-a371-8bb8930917d9" containerType="regular" prevTag="button" className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg font-bold transition-all flex items-center space-x-2" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator */}
          <SortableContainer dndKitId="064e5b19-4acb-4c1b-a623-265ecac69f5e" containerType="regular" prevTag="motion.div" animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="absolute bottom-8 left-1/2 -translate-x-1/2" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
            <ChevronDown className="w-6 h-6 text-gray-400" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Powered By Section */}
      <SortableContainer dndKitId="63493afd-bade-4cdb-853c-bfcd75903110" containerType="regular" prevTag="section" className="relative py-20 px-6 border-y border-white/10" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="5268d55b-c2ec-4226-a678-d7e3f316059d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f579ff12-2f8d-44ac-bc4b-7eb3df8fb38c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mb-12" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-8" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
          </SortableContainer>

          {/* Tech Stack Carousel */}
          <SortableContainer dndKitId="03dced00-4ce0-4619-b7e0-b20a97d7e95d" containerType="regular" prevTag="div" className="relative overflow-hidden" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="flex space-x-8 animate-scroll" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="ec28f489-25ec-4ab0-9fb0-0d251cf810ac" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400/40 transition-colors" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-sm font-semibold text-gray-300 whitespace-nowrap" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>

          <p className="text-center text-gray-400 mt-12 max-w-3xl mx-auto" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
            We build with modern, battle-tested technologies trusted by leading startups.
          </p>
        </SortableContainer>
      </SortableContainer>

      {/* Why Most MVPs Fail */}
      <SortableContainer dndKitId="2b163a89-8587-4988-8911-c820a335df29" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="57471619-d256-4486-97be-7e14647f2846" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c4d035c7-68a9-48a9-8794-41211d8ac28a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
              Most MVPs never make it<br data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-gray-600" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">past launch — here's why</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="d685301c-c5fe-4fd3-9cba-46dc34ff5b48" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl hover:border-red-400/40 transition-all" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                  <reason.icon className="w-7 h-7 text-red-400" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-300" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach */}
      <SortableContainer dndKitId="5e51ca74-b955-4e71-8b86-039fec38b09d" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="4f2676f8-dc69-4a5e-9bb8-548c54dbe6e1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c0891493-3c39-4e0f-b32f-fc3055b5bd89" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
              Our approach turns ideas into<br data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
                real, testable products — fast
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
              We follow a practical, sprint-based workflow designed for clarity, speed, and adaptability.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="f68972f0-432f-49e4-92c9-bcd3168586fd" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl transition-all group" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="flex items-start justify-between mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
                      <step.icon className="w-8 h-8" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx" />
                    </div>
                    <span className="text-6xl font-black text-white/5" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="ee1be975-2364-4922-954d-e09496fa13f0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="58d3a937-5a08-420d-9e1e-a0684e539c15" containerType="regular" prevTag="button" className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 rounded-lg font-semibold transition-all inline-flex items-center space-x-2" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="8164e019-74e8-4fb0-ba4a-371985caa280" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b85f2b85-b70d-46eb-822f-5a6b3d657da6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e13a7377-29cc-4697-84eb-6db40aaa5aec" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
              The <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span> Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">
              A small but focused team of developers, designers, and project managers — 
              united by one goal: building products that matter.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="93b81717-a8ce-436e-b75f-ae3b99a09f5b" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/30 rounded-2xl transition-all" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="text-6xl mb-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="avatar:unknown" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">{member.avatar}</div>
                <h3 className="text-xl font-bold mb-1" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                <p className="text-sm font-medium text-blue-400 mb-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:unknown" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="bio:unknown" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">{member.bio}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Recent Work */}
      <SortableContainer dndKitId="38a01c90-4e38-46d5-b635-99d49b591ff4" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="52490a94-a4fc-4fbb-9d63-36a12007f76f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5e8d3556-3ac7-4f9c-ad72-d4f520cfe889" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
              Recent <span className="text-gray-600" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
              A glimpse of what we've built for startups and growing businesses.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="093f82cd-a262-40ae-920d-09695a668856" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-2xl overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-xs font-medium" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="d843d7d3-4120-40cc-8a4a-12d7c039b964" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9f001908-1d82-400f-addf-7ca4efd99db3" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c2e6145d-5423-4329-8221-14ceab40116c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
              Fair. Transparent.<br data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                Predictable.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
              Get instant pricing estimates — no hidden costs, just clear numbers.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="b4f8cee2-1424-4276-bec2-2bf765be092c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="8762cd50-9df6-40e9-8f5d-5d6720ea7be1" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="0a3d803b-756d-4baa-a728-c34ad9ea7243" containerType="regular" prevTag="div" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="2b740a9f-9efc-4a28-aa27-c5d8782eb41f" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-gray-300 font-medium" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-blue-400" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 scale-110' : 'bg-white/5 border border-white/10 hover:border-white/20 hover:scale-105'}`} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="07c6722f-012b-44da-b5f1-312cb7dd1db1" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="c2fe8ccc-15f3-435a-8b66-e0a66c9bd0bb" containerType="regular" prevTag="div" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-gray-300 font-medium mb-4 block" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="58a4ec33-06c3-48df-b0c7-1e4c9ac9297e" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "a750b0ba-8aef-40dd-8ccd-301322e3f07a"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "7d2c2ac8-0ba9-4981-82bb-d01e7967787f"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "f13f1cf9-9f70-451b-aead-fd77d660a3e5"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30' : 'bg-white/5 border border-white/10 hover:border-white/20'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className="text-xs text-gray-400" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="9a68dba1-607b-4734-8799-bc34b76da911" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 rounded-2xl mb-6" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="927e0733-aefc-4bbb-969b-6baec04bff86" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-gray-300 pt-4 border-t border-white/10" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="9dbdd430-6c27-4c95-b029-4a5e08fa040a" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-blue-400" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-gray-600" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="43eb8d52-6545-4a69-abc0-d58939e749ec" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-purple-400" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-gray-400 mt-4" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="cfd6f378-743d-4188-a427-5a3405a0dffb" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-gray-400" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="f82e42cc-7679-49af-ade8-d8d49f149787" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="f625010b-2214-400c-b62d-e4d8cd3502dc" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="89217119-ab17-491c-983e-d8f6612e7d31" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/30" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border border-white/20 hover:border-white/30 hover:bg-white/5 rounded-lg font-bold transition-all" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Consultation
              </button>
            </SortableContainer>

            <p className="text-center text-gray-400 text-sm mt-6" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
              <MessageSquare className="w-4 h-4 inline mr-2" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx" />
              Don't know where to start? Let's have a quick talk — we'll help map out your MVP.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="49b669d0-6732-4b9a-a990-c278c6a5b38b" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="4b0f2e79-a5c4-417f-98af-57e93c2bb1e4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="3f3b11f0-e912-4b29-bee7-d60020bb5920" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently Asked <span className="text-gray-600" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">Questions</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="1cb6acdb-65e9-4601-9954-2c8bdd5edeb8" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-blue-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>
                
                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="b2f627e1-3722-498e-90b3-913bc6a26cc3" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c0872771-8882-4695-b5ac-9da2eb709370" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="d96ec439-b98a-47a2-9b45-7142422748bd" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden text-center" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="8b2dc33e-2bb5-43ab-a527-a0f0b6b19825" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="d7f53934-31d6-44f3-a1c1-afb560196d69" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-emerald-400/30 rounded-full" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4 text-emerald-400" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-emerald-300" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to bring your<br data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx">
                  idea to life?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">
                Let's build your MVP and get it to market fast.
              </p>

              <SortableContainer dndKitId="e5b65a2d-10d2-453d-9b89-8db1dc8809c5" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="e7108776-f1c1-46e9-8b93-05f455294854" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">Book a Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border border-white/20 hover:border-white/30 hover:bg-white/5 rounded-lg font-bold transition-all" data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="f58a94bb-64cd-4609-9de4-3b82d7e33515" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-white/10" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="59bea585-2759-45fa-ad9d-74fe941eb838" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="10e47581-073b-4305-8647-3a0f1a01fc30" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="698454f4-8c1c-4631-b768-3e82647e5c0e" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="663dc128-9252-4837-a62a-261ac8ee343d" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="9ba69dd2-b234-4008-b4ad-c2a3a1a7f31f" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-6 h-6" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-xl font-bold" data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              </SortableContainer>
              <p className="text-sm text-gray-500" data-magicpath-id="196" data-magicpath-path="ZenithPortfolio.tsx">
                Turning startup ideas into successful products since 2015.
              </p>
            </SortableContainer>

            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting', 'Maintenance'],
            mpid: "fa79f9ab-80c1-43b4-9392-a72ba416fe17"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "07c0c549-3dce-436e-9aaa-aa5f0d5e3150"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "bb133b4e-5c89-465c-b2a2-c2fdae1ab698"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="198" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="74b948fe-52b0-4ccf-bf3d-684a904b2118" containerType="regular" prevTag="div" className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="4e45fbb3-f7b7-4753-b505-4a123814685f" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="205" data-magicpath-path="ZenithPortfolio.tsx">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="206" data-magicpath-path="ZenithPortfolio.tsx">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="207" data-magicpath-path="ZenithPortfolio.tsx">Cookie Policy</a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <style data-magicpath-id="208" data-magicpath-path="ZenithPortfolio.tsx">{`
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