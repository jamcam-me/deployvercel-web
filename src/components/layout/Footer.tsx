import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-10 px-6 mt-12 text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-bold text-white text-base mb-2">BIG ROCK INTELLIGENCE</h2>
          <p className="text-steel">
            Bridging AI Innovation with Enterprise Security
          </p>
          <p className="mt-1 text-steel">
            GB <Link href="/de" className="underline text-gold">Deutsch</Link>
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-2">NAVIGATION</h3>
          <ul className="space-y-1 text-steel">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/frankfurt-hub">Frankfurt Hub</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-2">CONTACT</h3>
          <p className="text-steel">James Cameron</p>
          <p className="text-steel">Founder & Executive Advisor</p>
          <p className="text-steel mt-1">james@jamcam.me</p>
          <p className="text-steel">+49 175 584 4546</p>
          <Link href="https://linkedin.com/in/jamcam-cyberleader" className="text-gold underline mt-1 inline-block">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
