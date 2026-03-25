# Requirements

**Project:** Portfolio Engineering Excellence
**Created:** 2026-03-25
**Source:** User-defined 6-phase engineering improvement plan + codebase map analysis

---

## Phase 1 — Test Coverage & Testability

### R1.1 — Test infrastructure
- Install Vitest as dev dependency; configure `vitest.config.ts` integrated with Vite/Astro
- Install Playwright (`@playwright/test`) for E2E; configure `playwright.config.ts` targeting `localhost:4321`
- Add `npm test` script (Vitest unit) and `npm run test:e2e` script (Playwright) to `package.json`
- Add `npm run check` script that runs `npx astro check`

### R1.2 — Testability refactoring (before writing tests)
- Extract `getBase()` helper from repeated `import.meta.env.BASE_URL.replace(/\/?$/, '/')` in `src/i18n/utils.ts` — keep this commit separate from test writing
- Ensure all pure functions in `src/i18n/utils.ts` can be called without Astro runtime context (they already are pure; confirm no implicit globals)
- Refactor `getLangFromUrl` to derive locale detection from the `languages` map instead of hardcoded `'en'` check — this is a testability + correctness improvement; keep separate from test writing

### R1.3 — Unit tests (`src/i18n/utils.ts`)
- `getLangFromUrl`: test with `/portfolio/` (default locale), `/portfolio/en/`, `/portfolio/en/foo`, unknown paths, trailing slash variants
- `getAlternateUrl`: test pt-br → en path conversion and en → pt-br path conversion with base path
- `getHtmlLang`: test `'pt-br'` → `'pt-BR'`, `'en'` → `'en'`
- `getBase`: test normalization with and without trailing slash
- `useTranslations`: test that returned object matches expected locale key shape

### R1.4 — Unit tests (`src/i18n/translations.ts` structure)
- Assert that both locales (`pt-br`, `en`) have identical top-level keys
- Assert that nested keys (`nav`, `header`, `skills`, `experience`, `education`, `footer`, `a11y`) exist in both locales
- Assert no locale has `undefined` values for required string fields

### R1.5 — E2E smoke tests (Playwright)
- PT page (`/portfolio/`): renders, `<html lang="pt-BR">`, h1 present, skip link target `#main-content` works
- EN page (`/portfolio/en/`): renders, `<html lang="en">`, h1 present
- Language switcher on PT page navigates to `/portfolio/en/`
- Language switcher on EN page navigates to `/portfolio/`
- Both pages return HTTP 200 from the preview server

### R1.6 — CI test gate
- Add a `ci.yml` workflow (or update `deploy.yml`) with a `lint-and-test` job that runs on every push and pull request
- Job steps: `npm ci` → `npx astro check` → `npm test`
- E2E tests run in CI against `astro build` + `astro preview` output
- Deploy job depends on `lint-and-test` passing

### R1.7 — Test documentation
- Add `TESTING.md` update (or inline comments in test files) documenting:
  - What each test suite covers
  - How to run tests locally
  - Patterns/conventions for future test additions

---

## Phase 2 — Dead Code Removal

### R2.1 — Unused font files
- Confirm `dm-sans-latin-ext.woff2` and `source-serif-4-latin-ext.woff2` have no `@font-face` rule in `global.css` and no `<link rel="preload">` in `BaseLayout.astro`
- **Option A (remove):** Delete both files if extended Latin support is not required
- **Option B (wire up):** Add `@font-face` rules with correct `unicode-range` for extended Latin characters and preload links
- Decision: wire up (Option B) — the files exist for a reason; remove is destructive; unicode-range support is correct behavior
- After wiring: verify build succeeds and font files are included in `dist/_astro/`

### R2.2 — `dist/` from git tracking
- Add `dist/` to `.gitignore`
- Run `git rm -r --cached dist/` to stop tracking the committed build output
- Verify GitHub Actions deploy still works (it uploads the artifact directly, does not rely on committed `dist/`)

### R2.3 — Unused imports audit
- Scan all `.astro`, `.svelte`, and `.ts` files for unused imports
- Remove any found (expect: none based on codebase size, but confirm)

### R2.4 — Dead `@ts-check` in config
- Verify `@ts-check` in `astro.config.mjs` is intentional (it is — enables type checking in JS files); document this in a comment if not already obvious

---

## Phase 3 — Bug & Latent Issue Fixes

### R3.1 — Eliminate page template duplication
- Create `src/components/PageContent.astro` accepting `lang: Locale` prop
- Move all content sections (header, summary, skills, experience, education) from both page files into `PageContent.astro`
- Both `src/pages/index.astro` and `src/pages/en/index.astro` become thin wrappers: set `lang`, compute `alternatePath`, render `<BaseLayout>` + `<PageContent lang={lang} />`
- Verify rendered HTML output is byte-for-byte identical to pre-refactor output (compare `dist/index.html` and `dist/en/index.html`)

### R3.2 — Consistent skip-link section IDs
- Unify skip-link anchor IDs across both locales: use `id="main-content"` in both pages (PT currently uses Portuguese IDs)
- Update `a11y.skipToContent` target in both locales if needed
- Update CSS if any styles target the old IDs

### R3.3 — Source JSON-LD personal data from `translations.ts`
- Add a `meta.jsonLd` (or similar) sub-key to `translations.ts` containing `name`, `email`, `jobTitle`, `addressLocality`, `sameAs` for each locale
- Update `BaseLayout.astro` to read these values from `useTranslations(lang)` instead of hardcoded strings
- Verify JSON-LD output in built HTML matches the previous hardcoded values

### R3.4 — `LanguageSwitcher` label deduplication
- Remove the inline `labels` map from `LanguageSwitcher.svelte`
- Accept `label` as a prop (computed by the parent page via `useTranslations(lang).nav.switchLang`)
- Verify the rendered switcher label is unchanged

### R3.5 — `getLangFromUrl` data-driven locale detection
- Already addressed in R1.2 (testability refactoring) — confirm the fix is covered

---

## Phase 4 — Performance Optimizations

### R4.1 — Font strategy audit and fix
- With latin-ext `@font-face` rules added (R2.1), verify `unicode-range` is correctly set so extended Latin characters use the extended subset and base Latin characters use the base subset
- Confirm `<link rel="preload">` covers all 4 font files (or only the ones needed for above-the-fold content)
- Confirm `font-display: optional` remains appropriate given preload hints

### R4.2 — `BASE_URL` centralization (from R1.2)
- Ensure `getBase()` is used everywhere `import.meta.env.BASE_URL.replace(/\/?$/, '/')` appeared
- Remove all 4 inline repetitions; replace with single import

### R4.3 — CSS audit
- Scan `global.css` for any unused class selectors (classes defined but no corresponding element in templates)
- Remove dead CSS rules
- Confirm no visual regression (compare rendered output)

### R4.4 — Build output size audit
- Run `npm run build` and record `dist/index.html` size before and after Phase 4
- Confirm inline CSS is not bloated by the added font-face rules
- Document final sizes in a brief comment in `DEV_DOC.md`

---

## Phase 5 — Security Hardening

### R5.1 — Content Security Policy meta tag
- Add a `<meta http-equiv="Content-Security-Policy">` to `BaseLayout.astro`
- Policy: `default-src 'self'; style-src 'unsafe-inline'; font-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'`
- Note: `unsafe-inline` is required for Astro's inlined styles; document this tradeoff
- Verify build still passes and no browser console CSP violations on the built site

### R5.2 — Dependency vulnerability audit
- Run `npm audit` and resolve any high/critical findings
- Run `npx npm-check-updates` to identify available upgrades (informational; actual upgrades in Phase 6)

### R5.3 — Dependency upgrades (Astro 6, TypeScript 6, @astrojs/svelte 8)
- Upgrade `astro` to `^6.x` latest
- Upgrade `typescript` to `^6.x` latest
- Upgrade `@astrojs/svelte` to `^8.x` latest
- Upgrade remaining minor/patch: `@astrojs/check`, `@astrojs/sitemap`
- Run `npm run build` + `npx astro check` + `npm test` after upgrades
- Fix any breaking changes introduced by major version bumps

### R5.4 — CI secret scanning
- Confirm no secrets are committed (already verified — none exist)
- Add `trufflesecurity/trufflehog` or `gitleaks` action step to `ci.yml` as a lightweight gate
- Alternatively: document in `DEV_DOC.md` that the project has no secrets and how to verify

### R5.5 — `target="_blank"` audit
- Verify all `<a target="_blank">` elements have `rel="noopener noreferrer"` (already confirmed correct; add to CI check or test)

---

## Phase 6 — Code Quality

### R6.1 — ESLint setup
- Install `eslint`, `eslint-plugin-astro`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
- Create `eslint.config.js` (flat config) with rules for: TypeScript strict, Astro files, no-unused-vars, consistent imports
- Add `npm run lint` script: `eslint src/`
- Fix all lint errors in existing code
- Add lint step to `ci.yml`

### R6.2 — Prettier setup
- Install `prettier`, `prettier-plugin-astro`, `prettier-plugin-svelte`
- Create `.prettierrc` matching existing code style: single quotes, no semicolons, 2-space indent, trailing commas
- Add `npm run format` script: `prettier --write src/`
- Add `npm run format:check` script: `prettier --check src/` (used in CI)
- Format entire `src/` to enforce consistent style
- Add format check step to `ci.yml`

### R6.3 — `translations.ts` structure improvement
- Split into per-locale files if size warrants it (`src/i18n/locales/pt-br.ts`, `src/i18n/locales/en.ts`)
- Re-export combined `translations` object from `src/i18n/translations.ts` for backward compatibility
- Confirm TypeScript type inference still works after split

### R6.4 — Function naming and intent clarity
- Audit all functions in `src/i18n/utils.ts` for clear intent expression
- Add JSDoc comments to all exported functions documenting params, return type, and example
- Ensure function names follow the `getX`/`useX` conventions already established

### R6.5 — Final documentation update
- Update `DEV_DOC.md` with new commands: `npm test`, `npm run test:e2e`, `npm run lint`, `npm run format`, `npm run check`
- Update `TESTING.md` in `.planning/codebase/` to reflect the new test setup
- Update `CONCERNS.md` in `.planning/codebase/` to mark resolved items

---

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Build time | Unchanged (< 30s on CI) |
| HTML output | Semantically identical before/after all refactors |
| URL structure | Unchanged (`/portfolio/`, `/portfolio/en/`) |
| Lighthouse score | Maintain or improve (currently inferred high — SSG, inline CSS, self-hosted fonts) |
| Accessibility | Maintain all existing a11y patterns; fix skip-link ID inconsistency |
| TypeScript coverage | 100% (strict mode; no `@ts-ignore` or `any` suppressions) |
