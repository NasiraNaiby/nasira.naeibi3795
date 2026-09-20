import { Footer } from "./sections/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Parcours } from "./sections/Parcours";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu principal
      </a>

      <Navbar />

      <main id="contenu">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Parcours />
        <Contact />
      </main>

      <Footer />
    </>
  );
}