import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceHighlights } from "./components/ServiceHighlights";
import { AboutSection } from "./components/AboutSection";
import { ServicesSlider } from "./components/ServicesSlider";
import { LatestProjects } from "./components/LatestProjects";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CostCalculator } from "./components/CostCalculator";
import { Testimonials } from "./components/Testimonials";
import { BlogSection } from "./components/BlogSection";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceHighlights />
      <AboutSection />
      <ServicesSlider />
      <LatestProjects />
      <WhyChooseUs />
      <CostCalculator />
      <Testimonials />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
