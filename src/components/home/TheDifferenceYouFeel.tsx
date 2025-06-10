import React from 'react';
import { Locale } from '@/lib/i18n';

interface TheDifferenceYouFeelProps {
  locale: Locale;
}

const TheDifferenceYouFeel: React.FC<TheDifferenceYouFeelProps> = ({ locale }) => {
  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-center font-futura text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-12 text-executive-gold">
          THE DIFFERENCE YOU FEEL
        </h2>

        <div className="border-t-2 border-executive-gold pt-8 mb-8">
          <p className="text-lg md:text-xl leading-relaxed">
            Most cybersecurity advisors apply the same frameworks regardless of context.
            <br />
            <em>We architect outcomes.</em>
          </p>
        </div>

        <div className="border-t-2 border-executive-gold pt-8 mb-8">
          <h3 className="text-executive-gold font-semibold mb-2">STANDARD CYBERSECURITY APPROACH:</h3>
          <p className="text-lg md:text-xl">Assessment → Implementation → Monitoring → Repeat</p>
        </div>

        <div className="border-t-2 border-executive-gold pt-8 mb-8">
          <h3 className="text-executive-gold font-semibold mb-2">BRI INTELLIGENCE APPROACH:</h3>
          <p className="text-lg md:text-xl">Strategic positioning → Accelerated outcomes → Competitive advantage → Growth enablement</p>
        </div>

        <div className="border-t-2 border-executive-gold pt-8 mb-8">
          <h3 className="text-executive-gold font-semibold mb-4">EXPLICIT CONTRASTS:</h3>
          <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
            <li>While others focus on technical teams, we advise boards</li>
            <li>While others sell 6-month assessments, we deliver 90-day transformations</li>
            <li>While others apply US frameworks to European challenges, we architect regionally-intelligent solutions</li>
            <li>While others treat security as cost center, we transform it into revenue driver</li>
          </ul>
        </div>

        <div className="border-t-2 border-executive-gold pt-8">
          <p className="italic text-lg md:text-xl">
            "One size fits none in security. That's why we don't sell templates—we architect outcomes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheDifferenceYouFeel;