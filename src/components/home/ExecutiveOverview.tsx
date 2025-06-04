'use client';

import React from 'react';
import Image from 'next/image';

// Define the props interface
interface ExecutiveOverviewProps {
  locale: "en" | "de";
}

const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({ locale }) => {
  interface Translations {
    title: string;
    metric: string;
    new_title: string;
    truth1: string;
    truth2: string;
    truth3: string;
    transformation_statement: string;
    strategic_question_box: string;
    expertise: string;
    tailored: string;
    recognized: string;
    contact: string;
    mini_cta: string; // New property for mini CTA
  }

  const translations: Translations = { // Explicitly typed
    title: locale === 'en' ? 'INDUSTRY INSIGHT' : 'BRANCHENEINBLICK',
    metric: locale === 'en'
      ? '85% of leaders cite AI security governance as their top digital transformation concern'
      : '85% der Führungskräfte nennen KI-Sicherheits-Governance als ihre größte Sorge bei der digitalen Transformation',
    new_title: locale === 'en' ? 'THE BIGROCK INTEL ADVANTAGE' : 'DER BIGROCK INTEL VORTEIL',
    truth1: locale === 'en' ? 'Security is either your moat or your millstone' : 'Sicherheit ist entweder Ihr Schutzwall oder Ihr Mühlstein',
    truth2: locale === 'en' ? 'AI governance gaps cost €4.7M per incident' : 'KI-Governance-Lücken kosten 4,7 Mio. € pro Vorfall',
    truth3: locale === 'en' ? 'The right framework delivers 347% ROI in 18 months' : 'Das richtige Framework liefert 347% ROI in 18 Monaten',
    transformation_statement: locale === 'en' ? 'We transform security from friction to fuel for growth.' : 'Wir verwandeln Sicherheit von Reibung in Treibstoff für Wachstum.',
    strategic_question_box: locale === 'en'
      ? 'If your security team became a revenue center tomorrow, <br />what would change?'
      : 'Wenn Ihr Sicherheitsteam morgen zu einem Umsatzzentrum würde,<br />was würde sich ändern?',
    expertise: locale === 'en'
      ? 'EXECUTIVE-LEVEL EXPERTISE'
      : 'EXPERTISE AUF FÜHRUNGSEBENE',
    tailored: locale === 'en'
      ? 'PRECISION SOLUTIONS'
      : 'PRECISION SOLUTIONS',
    recognized: locale === 'en'
      ? 'RECOGNIZED AUTHORITY'
      : 'ANERKANNTE AUTORITÄT',
    mini_cta: locale === 'en'
      ? 'Big Rock Intelligence delivers the difference between security friction and security advantage—because in the AI era, every decision is a bet on your future.'
      : 'Big Rock Intelligence liefert den Unterschied zwischen Sicherheitsreibung und Sicherheitsvorteil – denn im Zeitalter der KI ist jede Entscheidung eine Wette auf Ihre Zukunft.',
    contact: locale === 'en' ? 'Contact' : 'Kontakt' // Still needed for footer and about page
  };

  return (
    <section className="py-16 bg-light-stone">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Leading with metric - now using gold-800 color */}
          <p className="font-cinzel text-gold-800 font-bold text-xl md:text-2xl lg:text-3xl mb-6 text-center">
            <span>{locale === 'en' ? '85% of leaders cite AI security governance as their top digital transformation concern' : '85% der Führungskräfte nennen KI-Sicherheits-Governance als ihre größte Sorge bei der digitalen Transformation'}</span>
            <br />
            <span>{locale === 'en' ? '—our advisors decode this complexity.' : '—unsere Berater entschlüsseln diese Komplexität.'}</span>
          </p>
          
          <h2 className="section-title mb-6">
            {translations.new_title}
          </h2>

          <ul className="list-disc list-inside text-lg text-cyber-graphite mb-6 space-y-2">
            <li>{translations.truth1}</li>
            <li>{translations.truth2}</li>
            <li>{translations.truth3}</li>
          </ul>

          <p className="content-value-prop mb-8">
            {translations.transformation_statement}
          </p>

          <div className="bg-gradient-to-r from-evergreen-intel to-cyber-navy p-6 rounded-lg shadow-lg text-center text-executive-gold italic text-xl md:text-2xl lg:text-3xl mb-12">
            <p dangerouslySetInnerHTML={{ __html: translations.strategic_question_box }} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            {/* Use regular img tag for SVG files instead of Next.js Image component */}
            <Image
              src="/images/BigRock-AI-Fissure-brown.png"
              alt="BigRock AI Fissure"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div className="service-card">
              <div className="flex items-start">
                <div className="bg-cyber-navy text-executive-gold p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-executive-gold mb-2">
                    {translations.expertise}
                  </h4>
                  
                  {/* Added a metric */}
                  <p className="service-metric">
                    {locale === 'en'
                      ? '25+ years of cybersecurity and global leadership experience'
                      : 'Über 25 Jahre Erfahrung in Cybersicherheit und globaler Führung'}
                  </p>
                  
                  <p className="text-cyber-graphite">
                    {locale === 'en'
                      ? 'Our team brings executive experience from Microsoft, AWS, and Avanade, translating complex security challenges into board-level insights.'
                      : 'Unser Team bringt Führungserfahrung von Microsoft, AWS und Avanade mit und übersetzt komplexe Sicherheitsherausforderungen in Erkenntnisse auf Vorstandsebene.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="flex items-start">
                <div className="bg-evergreen-intel text-executive-gold p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-executive-gold mb-2">
                    {locale === 'en' ? 'PRECISION SOLUTIONS' : 'PRECISION SOLUTIONS'}
                  </h4>
                  
                  {/* New Content for Precision Solutions */}
                  <p className="service-metric">
                    {locale === 'en'
                      ? 'Your Structure. Your Strategy. Your Success.'
                      : 'Your Structure. Your Strategy. Your Success.'}
                  </p>
                  
                  <ul className="list-none space-y-3 pl-0 text-cyber-graphite">
                    <li>{locale === 'en' ? 'Enterprise: AI governance that scales with complexity' : 'Enterprise: AI governance that scales with complexity'}</li>
                    <li>{locale === 'en' ? 'SMB: Right-sized security without enterprise overhead' : 'SMB: Right-sized security without enterprise overhead'}</li>
                    <li>{locale === 'en' ? 'VC/PE: Due diligence acceleration & portfolio protection' : 'VC/PE: Due diligence acceleration & portfolio protection'}</li>
                    <li>{locale === 'en' ? 'Boards: Fiduciary confidence through clear frameworks' : 'Boards: Fiduciary confidence through clear frameworks'}</li>
                  </ul>
                  <p className="text-cyber-graphite mt-4 italic">
                    {locale === 'en'
                      ? `"One size fits none in security. That's why we don't sell templates - we architect outcomes."`
                      : `"One size fits none in security. That's why we don't sell templates - we architect outcomes."`}
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="flex items-start">
                <div className="bg-executive-gold text-cyber-navy p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-executive-gold mb-2">
                    {translations.recognized}
                  </h4>
                  
                  {/* Added a metric */}
                  <p className="service-metric">
                    {locale === 'en'
                      ? 'Top 5% LinkedIn engagement in AI Security topics'
                      : 'Top 5% LinkedIn-Engagement bei KI-Sicherheitsthemen'}
                  </p>
                  
                  <p className="text-cyber-graphite">
                    {locale === 'en'
                      ? 'Our thought leadership on bridging AI innovation with enterprise security has established us as a trusted voice in the industry.'
                      : 'Unsere Vordenkerrolle bei der Verbindung von KI-Innovation mit Unternehmenssicherheit hat uns als vertrauenswürdige Stimme in der Branche etabliert.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New mini CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <h1 className="font-futura text-evergreen-intel text-center text-xl md:text-2xl lg:text-3xl mb-8">
            {translations.mini_cta}
          </h1>
          <blockquote className="text-xl md:text-2xl italic text-gray-300 relative z-10 text-center">
            {locale === 'en' ? (
              <p>"One size fits none in security. That's why we don't sell templates - we architect outcomes."</p>
            ) : (
              <p>"One size fits none in security. That's why we don't sell templates - we architect outcomes."</p>
            )}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveOverview;