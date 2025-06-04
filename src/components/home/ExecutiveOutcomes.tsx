import React from 'react';
import { Locale } from '@/lib/i18n';

interface ExecutiveOutcomesProps {
  locale: Locale;
}

const ExecutiveOutcomes: React.FC<ExecutiveOutcomesProps> = ({ locale }) => {
  return (
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
                <p>We've sat in your seat. Led the teams. Faced the auditors.</p>
                <p>Now we accelerate your journey from reactive to strategic.</p>
                <p className="font-semibold text-executive-gold mt-8">Our frameworks deliver:</p>
                <ul className="list-none space-y-3 pl-0">
                  <li>□ 70% faster threat detection through ML behavioral analytics</li>
                  <li>□ 90-day AI governance implementation (not the usual 9 months)</li>
                  <li>□ Pre-validated M&A security postures that accelerate deals</li>
                  <li>□ Security-as-an-enabler culture transformation</li>
                </ul>
              </>
            ) : (
              <>
                <p>We've sat in your seat. Led the teams. Faced the auditors.</p>
                <p>Now we accelerate your journey from reactive to strategic.</p>
                <p className="font-semibold text-executive-gold mt-8">Our frameworks deliver:</p>
                <ul className="list-none space-y-3 pl-0">
                  <li>□ 70% faster threat detection through ML behavioral analytics</li>
                  <li>□ 90-day AI governance implementation (not the usual 9 months)</li>
                  <li>□ Pre-validated M&A security postures that accelerate deals</li>
                  <li>□ Security-as-an-enabler culture transformation</li>
                </ul>
              </>
            )}
          </div>

          <div className="relative p-8 bg-gray-800 rounded-lg shadow-lg">
            <blockquote className="text-xl md:text-2xl italic text-gray-300 relative z-10">
              {locale === 'en' ? (
                <p>"Explaining security investments to the board is always easier than explaining a breach."</p>
              ) : (
                <p>"Explaining security investments to the board is always easier than explaining a breach."</p>
              )}
            </blockquote>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 opacity-75 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href={`/${locale}/services`} className="primary-button inline-block">
            {locale === 'en' ? 'ACCESS THE BRI ACCELERATION FRAMEWORK' : 'ACCESS THE BRI ACCELERATION FRAMEWORK'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveOutcomes;