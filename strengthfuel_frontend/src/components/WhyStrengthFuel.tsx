import '../styles/WhyStrengthFuel.css';

const reasons = [
  {
    title: 'High-Protein Focused',
    description: 'Every meal is designed with optimal protein content to fuel your strength goals.',
    icon: '🍗',
  },
  {
    title: 'Fitness-Oriented Plans',
    description: 'Customized for bulking, cutting, or maintenance – aligned with your training.',
    icon: '📈',
  },
  {
    title: 'Chef-Curated & Dietitian Approved',
    description: 'A perfect blend of taste and nutrition developed by experts.',
    icon: '👨‍🍳',
  },
  {
    title: 'No Cooking. No Cleanup.',
    description: 'Save hours – get premium, ready-to-eat meals delivered to your door.',
    icon: '🚚',
  },
];

export default function WhyStrengthFuel() {
  return (
    <section className="why-section">
      <h2 className="section-title">Why Strength Fuel?</h2>
      <div className="why-grid">
        {reasons.map((item, idx) => (
          <div className="why-card" key={idx}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
