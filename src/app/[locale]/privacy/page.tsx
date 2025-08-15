import React from 'react';
import { Locale } from '@/lib/i18n';

interface PrivacyPageProps {
  params: {
    locale: Locale;
  };
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ params }) => {
  const { locale } = params;

  const privacyContent = {
    en: {
      title: "BigRock Intelligence Privacy Policy",
      lastUpdated: "Last updated: June 2025",
      intro: "BigRock Intelligence (“BRI”, “we”, “us”, or “our”) is committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner.",
      sections: [
        {
          title: "1. What Information We Collect",
          points: [
            "Contact Information: Name, email address, phone number, company, and job title provided via forms or direct contact.",
            "Website Usage Data: Standard analytics information (IP address, browser type, pages visited, and cookies) to improve our website and services.",
            "Service Data: Information you provide for consulting, advisory, or engagement purposes."
          ]
        },
        {
          title: "2. How We Use Your Information",
          points: [
            "To respond to your inquiries and provide our services.",
            "To communicate important updates, newsletters, or event invitations (you may opt out at any time).",
            "To improve website functionality, security, and user experience.",
            "To fulfill legal and regulatory requirements."
          ]
        },
        {
          title: "3. How We Share Your Information",
          points: [
            "We do not sell or rent your personal information.",
            "Data may be shared with trusted service providers for technical, analytics, or communication needs, under strict confidentiality.",
            "Information may be disclosed to comply with laws, enforce our policies, or protect our rights."
          ]
        },
        {
          title: "4. Cookies & Analytics",
          points: [
            "Our website uses cookies and third-party analytics to understand usage and improve services.",
            "You can control cookies through your browser settings."
          ]
        },
        {
          title: "5. Your Rights (GDPR)",
          points: [
            "If you are located in the European Economic Area, you have the right to access, correct, delete, or restrict use of your personal data. Contact us at [privacy@bigrock-intelligence.com] for any requests."
          ]
        },
        {
          title: "6. Data Security",
          points: [
            "We take reasonable technical and organizational measures to protect your data from unauthorized access, disclosure, or loss."
          ]
        },
        {
          title: "7. Data Retention",
          points: [
            "Personal information is retained only as long as necessary to fulfill the purposes above or as required by law."
          ]
        },
        {
          title: "8. Changes to This Policy",
          points: [
            "We may update this Privacy Policy periodically. The latest version will always be posted on our website."
          ]
        },
        {
          title: "9. Contact Us",
          points: [
            "For questions about this policy or your data, please contact:",
            "privacy@bigrock-intelligence.com"
          ]
        }
      ]
    },
    de: {
      title: "BigRock Intelligence Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: Juni 2025",
      intro: "BigRock Intelligence („BRI“, „wir“, „uns“ oder „unser“) verpflichtet sich, Ihre Privatsphäre zu schützen und sicherzustellen, dass Ihre persönlichen Daten sicher und verantwortungsvoll behandelt werden.",
      sections: [
        {
          title: "1. Welche Informationen wir sammeln",
          points: [
            "Kontaktinformationen: Name, E-Mail-Adresse, Telefonnummer, Unternehmen und Berufsbezeichnung, die über Formulare oder direkten Kontakt bereitgestellt werden.",
            "Website-Nutzungsdaten: Standardanalysedaten (IP-Adresse, Browsertyp, besuchte Seiten und Cookies) zur Verbesserung unserer Website und Dienstleistungen.",
            "Service-Daten: Informationen, die Sie für Beratungs-, Beratungs- oder Engagementzwecke bereitstellen."
          ]
        },
        {
          title: "2. Wie wir Ihre Informationen verwenden",
          points: [
            "Um Ihre Anfragen zu beantworten und unsere Dienstleistungen zu erbringen.",
            "Um wichtige Updates, Newsletter oder Veranstaltungseinladungen zu übermitteln (Sie können sich jederzeit abmelden).",
            "Um die Funktionalität, Sicherheit und Benutzererfahrung der Website zu verbessern.",
            "Zur Erfüllung gesetzlicher und behördlicher Anforderungen."
          ]
        },
        {
          title: "3. Wie wir Ihre Informationen teilen",
          points: [
            "Wir verkaufen oder vermieten Ihre persönlichen Daten nicht.",
            "Daten können unter strenger Vertraulichkeit an vertrauenswürdige Dienstleister für technische, analytische oder kommunikative Zwecke weitergegeben werden.",
            "Informationen können offengelegt werden, um Gesetze einzuhalten, unsere Richtlinien durchzusetzen oder unsere Rechte zu schützen."
          ]
        },
        {
          title: "4. Cookies & Analysen",
          points: [
            "Unsere Website verwendet Cookies und Analysen von Drittanbietern, um die Nutzung zu verstehen und Dienstleistungen zu verbessern.",
            "Sie können Cookies über Ihre Browsereinstellungen steuern."
          ]
        },
        {
          title: "5. Ihre Rechte (DSGVO)",
          points: [
            "Wenn Sie sich im Europäischen Wirtschaftsraum befinden, haben Sie das Recht, auf Ihre persönlichen Daten zuzugreifen, diese zu korrigieren, zu löschen oder deren Nutzung einzuschränken. Kontaktieren Sie uns unter [privacy@bigrock-intelligence.com] für alle Anfragen."
          ]
        },
        {
          title: "6. Datensicherheit",
          points: [
            "Wir ergreifen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Offenlegung oder Verlust zu schützen."
          ]
        },
        {
          title: "7. Datenaufbewahrung",
          points: [
            "Personenbezogene Daten werden nur so lange aufbewahrt, wie es zur Erfüllung der oben genannten Zwecke oder gesetzlich erforderlich ist."
          ]
        },
        {
          title: "8. Änderungen dieser Richtlinie",
          points: [
            "Wir können diese Datenschutzrichtlinie regelmäßig aktualisieren. Die neueste Version wird immer auf unserer Website veröffentlicht."
          ]
        },
        {
          title: "9. Kontakt",
          points: [
            "Für Fragen zu dieser Richtlinie oder Ihren Daten wenden Sie sich bitte an:",
            "privacy@bigrock-intelligence.com"
          ]
        }
      ]
    }
  };

  const content = privacyContent[locale];

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

export default PrivacyPage;