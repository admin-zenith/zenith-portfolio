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
  mpid: "9afb9e29-5af9-4f54-8f66-b64c9befc818"
}, {
  icon: XCircle,
  title: 'Poor user experience',
  description: 'The MVP works but users don\'t enjoy using it.',
  mpid: "651b53a4-33c3-4125-a937-8eae473aa227"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated scope',
  description: 'Building too much, too soon drains time and budget.',
  mpid: "d511d63d-a221-42fd-874c-4845beec58da"
}, {
  icon: RefreshCw,
  title: 'Lack of iteration',
  description: 'MVPs are launched but never improved.',
  mpid: "839263d8-9b4b-4d7f-aad2-834fb98ce18e"
}] as any[];

// Our Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover & Define',
  description: 'We identify your target users, goals, and key features.',
  icon: Target,
  color: 'from-blue-500 to-blue-600',
  mpid: "868fe87a-dbad-46d6-b9b7-c99792455c7e"
}, {
  number: '02',
  title: 'Design & Prototype',
  description: 'We create clean, functional interfaces in Figma to validate flow.',
  icon: Palette,
  color: 'from-purple-500 to-purple-600',
  mpid: "3326de32-c139-4820-a1dc-c81b1d0a31ae"
}, {
  number: '03',
  title: 'Develop & Launch',
  description: 'We build your MVP using scalable frameworks and best practices.',
  icon: Code2,
  color: 'from-emerald-500 to-emerald-600',
  mpid: "869ea552-fedf-4fe0-b4f0-f2de7cf29285"
}, {
  number: '04',
  title: 'Iterate & Improve',
  description: 'After launch, we refine based on feedback and user data.',
  icon: TrendingUp,
  color: 'from-amber-500 to-amber-600',
  mpid: "eaed32da-8a7e-4706-b4d9-599cbb19c218"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder / Project Manager',
  avatar: '👨‍💼',
  bio: 'Seasoned project leader with 10+ years turning startup ideas into successful products.',
  mpid: "7ae60cf2-d079-4885-8cb0-803ed8ada637"
}, {
  name: 'Alex Chen',
  role: 'Senior Software Engineer',
  avatar: '👨‍💻',
  bio: 'Full-stack expert specializing in rapid MVP development and scalable architecture.',
  mpid: "a67c4916-b9be-42e5-b56b-15d14dabc597"
}, {
  name: 'Sarah Martinez',
  role: 'Lead UI/UX Designer',
  avatar: '👩‍🎨',
  bio: 'Design thinking specialist creating intuitive experiences users love.',
  mpid: "2ceab97d-e261-4bc1-83e5-75d1d1f3ec05"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  avatar: '👨‍🔬',
  bio: 'Ensures every line of code meets the highest quality and performance standards.',
  mpid: "fa1789b0-924b-4fae-9ee7-4b893f8e8bef"
}, {
  name: 'Emma Thompson',
  role: 'AI Developer',
  avatar: '👩‍💻',
  bio: 'Integrating cutting-edge AI solutions to give your product a competitive edge.',
  mpid: "b0e8b9a5-6086-48af-b9fd-11b4c62d711f"
}] as any[];

// Recent Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered platform for property search and renovation planning.',
  tags: ['AI/ML', 'Real Estate', 'Next.js'],
  image: '🏡',
  gradient: 'from-blue-500 to-cyan-500',
  mpid: "29e17ec6-e279-425d-af4b-5fbcd5b3c02c"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce and live selling platform.',
  tags: ['eCommerce', 'Live Streaming', 'Laravel'],
  image: '🛒',
  gradient: 'from-purple-500 to-pink-500',
  mpid: "ccec5e0e-f1e3-4f22-84db-5dfb407c704c"
}, {
  title: 'ClinicPro',
  description: 'Smart clinic booking and patient record management system.',
  tags: ['Healthcare', 'Booking', 'React'],
  image: '🏥',
  gradient: 'from-emerald-500 to-teal-500',
  mpid: "8b71808a-099d-4ef5-a1ad-593cfec33979"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take between 30–60 days depending on complexity and scope. We work in agile sprints to ensure rapid delivery without compromising quality.',
  mpid: "b694b1fc-ceb8-465b-ac4f-317ce2c2865b"
}, {
  question: 'What\'s included in your MVP package?',
  answer: 'Project management, UI/UX design, front-end and back-end development, testing, deployment, and basic support. We handle everything from initial planning to launch.',
  mpid: "451febbf-9806-4981-af3d-03344b04e504"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Yes — all our projects are built with scalability in mind so you can easily expand. We use modern, maintainable architectures that grow with your business.',
  mpid: "34f1f62c-5efd-4e17-a908-cedbaf08a2cb"
}, {
  question: 'Do you work with international clients?',
  answer: 'Absolutely. We collaborate remotely using tools like Slack, Notion, and GitHub. We\'ve successfully delivered projects for clients across multiple time zones.',
  mpid: "b47d0595-5aaf-4c28-829e-8b300ffec10e"
}, {
  question: 'What happens after the MVP is launched?',
  answer: 'We offer ongoing support and iteration packages. Based on user feedback and analytics, we help you continuously improve and add features to achieve product-market fit.',
  mpid: "14219b43-dff8-475f-9a15-681bd9333be4"
}] as any[];
export const ZenithPortfolio = (props: ZenithPortfolioProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [developers, setDevelopers] = useState(2);
  const [duration, setDuration] = useState(1); // in months

  const {
    scrollYProgress
  } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Pricing Calculator
  const calculatePrice = () => {
    const baseRate = 3500; // per developer per month
    const total = developers * duration * baseRate;
    return total.toLocaleString();
  };
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="d147c806-caa2-4c31-a08f-a409e5b3b7f5" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated background effects */}
      <SortableContainer dndKitId="8a12955f-6e5b-4072-a2d3-f49b5db1dcf7" containerType="regular" prevTag="div" className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      {/* Navigation */}
      <SortableContainer dndKitId="46f03922-339d-4a98-8b9f-31fcc72098e6" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="9c4725e3-c805-4865-8e46-ab1a815478e4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="1766cc3b-337c-488b-9c2f-5846cbc0fd35" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="899294c8-1339-4a59-9e44-7e2f08827d05" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="81550d90-d30e-4e8c-866f-80b7163d864c" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-xl font-bold" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              <span className="text-sm text-gray-400" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">Technologies</span>
            </SortableContainer>
            
            <SortableContainer dndKitId="a1768da6-b2e8-4e84-85de-ea1bc637d56d" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="540d5320-b261-4793-bf89-f75b1129e022" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="8adb377d-1539-4d3a-9bcf-54042910298a" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity,
        scale: heroScale
      }} className="max-w-6xl mx-auto text-center space-y-8 relative z-10" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="0d1f3e93-a4e2-4d0d-bee2-70eeae4835e8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="31b7ed4b-8460-401d-8644-d7ead7a62a77" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
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

            <SortableContainer dndKitId="1b4d99d2-e5aa-44e0-8d41-0febfcdc284b" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="7e8ab3a0-b726-441c-92f3-a811db02352b" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="8ca18041-d037-4223-b783-b7a9b397e29b" containerType="regular" prevTag="button" className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg font-bold transition-all flex items-center space-x-2" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">Schedule a Consultation</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Scroll Indicator */}
          <SortableContainer dndKitId="262abc6a-0258-483e-a3ea-2ab8379b604f" containerType="regular" prevTag="motion.div" animate={{
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
      <SortableContainer dndKitId="2bc2b1d3-ebd5-4b1f-a250-874749b4ca6a" containerType="regular" prevTag="section" className="relative py-20 px-6 border-y border-white/10" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="b74c9dac-79eb-4c94-9f8b-eb93c6d9e828" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="fdb9d831-28c7-48b3-aa51-78514fba45f8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mb-12" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-8" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
          </SortableContainer>

          {/* Tech Stack Carousel */}
          <SortableContainer dndKitId="3494df5b-019a-4af5-bc2f-7c367db128f2" containerType="regular" prevTag="div" className="relative overflow-hidden" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="flex space-x-8 animate-scroll" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              {[...techStack, ...techStack].map((tech, i) => <SortableContainer dndKitId="f11de2c1-fd53-4de3-b961-397d503bfad2" containerType="regular" prevTag="div" key={i} className="flex-shrink-0 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400/40 transition-colors" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
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
      <SortableContainer dndKitId="a36f13e7-d03e-468d-9d87-e6cc3b8eb37b" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="f71932b0-d991-4b38-8700-6eb978405c54" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="cba1a730-7119-4f93-b39f-9d63dd9e3840" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="c572c0c2-cedf-4f62-9760-6d01f62ae02c" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
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
                <h3 className="text-xl font-bold mb-3 text-red-300" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach */}
      <SortableContainer dndKitId="578d5963-2dfd-475c-bfe7-25acc7236f2c" containerType="regular" prevTag="section" id="approach" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="ac077ad9-e7f3-4f8c-b94b-acbb04bfdaf7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="082a8b4f-763e-4223-9f12-34b0073c4fa8" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="3712288c-19c1-42c7-a695-e9853e6d5b1f" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-8 mb-12" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
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
                    <span className="text-6xl font-black text-white/5" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:string" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="194b19e4-e2b7-4b5c-9ec9-6e7f05473efb" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="0362f213-3bf8-4920-ba05-4372f89654ce" containerType="regular" prevTag="button" className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 rounded-lg font-semibold transition-all inline-flex items-center space-x-2" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
              <span data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">See how we work</span>
              <ArrowRight className="w-5 h-5" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Meet the Team */}
      <SortableContainer dndKitId="f3eef003-d97f-4e3c-bcc6-f5679ab11b31" containerType="regular" prevTag="section" id="team" className="relative py-32 px-6" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="8e8eb779-52cb-4e74-aaf8-882df47cf8e2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="0d231f69-6d04-4f10-aee2-b5715e5b5a24" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="4a467337-f98e-4df9-b806-b0e629ce4437" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
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
                <div className="text-6xl mb-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="avatar:string" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">{member.avatar}</div>
                <h3 className="text-xl font-bold mb-1" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                <p className="text-sm font-medium text-blue-400 mb-4" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:string" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="bio:string" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">{member.bio}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Recent Work */}
      <SortableContainer dndKitId="8fbb5fa0-8877-4a9c-9093-27f9e6545548" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="13bcc753-2b89-4142-8b86-062cb2ad7d37" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f2f004ce-6512-4bef-aaad-8e631e8632bf" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="3f3902a7-bb42-4b7b-b840-558159e6833e" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
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
                  <div className="text-7xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-2xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                    
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
      <SortableContainer dndKitId="d3a9bec7-c926-470f-a23d-53660414e14a" containerType="regular" prevTag="section" id="pricing" className="relative py-32 px-6" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="61067a54-1849-4765-91c0-32a894e031a2" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c255b573-0f10-4da3-bf1e-683c7bd557b5" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="a7ea3b4c-183a-49b9-846e-6779ab575962" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">Quick Price Estimator</h3>
            
            <SortableContainer dndKitId="e788089e-d77e-44f5-a2b3-4a9992f5d0b7" containerType="regular" prevTag="div" className="space-y-8 mb-12" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Developers Slider */}
              <SortableContainer dndKitId="cbd9f2ea-a050-4c4f-a378-61c0142cd775" containerType="regular" prevTag="div" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="02df6971-83cf-44ae-8e16-cde6719c92b9" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="text-gray-300 font-medium" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">Number of Developers</label>
                  <span className="text-2xl font-bold text-blue-400" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">{developers}</span>
                </SortableContainer>
                <input type="range" min="1" max="5" value={developers} onChange={e => setDevelopers(parseInt(e.target.value))} className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer slider" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>

              {/* Duration Selector */}
              <SortableContainer dndKitId="826325b5-6537-4056-971a-367034781981" containerType="regular" prevTag="div" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="text-gray-300 font-medium mb-4 block" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">Project Duration</label>
                <SortableContainer dndKitId="0db5b18c-482c-46a4-8887-0e021e96bb54" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 0.5,
                  label: '2 Weeks',
                  mpid: "4ac73a79-1bdc-4abf-95d3-e66bb7ef7398"
                }, {
                  value: 1,
                  label: '1 Month',
                  mpid: "bf35601a-c6c5-4426-a9bf-faa58a96121f"
                }, {
                  value: 2,
                  label: '2 Months',
                  mpid: "2a3a8c53-e3bf-486e-b629-417cee082a26"
                }].map(option => <button key={option.value} onClick={() => setDuration(option.value)} className={`py-4 rounded-lg font-semibold transition-all ${duration === option.value ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30' : 'bg-white/5 border border-white/10 hover:border-white/20'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                      {option.label}
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="4d4179fa-89ed-4726-83c0-7aac24a0468e" containerType="regular" prevTag="div" className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 rounded-2xl" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">Estimated Investment</p>
              <p className="text-5xl font-black mb-2" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
                  ${calculatePrice()}
                </span>
              </p>
              <p className="text-sm text-gray-400" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">* Base estimate, final price depends on scope</p>
            </SortableContainer>

            <SortableContainer dndKitId="38e6329e-6d88-4b6b-8ce4-b6cec54860d1" containerType="regular" prevTag="div" className="mt-8 space-y-4 text-sm text-gray-400" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="fc7ae932-0ad1-4e80-8753-7da7f23629c8" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">Every project starts with a free consultation to define your scope and timeline.</p>
              </SortableContainer>
              <SortableContainer dndKitId="58ed7ac2-e757-4995-b97b-33d28a2f01fd" containerType="regular" prevTag="div" className="flex items-start space-x-3" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx" />
                <p data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">Pay only for active development time — no extra charges for revisions or meetings.</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="fa8a612f-8224-4a2d-9460-c06971169dad" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 mt-8" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/30" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border border-white/20 hover:border-white/30 hover:bg-white/5 rounded-lg font-bold transition-all" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
                Schedule Consultation
              </button>
            </SortableContainer>

            <p className="text-center text-gray-400 text-sm mt-6" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
              <MessageSquare className="w-4 h-4 inline mr-2" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx" />
              Don't know where to start? Let's have a quick talk — we'll help map out your MVP.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="8c457e82-3db8-4675-9728-7835d4b25d07" containerType="regular" prevTag="section" id="faq" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="da788a0d-eb40-4707-a094-6e5895585cc7" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f3339e83-60c9-4937-acbc-5a8960f2a2db" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently Asked <span className="text-gray-600" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">Questions</span>
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="f3bbcbad-f75e-46df-a987-be5fcc3ad982" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold text-lg pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:string" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-blue-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>
                
                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-8 pb-6 text-gray-400 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:string" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="81918dfe-cde0-429b-8664-728af4461513" containerType="regular" prevTag="section" className="relative py-32 px-6" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="2662cc2c-1d4c-417c-8c67-7175d04afbf8" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f45b1a33-6246-477f-a573-29cfdcae7b67" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-16 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden text-center" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <SortableContainer dndKitId="5ee2d9c6-89b6-4a18-b17e-85c9c9ff0562" containerType="regular" prevTag="div" className="relative space-y-8" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="a5f5ac6b-d6e3-404f-a6c0-2b3d34670b34" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-emerald-400/30 rounded-full" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                <Rocket className="w-4 h-4 text-emerald-400" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-emerald-300" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
              </SortableContainer>

              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to bring your<br data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
                  idea to life?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
                Let's build your MVP and get it to market fast.
              </p>

              <SortableContainer dndKitId="7c432701-9ec9-4b4f-af51-88d43ddad7e3" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="66d5a546-4d5e-4ce8-9e38-4bc4d7315957" containerType="regular" prevTag="button" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/30 flex items-center space-x-2" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
                  <Calendar className="w-5 h-5" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">Book a Free Consultation</span>
                </SortableContainer>
                <button className="px-8 py-4 border border-white/20 hover:border-white/30 hover:bg-white/5 rounded-lg font-bold transition-all" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">
                  Get a Quote
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="91ccd2a5-0b2b-4bbd-a640-31cb3d94c4ee" containerType="regular" prevTag="footer" className="relative py-16 px-6 border-t border-white/10" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="cce84cb4-c300-4e13-be8b-2b5d21399f8f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="b949bc2f-f18b-4fb0-802a-f7a5bd1fa9c8" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="b3c9c94d-1990-4a28-93a0-049ae8ce29e8" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="aecfcf5a-85a5-4b00-bc2b-7a652b1e50a3" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="5cfb57b2-7755-4f3d-ab28-fe1aac91ead1" containerType="regular" prevTag="div" className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-magicpath-id="180" data-magicpath-path="ZenithPortfolio.tsx">
                  <Rocket className="w-6 h-6" data-magicpath-id="181" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <span className="text-xl font-bold" data-magicpath-id="182" data-magicpath-path="ZenithPortfolio.tsx">Zenith</span>
              </SortableContainer>
              <p className="text-sm text-gray-500" data-magicpath-id="183" data-magicpath-path="ZenithPortfolio.tsx">
                Turning startup ideas into successful products since 2015.
              </p>
            </SortableContainer>

            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting', 'Maintenance'],
            mpid: "45117c96-7197-4dc5-a617-3abaef03f2f5"
          }, {
            title: 'Company',
            links: ['About Us', 'Team', 'Careers', 'Contact'],
            mpid: "d98cddd6-ad7a-444d-8e42-76720a40d321"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
            mpid: "094a0abc-1c65-4870-847a-954348253279"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="184" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="185" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="186" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="187" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="188" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="8e8428d1-a6ac-4421-b5b9-c79d506165a9" containerType="regular" prevTag="div" className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="189" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500" data-magicpath-id="190" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <SortableContainer dndKitId="0fbefdef-8458-473e-aa7d-95f1a872b092" containerType="regular" prevTag="div" className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="191" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="192" data-magicpath-path="ZenithPortfolio.tsx">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="193" data-magicpath-path="ZenithPortfolio.tsx">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors" data-magicpath-id="194" data-magicpath-path="ZenithPortfolio.tsx">Cookie Policy</a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <style data-magicpath-id="195" data-magicpath-path="ZenithPortfolio.tsx">{`
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