"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ArrowRight, CheckCircle2, Code2, Palette, Zap, BarChart3, Users, Clock, DollarSign, Calendar, MessageSquare, Github, Figma, ChevronDown, ChevronUp, Target, TrendingUp, XCircle, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';
type ZenithPortfolioProps = Record<string, never>;

// Tech Stack
const techStack = ['Laravel', 'React', 'Next.js', 'Node.js', 'Tailwind', 'MySQL', 'AWS', 'TypeScript'];

// Failure Reasons
const failureReasons = [{
  icon: Target,
  title: 'No clear direction',
  description: 'Building features without solving real problems.',
  mpid: "35b023ca-8397-4e32-8496-23816fd38382"
}, {
  icon: XCircle,
  title: 'Poor experience',
  description: 'The MVP works but users don\'t want to use it.',
  mpid: "834e8915-ce35-4f93-bd97-67631f7d0623"
}, {
  icon: AlertCircle,
  title: 'Overcomplicated',
  description: 'Too much, too soon drains resources.',
  mpid: "df11ca5d-25e5-4367-b9ca-ecf5c596ec6e"
}, {
  icon: RefreshCw,
  title: 'No iteration',
  description: 'Launched once and never improved.',
  mpid: "2da6e471-c1cb-4e01-b805-dc850b2ce100"
}] as any[];

// Approach Steps
const approachSteps = [{
  number: '01',
  title: 'Discover',
  description: 'Define target users, goals, and key features through collaborative workshops.',
  icon: Target,
  mpid: "f8379cc6-e96c-4b50-ba7f-59b792bfa99c"
}, {
  number: '02',
  title: 'Design',
  description: 'Create clean, functional interfaces validated by user research.',
  icon: Palette,
  mpid: "53723d36-58c1-4e18-aa67-c1d648a735c8"
}, {
  number: '03',
  title: 'Develop',
  description: 'Build using scalable frameworks and industry best practices.',
  icon: Code2,
  mpid: "36edd28b-a7be-4e4d-922f-97b8e3c5a4f9"
}, {
  number: '04',
  title: 'Iterate',
  description: 'Refine based on real feedback and user data.',
  icon: TrendingUp,
  mpid: "ea892106-52ec-4236-ba14-85a72a56aa21"
}] as any[];

// Team Members
const teamMembers = [{
  name: 'Glenn Zaballero',
  role: 'Founder & Project Manager',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  mpid: "a6e87cf0-4ebe-438e-91a3-bf4c03f97f59"
}, {
  name: 'Alex Chen',
  role: 'Senior Engineer',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
  mpid: "08e14ccd-3f6e-45a6-b135-56a66b1e368d"
}, {
  name: 'Sarah Martinez',
  role: 'Lead Designer',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
  mpid: "a1f74eaf-eb71-4ddc-aa92-2303a4db9d70"
}, {
  name: 'Michael Kumar',
  role: 'Quality Engineer',
  image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80',
  mpid: "faa458df-0bf0-490d-a0ce-d6697487b07d"
}] as any[];

// Projects
const recentProjects = [{
  title: 'Buy & Design AI',
  description: 'AI-powered property search and renovation planning platform.',
  tags: ['AI/ML', 'Real Estate'],
  image: '🏡',
  mpid: "99eac664-815c-4d17-b8be-f1d3a99a8471"
}, {
  title: 'Cart & Tell',
  description: 'Multi-vendor eCommerce with live selling features.',
  tags: ['eCommerce', 'Live Streaming'],
  image: '🛒',
  mpid: "0b9b3803-b909-45e5-8657-ea559f4eef52"
}, {
  title: 'ClinicPro',
  description: 'Smart booking and patient management system.',
  tags: ['Healthcare', 'SaaS'],
  image: '🏥',
  mpid: "63cdb64c-e173-44b9-9fe3-3e8584cb9c0d"
}] as any[];

// FAQs
const faqs = [{
  question: 'How long does it take to build an MVP?',
  answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.',
  mpid: "84295a59-255e-472a-a2d1-39f45f0cbffd"
}, {
  question: 'What\'s included in the MVP package?',
  answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.',
  mpid: "f4fc47f5-bddb-4e05-82f8-9953f69ce71d"
}, {
  question: 'Can I scale the MVP later?',
  answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.',
  mpid: "9ad10c04-bfb8-4e70-b49b-b88b5d6d26e0"
}, {
  question: 'Do you work with international clients?',
  answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.',
  mpid: "5c91647c-acd7-4643-8e71-0ce2378755f0"
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
  return <SortableContainer dndKitId="7a4ea302-7ce4-4daa-915c-de35c31a0680" containerType="regular" prevTag="div" className="min-h-screen bg-white text-slate-900" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Navigation */}
      <SortableContainer dndKitId="ca57b68a-463e-4c2c-b0db-fb16f73c5f91" containerType="regular" prevTag="motion.nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="dfe33d5f-f55c-4168-8c0d-2aac8699efa3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5f7951e3-f709-430a-bb62-6497b328c102" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="99d01f18-6cc7-4acb-af25-3f308e101db5" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="be6054a1-62c2-4064-b5b5-c47a103e09c0" containerType="regular" prevTag="div" className="w-9 h-9 bg-gradient-to-br from-[#395c66] to-[#4a6d78] rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-[#b8973f] font-bold text-lg" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">Z</span>
              </SortableContainer>
              <span className="text-xl font-bold tracking-tight" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-[#395c66]" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </span>
            </SortableContainer>

            {/* Nav Links */}
            <SortableContainer dndKitId="2ce887a9-35b7-4d79-a1bd-f5638bb9f154" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#approach" className="text-sm font-medium text-slate-600 hover:text-[#395c66] transition-colors" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">How We Work</a>
              <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-[#395c66] transition-colors" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">Projects</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-[#395c66] transition-colors" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-[#395c66] transition-colors" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">FAQs</a>
            </SortableContainer>

            {/* CTA Button */}
            <button className="px-5 py-2.5 bg-[#395c66] hover:bg-[#4a6d78] text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#395c66]/20" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
              Get Started
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="83ba9223-b57a-4500-9e59-df58c5cd4038" containerType="regular" prevTag="section" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="7659db1f-7394-4bea-be80-acbaf7b85b28" containerType="regular" prevTag="motion.div" style={{
        opacity: heroOpacity
      }} className="max-w-6xl mx-auto text-center" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="5b91134f-2ef2-4084-be24-5834a15ab58c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Badge */}
            <SortableContainer dndKitId="cafe5dd1-4bbe-4fa4-afac-5809338cda84" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-[#395c66]/5 border border-[#395c66]/10 rounded-full mb-8" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
              <Sparkles className="w-4 h-4 text-[#395c66]" />
              <span className="text-sm font-medium text-[#395c66]" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">Trusted by Startups Worldwide</span>
            </SortableContainer>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
              Ship your MVP in
              <br data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-[#395c66]" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">30–60 days</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
              From idea to launch. Fast, affordable, and built to scale.
            </p>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="9f8b280e-32d7-427e-8fea-ed8abda951b6" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="4f0564b8-aeee-4a8e-ab51-8073a1ff2e89" containerType="regular" prevTag="button" className="group px-8 py-4 bg-[#395c66] hover:bg-[#4a6d78] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#395c66]/20 hover:shadow-xl hover:shadow-[#395c66]/30 flex items-center space-x-2" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="3c2a05c6-7d31-4618-90a7-66eead1b7496" containerType="regular" prevTag="button" className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-[#395c66] text-slate-900 rounded-lg font-semibold transition-all flex items-center space-x-2" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5 text-[#395c66]" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">Book a Call</span>
              </SortableContainer>
            </SortableContainer>

            {/* Tech Stack */}
            <SortableContainer dndKitId="2114229d-44cc-4304-bbf8-ed15d669b253" containerType="regular" prevTag="div" className="space-y-4" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">Built With</p>
              <SortableContainer dndKitId="af846381-18b6-4c31-827a-03ae6df0bdb2" containerType="collection" prevTag="div" className="flex flex-wrap items-center justify-center gap-3" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
                {techStack.map(tech => <div key={tech} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#395c66]/30 hover:bg-[#395c66]/5 transition-all" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
                    {tech}
                  </div>)}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Scroll Indicator */}
        <SortableContainer dndKitId="d7d47a69-9454-414d-b866-0a1ef695b28a" containerType="regular" prevTag="motion.div" className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronDown className="w-6 h-6 text-slate-400" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      {/* Why MVPs Fail */}
      <SortableContainer dndKitId="ea404ae9-a127-4593-a149-f199fc46a057" containerType="regular" prevTag="section" className="relative py-24 px-6 bg-slate-50" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="792e5e88-4479-4c41-913e-b0bdf2558aa4" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="71f2c0af-3e55-4a96-99fb-5234377a1eaf" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
              Most MVPs fail
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">Here's why—and how we fix it</p>
          </SortableContainer>

          <SortableContainer dndKitId="2137040b-4c6a-4b68-83b7-3eb1eb5eb89f" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="p-6 bg-white border border-red-100 rounded-xl hover:border-red-200 transition-all" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                  <reason.icon className="w-6 h-6 text-red-500" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed" data-magicpath-uuid={(reason as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">{reason.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Our Approach */}
      <SortableContainer dndKitId="bcdeda9a-c6a2-4781-be75-7d1948182ecb" containerType="regular" prevTag="section" id="approach" className="relative py-24 px-6 bg-white" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="e3e5cce7-763f-427d-adaa-118698f67f8b" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="90df8bee-e773-453d-ae62-26400f815675" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
              How we build <span className="text-[#395c66]" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">great products</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">
              A practical, sprint-based workflow designed for speed and quality.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="152ba92e-1eb2-4de0-bfca-0fb2e9a0edab" containerType="collection" prevTag="div" className="grid md:grid-cols-2 gap-6 mb-12" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="relative p-8 bg-slate-50 rounded-2xl hover:bg-[#395c66]/5 border border-transparent hover:border-[#395c66]/10 transition-all group" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="flex items-start justify-between mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="w-14 h-14 bg-[#395c66] rounded-xl flex items-center justify-center shadow-lg" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">
                    <step.icon className="w-7 h-7 text-white" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  <span className="text-5xl font-bold text-slate-100 group-hover:text-[#395c66]/10 transition-colors" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:string" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">{step.description}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Team */}
      <SortableContainer dndKitId="0ee75466-8dfa-4e74-90f6-8fc4bc16fd8e" containerType="regular" prevTag="section" id="team" className="relative py-24 px-6 bg-slate-50" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c955e954-4ee5-4a96-833d-6861e61bc7c0" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="70ee9eb0-127a-4b24-a5df-6f888bb4ee54" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
              Meet the <span className="text-[#395c66]" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">team</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
              Experts in turning ideas into successful products
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="e765a6ce-5560-4652-b588-f1f667c20749" containerType="collection" prevTag="div" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="aspect-[3/4] mb-4 rounded-2xl overflow-hidden bg-slate-200" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <h3 className="text-lg font-semibold mb-1" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                <p className="text-sm text-slate-600" data-magicpath-uuid={(member as any)["mpid"] ?? "unsafe"} data-magicpath-field="role:string" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects */}
      <SortableContainer dndKitId="027e0c4a-cc03-4cb9-a329-7ba9ff2e5b2c" containerType="regular" prevTag="section" id="projects" className="relative py-24 px-6 bg-white" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="4bbf7d58-481c-4b1d-9eba-2cc8b6807ccb" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="204b402f-d118-4457-b3b4-0e148ab8e3a4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
              Recent work
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx">
              Products we've built for startups and businesses
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="25621a93-f9dc-4650-a6f6-19e554a4ac89" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-6" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 hover:border-[#395c66]/30 hover:shadow-xl transition-all" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative h-full p-8 flex flex-col justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-6xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                  <div data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">
                    <h3 className="text-xl font-bold mb-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-[#395c66]/10 border border-[#395c66]/20 rounded-full text-xs font-medium text-[#395c66]" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="2257a8ed-bbd6-45bd-a2a2-1968c92fdfb2" containerType="regular" prevTag="section" id="pricing" className="relative py-24 px-6 bg-slate-50" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="1591cc24-4e24-42f9-9fc1-2816433e0970" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="124aa85f-7737-4ab1-80a9-8e9db67ba3c6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
              Transparent <span className="text-[#b8973f]" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">pricing</span>
            </h2>
            <p className="text-xl text-slate-600" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
              Simple, predictable pricing with no hidden costs
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="595d38e8-d85d-4127-84b9-73fd42520a54" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="p-10 bg-white border border-slate-200 rounded-3xl shadow-xl" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
            <h3 className="text-2xl font-bold mb-8 text-center" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">Quick Estimator</h3>

            <SortableContainer dndKitId="d5bd9e9a-8929-4aaf-8c3e-f0f48d96bfad" containerType="regular" prevTag="div" className="space-y-8 mb-10" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">
              {/* Team Size */}
              <SortableContainer dndKitId="27d13af9-cea4-45f0-b795-70ab72004d3b" containerType="regular" prevTag="div" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="b69faf01-27f6-47fd-b260-7cc3476d6cae" containerType="regular" prevTag="div" className="flex justify-between mb-4" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="font-semibold text-slate-700" data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">Developers</label>
                  <span className="text-2xl font-bold text-[#395c66]" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">{teamSize}</span>
                </SortableContainer>
                <div className="grid grid-cols-5 gap-3" data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">
                  {[1, 2, 3, 4, 5].map(size => <button key={size} onClick={() => setTeamSize(size)} className={`py-4 rounded-lg font-bold text-xl transition-all ${teamSize === size ? 'bg-[#395c66] text-white shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
                      {size}
                    </button>)}
                </div>
              </SortableContainer>

              {/* Sprints */}
              <SortableContainer dndKitId="4a8cd841-f658-4f42-9588-b955ace626cc" containerType="regular" prevTag="div" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
                <label className="font-semibold text-slate-700 mb-4 block" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">Duration</label>
                <SortableContainer dndKitId="ef89179d-4090-4921-bd12-27c2e8f1daa3" containerType="collection" prevTag="div" className="grid grid-cols-3 gap-4" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">
                  {[{
                  value: 1,
                  label: '2 weeks',
                  desc: '1 sprint',
                  mpid: "1c5e4697-2e94-4fac-835c-025863bc7734"
                }, {
                  value: 2,
                  label: '4 weeks',
                  desc: '2 sprints',
                  mpid: "b0751010-9e85-4d68-a87a-97129306d76a"
                }, {
                  value: 4,
                  label: '8 weeks',
                  desc: '4 sprints',
                  mpid: "b9d863de-f787-4cac-8905-3c05e35ad99b"
                }].map(option => <button key={option.value} onClick={() => setSprints(option.value)} className={`py-5 px-4 rounded-lg font-semibold transition-all ${sprints === option.value ? 'bg-[#395c66] text-white shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-base mb-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">{option.label}</div>
                      <div className={`text-xs ${sprints === option.value ? 'text-white/80' : 'text-slate-500'}`} data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
                        {option.desc}
                      </div>
                    </button>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Price Display */}
            <SortableContainer dndKitId="bc0e35f1-789e-4e14-a788-5c845c3eff9c" containerType="regular" prevTag="div" className="text-center p-8 bg-slate-50 rounded-2xl mb-6" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-slate-600 uppercase tracking-wider mb-2" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">Total Investment</p>
              <p className="text-5xl font-bold text-[#b8973f] mb-4" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">
                ₱{calculatePrice()}
              </p>
              <SortableContainer dndKitId="5bc39670-d80a-4f64-94b4-83ce75a76156" containerType="regular" prevTag="div" className="flex items-center justify-center gap-4 text-sm text-slate-600" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="80c68012-9b7f-4b10-a546-3b2f0f432147" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
                  <Users className="w-4 h-4 text-[#395c66]" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">{teamSize} Developer{teamSize > 1 ? 's' : ''}</span>
                </SortableContainer>
                <div className="w-1 h-1 rounded-full bg-slate-400" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx" />
                <SortableContainer dndKitId="e530ee28-36e3-4228-9b80-1fc66f06e050" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
                  <Clock className="w-4 h-4 text-[#395c66]" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx" />
                  <span data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">{getDuration()} weeks</span>
                </SortableContainer>
              </SortableContainer>
              <p className="text-xs text-slate-500 mt-4" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">₱120,000 per developer per sprint</p>
            </SortableContainer>

            {/* Features */}
            <div className="space-y-3 mb-8" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">
              {['Free consultation to define scope', 'Full project management included', 'No extra charges for revisions'].map(feature => <SortableContainer dndKitId="4ab8af46-3803-4f64-9db8-acab48e3187d" containerType="regular" prevTag="div" key={feature} className="flex items-start space-x-3" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">
                  <CheckCircle2 className="w-5 h-5 text-[#395c66] flex-shrink-0 mt-0.5" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx" />
                  <p className="text-sm text-slate-700" data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">{feature}</p>
                </SortableContainer>)}
            </div>

            {/* CTA Buttons */}
            <SortableContainer dndKitId="21e166c3-c710-4e20-89c2-10dcc25759d7" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="flex-1 px-6 py-4 bg-[#395c66] hover:bg-[#4a6d78] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#395c66]/20" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx">
                Get Detailed Quote
              </button>
              <button className="flex-1 px-6 py-4 border-2 border-[#395c66] hover:bg-[#395c66]/5 text-slate-900 rounded-lg font-semibold transition-all" data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                Book Consultation
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="ca70c0a3-aca4-4f26-ab9a-3a21671c5bbc" containerType="regular" prevTag="section" id="faq" className="relative py-24 px-6 bg-white" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="eed606b4-f1ac-464c-aaf0-79d05a976873" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="23557cd6-c511-4b1a-a493-22fa85572dc6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
              Frequently asked questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="0d5a8d5c-281e-4ba5-8d7c-9104a9be91d5" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
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
          }} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-[#395c66]/30 transition-all" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="font-semibold pr-8" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:string" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#395c66]" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-slate-400" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx" />}
                </button>

                <motion.div data-magicpath-motion-tag="motion.div" initial={false} animate={{
              height: openFaq === index ? 'auto' : 0,
              opacity: openFaq === index ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:string" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="ac63b531-4ae1-4f5a-8d72-3fb78133733b" containerType="regular" prevTag="section" className="relative py-24 px-6 bg-slate-50" data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="d70ab6d0-0046-429a-8b1a-21de901fa563" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="527f910d-5171-43b7-bb86-f3eead291bd6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center p-16 bg-gradient-to-br from-[#395c66] to-[#4a6d78] rounded-3xl shadow-2xl" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="1536ace4-873b-49c8-9721-01d5df883454" containerType="regular" prevTag="div" className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
              <Rocket className="w-4 h-4 text-white" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-sm font-medium text-white" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx">Let's Build Together</span>
            </SortableContainer>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
              Ready to launch your MVP?
            </h2>

            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
              Let's turn your idea into a real, testable product.
            </p>

            <SortableContainer dndKitId="c8e3cad4-4bc0-41fa-8dda-9b9d94798950" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="9c31fad8-7a2e-4136-92fb-bca24968d333" containerType="regular" prevTag="button" className="px-8 py-4 bg-white hover:bg-slate-50 text-[#395c66] rounded-lg font-semibold transition-all shadow-lg flex items-center space-x-2" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">
                <Calendar className="w-5 h-5" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx" />
                <span data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx">Book Free Consultation</span>
              </SortableContainer>
              <button className="px-8 py-4 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-lg font-semibold transition-all" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                Get a Quote
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="734da579-aa97-4da3-b233-afcab9b54825" containerType="regular" prevTag="footer" className="relative py-16 px-6 bg-white border-t border-slate-200" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="0ce03e0f-96a8-4f2d-8023-ecb2912ff1f8" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="05ff98f5-17d7-4e11-ab0d-81f00b7c3879" containerType="collection" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
            {/* Brand */}
            <SortableContainer dndKitId="83c7d9e6-b183-4661-94f1-30bd40bc6342" containerType="regular" prevTag="div" data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="7a616e51-6de4-4541-919f-cdaa210c9306" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="12ecd000-13f0-4fa1-a67e-955c650323bb" containerType="regular" prevTag="div" className="w-9 h-9 bg-gradient-to-br from-[#395c66] to-[#4a6d78] rounded-lg flex items-center justify-center" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
                  <span className="text-[#b8973f] font-bold text-lg" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">Z</span>
                </SortableContainer>
                <span className="text-xl font-bold text-[#395c66]" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </SortableContainer>
              <p className="text-sm text-slate-600" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">
                Building MVPs that matter since 2015
              </p>
            </SortableContainer>

            {/* Links */}
            {[{
            title: 'Services',
            links: ['MVP Development', 'UI/UX Design', 'Consulting'],
            mpid: "22a7de68-740e-4635-bfd6-a8df1282028c"
          }, {
            title: 'Company',
            links: ['About', 'Team', 'Contact'],
            mpid: "2d3b9759-0d13-4b6b-9ee7-d72ea03449df"
          }, {
            title: 'Resources',
            links: ['Blog', 'Case Studies', 'Support'],
            mpid: "38349182-7e85-4f67-8d32-b3d854d41c5c"
          }].map(column => <div key={column.title} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-semibold mb-4 text-slate-900" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-slate-600 hover:text-[#395c66] transition-colors" data-magicpath-uuid={(column as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </SortableContainer>

          <SortableContainer dndKitId="53fea0ef-e178-4f50-9da6-5a4041887305" containerType="regular" prevTag="div" className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-slate-600" data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
              © 2024 Zenith Technologies. All rights reserved.
            </p>
            <SortableContainer dndKitId="9b0c405f-c897-47b4-89f7-303b0ce9fec2" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-slate-600 hover:text-[#395c66] transition-colors" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
                Privacy
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-[#395c66] transition-colors" data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
                Terms
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};