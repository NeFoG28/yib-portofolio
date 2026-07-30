import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import JourneySelector from "@/components/sections/JourneySelector";
import About from "@/components/sections/About";
import Eperience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <JourneySelector />
        <About />
        <Eperience />
        <Skills />
        <Projects />
      </main>
    </>
  );
}