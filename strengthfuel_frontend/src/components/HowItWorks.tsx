import '../styles/HowItWorks.css';

const steps = [
  {
    title: 'Choose Your Plan',
    description: 'Pick a subscription that fits your goals – weekly or monthly.',
    icon: '📦',
  },
  {
    title: 'Customize Meals',
    description: 'Tell us your protein needs and preferences.',
    icon: '🥗',
  },
  {
    title: 'We Cook & Deliver',
    description: 'Our chefs prepare and deliver meals to your doorstep.',
    icon: '👨‍🍳',
  },
  {
    title: 'Fuel Your Strength',
    description: 'Eat clean. Train hard. Repeat.',
    icon: '💪',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
