# Workout PWA

A progressive web app for tracking training plans, built with TypeScript and esbuild.

## Setup

```bash
npm install
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with watch mode on port 3000 |
| `npm run build` | Build to `dist/` |
| `npm run typecheck` | Type-check without emitting |

## Structure

```
src/
  components/   UI components
  data/         Static training data
  storage/      Persistence layer
  utils/        Shared utilities
  main.ts       Entry point
  types.ts      Shared types
```