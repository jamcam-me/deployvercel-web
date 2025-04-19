import '../styles/globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Big Rock Intelligence',
    default: 'Big Rock Intelligence',
  },
  description: 'AI-driven cybersecurity advisory firm headquartered in Frankfurt and operating across Germany and Europe.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}