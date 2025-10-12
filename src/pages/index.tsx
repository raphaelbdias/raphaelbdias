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
          <section className="container">
            <Projects limit={2} />
          </section>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <section className="container">
            <Thoughts limit={1} />
          </section>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <section className="container">
            <Reads limit={2} />
          </section>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <section className="container">
            <BeyondWork preview />
          </section>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <section className="container">
            <Contact />
          </section>
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
