import Hero from "@/Components/Hero";
import TechStack from "@/Components/TechStack";
import Experience from "@/Components/Experience";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TechStack />
      <Experience />
    </main>
  );
}
