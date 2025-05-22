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
    <div className="relative h-[80vh] w-full"> {/* Corrected height of hero section */}
      <Image
        src="/images/hero_frankfurt.jpg"
        alt="Frankfurt skyline"
        fill
        className="object-cover object-center" /* Centered image to show more of the skyline */
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24"> {/* Aligned text vertically centered and added top padding to clear header */}
        <div className="max-w-3xl">
          {/* Main Hero Text */}
          <h1 className="font-futura uppercase text-navy-60 tracking-wider text-4xl md:text-5xl lg:text-6xl mb-8"> {/* Changed color to green-60 */}
            {locale === 'en'
              ? 'Bridging AI Innovation with Enterprise Security'
              : 'Brücke zwischen KI-Innovation und Unternehmenssicherheit'}
          </h1>
          
          {/* Buttons */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"> {/* Changed to grid for 2 columns, added w-full */}
            <Link href={`/${locale}/services`} className="primary-button text-2xl px-8 py-4 w-full"> {/* Increased button size, added w-full */}
              {locale === 'en' ? 'Explore Strategic Services' : 'Strategische Dienste entdecken'}
            </Link>
            
            <Link href={`/${locale}/contact`} className="secondary-button text-2xl px-8 py-4 w-full"> {/* Increased button size, added w-full */}
              {locale === 'en' ? 'Schedule Consultation' : 'Beratungstermin vereinbaren'}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;