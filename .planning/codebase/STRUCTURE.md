# Folder Structure

**Analysis Date:** 2026-03-25

## Top-Level Layout

```
portfolio/
├── src/                   # All source code
├── public/                # Static assets served at root (favicon, OG image, robots.txt)
├── dist/                  # Build output (generated, not committed)
├── .astro/                # Astro-generated type declarations (generated, not committed)
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions: build → deploy to GitHub Pages
├── .planning/
│   └── codebase/          # Architecture/planning docs (this file lives here)
├── astro.config.mjs       # Astro configuration (integrations, i18n, build options)
├── svelte.config.js       # Svelte preprocessor config (vitePreprocess)
├── tsconfig.json          # TypeScript config (extends astro/tsconfigs/strict)
├── package.json           # Dependencies and npm scripts
├── package-lock.json      # Lockfile
├── DEV_DOC.md             # Developer documentation
├── USER_DOC.md            # User documentation
└── README.md              # Project readme
```

## Source Directory Breakdown

```
src/
├── assets/
│   └── fonts/
│       ├── dm-sans-latin.woff2              # DM Sans latin subset (headings)
│       ├── dm-sans-latin-ext.woff2          # DM Sans extended latin
│       ├── source-serif-4-latin.woff2       # Source Serif 4 latin subset (body)
│       └── source-serif-4-latin-ext.woff2   # Source Serif 4 extended latin
├── components/
│   └── LanguageSwitcher.svelte             # Only interactive component; locale toggle link
├── i18n/
│   ├── translations.ts                     # All copy in both locales (pt-br + en), typed as const
│   └── utils.ts                            # i18n helpers (useTranslations, getLangFromUrl, etc.)
├── layouts/
│   └── BaseLayout.astro                    # HTML shell, <head> meta, fonts, JSON-LD
├── pages/
│   ├── index.astro                         # Root route → Portuguese resume (/portfolio/)
│   └── en/
│       └── index.astro                     # English route (/portfolio/en/)
└── styles/
    └── global.css                          # Single global stylesheet (CSS custom properties, all components)
```

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Framework config: site URL, base path, Svelte/sitemap integrations, CSS inlining, i18n routing |
| `src/i18n/translations.ts` | Single source of truth for all page content in both locales |
| `src/i18n/utils.ts` | `useTranslations(lang)`, `getLangFromUrl(url)`, `getHtmlLang(locale)` helpers |
| `src/layouts/BaseLayout.astro` | Shared HTML skeleton, SEO meta, Open Graph, JSON-LD, font preloads, hreflang |
| `src/pages/index.astro` | Portuguese resume page (default locale, no URL prefix) |
| `src/pages/en/index.astro` | English resume page (`/en/` prefix) |
| `src/components/LanguageSwitcher.svelte` | Svelte 5 component, globe icon + locale label, plain `<a>` navigation |
| `src/styles/global.css` | All styles: reset, CSS variables, typography, layout, sections, responsive, print |
| `.github/workflows/deploy.yml` | CI/CD: push to `main` → `npm ci` → `astro build` → deploy `dist/` to GitHub Pages |
| `public/favicon.svg` | SVG favicon served at `/portfolio/favicon.svg` |
| `public/og-image.png` | Open Graph social card image |
| `public/robots.txt` | Search engine crawl rules |

## Naming Conventions

- **Files:** `PascalCase` for Astro/Svelte components (`BaseLayout.astro`, `LanguageSwitcher.svelte`); `camelCase` for utility modules (`translations.ts`, `utils.ts`, `global.css`).
- **Components:** PascalCase filenames matching the component's descriptive role.
- **Routes:** Filesystem-based. Default locale at `src/pages/index.astro` (no prefix); additional locales in subdirectories matching the locale code (e.g., `src/pages/en/`).
- **CSS classes:** kebab-case BEM-like names (`.site-header`, `.entry-header`, `.skills-grid`, `.skill-tag`, `.language-switcher`).
- **CSS custom properties:** `--color-*`, `--font-*`, `--space-*`, `--sage-*` prefixes defined in `:root` within `global.css`.
- **i18n keys:** camelCase nested object keys (`header.name`, `skills.categories`, `a11y.skipToContent`).

## Co-location Patterns

- **Styles are global, not co-located:** All CSS lives in `src/styles/global.css`. There are no scoped `<style>` blocks in `.astro` files or CSS modules. The single Svelte component also lacks a `<style>` block — it relies on classes styled in `global.css`.
- **Content is centralised:** Page copy is not embedded in page files; it is imported from `src/i18n/translations.ts` via `useTranslations()`.
- **Fonts are in `src/assets/`:** Font files live alongside source code (not in `public/`) so Astro can fingerprint and inline references via `import.meta.env` during the build.
- **Layouts are separate from pages:** `BaseLayout.astro` lives in `src/layouts/` and is imported by both page files. Page-level markup (sections, articles) is inlined within each `src/pages/**/*.astro` file.

## Where to Add New Code

- **New locale:** Add a key to `src/i18n/translations.ts`, add the locale to `astro.config.mjs`, and create `src/pages/<locale-code>/index.astro` mirroring the existing page structure.
- **New page section:** Add the translated strings under each locale in `src/i18n/translations.ts`, add the corresponding markup in both `src/pages/index.astro` and `src/pages/en/index.astro`, and add CSS to `src/styles/global.css`.
- **New interactive component:** Create a `.svelte` file in `src/components/`. Add styles to `global.css` (or use a scoped `<style>` block inside the Svelte file).
- **New static asset (font, image):** Place fonts in `src/assets/fonts/` (for Astro build fingerprinting); place images and other public files in `public/`.
- **New layout variant:** Create a new `.astro` file in `src/layouts/`.

## Special Directories

| Directory | Purpose | Generated | Committed |
|-----------|---------|-----------|-----------|
| `dist/` | Static build output served by GitHub Pages | Yes | No |
| `.astro/` | Astro-generated TypeScript type declarations | Yes | No |
| `.planning/` | Architecture and planning documents for development guidance | No | Yes |
| `public/` | Files copied verbatim to `dist/` root at build time | No | Yes |
| `node_modules/` | npm packages | Yes | No |

---

*Structure analysis: 2026-03-25*
