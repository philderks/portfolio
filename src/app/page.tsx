import { HomeClient } from "@/components/HomeClient";
import { getPinnedRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const repos = await getPinnedRepos();

  return <HomeClient repos={repos} />;
}
