'use client';

import React from 'react';
import { services } from '@/data/services';

// Define the props interface to accept the locale
interface ServicesListProps {
  locale: "en" | "de";
}

const ServicesList: React.FC<ServicesListProps> = ({ locale }) => {
  // You can use the locale prop to provide translations
  const translations = {
    learnMore: locale === 'en' ? 'Learn More' : 'Mehr erfahren',
    // Add other translations as needed
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {services.map((service) => (
        <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
          <div className="flex items-center mb-4">
            {service.icon && (
              <div className="bg-cyber-navy text-white p-3 rounded-full mr-4">
                {/* Icon representation based on the icon name, can be customized */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={
                      service.icon === 'shield' ? 
                        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" :
                      service.icon === 'brain' ? 
                        "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" :
                      service.icon === 'check-square' ? 
                        "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" :
                      "M9 5l7 7-7 7"  // Default path
                    } 
                  />
                </svg>
              </div>
            )}
            <h3 className="text-xl font-bold text-cyber-navy">{service.title}</h3>
          </div>
          <p className="text-gray-700 flex-grow">{service.description}</p>
          <button className="mt-4 text-forest-green font-medium hover:text-gold transition">
            {translations.learnMore} →
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
