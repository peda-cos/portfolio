# Codebase Concerns

**Analysis Date:** 2026-03-25

## Technical Debt

| Item | Severity | Location | Notes |
|------|----------|----------|-------|
| Duplicated page templates | Medium | `src/pages/index.astro`, `src/pages/en/index.astro` | Both files are 119 lines of near-identical Astro markup. Only 8 lines differ (imports, lang const, `id` attributes, `alternatePath`). A shared component or single parameterized layout would eliminate this. Any structural change must be made twice. |
| `BASE_URL` normalization repeated in 4 places | Low | `src/i18n/utils.ts:3`, `src/layouts/BaseLayout.astro:17`, `src/pages/index.astro:10`, `src/pages/en/index.astro:10` | `import.meta.env.BASE_URL.replace(/\/?$/, '/')` is copy-pasted. A single exported `getBase()` helper in `src/i18n/utils.ts` would centralize the logic. |
| `latin-ext` font files loaded but unused | Low | `src/assets/fonts/dm-sans-latin-ext.woff2` (1.4 KB), `src/assets/fonts/source-serif-4-latin-ext.woff2` (3 KB) | The files exist in `src/assets/fonts/` but are never referenced in `src/styles/global.css` or any `<link rel="preload">`. Dead weight in the repository. If extended Latin characters (e.g. diacritics beyond the defined `unicode-range`) are needed, the CSS must also be updated. |
| Hard-coded personal data in JSON-LD | Low | `src/layouts/BaseLayout.astro:22-38` | `name`, `email`, `jobTitle`, `addressLocality`, `sameAs` are hard-coded strings in the layout rather than sourced from `translations.ts`. If contact details change, they must be updated in two places. |
| Section `id` attributes are in Portuguese on the default locale | Low | `src/pages/index.astro:36,42,58,79` | `id="conteudo-principal"`, `id="resumo"`, `id="habilidades"`, `id="experiencia"`, `id="formacao"` are Portuguese identifiers mixed into the template structure. The skip-link on the PT page targets `#conteudo-principal` while the EN page targets `#main-content`, creating an inconsistent pattern. |

## Code Smells

- **Duplicated template bodies**: `src/pages/index.astro` and `src/pages/en/index.astro` share 111 of 119 lines identically. This violates DRY at the highest level of the page hierarchy. Astro supports dynamic routing (`[lang]/index.astro`) or a shared content component that both pages render.
- **`LanguageSwitcher` duplicates label logic from translations**: `src/components/LanguageSwitcher.svelte:9-12` defines its own `labels` map (`'pt-br' → 'English'`, `en → 'Português'`), which mirrors `translations[lang].nav.switchLang`. If a language is added or a label changes, both locations must be updated.
- **`getLangFromUrl` hardcodes `'en'` check**: `src/i18n/utils.ts:11` does `if (lang === 'en') return 'en'`. Adding a third locale (e.g. `'es'`) requires editing this function — it does not auto-derive from the `languages` map already defined in `translations.ts`.

## Missing Infrastructure

- [x] Tests (unit/integration/e2e) — **none exist**; no test runner configured (`jest`, `vitest`, `playwright`, etc.). `utils.ts` functions (`getLangFromUrl`, `getAlternateUrl`, `getHtmlLang`) are pure and trivially testable. No `*.test.*` or `*.spec.*` files in project.
- [x] CI checks — **only a deploy job exists** in `.github/workflows/deploy.yml`. There is no separate lint, type-check, or build-verification step that runs on pull requests or non-main branches. A failed build on `main` triggers a broken deployment.
- [ ] Error monitoring — not applicable (static site, no runtime).
- [ ] Logging — not applicable (static site, no runtime).
- [x] Documentation — README and DEV_DOC are present and thorough.
- [x] Type coverage — TypeScript strict mode is enabled via `astro/tsconfigs/strict`. No `@ts-ignore` or `any` suppressions detected.
- [ ] Performance monitoring — not applicable (static site served via GitHub Pages).
- [x] Linting/formatting — **no ESLint, Prettier, or Biome config** exists. Code style is enforced only by convention, not tooling. The CI pipeline does not catch style regressions.

## Security Concerns

- **Personal email in source code**: `pedrocsmonteiro@gmail.com` appears in `src/i18n/translations.ts:28,208` and hard-coded in `src/layouts/BaseLayout.astro:26`. This is intentional (it is a public portfolio resume), but it should be noted for spam/scraper awareness. No secrets or credentials are present.
- **`target="_blank"` links use `rel="noopener noreferrer"`**: Correctly implemented throughout both page templates and the footer. No `rel` omissions detected.
- **No CSP headers**: GitHub Pages does not support custom response headers. No `Content-Security-Policy` is injected. Not a blocking issue for a static resume, but notable if the project ever moves to a server-capable host.

## Performance Concerns

- **`font-display: optional` prevents FOUT but may cause invisible text on slow connections**: Both `@font-face` declarations in `src/styles/global.css:14,24` use `font-display: optional`. Combined with `<link rel="preload">` in `BaseLayout.astro:72-73`, this is a reasonable trade-off — but if the preloaded fonts miss the first render, the browser silently falls back to system fonts permanently for that page load.
- **`latin-ext` font variants shipped but not served**: `dm-sans-latin-ext.woff2` and `source-serif-4-latin-ext.woff2` are in the repo but no `@font-face` rule covers the extended unicode range. Characters outside the declared `unicode-range` silently fall back to system fonts without error.
- **CSS is fully inlined** (`build.inlineStylesheets: 'always'` in `astro.config.mjs:11`): At 623 lines the stylesheet is non-trivial. Inlining avoids a render-blocking request and is the right call at this scale, but repeated visits cannot benefit from CSS cache — the full inline is re-sent on every page load.

## Scalability Concerns

- **`translations.ts` monolith will grow with every new locale or content section**: At 369 lines for 2 locales, adding a third locale will push it past ~550 lines. The file works fine at current scale but could be split per-locale (e.g. `src/i18n/locales/pt-br.ts`, `src/i18n/locales/en.ts`) if the content grows significantly.
- **Adding a third locale requires changes in 6 separate places**: `translations.ts`, `utils.ts` (`getLangFromUrl` hardcodes `'en'`), a new page directory, `astro.config.mjs`, `BaseLayout.astro` (hreflang links), and `LanguageSwitcher.svelte` (labels map). The steps are documented in `DEV_DOC.md:139-146` but the code is not resilient to new locales.

## Dependency Risks

| Dependency | Risk | Reason |
|------------|------|--------|
| `astro` `^5.17.1` (installed `5.17.2`) | Medium | Astro 6.0.8 is available — a major version behind. Breaking changes in Astro major versions have historically been significant. Current minor version (`5.18.1`) is also available and unpinned. |
| `@astrojs/svelte` `^7.2.5` | Low-Medium | Version 8.0.3 is available (major bump). Likely tracks a Svelte or Astro major. Unpinned with `^` so minor updates are auto-applied. |
| `typescript` `^5.9.3` | Low | TypeScript 6.0.2 is available (major version). TS major versions can include breaking type-checker changes. Current `^5.9.3` will not auto-upgrade to 6.x, but the gap is notable. |
| `@astrojs/check` `^0.9.6` | Low | Minor patch available (`0.9.8`). No breaking risk, just stale. |
| `@astrojs/sitemap` `^3.7.0` | Low | Patch available (`3.7.1`). No breaking risk. |

## Opportunities for Improvement

1. **Extract a shared page body component** (`src/components/PageBody.astro` or similar) to eliminate the duplication between `src/pages/index.astro` and `src/pages/en/index.astro`. Both pages would render the same component, passing only `lang` as a prop. This removes the double-maintenance burden for any future template change.

2. **Centralize `BASE_URL` normalization** — export a `getBase()` function from `src/i18n/utils.ts` and consume it in `BaseLayout.astro` and both page files instead of repeating `import.meta.env.BASE_URL.replace(/\/?$/, '/')`.

3. **Source JSON-LD personal data from `translations.ts`** — move `name`, `email`, `jobTitle`, and social URLs into the translation object so `BaseLayout.astro` has a single source of truth for all content.

4. **Add a CI lint/type-check job** to `.github/workflows/deploy.yml` (or a separate `ci.yml`) that runs `npx astro check` on every push and pull request, not just `main`. This surfaces TypeScript errors before they reach the deploy step.

5. **Add a linter and formatter** (e.g. Prettier for CSS/Astro/Svelte formatting and ESLint with `eslint-plugin-astro`) and wire them into CI. Currently no automated style enforcement exists.

6. **Add unit tests for `src/i18n/utils.ts`** — `getLangFromUrl`, `getAlternateUrl`, and `getHtmlLang` are pure functions with clear inputs and outputs. A Vitest suite covering edge cases (missing base, trailing slash variants) would prevent regressions if the routing logic changes.

7. **Make locale routing data-driven in `getLangFromUrl`** — replace the hard-coded `if (lang === 'en') return 'en'` check with a loop over `Object.keys(languages)` so that adding a locale to `translations.ts` automatically extends URL detection without a separate code change.

8. **Remove or wire up `latin-ext` font files** — either delete `dm-sans-latin-ext.woff2` and `source-serif-4-latin-ext.woff2` from `src/assets/fonts/` if they are not needed, or add corresponding `@font-face` rules in `global.css` to actually serve them to users with extended Latin characters.

## Notes

- The project has no runtime, no server, no database, and no environment secrets — the security and operational risk surface is very small.
- All identified concerns are low-to-medium severity. There are no critical bugs, security vulnerabilities, or broken features.
- The CI pipeline only triggers on pushes to `main` and manual dispatch — there is no branch protection or PR gate check. A broken build can reach `main` undetected until the deploy fails.
- The `dist/` directory is committed to the repository alongside source. This is not strictly necessary for GitHub Pages (Actions handles deployment), but it does not cause functional issues.
