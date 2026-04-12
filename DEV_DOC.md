# Developer Documentation

## Prerequisites

| Tool    | Version                     | Purpose                                                       |
| ------- | --------------------------- | ------------------------------------------------------------- |
| Node.js | >= 22.x                     | Runtime for Astro build toolchain (Astro 6 requires Node 22+) |
| npm     | >= 10.x (bundled with Node) | Package manager                                               |
| Git     | any recent                  | Version control                                               |

No additional system dependencies, Docker, databases, or cloud credentials required.

### Verify prerequisites

```bash
node --version   # v22.x or higher
npm --version    # 10.x or higher
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

| File                   | Purpose                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `astro.config.mjs`     | Astro configuration: site URL, integrations (Svelte, Sitemap), i18n locales, build options |
| `tsconfig.json`        | TypeScript strict mode, extends Astro's strict preset                                      |
| `svelte.config.js`     | Svelte preprocessor config (Vite)                                                          |
| `eslint.config.js`     | ESLint flat config with TypeScript + Astro rules                                           |
| `.prettierrc`          | Prettier config (single quotes, semicolons, trailing commas, 100 print width)              |
| `vitest.config.ts`     | Vitest unit test configuration                                                             |
| `playwright.config.ts` | Playwright E2E test configuration                                                          |
| `package.json`         | Dependencies and npm scripts                                                               |

## Build and Launch

### npm Scripts

| Command                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev`          | Start Astro dev server with HMR (`http://localhost:4321`) |
| `npm run build`        | Build static site to `dist/`                              |
| `npm run preview`      | Serve production build locally                            |
| `npm run check`        | Run Astro type checking (`astro check`)                   |
| `npm test`             | Run Vitest unit tests (30 tests)                          |
| `npm run test:watch`   | Run Vitest in watch mode                                  |
| `npm run test:e2e`     | Run Playwright E2E smoke tests (10 tests)                 |
| `npm run lint`         | Run ESLint on `src/`                                      |
| `npm run format`       | Format all source files with Prettier                     |
| `npm run format:check` | Check formatting without writing changes                  |
| `npm run astro`        | Run Astro CLI directly (e.g., `npm run astro -- --help`)  |

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

## Testing

### Unit Tests (Vitest)

```bash
npm test                # Run all 30 unit tests
npm run test:watch      # Watch mode for development
```

Test files live alongside source files:

- `src/i18n/utils.test.ts` — 16 tests for all exported utility functions
- `src/i18n/translations.test.ts` — 14 structural parity tests (locale key consistency)

### E2E Tests (Playwright)

```bash
npm run test:e2e        # Run all 10 E2E smoke tests
```

E2E tests require a build first (`npm run build`). They test against the preview server at `http://localhost:4321/portfolio/`.

Test file: `e2e/smoke.spec.ts` — tests both language routes, navigation, skip-links, HTTP responses.

### Full Verification Gate

```bash
npm run lint && npm run format:check && npm run check && npm test && npm run build && npm run test:e2e
```

## Code Conventions

### Linting (ESLint)

- **Config**: `eslint.config.js` (ESLint flat config)
- **Plugins**: `eslint-plugin-astro`, `@typescript-eslint`
- **Rules**: TypeScript recommended + Astro recommended; unused vars with `_` prefix are allowed
- Run: `npm run lint`

### Formatting (Prettier)

- **Config**: `.prettierrc`
- **Style**: Single quotes, semicolons, trailing commas, 100 character print width, 2-space indent
- **Plugins**: `prettier-plugin-astro`, `prettier-plugin-svelte`
- Run: `npm run format` (write) or `npm run format:check` (verify)

### Commit Messages

Conventional Commits in Portuguese:

- `feat(scope):` — new feature
- `fix(scope):` — bug fix
- `refactor(scope):` — code restructuring without behavior change
- `chore(scope):` — tooling, dependencies, configuration
- `docs(scope):` — documentation only
- `test(scope):` — adding or updating tests
- `ci(scope):` — CI/CD pipeline changes
- `perf(scope):` — performance optimization
- `security:` — security hardening

### i18n Architecture

Translations are split into per-locale files for maintainability:

```
src/i18n/
├── locales/
│   ├── pt-br.ts        # Portuguese translations
│   └── en.ts           # English translations
├── translations.ts     # Re-exports locales, defines Locale type
├── utils.ts            # Helper functions (getBase, getLangFromUrl, etc.)
├── utils.test.ts       # Unit tests
└── translations.test.ts # Structural parity tests
```

All exported functions in `utils.ts` have JSDoc documentation with `@param`, `@returns`, and `@example`.

## CI/CD Pipeline

### CI Workflow (`.github/workflows/ci.yml`)

Runs on push to `main` and pull requests:

1. **Lint** — `npm run lint`
2. **Format check** — `npm run format:check`
3. **Type check** — `npm run check` (astro check)
4. **Unit tests** — `npm test`
5. **Build** — `npm run build`
6. **E2E tests** — `npm run test:e2e`

### Deploy Workflow (`.github/workflows/deploy.yml`)

Triggers on successful CI workflow completion via `workflow_run`. Deploys `dist/` to GitHub Pages.

## Container and Volume Management

This project does **not** use Docker, Docker Compose, or any containerization. It is a pure Node.js static site generator. Deployment consists of uploading the `dist/` folder to any static hosting provider.

## Persistent Data

### Where content lives

All site content is stored as **source code** — there is no database, CMS, or external data source.

| Data                              | Location                                              | Format                          |
| --------------------------------- | ----------------------------------------------------- | ------------------------------- |
| Resume text (both locales)        | `src/i18n/locales/pt-br.ts`, `src/i18n/locales/en.ts` | TypeScript object literal       |
| Page structure / layout           | `src/components/PageContent.astro`                    | Astro template                  |
| Page wrappers                     | `src/pages/index.astro`, `src/pages/en/index.astro`   | Astro thin wrappers (~13 lines) |
| HTML shell, SEO metadata          | `src/layouts/BaseLayout.astro`                        | Astro layout                    |
| Styling                           | `src/styles/global.css`                               | CSS custom properties           |
| Static assets (favicon, OG image) | `public/`                                             | Binary files                    |

### How persistence works

There is no runtime persistence. The entire site is generated at build time:

1. Per-locale files in `src/i18n/locales/` define all text content as typed const objects.
2. `translations.ts` re-exports them and defines the `Locale` type.
3. Astro pages import translations at build time and render static HTML.
4. The `dist/` folder is the complete, self-contained output — it can be served by any HTTP server or CDN.

### Editing content

To update resume content:

1. Edit the relevant locale file in `src/i18n/locales/` (e.g., `pt-br.ts` and/or `en.ts`).
2. Run `npm run dev` to preview changes locally.
3. Run `npm run build` to regenerate `dist/`.
4. Deploy `dist/` to hosting provider.

TypeScript enforces structural consistency between locales — if a field is added to one locale, the type system will flag the missing field in the other.

### Adding a new locale

1. Create a new locale file in `src/i18n/locales/` (e.g., `es.ts`).
2. Add the locale to `languages` and `translations` in `src/i18n/translations.ts`.
3. The `Locale` type is auto-derived from `languages`.
4. Add a new page directory (e.g., `src/pages/es/index.astro`).
5. Add the locale to `astro.config.mjs` → `i18n.locales`.
6. Add `<link rel="alternate" hreflang="...">` in `BaseLayout.astro`.
7. Update `LanguageSwitcher.svelte` to handle the new locale.
8. Add structural parity tests in `translations.test.ts`.

## Environment Variables

None. The project reads no environment variables. The `site` URL is configured in `astro.config.mjs` and `BaseLayout.astro` — update it to match your GitHub Pages URL before deploying.

## Security

### Content Security Policy

A CSP meta tag is set in `BaseLayout.astro`:

```
default-src 'none'; style-src 'unsafe-inline'; font-src 'self' data:;
img-src 'self' data:; script-src 'self' 'unsafe-inline'; connect-src 'self'
```

- `unsafe-inline` for `style-src`: Required because Astro inlines all CSS into HTML.
- `unsafe-inline` for `script-src`: Required for the JSON-LD `<script>` tag using Astro's `is:inline` directive.
- `data:` for `font-src`: Required because Vite inlines small latin-ext woff2 files as base64 data URIs.

### Dependency Auditing

Run `npm audit` periodically. The project currently has **0 vulnerabilities**.

## Performance Notes

### Build Output Sizes

| Asset                        | Size                   |
| ---------------------------- | ---------------------- |
| `dist/index.html` (PT)       | ~27.9 KB               |
| `dist/en/index.html` (EN)    | ~27.5 KB               |
| Inline CSS (per page)        | ~14.9 KB               |
| `client.svelte.*.js`         | ~22.4 KB (9.1 KB gzip) |
| `dm-sans-latin.woff2`        | ~39.7 KB               |
| `source-serif-4-latin.woff2` | ~78.5 KB               |
| Total `dist/`                | ~268 KB                |

### Font Loading Strategy

The site uses 4 self-hosted font files (2 families × 2 subsets each):

| Font                       | Subset                                         | Loaded via      |
| -------------------------- | ---------------------------------------------- | --------------- |
| DM Sans — latin            | `@font-face` + `<link rel="preload">`          | Network request |
| DM Sans — latin-ext        | `@font-face` (Vite-inlined as base64 data URI) | Already in CSS  |
| Source Serif 4 — latin     | `@font-face` + `<link rel="preload">`          | Network request |
| Source Serif 4 — latin-ext | `@font-face` (Vite-inlined as base64 data URI) | Already in CSS  |

- **`font-display: optional`** — prevents layout shift (FOUT/FOIT). With preload hints, the latin subsets arrive fast enough to render with custom fonts on most connections. If they don't arrive in time, the browser uses the system fallback and does not swap mid-render.
- **`unicode-range` subsetting** — latin and latin-ext `@font-face` rules have non-overlapping ranges. The browser only downloads the latin-ext subset if the page contains characters outside the basic Latin range (e.g., accented Portuguese characters like ã, ç, é). The small overlap on combining marks (U+0304, U+0308, U+0329) is standard practice from Google Fonts.
- **Latin-ext files are Vite-inlined** — because the woff2 files are small, Vite inlines them as base64 data URIs in the CSS during build. This means they're part of the inline stylesheet and require no additional network requests.
- **Only latin subsets are preloaded** — the latin-ext data URIs are already embedded in CSS, so preloading them would be redundant.

### CSS

All CSS is inlined into HTML (`build.inlineStylesheets: 'always'`), eliminating render-blocking CSS requests. Zero unused class selectors exist in `global.css` — all 30 class selectors have matching template references.
