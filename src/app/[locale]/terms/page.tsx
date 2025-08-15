import React from 'react';
import { Locale } from '@/lib/i18n';

interface TermsPageProps {
  params: {
    locale: Locale;
  };
}

const TermsPage: React.FC<TermsPageProps> = ({ params }) => {
  const { locale } = params;

  const termsContent = {
    en: {
      title: "BigRock Intelligence Terms of Service",
      lastUpdated: "Last updated: June 2025",
      intro: "Welcome to BigRock Intelligence (“BRI”, “we”, “us”, or “our”). By accessing our website or engaging our services, you agree to these Terms of Service.",
      sections: [
        {
          title: "1. Use of Website",
          points: [
            "All content on this website is provided for informational purposes only and may not be copied, distributed, or reproduced without permission.",
            "You agree not to use this site for unlawful, harmful, or unauthorized activities."
          ]
        },
        {
          title: "2. Services & Engagements",
          points: [
            "Service agreements will be governed by individual contracts; these terms apply only to website use and general engagement.",
            "BRI reserves the right to refuse or terminate services at its discretion."
          ]
        },
        {
          title: "3. Intellectual Property",
          points: [
            "All content, logos, designs, and materials are the intellectual property of BRI or its licensors and may not be used without prior written consent."
          ]
        },
        {
          title: "4. Limitation of Liability",
          points: [
            "BRI is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website or reliance on any content herein."
          ]
        },
        {
          title: "5. Third-Party Links",
          points: [
            "Our website may contain links to third-party websites. BRI is not responsible for the content or privacy practices of those sites."
          ]
        },
        {
          title: "6. Changes to Terms",
          points: [
            "BRI may update these Terms of Service at any time. The latest version will always be posted on our website."
          ]
        },
        {
          title: "7. Governing Law",
          points: [
            "These terms are governed by the laws of Germany, unless otherwise specified in an individual service agreement."
          ]
        },
        {
          title: "8. Contact Us",
          points: [
            "Questions about these Terms? Please email:",
            "legal@bigrock-intelligence.com"
          ]
        }
      ]
    },
    de: {
      title: "BigRock Intelligence Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: Juni 2025",
      intro: "Willkommen bei BigRock Intelligence („BRI“, „wir“, „uns“ oder „unser“). Durch den Zugriff auf unsere Website oder die Nutzung unserer Dienste stimmen Sie diesen Nutzungsbedingungen zu.",
      sections: [
        {
          title: "1. Nutzung der Website",
          points: [
            "Alle Inhalte auf dieser Website dienen nur zu Informationszwecken und dürfen ohne Genehmigung nicht kopiert, verbreitet oder reproduziert werden.",
            "Sie stimmen zu, diese Website nicht für ungesetzliche, schädliche oder unbefugte Aktivitäten zu nutzen."
          ]
        },
        {
          title: "2. Dienstleistungen & Engagements",
          points: [
            "Dienstleistungsvereinbarungen unterliegen individuellen Verträgen; diese Bedingungen gelten nur für die Nutzung der Website und die allgemeine Nutzung.",
            "BRI behält sich das Recht vor, Dienste nach eigenem Ermessen zu verweigern oder zu beenden."
          ]
        },
        {
          title: "3. Geistiges Eigentum",
          points: [
            "Alle Inhalte, Logos, Designs und Materialien sind geistiges Eigentum von BRI oder seinen Lizenzgebern und dürfen ohne vorherige schriftliche Zustimmung nicht verwendet werden."
          ]
        },
        {
          title: "4. Haftungsbeschränkung",
          points: [
            "BRI haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, die sich aus Ihrer Nutzung dieser Website oder dem Vertrauen auf Inhalte dieser Website ergeben."
          ]
        },
        {
          title: "5. Links von Drittanbietern",
          points: [
            "Unsere Website kann Links zu Websites von Drittanbietern enthalten. BRI ist nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser Websites."
          ]
        },
        {
          title: "6. Änderungen der Bedingungen",
          points: [
            "BRI kann diese Nutzungsbedingungen jederzeit aktualisieren. Die neueste Version wird immer auf unserer Website veröffentlicht."
          ]
        },
        {
          title: "7. Anwendbares Recht",
          points: [
            "Diese Bedingungen unterliegen den Gesetzen Deutschlands, sofern in einer individuellen Dienstleistungsvereinbarung nichts anderes festgelegt ist."
          ]
        },
        {
          title: "8. Kontakt",
          points: [
            "Fragen zu diesen Bedingungen? Bitte senden Sie eine E-Mail an:",
            "legal@bigrock-intelligence.com"
          ]
        }
      ]
    }
  };

  const content = termsContent[locale];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold font-cinzel text-evergreen-intel mb-2">{content.title}</h1>
      <p className="text-sm font-futura text-gray-500 mb-4">{content.lastUpdated}</p>
      <p className="mb-4 font-futura text-cyber-graphite leading-normal">{content.intro}</p>

      {content.sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl font-semibold font-futura text-evergreen-intel mb-2">{section.title}</h2>
          <div className="space-y-1">
            {section.points.map((point, pointIndex) => (
              <p key={pointIndex} className="font-futura text-evergreen-intel leading-snug">{point}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TermsPage;