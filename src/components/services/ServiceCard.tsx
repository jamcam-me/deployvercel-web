'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
};

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-steel/30 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg bg-white">
      <div className="mb-4 text-cyber-navy text-3xl">{icon}</div>
      <h3 className="text-xl font-bold text-cyber-navy mb-2">{title}</h3>
      <p className="text-cyber-navy/80 text-sm mb-4">{description}</p>
      <Link href={href}>
        <span className="text-gold font-medium hover:underline">Learn more →</span>
      </Link>
    </div>
  );
}