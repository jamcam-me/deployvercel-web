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
          <h1 className="font-futura uppercase text-executive-gold tracking-wider text-2xl md:text-3xl lg:text-4xl pb-8"> {/* Reverted to executive-gold color */}
            {locale === 'en'
              ? (
                  <>
                    Bridging AI Innovation<br />
                    <span className="text-green-600">with Enterprise Security</span>
                  </>
                )
              : (
                  <>
                    Brücke zwischen KI-Innovation<br />
                    <span className="text-green-500">mit Unternehmenssicherheit</span><br />
                  </>
                )}
          </h1>
          
          {/* Buttons */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"> {/* Adjusted margin-top for buffer space, combined with pb-8 on h1 */}
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
