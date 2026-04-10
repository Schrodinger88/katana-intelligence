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
import SectionDivider from "./components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <SectionDivider from="var(--background)" to="var(--background)" />
      <Services />
      <SectionDivider from="var(--background)" to="rgba(157,181,178,0.12)" />
      <BeforeAfter />
      <SectionDivider from="rgba(157,181,178,0.12)" to="var(--background)" />
      <Process />
      <SectionDivider from="var(--background)" to="rgba(157,181,178,0.12)" />
      <Founder />
      <SectionDivider from="rgba(157,181,178,0.12)" to="var(--background)" />
      <Pricing />
      <SectionDivider from="var(--background)" to="rgba(157,181,178,0.18)" />
      <FAQ />
      <SectionDivider from="rgba(157,181,178,0.18)" to="var(--background)" />
      <Contact />
      <Footer />
    </main>
  );
}
