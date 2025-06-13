import '../styles/CTABanner.css';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2>Ready to Fuel Your Strength?</h2>
        <p>Join hundreds of fitness-focused customers who transformed their nutrition with Strength Fuel.</p>
        <Link href="/subscribe" className="cta-button">Subscribe Now</Link>
      </div>
    </section>
  );
}
