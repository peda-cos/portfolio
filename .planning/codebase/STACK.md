# Tech Stack

**Analysis Date:** 2026-03-25

## Runtime & Language

- **Language:** TypeScript 5.9.x (strict mode via `astro/tsconfigs/strict`) — all source files in `src/`
- **Runtime:** Node.js 22 (pinned in CI via `actions/setup-node@v4` with `node-version: 22`)
- **Module system:** ESM (`"type": "module"` in `package.json`)
- **Version constraints:** No `.nvmrc` or `.node-version` file; version enforced only in CI

## Frameworks & Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| `astro` | ^5.17.1 | Core static-site framework; page routing, build pipeline, SSG |
| `svelte` | ^5.51.3 | Interactive component framework; used for `LanguageSwitcher.svelte` |
| `@astrojs/svelte` | ^7.2.5 | Astro integration that enables `.svelte` components inside `.astro` files |
| `@astrojs/sitemap` | ^3.7.0 | Astro integration that auto-generates `sitemap.xml` at build time |
| `@astrojs/check` | ^0.9.6 | Dev-only: TypeScript/Astro type-checking tool (run via `astro check`) |
| `typescript` | ^5.9.3 | Dev-only: TypeScript compiler |

## Build & Tooling

- **Build tool:** Astro CLI (`astro build`) — wraps Vite internally
- **Bundler:** Vite (bundled with Astro; no separate `vite.config.*` present)
- **Dev server:** `astro dev` (`npm run dev`)
- **Preview server:** `astro preview` (`npm run preview`)
- **Package manager:** npm — `package-lock.json` present; CI uses `npm ci`
- **Svelte preprocessor:** `vitePreprocess()` from `@astrojs/svelte`, configured in `svelte.config.js`
- **TypeScript config:** `tsconfig.json` extends `astro/tsconfigs/strict`; includes `.astro/types.d.ts`

## Build Configuration

- **Config file:** `astro.config.mjs`
- **Site URL:** `https://peda-cos.github.io`
- **Base path:** `/portfolio` (all URLs are relative to this base)
- **Stylesheet inlining:** `build.inlineStylesheets: 'always'` — all CSS is inlined into `<style>` tags, no separate CSS file emitted
- **Output directory:** `dist/` (Astro default; uploaded as GitHub Pages artifact)

## Styling

- **Approach:** Vanilla CSS with custom properties (CSS variables); single global stylesheet
- **File:** `src/styles/global.css` (623 lines)
- **Design tokens:** CSS custom properties on `:root` — color palette (`--sage-*`), semantic tokens (`--color-bg`, `--color-accent`, etc.), typography vars, 8px-base spacing scale
- **Fonts:** Self-hosted WOFF2 files in `src/assets/fonts/` — DM Sans (headings, weight 400–700) and Source Serif 4 (body, weight 300–600); subsetted to latin and latin-ext
- **No CSS framework, no Tailwind, no CSS modules, no CSS-in-JS**
- **Responsive:** Single breakpoint at `max-width: 640px`
- **Print styles:** Dedicated `@media print` block in `global.css`
- **Accessibility:** `.sr-only`, `.skip-link`, `:focus-visible` and `::selection` styles defined globally

## State Management

- **Approach:** No global state management. All data is static, co-located in `src/i18n/translations.ts` as a typed `const` object
- **Reactivity (Svelte 5):** The single interactive component (`LanguageSwitcher.svelte`) uses Svelte 5 rune syntax — `$props()` and `$derived()` — for local component state only
- **No Redux, Zustand, Nanostores, or any state library**

## Internationalization (i18n)

- **Approach:** Astro built-in i18n with custom translation files
- **Locales:** `pt-br` (default, no URL prefix) and `en` (`/en/` prefix)
- **Config:** Defined in `astro.config.mjs` under `i18n.locales`, `i18n.defaultLocale`, and `i18n.routing.prefixDefaultLocale: false`
- **Translation data:** `src/i18n/translations.ts` — typed `as const` object keyed by locale
- **Utilities:** `src/i18n/utils.ts` — `getLangFromUrl()`, `useTranslations()`, `getAlternateUrl()`, `getHtmlLang()`

## Notable Patterns

- **Static site generation (SSG):** No server-side rendering or dynamic routes; the entire site is pre-built to `dist/`
- **Svelte used minimally:** Only `src/components/LanguageSwitcher.svelte` uses Svelte; all other components are plain `.astro` files
- **Svelte 5 rune syntax:** `$props()` and `$derived()` (not the Svelte 4 `export let` / `$:` style)
- **No JavaScript hydration on page load:** The Svelte component is a plain anchor tag with no client-side JS directives (no `client:load`, `client:visible`, etc.); it renders as static HTML
- **Fonts preloaded:** `BaseLayout.astro` emits `<link rel="preload">` tags for both WOFF2 font files; `font-display: optional` in CSS
- **SEO baked in:** `BaseLayout.astro` outputs Open Graph tags, Twitter Card tags, canonical URL, hreflang alternates, and a JSON-LD `Person` schema
- **Inline styles:** `inlineStylesheets: 'always'` eliminates render-blocking CSS requests
