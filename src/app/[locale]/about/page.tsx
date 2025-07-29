/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { setRequestLocale } from 'next-intl/server';
import AboutContentOverview from '@/components/about/AboutContentOverview';
import Link from 'next/link';
import Hero from '@/components/home/Hero'; // Import the Hero component

interface AboutPageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how Big Rock Intelligence anchors your security and AI strategy with strategic guidance and executive-level insight.',
};

export default function About({ params }: AboutPageProps) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <>
      <Hero
        locale={locale}
        imageUrl="/images/Big Rock Formation-remix-grn.png"
        altText="Big Rock Formation Green"
        overlayClass="bg-cyber-navy/40"
        contentPosition="justify-center"
        imagePosition="object-[60%_55%]"
      >
        <div className="py-20 text-center space-y-6">
          <h1 className="font-cinzel text-executive-gold text-4xl md:text-5xl lg:text-6xl">
            Building Unbreakable Value—Not Just Unbreakable Walls.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-2xl mx-auto">
            Empowering organizations with AI-driven security, for boards that demand resilience and trust.
          </p>
        </div>
      </Hero>
      <AboutContentOverview locale={locale} />
      {/* THE OKOTOKS INSIGHT Section Header */}
      <section className="mb-16">
        <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">
          THE OKOTOKS INSIGHT: Why 'Big Rock Intelligence'
        </h2>
        {/* TODO: Integrate visual representation of rock/fissure/bridge metaphor with gold light effects */}
      </section>
    </>
  );
}
