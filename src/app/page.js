import PageTransition from "@/components/PageTransition";
import Service from "@/components/Service";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function page() {
  return (
    <PageTransition>
      <div className="text-white min-h-screen relative overflow-hidden">
        {/* Global background effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Animated gradient orbs */}
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-[#7cfc00]/5 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ left: "10%", top: "20%", animationDuration: "4s" }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-l from-[#7cfc00]/3 to-transparent rounded-full blur-3xl animate-pulse"
            style={{
              right: "15%",
              top: "60%",
              animationDuration: "6s",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-to-t from-[#7cfc00]/4 to-transparent rounded-full blur-3xl animate-pulse"
            style={{
              left: "70%",
              bottom: "10%",
              animationDuration: "5s",
              animationDelay: "1s",
            }}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Service />
          <Contact />
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
