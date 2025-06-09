import React from 'react';
import { ThemeVariant } from '../types';

interface ThemeAdapterProps {
  theme: ThemeVariant;
  children: React.ReactNode;
}

export const ThemeAdapter: React.FC<ThemeAdapterProps> = ({ 
  theme, 
  children 
}) => {
  const themeClasses = {
    standard: 'theme-standard',
    minimal: 'theme-minimal',
    corporate: 'theme-corporate', 
    creative: 'theme-creative'
  };

  return (
    <div className={`theme-wrapper ${themeClasses[theme]}`}>
      {children}
    </div>
  );
};