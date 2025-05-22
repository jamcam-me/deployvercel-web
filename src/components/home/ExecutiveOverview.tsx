'use client';

import React from 'react';
import Image from 'next/image';

// Define the props interface
interface ExecutiveOverviewProps {
  locale: "en" | "de";
}

const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({ locale }) => {
  const translations = {
    title: locale === 'en' ? 'INDUSTRY INSIGHT' : 'BRANCHENEINBLICK',
    metric: locale === 'en' 
      ? '85% of executives cite AI security governance as their top digital transformation concern' 
      : '85% der Führungskräfte nennen KI-Sicherheits-Governance als ihre größte Sorge bei der digitalen Transformation',
    mission_title: locale === 'en' ? 'OUR MISSION' : 'UNSERE MISSION',
    mission: locale === 'en'
      ? 'Empower organizations with strategic cybersecurity guidance and seamless AI integration, enabling secure digital transformation.'
      : 'Wir befähigen Organisationen durch strategische Cybersicherheit-Beratung und nahtlose KI-Integration, um eine sichere digitale Transformation zu ermöglichen.',
    description: locale === 'en'
      ? 'Big Rock Intelligence operates at the intersection of cybersecurity excellence and AI innovation, providing board-level advisory and implementation expertise to organizations navigating complex digital landscapes.'
      : 'Big Rock Intelligence agiert an der Schnittstelle zwischen Cybersicherheits-Exzellenz und KI-Innovation und bietet Beratung und Implementierungsexpertise auf Vorstandsebene für Organisationen, die komplexe digitale Landschaften navigieren.',
    cultural_ref: locale === 'en'
      ? 'You wouldn\'t bet blind in M&A. Why do it with your AI stack?'
      : 'Sie würden bei M&A nicht blind wetten. Warum sollten Sie es mit Ihrem KI-Stack tun?',
    strategic_q: locale === 'en'
      ? 'How would reducing security friction impact your product launch timelines?'
      : 'Wie würde die Reduzierung von Sicherheitsreibung Ihre Produkteinführungszeiten beeinflussen?',
    expertise: locale === 'en'
      ? 'EXECUTIVE-LEVEL EXPERTISE'
      : 'EXPERTISE AUF FÜHRUNGSEBENE',
    tailored: locale === 'en'
      ? 'SEGMENT-SPECIFIC SOLUTIONS'
      : 'SEGMENTSPEZIFISCHE LÖSUNGEN',
    recognized: locale === 'en'
      ? 'RECOGNIZED AUTHORITY'
      : 'ANERKANNTE AUTORITÄT'
  };

  return (
    <section className="py-16 bg-light-stone">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Leading with metric */}
          <p className="metric-highlight">
            {translations.metric}
          </p>
          
          <h2 className="section-title mb-6">
            {translations.mission_title}
          </h2>
          
          {/* Value proposition statement */}
          <p className="content-value-prop">
            {translations.mission}
          </p>
          
          <p className="mb-6">
            {translations.description}
          </p>
          
          {/* Cultural reference */}
          <p className="cultural-reference">
            {translations.cultural_ref}
          </p>
          
          {/* Strategic question */}
          <p className="strategic-question">
            {translations.strategic_q}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            {/* Use regular img tag for SVG files instead of Next.js Image component */}
            <img
              src="/images/ai_cyber_illustration.png"
              alt="AI and Cybersecurity Illustration"
              width={500}
              height={400}
              className="mx-auto"
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
                    {translations.tailored}
                  </h4>
                  
                  {/* Added a metric */}
                  <p className="service-metric">
                    {locale === 'en'
                      ? 'Customized frameworks for enterprise, SMBs, VCs/PEs, and Boards'
                      : 'Maßgeschneiderte Frameworks für Unternehmen, KMUs, VCs/PEs und Vorstände'}
                  </p>
                  
                  <p className="text-cyber-graphite">
                    {locale === 'en'
                      ? 'We recognize that different organizational structures require tailored advisory approaches that address unique security and AI governance needs.'
                      : 'Wir erkennen an, dass unterschiedliche Organisationsstrukturen maßgeschneiderte Beratungsansätze erfordern, die auf einzigartige Sicherheits- und KI-Governance-Bedürfnisse eingehen.'}
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
      </div>
    </section>
  );
};

export default ExecutiveOverview;