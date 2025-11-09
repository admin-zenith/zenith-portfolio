// Constants and static data for the Zenith Portfolio
import { Target, XCircle, AlertCircle, RefreshCw, Palette, Code2, TrendingUp, Sparkles, Bot, Zap } from 'lucide-react';
import type { TeamMember, Project, FailureReason, ApproachStep, FAQ } from './types';

// Enhanced tech stack with AI tools
export const TECH_STACK = [
  'React',
  'Next.js',
  'Laravel',
  'Node.js',
  'Tailwind',
  'TypeScript',
  'MySQL',
  'AWS'
];

export const AI_STACK = [
  'ChatGPT',
  'OpenAI',
  'Claude',
  'Gemini',
  'MagicPath',
  'GitHub Copilot'
];

export const FAILURE_REASONS: FailureReason[] = [
  {
    icon: Target,
    title: 'No clear direction',
    description: 'Building features without solving real problems—even AI-generated prototypes need human validation.'
  },
  {
    icon: XCircle,
    title: 'Poor experience',
    description: "The MVP works but users don't want to use it. Technology alone isn't enough."
  },
  {
    icon: AlertCircle,
    title: 'Overcomplicated',
    description: 'Too much, too soon drains resources. AI can accelerate, but simplicity wins.'
  },
  {
    icon: RefreshCw,
    title: 'No iteration',
    description: 'Launched once and never improved. Success requires continuous refinement.'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Define target users, goals, and key features through collaborative workshops.',
    icon: Target
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create clean, functional interfaces validated by user research.',
    icon: Palette
  },
  {
    number: '03',
    title: 'AI-Powered Acceleration',
    description: 'We leverage AI-assisted workflows for prototyping, testing, and development, while our team ensures quality and scalability.',
    icon: Bot
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build using scalable frameworks and industry best practices, supercharged with AI tools.',
    icon: Code2
  },
  {
    number: '05',
    title: 'Iterate',
    description: 'Refine based on real feedback and user data.',
    icon: TrendingUp
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Glenn Zaballero',
    role: 'Founder & Project Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80'
  },
  {
    name: 'Alex Chen',
    role: 'Senior Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80'
  },
  {
    name: 'Sarah Martinez',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80'
  },
  {
    name: 'Michael Kumar',
    role: 'Quality Engineer',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&q=80'
  }
];

export const RECENT_PROJECTS: Project[] = [
  {
    title: 'Buy & Design AI',
    description: 'AI-powered platform for predictive pricing and data-driven property insights.',
    tags: ['AI/ML', 'Real Estate', 'Predictive Analytics'],
    image: '🏡',
    aiEnhanced: true
  },
  {
    title: 'Cart & Tell',
    description: 'Multi-vendor eCommerce with AI-driven recommendations and live selling features.',
    tags: ['eCommerce', 'Live Streaming', 'AI'],
    image: '🛒',
    aiEnhanced: true
  },
  {
    title: 'ClinicPro',
    description: 'Smart booking with AI-powered patient scheduling and data-driven insights.',
    tags: ['Healthcare', 'SaaS', 'AI-Enhanced'],
    image: '🏥',
    aiEnhanced: true
  }
];

export const WHY_BUILD_WITH_US = [
  {
    icon: Bot,
    title: 'AI + Human Expertise',
    description: 'AI alone isn\'t enough—we provide architecture, integration, and human oversight for production-ready solutions.'
  },
  {
    icon: Zap,
    title: 'Faster & Smarter Builds',
    description: 'AI-assisted workflows let us deliver faster, reducing time and cost while maintaining quality.'
  },
  {
    icon: Sparkles,
    title: 'Validated by Real Engineers',
    description: 'Every AI-generated component is reviewed, tested, and refined by experienced developers.'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How does AI accelerate your development process?',
    answer: 'We use AI tools for rapid prototyping, code generation, and testing automation. However, every output is reviewed and refined by our engineering team to ensure production-quality code and scalable architecture.'
  },
  {
    question: 'How long does it take to build an AI-ready MVP?',
    answer: 'Most AI-enhanced projects take 30-60 days depending on scope. Our AI-assisted workflow lets us work in 2-week sprints for rapid, iterative delivery.'
  },
  {
    question: "What's included in the MVP package?",
    answer: 'Full project management, UI/UX design, AI-assisted development, testing, deployment, and 2 weeks of post-launch support. We also provide architecture documentation for future scaling.'
  },
  {
    question: 'Can you integrate AI features into my MVP?',
    answer: 'Absolutely. We specialize in integrating AI capabilities like natural language processing, predictive analytics, recommendation systems, and more using platforms like OpenAI, LangChain, and Hugging Face.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered AI-enhanced projects globally.'
  }
];

export const PRICING_CONFIG = {
  RATE_PER_DEV_PER_SPRINT: 120000,
  MIN_TEAM_SIZE: 1,
  MAX_TEAM_SIZE: 5,
  SPRINT_OPTIONS: [
    { value: 1, label: '2 weeks', desc: '1 sprint' },
    { value: 2, label: '4 weeks', desc: '2 sprints' },
    { value: 4, label: '8 weeks', desc: '4 sprints' }
  ]
};
