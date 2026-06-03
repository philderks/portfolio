# derks.dev Portfolio

Personal portfolio website for Philipp Derks, built with Next.js, React, TypeScript, and Tailwind CSS. The site highlights experience, projects, contact information, and legal pages with a retro terminal/arcade-inspired visual style.

## Features

- **Next.js App Router** with ISR for GitHub project data
- **Bilingual content** in English and German
- **Theme support** via `next-themes`
- **GitHub pinned repositories** fetched through the GitHub GraphQL API
- **Retro UI details** including split-flap text, insert-coin gate, circuit background, and optional Aurebesh font mode
- **Legal routes** for imprint and privacy pages
- **Dev Container support** for a consistent Node.js development environment

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Option 1: Dev Container (recommended)

This project includes a [dev container](https://containers.dev/) configuration with Node.js 22 and the recommended VS Code extensions.

**Prerequisites:**

- [Docker](https://www.docker.com/)
- [VS Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Steps:

1. Open the repository in VS Code.
2. Run **Dev Containers: Reopen in Container** from the Command Palette, or click **Reopen in Container** when prompted.
3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

### Option 2: Local Development

**Prerequisite:** [Node.js](https://nodejs.org/) 22 or later.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy the example environment file and fill in your GitHub token:

```bash
cp .env.example .env.local
```

```env
GITHUB_TOKEN=your_github_token
```

`GITHUB_TOKEN` is used to fetch pinned repositories from the GitHub GraphQL API. A classic token with `read:user` scope is sufficient. Without the token, the projects section renders without pinned repository data.

For production deployments, add the same variable to your hosting provider's environment settings.

## Available Scripts

- `npm run dev` — start the development server with webpack
- `npm run build` — build the app for production
- `npm run start` — run the production build
- `npm run lint` — lint the source code with ESLint

## Project Structure

```text
src/
  app/                  App Router pages, layout, global styles, legal routes
  components/           UI sections and shared components
  data/                 Experience and social link data
  hooks/                Client-side language and UI state hooks
  lib/                  i18n content and GitHub API integration
public/
  fonts/                Local Aurebesh font assets
.devcontainer/          VS Code Dev Container configuration
```

## Deployment

The site is designed for deployment on [Vercel](https://vercel.com/) or another Next.js-compatible host.

Before deploying:

1. Configure `GITHUB_TOKEN` in the deployment environment.
2. Run the production build locally:

```bash
npm run build
```

3. Deploy the repository through your hosting provider.

The homepage revalidates pinned GitHub repository data at most once per hour via ISR.
