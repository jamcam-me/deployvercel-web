import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ExecutiveOverview from '@/components/home/ExecutiveOverview';
import { Locale } from '@/lib/i18n';

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'AI-driven cybersecurity advisory firm headquartered in Frankfurt and operating across Germany and Europe.',
  openGraph: {
    title: 'Big Rock Intelligence - Cybersecurity & AI Advisory',
    description: 'AI-driven cybersecurity advisory firm headquartered in Frankfurt and operating across Germany and Europe.',
    url: 'https://bigrockintelligence.com',
    siteName: 'Big Rock Intelligence',
    images: [
      {
        url: '/images/hero_frankfurt.jpg',
        alt: 'Frankfurt skyline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero locale={locale} />
      <ExecutiveOverview locale={locale} />
    </div>
  );
}