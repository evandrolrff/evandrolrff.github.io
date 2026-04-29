# Evandro Fensterseifer — Portfolio

Personal portfolio built with **Vue 3 + TypeScript + Vite**.  
Hosted on GitHub Pages (free tier).

## Stack

- **Vue 3** — Composition API
- **TypeScript** — strict mode
- **Vite** — build tool
- **Google Fonts** — Cormorant Garamond · Jost · DM Mono
- **CSS Variables** — zero CSS frameworks

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build
```

## Deploy to GitHub Pages

### Automatic (recommended)

1. Push this repository to GitHub as `<your-username>.github.io`
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`

### Manual

```bash
npm run build
# Then push the /dist folder to the gh-pages branch, or
# use a tool like gh-pages: npx gh-pages -d dist
```

## Customise

All content lives in **`src/data.ts`** — edit that file to update
bio, education, projects, skills, and social links without touching any component.
