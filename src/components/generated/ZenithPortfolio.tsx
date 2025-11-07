import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Cpu, Globe, ArrowUpRight, Terminal, Code2, Sparkles, CircuitBoard, Lock, Rocket, Database, Target, Users, TrendingUp } from 'lucide-react';
type ZenithPortfolioProps = Record<string, never>;
const services = [{
  icon: Terminal,
  title: 'Smart Contract Auditing',
  description: 'Military-grade security protocols for blockchain infrastructure',
  color: 'from-teal-500 to-teal-700'
}, {
  icon: Code2,
  title: 'Protocol Engineering',
  description: 'Zero-knowledge proofs and consensus mechanism design',
  color: 'from-yellow-500 to-yellow-600'
}, {
  icon: CircuitBoard,
  title: 'Layer 2 Solutions',
  description: 'Scalable rollup architectures and state channel systems',
  color: 'from-teal-400 to-teal-600'
}, {
  icon: Database,
  title: 'Tokenomics Design',
  description: 'Economic modeling and game theory for sustainable ecosystems',
  color: 'from-yellow-600 to-yellow-700'
}];
const projects = [{
  title: 'Quantum Bridge',
  type: 'Cross-Chain Protocol',
  metrics: {
    tvl: '$2.4B',
    tps: '50K+'
  },
  image: '🌉'
}, {
  title: 'ZeroProof Network',
  type: 'Privacy Layer',
  metrics: {
    users: '1M+',
    validators: '10K+'
  },
  image: '🔐'
}, {
  title: 'Nexus DAO',
  type: 'Governance Framework',
  metrics: {
    proposals: '500+',
    members: '50K+'
  },
  image: '⚡'
}];
const techStack = ['Solidity', 'Rust', 'Move', 'Cairo', 'zkSNARKs', 'IPFS', 'GraphQL', 'Substrate'];
const teamMembers = [{
  name: 'Dr. Sarah Chen',
  role: 'Chief Protocol Architect',
  bio: 'Former Ethereum Foundation researcher. PhD in Distributed Systems from MIT.',
  expertise: ['Zero-Knowledge Proofs', 'Consensus Algorithms', 'Cryptography'],
  avatar: '👩‍💻',
  socials: {
    twitter: '@sarahchen',
    github: 'schen'
  }
}, {
  name: 'Marcus Rodriguez',
  role: 'Head of Security',
  bio: 'Lead auditor for 100+ smart contracts securing $10B+ in assets.',
  expertise: ['Smart Contract Security', 'Formal Verification', 'Exploit Research'],
  avatar: '👨‍🔬',
  socials: {
    twitter: '@marcusrod',
    github: 'mrodriguez'
  }
}, {
  name: 'Yuki Tanaka',
  role: 'VP of Engineering',
  bio: 'Ex-Google SRE. Built infrastructure systems handling 1M+ TPS.',
  expertise: ['Scalability', 'Systems Design', 'Performance'],
  avatar: '👨‍💼',
  socials: {
    twitter: '@yukitech',
    github: 'ytanaka'
  }
}, {
  name: 'Elena Volkov',
  role: 'Research Lead',
  bio: 'Published cryptography researcher with 50+ papers in top conferences.',
  expertise: ['Applied Cryptography', 'MEV Research', 'Economic Modeling'],
  avatar: '👩‍🔬',
  socials: {
    twitter: '@elenavolkov',
    github: 'evolkov'
  }
}];

// @component: ZenithPortfolio
export const ZenithPortfolio = (props: ZenithPortfolioProps) => {
  const [cursorPosition, setCursorPosition] = React.useState({
    x: 0,
    y: 0
  });
  const {
    scrollYProgress
  } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // @return
  return <div className="min-h-screen bg-black text-white relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx" />
      
      {/* Gradient orbs - teal and gold theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div className="absolute w-[600px] h-[600px] rounded-full opacity-20" style={{
        background: 'radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 70%)',
        left: cursorPosition.x - 300,
        top: cursorPosition.y - 300,
        transition: 'left 0.3s ease-out, top 0.3s ease-out'
      }} data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-40 left-40 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-teal-400/10 to-yellow-500/10 rounded-full blur-3xl" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx" />
      </div>

      {/* Floating Navigation */}
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/5 backdrop-blur-2xl border border-teal-500/20 rounded-full shadow-2xl" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="flex items-center space-x-8" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="flex items-center space-x-2" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-teal-500/30" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx">
              <Zap className="w-4 h-4" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx" />
            </div>
            <span className="font-bold text-sm" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
          </div>
          <div className="h-4 w-px bg-teal-500/30" data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx" />
          {['Research', 'Protocol', 'Team'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-teal-300 transition-colors" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
              {item}
            </a>)}
          <button className="px-4 py-1.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-teal-500/30" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
            Launch App
          </button>
        </div>
      </motion.nav>

      {/* Hero Section - 3D Card Effect */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">
        <motion.div style={{
        scale,
        opacity
      }} className="max-w-6xl w-full" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="text-center space-y-8" data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-500/10 border border-teal-400/30 rounded-full mb-8 shadow-lg shadow-teal-500/10" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-medium text-teal-300" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">Building the Decentralized Internet</span>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 1,
            delay: 0.2
          }} className="space-y-6" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="block" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">CRYPTO</span>
                <span className="block bg-gradient-to-r from-teal-400 via-teal-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(20,184,166,0.5)]" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
                  INFRASTRUCTURE
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">
                Zenith builds institutional-grade blockchain infrastructure for the next generation of decentralized applications
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="flex items-center justify-center space-x-4" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx">
              <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white rounded-full font-semibold transition-all flex items-center space-x-2 shadow-xl shadow-teal-500/30" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">View Documentation</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx" />
              </button>
              <button className="px-8 py-4 border border-teal-500/30 hover:border-teal-400/50 rounded-full font-semibold hover:bg-teal-500/10 transition-all" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                Contact Research Team
              </button>
            </motion.div>

            {/* Tech Stack Ticker */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8
          }} className="pt-16 overflow-hidden" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">Powered By</p>
              <div className="flex space-x-8 animate-marquee" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx">
                {[...techStack, ...techStack].map((tech, i) => <div key={i} className="px-4 py-2 bg-white/5 border border-teal-500/20 rounded-lg whitespace-nowrap hover:border-teal-400/40 transition-colors" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-sm font-mono text-gray-400" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">{tech}</span>
                  </div>)}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="absolute bottom-12 left-1/2 -translate-x-1/2" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="w-6 h-10 border-2 border-teal-500/30 rounded-full flex justify-center pt-2" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx" />
          </div>
        </motion.div>
      </section>

      {/* About/Mission Section */}
      <section className="relative py-32 px-6" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
          {/* Mission Statement */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20" data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full mb-8 shadow-lg shadow-yellow-500/10" data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx">
              <Target className="w-4 h-4 text-yellow-400" data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="text-sm font-medium text-yellow-300" data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">Our Mission</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8" data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx">
              BUILDING THE <span className="text-gray-600" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">INFRASTRUCTURE</span><br data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx" />
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-yellow-400 bg-clip-text text-transparent" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
                FOR WEB3
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
              Zenith Technologies is pioneering the next generation of blockchain infrastructure. 
              We build secure, scalable, and sustainable protocols that empower developers and enterprises 
              to create decentralized applications without compromise.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
            {[{
            icon: TrendingUp,
            value: '$10B+',
            label: 'Total Value Secured',
            color: 'from-teal-500 to-teal-600'
          }, {
            icon: Users,
            value: '2M+',
            label: 'Active Users',
            color: 'from-teal-400 to-teal-500'
          }, {
            icon: Rocket,
            value: '150+',
            label: 'Projects Deployed',
            color: 'from-yellow-500 to-yellow-600'
          }].map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-teal-500/30 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative text-center" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-teal-500/20`} data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
                    <stat.icon className="w-8 h-8" data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  <div className="text-5xl font-black mb-3 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent" data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium" data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">{stat.label}</div>
                </div>
              </motion.div>)}
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="p-10 bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-transparent backdrop-blur-xl border border-teal-400/20 hover:border-teal-400/40 rounded-3xl transition-all" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-teal-500/30" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">
                <Shield className="w-7 h-7" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-teal-300" data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">Security First</h3>
              <p className="text-gray-400 leading-relaxed" data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">
                Every line of code undergoes rigorous security audits and formal verification. 
                We've built our reputation on zero-compromise security standards that institutional 
                clients demand and trust.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="p-10 bg-gradient-to-br from-yellow-500/10 via-yellow-600/5 to-transparent backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40 rounded-3xl transition-all" data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-yellow-500/30" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
                <Globe className="w-7 h-7" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-yellow-300" data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">Global Scale</h3>
              <p className="text-gray-400 leading-relaxed" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
                Our infrastructure powers decentralized applications across 50+ countries, 
                processing millions of transactions daily with industry-leading performance 
                and reliability metrics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Bento Box Layout */}
      <section className="relative py-32 px-6" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="max-w-7xl mx-auto" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-20" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-7xl font-black mb-6" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
              CORE <span className="text-gray-600" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">CAPABILITIES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
              Full-stack blockchain engineering from L1 consensus to application layer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.02,
            y: -5
          }} className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-teal-500/30 rounded-3xl overflow-hidden transition-all" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx" />
                
                <div className="relative" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`} data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">
                    <service.icon className="w-8 h-8" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed" data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-sm font-semibold text-gray-500 group-hover:text-teal-400 transition-colors" data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx">
                    <span data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">Learn More</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="relative py-32 px-6" data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="max-w-7xl mx-auto" data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-20" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-7xl font-black mb-6" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
              FEATURED <span className="text-gray-600" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">PROTOCOLS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
              Production-ready infrastructure securing billions in assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
            {projects.map((project, index) => <motion.div key={project.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} className="group relative aspect-square" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-teal-500/30 rounded-3xl overflow-hidden transition-all" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx" />
                  
                  <div className="relative h-full p-8 flex flex-col" data-magicpath-id="97" data-magicpath-path="ZenithPortfolio.tsx">
                    <div className="text-6xl mb-auto" data-magicpath-id="98" data-magicpath-path="ZenithPortfolio.tsx">{project.image}</div>
                    
                    <div data-magicpath-id="99" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="text-sm font-mono text-teal-400 mb-2" data-magicpath-id="100" data-magicpath-path="ZenithPortfolio.tsx">{project.type}</div>
                      <h3 className="text-3xl font-bold mb-6" data-magicpath-id="101" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                      
                      <div className="space-y-2" data-magicpath-id="102" data-magicpath-path="ZenithPortfolio.tsx">
                        {Object.entries(project.metrics).map(([key, value]) => <div key={key} className="flex justify-between text-sm" data-magicpath-id="103" data-magicpath-path="ZenithPortfolio.tsx">
                            <span className="text-gray-500 uppercase tracking-wider" data-magicpath-id="104" data-magicpath-path="ZenithPortfolio.tsx">{key}</span>
                            <span className="font-bold text-teal-300" data-magicpath-id="105" data-magicpath-path="ZenithPortfolio.tsx">{value}</span>
                          </div>)}
                      </div>
                      
                      <button className="mt-6 w-full py-3 bg-white/10 border border-white/20 rounded-full font-semibold group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-600 group-hover:border-transparent transition-all shadow-lg group-hover:shadow-teal-500/30" data-magicpath-id="106" data-magicpath-path="ZenithPortfolio.tsx">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 px-6" data-magicpath-id="107" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="max-w-7xl mx-auto" data-magicpath-id="108" data-magicpath-path="ZenithPortfolio.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-20 text-center" data-magicpath-id="109" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-5xl md:text-7xl font-black mb-6" data-magicpath-id="110" data-magicpath-path="ZenithPortfolio.tsx">
              WORLD-CLASS <span className="text-gray-600" data-magicpath-id="111" data-magicpath-path="ZenithPortfolio.tsx">TEAM</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto" data-magicpath-id="112" data-magicpath-path="ZenithPortfolio.tsx">
              Leading researchers and engineers from top institutions and blockchain projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="113" data-magicpath-path="ZenithPortfolio.tsx">
            {teamMembers.map((member, index) => <motion.div key={member.name} initial={{
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
          }} className="group relative" data-magicpath-id="114" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-teal-500/30 rounded-3xl overflow-hidden transition-all" data-magicpath-id="115" data-magicpath-path="ZenithPortfolio.tsx">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-yellow-500/5 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-id="116" data-magicpath-path="ZenithPortfolio.tsx" />
                  
                  <div className="relative" data-magicpath-id="117" data-magicpath-path="ZenithPortfolio.tsx">
                    {/* Avatar and Header */}
                    <div className="flex items-start space-x-4 mb-6" data-magicpath-id="118" data-magicpath-path="ZenithPortfolio.tsx">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-yellow-500 flex items-center justify-center text-4xl shadow-2xl shadow-teal-500/20" data-magicpath-id="119" data-magicpath-path="ZenithPortfolio.tsx">
                        {member.avatar}
                      </div>
                      <div className="flex-1" data-magicpath-id="120" data-magicpath-path="ZenithPortfolio.tsx">
                        <h3 className="text-2xl font-bold mb-1" data-magicpath-id="121" data-magicpath-path="ZenithPortfolio.tsx">{member.name}</h3>
                        <p className="text-sm font-mono text-teal-400" data-magicpath-id="122" data-magicpath-path="ZenithPortfolio.tsx">{member.role}</p>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-id="123" data-magicpath-path="ZenithPortfolio.tsx">
                        <a href={`https://twitter.com/${member.socials.twitter}`} className="w-8 h-8 bg-white/10 hover:bg-teal-500/30 rounded-full flex items-center justify-center transition-colors" aria-label={`Twitter: ${member.socials.twitter}`} data-magicpath-id="124" data-magicpath-path="ZenithPortfolio.tsx">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-magicpath-id="125" data-magicpath-path="ZenithPortfolio.tsx">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-magicpath-id="126" data-magicpath-path="ZenithPortfolio.tsx" />
                          </svg>
                        </a>
                        <a href={`https://github.com/${member.socials.github}`} className="w-8 h-8 bg-white/10 hover:bg-teal-500/30 rounded-full flex items-center justify-center transition-colors" aria-label={`GitHub: ${member.socials.github}`} data-magicpath-id="127" data-magicpath-path="ZenithPortfolio.tsx">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-magicpath-id="128" data-magicpath-path="ZenithPortfolio.tsx">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-magicpath-id="129" data-magicpath-path="ZenithPortfolio.tsx" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-400 mb-6 leading-relaxed" data-magicpath-id="130" data-magicpath-path="ZenithPortfolio.tsx">{member.bio}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2" data-magicpath-id="131" data-magicpath-path="ZenithPortfolio.tsx">
                      {member.expertise.map(skill => <span key={skill} className="px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-medium text-teal-300" data-magicpath-id="132" data-magicpath-path="ZenithPortfolio.tsx">
                          {skill}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Join Team CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4
        }} className="mt-16 text-center" data-magicpath-id="133" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-teal-500/20 rounded-3xl" data-magicpath-id="134" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="135" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="text-left" data-magicpath-id="136" data-magicpath-path="ZenithPortfolio.tsx">
                  <h3 className="text-2xl font-bold mb-2" data-magicpath-id="137" data-magicpath-path="ZenithPortfolio.tsx">Join Our Mission</h3>
                  <p className="text-gray-400" data-magicpath-id="138" data-magicpath-path="ZenithPortfolio.tsx">We're always looking for exceptional talent</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black rounded-full font-semibold transition-all flex items-center space-x-2 whitespace-nowrap shadow-lg shadow-yellow-500/30" data-magicpath-id="139" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="140" data-magicpath-path="ZenithPortfolio.tsx">View Open Positions</span>
                  <ArrowUpRight className="w-4 h-4" data-magicpath-id="141" data-magicpath-path="ZenithPortfolio.tsx" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6" data-magicpath-id="142" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="max-w-5xl mx-auto" data-magicpath-id="143" data-magicpath-path="ZenithPortfolio.tsx">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative p-12 md:p-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-teal-500/30 rounded-[3rem] overflow-hidden" data-magicpath-id="144" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-yellow-500/10 to-teal-600/10" data-magicpath-id="145" data-magicpath-path="ZenithPortfolio.tsx" />
            
            <div className="relative text-center space-y-8" data-magicpath-id="146" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-yellow-400/30 rounded-full shadow-lg shadow-yellow-500/10" data-magicpath-id="147" data-magicpath-path="ZenithPortfolio.tsx">
                <Lock className="w-4 h-4 text-yellow-400" data-magicpath-id="148" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="text-sm font-medium text-yellow-300" data-magicpath-id="149" data-magicpath-path="ZenithPortfolio.tsx">Enterprise Solutions Available</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black leading-tight" data-magicpath-id="150" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to Build the<br data-magicpath-id="151" data-magicpath-path="ZenithPortfolio.tsx" />
                <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-yellow-400 bg-clip-text text-transparent" data-magicpath-id="152" data-magicpath-path="ZenithPortfolio.tsx">
                  Future of Finance?
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto" data-magicpath-id="153" data-magicpath-path="ZenithPortfolio.tsx">
                Partner with Zenith to architect your blockchain infrastructure with uncompromising security and performance
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-magicpath-id="154" data-magicpath-path="ZenithPortfolio.tsx">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white rounded-full font-bold transition-all flex items-center space-x-2 shadow-xl shadow-teal-500/30" data-magicpath-id="155" data-magicpath-path="ZenithPortfolio.tsx">
                  <span data-magicpath-id="156" data-magicpath-path="ZenithPortfolio.tsx">Schedule Consultation</span>
                  <ArrowUpRight className="w-5 h-5" data-magicpath-id="157" data-magicpath-path="ZenithPortfolio.tsx" />
                </button>
                <button className="px-8 py-4 border border-yellow-500/30 hover:border-yellow-400/50 hover:bg-yellow-500/10 rounded-full font-bold transition-all" data-magicpath-id="158" data-magicpath-path="ZenithPortfolio.tsx">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-teal-500/10" data-magicpath-id="159" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="max-w-7xl mx-auto" data-magicpath-id="160" data-magicpath-path="ZenithPortfolio.tsx">
          <div className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="161" data-magicpath-path="ZenithPortfolio.tsx">
            <div className="space-y-4" data-magicpath-id="162" data-magicpath-path="ZenithPortfolio.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="163" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-teal-500/30" data-magicpath-id="164" data-magicpath-path="ZenithPortfolio.tsx">
                  <Zap className="w-5 h-5" data-magicpath-id="165" data-magicpath-path="ZenithPortfolio.tsx" />
                </div>
                <span className="font-bold text-lg" data-magicpath-id="166" data-magicpath-path="ZenithPortfolio.tsx">ZENITH</span>
              </div>
              <p className="text-sm text-gray-500" data-magicpath-id="167" data-magicpath-path="ZenithPortfolio.tsx">
                Institutional-grade blockchain infrastructure for the decentralized web
              </p>
            </div>
            
            {[{
            title: 'Products',
            links: ['Protocol', 'SDK', 'Node Network', 'Analytics']
          }, {
            title: 'Resources',
            links: ['Documentation', 'Research', 'Blog', 'GitHub']
          }, {
            title: 'Company',
            links: ['About', 'Careers', 'Contact', 'Press Kit']
          }].map(column => <div key={column.title} data-magicpath-id="168" data-magicpath-path="ZenithPortfolio.tsx">
                <h3 className="font-bold mb-4 text-teal-300" data-magicpath-id="169" data-magicpath-path="ZenithPortfolio.tsx">{column.title}</h3>
                <ul className="space-y-2" data-magicpath-id="170" data-magicpath-path="ZenithPortfolio.tsx">
                  {column.links.map(link => <li key={link} data-magicpath-id="171" data-magicpath-path="ZenithPortfolio.tsx">
                      <a href="#" className="text-sm text-gray-500 hover:text-teal-400 transition-colors" data-magicpath-id="172" data-magicpath-path="ZenithPortfolio.tsx">
                        {link}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </div>
          
          <div className="pt-8 border-t border-teal-500/10 flex flex-col md:flex-row justify-between items-center" data-magicpath-id="173" data-magicpath-path="ZenithPortfolio.tsx">
            <p className="text-sm text-gray-500" data-magicpath-id="174" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0" data-magicpath-id="175" data-magicpath-path="ZenithPortfolio.tsx">
              <a href="#" className="text-sm text-gray-500 hover:text-teal-400 transition-colors" data-magicpath-id="176" data-magicpath-path="ZenithPortfolio.tsx">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-400 transition-colors" data-magicpath-id="177" data-magicpath-path="ZenithPortfolio.tsx">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-400 transition-colors" data-magicpath-id="178" data-magicpath-path="ZenithPortfolio.tsx">Security</a>
            </div>
          </div>
        </div>
      </footer>

      <style data-magicpath-id="179" data-magicpath-path="ZenithPortfolio.tsx">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>;
};