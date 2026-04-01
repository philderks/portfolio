import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { GridLines } from "@/components/GridLines";
import { getPinnedRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const repos = await getPinnedRepos();

  return (
    <>
      <GridLines />
      <Navbar />
      <Hero />
      <main>
        <About />
        <ExperienceSection />
        <ProjectsSection repos={repos} />
      </main>
      <ContactSection />
    </>
  );
}
