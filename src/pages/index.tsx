import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Thoughts from "@/components/Thoughts";
import Reads from "@/components/Reads";
import BeyondWork from "@/components/BeyondWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <Projects limit={2} />
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Thoughts limit={1} />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <Reads limit={2} />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <BeyondWork preview />
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
