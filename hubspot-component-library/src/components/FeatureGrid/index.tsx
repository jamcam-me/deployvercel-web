import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { FeatureItem } from '../ContentBlock/types';

interface FeatureGridProps {
  features: FeatureItem[];
  title?: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  title,
  subtitle,
  alignment = 'center',
}) => {
  return (
    <ContentBlock title={title} subtitle={subtitle} alignment={alignment}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="bri-card text-center">
            {feature.icon && (
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-16 h-16 mx-auto mb-4 object-contain" 
              />
            )}
            <h3 className="font-cinzel text-executive-gold text-xl font-bold mb-2">{feature.title}</h3>
            <p className="font-futura text-light-stone text-base mb-4">{feature.description}</p>
            {feature.link && (
              <a 
                href={feature.link.url} 
                target={feature.link.target || '_self'} 
                className="bri-button bri-button--secondary mt-auto"
              >
                {feature.link.text}
              </a>
            )}
          </div>
        ))}
      </div>
    </ContentBlock>
  );
};