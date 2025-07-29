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
    <main className="bg-light-stone py-12">
      <div className="mx-auto px-6 max-w-4xl">
        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">Mission Statement</h2>
          <p className="font-sans text-center text-lg md:text-xl leading-relaxed">
            "Empower organizations to turn security from a
            technical hurdle into a business advantage, fostering innovation and resilience in an evolving digital landscape."
          </p>
        </section>
        {/* THE OKOTOKS INSIGHT Section Content */}
        <section className="mb-16">
          <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">
            THE OKOTOKS INSIGHT: Why 'Big Rock Intelligence'
          </h2>
          <p className="font-sans text-center text-lg md:text-xl leading-relaxed mb-4">
            Like the Okotoks erratic—a massive glacial boulder deposited with precision and purpose—our approach emerged from a fundamental recognition after 25+ years in cybersecurity leadership:
          </p>
          <h3 className="font-cinzel uppercase font-bold text-evergreen-intel mb-2">THE FOUNDING INSIGHT:</h3>
          <p className="font-sans text-lg leading-relaxed mb-4">
            True enterprise security doesn't come from impenetrable walls. It comes from intelligent fissures that reveal strategic opportunity.
          </p>
          <h3 className="font-cinzel uppercase font-bold text-evergreen-intel mb-2">THE METAPHOR BECOMES METHODOLOGY:</h3>
          <ul className="list-disc list-inside font-sans mb-4">
            <li><strong>The Rock:</strong> Your enterprise's foundational security strength</li>
            <li><strong>The Fissure:</strong> AI-powered intelligence pathways that emerge from structure</li>
            <li><strong>The Bridge:</strong> Strategic connection between innovation and protection</li>
            <li><strong>The Circuit:</strong> Living intelligence systems that create competitive advantage</li>
          </ul>
          <p className="font-sans text-center text-lg md:text-xl leading-relaxed">
            Every enterprise has foundational strength. The breakthrough comes when AI-powered intelligence emerges from that foundation to bridge innovation with protection.
          </p>
        </section>

        {/* Strategic Insights That Drive Action Table (Optional) */}
        <section className="mb-16">
          <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">Strategic Insights That Drive Action</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left border-collapse">
              <thead>
                <tr className="bg-soft-steel border border-gray-400">
                  <th className="p-3 font-cinzel text-evergreen-intel border border-gray-400">Focus Area</th>
                  <th className="p-3 font-cinzel text-evergreen-intel border border-gray-400">Strategic Insight</th>
                  <th className="p-3 font-cinzel text-evergreen-intel border border-gray-400">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="p-3 font-semibold font-sans bg-executive-gold text-cyber-navy border border-gray-400">AI-Driven Threat Detection</td>
                  <td className="p-3 font-sans bg-white text-cyber-navy border border-gray-400">Organizations implementing ML behavioral analytics see 70% faster response times</td>
                  <td className="p-3 font-sans bg-white text-cyber-navy border border-gray-400">$1.76M average savings per prevented breach</td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td className="p-3 font-semibold font-sans bg-executive-gold text-cyber-navy border border-gray-400">Executive Alignment</td>
                  <td className="p-3 font-sans bg-white text-cyber-navy border border-gray-400">Board-ready security strategies that speak business, not just technical jargon</td>
                  <td className="p-3 font-sans bg-white text-cyber-navy border border-gray-400">Roadmaps that secure funding and accelerate digital initiatives</td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <td className="p-3 font-semibold font-sans bg-executive-gold text-cyber-navy border border-gray-400">M&A Security Diligence</td>
                  <td className="p-3 font-sans bg-white text-cyber-navy border border-gray-400">55% of executives cite cybersecurity as critical in M&A</td>
                  <td className="p-3 font-sans bg-white text-cyber-navy border border-gray-400">Value protection (remember Yahoo’s $350M valuation drop?)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-16">
          <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">Leadership Section</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-96 h-64 mb-4 md:mb-0 relative">
              <Image
                src="/images/James_cameron.png"
                alt="James Cameron"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-cinzel uppercase font-bold text-xl md:text-2xl lg:text-3xl">James Cameron</h3>
              <p className="font-sans italic mb-4 text-lg text-gray-700">{translations.role}</p>
              <p className="font-sans text-base leading-relaxed text-gray-800">
                <strong className="font-semibold">My Approach:</strong> "I believe the role of a security leader isn’t just to mitigate risk—it’s to unlock business value. My approach is boardroom-ready, data-driven, and relentlessly focused on enabling growth, trust, and resilience at every stage of digital transformation."
              </p>
            </div>
          </div>
        </section>

<section className="mb-16">
           <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">WHY WE'RE NOT LIKE OTHER CYBERSECURITY ADVISORS</h2>
           <h3 className="font-cinzel uppercase font-bold text-evergreen-intel mb-2">WE'VE SAT IN YOUR SEAT:</h3>
           <p className="font-sans text-lg leading-relaxed mb-4">
             After leading cybersecurity transformations at Microsoft, AWS, and Avanade, one pattern became clear: The most successful organizations didn't just protect their foundations—they created intelligence pathways that transformed security from cost center to competitive advantage.
           </p>
           <h3 className="font-cinzel uppercase font-bold text-evergreen-intel mb-2">THE ANTI-TEMPLATE APPROACH:</h3>
           <ul className="list-disc list-inside font-sans mb-4">
             <li>Others: Apply same frameworks regardless of context → BRI: Architect outcomes specific to your strategic challenges</li>
             <li>Others: Focus on technical team implementation → BRI: Board-level strategic advisory with technical excellence</li>
             <li>Others: US frameworks applied to European challenges → BRI: Regional regulatory intelligence as competitive advantage</li>
             <li>Others: Security as necessary cost → BRI: Security as strategic enabler of AI-powered growth</li>
           </ul>
           <h3 className="font-cinzel uppercase font-bold text-evergreen-intel mb-2">THE AUTHORITY DIFFERENCE:</h3>
           <p className="font-sans text-lg leading-relaxed">
             "We don't just advise on cybersecurity—we've navigated German regulatory precision, defended €350M+ M&A valuations, and transformed security teams from cost centers into revenue drivers. We know the difference between security theater and strategic advantage."
           </p>
         </section>
        {/* Our Expertise Areas */}
        <section className="mb-16">
          <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">Our Expertise Areas</h2>
          <ul className="list-disc list-inside space-y-2 font-sans text-lg">
            <li><strong>Strategic Cybersecurity Advisory:</strong> Tailored strategies that align security with business objectives.</li>
            <li><strong>AI Security & Governance:</strong> Securing your AI initiatives from concept to deployment.</li>
            <li><strong>M&A Security Due Diligence:</strong> Comprehensive risk assessments to protect deal value.</li>
            <li><strong>Executive Education & Board Engagement:</strong> Translating complex cyber risks into boardroom-ready insights.</li>
            <li><strong>Operational Resilience:</strong> Building robust defenses and rapid response capabilities.</li>
          </ul>
        </section>

        {/* Regional Expertise Section */}
        <section className="mb-16">
          <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">
            EUROPEAN + MIDDLE EASTERN INTELLIGENCE ARCHITECTURE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* REGULATORY MASTERY */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <h3 className="font-cinzel uppercase font-bold text-executive-gold text-xl mb-4">Regulatory Mastery</h3>
              <ul className="list-disc list-inside font-sans text-gray-700 space-y-2">
                <li>EU AI Act compliance frameworks that accelerate innovation</li>
                <li>German business practice integration with global security standards</li>
                <li>Cross-border data governance for European market expansion</li>
                <li>Middle Eastern regulatory navigation for technology sector growth</li>
              </ul>
            </div>

            {/* CULTURAL & LINGUISTIC INTELLIGENCE */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <h3 className="font-cinzel uppercase font-bold text-executive-gold text-xl mb-4">Cultural & Linguistic Intelligence</h3>
              <ul className="list-disc list-inside font-sans text-gray-700 space-y-2">
                <li>Professional German proficiency for direct C-level engagement</li>
                <li>Central European Time (CET) operations advantage</li>
                <li>Cultural competency in German precision engineering mindset</li>
                <li>Cross-cultural team leadership across European and Middle Eastern markets</li>
              </ul>
            </div>

            {/* THE GEOGRAPHIC COMPETITIVE EDGE */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <h3 className="font-cinzel uppercase font-bold text-executive-gold text-xl mb-4">The Geographic Competitive Edge</h3>
              <p className="font-sans text-gray-700 mb-4">Unlike US-based consultants applying American frameworks to European challenges, we architect solutions that work within European regulatory complexity and cultural expectations.</p>
              <p className="font-sans text-gray-700">Our advisory network spans from German automotive precision to Middle Eastern technology growth strategies—giving clients intelligence advantages that transcend geographic limitations.</p>
            </div>
          </div>
        </section>

       {/* Why Leading Boards Choose BRI (Optional) */}
       <section className="mb-16">
         <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6 text-center">Why Leading Boards Choose BRI</h2>
         <p className="font-sans text-center text-lg leading-relaxed mb-8">
           Leading organizations trust BRI for our unparalleled expertise, strategic foresight, and a proven track record of transforming cybersecurity challenges into tangible business advantages.
         </p>
         {/* Optional: Add testimonials or a clear call to action here */}
       </section>

     {/* Connect CTA (Personal & General Contact) */}
     <section id="contact-section" className="mb-16 text-center">
       <h2 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-xl md:text-2xl lg:text-3xl mb-6">Contact Us</h2>
       <p className="text-lg text-center mb-12 font-sans">{translations.contactDescription}</p>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-cinzel uppercase font-bold text-base md:text-lg lg:text-xl">James Cameron</h3>
            <p className="text-lg text-gray-600 mb-6 font-sans">{translations.role}</p>

            <div className="space-y-4 w-full max-w-md mx-auto">
              {/* Email */}
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${translations.email}`} className="text-lg hover:text-forest-green transition-colors font-sans">
                  {translations.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${translations.phone.replace(/\s/g, '')}`} className="text-lg hover:text-forest-green transition-colors font-sans">
                  {translations.phone}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href={`https://${translations.linkedinPersonal}`} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-forest-green transition-colors font-sans">
                  {translations.linkedinPersonal}
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 font-sans">
          For general inquiries:
          <a href={`mailto:${translations.emailGeneral}`} className="text-briGold ml-1 font-sans">
            {translations.emailGeneral}
          </a>
        </p>
        <p className="mt-2 font-sans">
          Company LinkedIn:
          <a
            href={`https://${translations.linkedinCompany}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1 font-sans"
          >
            Big Rock Intelligence
          </a>
        </p>
      </section>
      </div>
    </main>
  );
}