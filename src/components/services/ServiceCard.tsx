import { Locale } from '@/lib/i18n';
import Image from 'next/image';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  locale: Locale;
}

export default function ServiceCard({ id, title, description, icon, locale }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-cyber-navy p-3 rounded-full mr-4">
            {/* Use regular img tag for SVG files instead of Next.js Image component */}
            <img
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="text-white"
            />
          </div>
          <h3 className="text-2xl font-bold text-cyber-navy">{title}</h3>
        </div>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <span className="text-forest-green font-medium">
            {locale === 'en' ? 'Learn more' : 'Mehr erfahren'} →
          </span>
        </div>
      </div>
    </div>
  );
}