# aryanbhobe.github.io

Personal portfolio site, built with Next.js (App Router), TypeScript, and Tailwind CSS. Dark theme by default.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Site content lives in `data/` as typed TypeScript modules (`profile.ts`, `experience.ts`, `education.ts`, `skills.ts`, `projects.ts`, `documents.ts`) — edit those to update the site rather than the components.

Projects flagged with `needsContent: true` in `data/projects.ts` still have `TODO:`-prefixed placeholder descriptions and/or dead links (`status: "todo"`) that need real content.

`public/documents/AryanBhobe_CV.pdf` and `public/documents/AryanBhobe_Transcript.pdf` are placeholder files — replace them with the real documents (keep the same filenames, or update `data/documents.ts`).

## Deployment

Deployed on [Vercel](https://vercel.com). Next.js projects are auto-detected — no extra configuration needed beyond connecting the repo.

```bash
npm run build   # production build
npm run lint    # eslint
npm run typecheck
```
