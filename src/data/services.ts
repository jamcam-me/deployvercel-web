// File: src/data/services.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category?: 'ai' | 'advisory' | 'other'; // Add categories for grouping
  metric?: string; // For storing metrics
  metricDe?: string; // German translation
  question?: string; // For strategic questions
  questionDe?: string; // German translation
}

export const services: Service[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Leadership",
    description: "Strategic cybersecurity guidance for executives and boards.",
    icon: "shield"
  },
    {
    id: 'secure-ai',
    title: 'SECURE AI ADOPTION',
    description: 'Transform AI adoption from security blocker to business enabler with our framework-driven approach.',
    icon: 'brain',
    category: 'ai',
    metric: '60% faster AI deployment with enterprise-grade security',
    metricDe: '60% schnellere KI-Bereitstellung mit Sicherheit auf Unternehmensebene',
    question: 'Is your security team equipped to evaluate AI model risk?',
    questionDe: 'Ist Ihr Sicherheitsteam ausgerüstet, um KI-Modellrisiken zu bewerten?'
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Seamless integration of AI technologies with enterprise security frameworks.",
    icon: "brain"
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description: "Navigate complex regulatory environments with confidence.",
    icon: "check-square"
  },
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    description: "Executive-level guidance on digital transformation journeys.",
    icon: "strategy"
  }
];

export default services;
