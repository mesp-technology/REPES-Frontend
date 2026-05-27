import Header from "./components/header";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import ProjectsSection from "./components/projects-section";
import GallerySection from "./components/gallery-section";
import ProcessSection from "./components/process-section";
import BlogSection from "./components/blog-section";
import CtaSection from "./components/cta-section";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <GallerySection />
        <ProcessSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
