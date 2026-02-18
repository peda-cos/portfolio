# Developer Documentation

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | >= 18.x | Runtime for Astro build toolchain |
| npm | >= 9.x (bundled with Node) | Package manager |
| Git | any recent | Version control |

No additional system dependencies, Docker, databases, or cloud credentials required.

### Verify prerequisites

```bash
node --version   # v18.x or higher
npm --version    # 9.x or higher
git --version
```

## Environment Setup from Scratch

```bash
# 1. Clone the repository
git clone git@github.com:peda-cos/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The dev server starts at `http://localhost:4321` with hot module replacement. No `.env` file, secrets, or configuration files are needed — the project has zero runtime configuration.

### Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro configuration: site URL, integrations (Svelte, Sitemap), i18n locales, build options |
| `tsconfig.json` | TypeScript strict mode, extends Astro's strict preset |
| `svelte.config.js` | Svelte preprocessor config (Vite) |
| `package.json` | Dependencies and npm scripts |

## Build and Launch

### npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Astro dev server with HMR (`http://localhost:4321`) |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run astro` | Run Astro CLI directly (e.g., `npm run astro -- --help`) |

### Build Process

```bash
npm run build
```

Astro compiles `.astro` and `.svelte` files into static HTML. Key build behaviors:

- **Inline stylesheets**: All CSS is inlined into HTML (`build.inlineStylesheets: 'always'` in `astro.config.mjs`), eliminating CSS network requests.
- **Sitemap generation**: `@astrojs/sitemap` auto-generates `dist/sitemap-index.xml` and `dist/sitemap-0.xml` based on the `site` config.
- **Static assets**: Files in `public/` are copied verbatim to `dist/` (favicon, og-image, robots.txt).
- **Svelte compilation**: The `LanguageSwitcher` Svelte component is compiled to a minimal JS bundle (Svelte has no runtime).

### Build Output

```
dist/
├── index.html              # Portuguese (default locale)
├── en/
│   └── index.html          # English locale
├── _astro/
│   └── client.svelte.*.js  # Compiled Svelte island (~small)
├── sitemap-index.xml
├── sitemap-0.xml
├── robots.txt
├── favicon.svg
└── og-image.png
```

## Container and Volume Management

This project does **not** use Docker, Docker Compose, or any containerization. It is a pure Node.js static site generator. Deployment consists of uploading the `dist/` folder to any static hosting provider.

If containerization were needed, a simple Dockerfile would be:

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

But this is not part of the current setup.

## Persistent Data

### Where content lives

All site content is stored as **source code** — there is no database, CMS, or external data source.

| Data | Location | Format |
|------|----------|--------|
| Resume text (both locales) | `src/i18n/translations.ts` | TypeScript object literal |
| Page structure / layout | `src/pages/index.astro`, `src/pages/en/index.astro` | Astro templates |
| HTML shell, SEO metadata | `src/layouts/BaseLayout.astro` | Astro layout |
| Styling | `src/styles/global.css` | CSS custom properties |
| Static assets (favicon, OG image) | `public/` | Binary files |

### How persistence works

There is no runtime persistence. The entire site is generated at build time:

1. `translations.ts` defines all text content as a typed const object.
2. Astro pages import translations at build time and render static HTML.
3. The `dist/` folder is the complete, self-contained output — it can be served by any HTTP server or CDN.

### Editing content

To update resume content:

1. Edit `src/i18n/translations.ts` — both `pt-br` and `en` sections.
2. Run `npm run dev` to preview changes locally.
3. Run `npm run build` to regenerate `dist/`.
4. Deploy `dist/` to hosting provider.

TypeScript enforces structural consistency between locales — if a field is added to one locale, the type system will flag the missing field in the other.

### Adding a new locale

1. Add the locale key to `languages` and `translations` in `src/i18n/translations.ts`.
2. Update the `Locale` type (auto-derived from `languages`).
3. Add a new page directory (e.g., `src/pages/es/index.astro`).
4. Add the locale to `astro.config.mjs` → `i18n.locales`.
5. Add `<link rel="alternate" hreflang="...">` in `BaseLayout.astro`.
6. Update `LanguageSwitcher.svelte` to handle the new locale.

## Environment Variables

None. The project reads no environment variables. The `site` URL is configured in `astro.config.mjs` and `BaseLayout.astro` — update it to match your GitHub Pages URL before deploying.
