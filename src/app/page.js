import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Service from "@/components/Service";

export default function page() {
  return (
    <div className="bg-[#222] text-white">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Service></Service> 
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
