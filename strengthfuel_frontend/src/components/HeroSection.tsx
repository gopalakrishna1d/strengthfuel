import Link from 'next/link';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Strength Starts in the Kitchen</h1>
          <p>Fuel your workouts with high-protein, healthy meals delivered to your door. Designed for fitness enthusiasts, by fitness enthusiasts.</p>
          <div className="hero-buttons">
            <Link href="/menu" className="btn primary-btn">View Menu</Link>
            <Link href="/subscriptions" className="btn secondary-btn">Buy Subscription</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/food.jpg" alt="Healthy protein-packed meals" />
        </div>
      </div>
    </section>
  );
}
