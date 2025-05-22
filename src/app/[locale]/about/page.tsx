// src/app/[locale]/about/page.tsx
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>About · Big Rock Intelligence</title>
        <meta
          name="description"
          content="Learn how Big Rock Intelligence anchors your security and AI strategy with strategic guidance and executive-level insight."
        />
      </Head>

      <main className="prose prose-invert mx-auto px-6 py-12 max-w-4xl">
        {/* Page Hero */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Big Rock Intelligence</h1>
          <p className="text-xl text-steelGray">The Foundation of Strategic Security</p>
          <div className="mt-8">
            <Image
              src="/images/hero_rock_silhouette.png"
              alt="Glacial Rock Silhouette"
              width={800}
              height={400}
              className="mx-auto rounded shadow-lg"
            />
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p>
            Empower organizations with strategic cybersecurity guidance and seamless AI integration, enabling secure digital transformation that drives measurable business outcomes.
          </p>
        </section>

        {/* The Big Rock Difference */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-2">The Big Rock Difference</h2>
          <p className="mb-4">
            In today’s cybersecurity landscape, most approach security like their New Year&apos;s resolution—they know exactly what they should do, have all the right tools, but somehow still aren’t doing it right. Global cybercrime costs are projected to reach <strong>$10.5 trillion</strong> by 2025.
          </p>
          <p>
            The gap isn&apos;t in understanding threats. It&apos;s in translating security from a technical concern into a strategic advantage.
          </p>
        </section>

        {/* Strategic Insights Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Strategic Insights That Drive Action</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left border-collapse">
              <thead>
                <tr className="bg-graphite text-white">
                  <th className="p-3">Focus Area</th>
                  <th className="p-3">Strategic Insight</th>
                  <th className="p-3">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-stoneGray even:bg-white">
                  <td className="p-3 font-semibold">AI-Driven Threat Detection</td>
                  <td className="p-3">Organizations implementing ML behavioral analytics see 70% faster response times</td>
                  <td className="p-3">$1.76M average savings per prevented breach</td>
                </tr>
                <tr className="odd:bg-stoneGray even:bg-white">
                  <td className="p-3 font-semibold">Executive Alignment</td>
                  <td className="p-3">Board-ready security strategies that speak business, not just technical jargon</td>
                  <td className="p-3">Roadmaps that secure funding and accelerate digital initiatives</td>
                </tr>
                <tr className="odd:bg-stoneGray even:bg-white">
                  <td className="p-3 font-semibold">M&amp;A Security Diligence</td>
                  <td className="p-3">55% of executives cite cybersecurity as critical in M&amp;A</td>
                  <td className="p-3">Value protection (remember Yahoo’s $350M valuation drop?)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Leadership</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-32 h-32 mb-4 md:mb-0 relative">
              <Image
                src="/images/james-cameron.jpg"
                alt="James Cameron"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">James Cameron</h3>
              <p className="italic mb-2">Founder &amp; Strategic Advisor</p>
              <p>
                UC Berkeley-trained AI strategist with executive cybersecurity credentials. Microsoft/AWS/Avanade alumni with battle-tested experience across European and global markets.
              </p>
              <p className="mt-2">
                <strong>My approach:</strong> “You don&apos;t bet blind in poker. Why would you do it with your AI security stack?”
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Expertise Areas</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cybersecurity Strategy &amp; Leadership</strong> &mdash; Translating technical complexity into executive clarity
            </li>
            <li>
              <strong>AI Governance &amp; Integration</strong> &mdash; Bridging innovation with enterprise-grade protection
            </li>
            <li>
              <strong>M&amp;A and Venture Security Diligence</strong> &mdash; Protecting value through every phase of the deal lifecycle
            </li>
            <li>
              <strong>Go-to-Market Security Enablement</strong> &mdash; Transforming security from blocker to accelerator
            </li>
          </ul>
        </section>

        {/* Global Reach */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Global Reach, European Core</h2>
          <p>
            Headquartered in continental Europe and operating on CET, BRI delivers advisory excellence across Europe and the Middle East while maintaining global client engagements. Professional German proficiency enables nuanced regional service delivery.
          </p>
        </section>

        {/* The Question */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">The Question That Drives Us</h2>
          <p className="text-lg">
            How could transforming your security from cost center to strategic enabler accelerate your next product launch, acquisition, or market expansion?
          </p>
          <blockquote className="mt-4 italic">
            “What we protect today powers the value of tomorrow.”
          </blockquote>
        </section>

        {/* Connect CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Connect with BRI</h2>
          <p className="mb-2">
            Ready to transform security from necessary expense to strategic advantage? Let&apos;s connect.
          </p>
          <p>
            Email:{' '}
            <a href="mailto:strategy@bigrockintelli.com" className="text-briGold">
              strategy@bigrockintelli.com
            </a>
          </p>
          <p className="mt-2">
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/company/bigrockintelli"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Big Rock Intelligence
            </a>
          </p>
        </section>
      </main>
    </>
  )
}
