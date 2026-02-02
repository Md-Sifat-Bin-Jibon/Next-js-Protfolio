import Hero from "@/Components/Hero";
import TechStack from "@/Components/TechStack";
import HackathonAchievements from "@/Components/HackathonAchievements";
import WorkshopTaken from "@/Components/WorkshopTaken";
import Experience from "@/Components/Experience";
import LinkedInContributions from "@/Components/LinkedInContributions";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TechStack />
      <HackathonAchievements />
      <WorkshopTaken />
      <Experience />
      <LinkedInContributions />
      {/* SEO-optimized hidden content for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>Md Sifat Bin Jibon - Blockchain Developer in Bangladesh</h2>
        <p>
          Md Sifat Bin Jibon (also known as md sifat or md sifat bin jibon) is a
          Blockchain Developer in Bangladesh working at R3 and serving as CEO at
          FluvoSoft. Former member of UIU Developers HUB (UIUDH) at United
          International University (UIU), where he conducted React Orbit, Hackathon Preparation, and Interview Panel workshops. Specialized in blockchain, Corda, DLT, and
          distributed ledger technologies. Expert in blockchain development,
          working with R3 blockchain solutions and leading technical teams at
          FluvoSoft. Active LinkedIn contributor sharing insights on startup strategy, blockchain infrastructure, and technology innovation in Bangladesh.
        </p>
        <p>
          Keywords: md sifat, md sifat bin jibon, r3, blockchain, uiu, united
          international university, uiudh, uiu developers hub, fluvosoft, uiu
          orbit, blockchain developer in bangladesh, drmc, linkedin posts, startup strategy, blockchain startup bangladesh, interview panel, workshop instructor, react orbit workshop, hackathon preparation workshop
        </p>
      </div>
    </main>
  );
}
