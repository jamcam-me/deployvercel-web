'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <Image
        src="/images/frankfurt-skyline.jpg"
        alt="Frankfurt skyline"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44]/80 to-transparent z-10" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-['Cinzel'] text-white text-4xl md:text-6xl font-bold tracking-tight uppercase">
          Strategic Cybersecurity & AI Advisory
        </h1>
        <p className="text-white text-lg max-w-3xl mt-4 font-light">
          Empowering organizations with strategic guidance in cybersecurity and AI integration to enable secure digital transformation.
        </p>
        <Link href="/services">
          <button className="mt-6 bg-[#dab86e] text-black px-6 py-3 font-medium rounded-lg shadow-md hover:bg-[#caa950] transition">
            Explore Our Services
          </button>
        </Link>
      </div>
    </div>
  );
}