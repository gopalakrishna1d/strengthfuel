import '../styles/PlansPricing.css';

const plans = [
  {
    name: 'Starter Pack',
    price: '₹999',
    frequency: '/week',
    features: [
      '3 Meals per week',
      'High-protein curated meals',
      'Ideal for light gym goers',
    ],
    highlight: false,
  },
  {
    name: 'Strength Builder',
    price: '₹2499',
    frequency: '/month',
    features: [
      '12 Meals per month',
      'Pre/Post workout options',
      'Free diet consultation',
    ],
    highlight: true,
  },
  {
    name: 'Elite Athlete',
    price: '₹4499',
    frequency: '/month',
    features: [
      'Unlimited meals',
      'Custom meal plans',
      'Priority delivery & support',
    ],
    highlight: false,
  },
];

export default function PlansPricing() {
  return (
    <section className="plans-section">
      <h2 className="section-title">Plans & Pricing</h2>
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div className={`plan-card ${plan.highlight ? 'highlight' : ''}`} key={idx}>
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">
              <span>{plan.price}</span>{plan.frequency}
            </p>
            <ul className="plan-features">
              {plan.features.map((feat, i) => (
                <li key={i}>✔ {feat}</li>
              ))}
            </ul>
            <button className="plan-btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}
