'use client';

import React from 'react';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

// Define the props interface to accept the locale
interface ServicesListProps {
  locale: "en" | "de";
}

// Define TypeScript interfaces for our helper function objects
interface LocalizedContent {
  en: string;
  de: string;
}

interface MetricsMap {
  [key: string]: LocalizedContent;
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
    return {
      ...service,
      metric: getServiceMetric(service.id, locale === 'en' ? 'en' : 'de'),
      question: getServiceQuestion(service.id, locale === 'en' ? 'en' : 'de'),
      link: `/services/${service.id}` // Assuming this is your link structure
    };
  });

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
        
        {/* For now, just render all services */}
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
        
        {/* Cultural reference and strategic question */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="cultural-reference">
            {translations.culturalRef}
          </p>
          
          <p className="strategic-question mt-4 mb-8">
            {translations.strategicQ}
          </p>
          
          <a href={`/${locale}/contact`} className="primary-button">
            {locale === 'en' ? 'Schedule a Strategy Session' : 'Strategiegespräch vereinbaren'}
          </a>
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
function getServiceMetric(serviceId: string, localeKey: 'en' | 'de'): string {
  // Simplified version with fewer entries for now
  const metrics: MetricsMap = {
    'secure-ai': {
      en: '60% faster AI deployment with enterprise-grade security',
      de: '60% schnellere KI-Bereitstellung mit Sicherheit auf Unternehmensebene'
    },
    'executive-advisory': {
      en: '30% improved board confidence in security posture',
      de: '30% verbessertes Vorstandsvertrauen in die Sicherheitslage'
    }
    // Add more as needed
  };
  
  // Return the metric if it exists, otherwise return a default metric
  const defaultMetrics = {
    en: 'Strategic business impact through security excellence', 
    de: 'Strategische Geschäftsauswirkung durch Sicherheitsexzellenz'
  };
  
  return metrics[serviceId]?.[localeKey] || defaultMetrics[localeKey];
}

// Helper function to get service questions
function getServiceQuestion(serviceId: string, localeKey: 'en' | 'de'): string {
  // Simplified version with fewer entries for now
  const questions: MetricsMap = {
    'secure-ai': {
      en: 'Is your security team equipped to evaluate AI model risk?',
      de: 'Ist Ihr Sicherheitsteam ausgerüstet, um KI-Modellrisiken zu bewerten?'
    },
    'executive-advisory': {
      en: 'Does your board have the insights needed to govern AI and security risks effectively?',
      de: 'Verfügt Ihr Vorstand über die nötigen Erkenntnisse, um KI- und Sicherheitsrisiken effektiv zu steuern?'
    }
    // Add more as needed
  };
  
  // Return the question if it exists, otherwise return a default question
  const defaultQuestions = {
    en: 'How could our expertise enhance your security posture?',
    de: 'Wie könnte unsere Expertise Ihre Sicherheitslage verbessern?'
  };
  
  return questions[serviceId]?.[localeKey] || defaultQuestions[localeKey];
}

export default ServicesList;