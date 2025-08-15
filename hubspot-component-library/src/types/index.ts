export interface HubSpotModuleProps {
  moduleId?: string;
  moduleLabel?: string;
  moduleClasses?: string;
}

export type ComponentVariant = 'default' | 'hero' | 'card' | 'form' | 'gallery';
export type ThemeVariant = 'standard' | 'minimal' | 'corporate' | 'creative';

export interface CTAButton {
  text: string;
  url: string;
  target?: '_blank' | '_self';
  style?: 'primary' | 'secondary' | 'outline';
}

export interface HeroSectionProps extends HubSpotModuleProps {
  heading: string;
  subheading?: string;
  backgroundImage?: string;
  ctaButton?: CTAButton;
  overlay?: boolean;
  theme?: ThemeVariant;
}

export interface FeatureCardProps extends HubSpotModuleProps {
  title: string;
  description: string;
  icon: string; // URL to an icon image
  link?: {
    text: string;
    url: string;
  };
}