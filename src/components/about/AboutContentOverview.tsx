/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Locale } from '@/lib/i18n';

interface AboutContentOverviewProps {
  locale: Locale;
}

export default function AboutContentOverview({ locale }: AboutContentOverviewProps) {

  const translations = {
    contactTitle: locale === 'en' ? 'Contact Us' : 'Kontakt',
    contactDescription: locale === 'en'
      ? 'Get in touch with our team to discuss how we can help your organization.'
      : 'Nehmen Sie Kontakt mit unserem Team auf, um zu besprechen, wie wir Ihrer Organisation helfen können.',
    name: 'James Cameron',
    role: locale === 'en' ? 'Founder & Executive Advisor' : 'Gründer & Executive Advisor',
    email: 'james@bigrock-intelligence.com',
    phone: '+49 175 584 4546',
    linkedinPersonal: 'linkedin.com/in/jamcam-cyberleader',
    emailGeneral: 'info@bigrock-intelligence.com',
    linkedinCompany: 'linkedin.com/company/bigrockintelli'
  };

  return (
    <main className="bg-navy-900 text-light-stone py-12">
      <div className="mx-auto px-6 max-w-4xl">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">Our Mission</h2>
          <p className="font-futura">
            Empower organizations with strategic cybersecurity guidance and seamless AI integration, enabling secure digital transformation that drives measurable business outcomes.
          </p>
        </section>

        {/* The Big Rock Difference */}
        <section className="mb-16">
          <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">The Big Rock Difference</h2>
          <p className="font-futura mb-4">
            In today’s cybersecurity landscape, most approach security like their New Year's resolution—they know exactly what they should do, have all the right tools, but somehow still aren’t doing it right. Global cybercrime costs are projected to reach <strong>$10.5 trillion</strong> by 2025.
          </p>
          <p className="font-futura">
            The gap isn't in understanding threats. It's in translating security from a technical concern into a strategic advantage.
          </p>
        </section>

        {/* Strategic Insights Table */}
        <section className="mb-16">
          <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">Strategic Insights That Drive Action</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left border-collapse">
              <thead>
                <tr className="bg-graphite text-white">
                  <th className="p-3 font-futura">Focus Area</th>
                  <th className="p-3 font-futura">Strategic Insight</th>
                  <th className="p-3 font-futura">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-stoneGray even:bg-white">
                  <td className="p-3 font-semibold font-futura">AI-Driven Threat Detection</td>
                  <td className="p-3 font-futura">Organizations implementing ML behavioral analytics see 70% faster response times</td>
                  <td className="p-3 font-futura">$1.76M average savings per prevented breach</td>
                </tr>
                <tr className="odd:bg-stoneGray even:bg-white">
                  <td className="p-3 font-semibold font-futura">Executive Alignment</td>
                  <td className="p-3 font-futura">Board-ready security strategies that speak business, not just technical jargon</td>
                  <td className="p-3 font-futura">Roadmaps that secure funding and accelerate digital initiatives</td>
                </tr>
                <tr className="odd:bg-stoneGray even:bg-white">
                  <td className="p-3 font-semibold font-futura">M&A Security Diligence</td>
                  <td className="p-3 font-futura">55% of executives cite cybersecurity as critical in M&A</td>
                  <td className="p-3 font-futura">Value protection (remember Yahoo’s $350M valuation drop?)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">Leadership</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-32 h-32 mb-4 md:mb-0 relative">
              <Image
                src="/images/james_cameron.png"
                alt="James Cameron"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-futura uppercase font-bold text-lg md:text-xl lg:text-2xl">James Cameron</h3>
              <p className="font-futura italic mb-2">Founder & Strategic Advisor</p>
              <p className="font-futura">
                UC Berkeley-trained AI strategist with executive cybersecurity credentials. Microsoft/AWS/Avanade alumni with battle-tested experience across European and global markets.
              </p>
              <p className="mt-2 font-futura">
                <strong>My approach:</strong> “You don't bet blind in poker. Why would you do it with your AI security stack?”
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="mb-16">
          <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">Our Expertise Areas</h2>
          <ul className="list-disc list-inside space-y-2 font-futura">
            <li>
              <strong>Cybersecurity Strategy & Leadership</strong> &mdash; Translating technical complexity into executive clarity
            </li>
            <li>
              <strong>AI Governance & Integration</strong> &mdash; Bridging innovation with enterprise-grade protection
            </li>
            <li>
              <strong>M&A and Venture Security Diligence</strong> &mdash; Protecting value through every phase of the deal lifecycle
            </li>
            <li>
              <strong>Go-to-Market Security Enablement</strong> &mdash; Transforming security from blocker to accelerator
            </li>
          </ul>
        </section>

        {/* Global Reach */}
        <section className="mb-16">
          <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">Global Reach, European Core</h2>
        <p className="font-futura">
          Headquartered in continental Europe and operating on CET, BRI delivers advisory excellence across Europe and the Middle East while maintaining global client engagements. Professional German proficiency enables nuanced regional service delivery.
        </p>
      </section>

      {/* The Question */}
      <section className="mb-16 text-center">
        <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">The Question That Drives Us</h2>
        <p className="text-lg font-futura">
          How could transforming your security from cost center to strategic enabler accelerate your next product launch, acquisition, or market expansion?
        </p>
        <blockquote className="mt-4 italic font-futura">
          “What we protect today powers the value of tomorrow.”
        </blockquote>
      </section>

      {/* Connect CTA (Personal & General Contact) */}
      <section id="contact-section" className="mb-16 text-center">
        <h2 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">Contact Us</h2> {/* Hardcoding for alignment with other h2s */}
        <p className="text-lg text-center mb-12 font-futura">{translations.contactDescription}</p>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-futura uppercase font-bold text-base md:text-lg lg:text-xl">James Cameron</h3>
            <p className="text-lg text-gray-600 mb-6 font-futura">{translations.role}</p>

            <div className="space-y-4 w-full max-w-md mx-auto">
              {/* Email */}
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${translations.email}`} className="text-lg hover:text-forest-green transition-colors font-futura">
                  {translations.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${translations.phone.replace(/\s/g, '')}`} className="text-lg hover:text-forest-green transition-colors font-futura">
                  {translations.phone}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href={`https://${translations.linkedinPersonal}`} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-forest-green transition-colors font-futura">
                  {translations.linkedinPersonal}
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 font-futura">
          For general inquiries:
          <a href={`mailto:${translations.emailGeneral}`} className="text-briGold ml-1 font-futura">
            {translations.emailGeneral}
          </a>
        </p>
        <p className="mt-2 font-futura">
          Company LinkedIn:
          <a
            href={`https://${translations.linkedinCompany}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1 font-futura"
          >
            Big Rock Intelligence
          </a>
        </p>
      </section>
      </div>
    </main>
  );
}