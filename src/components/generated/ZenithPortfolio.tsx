import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Shield, Cpu, Globe, ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
type ZenithPortfolioProps = Record<string, never>;
const services = [{
  icon: Zap,
  title: 'Blockchain Development',
  description: 'Custom smart contracts and DeFi solutions built on Ethereum, Solana, and other leading protocols.',
  mpid: "962c8914-303f-4b68-a3a0-d4b821186fc0"
}, {
  icon: Shield,
  title: 'Web3 Security',
  description: 'Comprehensive security audits and penetration testing for decentralized applications.',
  mpid: "a57105d3-9569-4c13-9371-6e0102371651"
}, {
  icon: Cpu,
  title: 'AI Integration',
  description: 'Cutting-edge AI solutions integrated with blockchain technology for next-gen applications.',
  mpid: "851cce97-1ef3-46fd-9ad5-bee0e8844030"
}, {
  icon: Globe,
  title: 'dApp Development',
  description: 'Full-stack decentralized application development with modern UI/UX design.',
  mpid: "b8cc08b6-86bb-4967-914c-287647793cab"
}] as any[];
const projects = [{
  title: 'DeFi Protocol',
  category: 'Finance',
  description: 'A next-generation decentralized exchange with advanced liquidity mechanisms.',
  gradient: 'from-purple-600 via-pink-600 to-blue-600',
  mpid: "a61c3c9d-6cfd-4969-9a08-0d4b85bdf9e7"
}, {
  title: 'NFT Marketplace',
  category: 'Digital Art',
  description: 'High-performance NFT trading platform with gasless transactions.',
  gradient: 'from-cyan-500 via-blue-600 to-purple-600',
  mpid: "a0b6468b-7151-46f1-8bc3-e67a3764e2c5"
}, {
  title: 'DAO Platform',
  category: 'Governance',
  description: 'Decentralized autonomous organization framework with on-chain voting.',
  gradient: 'from-green-500 via-emerald-600 to-teal-600',
  mpid: "f6ad7e86-730d-4404-829e-5a8c6fe93273"
}] as any[];
const stats = [{
  label: 'Projects Completed',
  value: '150+',
  mpid: "6667d1c5-3826-4dfe-8686-30858a171dd1"
}, {
  label: 'Smart Contracts',
  value: '500+',
  mpid: "93de6834-2a7c-46bf-9b3a-52ce104c6f1e"
}, {
  label: 'Security Audits',
  value: '200+',
  mpid: "b59098c9-1b78-46d3-8b6d-ee56084b0e82"
}, {
  label: 'Client Satisfaction',
  value: '99%',
  mpid: "626aee18-7e70-489a-a953-ab9e1d4fc359"
}] as any[];

// @component: ZenithPortfolio
export const ZenithPortfolio = (props: ZenithPortfolioProps) => {
  const [activeSection, setActiveSection] = React.useState('hero');
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // @return
  return <SortableContainer dndKitId="ce2d16b4-ff7d-4128-a39a-0eca633fbb91" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#16213e] to-[#0a0e27] text-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="ZenithPortfolio.tsx">
      <SortableContainer dndKitId="0e71899f-d1ee-4cc9-b7da-c80051ef5b52" containerType="regular" prevTag="div" className="fixed inset-0 opacity-30" data-magicpath-id="1" data-magicpath-path="ZenithPortfolio.tsx">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" data-magicpath-id="2" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" data-magicpath-id="3" data-magicpath-path="ZenithPortfolio.tsx" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" data-magicpath-id="4" data-magicpath-path="ZenithPortfolio.tsx" />
      </SortableContainer>

      <SortableContainer dndKitId="038359ce-c194-4f7e-b9c9-df177cf25f28" containerType="regular" prevTag="nav" className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-lg border-b border-white/10" data-magicpath-id="5" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="13b539ed-0991-4a8b-b4ac-5ceab36fab0d" containerType="regular" prevTag="div" className="container mx-auto px-6 py-4" data-magicpath-id="6" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="f9a0d4bc-4a62-460d-8b29-d766f19120c5" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="7" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="3f8c79e3-6dec-4b35-b9e1-9453a813eaa8" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="flex items-center space-x-2" data-magicpath-id="8" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="80b2a43f-4e85-451e-9119-06bc3514e035" containerType="regular" prevTag="div" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center" data-magicpath-id="9" data-magicpath-path="ZenithPortfolio.tsx">
                <Zap className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" data-magicpath-id="11" data-magicpath-path="ZenithPortfolio.tsx">
                Zenith
              </span>
            </SortableContainer>

            <SortableContainer dndKitId="9f4c0e88-1200-488f-b748-c5f817b2adb8" containerType="regular" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="12" data-magicpath-path="ZenithPortfolio.tsx">
              {['Services', 'Projects', 'Contact'].map((item, index) => <motion.a data-magicpath-motion-tag="motion.a" key={item} href={`#${item.toLowerCase()}`} initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className={`text-sm font-medium transition-colors hover:text-cyan-400 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'}`} data-magicpath-id="13" data-magicpath-path="ZenithPortfolio.tsx">
                  {item}
                </motion.a>)}
              <motion.button data-magicpath-motion-tag="motion.button" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.3
            }} className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all" data-magicpath-id="14" data-magicpath-path="ZenithPortfolio.tsx">
                Get Started
              </motion.button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="7ce5814f-e3d8-4e7b-b1e9-39937cca35bc" containerType="regular" prevTag="section" id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6" data-magicpath-id="15" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="7847a6bd-2845-45ca-8623-9a378b582bc3" containerType="regular" prevTag="div" className="container mx-auto relative z-10" data-magicpath-id="16" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e55c8f82-3160-4d2d-b90c-0149218d77d0" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="17" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="f7feae0a-3faf-4661-9613-c06911cfad88" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} data-magicpath-id="18" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="ae2d4423-fdde-4b0a-a133-097a17abd142" containerType="regular" prevTag="div" className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10" data-magicpath-id="19" data-magicpath-path="ZenithPortfolio.tsx">
                <span className="text-sm bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold" data-magicpath-id="20" data-magicpath-path="ZenithPortfolio.tsx">
                  Next-Generation Web3 Solutions
                </span>
              </SortableContainer>
            </SortableContainer>

            <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" data-magicpath-id="21" data-magicpath-path="ZenithPortfolio.tsx">
              Building the{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent" data-magicpath-id="22" data-magicpath-path="ZenithPortfolio.tsx">
                Decentralized
              </span>{' '}
              Future
            </motion.h1>

            <motion.p data-magicpath-motion-tag="motion.p" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto" data-magicpath-id="23" data-magicpath-path="ZenithPortfolio.tsx">
              Zenith Technologies pioneers blockchain innovation, delivering cutting-edge Web3 solutions that transform industries.
            </motion.p>

            <SortableContainer dndKitId="8af8de5e-5de8-4fcf-9e17-5ecde3f6b410" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="24" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="ab6ae13d-271b-422e-8a37-d3f9885a4a09" containerType="regular" prevTag="button" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center space-x-2" data-magicpath-id="25" data-magicpath-path="ZenithPortfolio.tsx">
                <span data-magicpath-id="26" data-magicpath-path="ZenithPortfolio.tsx">Explore Our Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="27" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-lg font-semibold hover:bg-white/10 transition-all" data-magicpath-id="28" data-magicpath-path="ZenithPortfolio.tsx">
                Contact Us
              </button>
            </SortableContainer>

            <SortableContainer dndKitId="83823a03-30c9-4a71-8c82-9d48d5c2bc73" containerType="collection" prevTag="motion.div" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 1
          }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20" data-magicpath-id="29" data-magicpath-path="ZenithPortfolio.tsx">
              {stats.map((stat, index) => <div key={stat.label} className="text-center" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="31" data-magicpath-path="ZenithPortfolio.tsx">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="32" data-magicpath-path="ZenithPortfolio.tsx">{stat.label}</div>
                </div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        <SortableContainer dndKitId="35b60b42-57a4-48a9-a03b-d4914f73e92d" containerType="regular" prevTag="div" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" data-magicpath-id="33" data-magicpath-path="ZenithPortfolio.tsx">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" data-magicpath-id="34" data-magicpath-path="ZenithPortfolio.tsx" />
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="0c30615c-e61a-4144-b3ae-0fa22cc8d3ae" containerType="regular" prevTag="section" id="services" className="relative py-32 px-6" data-magicpath-id="35" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="0bba4977-ba97-4005-990b-ee5aed8e2b95" containerType="regular" prevTag="div" className="container mx-auto relative z-10" data-magicpath-id="36" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="e57792a4-e528-4863-a3e8-8d40de171c3a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16" data-magicpath-id="37" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="38" data-magicpath-path="ZenithPortfolio.tsx">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" data-magicpath-id="39" data-magicpath-path="ZenithPortfolio.tsx">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="40" data-magicpath-path="ZenithPortfolio.tsx">
              Comprehensive blockchain and Web3 solutions tailored to your needs
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="5a0c8f08-23bc-46b9-8b9f-c376a3948a34" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="41" data-magicpath-path="ZenithPortfolio.tsx">
            {services.map((service, index) => <motion.div data-magicpath-motion-tag="motion.div" key={service.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            y: -10
          }} className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="ZenithPortfolio.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="ZenithPortfolio.tsx">
                    <service.icon className="w-7 h-7" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="47" data-magicpath-path="ZenithPortfolio.tsx">{service.title}</h3>
                  <p className="text-gray-400" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="48" data-magicpath-path="ZenithPortfolio.tsx">{service.description}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="df2229d1-9c69-496e-9a23-6c82c5a1a774" containerType="regular" prevTag="section" id="projects" className="relative py-32 px-6" data-magicpath-id="49" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="c2b39d4d-49c9-416f-afec-9d419d150dfe" containerType="regular" prevTag="div" className="container mx-auto relative z-10" data-magicpath-id="50" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="db5034d7-1630-4164-8c15-cf1dfaba0bb4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16" data-magicpath-id="51" data-magicpath-path="ZenithPortfolio.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="52" data-magicpath-path="ZenithPortfolio.tsx">
              Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" data-magicpath-id="53" data-magicpath-path="ZenithPortfolio.tsx">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-magicpath-id="54" data-magicpath-path="ZenithPortfolio.tsx">
              Pioneering solutions that are reshaping the decentralized ecosystem
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="d0bf3dcd-0360-4a87-b772-f9f421c940dc" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="55" data-magicpath-path="ZenithPortfolio.tsx">
            {projects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={project.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="group relative overflow-hidden rounded-2xl cursor-pointer" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="ZenithPortfolio.tsx">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity`} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="ZenithPortfolio.tsx" />
                <div className="relative p-8 h-80 flex flex-col justify-end" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="ZenithPortfolio.tsx">
                  <div className="mb-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full inline-block w-fit" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="ZenithPortfolio.tsx">
                    <span className="text-xs font-semibold" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:string" data-magicpath-id="60" data-magicpath-path="ZenithPortfolio.tsx">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="61" data-magicpath-path="ZenithPortfolio.tsx">{project.title}</h3>
                  <p className="text-gray-100 mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="62" data-magicpath-path="ZenithPortfolio.tsx">{project.description}</p>
                  <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="ZenithPortfolio.tsx">
                    <span data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="ZenithPortfolio.tsx">View Project</span>
                    <ArrowRight className="w-4 h-4 ml-2" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="ZenithPortfolio.tsx" />
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="21659b97-e56e-4188-a018-ab746a6c7e05" containerType="regular" prevTag="section" id="contact" className="relative py-32 px-6" data-magicpath-id="66" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="93151bdf-86e4-4b55-abae-e386fcd787d8" containerType="regular" prevTag="div" className="container mx-auto relative z-10" data-magicpath-id="67" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="ff4e37c1-2a37-47fe-b830-a2e24ef7568a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="68" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="a2750fc3-aa4c-428f-8dfa-38af89a81344" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="text-center mb-16" data-magicpath-id="69" data-magicpath-path="ZenithPortfolio.tsx">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="70" data-magicpath-path="ZenithPortfolio.tsx">
                Let's Build{' '}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" data-magicpath-id="71" data-magicpath-path="ZenithPortfolio.tsx">
                  Together
                </span>
              </h2>
              <p className="text-xl text-gray-300" data-magicpath-id="72" data-magicpath-path="ZenithPortfolio.tsx">
                Ready to transform your vision into reality? Get in touch with our team.
              </p>
            </SortableContainer>

            <SortableContainer dndKitId="9801eee6-a09a-4f66-b225-d800493df2e5" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12" data-magicpath-id="73" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="017ee0cc-ac72-4ee1-93c4-80e0af8cfff2" containerType="regular" prevTag="form" className="space-y-6" data-magicpath-id="74" data-magicpath-path="ZenithPortfolio.tsx">
                <SortableContainer dndKitId="b3473440-c9d0-47ec-9c50-c7744a264ef4" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-6" data-magicpath-id="75" data-magicpath-path="ZenithPortfolio.tsx">
                  <SortableContainer dndKitId="1cb7b79b-3108-4ca5-92bd-90a52a6ac640" containerType="regular" prevTag="div" data-magicpath-id="76" data-magicpath-path="ZenithPortfolio.tsx">
                    <label className="block text-sm font-medium mb-2" data-magicpath-id="77" data-magicpath-path="ZenithPortfolio.tsx">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" data-magicpath-id="78" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="a2e9e214-617f-4275-ac50-2a4d345329f7" containerType="regular" prevTag="div" data-magicpath-id="79" data-magicpath-path="ZenithPortfolio.tsx">
                    <label className="block text-sm font-medium mb-2" data-magicpath-id="80" data-magicpath-path="ZenithPortfolio.tsx">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" data-magicpath-id="81" data-magicpath-path="ZenithPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <SortableContainer dndKitId="55c16b7c-a886-468f-b995-51b996de31f9" containerType="regular" prevTag="div" data-magicpath-id="82" data-magicpath-path="ZenithPortfolio.tsx">
                  <label className="block text-sm font-medium mb-2" data-magicpath-id="83" data-magicpath-path="ZenithPortfolio.tsx">Project Details</label>
                  <textarea rows={6} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell us about your project..." data-magicpath-id="84" data-magicpath-path="ZenithPortfolio.tsx" />
                </SortableContainer>
                <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all" data-magicpath-id="85" data-magicpath-path="ZenithPortfolio.tsx">
                  Send Message
                </button>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="529c44ee-5064-4758-a7b7-2e0a7547b66c" containerType="collection" prevTag="motion.div" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="flex justify-center space-x-6 mt-12" data-magicpath-id="86" data-magicpath-path="ZenithPortfolio.tsx">
              {[{
              icon: Github,
              href: '#',
              mpid: "98afd373-36e8-47dd-9713-679435667b82"
            }, {
              icon: Twitter,
              href: '#',
              mpid: "b0a78b56-f8bb-431e-836b-b634d83496b2"
            }, {
              icon: Linkedin,
              href: '#',
              mpid: "49b73098-9623-4e4a-9c9a-b8bb11041039"
            }, {
              icon: Mail,
              href: '#',
              mpid: "e9b776ba-686a-45d6-96c9-884e53bb0074"
            }].map((social, index) => <a key={index} href={social.href} className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all" data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="ZenithPortfolio.tsx">
                  <social.icon className="w-5 h-5" data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="ZenithPortfolio.tsx" />
                </a>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="6aba822d-63b7-4f71-96af-5e1bc587883a" containerType="regular" prevTag="footer" className="relative py-12 px-6 border-t border-white/10" data-magicpath-id="89" data-magicpath-path="ZenithPortfolio.tsx">
        <SortableContainer dndKitId="1ab97938-6617-4a54-b156-66b9fa1a6075" containerType="regular" prevTag="div" className="container mx-auto relative z-10" data-magicpath-id="90" data-magicpath-path="ZenithPortfolio.tsx">
          <SortableContainer dndKitId="c95b81c9-a636-44b1-a67c-95e1bf7f67be" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between" data-magicpath-id="91" data-magicpath-path="ZenithPortfolio.tsx">
            <SortableContainer dndKitId="3a4d4544-2c87-4ef0-8080-2798d93051d1" containerType="regular" prevTag="div" className="flex items-center space-x-2 mb-4 md:mb-0" data-magicpath-id="92" data-magicpath-path="ZenithPortfolio.tsx">
              <SortableContainer dndKitId="45f7edf2-2297-4241-8264-1c791c8fa87e" containerType="regular" prevTag="div" className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center" data-magicpath-id="93" data-magicpath-path="ZenithPortfolio.tsx">
                <Zap className="w-5 h-5" data-magicpath-id="94" data-magicpath-path="ZenithPortfolio.tsx" />
              </SortableContainer>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" data-magicpath-id="95" data-magicpath-path="ZenithPortfolio.tsx">
                Zenith Technologies
              </span>
            </SortableContainer>
            <p className="text-gray-400 text-sm" data-magicpath-id="96" data-magicpath-path="ZenithPortfolio.tsx">© 2024 Zenith Technologies. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};