import React from 'react';
import { HubSpotModuleProps, ComponentVariant } from '../../types';

interface BaseComponentProps extends HubSpotModuleProps {
  variant?: ComponentVariant;
  theme?: string;
  customClasses?: string;
  children: React.ReactNode;
  style?: React.CSSProperties; /* Added to allow inline styles */
}

export const BaseComponent: React.FC<BaseComponentProps> = ({
  variant = 'default',
  theme = 'standard',
  customClasses = '',
  children,
  ...props
}) => {
  // Map variant and theme to BRI-specific classes if needed, or apply directly
  // For now, we'll apply a generic 'bri-component' and let specific components
  // apply their own BRI classes from themes.css or inline Tailwind.
  // The 'theme' prop can still be used for conditional styling if multiple visual themes exist.

  return (
    <div className={`bri-component ${customClasses}`} {...props}>
      {children}
    </div>
  );
};