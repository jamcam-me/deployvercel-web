'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  metric?: string; // New metric field
  question?: string; // New strategic question field
  icon?: ReactNode;
  className?: string;
  link?: string; // Optional link
  locale?: "en" | "de"; // Optional locale
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  metric,
  question,
  icon, 
  className = '',
  link,
  locale = 'en'
}) => {
  // Translations
  const learnMore = locale === 'en' ? 'Learn More' : 'Mehr erfahren';
  
  return (
    <div className={cn(
      'service-card',
      className
    )}>
      <div className="flex items-center mb-4">
        {icon && (
          <div className="bg-cyber-navy text-executive-gold p-3 rounded-full mr-4">
            {icon}
          </div>
        )}
        <h4 className="text-executive-gold font-bold uppercase">{title}</h4>
      </div>
      
      {/* New metric field - shown if provided */}
      {metric && <p className="service-metric mb-3">{metric}</p>}
      
      <p className="service-description text-cyber-graphite flex-grow">{description}</p>
      
      {/* New strategic question - shown if provided */}
      {question && <p className="service-question mt-4">{question}</p>}
      
      {link ? (
        <Link href={link} className="service-link mt-4 inline-block">
          {learnMore} →
        </Link>
      ) : (
        <button className="service-link mt-4 inline-block">
          {learnMore} →
        </button>
      )}
    </div>
  );
};

export default ServiceCard;