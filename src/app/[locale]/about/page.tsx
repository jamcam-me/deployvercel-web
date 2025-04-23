
'use client';

export default function About() {
  return (
    <main style={{ padding: '60px 20px', backgroundColor: '#0a1f44', color: 'white', fontFamily: 'var(--font-body)' }}>
      <section style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', color: 'var(--bri-gold)', fontSize: '2.5rem' }}>
          About Big Rock Intelligence
        </h1>
        <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
          Big Rock Intelligence (BRI) empowers organizations with strategic cybersecurity guidance and seamless AI integration, enabling secure digital transformation.
        </p>

        <h2 style={{ fontFamily: 'var(--font-subheading)', color: 'var(--bri-gold)', marginTop: '40px' }}>Mission</h2>
        <p>
          Empower organizations with strategic cybersecurity guidance and seamless AI integration, enabling secure digital transformation.
        </p>

        <h2 style={{ fontFamily: 'var(--font-subheading)', color: 'var(--bri-gold)', marginTop: '30px' }}>Vision</h2>
        <p>
          To become the premier trusted advisor for cybersecurity and AI strategy across Europe and the Middle East by 2028.
        </p>

        <h2 style={{ fontFamily: 'var(--font-subheading)', color: 'var(--bri-gold)', marginTop: '30px' }}>Core Values</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Excellence in Delivery</li>
          <li>Innovation in Approach</li>
          <li>Integrity in Relationships</li>
          <li>Client-Centric Focus</li>
          <li>AI Ethics & Governance</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-subheading)', color: 'var(--bri-gold)', marginTop: '30px' }}>James Cameron</h2>
        <p>
          Founder & Strategic Advisor – James brings 25+ years of cybersecurity and AI leadership across Microsoft, AWS, and Avanade. He has briefed boards, stabilized five-alarm fires, and now bridges the gap between innovation and trust.
        </p>
      </section>
    </main>
  );
}
