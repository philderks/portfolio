// GITHUB TOKEN SETUP:
// 1. Go to https://github.com/settings/tokens
// 2. Generate new token (classic)
// 3. Name: derks.dev portfolio (read:user scope only)
// 4. Copy token into .env.local as GITHUB_TOKEN
// 5. In Vercel dashboard: Settings → Environment Variables → add GITHUB_TOKEN

// REVALIDATION: page uses ISR (revalidate = 3600) so pinned repos
// refresh in the background at most once per hour — no deploy hook needed.

export interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  topics: string[];
  updatedAt: string;
}

interface GraphQLResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: Array<{
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
          forkCount: number;
          primaryLanguage: { name: string; color: string } | null;
          repositoryTopics: {
            nodes: Array<{ topic: { name: string } }>;
          };
          updatedAt: string;
        }>;
      };
    };
  };
}

const query = `{
  user(login: "philderks") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 6) {
            nodes {
              topic {
                name
              }
            }
          }
          updatedAt
        }
      }
    }
  }
}`;

export async function getPinnedRepos(): Promise<PinnedRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn("GITHUB_TOKEN not set — returning empty repos array");
    return [];
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const json = (await res.json()) as GraphQLResponse;
    const nodes = json.data?.user?.pinnedItems?.nodes ?? [];

    return nodes.map((node) => ({
      name: node.name,
      description: node.description,
      url: node.url,
      stargazerCount: node.stargazerCount,
      forkCount: node.forkCount,
      primaryLanguage: node.primaryLanguage,
      topics: node.repositoryTopics.nodes.map((t) => t.topic.name),
      updatedAt: node.updatedAt,
    }));
  } catch (err) {
    console.error("Failed to fetch pinned repos:", err);
    return [];
  }
}
