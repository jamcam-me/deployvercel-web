import React from 'react';
import { BaseComponent } from '../BaseComponent';
import { ContentBlockProps } from './types';

export const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  subtitle,
  alignment = 'left',
  backgroundColor,
  textColor,
  children,
  ...props
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const inlineStyles = {
    backgroundColor: backgroundColor || 'var(--bri-navy-800)', // Default to a BRI color
    color: textColor || 'var(--bri-light-stone)', // Default to a BRI color
  };

  return (
    <BaseComponent customClasses={`bri-card ${alignmentClasses[alignment]}`} style={inlineStyles} {...props}>
      {title && <h2 className="font-cinzel text-executive-gold text-2xl font-bold mb-2">{title}</h2>}
      {subtitle && <p className="font-futura text-lg mb-4">{subtitle}</p>}
      {children}
    </BaseComponent>
  );
};