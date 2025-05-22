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
          <h1 className="font-futura uppercase text-executive-gold tracking-wider text-3xl md:text-4xl lg:text-5xl pb-8"> {/* Made text smaller, added padding-bottom */}
            {locale === 'en'
              ? (
                  <>
                    Bridging AI Innovation<br />
                    <span className="text-green-60">with</span><br />
                    <span className="text-executive-gold">Enterprise Security</span><br />
                  </>
                )
              : (
                  <>
                    Brücke zwischen KI-Innovation<br />
                    <span className="text-green-60">mit</span><br />
                    <span className="text-executive-gold">Unternehmenssicherheit</span><br />
                  </>
                )}
          </h1>
          
          {/* Buttons */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"> {/* Adjusted margin-top for buffer space, combined with pb-8 on h1 */}
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