import { FeaturedQuizzes } from "./components/featured-quizzes";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { Navbar } from "./components/navbar";
import { Testimonials } from "./components/testimonials";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedQuizzes />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
