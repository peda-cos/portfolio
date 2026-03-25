# Roadmap

**Project:** Portfolio Engineering Excellence
**Created:** 2026-03-25
**Phases:** 6 (sequential — each phase depends on the previous)

---

## Phase Overview

| # | Name | Goal | Status |
|---|------|------|--------|
| 1 | Test Coverage & Testability | Establish test infrastructure and cover all critical logic paths | 🔲 Not started |
| 2 | Dead Code Removal | Eliminate all unused code, assets, and tracked build artifacts | 🔲 Not started |
| 3 | Bug & Latent Issue Fixes | Fix all known structural and logic bugs in the codebase | 🔲 Not started |
| 4 | Performance Optimizations | Optimize font loading, eliminate code duplication hotspots, audit CSS | 🔲 Not started |
| 5 | Security Hardening & Upgrades | Add CSP, audit deps, upgrade Astro 6 + TypeScript 6 + @astrojs/svelte 8 | 🔲 Not started |
| 6 | Code Quality | Add ESLint + Prettier, improve naming/docs, finalize CI gates | 🔲 Not started |

---

## Phase 1 — Test Coverage & Testability

**Goal:** Go from zero test coverage to a fully gated CI pipeline with unit tests for all pure logic and E2E smoke tests for both language routes.

**Why first:** Tests must exist before any refactoring. Phases 2–6 will make structural changes; tests catch regressions. Testability refactoring in this phase also produces cleaner utility code that Phase 3 builds on.

**Commit groups:**
1. `chore(test): instalar e configurar Vitest e Playwright`
   - Install: `vitest`, `@playwright/test`, `@astrojs/test-utils` (if applicable)
   - Create `vitest.config.ts`, `playwright.config.ts`
   - Add `test`, `test:e2e`, `check` scripts to `package.json`

2. `refactor(i18n): extrair helper getBase e tornar getLangFromUrl data-driven`
   - Export `getBase()` from `src/i18n/utils.ts`
   - Replace 4 inline `BASE_URL.replace(...)` calls with `getBase()`
   - Make `getLangFromUrl` loop over `Object.keys(languages)` instead of hardcoding `'en'`
   - Verify: `npm run build` + `npx astro check`

3. `test(i18n): adicionar testes unitários para src/i18n/utils.ts`
   - Test all exported functions: `getLangFromUrl`, `getAlternateUrl`, `getHtmlLang`, `getBase`, `useTranslations`
   - Edge cases: trailing slashes, unknown paths, base path variants
   - Verify: `npm test`

4. `test(i18n): adicionar testes de estrutura para translations.ts`
   - Assert locale key parity between `pt-br` and `en`
   - Assert no undefined required fields
   - Verify: `npm test`

5. `test(e2e): adicionar smoke tests Playwright para ambas as rotas`
   - PT page renders, correct lang attr, h1 present, skip link works
   - EN page renders, correct lang attr, h1 present
   - Language switcher navigates correctly in both directions
   - Verify: `npm run test:e2e`

6. `ci: adicionar job de lint e testes ao pipeline`
   - Add `.github/workflows/ci.yml` with `lint-and-test` job
   - Steps: `npm ci` → `npx astro check` → `npm test` → `npm run test:e2e`
   - Update `deploy.yml` to depend on `lint-and-test` job

**Verification gate:** `npm run build` + `npx astro check` + `npm test` + `npm run test:e2e`

**Success criteria:**
- [ ] `npm test` runs and all unit tests pass
- [ ] `npm run test:e2e` runs and all E2E tests pass
- [ ] `getLangFromUrl` uses data-driven locale detection
- [ ] `getBase()` is the single source for BASE_URL normalization
- [ ] CI blocks deploy if tests fail

---

## Phase 2 — Dead Code Removal

**Goal:** Remove all code, files, and tracking artifacts that serve no active purpose.

**Why second:** Clean codebase before structural refactoring. Removing dead code reduces noise and makes Phase 3 diffs clearer.

**Commit groups:**
1. `chore(assets): remover dist/ do rastreamento git`
   - Add `dist/` to `.gitignore`
   - Run `git rm -r --cached dist/`
   - Verify CI deploy still uses the Actions artifact (not committed `dist/`)

2. `feat(fonts): habilitar subsets latin-ext nos @font-face`
   - Add `@font-face` rules in `global.css` for `dm-sans-latin-ext.woff2` and `source-serif-4-latin-ext.woff2` with correct `unicode-range`
   - Add `<link rel="preload">` for both ext files in `BaseLayout.astro`
   - Verify: `npm run build` + `npm test`

3. `chore(imports): remover importações não utilizadas`
   - Audit all `.astro`, `.svelte`, `.ts` files
   - Remove any unused imports found
   - Verify: `npx astro check` + `npm test`

**Verification gate:** `npm run build` + `npx astro check` + `npm test`

**Success criteria:**
- [ ] `dist/` not tracked by git
- [ ] Both latin-ext font files are referenced by `@font-face` rules
- [ ] Zero unused imports in source files

---

## Phase 3 — Bug & Latent Issue Fixes

**Goal:** Fix all known structural bugs, inconsistencies, and single-responsibility violations.

**Why third:** With tests in place (Phase 1) and dead code removed (Phase 2), structural refactoring is safe and verifiable. All changes in this phase have test coverage as regression guards.

**Commit groups:**
1. `fix(a11y): unificar IDs de seção e skip-link entre locales`
   - Change PT page section IDs to match EN pattern: `id="main-content"`, `id="resumo"` → `id="summary"`, etc.
   - Update `a11y.skipToContent` href target in translations
   - Update any CSS selectors targeting old IDs
   - Verify: `npm run build` + `npm test` (E2E tests validate skip-link)

2. `refactor(pages): extrair PageContent.astro e eliminar duplicação de templates`
   - Create `src/components/PageContent.astro` with `lang: Locale` prop
   - Move all content sections (header, summary, skills, experience, education) into it
   - Both page files become thin wrappers (~15 lines each)
   - Verify HTML output is identical: diff `dist/index.html` before/after
   - Verify: `npm run build` + `npm test`

3. `fix(layout): mover dados JSON-LD para translations.ts`
   - Add `meta.jsonLd` keys (`name`, `email`, `jobTitle`, `addressLocality`, `sameAs`) to both locales in `translations.ts`
   - Update `BaseLayout.astro` to read from `useTranslations(lang)`
   - Verify JSON-LD in built HTML matches previous output
   - Verify: `npm run build` + `npx astro check` + `npm test`

4. `refactor(components): desduplicar labels do LanguageSwitcher`
   - Remove inline `labels` map from `LanguageSwitcher.svelte`
   - Accept `label` as an explicit prop
   - Update both page files to pass `t.nav.switchLang` as the prop
   - Verify: `npm run build` + `npm test`

**Verification gate:** `npm run build` + `npx astro check` + `npm test`

**Success criteria:**
- [ ] Skip-link IDs are consistent across both locales
- [ ] `src/pages/index.astro` and `src/pages/en/index.astro` are each < 20 lines
- [ ] `PageContent.astro` contains all content section markup
- [ ] JSON-LD data sourced entirely from `translations.ts`
- [ ] `LanguageSwitcher.svelte` has no inline `labels` map

---

## Phase 4 — Performance Optimizations

**Goal:** Optimize font loading strategy, verify CSS is lean after removals, and confirm build output size is healthy.

**Why fourth:** Performance work builds on clean, de-duplicated code from Phase 3. Font strategy requires the latin-ext @font-face rules added in Phase 2.

**Commit groups:**
1. `perf(fonts): auditar e otimizar estratégia de preload e font-display`
   - Audit preload coverage for all 4 font files
   - Confirm `unicode-range` values are non-overlapping between latin and latin-ext subsets
   - Confirm `font-display: optional` is still appropriate with all preloads in place
   - Document strategy decision in `DEV_DOC.md`
   - Verify: `npm run build` + `npm test`

2. `perf(css): remover seletores CSS não utilizados`
   - Audit `global.css` for class selectors with no matching element in any `.astro`/`.svelte` template
   - Remove dead rules
   - Verify no visual regression: `npm run build`, manual review of both pages
   - Verify: `npm run build` + `npm test`

3. `perf(build): documentar tamanhos de output no DEV_DOC`
   - Record pre/post sizes for `dist/index.html` and `dist/en/index.html`
   - Note CSS inline size, JS bundle size
   - Add brief performance notes section to `DEV_DOC.md`

**Verification gate:** `npm run build` + `npx astro check` + `npm test`

**Success criteria:**
- [ ] All 4 font files have `@font-face` rules with non-overlapping `unicode-range`
- [ ] No unused CSS selectors remain in `global.css`
- [ ] Build output sizes documented in `DEV_DOC.md`

---

## Phase 5 — Security Hardening & Dependency Upgrades

**Goal:** Add the limited security hardening appropriate for a static site, audit and upgrade all dependencies to latest major versions.

**Why fifth:** Dependency upgrades may introduce breaking changes that require test fixes — running after the test suite is established means regressions are caught automatically.

**Commit groups:**
1. `security: adicionar Content Security Policy meta tag`
   - Add `<meta http-equiv="Content-Security-Policy">` to `BaseLayout.astro`
   - Policy: `default-src 'self'; style-src 'unsafe-inline'; font-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'`
   - Document the `unsafe-inline` tradeoff (required for Astro inline styles) in a comment
   - Verify: `npm run build` + `npm test`

2. `chore(deps): upgrade Astro 5 → 6 e @astrojs/svelte 7 → 8`
   - Upgrade `astro` to latest `^6.x`
   - Upgrade `@astrojs/svelte` to latest `^8.x`
   - Upgrade `@astrojs/sitemap` and `@astrojs/check` to latest
   - Fix any breaking changes (review Astro 6 migration guide)
   - Verify: `npm run build` + `npx astro check` + `npm test`

3. `chore(deps): upgrade TypeScript 5 → 6`
   - Upgrade `typescript` to latest `^6.x`
   - Fix any type errors introduced by stricter TypeScript 6 checks
   - Verify: `npx astro check` + `npm test`

4. `security: auditoria de dependências e resolução de vulnerabilidades`
   - Run `npm audit` and fix high/critical findings
   - Run `npm audit --fix` for safe auto-fixes
   - Document any unfixed findings with rationale

**Verification gate:** `npm run build` + `npx astro check` + `npm test`

**Success criteria:**
- [ ] CSP meta tag present in both built HTML pages
- [ ] `astro` upgraded to `^6.x` latest
- [ ] `typescript` upgraded to `^6.x` latest
- [ ] `@astrojs/svelte` upgraded to `^8.x` latest
- [ ] `npm audit` shows zero high/critical vulnerabilities

---

## Phase 6 — Code Quality

**Goal:** Add automated style enforcement (ESLint + Prettier), improve code documentation, and finalize all CI gates.

**Why last:** Formatting and linting are best added last — running Prettier on code that is still being structurally changed causes noisy diffs. All substantive code changes happen in Phases 1–5.

**Commit groups:**
1. `chore(lint): adicionar ESLint com regras para TypeScript e Astro`
   - Install: `eslint`, `eslint-plugin-astro`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
   - Create `eslint.config.js` (flat config)
   - Add `lint` script: `eslint src/`
   - Fix all lint errors in existing code
   - Verify: `npm run lint` passes

2. `chore(format): adicionar Prettier com plugins para Astro e Svelte`
   - Install: `prettier`, `prettier-plugin-astro`, `prettier-plugin-svelte`
   - Create `.prettierrc` (single quotes, no semicolons, 2-space indent, trailing commas)
   - Run `prettier --write src/` to format entire codebase
   - Add `format` and `format:check` scripts
   - Verify: `npm run format:check` passes

3. `docs(i18n): adicionar JSDoc às funções exportadas de utils.ts`
   - Add `@param`, `@returns`, and `@example` JSDoc to all exports in `src/i18n/utils.ts`
   - Verify: `npx astro check` (TypeScript validates JSDoc types)

4. `refactor(i18n): separar translations.ts em arquivos por locale`
   - Create `src/i18n/locales/pt-br.ts` and `src/i18n/locales/en.ts`
   - Re-export combined `translations` from `src/i18n/translations.ts` for backward compatibility
   - Verify: `npx astro check` + `npm test`

5. `ci: adicionar lint e format:check ao pipeline de CI`
   - Add `npm run lint` and `npm run format:check` steps to `ci.yml`
   - Verify: CI runs green on current codebase

6. `docs: atualizar DEV_DOC.md com todos os novos scripts e convenções`
   - Add docs for: `npm test`, `npm run test:e2e`, `npm run lint`, `npm run format`, `npm run check`
   - Add "Code Conventions" section pointing to `.prettierrc` and `eslint.config.js`
   - Update `TESTING.md` in `.planning/codebase/` to reflect full test setup
   - Update `CONCERNS.md` to mark resolved items

**Verification gate:** `npm run build` + `npx astro check` + `npm test` + `npm run lint` + `npm run format:check`

**Success criteria:**
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run format:check` passes with zero differences
- [ ] All exported functions in `utils.ts` have JSDoc
- [ ] `translations.ts` split into per-locale files
- [ ] CI runs lint + format check + type check + tests + build
- [ ] `DEV_DOC.md` documents all new scripts

---

## Dependencies Between Phases

```
Phase 1 (tests)
    └── Phase 2 (dead code) — tests catch regressions from removals
        └── Phase 3 (bugs) — safe refactoring with test coverage
            └── Phase 4 (perf) — builds on clean, de-duped code
                └── Phase 5 (security/upgrades) — upgrades verified by full test suite
                    └── Phase 6 (quality) — formatting last, after all code changes done
```

---

## Running Verification After Each Phase

```bash
# Phase 1 gate
npm run build && npx astro check && npm test

# Phase 2+ gate (adds E2E after Phase 1 sets it up)
npm run build && npx astro check && npm test && npm run test:e2e

# Phase 6 final gate
npm run build && npx astro check && npm test && npm run test:e2e && npm run lint && npm run format:check
```
