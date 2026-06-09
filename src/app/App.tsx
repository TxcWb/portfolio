import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SpotlightEffect } from "./components/ui/SpotlightEffect";

export default function App() {
  return (
    <div className="relative min-h-screen text-foreground dark selection:bg-purple-500/30">
      <SpotlightEffect />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}