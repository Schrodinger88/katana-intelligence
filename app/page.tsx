import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
