# Testing

**Analysis Date:** 2026-03-25

## Test Setup

- **Unit test framework:** Vitest (integrated with Astro's Vite pipeline via `getViteConfig`)
- **E2E test framework:** Playwright (Chromium only)
- **Config files:** `vitest.config.ts`, `playwright.config.ts`

## Test Types Present

- [x] Unit tests — Vitest, `src/**/*.test.ts`
- [ ] Integration tests
- [x] E2E tests — Playwright, `e2e/*.spec.ts`
- [ ] Visual regression
- [x] Type checking — `@astrojs/check` + TypeScript strict mode

## Coverage

- **Reporting:** Not configured (add `coverage` to vitest.config.ts if needed)
- **Thresholds:** Not configured

## Key Test Locations

| Path | What It Tests |
|------|---------------|
| `src/i18n/utils.test.ts` | `getLangFromUrl`, `getAlternateUrl`, `getHtmlLang`, `getBase`, `useTranslations` — all exported i18n utility functions |
| `src/i18n/translations.test.ts` | Translation structure parity between locales, no undefined values, languages map integrity |
| `e2e/smoke.spec.ts` | Both language routes render correctly, language switcher navigation, skip-link accessibility, HTTP 200 responses |

## How to Run Tests

```bash
# Unit tests (single run)
npm test

# Unit tests (watch mode)
npm run test:watch

# E2E tests (requires build first)
npm run build && npm run test:e2e

# Type checking
npm run check

# All quality gates
npm run build && npm run check && npm test && npm run test:e2e
```

## CI Pipeline

- **CI workflow** (`.github/workflows/ci.yml`): Runs on every push and PR to `main`. Executes type check → unit tests → build → E2E tests.
- **Deploy workflow** (`.github/workflows/deploy.yml`): Triggers after CI passes on `main` via `workflow_run`. Only deploys if CI succeeded. Manual dispatch also available.

## Conventions for Future Tests

- **Unit test files:** Co-locate with source: `src/module/file.test.ts` next to `src/module/file.ts`
- **E2E test files:** Place in `e2e/` directory with `.spec.ts` extension
- **Test structure:** Use `describe` blocks grouped by function/feature name, `test` blocks for individual behaviors
- **Naming:** `describe('functionName', () => { test('does X when Y', ...) })`
- **Astro env mocking:** Use `vi.stubEnv('BASE_URL', '/portfolio/')` in `beforeAll` blocks when `import.meta.env.BASE_URL` is needed
- **Playwright URL paths:** Use relative paths (`./`, `./en/`) not absolute (`/`, `/en/`) so `baseURL` path component is preserved

## Notes

- Playwright is configured with `chromium` only to keep CI fast
- E2E tests require `npm run build` before running — Playwright's `webServer` config starts `npm run preview` which serves the built `dist/`
- Vitest uses `getViteConfig` from `astro/config` for proper Astro/Vite integration
- `import.meta.env.BASE_URL` requires `vi.stubEnv()` in tests since `getViteConfig` doesn't propagate it reliably
