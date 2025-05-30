'use client'; // This is a client component

import { useState } from 'react';
import Image from 'next/image';
import ServicesList from '@/components/services/ServicesList';
import { Locale } from '@/lib/i18n';
import { services } from '@/data/services'; // Import the services data
import { useTranslations } from 'next-intl'; // Import for translations

interface ServicesPageProps {
  params: {
    locale: Locale;
  };
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = params;
  const t = useTranslations('services'); // Access translations for the 'services' section

  const [activeTab, setActiveTab] = useState<'enterprise' | 'smb' | 'vc_pe' | 'board'>('enterprise');

  const generalServices = services.filter(service => service.category === 'general');
  const advisoryServices = services.filter(service => service.category === 'advisory');

  const enterpriseAdvisory = advisoryServices.filter(service => service.categoryType === 'enterprise');
  const smbAdvisory = advisoryServices.filter(service => service.categoryType === 'smb');
  const vcPeAdvisory = advisoryServices.filter(service => service.categoryType === 'vc_pe');
  const boardAdvisory = advisoryServices.filter(service => service.categoryType === 'board');

  return (
    <>
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/Frankfurt Skyline at Dusk.png"
          alt="Frankfurt Skyline at Dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <h1 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-4xl md:text-5xl lg:text-6xl mb-6">
            {t('title')}
          </h1>
          <p className="font-futura text-light-stone text-lg md:text-xl max-w-2xl">
            {t('description')}
          </p>
        </div>
      </div>

      <div className="container-custom section">
        {/* General Services Section */}
        <h2 className="section-title text-center mb-8">
          {t('general.title')}
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          {t('general.description')}
        </p>
        <ServicesList locale={locale} servicesToRender={generalServices} />

        {/* Advisory Services Section */}
        <h2 className="section-title text-center mt-16 mb-8">
          {t('advisory.title')}
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          {t('advisory.description')}
        </p>

        {/* Tabs for Advisory Services */}
        <div className="flex justify-center flex-wrap mb-8">
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'enterprise' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('enterprise')}
          >
            {t('advisory.enterpriseLeaders')}
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'smb' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('smb')}
          >
            {t('advisory.smbOwners')}
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'vc_pe' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('vc_pe')}
          >
            {t('advisory.vcPeFirms')}
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded-md font-bold transition-colors duration-200
              ${activeTab === 'board' ? 'bg-executive-gold text-cyber-navy' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveTab('board')}
          >
            {t('advisory.boardMembers')}
          </button>
        </div>

        {/* Render Services based on active tab */}
        <div className="tab-content">
          {activeTab === 'enterprise' && <ServicesList locale={locale} servicesToRender={enterpriseAdvisory} />}
          {activeTab === 'smb' && <ServicesList locale={locale} servicesToRender={smbAdvisory} />}
          {activeTab === 'vc_pe' && <ServicesList locale={locale} servicesToRender={vcPeAdvisory} />}
          {activeTab === 'board' && <ServicesList locale={locale} servicesToRender={boardAdvisory} />}
        </div>
      </div>
    </>
  );
}