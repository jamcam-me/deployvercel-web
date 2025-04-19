import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ContactPageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with our team to discuss how we can help your organization.',
  openGraph: {
    title: 'Contact - Big Rock Intelligence',
    description: 'Get in touch with our team to discuss how we can help your organization.',
    url: 'https://bigrockintelligence.com/contact',
    siteName: 'Big Rock Intelligence',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage({ params }: ContactPageProps) {
  const { locale } = params;
  
  const translations = {
    title: locale === 'en' ? 'Contact Us' : 'Kontakt',
    description: locale === 'en' 
      ? 'Get in touch with our team to discuss how we can help your organization.' 
      : 'Nehmen Sie Kontakt mit unserem Team auf, um zu besprechen, wie wir Ihrer Organisation helfen können.',
    name: 'James Cameron',
    role: locale === 'en' ? 'Founder & Executive Advisor' : 'Gründer & Executive Advisor',
    email: 'james@jamcam.me',
    phone: '+49 175 584 4546',
    linkedin: 'linkedin.com/in/jamcam-cyberleader'
  };

  return (
    <div className="container-custom section">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title text-center mb-8">{translations.title}</h1>
        <p className="text-lg text-center mb-12">{translations.description}</p>
        
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2">{translations.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{translations.role}</p>
            
            <div className="space-y-4 w-full max-w-md">
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${translations.email}`} className="text-lg hover:text-forest-green transition-colors">
                  {translations.email}
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${translations.phone.replace(/\s/g, '')}`} className="text-lg hover:text-forest-green transition-colors">
                  {translations.phone}
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href={`https://${translations.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-forest-green transition-colors">
                  {translations.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}