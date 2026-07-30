import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import JourneySelector from "@/components/sections/JourneySelector";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <JourneySelector />
      </main>
    </>
  );
}