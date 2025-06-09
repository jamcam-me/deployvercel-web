import React from 'react';
import { BaseComponent } from '../BaseComponent';
import { FeatureCardProps } from '../../types';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  link,
  ...props
}) => {
  return (
    <BaseComponent customClasses="feature-card" {...props}>
      <div className="feature-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {link && (
        <a href={link.url} className="feature-link">
          {link.text}
        </a>
      )}
    </BaseComponent>
  );
};