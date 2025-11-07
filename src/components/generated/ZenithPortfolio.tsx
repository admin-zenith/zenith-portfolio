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
  mpid: "347c3fd9-b368-4aba-bdb5-a5614d1454da"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "09872b56-f4ca-44f3-90e8-7dea0f68b066"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "b947ec73-63ad-4dbc-a40f-5eb436ca007d"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "e11b1152-ecc1-4483-9711-6bf56c33fe99"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-blue-500 to-blue-600',
  mpid: "ff8c3a75-5bcb-4c8a-b66e-e878bd412e41"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-purple-500 to-purple-600',
  mpid: "86611b44-6174-4987-a808-e5ee65169c9d"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-emerald-500 to-emerald-600',
  mpid: "1dc3eb29-a718-4d37-84a3-cd36e8d2dada"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-amber-500 to-amber-600',
  mpid: "77e2e658-57aa-4f42-94d0-e3c3b46aa152"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  avatar: '👨‍💼',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  mpid: "173f2a6c-b69a-4c22-a2fc-d2ef2a9abe70"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  avatar: '👨‍💻',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  mpid: "3e5bdbf2-646d-471a-9e0b-dce6cf63c82f"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  avatar: '👩‍🎨',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  mpid: "f3fbbfad-5b67-4f26-9b5d-aadf3f5ec723"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  avatar: '👨‍🔬',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  mpid: "4af7433c-be75-4f99-af83-312167b6a9f8"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  avatar: '👩‍💻',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  mpid: "07636c4e-eea2-49ed-82bc-08d5f6fffba9"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-blue-500 to-cyan-500',
  mpid: "0b912ed1-a6ef-4936-bf24-7863970dd418"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-purple-500 to-pink-500',
  mpid: "a4923f8c-c3d5-4e79-b168-7a0b7789bbbc"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-emerald-500 to-teal-500',
  mpid: "0d3222d0-83e5-4f5d-9e3b-862c40f55353"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "be7567f4-b7bb-4cf0-a1cf-fd76e2c59311"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "ba826c2e-1a50-40c5-acc0-91ce41b2c3a4"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "b6f817ee-db67-405b-91c7-4f37cc00eea2"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "fdcf3980-fa27-426e-94fa-8815c4a397c2"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "f1249733-0ad1-4eed-a312-2b5874b64167"
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
    const roles = ['Full Stack Developer'];
    if (teamSize === 1) return roles;
    return Array(teamSize).fill('Full Stack Developer');
  };
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="7cbee795-f979-4104-b66d-d8eee9ec2083" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects */}
      <SortableContainer dndKitId="6590628e-adcd-4c22-9663-4468c26521db" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="785cd65f-df6c-4e98-96b8-9460ed6ba060" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="37dee399-21a5-4efc-945e-5b2cc4e0e0b7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e2e792c9-7213-49b5-9923-1684b0fdee47" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="b6271d59-8142-4210-baa7-1a0ad7ae58a5" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="82d16f4e-e565-4da5-a3f3-a8e320ebaeb2" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-xl font-bold" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              <span className="text-sm text-gray-400" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">Technologies</span>
            </SortableContainer>
            
            <SortableContainer dndKitId="3077ec26-a47e-4471-9aa0-00b63b43a106" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="3ad4dc3c-7461-47c1-bde7-c237ccd37a35" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="f9eee3fb-09dd-4b57-91fb-ad54c57581a0" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="a87eb764-50e9-4592-baf3-7bb0ab26b373" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="4822ab6b-8fca-4cfe-ad53-867b8f906009" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
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

            <SortableContainer dndKitId="f7e38be4-c0e3-47c3-b80d-1c4e80c5fdaf" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="19ee8de0-e0de-4235-a875-d43326f919ae" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="9cd0d30d-9a1b-4d45-a517-779860f80d4e" containerType="regular" prevTag="button" className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg font-bold transition-all flex items-center space-x-2" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator */}
          <SortableContainer dndKitId="2ff79f5e-883f-4e31-96c2-782fc9bdd07b" containerType="regular" prevTag="motion.div" animate={{
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
      <SortableContainer dndKitId="bbead861-daf4-4287-9e76-de03f3f4427c" containerType="regular" prevTag="section" className="relative py-20 px-6 border-y border-white/10" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="40caa32a-ae0b-4070-921b-c13588be05cd" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="d47a0c2c-cc6b-4da1-9bf2-960e5ec7f03e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mb-12" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-8" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
          </SortableContainer>

          {/* Tech Stack Carousel */}
          <SortableContainer dndKitId="a4df2be1-2651-4b37-9a23-eb136945d4c0" containerType="regular" prevTag="div" className="relative overflow-hidden" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="flex space-x-8 animate-scroll" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="23a4af3b-2b1e-4334-93a8-85d4ed1ad55f" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400/40 transition-colors" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="e0231409-a0f6-47ff-91c0-e91f114ef193" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="5ff3c146-36b4-4392-8847-e91b51778473" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f7f75839-126c-4ce5-bf41-dd6f5a88ff9a" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="1b6101c4-ea43-4317-befb-00bb0c707643" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="ed75f745-cf63-45d0-b7be-262248003f8a" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="272240c7-f4c5-491c-887b-bf7807466c23" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="67cd933a-4bd1-44a4-8367-6fdd624d8aba" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="8d1a9d7f-0036-4164-bb5d-b4eaa803c952" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
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

          <SortableContainer dndKitId="6ca065e8-c61d-409a-9e94-8ed873f1a735" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="3d8071fa-6929-474f-b0b4-89343006c83b" containerType="regular" prevTag="button" className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 rounded-lg font-semibold transition-all inline-flex items-center space-x-2" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="772b7406-47ce-4858-99db-83af45776d95" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="f4fc6580-424e-4c55-a734-443f40167f18" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="ef5123bb-dcbb-4e4f-b4c7-774006c7c03c" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="8d087ff9-bfa3-406f-b978-9a33aefd1ce1" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="16f18d99-7142-4117-af43-aa643a10042f" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c9c6810a-9bf6-46f3-a06b-def5172632aa" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="36904e4f-3c86-4308-a0f8-15e69651de6e" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="f00c4944-e406-46e3-82d1-20cc6d748907" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="e2c4c645-b0cc-4f7a-b7ce-7fe3e645cce8" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="96472026-a5ed-4cb4-9c41-8fc4ea3020e0" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5d18a483-7a86-4687-bb51-aaae59e4ba32" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="88144f1d-3767-4044-bb22-6ced9997c347" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="b0993cdf-c641-4a80-86f6-78181f0a6b6b" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size Selector */}
              <SortableContainer dndKitId="bb17b793-39c4-4ca5-8942-833493465ca1" containerType="regular" prevTag="div" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="cff33c36-d494-4baa-8a89-7881aded4c35" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-gray-300 font-medium" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">Team Size</label>
                  <span className="text-2xl font-bold text-blue-400" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                
                <div className="grid grid-cols-5 gap-3 mb-4" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-2xl transition-all ${teamSize === size ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 scale-110' : 'bg-white/5 border border-white/10 hover:border-white/20 hover:scale-105'}`} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>

                {/* Role Labels */}
                <SortableContainer dndKitId="cd9f7353-5b15-4183-8cd9-e32f0886b7b9" containerType="collection" prevTag="div" className="flex flex-wrap gap-2" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
                  {getRoleLabels().map(role => <span key={role} className="px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300" data-magicpath-uuid={(role as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                      {role}
                    </span>)}
                </SortableContainer>
              </SortableContainer>

              {/* Sprint Duration Selector */}
              <SortableContainer dndKitId="a545bf88-7b1a-4861-bb7b-d80ef78d61ee" containerType="regular" prevTag="div" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-gray-300 font-medium mb-4 block" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">Project Duration (Sprints)</label>
                <SortableContainer dndKitId="f3178cd2-669a-439b-aa77-dbc64d626cdb" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '1 Sprint',
                  weeks: '2 weeks',
                  mpid: "a233af14-21da-427b-baab-27a17cfa0922"
                }, {
                  value: 2,
                  label: '2 Sprints',
                  weeks: '4 weeks',
                  mpid: "72e1baf7-e7d0-4629-86c9-a61dcd450a8e"
                }, {
                  value: 4,
                  label: '4 Sprints',
                  weeks: '8 weeks',
                  mpid: "b92c5a33-5a71-41fc-8c03-8ab1065691d0"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30' : 'bg-white/5 border border-white/10 hover:border-white/20'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className="text-xs text-gray-400" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="weeks:unknown" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">{option.weeks}</div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="5e0715da-59ec-4b35-9876-f48e88fbeec8" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 rounded-2xl mb-6" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-4" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
                  ₱{calculatePrice()}
                </span>
              </p>
              
              {/* Team Composition Summary */}
              <SortableContainer dndKitId="70ff954a-a613-43cc-bb82-4126d66f57bd" containerType="regular" prevTag="div" className="flex items-center justify-center gap-6 text-sm text-gray-300 pt-4 border-t border-white/10" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="2e9d8bfa-bc6b-4195-b7f6-540e46f2a723" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-blue-400" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-gray-600" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="157c2ca9-0dc8-497c-8aad-d27cdcd7c4a7" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-purple-400" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks ({sprints} sprint{sprints > 1 ? 's' : ''})</span>
                </SortableContainer>
              </SortableContainer>
              
              <p className="text-xs text-gray-400 mt-4" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint (2 weeks)</p>
            </SortableContainer>

            <SortableContainer dndKitId="94ebbc32-e27f-440c-9116-c5292abdde40" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-gray-400" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="b87b0d64-25b9-4f67-80cc-687b62d84130" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="c07158cf-2198-407a-b08e-a7d7b61edcef" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="94c3d9b4-ade0-4c32-b83a-bf92f7ebdf4d" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="a41d4ba9-70ff-4f89-89ff-8a3f77163f0a" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="62554c6c-448d-4059-bb17-49519851b8be" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e4d304f7-114d-459f-97e5-d8ff6b822f21" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="758336d2-b598-496f-b6d3-0192a2f40a88" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="b7732dea-3947-4fd9-a81f-270e7ce9548e" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="82b52074-5132-4b55-b652-7f533a26f2a1" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f60e424e-839e-49fc-b352-9ae882f63dd9" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden text-center" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="7daa881b-d88b-4375-8da3-f668f0366d0f" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="c5477a42-78e0-4256-a926-eb44c999b204" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-emerald-400/30 rounded-full" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
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

              <SortableContainer dndKitId="6ef95e4a-f8fd-4ff4-82d0-4c1f4d322744" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="4d3a7b6b-aa1b-4060-91b7-daa6009fb89d" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="789946dd-3c75-437f-934e-cdfe62f19cc1" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-white/10" data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="809e1159-bfca-4ab8-968e-d6d0a68851b6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="7c157fce-f4f0-48b5-a43b-02d6db567081" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="06547605-e5ad-4fc9-818d-f8d977480d9f" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="a84aa0ff-6e21-431e-beb9-83deba6d4a76" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="9a84d6bd-36ea-4adc-9566-5632c76ed5f2" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">
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
            mpid: "0547c743-d82f-43ba-b906-b4448ed32962"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "c0e249a3-debe-4091-b826-e22cf12a0642"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "c7c7f749-9258-4407-921a-12eec2f4ca17"
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

          <SortableContainer dndKitId="f54d9b8c-2520-4c28-b27b-9356d1019b19" containerType="regular" prevTag="div" className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="202" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500" data-magicpath-id="203" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="abdee4dc-a05e-4d6e-832d-bbec9614ee96" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="204" data-magicpath-path="ZenithPortfolio.tsx">
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