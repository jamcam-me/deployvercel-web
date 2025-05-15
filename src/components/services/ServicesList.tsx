'use client';

import React from 'react';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';

// Define the props interface to accept the locale
interface ServicesListProps {
  locale: "en" | "de";
}

const ServicesList: React.FC<ServicesListProps> = ({ locale }) => {
  // Translations
  const translations = {
    title: locale === 'en' ? 'STRATEGIC SERVICES' : 'STRATEGISCHE DIENSTLEISTUNGEN',
    aiGovernance: locale === 'en' ? 'AI GOVERNANCE & INTEGRATION' : 'KI-GOVERNANCE & INTEGRATION',
    executive: locale === 'en' ? 'EXECUTIVE ADVISORY' : 'EXECUTIVE BERATUNG',
    viewAll: locale === 'en' ? 'View All Services' : 'Alle Dienstleistungen anzeigen',
    leadMetric: locale === 'en' 
      ? '93% of enterprises plan to increase AI investments while 86% struggle with AI security governance' 
      : '93% der Unternehmen planen, KI-Investitionen zu erhöhen, während 86% mit KI-Sicherheits-Governance kämpfen',
    culturalRef: locale === 'en'
      ? 'From fractured to fortified. What we protect today powers the value of tomorrow.'
      : 'Von zersplittert zu gestärkt. Was wir heute schützen, stärkt den Wert von morgen.',
    strategicQ: locale === 'en'
      ? 'How would your organization benefit from aligned security and innovation strategies?'
      : 'Wie würde Ihre Organisation von aufeinander abgestimmten Sicherheits- und Innovationsstrategien profitieren?'
  };

  // Enhanced service data with metrics and questions
  const enhancedServices = services.map(service => {
    // This adds our enhanced fields while preserving the original data
    // You'll need to add actual metrics and questions to your services data
    // This is just a temporary solution for the quick win
    return {
      ...service,
      metric: getServiceMetric(service.id, locale),
      question: getServiceQuestion(service.id, locale),
      link: `/services/${service.id}` // Assuming this is your link structure
    };
  });

  // Group services by category
  const aiServices = enhancedServices.filter(s => s.category === 'ai');
  const advisoryServices = enhancedServices.filter(s => s.category === 'advisory');
  // Add other categories as needed

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Leading with a metric */}
        <p className="metric-highlight text-center mb-4">
          {translations.leadMetric}
        </p>
        
        <h2 className="section-title text-center mb-12">
          {translations.title}
        </h2>
        
        {/* AI Governance & Integration Category */}
        {aiServices.length > 0 && (
          <div className="service-category">
            <h3 className="font-futura font-bold uppercase text-cyber-navy mb-4">
              {translations.aiGovernance}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  metric={service.metric}
                  question={service.question}
                  icon={renderIcon(service.icon)}
                  link={service.link}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Executive Advisory Category */}
        {advisoryServices.length > 0 && (
          <div className="service-category mt-16">
            <h3 className="font-futura font-bold uppercase text-cyber-navy mb-4">
              {translations.executive}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advisoryServices.map((service) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  metric={service.metric}
                  question={service.question}
                  icon={renderIcon(service.icon)}
                  link={service.link}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Add fallback if categories aren't set up yet */}
        {(!aiServices.length && !advisoryServices.length) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedServices.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                metric={service.metric}
                question={service.question}
                icon={renderIcon(service.icon)}
                link={service.link}
                locale={locale}
              />
            ))}
          </div>
        )}
        
        {/* Cultural reference and strategic question */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="cultural-reference">
            {translations.culturalRef}
          </p>
          
          <p className="strategic-question mt-4 mb-8">
            {translations.strategicQ}
          </p>
          
          <Link href={`/${locale}/contact`} className="primary-button">
            {locale === 'en' ? 'Schedule a Strategy Session' : 'Strategiegespräch vereinbaren'}
          </Link>
        </div>
      </div>
    </section>
  );
};

// Helper function to render icons based on icon name
function renderIcon(iconName: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d={
          iconName === 'shield' ? 
            "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" :
          iconName === 'brain' ? 
            "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" :
          iconName === 'check-square' ? 
            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" :
          "M9 5l7 7-7 7"  // Default path
        } 
      />
    </svg>
  );
}

// Helper function to get service metrics
function getServiceMetric(serviceId: string, locale: string): string {
  const metrics = {
    'secure-ai': {
      en: '60% faster AI deployment with enterprise-grade security',
      de: '60% schnellere KI-Bereitstellung mit Sicherheit auf Unternehmensebene'
    },
    'ai-governance': {
      en: '40% reduced compliance complexity through unified governance',
      de: '40% reduzierte Compliance-Komplexität durch einheitliche Governance'
    },
    'ml-security': {
      en: '75% reduction in ML pipeline vulnerabilities',
      de: '75% Reduktion von Schwachstellen in ML-Pipelines'
    },
    'executive-advisory': {
      en: '30% improved board confidence in security posture',
      de: '30% verbessertes Vorstandsvertrauen in die Sicherheitslage'
    },
    'ma-due-diligence': {
      en: '$3.2M average risk reduction in acquisition targets',
      de: 'Durchschnittliche Risikominderung von 3,2 Mio. $ bei Akquisitionszielen'
    },
    'security-strategy': {
      en: '50% improved alignment between security and business goals',
      de: '50% verbesserte Ausrichtung zwischen Sicherheits- und Geschäftszielen'
    },
    // Add metrics for other services
  };
  
  // Return the metric if it exists, otherwise return a default metric
  return metrics[serviceId]?.[locale] || 
    (locale === 'en' ? 'Strategic business impact through security excellence' : 'Strategische Geschäftsauswirkung durch Sicherheitsexzellenz');
}

// Helper function to get service questions
function getServiceQuestion(serviceId: string, locale: string): string {
  const questions = {
    'secure-ai': {
      en: 'Is your security team equipped to evaluate AI model risk?',
      de: 'Ist Ihr Sicherheitsteam ausgerüstet, um KI-Modellrisiken zu bewerten?'
    },
    'ai-governance': {
      en: 'How is your organization balancing AI innovation with risk management?',
      de: 'Wie balanciert Ihre Organisation KI-Innovation mit Risikomanagement?'
    },
    'ml-security': {
      en: 'What security controls protect your ML models and training data?',
      de: 'Welche Sicherheitskontrollen schützen Ihre ML-Modelle und Trainingsdaten?'
    },
    'executive-advisory': {
      en: 'Does your board have the insights needed to govern AI and security risks effectively?',
      de: 'Verfügt Ihr Vorstand über die nötigen Erkenntnisse, um KI- und Sicherheitsrisiken effektiv zu steuern?'
    },
    'ma-due-diligence': {
      en: 'How confident are you in your target\'s security posture and AI governance?',
      de: 'Wie zuversichtlich sind Sie bezüglich der Sicherheitslage und KI-Governance Ihres Zielunternehmens?'
    },
    'security-strategy': {
      en: 'Is your security strategy a cost center or a business enabler?',
      de: 'Ist Ihre Sicherheitsstrategie ein Kostenfaktor oder ein Geschäftsförderer?'
    },
    // Add questions for other services
  };
  
  // Return the question if it exists, otherwise return a default question
  return questions[serviceId]?.[locale] || 
    (locale === 'en' ? 'How could our expertise enhance your security posture?' : 'Wie könnte unsere Expertise Ihre Sicherheitslage verbessern?');
}

export default ServicesList;