'use client';

import React from 'react';
import { Service } from '@/data/services'; // Import Service interface
import ServiceCard from './ServiceCard';

// Define the props interface to accept the locale and services to render
interface ServicesListProps {
  locale: "en" | "de";
  servicesToRender: Service[]; // Services filtered and passed down from parent
}

const ServicesList: React.FC<ServicesListProps> = ({ locale, servicesToRender }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToRender.map((service) => (
            <ServiceCard
              key={service.id}
              // Use direct properties from the service object
              title={service.title}
              mainDescription={service.description}
              metric={service.metric}
              question={service.question}
              icon={renderIcon(service.icon)}
              link={`/${locale}/services/${service.id}`} // Ensure correct link structure
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to render icons based on icon name
function renderIcon(iconName: string) {
  // Basic SVG paths for demonstration. Replace with actual SVG components or image imports if available.
  // Using simple placeholders or existing ones for now.
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
          iconName === 'link' ?
            "M17 16l4-4m0 0l-4-4m4 4H7m6 4a2 2 0 11-4 0 2 2 0 014 0zM7 8a2 2 0 11-4 0 2 2 0 014 0z" : // Simple chain link icon
          iconName === 'chart-bar' ?
            "M9 12h6m-6 4h6m2 8h-16a2 2 0 01-2-2V2a2 2 0 012-2h16a2 2 0 012 2v20a2 2 0 01-2 2z" : // Chart bar icon
          iconName === 'executive_education' ?
            "M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM12 13c-2.651 0-4.819 1.936-5.143 4.5l-.286 2c-.08.56.368 1.054.931 1.054h8.896c.563 0 1.011-.494.931-1.054l-.286-2C16.819 14.936 14.651 13 12 13z" : // Simple person icon
          iconName === 'governance_risk' ?
            "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" : // Simple G/R icon (overlapping squares or shield)
          iconName === 'ai_security' ?
            "M8 9l3 3-3 3m5 0v1m-1-1h1m-1-1a2 2 0 11-4 0 2 2 0 014 0zM12 3v1m-1-1h1m-1-1a2 2 0 11-4 0 2 2 0 014 0zM16 12h1m-1-1a2 2 0 11-4 0 2 2 0 014 0zM4 12H3m1-1a2 2 0 11-4 0 2 2 0 014 0zM12 21v1m-1-1h1m-1-1a2 2 0 11-4 0 2 2 0 014 0z" : // Simplified AI security icon
          iconName === 'ma_due_diligence' ?
            "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" : // Briefcase icon
          iconName === 'platform_audit' ?
            "M4 5a2 2 0 00-2 2v3a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2H4zm0 8h16l-.293.293A1 1 0 0119 14.414V17a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.586a1 1 0 01-.293-.707L4 13z" : // Server rack icon
          iconName === 'gold-shield' ?
            "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" : // Reusing shield for general gold theme
          iconName === 'gold-chart' ?
            "M11 3.055A9.949 9.949 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.49.362-2.906 1.006-4.148M12 12V3.055M12 12h9.945" : // Reusing chart for general gold theme
          iconName === 'gold-education' ?
            "M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM12 13c-2.651 0-4.819 1.936-5.143 4.5l-.286 2c-.08.56.368 1.054.931 1.054h8.896c.563 0 1.011-.494.931-1.054l-.286-2C16.819 14.936 14.651 13 12 13z" : // Reusing executive_education for general gold theme
          iconName === 'gold-check' ?
            "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" : // Reusing shield for general gold theme
          iconName === 'gold-governance' ?
            "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" : // Reusing governance_risk for general gold theme
          "M9 5l7 7-7 7"  // Default path
        }
      />
    </svg>
  );
}

export default ServicesList;