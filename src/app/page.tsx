import { HomeClient } from "@/components/HomeClient";
import { getPinnedRepos } from "@/lib/github";

export const revalidate = 3600;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Philipp Derks | Software Engineer",
  url: "https://derks.dev",
  about: {
    "@type": "Person",
    name: "Philipp Derks",
    url: "https://derks.dev",
    sameAs: [
      "https://github.com/philderks",
      "https://linkedin.com/in/philderks",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "ETH Zürich",
      url: "https://ethz.ch",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zurich",
      addressCountry: "CH",
    },
    knowsAbout: [
      "Full-stack development",
      "Distributed systems",
      "TypeScript",
      "Python",
      "Vue.js",
      "React",
    ],
  },
};

export default async function Home() {
  const repos = await getPinnedRepos();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeClient repos={repos} />
    </>
  );
}
