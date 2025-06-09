import React from 'react';
import { BaseComponent } from '../BaseComponent';
import { HeroSectionProps } from '../../types';

export const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  backgroundImage,
  ctaButton,
  overlay = true,
  theme = 'standard', // Keep theme prop for potential future conditional styles
  ...props
}) => {
  return (
    <BaseComponent
      customClasses={`hero-section ${theme}`} // Apply hero-section class from themes.css
      {...props}
    >
      <div className="hero-background" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}>
        {/* If image is needed as an <img> tag, place it here */}
      </div>
      {overlay && <div className="hero-overlay" />}
      <div className="hero-content">
        <h1 className="hero-heading">{heading}</h1>
        {subheading && <p className="hero-subheading">{subheading}</p>}
        {ctaButton && (
          <a href={ctaButton.url} className="hero-cta">
            {ctaButton.text}
          </a>
        )}
      </div>
    </BaseComponent>
  );
};