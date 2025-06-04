'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the props interface
interface HeroProps {
  locale: "en" | "de";
  imageUrl: string;
  altText: string;
  overlayClass?: string;
  children: React.ReactNode;
  contentPosition?: string; // Add prop for content vertical alignment
  imagePosition?: string; // Add prop for object-position on the image
  heightClass?: string; // Add prop for custom height
}

const Hero: React.FC<HeroProps> = ({
  locale,
  imageUrl,
  altText,
  overlayClass = "bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50", // Default overlay
  children,
  contentPosition = "justify-center", // Default content position
  imagePosition = "object-center", // Default image position
  heightClass = "h-[80vh]" // Default height
}) => {
  return (
    <div className={`relative ${heightClass} w-full`}>
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className={`object-cover ${imagePosition}`}
        priority
      />
      <div className={`absolute inset-0 z-10 ${overlayClass}`} />
      <div className={`absolute inset-0 z-20 flex flex-col ${contentPosition} items-center text-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24`}>
        <div className="max-w-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
