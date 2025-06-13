import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturedMeals from '@/components/FeaturedMeals';
import WhyStrengthFuel from '@/components/WhyStrengthFuel';
import Testimonials from '@/components/CustomerTestimonials';
import PlansPricing from '@/components/PlansPricing';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <FeaturedMeals />
      <WhyStrengthFuel />
      <PlansPricing />
      <Testimonials />
      <CTABanner />
      
      <Footer />
    </>
  );
}
