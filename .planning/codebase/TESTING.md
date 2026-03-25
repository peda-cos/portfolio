# Testing

**Analysis Date:** 2026-03-25

## Test Setup

- **Framework:** None installed.
- **Runner:** None configured.
- **Config:** No `vitest.config.*`, `jest.config.*`, `playwright.config.*`, or `cypress.config.*` found.

## Test Types Present

- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Visual regression
- [x] Type checking — via `@astrojs/check` (dev dependency) and `typescript ^5.9.3`. TypeScript strict mode is enforced through `tsconfig.json` extending `astro/tsconfigs/strict`.

## Coverage

- **Reporting:** Not configured.
- **Thresholds:** Not configured.

## Key Test Locations

| Path | What It Tests |
|------|---------------|
| *(none)* | No test files exist in the project |

## How to Run Tests

```bash
# Type checking (only available quality gate)
npx astro check

# No unit, integration, or E2E test commands exist
# No test script defined in package.json
```

## Gaps / Missing Coverage

- **All source code is untested.** No unit tests for `src/i18n/utils.ts` (language detection logic `getLangFromUrl`, `getAlternateUrl`, `getHtmlLang`).
- **No unit tests for translation data** in `src/i18n/translations.ts` — structural correctness of the translation objects (e.g., both locales having identical keys) is not verified automatically.
- **No component tests** for `src/components/LanguageSwitcher.svelte` — prop handling and rendered output are not tested.
- **No E2E tests** — language switching behavior, page navigation, and i18n routing (`/` vs `/en/`) are not automatically verified.
- **No visual regression tests** — layout correctness and CSS rendering are not protected against regressions.
- **CI pipeline does not run tests** — `.github/workflows/deploy.yml` only runs `npm run build`. A failing build is the only automated quality gate.

## Notes

- The project is a static portfolio site with minimal logic; the highest-value test additions would be:
  1. Unit tests for `src/i18n/utils.ts` (pure functions, easy to test with Vitest)
  2. E2E smoke tests with Playwright to verify both language routes render and the language switcher navigates correctly
- Vitest is the natural choice for unit tests given the Vite/Astro build pipeline — no additional config is needed beyond installing `vitest`.
- `@astrojs/check` is the only automated quality tool currently in use, and it is not wired to a `check` npm script.
