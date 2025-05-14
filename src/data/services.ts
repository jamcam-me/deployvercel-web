// File: src/data/services.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const services: Service[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Leadership",
    description: "Strategic cybersecurity guidance for executives and boards.",
    icon: "shield"
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
