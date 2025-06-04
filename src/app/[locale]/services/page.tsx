'use client'; // This is a client component
// Services page with Advisory Services displayed first, followed by General Services

import { useState } from 'react';
import ServicesList from '@/components/services/ServicesList';
import { Locale } from '@/lib/i18n';
import { services } from '@/data/services'; // Import the services data
import { useTranslations } from 'next-intl'; // Import for translations
import Link from 'next/link';
import Hero from '@/components/home/Hero'; // Import the Hero component

interface ServicesPageProps {
  params: {
    locale: Locale;
  };
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = params;
  const tServices = useTranslations('services'); // Access translations for the 'services' section
  const tAbout = useTranslations('nav'); // Access translations for the 'nav' section
  const tContact = useTranslations('contact'); // Access translations for the 'contact' section

  const [activeTab, setActiveTab] = useState<'enterprise' | 'smb' | 'vc_pe' | 'board'>('enterprise');

  const generalServices = services.filter(service => service.category === 'general');
  const advisoryServices = services.filter(service => service.category === 'advisory');

  const enterpriseAdvisory = advisoryServices.filter(service => service.categoryType === 'enterprise');
  const smbAdvisory = advisoryServices.filter(service => service.categoryType === 'smb');
  const vcPeAdvisory = advisoryServices.filter(service => service.categoryType === 'vc_pe');
  const boardAdvisory = advisoryServices.filter(service => service.categoryType === 'board');

  return (
    <>
      <Hero
        locale={locale}
        imageUrl="/images/Frankfurt Skyline at Dusk.png"
        altText="Frankfurt Skyline at Dusk"
        overlayClass="bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50"
        contentPosition="justify-center"
      >
        <h1 className="font-futura uppercase font-bold tracking-wider text-2xl md:text-3xl lg:text-4xl pb-8">
          <span className="text-executive-gold block">Comprehensive cybersecurity,</span>
          <span className="text-executive-gold block">data & AI advisory services</span>
          <span className="text-navy-400 block">tailored to your organization&apos;s needs.</span>
        </h1>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto justify-items-center">
          <Link href={`/${locale}/about`} className="primary-button">
            {tAbout('about')}
          </Link>
          <Link href="https://outlook.office.com/book/contactbigrockintelai@bigrock-intelligence.com/?ismsaljsauthenabled" className="secondary-button">
            {locale === 'en' ? 'Schedule Consultation' : 'Beratungstermin vereinbaren'}
          </Link>
        </div>
      </Hero>

      <div className="container-custom section bg-white text-gray-800 pt-16"> {/* Added pt-16 for consistent padding */}
        {/* Advisory Services Section */}
        <h2 className="section-title text-center mb-8">
          {tServices('advisory.title')}
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          {tServices('advisory.description')}
        </p>

        {/* Tabs for Advisory Services */}
        <div className="flex justify-center flex-wrap mb-8">
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'enterprise' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('enterprise')}
          >
            {tServices('advisory.enterpriseLeaders')}
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'smb' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('smb')}
          >
            {tServices('advisory.smbOwners')}
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'vc_pe' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('vc_pe')}
          >
            {tServices('advisory.vcPeFirms')}
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'board' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('board')}
          >
            {tServices('advisory.boardMembers')}
          </button>
        </div>

        {/* Render Services based on active tab */}
        <div className="tab-content">
          {activeTab === 'enterprise' && <ServicesList locale={locale} servicesToRender={enterpriseAdvisory} />}
          {activeTab === 'smb' && <ServicesList locale={locale} servicesToRender={smbAdvisory} />}
          {activeTab === 'vc_pe' && <ServicesList locale={locale} servicesToRender={vcPeAdvisory} />}
          {activeTab === 'board' && <ServicesList locale={locale} servicesToRender={boardAdvisory} />}
        </div>

        {/* General Services Section */}
        <h2 className="section-title text-center mt-16 mb-8">
          {tServices('general.title')}
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          {tServices('general.description')}
        </p>
        <ServicesList locale={locale} servicesToRender={generalServices} />
      </div>
    </>
  );
}