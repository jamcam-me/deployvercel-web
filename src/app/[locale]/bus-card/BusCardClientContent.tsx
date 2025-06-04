'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import ServiceCard from '@/components/services/ServiceCard';

interface BusCardClientContentProps {
  locale: Locale;
}

// Helper function to render icons based on icon name
function renderContactIcon(iconName: string): ReactNode {
  switch (iconName) {
    case 'email':
      return <div className="text-2xl">📧</div>;
    case 'website':
      return <div className="text-2xl">🌐</div>;
    case 'linkedin':
      return <div className="text-2xl">💼</div>;
    case 'meeting':
      return <div className="text-2xl">📅</div>;
    case 'phone':
      return <div className="text-2xl">📱</div>;
    default:
      return null;
  }
}

export default function BusCardClientContent({ locale }: BusCardClientContentProps) {
  const t = useTranslations('busCard');
  const searchParams = useSearchParams();
  const [isFromQR, setIsFromQR] = useState(false);
  
  useEffect(() => {
    const source = searchParams.get('source');
    const isQRSource = source === 'qr' || source === 'businesscard';
    setIsFromQR(isQRSource);
    
    if (isQRSource) {
      if (typeof window.va !== 'undefined') {
        window.va('track', 'QR_Code_Scan', {
          source: 'business_card',
          timestamp: new Date().toISOString(),
          page: window.location.pathname
        });
      }
      
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'qr_scan', {
          'source': 'business_card',
          'medium': 'offline',
          'campaign': 'networking'
        });
      }
    }
    
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (typeof window.va !== 'undefined' && timeSpent > 5) {
        window.va('track', 'engagement_time', {
          seconds: timeSpent,
          source: isQRSource ? 'qr_code' : 'direct'
        });
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [searchParams]);
  
  const trackAction = (action: string) => {
    if (typeof window.va !== 'undefined') {
      window.va('track', action, {
        source: isFromQR ? 'qr_code' : 'direct',
        timestamp: new Date().toISOString()
      });
    }
  };

  const contactMethods = [
    {
      id: 'email',
      title: t('contact.email.label'),
      description: t('contact.email.value'),
      link: `mailto:${t('contact.email.value')}?subject=Following up from our connection`,
      icon: 'email',
      action: 'email_click'
    },
    {
      id: 'linkedin',
      title: t('contact.linkedin.label'),
      description: t('contact.linkedin.value'),
      link: 'https://linkedin.com/in/jamcam-cyberleader',
      icon: 'linkedin',
      action: 'linkedin_click'
    },
    {
      id: 'meeting',
      title: t('contact.meeting.label'),
      description: 'Set up some time to explore opportunities',
      link: 'https://outlook.office.com/book/contactbigrockintelai@bigrock-intelligence.com/',
      icon: 'meeting',
      action: 'booking_click'
    },
    {
      id: 'phone',
      title: t('contact.phone.label'),
      description: t('contact.phone.value'),
      link: 'tel:+4901511310515242',
      icon: 'phone',
      action: 'phone_click'
    }
  ];
  
  return (
    <div className="max-w-3xl p-8 rounded-lg text-center mx-auto">
          {isFromQR && (
              <div className="bg-[#dab86e]/10 rounded-lg p-4 mb-8 text-sm text-[#dab86e]">
                  {t('welcome')}
              </div>
          )}
          
          <h1 className="font-futura uppercase text-executive-gold tracking-wider text-3xl md:text-4xl lg:text-5xl pb-4">
              {t('name')}
          </h1>
          
          <p className="font-futura text-gray-800 text-lg md:text-xl max-w-2xl mb-8 mx-auto">
              {t('jobTitle')}
          </p>
          
          <p className="font-futura text-gray-800 text-lg md:text-xl max-w-2xl mb-8 mx-auto">
              {t('company')}
          </p>

          <p className="text-base text-gray-600 mb-8 italic">
              {t('tagline')}
          </p>
          
          <div className="bg-[#dab86e]/10 rounded-lg p-4 mb-8 text-sm text-[#a4aba4]">
              <strong className="text-[#dab86e]">{t('credentials.title')}</strong><br />
              {t('credentials.subtitle')}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method) => (
                  <ServiceCard
                      key={method.id}
                      title={method.title}
                      description={method.description}
                      icon={renderContactIcon(method.icon)}
                      link={method.link}
                      locale={locale}
                      className={method.id === 'meeting' ? 'bg-[#dab86e]/15 border-[#dab86e]/40' : ''} // Apply special styling for meeting tile
                      onClick={() => trackAction(method.action)}
                  />
              ))}
          </div>
          
          <div className="text-center text-[#a4aba4] text-sm mt-8 pt-4 border-t border-[#dab86e]/20">
              {t('footer')}
          </div>
      </div>
  );
}

declare global {
  interface Window {
    va?: (event: string, action: string, params?: any) => void;
    gtag?: (event: string, action: string, params?: any) => void;
  }
}