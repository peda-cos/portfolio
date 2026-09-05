const fs = require("fs");
const path = require("path");
const { pt, en } = require("../src/content");

const SITE_ORIGIN = "https://peda-cos.github.io/portfolio";

const ICONS = {
  monitor:
    '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
  users:
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  globe:
    '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
  building:
    '<path d="M3 21h18"></path><path d="M5 21V7l8-4 8 4v14"></path><path d="M9 21v-6h6v6"></path>',
  school:
    '<path d="M22 10v6"></path><path d="M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>',
  "arrow-right": '<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>',
  external: '<path d="M7 17 17 7"></path><path d="M8 7h9v9"></path>',
};

function iconSvg(name) {
  return ICONS[name] || "";
}

function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function attr(value) {
  return esc(value).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function svgIcon(name, width = 20, height = 20) {
  return `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            ${iconSvg(name)}
          </svg>`;
}

function renderSprig(extraClass) {
  return `<svg class="sprig ${extraClass}" viewBox="0 0 120 170" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path class="sprig__stem" pathLength="1" d="M60 166 C 57 128 63 102 72 76 C 79 55 77 30 66 6"/>
              <path class="sprig__leaf" pathLength="1" d="M71 78 C 84 69 93 54 95 37"/>
              <path class="sprig__leaf" pathLength="1" d="M72 74 C 59 66 50 53 46 38"/>
              <path class="sprig__leaf" pathLength="1" d="M67 106 C 81 100 91 87 95 72"/>
              <path class="sprig__leaf" pathLength="1" d="M66 110 C 52 104 43 92 39 77"/>
              <path class="sprig__leaf" pathLength="1" d="M62 136 C 76 130 86 117 89 102"/>
              <path class="sprig__leaf" pathLength="1" d="M62 48 C 71 42 77 32 79 21"/>
            </g>
          </svg>`;
}

function render(data) {
  const absoluteUrl = `${SITE_ORIGIN}/${data.basePath}`;
  const ptUrl = `${SITE_ORIGIN}/`;
  const enUrl = `${SITE_ORIGIN}/en/`;

  const cardsHtml = data.value.cards
    .map(
      (card) => `<article class="value-card">
              <div class="value-card__header">
                <span class="medallion" aria-hidden="true">
                  ${svgIcon(card.icon)}
                </span>
                <h3 class="value-card__title">${esc(card.title)}</h3>
              </div>
              <ul class="value-card__skills" role="list">
                ${card.skills.map((s) => `<li class="chip chip--skill">${esc(s)}</li>`).join("\n                ")}
              </ul>
            </article>`,
    )
    .join("\n            ");

  const jobsHtml = data.experience.jobs
    .map(
      (job) => `<article class="panel experience-card">
              <span class="experience-card__accent" aria-hidden="true"></span>
              <div class="panel__header">
                <div class="panel__title-wrap">
                  <span class="medallion medallion--sm" aria-hidden="true">
                    ${svgIcon("building", 16, 16)}
                  </span>
                  <h3 class="panel__title">${esc(job.company)}</h3>
                </div>
                <span class="chip chip--quiet experience-card__period">${esc(job.period)}</span>
              </div>
              <p class="panel__role">${esc(job.role)}</p>
              <ul class="experience-card__highlights" role="list">
                ${job.highlights
                  .map(
                    (h) => `<li class="experience-card__highlight">
                  <span class="experience-card__bullet" aria-hidden="true"></span>
                  ${esc(h)}
                </li>`,
                  )
                  .join("\n                ")}
              </ul>
            </article>`,
    )
    .join("\n            ");

  const schoolsHtml = data.craft.schools
    .map(
      (school) => `<article class="panel craft-card">
              <div class="panel__header">
                <div class="panel__title-wrap">
                  <span class="medallion medallion--sm" aria-hidden="true">
                    ${svgIcon("school", 16, 16)}
                  </span>
                  <h3 class="panel__title">${esc(school.name)}</h3>
                </div>
                <span class="chip chip--quiet craft-card__period">${esc(school.period)}</span>
              </div>
              <p class="craft-card__degree">${esc(school.degree)}</p>
              <p class="craft-card__description">${esc(school.description)}</p>
              ${
                school.projects
                  ? `<ul class="craft-card__highlights" role="list">
                ${school.projects
                  .map(
                    (p) => `<li class="chip chip--link">
                  <a href="${attr(p.url)}" target="_blank" rel="noopener noreferrer">
                    ${esc(p.name)}${svgIcon("external", 11, 11)}<span class="sr-only">${esc(data.newTab)}</span>
                  </a>
                </li>`,
                  )
                  .join("\n                ")}
              </ul>`
                  : ""
              }
            </article>`,
    )
    .join("\n            ");

  const footerText = data.footer.text
    .replace(
      "{{html}}",
      () =>
        `<a class="footer-link-html" href="${attr(data.footer.htmlUrl)}" target="_blank" rel="noopener noreferrer">${esc(data.footer.html)}</a>`,
    )
    .replace(
      "{{css}}",
      () =>
        `<a class="footer-link-css" href="${attr(data.footer.cssUrl)}" target="_blank" rel="noopener noreferrer">${esc(data.footer.css)}</a>`,
    );

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.hero.name,
    url: ptUrl,
    email: data.contact.email,
    jobTitle: data.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: data.sameAs,
  }).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="${data.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'none'; style-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; connect-src 'self'"
    />
    <link rel="icon" type="image/svg+xml" href="${attr(path.posix.join(data.assetsPrefix, "..", "favicon.svg"))}" />

    <title>${esc(data.title)}</title>
    <meta name="title" content="${attr(data.title)}" />
    <meta
      name="description"
      content="${attr(data.description)}"
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${attr(absoluteUrl)}" />
    <meta property="og:title" content="${attr(data.title)}" />
    <meta
      property="og:description"
      content="${attr(data.description)}"
    />
    <meta property="og:image" content="${SITE_ORIGIN}/og-image.png" />
    <meta property="og:image:alt" content="${attr(data.ogImageAlt)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${attr(absoluteUrl)}" />
    <meta name="twitter:title" content="${attr(data.title)}" />
    <meta
      name="twitter:description"
      content="${attr(data.description)}"
    />
    <meta name="twitter:image" content="${SITE_ORIGIN}/og-image.png" />
    <meta name="twitter:image:alt" content="${attr(data.ogImageAlt)}" />

    <link rel="canonical" href="${attr(absoluteUrl)}" />

    <link rel="preload" as="font" type="font/woff2" href="${data.assetsPrefix}fonts/dm-sans-latin.woff2" crossorigin />
    <link rel="preload" as="font" type="font/woff2" href="${data.assetsPrefix}fonts/source-serif-4-latin.woff2" crossorigin />

    <link rel="alternate" hreflang="pt-BR" href="${ptUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${ptUrl}" />

    <link rel="stylesheet" href="${data.assetsPrefix}css/main.css?v=5" />

    <script type="application/ld+json">
      ${jsonLd}
    </script>
  </head>
  <body>
    <a href="#main-content" class="skip-link">${esc(data.skipLink)}</a>

    <main id="main-content" tabindex="-1">
      <section id="hero" aria-labelledby="hero-name" class="hero band band--paper">
        <a href="${attr(data.language.href)}" aria-label="${attr(data.language.label)}" class="pill pill--switch hero__language">
          ${svgIcon("globe", 13, 13)}
          <span>${esc(data.language.text)}</span>
        </a>

        <div class="hero__content container">
          <h1 id="hero-name" class="hero__title">${esc(data.hero.name)}</h1>
          <p class="hero__tagline">${esc(data.hero.tagline)}</p>
          <p class="hero__summary">${esc(data.hero.summary)}</p>

          <div class="hero__actions">
            <a href="mailto:${attr(data.contact.email)}" class="btn btn--solid">${esc(data.hero.cta)}${svgIcon("arrow-right", 18, 18)}</a>
            <a
              href="https://linkedin.com/in/pedrocsmonteiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${attr(data.hero.linkedinLabel)}"
              class="pill"
            >
              ${esc(data.hero.linkedinText)}
            </a>
          </div>

          <div class="hero__meta">
            <span class="pill pill--meta">
              ${svgIcon("pin", 14, 14)}
              ${esc(data.hero.location)}
            </span>
            <a
              href="https://github.com/peda-cos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${attr(data.hero.githubLabel)}"
              class="pill pill--meta"
            >
              ${svgIcon("github", 14, 14)}
              ${esc(data.hero.githubText)}
            </a>
          </div>
        </div>

        ${renderSprig("hero__sprig")}
      </section>

      <section id="value" aria-labelledby="value-heading" class="section band band--sage value-section">
        <div class="container">
          <h2 id="value-heading" class="section__heading">${esc(data.value.heading)}</h2>
          <p class="section__summary">${esc(data.value.summary)}</p>

          <div class="value-grid">
            ${cardsHtml}
          </div>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading" class="section band band--paper experience-section">
        <div class="container">
          <h2 id="experience-heading" class="section__heading">${esc(data.experience.heading)}</h2>

          <div class="experience-list">
            ${jobsHtml}
          </div>
        </div>
      </section>

      <section id="craft" aria-labelledby="craft-heading" class="section band band--sage craft-section">
        <div class="container">
          <h2 id="craft-heading" class="section__heading">${esc(data.craft.heading)}</h2>
          <p class="section__summary">${esc(data.craft.summary)}</p>

          <div class="craft-list">
            ${schoolsHtml}
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="cta-heading" class="cta-section band band--deep">
        <div class="cta-section__content container">
          <h2 id="cta-heading" class="cta-section__heading">${esc(data.contact.heading)}</h2>
          <p class="cta-section__body">${esc(data.contact.body)}</p>
          <a href="mailto:${attr(data.contact.email)}" class="btn btn--on-deep">${esc(data.contact.cta)}${svgIcon("arrow-right", 18, 18)}</a>
          <p class="cta-section__email">${esc(data.contact.email)}</p>
        </div>

        ${renderSprig("cta-section__sprig")}
      </section>
    </main>

    <footer class="site-footer band band--deep">
      <p class="site-footer__text">
        ${footerText}
      </p>
    </footer>

  </body>
</html>
`;
}

function build() {
  const publicDir = path.join(__dirname, "..", "public");
  const enDir = path.join(publicDir, "en");
  fs.mkdirSync(enDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, "index.html"), render(pt));
  fs.writeFileSync(path.join(enDir, "index.html"), render(en));

  console.log("Built public/index.html and public/en/index.html");
}

if (require.main === module) {
  build();
}

module.exports = { render, build, esc, attr };
