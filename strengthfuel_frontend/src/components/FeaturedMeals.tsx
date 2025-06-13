import '../styles/FeaturedMeals.css';
import Link from 'next/link';

const meals = [
  {
    title: 'High Protein Bowl',
    image: '/images/HighProteinBowl.jpg',
    tag: 'Muscle Builder',
  },
//   {
//     title: 'Vegan Power Pack',
//     image: '/images/vegan-meal.jpg',
//     tag: 'Plant-Based',
//   },
  {
    title: 'Pre-Workout Energy',
    image: '/images/pre-workout.jpg',
    tag: 'Energy Boost',
  },
  {
    title: 'Post-Workout Recovery',
    image: '/images/post-workout.jpg',
    tag: 'Recovery Focused',
  },
];

export default function FeaturedMeals() {
  return (
    <section className="featured-meals-section">
      <h2 className="section-title">Featured Meals</h2>
      <div className="meals-grid">
        {meals.map((meal, index) => (
          <div className="meal-card" key={index}>
            <img src={meal.image} alt={meal.title} />
            <div className="meal-info">
              <span className="meal-tag">{meal.tag}</span>
              <h3>{meal.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="view-menu-btn">
        <Link href="/menu" className="btn primary-btn">View Full Menu</Link>
      </div>
    </section>
  );
}
