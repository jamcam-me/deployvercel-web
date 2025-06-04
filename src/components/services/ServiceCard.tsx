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
  onClick?: () => void; // Optional onClick handler
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  metric,
  question,
  icon,
  className = '',
  link,
  locale = 'en',
  onClick
}) => {
  const CardContent = (
    <>
      <div className="flex items-center mb-4">
        {icon && (
          <div className="bg-cyber-navy text-executive-gold p-3 rounded-full mr-4 flex items-center justify-center w-12 h-12">
            {/* The icon itself should ideally have w-full h-full object-contain */}
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { className: 'w-full h-full object-contain' }) : icon}
          </div>
        )}
        <h4 className="text-executive-gold font-bold uppercase">{title}</h4>
      </div>
      
      {metric && <p className="service-metric mb-3">{metric}</p>}
      
      <p className="service-description text-cyber-graphite flex-grow">{description}</p>
      
      {question && <p className="service-question mt-4">{question}</p>}
    </>
  );

  if (link) {
    return (
      <Link href={link} onClick={onClick} className={cn(
        'service-card block', // 'block' makes the link take the full width of the card
        className
      )}>
        {CardContent}
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