// Components
import Hero from "@/components/Hero";
import About from "./about/page";
import Services from "@/components/Service";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
    </main>
  );
}
