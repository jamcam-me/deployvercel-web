import { HubSpotModuleProps, CTAButton } from '../../types';

export interface ContentBlockProps extends HubSpotModuleProps {
  title?: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  backgroundColor?: string; // CSS color string or var(--bri-color)
  textColor?: string; // CSS color string or var(--bri-color)
  children?: React.ReactNode;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  image?: string; // URL to author image
}

export interface FeatureItem {
  icon?: string; // Icon class or URL
  title: string;
  description: string;
  link?: CTAButton;
}

export interface ImageGalleryItem {
  image: string; // URL to image
  alt: string;
  caption?: string;
  link?: string; // URL for image click
}