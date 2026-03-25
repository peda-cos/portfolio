# Integrations

**Analysis Date:** 2026-03-25

## External Services

| Service | Purpose | How Connected |
|---------|---------|---------------|
| GitHub Pages | Static site hosting | Deployed via `actions/deploy-pages@v4` in CI |
| GitHub Actions | CI/CD pipeline | `.github/workflows/deploy.yml` |

No third-party SaaS APIs, backend services, databases, or external data sources are used. This is a fully static personal portfolio/resume site.

## APIs Used

- **None.** The site has no runtime API calls. All content is statically embedded in `src/i18n/translations.ts` and compiled into HTML at build time.

## Auth Providers

- **None.** No authentication or user accounts.

## Analytics / Monitoring

- **None detected.** No analytics scripts (e.g., Google Analytics, Plausible, Fathom) are present in `src/layouts/BaseLayout.astro` or anywhere else in the codebase.

## CDN / Storage

- **Fonts:** Self-hosted WOFF2 files in `src/assets/fonts/` (bundled into the build, served from GitHub Pages):
  - `dm-sans-latin.woff2`
  - `dm-sans-latin-ext.woff2`
  - `source-serif-4-latin.woff2`
  - `source-serif-4-latin-ext.woff2`
- **Images:** `public/og-image.png` served as a static file from GitHub Pages
- **No external CDN** (no jsDelivr, unpkg, Google Fonts, Cloudflare, etc.)

## CI/CD

- **Provider:** GitHub Actions
- **Config file:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main` branch, or manual `workflow_dispatch`
- **Deploy target:** GitHub Pages (`https://peda-cos.github.io/portfolio`)
- **Node version in CI:** 22 (set via `actions/setup-node@v4`)
- **Install command:** `npm ci`
- **Build command:** `npm run build` → outputs to `dist/`
- **Artifact upload:** `actions/upload-pages-artifact@v3` uploads `dist/`
- **Deploy step:** `actions/deploy-pages@v4` (separate job, depends on `build`)
- **Concurrency:** `group: pages`, `cancel-in-progress: false`
- **Permissions:** `contents: read`, `pages: write`, `id-token: write`

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `BASE_URL` | Injected by Astro at build time; equals `/portfolio/`; used in `src/pages/index.astro`, `src/pages/en/index.astro`, `src/layouts/BaseLayout.astro`, and `src/i18n/utils.ts` to construct correct asset/page URLs | Yes (auto-set by Astro from `astro.config.mjs base`) |

- **No `.env` file detected.** No secrets, API keys, or user-supplied environment variables are required to build or run this project.
- `BASE_URL` is not a secret — it is a public Astro build variable set automatically from `base: '/portfolio'` in `astro.config.mjs`.

## Webhooks & Callbacks

- **None.** No incoming or outgoing webhooks.

## SEO / Structured Data

- **Sitemap:** Auto-generated at build time by `@astrojs/sitemap`; output to `dist/sitemap-index.xml` and `dist/sitemap-0.xml`
- **robots.txt:** Static file at `public/robots.txt` (served as-is)
- **JSON-LD:** `Person` schema injected inline in `<head>` by `src/layouts/BaseLayout.astro`
- **Open Graph + Twitter Card:** Meta tags generated in `BaseLayout.astro` using `og-image.png`
- **hreflang:** `<link rel="alternate">` tags for `pt-BR`, `en`, and `x-default` emitted in `BaseLayout.astro`
- **Canonical URL:** `<link rel="canonical">` emitted per page in `BaseLayout.astro`

## Notes

- This is a zero-backend, zero-runtime-dependency static site. The only "integration" is GitHub Pages hosting via GitHub Actions.
- Adding analytics would require inserting a `<script>` tag in `src/layouts/BaseLayout.astro`.
- Adding a contact form or any dynamic feature would require either a third-party form service (e.g., Formspree) or migrating the Astro output mode from `static` to `server`/`hybrid`.
