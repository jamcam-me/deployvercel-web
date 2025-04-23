'use client';

import { services } from '@/data/services';
import ServiceCard from './ServiceCard';

export default function ServicesList() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-cyber-navy mb-8 text-center uppercase tracking-wide">
          Our Services
        </h2>
        <p className="text-center text-cyber-navy/80 max-w-2xl mx-auto mb-12">
          Comprehensive cybersecurity and AI advisory services tailored to your organization's needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}