import React from 'react';
import { Locale } from '@/lib/i18n';

interface ExecutiveOutcomesProps {
  locale: Locale;
}

const ExecutiveOutcomes: React.FC<ExecutiveOutcomesProps> = ({ locale }) => {
  return (
    <>
      <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-center font-futura text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-12 text-executive-gold">
            EUROPEAN INTELLIGENCE ADVANTAGE
          </h2>
          <div className="text-center text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            <p>REGULATORY MASTERY BEYOND COMPLIANCE</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
            <p>Unlike US-based consultants applying American frameworks to European challenges, we architect solutions that work within German precision culture and EU regulatory complexity.</p>
            <p className="font-semibold">STRATEGIC DIFFERENTIATORS:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Professional German proficiency for direct C-level engagement</li>
              <li>EU AI Act compliance frameworks that accelerate (not slow) innovation</li>
              <li>Cross-border M&A security protocols protecting €100M+ technology deals</li>
              <li>Central European Time operations advantage for immediate strategic response</li>
            </ul>
            <p className="font-semibold">THE GEOGRAPHIC INTELLIGENCE EDGE:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>German business practice integration with global security standards</li>
              <li>Real-time regulatory intelligence across European markets</li>
              <li>Cultural competency in precision engineering mindset</li>
              <li>Middle Eastern expansion security frameworks for European companies</li>
            </ul>
            <p className="font-semibold">COMPETITIVE ADVANTAGE STATEMENT:</p>
            <p>"Your competitive advantage isn't just what we protect—it's where we protect it and how we leverage regional intelligence for strategic positioning."</p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-center font-futura text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-12 text-executive-gold">
          {locale === 'en' ? 'EXECUTIVE OUTCOMES' : 'EXECUTIVE OUTCOMES'}
        </h2>

        <div className="text-center text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto">
          {locale === 'en' ? (
            <p>From the Boardroom to the Build Room</p>
          ) : (
            <p>From the Boardroom to the Build Room</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            {locale === 'en' ? (
              <>
                <p>We&apos;ve sat in your seat. Led the teams. Faced the auditors.</p>
                <p>Now we accelerate your journey from reactive to strategic.</p>
                <p className="font-semibold text-executive-gold mt-8">THE BRI ACCELERATION FRAMEWORK (Methodology Visible)</p>
                <div className="space-y-4">
                  <p><strong>PHASE 1: STRATEGIC INTELLIGENCE ARCHITECTURE (Days 1-30)</strong></p>
                  <ul className="list-disc list-inside">
                    <li>Board-level AI governance framework design</li>
                    <li>European regulatory compliance mapping (GDPR + AI Act)</li>
                    <li>Threat landscape intelligence specific to your sector</li>
                    <li>Executive decision-making protocol establishment</li>
                  </ul>
                  <p><strong>PHASE 2: TECHNICAL INTEGRATION EXCELLENCE (Days 31-60)</strong></p>
                  <ul className="list-disc list-inside">
                    <li>ML behavioral analytics implementation with business KPIs</li>
                    <li>Zero-trust architecture optimized for AI workloads</li>
                    <li>Cross-border data governance protocols</li>
                    <li>Predictive threat modeling with strategic impact assessment</li>
                  </ul>
                  <p><strong>PHASE 3: COMPETITIVE ADVANTAGE ACCELERATION (Days 61-90)</strong></p>
                  <ul className="list-disc list-inside">
                    <li>Security-as-enabler cultural transformation</li>
                    <li>AI-powered incident response automation</li>
                    <li>Strategic security positioning for M&A readiness</li>
                    <li>Executive reporting frameworks with business impact metrics</li>
                  </ul>
                  <p><strong>PROVEN TECHNICAL OUTCOMES:</strong></p>
                  <ul className="list-none space-y-2 pl-0">
                    <li>✓ 70% faster threat detection through ML behavioral analytics</li>
                    <li>✓ 90-day AI governance implementation (industry standard: 6+ months)</li>
                    <li>✓ €350M+ deal protection through strategic security positioning</li>
                    <li>✓ Security team transformation from cost center to revenue enabler</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <p>We&apos;ve sat in your seat. Led the teams. Faced the auditors.</p>
                <p>Now we accelerate your journey from reactive to strategic.</p>
                <p className="font-semibold text-executive-gold mt-8">THE BRI ACCELERATION FRAMEWORK (Methodology Visible)</p>
                <div className="space-y-4">
                  <p><strong>PHASE 1: STRATEGIC INTELLIGENCE ARCHITECTURE (Days 1-30)</strong></p>
                  <ul className="list-disc list-inside">
                    <li>Board-level AI governance framework design</li>
                    <li>European regulatory compliance mapping (GDPR + AI Act)</li>
                    <li>Threat landscape intelligence specific to your sector</li>
                    <li>Executive decision-making protocol establishment</li>
                  </ul>
                  <p><strong>PHASE 2: TECHNICAL INTEGRATION EXCELLENCE (Days 31-60)</strong></p>
                  <ul className="list-disc list-inside">
                    <li>ML behavioral analytics implementation with business KPIs</li>
                    <li>Zero-trust architecture optimized for AI workloads</li>
                    <li>Cross-border data governance protocols</li>
                    <li>Predictive threat modeling with strategic impact assessment</li>
                  </ul>
                  <p><strong>PHASE 3: COMPETITIVE ADVANTAGE ACCELERATION (Days 61-90)</strong></p>
                  <ul className="list-disc list-inside">
                    <li>Security-as-enabler cultural transformation</li>
                    <li>AI-powered incident response automation</li>
                    <li>Strategic security positioning for M&A readiness</li>
                    <li>Executive reporting frameworks with business impact metrics</li>
                  </ul>
                  <p><strong>PROVEN TECHNICAL OUTCOMES:</strong></p>
                  <ul className="list-none space-y-2 pl-0">
                    <li>✓ 70% faster threat detection through ML behavioral analytics</li>
                    <li>✓ 90-day AI governance implementation (industry standard: 6+ months)</li>
                    <li>✓ €350M+ deal protection through strategic security positioning</li>
                    <li>✓ Security team transformation from cost center to revenue enabler</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          <div className="relative p-8 bg-gray-800 rounded-lg shadow-lg">
            <blockquote className="text-xl md:text-2xl italic text-gray-300 relative z-10">
              {locale === 'en' ? (
                <p>&ldquo;Explaining security investments to the board is always easier than explaining a breach.&rdquo;</p>
              ) : (
                <p>&ldquo;Explaining security investments to the board is always easier than explaining a breach.&rdquo;</p>
              )}
            </blockquote>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 opacity-75 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-16 py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h3 className="font-futura text-3xl md:text-4xl font-bold uppercase text-executive-gold mb-6">
              {locale === 'en' ? 'FROM STRATEGIC INSIGHT TO COMPETITIVE REALITY' : 'FROM STRATEGIC INSIGHT TO COMPETITIVE REALITY'}
            </h3>
            <p className="text-lg md:text-xl font-light mb-4">
              {locale === 'en' ? 'Big Rock Intelligence delivers the difference between security friction and security advantage—because in the AI era, every decision is a bet on your future.' : 'Big Rock Intelligence delivers the difference between security friction and security advantage—because in the AI era, every decision is a bet on your future.'}
            </p>
            <p className="font-semibold text-executive-gold italic mb-4">
              {locale === 'en' ? '"We\'ve sat in your seat. Led the teams. Faced the auditors. Navigated German regulatory precision. Defended €350M+ M&A valuations. Now we architect the intelligence layer that transforms protection into competitive advantage."' : '"We\'ve sat in your seat. Led the teams. Faced the auditors. Navigated German regulatory precision. Defended €350M+ M&A valuations. Now we architect the intelligence layer that transforms protection into competitive advantage."'}
            </p>
            <p className="text-lg md:text-xl mb-8">
              {locale === 'en' ? 'How could AI-powered security governance become your fastest path to sustainable competitive advantage instead of your biggest compliance headache?' : 'How could AI-powered security governance become your fastest path to sustainable competitive advantage instead of your biggest compliance headache?'}
            </p>
            <a href={`/${locale}/services/strategic-assessment`} className="primary-button inline-block bg-executive-gold text-gray-900 font-semibold py-3 px-6 rounded-lg transition hover:bg-gold-dark">
              {locale === 'en' ? 'Strategic Assessment Available' : 'Strategic Assessment Available'}
            </a>
            <p className="text-sm text-gray-400 mt-2">
              {locale === 'en' ? 'Test our frameworks against your specific challenges' : 'Test our frameworks against your specific challenges'}
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default ExecutiveOutcomes;