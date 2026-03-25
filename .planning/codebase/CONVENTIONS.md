# Code Conventions

**Analysis Date:** 2026-03-25

## Language & Syntax

- **TypeScript usage:** TypeScript is used for all logic files (`.ts` in `src/i18n/`). Astro frontmatter (`.astro` files) uses TypeScript inline. Svelte components use `<script lang="ts">`. Config files (`astro.config.mjs`, `svelte.config.js`) are plain JavaScript ESM.
- **Strict mode:** `strict: true` is inherited via `astro/tsconfigs/strict` in `tsconfig.json`. This enables `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, and all other strict-family checks.
- **Module system:** ESM throughout. `package.json` declares `"type": "module"`. Imports use relative paths (e.g., `'../i18n/utils'`, `'../../layouts/BaseLayout.astro'`).

## Naming Conventions

- **Variables:** camelCase (e.g., `currentLang`, `alternatePath`, `htmlLang`, `canonicalURL`, `socialImageURL`, `jsonLd`).
- **Functions:** camelCase (e.g., `getLangFromUrl`, `useTranslations`, `getAlternateUrl`, `getHtmlLang`).
- **Components:** PascalCase filenames and references (e.g., `LanguageSwitcher.svelte`, `BaseLayout.astro`).
- **Files:** PascalCase for components and layouts (`LanguageSwitcher.svelte`, `BaseLayout.astro`). camelCase for utility/logic files (`translations.ts`, `utils.ts`). kebab-case for pages that map to routes (`index.astro`).
- **TypeScript types/interfaces:** PascalCase (e.g., `Locale`, `Props`). `Props` is always the interface name for component props.
- **CSS classes:** kebab-case (e.g., `site-header`, `header-top`, `header-identity`, `entry-header`, `skills-grid`, `skill-tag`, `skills-category`, `entry-meta`, `entry-summary`, `entry-highlights`, `sr-only`, `skip-link`, `language-switcher`, `globe-icon`).
- **CSS custom properties:** kebab-case with semantic grouping prefixes (e.g., `--color-bg`, `--color-text-muted`, `--font-heading`, `--space-4`, `--sage-500`).

## Component Patterns

- **Component structure (Svelte):** Script block first with `<script lang="ts">`, then HTML template. Props declared with `interface Props {}` followed by destructuring via `$props()`. Derived state uses Svelte 5 runes `$derived(...)`. No `<style>` blocks in Svelte components — styles live in `src/styles/global.css`.
  ```svelte
  <script lang="ts">
    interface Props { currentLang: 'pt-br' | 'en'; alternatePath: string; }
    const { currentLang, alternatePath }: Props = $props();
    const label = $derived(labels[currentLang]);
  </script>
  ```
- **Component structure (Astro):** Frontmatter fence (`---`) contains all imports and logic. Props declared with `interface Props {}` and accessed via `Astro.props`. Template follows after the closing fence.
  ```astro
  ---
  interface Props { lang: Locale; }
  const { lang } = Astro.props;
  ---
  <html>...</html>
  ```
- **Props handling:** Typed inline `interface Props {}` in every component, directly above destructuring. Required props have no defaults; optional props use TypeScript union with `undefined`.
- **Event handling:** Not present in current components (no interactive event handlers). The `LanguageSwitcher` is a plain `<a>` element — no `on:click` or event dispatching.
- **i18n pattern:** Translation lookup via `useTranslations(lang)` returns the full translation object. Destructuring pulls named sections (`{ header, summary, skills, experience, education, footer, a11y }`).

## Code Style

- **Indentation:** 2 spaces in `.astro`, `.ts`, `.svelte`, and `.mjs` files. The exception is `svelte.config.js` which uses a tab (single file, likely auto-generated).
- **Quotes:** Single quotes for JS/TS string literals (e.g., `'pt-br'`, `'../styles/global.css'`). Double quotes in JSX/template attribute values and HTML (e.g., `class="site-header"`, `href={...}`).
- **Semicolons:** Omitted in TypeScript/JavaScript (no trailing semicolons). Svelte `<script>` blocks follow the same no-semicolon style.
- **Trailing commas:** Present in multi-line object/array literals (e.g., translation objects in `translations.ts`).
- **Line length:** Not formally enforced; lines kept readable, with long strings (URLs, descriptions) on single lines.
- **Template expressions:** JSX-style `{expression}` for interpolation in both `.astro` and `.svelte` files. Map expressions use arrow functions returning JSX fragments wrapped in `()`.

## Linting & Formatting

- **Linter:** None configured. No `.eslintrc*`, `eslint.config.*`, or `biome.json` found.
- **Formatter:** None configured. No `.prettierrc*` or `prettier.config.*` found.
- **Type checker:** `@astrojs/check` (dev dependency) runs Astro's built-in type checking using TypeScript. Invoked implicitly — no separate `tsc` script in `package.json`.
- **Config files:** `tsconfig.json` (strict Astro preset), `svelte.config.js` (vite preprocessor only), `astro.config.mjs` (integrations + i18n routing).
- **Editor config:** No `.editorconfig` found.

## Git Conventions

- **Branch naming:** Not documented. Default branch is `main`.
- **Commit style:** Mixed — recent commits follow Conventional Commits format with `feat(scope):` and `fix(scope):` prefixes in Portuguese and English. Older commits use imperative Portuguese sentences without a type prefix. Examples:
  - `fix(header): ajusta alinhamento dos itens de contato no header em mobile`
  - `feat(fonts): migrar para fontes auto-hospedadas com subconjuntos otimizados`
  - `feat(deploy): adicionar pipeline de CI/CD e migrar configuração para GitHub Pages`
  - `feat: inicializar projeto de portfólio estático bilíngue com Astro e Svelte`
  - `Adicionar barra de estatísticas e funcionalidade de download de CV` (older style)
- **PR workflow:** Not documented. CI/CD pipeline in `.github/workflows/deploy.yml` deploys to GitHub Pages on push to `main`.
- **Language:** Commit messages are predominantly in Portuguese.

## Notes

- No test framework, linter, or formatter is installed or configured. Code quality relies entirely on TypeScript strict mode and manual review.
- Svelte 5 runes syntax (`$props()`, `$derived()`) is used — not the legacy Svelte 4 reactive declaration style.
- All CSS lives in a single `src/styles/global.css` file (623 lines) using CSS custom properties and no utility-class framework (no Tailwind, UnoCSS, etc.).
- The `@ts-check` comment in `astro.config.mjs` enables type checking in that JS file without converting it to TypeScript.
- Pages are not componentized beyond `BaseLayout` and `LanguageSwitcher` — `src/pages/index.astro` and `src/pages/en/index.astro` are near-identical and duplicated.
