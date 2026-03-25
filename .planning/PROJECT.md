# Project: Portfolio Engineering Excellence

**Created:** 2026-03-25
**Type:** Brownfield improvement — existing Astro + Svelte bilingual portfolio
**Repo:** https://github.com/peda-cos/portfolio
**Live site:** https://peda-cos.github.io/portfolio

---

## Problem Statement

The portfolio codebase has zero automated quality gates beyond TypeScript strict-mode checking. There are no tests, no linter, no formatter, and the CI pipeline only deploys — it cannot catch regressions. Beyond tooling gaps, there is measurable technical debt: two near-identical 119-line page templates, copy-pasted utility logic, unused font assets, and hardcoded personal data in two separate places.

As the codebase evolves (new sections, potential new locales, dependency upgrades), the absence of tests and linting creates compounding maintenance risk. Minor refactors become risky, and style inconsistencies accumulate undetected.

---

## Goal

Bring the portfolio to a state of **engineering excellence** appropriate for a senior developer's personal site: fully tested critical paths, zero dead code, all known bugs fixed, optimized build output, hardened against the limited attack surface of a static site, and clean idiomatic code throughout.

---

## Scope

**In scope:**
- Phase 1: Test infrastructure (Vitest), testability refactoring, unit tests for all pure logic, E2E smoke tests (Playwright), CI test gate
- Phase 2: Dead code elimination (unused font files, unused imports, `dist/` from git tracking)
- Phase 3: Bug/latent issue fixes (duplicated template pattern, hardcoded data, `getLangFromUrl` fragility, inconsistent section IDs)
- Phase 4: Performance optimizations (font loading strategy, BASE_URL helper, CSS audit)
- Phase 5: Security hardening (CSP meta tag, dependency audit, secret scanning gate in CI)
- Phase 6: Code quality improvements (ESLint + Prettier, LanguageSwitcher label deduplication, translations structure, locale routing made data-driven) + dependency upgrades (Astro 6, TypeScript 6)

**Out of scope:**
- New content/sections for the resume
- CMS integration
- Contact form or any dynamic features
- Visual redesign

---

## Constraints

- Must pass `npm run build` + `npx astro check` after every group of related changes
- Must pass full test suite (once established in Phase 1) after every change from Phase 2 onwards
- No breaking changes to the live site URL structure (`/portfolio/` and `/portfolio/en/`)
- Commit style: Conventional Commits, Portuguese language (`feat:`, `fix:`, `refactor:`, `test:`, `chore:`)
- Multiple commits per phase — one per logical group of related changes

---

## Success Criteria

- [ ] `npm test` runs and passes (Vitest unit + Playwright E2E)
- [ ] `npm run lint` runs and passes (ESLint + Prettier check)
- [ ] `npm run build` produces identical output before and after all refactors
- [ ] Zero duplicate logic between `src/pages/index.astro` and `src/pages/en/index.astro`
- [ ] `getLangFromUrl` derives locales from the languages map, not hardcoded strings
- [ ] All personal data (JSON-LD) sourced from `translations.ts`
- [ ] `dist/` removed from git tracking
- [ ] Unused font files removed or properly wired up
- [ ] Dependencies upgraded: Astro 6.x, TypeScript 6.x, @astrojs/svelte 8.x
- [ ] CI runs lint + typecheck + test + build on every push

---

## Codebase Snapshot (at project start)

- **Framework:** Astro 5.17.x SSG + Svelte 5.51.x
- **Language:** TypeScript strict mode, ESM
- **Styling:** Vanilla CSS, CSS custom properties, single `global.css` (623 lines)
- **i18n:** Built-in Astro i18n, 2 locales (pt-br default, en under `/en/`)
- **CI:** GitHub Actions → GitHub Pages, deploy-only
- **Tests:** None
- **Linting:** None
- **Key debt:** Duplicated page templates, copy-pasted BASE_URL logic, unused font files, hardcoded JSON-LD data
