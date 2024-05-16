// Components
import Hero from "@/components/Hero";
import About from "./about/page";
import Services from "@/components/Service";
import Work from "@/components/Work";
import Cta from "@/components/Cta";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Cta/>
      <Contact/>
    </main>
  );
}
