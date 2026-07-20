import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Service from "@/components/Service";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Project from "@/components/Project";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function page() {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Skip to main content — accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-fg focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-bg"
        >
          Skip to main content
        </a>

        <div className="relative z-10">
          <Navbar />
          <main id="main">
            <Home />
            <TrustBar />
            <About />
            <Service />
            <Process />
            <Pricing />
            <Testimonials />
            <Project />
            <FAQ />
            <FinalCTA />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>

      <StickyMobileCTA />
    </PageTransition>
  );
}
