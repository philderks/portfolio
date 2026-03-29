import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GridLines } from "@/components/GridLines";
import { getPinnedRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const repos = await getPinnedRepos();

  return (
    <>
      <GridLines />
      <div className="relative z-10">
        <Hero />
        <main>
          <About />
          <ExperienceSection />
          <ProjectsSection repos={repos} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
