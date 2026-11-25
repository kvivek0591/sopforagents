# SoPforAgents

An agent-first public library of versioned operating knowledge, built with [KL4A](https://github.com/CogniSwitch/KL4A).

**Domain:** SoPforAgents.com
**Status:** The project introduction is live on SoPforAgents.com. The first knowledge bundle is in preparation.

## Project direction

Transform suitable publicly available SOPs, policies, and regulatory documents into downloadable, source-backed knowledge bundles. Users can inspect and review a bundle, add their organization's procedures, and expose it to their agents through KL4A MCP.

Start within US healthcare operations, with prior authorization across leading US health insurers as the first focus. Individual source documents, reuse rights, and coverage boundaries remain under review. Expand into selected healthcare verticals as useful bundles are built.

Regulatory requirements, source policies, and organization-approved SOPs retain distinct source and review status.

## First milestone

- One real, versioned bundle with source evidence, scope, exclusions, and explicit review status.
- An agent-readable catalog entry and immutable download.
- A reproducible walkthrough for downloading, reviewing, adapting, and connecting the bundle through KL4A MCP.
- An evaluation report describing tested behavior and known gaps.

## Agent-facing website

The proposed public interface includes readable HTML and Markdown alongside:

- `/catalog.json`: bundle discovery.
- `/bundles/{id}/manifest.json`: scope, sources, review coverage, freshness, compatibility, and downloads.
- `/bundles/{id}/versions/{version}/`: pinned artifacts and evidence.
- `/changes.json`: structured release and source-change history.

These routes are planned; they are not implemented.

## Publishing and hosting

- Git and release artifacts hold canonical bundle contents and metadata.
- The catalog is generated from the versioned artifacts.
- Prismic is the proposed CMS for editorial content, methodology, and project updates.
- Vercel hosts the website. Project: `sopforagents`, in the CS Projects team.
- Initial consumption uses downloaded bundles and KL4A's local, read-only SOP MCP.

## Build in public

Publish source-selection rationale, extraction progress, known gaps, corrections, evaluation results, and release changes. Record reuse rights per source and preserve provenance and review history.

Do not represent extracted or unreviewed knowledge as an organization's approved procedure. Source changes and local adaptations must remain traceable.

## Repository setup

The Next.js app is connected to the [sopforagents Prismic repository](https://sopforagents.prismic.io) and deployed at [SoPforAgents.com](https://www.sopforagents.com). The introduction is currently rendered in `src/app/page.tsx`; `public/llms.txt` provides the same project scope and development status in plain text for agents. Knowledge bundles and catalog routes remain planned.

Install dependencies and start the local app:

```sh
npm install
npm run dev
```

Validate the app with `npm run lint` and `npm run build`.

Prismic configuration lives in `prismic.config.json`; the API client is `src/prismicio.ts`. Preview routes are `/api/preview` and `/api/exit-preview`; `/api/revalidate` handles content-update webhooks. The root layout includes the Prismic preview integration, and `/slice-simulator` provides the generated slice preview route. Content types and slices have not been authored yet.

The current Prismic CLI requires request tracking: run `npx prismic@latest task-id`, then pass the returned `--task-id` and the same `--user-intent` on Prismic commands for that request. Authentication credentials stay outside Git.
