'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  className = '' 
}) => {
  return (
    <div className={cn(
      'bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full',
      className
    )}>
      <div className="flex items-center mb-4">
        {icon && (
          <div className="bg-cyber-navy text-white p-3 rounded-full mr-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-cyber-navy">{title}</h3>
      </div>
      <p className="text-gray-700 flex-grow">{description}</p>
      <button className="mt-4 text-forest-green font-medium hover:text-gold transition">
        Learn More →
      </button>
    </div>
  );
};

export default ServiceCard;
