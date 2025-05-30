// File: src/data/services.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category?: 'ai' | 'advisory' | 'general'; // Add categories for grouping
  categoryType?: 'enterprise' | 'smb' | 'vc_pe' | 'board' | 'general'; // Add a type for broader categorization
  metric?: string; // For storing metrics
  metricDe?: string; // German translation
  question?: string; // For strategic questions
  questionDe?: string; // German translation
}

export const services: Service[] = [
  // Enterprise Leader Advisory Services
  {
    id: "executive-communication-framework",
    title: "Executive Communication Framework",
    description: "Transform technical security metrics into strategic business insights that resonate with board members and C-suite executives.",
    icon: "executive_education",
    category: "advisory",
    categoryType: "enterprise",
    metric: "85% improvement in executive alignment on security priorities",
    question: "Does your board see security as a cost center or strategic enabler? How effectively are you translating technical security metrics into business impact language your executives understand and value?"
  },
  {
    id: "cyber-risk-quantification",
    title: "Cyber Risk Quantification",
    description: "Replace subjective risk assessments with data-driven financial modeling that quantifies cyber risks in monetary terms.",
    icon: "governance_risk",
    category: "advisory",
    categoryType: "enterprise",
    metric: "60% more targeted security investments",
    question: "Can you express your top cyber risks in revenue impact terms your CFO will understand? How are you currently deciding which security investments deliver the highest risk reduction per dollar spent?"
  },
  {
    id: "ai-security-strategy-enterprise",
    title: "AI Security Strategy",
    description: "Develop a comprehensive AI security roadmap that aligns with your enterprise's AI adoption journey.",
    icon: "ai_security",
    category: "advisory",
    categoryType: "enterprise",
    metric: "70% more secure AI deployments",
    question: "How are you securing your AI initiatives differently from traditional applications? What protection mechanisms have you implemented against uniquely AI-centric threats like model poisoning or inference manipulation?"
  },
  // SMB Owner Advisory Services
  {
    id: "fractional-ciso-service",
    title: "Fractional CISO Service",
    description: "Access senior security leadership expertise without the full-time executive cost.",
    icon: "executive_education",
    category: "advisory",
    categoryType: "smb",
    metric: "75% cost savings vs. full-time CISO",
    question: "What security expertise gaps are limiting your business growth? How is the lack of executive security leadership impacting your ability to enter new markets or close enterprise deals?"
  },
  {
    id: "investment-ready-security",
    title: "Investment-Ready Security",
    description: "Prepare your security posture for investor scrutiny and due diligence.",
    icon: "ma_due_diligence",
    category: "advisory",
    categoryType: "smb",
    metric: "85% improved investor security confidence",
    question: "Would your security program withstand investor due diligence today? What security gaps might be negatively impacting your company's valuation or creating post-investment surprises?"
  },
  {
    id: "cloud-security-optimization",
    title: "Cloud Security Optimization",
    description: "Maximize cloud security while minimizing costs and complexity for growing businesses.",
    icon: "platform_audit",
    category: "advisory",
    categoryType: "smb",
    metric: "55% reduction in cloud security costs",
    question: "Is your cloud environment both secure and cost-optimized? How effectively are you leveraging native security capabilities in your cloud platforms versus paying for additional security tools?"
  },
  // VC & Private Equity Advisory Services
  {
    id: "technical-value-creation",
    title: "Technical Value Creation",
    description: "Transform security from a due diligence checkbox into a strategic value accelerator across your portfolio.",
    icon: "gold-shield", // placeholder icon
    category: "advisory",
    categoryType: "vc_pe",
    metric: "Up to 15% valuation improvement through security optimization",
    question: "Is your security strategy enhancing or limiting company valuations? How effectively have you translated security investments into tangible business value that investors recognize and reward?"
  },
  {
    id: "cybersecurity-investment-advisory",
    title: "Cybersecurity Investment Advisory",
    description: "Gain strategic insight into cybersecurity market trends, investment opportunities, and technology evolution to inform investment theses and portfolio strategy.",
    icon: "gold-chart", // placeholder icon
    category: "advisory",
    categoryType: "vc_pe",
    metric: "3x better identification of security market opportunities",
    question: "What emerging security categories represent the highest growth potential over the next 24-36 months? How effectively can you evaluate the technical differentiation claims of security startups?"
  },
  // Board Member Advisory Services
  {
    id: "board-cyber-education-program",
    title: "Board Cyber Education Program",
    description: "Elevate your board's security expertise through our tailored education program that builds cyber fluency through contextual learning without technical overload.",
    icon: "gold-education", // placeholder icon
    category: "advisory",
    categoryType: "board",
    metric: "90% increase in board cyber confidence",
    question: "How confident is your board in evaluating AI and security investments? What knowledge gaps prevent directors from providing effective security governance and appropriate challenge to management?"
  },
  {
    id: "security-investment-validation",
    title: "Security Investment Validation",
    description: "Verify the effectiveness of your organization's security investments with independent validation of security program performance and spending efficiency.",
    icon: "gold-check", // placeholder icon
    category: "advisory",
    categoryType: "board",
    metric: "35% identification of misaligned investments",
    question: "How do you know your security investments are delivering intended outcomes? What objective validation confirms your security spending is optimally allocated against actual risks?"
  },
  {
    id: "ai-governance-advisory",
    title: "AI Governance Advisory",
    description: "Develop board-level governance frameworks for responsible AI adoption and oversight.",
    icon: "gold-governance", // placeholder icon
    category: "advisory",
    categoryType: "board",
    metric: "80% improvement in AI governance clarity",
    question: "What governance mechanisms has your board established specifically for AI oversight? How do you ensure appropriate balance between AI innovation and responsible deployment?"
  },
  // General Services
  {
    id: "cybersecurity",
    title: "Cybersecurity Leadership",
    description: "Strategic cybersecurity guidance for executives and boards.",
    icon: "shield",
    category: "general",
    categoryType: "general"
  },
  {
    id: 'secure-ai',
    title: 'SECURE AI ADOPTION',
    description: 'Transform AI adoption from security blocker to business enabler with our framework-driven approach.',
    icon: 'brain',
    category: 'general',
    categoryType: "general",
    metric: '60% faster AI deployment with enterprise-grade security',
    metricDe: '60% schnellere KI-Bereitstellung mit Sicherheit auf Unternehmensebene',
    question: 'Is your security team equipped to evaluate AI model risk?',
    questionDe: 'Ist Ihr Sicherheitsteam ausgerüstet, um KI-Modellrisiken zu bewerten?'
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Seamless integration of AI technologies with enterprise security frameworks.",
    icon: "link", // Changed from 'brain' to 'link' for uniqueness
    category: "general",
    categoryType: "general"
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description: "Navigate complex regulatory environments with confidence.",
    icon: "check-square",
    category: "general",
    categoryType: "general"
  },
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    description: "Executive-level guidance on digital transformation journeys.",
    icon: "chart-bar", // Changed from 'strategy' to 'chart-bar'
    category: "general",
    categoryType: "general"
  }
];

export default services;
