import { Locale } from '@/lib/i18n';
import ServiceCard from './ServiceCard';

interface ServicesListProps {
  locale: Locale;
}

export default function ServicesList({ locale }: ServicesListProps) {
  const services = [
    {
      id: 'ai-security',
      title: locale === 'en' ? 'AI Security Advisory' : 'KI-Sicherheitsberatung',
      description: locale === 'en'
        ? 'Strategic AI integration into enterprise security with risk assessment using advanced AI/ML models. Tailored for mid-large enterprises and boards.'
        : 'Strategische KI-Integration in die Unternehmenssicherheit mit Risikobewertung durch fortschrittliche KI/ML-Modelle. Maßgeschneidert für mittelgroße bis große Unternehmen und Vorstände.',
      icon: '/images/service_icons/ai_security.png',
    },
    {
      id: 'governance-risk',
      title: locale === 'en' ? 'Governance & Risk Consulting' : 'Governance & Risikoberatung',
      description: locale === 'en'
        ? 'CISO-level guidance for boards and founders with governance frameworks and compliance alignment. Focused on boards and SMBs.'
        : 'CISO-Level-Beratung für Vorstände und Gründer mit Governance-Frameworks und Compliance-Ausrichtung. Fokussiert auf Vorstände und KMUs.',
      icon: '/images/service_icons/governance_risk.png',
    },
    {
      id: 'ma-due-diligence',
      title: locale === 'en' ? 'M&A Due Diligence' : 'M&A Due Diligence',
      description: locale === 'en'
        ? 'Specialized technical evaluation for investors, providing comprehensive security and technology assessment for acquisition targets. Designed for VC, PE, and strategic buyers.'
        : 'Spezialisierte technische Bewertung für Investoren, die eine umfassende Sicherheits- und Technologiebewertung für Akquisitionsziele bietet. Konzipiert für VC, PE und strategische Käufer.',
      icon: '/images/service_icons/ma_due_diligence.png',
    },
    {
      id: 'executive-education',
      title: locale === 'en' ? 'Executive Education' : 'Executive Education',
      description: locale === 'en'
        ? 'Customized training sessions for C-suite executives and board committees on cybersecurity and AI integration strategies.'
        : 'Maßgeschneiderte Schulungen für C-Suite-Führungskräfte und Vorstandsausschüsse zu Strategien für Cybersicherheit und KI-Integration.',
      icon: '/images/service_icons/executive_education.png',
    },
    {
      id: 'platform-audit',
      title: locale === 'en' ? 'Platform Security Audits' : 'Plattform-Sicherheitsaudits',
      description: locale === 'en'
        ? 'Comprehensive security auditing, tech stack review, and functionality testing, with specialized focus on fintech and crowdinvesting platforms.'
        : 'Umfassende Sicherheitsaudits, Tech-Stack-Reviews und Funktionstests, mit speziellem Fokus auf Fintech- und Crowdinvesting-Plattformen.',
      icon: '/images/service_icons/platform_audit.png',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          locale={locale}
        />
      ))}
    </div>
  );
}