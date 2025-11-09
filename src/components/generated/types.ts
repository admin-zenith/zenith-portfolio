// Type definitions for the Zenith Portfolio
export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  aiEnhanced?: boolean;
}

export interface FailureReason {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingCalculation {
  teamSize: number;
  sprints: number;
  totalPrice: string;
  duration: number;
}

export interface WhyBuildWithUs {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
