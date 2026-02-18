*This project was created by Pedro Monteiro*

# Portfolio

Personal portfolio and resume website for Pedro Monteiro, a Full-Stack Engineer based in São Paulo, Brazil. Hosted via GitHub Pages.

## Description

A statically generated, bilingual (Portuguese BR / English) resume site built with **Astro** and **Svelte**. The site serves as a single-page CV presenting professional experience, education, technical skills, and contact information.

### Design Rationale

- **Astro over Next.js / Gatsby**: Astro ships zero JavaScript by default — ideal for a content-driven resume page where interactivity is minimal. The only client-side component is the language switcher (Svelte island).
- **Svelte over React**: The language switcher is the sole interactive element. Svelte compiles to vanilla JS with no runtime, keeping the bundle negligible compared to React's ~40 KB baseline.
- **Static generation over SSR**: The content is author-controlled and changes infrequently. Static HTML delivers the fastest possible load, works without a server, and can be hosted on any CDN (GitHub Pages, Cloudflare Pages, Vercel, Netlify).
- **i18n via file-based routing**: Astro's built-in `i18n` config handles locale routing (`/` for pt-br, `/en/` for English) with `prefixDefaultLocale: false`. Translations live in a single TypeScript module (`src/i18n/translations.ts`) — no runtime i18n library needed.

### Architecture

```
src/
├── components/          # Svelte interactive components (LanguageSwitcher)
├── i18n/
│   ├── translations.ts  # All text content for both locales
│   └── utils.ts         # Locale detection and translation helpers
├── layouts/
│   └── BaseLayout.astro # HTML shell: meta tags, SEO, fonts, JSON-LD
├── pages/
│   ├── index.astro      # Portuguese (default locale)
│   └── en/index.astro   # English locale
└── styles/
    └── global.css       # Full stylesheet: sage green palette, responsive, print
```

The content layer is fully data-driven — both page templates consume the same translation object, so adding or editing resume entries requires editing only `translations.ts`.

## Instructions

### Prerequisites

- **Node.js** >= 18.x
- **npm** (bundled with Node.js)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens a local dev server at `http://localhost:4321` with hot module replacement.

### Build

```bash
npm run build
```

Outputs static HTML/CSS/JS to `dist/`. All stylesheets are inlined (`build.inlineStylesheets: 'always'`).

### Preview

```bash
npm run preview
```

Serves the production build locally for final verification before deployment.

## Resources

### Documentation

- [Astro Documentation](https://docs.astro.build)
- [Svelte 5 Documentation](https://svelte.dev/docs)
- [Astro i18n Routing](https://docs.astro.build/en/guides/internationalization/)
- [Astro Sitemap Integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

### References

- [Schema.org Person markup](https://schema.org/Person) — used for JSON-LD structured data
- [Open Graph Protocol](https://ogp.me/) — social sharing meta tags
- [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/) — accessibility target (skip links, contrast, focus indicators)

### AI Usage

AI tools (GitHub Copilot, OpenCode) were used for:
- Generating initial project scaffolding and boilerplate
- Drafting and refining CSS styling
- Writing this documentation (README.md, USER_DOC.md, DEV_DOC.md)
- Code review assistance and translation proofreading

All AI-generated output was reviewed and edited by the author.
