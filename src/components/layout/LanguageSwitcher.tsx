'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  locale: 'en' | 'de';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  locale,
  className = ''
}) => {
  const pathname = usePathname();
  const router = useRouter();
  
  // Remove the current locale from the path
  const pathnameWithoutLocale = pathname.replace(/^\/(en|de)/, '');
  
  // Create paths for each locale
  const enPath = `/en${pathnameWithoutLocale}`;
  const dePath = `/de${pathnameWithoutLocale}`;
  
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Link 
        href={enPath}
        className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-cyber-navy text-white' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        EN
      </Link>
      <Link 
        href={dePath}
        className={`px-2 py-1 rounded ${locale === 'de' ? 'bg-cyber-navy text-white' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        DE
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
