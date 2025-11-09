// Constants and static data for the Zenith Portfolio
import { Target, XCircle, AlertCircle, RefreshCw, Palette, Code2, TrendingUp } from 'lucide-react';
import type { TeamMember, Project, FailureReason, ApproachStep, FAQ } from './types';

export const TECH_STACK = [
  'Laravel',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'MySQL',
  'AWS',
  'TypeScript'
];

export const FAILURE_REASONS: FailureReason[] = [
  {
    icon: Target,
    title: 'No clear direction',
    description: 'Building features without solving real problems.'
  },
  {
    icon: XCircle,
    title: 'Poor experience',
    description: "The MVP works but users don't want to use it."
  },
  {
    icon: AlertCircle,
    title: 'Overcomplicated',
    description: 'Too much, too soon drains resources.'
  },
  {
    icon: RefreshCw,
    title: 'No iteration',
    description: 'Launched once and never improved.'
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
    title: 'Develop',
    description: 'Build using scalable frameworks and industry best practices.',
    icon: Code2
  },
  {
    number: '04',
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
    description: 'AI-powered property search and renovation planning platform.',
    tags: ['AI/ML', 'Real Estate'],
    image: '🏡'
  },
  {
    title: 'Cart & Tell',
    description: 'Multi-vendor eCommerce with live selling features.',
    tags: ['eCommerce', 'Live Streaming'],
    image: '🛒'
  },
  {
    title: 'ClinicPro',
    description: 'Smart booking and patient management system.',
    tags: ['Healthcare', 'SaaS'],
    image: '🏥'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How long does it take to build an MVP?',
    answer: 'Most projects take 4-8 weeks depending on scope. We work in 2-week sprints for rapid, iterative delivery.'
  },
  {
    question: "What's included in the MVP package?",
    answer: 'Full project management, UI/UX design, development, testing, deployment, and 2 weeks of post-launch support.'
  },
  {
    question: 'Can I scale the MVP later?',
    answer: 'Absolutely. We build with scalability in mind using modern, maintainable architecture that grows with you.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. We collaborate remotely using modern tools and have successfully delivered projects globally.'
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
