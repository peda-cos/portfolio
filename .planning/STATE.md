# Project State

**Project:** Portfolio Engineering Excellence
**Initialized:** 2026-03-25
**Last updated:** 2026-03-25

---

## Current Status

| Field | Value |
|-------|-------|
| Active phase | Phase 5 — Complete |
| Last completed phase | Phase 5: Security Hardening & Dependency Upgrades |
| Last commit | `a16ba72` (fix(security): corrigir vulnerabilidade rollup) |
| Blocking issues | None |

---

## Phase Status

| # | Phase | Status | Completion |
|---|-------|--------|------------|
| 1 | Test Coverage & Testability | ✅ Complete | 100% |
| 2 | Dead Code Removal | ✅ Complete | 100% |
| 3 | Bug & Latent Issue Fixes | ✅ Complete | 100% |
| 4 | Performance Optimizations | ✅ Complete | 100% |
| 5 | Security Hardening & Upgrades | ✅ Complete | 100% |
| 6 | Code Quality | 🔲 Not started | 0% |

---

## Phase 1 Summary — Test Coverage & Testability

### Commits
1. `36cc5b3` — chore(test): instalar Vitest e Playwright, refatorar utils.ts para testabilidade
2. `3e87d2d` — test(i18n): adicionar testes unitários para utils.ts e translations.ts
3. `fc1b90e` — test(e2e): adicionar smoke tests Playwright para ambas as rotas
4. `7120bf7` — ci(workflows): criar pipeline CI e condicionar deploy ao sucesso dos testes
5. `c68142d` — docs(testing): atualizar TESTING.md com suítes de testes e convenções

### Results
- **30 unit tests** across 2 files (utils.test.ts, translations.test.ts)
- **10 E2E tests** in smoke.spec.ts (both language routes, navigation, accessibility)
- **CI pipeline** gates deployment behind all quality checks

---

## Phase 2 Summary — Dead Code Removal

### Commits
1. `b908b31` — feat(fonts): habilitar subsets latin-ext nos @font-face

### Results
- Latin-ext font subsets wired up with correct `unicode-range` and `@font-face` rules
- `dist/` already in `.gitignore` and not tracked — no commit needed
- Zero unused imports found across all source files — no commit needed

---

## Phase 3 Summary — Bug & Latent Issue Fixes

### Commits
1. `644fc15` — fix(a11y): unificar IDs de seção e skip-link entre locales
2. `75bc3b7` — refactor(pages): extrair PageContent.astro e eliminar duplicação de templates
3. `a273019` — refactor(i18n): mover dados JSON-LD para translations.ts e tornar jobTitle localizável
4. `e029076` — refactor(i18n): eliminar mapa duplicado de labels no LanguageSwitcher em favor de prop vinda de translations

### Results
- Section IDs unified (PT Portuguese IDs → English pattern matching EN page)
- `PageContent.astro` extracted — both page files now ~13 lines each, HTML byte-identical
- JSON-LD data moved to translations.ts with localized `jobTitle`
- LanguageSwitcher deduped — accepts `label` prop from `nav.switchLang`

---

## Phase 4 Summary — Performance Optimizations

### Commits
1. `07616a3` — perf(fonts): auditar estratégia de fontes e centralizar BASE_URL via getBase()
2. `079bb77` — docs(perf): documentar tamanhos de build, estratégia de fontes e auditoria CSS no DEV_DOC

### Results
- Font strategy audit confirmed correct (preload + optional display)
- Last inline `BASE_URL.replace(...)` in BaseLayout centralized to `getBase()`
- CSS audit: zero unused selectors (all 30 class selectors used) — no CSS commit needed
- Build output sizes and font loading strategy documented in DEV_DOC.md

---

## Phase 5 Summary — Security Hardening & Dependency Upgrades

### Commits
1. `cbe126c` — security: adicionar meta tag Content-Security-Policy ao BaseLayout
2. `a84f0fb` — chore(deps): atualizar Astro 5→6, @astrojs/svelte 7→8 e dependências menores
3. `a16ba72` — fix(security): corrigir vulnerabilidade de path traversal no rollup via npm audit fix

### Results
- CSP meta tag added: `default-src 'none'; style-src 'unsafe-inline'; font-src 'self' data:; img-src 'self' data:; script-src 'self' 'unsafe-inline'; connect-src 'self'`
- **Astro** upgraded: 5.17.1 → 6.0.8
- **@astrojs/svelte** upgraded: 7.2.5 → 8.0.3
- **@astrojs/sitemap**: 3.7.0 → 3.7.1
- **@astrojs/check**: 0.9.6 → 0.9.8
- **Svelte**: 5.51.3 → 5.55.0
- **TypeScript** kept at 5.9.3 (TS 6 released 2026-03-23; `@astrojs/svelte` and `@astrojs/check` peer deps still require `^5.x`)
- **npm audit**: 0 vulnerabilities (down from 9: 6 moderate, 3 high)
- No breaking changes required — build, check, 30 unit tests, and 10 E2E all pass

---

## Key Decisions Made

| Decision | Rationale | Date |
|----------|-----------|------|
| Multiple commits per phase (one per logical group) | Cleaner git history, easier bisect | 2026-03-25 |
| Vitest for unit tests | Native Vite integration, zero extra config | 2026-03-25 |
| Playwright for E2E | Astro-recommended, covers real browser behavior | 2026-03-25 |
| Wire up latin-ext fonts (not remove) | Files exist intentionally; extended Latin support is correct | 2026-03-25 |
| ESLint flat config (not legacy .eslintrc) | Modern format, matches Astro ecosystem | 2026-03-25 |
| Phase 6 last for formatting | Prettier diffs should not pollute structural change commits | 2026-03-25 |
| Keep TypeScript at 5.9.3 | TS 6 just released; Astro ecosystem peer deps don't support it yet | 2026-03-25 |
| Relative paths in Playwright goto() | Absolute paths discard baseURL path component, causing 404s | 2026-03-25 |
| Deploy via workflow_run (not needs:) | Cross-workflow dependency requires workflow_run trigger | 2026-03-25 |

---

## Key Discoveries

- `import.meta.env.BASE_URL` requires `vi.stubEnv()` in Vitest — `getViteConfig` doesn't propagate it
- Playwright `page.goto('/')` with path-containing `baseURL` needs relative paths (`./`) not absolute (`/`)
- `getViteConfig` from `astro/config` needs `/// <reference types="vitest/config" />` and `as any` cast
- Vite inlines small woff2 files as base64 data URIs — `data:` required in CSP `font-src`
- `unsafe-inline` required in CSP for both `style-src` (Astro inlined styles) and `script-src` (JSON-LD `is:inline` script)
- Astro 6 upgrade was seamless for our static site — no breaking changes encountered
- TypeScript 6 peer dep incompatible with current Astro ecosystem (as of 2026-03-25)

---

## Codebase Snapshot (current)

- `astro`: 6.0.8
- `typescript`: 5.9.3
- `@astrojs/svelte`: 8.0.3
- `svelte`: 5.55.0
- `vitest`: 4.1.1
- `@playwright/test`: 1.58.2
- Tests: **30 unit + 10 E2E** (all passing)
- Vulnerabilities: **0** (npm audit clean)
- Linting: none (Phase 6)
- CI: CI gates deployment (type check → unit tests → build → E2E)

---

## Next Action

Begin Phase 6: Code Quality (ESLint, Prettier, JSDoc, split translations, CI lint gates).
