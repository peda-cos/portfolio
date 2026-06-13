_This project was created by Pedro Monteiro_

# Portfolio

Personal portfolio and resume website for Pedro Monteiro, a Full-Stack Engineer based in São Paulo, Brazil. Hosted on GitHub Pages.

## Description

A static, bilingual (Portuguese BR / English) resume site built with plain **HTML**, **CSS**, and **JavaScript**. No frontend frameworks, no build step, and no external runtime dependencies — just static files served as-is. The only development dependencies are Playwright (for end-to-end tests) and `serve` (for local preview).

### Design Rationale

- **Plain HTML/CSS/JS over frameworks**: The site is content-driven and has a single interactive concern (language switching). A framework runtime adds unnecessary bytes and complexity for this use case.
- **No build step**: Files in `public/` are served directly. This eliminates build tooling, speeds up CI/CD, and makes the deployed output identical to the source.
- **Self-hosted assets**: Fonts, favicon, and Open Graph image are stored locally under `public/assets/` so the site has no third-party requests.
- **File-based i18n**: Two static HTML pages (`/` for pt-BR, `/en/` for English) share a single CSS and JS file.

### Architecture

```
public/
├── index.html          # Portuguese (default locale)
├── en/
│   └── index.html      # English locale
├── assets/
│   ├── css/
│   │   └── main.css    # Site-wide stylesheet and design tokens
│   ├── js/
│   │   └── main.js     # Scroll-reveal observer
│   └── fonts/          # Self-hosted subsetted WOFF2 fonts
├── favicon.svg
├── og-image.png
└── robots.txt
```

## Instructions

### Prerequisites

- **Node.js** >= 24.16.0 (only needed for Playwright E2E tests and local preview)
- **npm** (bundled with Node.js)

### Install

```bash
npm install
```

### Development / Preview

```bash
npm run dev      # → http://localhost:4321
npm run preview  # → http://localhost:4321
```

### E2E Tests

```bash
npm run test:e2e
```

Playwright starts a local static server automatically and runs the test suite.

## CI/CD

- **CI** (`.github/workflows/ci.yml`): installs Playwright dependencies, caches browsers, and runs E2E tests on every push / pull request to `main`.
- **Deploy** (`.github/workflows/deploy.yml`): uploads `public/` directly to GitHub Pages after CI succeeds on `main`, or on manual `workflow_dispatch`.

## Resources

- [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org Person markup](https://schema.org/Person)
- [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/)
