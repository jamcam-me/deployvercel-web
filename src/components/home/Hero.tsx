'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the props interface
interface HeroProps {
  locale: "en" | "de";
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  return (
    <div className="relative h-[80vh] w-full">
      <Image
        src="/images/hero_frankfurt.jpg"
        alt="Frankfurt skyline"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy/90 to-evergreen-intel/70 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Updated with metric-first approach */}
          <h1 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-4xl md:text-5xl lg:text-6xl mb-6">
            {locale === 'en'
              ? 'ACCELERATE SECURITY TRANSFORMATION'
              : 'BESCHLEUNIGEN SIE DIE SICHERHEITSTRANSFORMATION'}
          </h1>
          
          <h2 className="font-futura text-light-stone text-lg md:text-xl mb-6">
            {locale === 'en'
              ? 'Bridging AI Innovation with Enterprise Security'
              : 'Brücke zwischen KI-Innovation und Unternehmenssicherheit'}
          </h2>
          
          <h3 className="font-futura italic text-soft-steel mb-8 text-xl">
            {locale === 'en'
              ? 'Is your security strategy accelerating digital transformation or hindering it?'
              : 'Beschleunigt Ihre Sicherheitsstrategie die digitale Transformation oder behindert sie sie?'}
          </h3>
          
          <h4 className="font-futura font-semibold text-executive-gold text-base md:text-lg mb-4">
            {locale === 'en'
              ? '70% faster threat response via ML behavioral analytics'
              : '70% schnellere Bedrohungsabwehr durch ML-Verhaltensanalyse'}
          </h4>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/services`} className="primary-button">
              {locale === 'en' ? 'Explore Strategic Services' : 'Strategische Dienste entdecken'}
            </Link>
            
            <Link href={`/${locale}/contact`} className="secondary-button">
              {locale === 'en' ? 'Schedule Consultation' : 'Beratungstermin vereinbaren'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;