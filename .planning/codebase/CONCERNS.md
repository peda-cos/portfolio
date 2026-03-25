# Codebase Concerns

**Analysis Date:** 2026-03-25
**Last Updated:** 2026-03-25 (post Phase 6)

## Technical Debt — All Resolved

| Item | Status | Resolution |
|------|--------|------------|
| Duplicated page templates | ✅ Resolved | Phase 3: Extracted `PageContent.astro`, both pages now ~13 lines |
| `BASE_URL` normalization repeated in 4 places | ✅ Resolved | Phase 1+4: `getBase()` centralized in `utils.ts` |
| `latin-ext` font files loaded but unused | ✅ Resolved | Phase 2: Added `@font-face` rules with correct `unicode-range` |
| Hard-coded personal data in JSON-LD | ✅ Resolved | Phase 3: Moved to `translations.ts` with localized `jobTitle` |
| Section `id` attributes inconsistent between locales | ✅ Resolved | Phase 3: Unified to English IDs across both locales |

## Code Smells — All Resolved

- ~~Duplicated template bodies~~ → ✅ `PageContent.astro` extracted (Phase 3)
- ~~`LanguageSwitcher` duplicates label logic~~ → ✅ Accepts `label` prop from translations (Phase 3)
- ~~`getLangFromUrl` hardcodes `'en'` check~~ → ✅ Data-driven from `languages` map (Phase 1)

## Missing Infrastructure — All Resolved

- [x] Tests — **30 unit tests + 10 E2E tests** (Vitest + Playwright) — Phase 1
- [x] CI checks — **Full CI pipeline**: lint → format:check → type check → unit tests → build → E2E — Phases 1 + 6
- [x] Documentation — DEV_DOC.md comprehensive with all scripts, conventions, and architecture — Phase 6
- [x] Type coverage — TypeScript strict mode, `astro check` in CI, 0 errors
- [x] Linting/formatting — **ESLint + Prettier** with Astro/Svelte plugins, enforced in CI — Phase 6
- [ ] Error monitoring — not applicable (static site, no runtime)
- [ ] Logging — not applicable (static site, no runtime)
- [ ] Performance monitoring — not applicable (static site served via GitHub Pages)

## Security — Hardened

- [x] **CSP meta tag** added in `BaseLayout.astro` — Phase 5
- [x] **0 npm vulnerabilities** — all 9 vulnerabilities (6 moderate, 3 high) resolved — Phase 5
- [x] **Dependencies upgraded**: Astro 6.0.8, @astrojs/svelte 8.0.3, Svelte 5.55.0, Vitest 4.1.1
- Personal email in source is intentional (public resume portfolio)
- `target="_blank"` links use `rel="noopener noreferrer"` throughout

## Scalability — Improved

- [x] **Translations split into per-locale files** (`src/i18n/locales/pt-br.ts`, `src/i18n/locales/en.ts`) — Phase 6
- [x] **`getLangFromUrl` is data-driven** — adding a locale only requires `languages` map update — Phase 1
- Adding a third locale now requires changes in: locale file, `translations.ts`, page directory, `astro.config.mjs`, `BaseLayout.astro` (hreflang), and `LanguageSwitcher.svelte`. Steps documented in `DEV_DOC.md`.

## Remaining Notes

- The project has no runtime, no server, no database, and no environment secrets — the security and operational risk surface is very small.
- TypeScript remains at 5.9.3 (TS 6 released 2026-03-23; Astro ecosystem peer deps don't support it yet)
- All originally identified concerns have been resolved across Phases 1–6.
