import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import BeforeAfter from "./components/sections/BeforeAfter";
import Process from "./components/sections/Process";
import Founder from "./components/sections/Founder";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Founder />
      <Footer />
    </main>
  );
}
