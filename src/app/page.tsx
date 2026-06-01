import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import ProjectsSection from "./components/projects-section";
import GallerySection from "./components/gallery-section";
import ProcessSection from "./components/process-section";
import TestimonialsSection from "./components/testimonials-section";
import BlogSection from "./components/blog-section";
import CtaSection from "./components/cta-section";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import ScrollReveal from "./components/scroll-reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <GallerySection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollReveal />
    </>
  );
}
