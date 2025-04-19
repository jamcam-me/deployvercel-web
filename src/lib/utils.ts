import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a phone number for display
 */
export function formatPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
}

/**
 * Creates a canonical URL
 */
export function createCanonicalUrl(path: string, locale: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bigrockintelligence.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  return `${baseUrl}${localePath}${path}`;
}

/**
 * Truncates text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}