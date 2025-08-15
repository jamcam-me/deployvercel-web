'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  title: string;
  mainDescription: string; // Changed from 'description'
  additionalLine?: string; // New prop for the additional line
  metric?: string; // New metric field
  question?: string; // New strategic question field
  icon?: ReactNode;
  className?: string;
  link?: string; // Optional link
  locale?: "en" | "de"; // Optional locale
  onClick?: () => void; // Optional onClick handler
  showLearnMoreLink?: boolean; // New prop to control "Learn More" visibility
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  mainDescription, // Changed from 'description'
  additionalLine, // New prop
  metric,
  question,
  icon,
  className = '',
  link,
  locale = 'en',
  onClick,
  showLearnMoreLink = true // Default to true
}) => {
  const t = useTranslations();

  const CardContent = (
    <>
      <div className="flex items-center mb-4">
        {icon && (
          <div className="bg-cyber-navy text-executive-gold p-3 rounded-full mr-4 flex items-center justify-center w-12 h-12">
            {/* The icon itself should ideally have w-full h-full object-contain */}
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { className: 'w-full h-full object-contain' }) : icon}
          </div>
        )}
        <h4 className="text-executive-gold font-bold uppercase text-lg">{title}</h4>
      </div>
      
      {metric && <p className="service-metric mb-3">{metric}</p>}
      
      <p className="service-description text-cyber-graphite text-base">{mainDescription}</p>
      {additionalLine && <p className="text-gold-30 text-sm mt-1">{additionalLine}</p>}
      
      {question && <p className="service-question mt-4">{question}</p>}
    </>
  );

  if (link) {
    return (
      <Link href={link} onClick={onClick} className={cn(
        'service-card block relative flex flex-col aspect-[3/2] h-auto p-4', // Added p-4 for padding
        className
      )}>
        <div className="flex-grow flex flex-col">
          {CardContent}
        </div>
        {showLearnMoreLink && link && (
          <p className="service-learn-more-link mt-auto self-end text-right">
              {t('services.learnMore')}
          </p>
        )}
      </Link>
    );
  } else {
    return (
      <div className={cn(
        'service-card',
        className
      )}>
        {CardContent}
      </div>
    );
  }
};

export default ServiceCard;