import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { getTranslations } from 'next-intl/server';

interface ServicesLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export async function generateMetadata(
  { params: { locale } }: { params: { locale: Locale } }
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title') + ' - Big Rock Intelligence',
      description: t('description'),
      url: 'https://bigrockintelligence.com/services',
      siteName: 'Big Rock Intelligence',
      images: [
        {
          url: '/images/ai_cyber_illustration.png',
          alt: 'Cybersecurity and AI services',
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'de_DE',
      type: 'website',
    },
  };
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}