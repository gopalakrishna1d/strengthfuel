import '../styles/CustomerTestimonials.css';

const testimonials = [
  {
    name: 'Ravi S.',
    feedback: 'Strength Fuel meals helped me stick to my macros even during peak gym season. The high-protein options are a game changer.',
    avatar: '/images/users/ravi.jpg',
  },
  {
    name: 'Aditi M.',
    feedback: 'I used to skip meals after workouts due to time, but now I just heat and eat. My recovery and strength have improved significantly.',
    avatar: '/images/users/aditi.jpg',
  },
  {
    name: 'Jagan T.',
    feedback: 'The vegan protein plan is legit. Tastes great and gives me sustained energy for training.',
    avatar: '/images/users/jagan.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((item, idx) => (
          <div className="testimonial-card" key={idx}>
            <img className="testimonial-avatar" src={item.avatar} alt={`${item.name}'s photo`} />
            <p className="testimonial-feedback">“{item.feedback}”</p>
            <h4 className="testimonial-name">— {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
