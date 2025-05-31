'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BusCardContent() {
  const t = useTranslations('busCard');
  const searchParams = useSearchParams();
  const [isFromQR, setIsFromQR] = useState(false);
  
  // Track page view and QR code scan
  useEffect(() => {
    const source = searchParams.get('source');
    const isQRSource = source === 'qr' || source === 'businesscard';
    setIsFromQR(isQRSource);
    
    // Track QR code scans
    if (isQRSource) {
      if (typeof window.va !== 'undefined') {
        window.va('track', 'QR_Code_Scan', {
          source: 'business_card',
          timestamp: new Date().toISOString(),
          page: window.location.pathname
        });
      }
      
      // Optional: Google Analytics 4 tracking
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'qr_scan', {
          'source': 'business_card',
          'medium': 'offline',
          'campaign': 'networking'
        });
      }
    }
    
    // Track time on page for engagement metrics
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
  
  // Track specific actions
  const trackAction = (action: string) => {
    if (typeof window.va !== 'undefined') {
      window.va('track', action, {
        source: isFromQR ? 'qr_code' : 'direct',
        timestamp: new Date().toISOString()
      });
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1f44] to-[#1f302d] text-[#d9ded9] py-8">
        <div className="bg-white/5 backdrop-blur-lg border border-[#dab86e]/30 rounded-3xl p-8 md:p-12 max-w-md w-[90%] text-center shadow-2xl">
          {isFromQR && (
            <div className="bg-[#dab86e]/10 rounded-lg p-4 mb-8 text-sm text-[#dab86e]">
              {t('welcome')}
            </div>
          )}
          
          <div className="w-[60px] h-[60px] bg-gradient-to-tr from-[#dab86e] to-[#5d9182] mx-auto mb-8 animate-pulse" 
               style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#dab86e] mb-2 uppercase tracking-wider">
            {t('name')}
          </h1>
          
          <p className="text-xl text-[#dab86e] mb-2 font-semibold">
            {t('jobTitle')}
          </p>
          
          <p className="text-2xl text-[#d9ded9] mb-4 font-medium">
            {t('company')}
          </p>
          
          <p className="text-base text-[#5d9182] mb-8 italic">
            {t('tagline')}
          </p>
          
          <div className="bg-[#dab86e]/10 rounded-lg p-4 mb-8 text-sm text-[#a4aba4]">
            <strong className="text-[#dab86e]">{t('credentials.title')}</strong><br />
            {t('credentials.subtitle')}
          </div>
          
          <div className="grid gap-4 mb-8">
            <a href={`mailto:${t('contact.email.value')}?subject=Following up from our connection`}
               className="bg-white/5 border border-[#dab86e]/20 rounded-lg p-4 transition-all hover:bg-[#dab86e]/10 hover:border-[#dab86e] hover:translate-y-[-2px] hover:shadow-lg"
               onClick={() => trackAction('email_click')}>
              <div className="text-2xl mb-2">📧</div>
              <div className="text-sm text-[#a4aba4] mb-1">{t('contact.email.label')}</div>
              <div className="font-semibold text-[#d9ded9]">{t('contact.email.value')}</div>
            </a>
            
            <a href="https://www.bigrock-intelligence.com?ref=contact"
               className="bg-white/5 border border-[#dab86e]/20 rounded-lg p-4 transition-all hover:bg-[#dab86e]/10 hover:border-[#dab86e] hover:translate-y-[-2px] hover:shadow-lg"
               target="_blank"
               rel="noopener noreferrer"
               onClick={() => trackAction('website_click')}>
              <div className="text-2xl mb-2">🌐</div>
              <div className="text-sm text-[#a4aba4] mb-1">{t('contact.website.label')}</div>
              <div className="font-semibold text-[#d9ded9]">{t('contact.website.value')}</div>
            </a>
            
            <a href="https://linkedin.com/in/jamcam-cyberleader"
               className="bg-white/5 border border-[#dab86e]/20 rounded-lg p-4 transition-all hover:bg-[#dab86e]/10 hover:border-[#dab86e] hover:translate-y-[-2px] hover:shadow-lg"
               target="_blank"
               rel="noopener noreferrer"
               onClick={() => trackAction('linkedin_click')}>
              <div className="text-2xl mb-2">💼</div>
              <div className="text-sm text-[#a4aba4] mb-1">{t('contact.linkedin.label')}</div>
              <div className="font-semibold text-[#d9ded9]">{t('contact.linkedin.value')}</div>
            </a>
            
            <a href="https://outlook.office.com/book/JamesCameronTimeslots@OldBoyzClub.onmicrosoft.com/"
               className="bg-[#dab86e]/15 border border-[#dab86e]/40 rounded-lg p-4 transition-all hover:bg-[#dab86e]/20 hover:translate-y-[-3px] hover:shadow-xl relative"
               target="_blank"
               rel="noopener noreferrer"
               onClick={() => trackAction('booking_click')}>
              <div className="absolute inset-[-2px] bg-gradient-to-tr from-[#dab86e] to-[#5d9182] rounded-[12px] -z-10"></div>
              <div className="text-2xl mb-2">📅</div>
              <div className="text-sm text-[#a4aba4] mb-1">{t('contact.meeting.label')}</div>
              <div className="font-bold text-[#dab86e]">{t('contact.meeting.value')}</div>
            </a>
            
            <a href="tel:+4901511310515242"
               className="bg-white/5 border border-[#dab86e]/20 rounded-lg p-4 transition-all hover:bg-[#dab86e]/10 hover:border-[#dab86e] hover:translate-y-[-2px] hover:shadow-lg"
               onClick={() => trackAction('phone_click')}>
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm text-[#a4aba4] mb-1">{t('contact.phone.label')}</div>
              <div className="font-semibold text-[#d9ded9]">{t('contact.phone.value')}</div>
            </a>
          </div>
          
          <div className="text-center text-[#a4aba4] text-sm mt-8 pt-4 border-t border-[#dab86e]/20">
            {t('footer')}
          </div>
        </div>
      </div>
  );
}

// Add TypeScript declaration for window.va and window.gtag
declare global {
  interface Window {
    va?: (event: string, action: string, params?: any) => void;
    gtag?: (event: string, action: string, params?: any) => void;
  }
}