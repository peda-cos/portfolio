const fs = require('fs');
const path = require('path');
const { pt, en } = require('../src/content');

function iconSvg(name) {
  const svgs = {
    monitor:
      '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
    users:
      '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    globe:
      '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
    pin:
      '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
    building:
      '<path d="M3 21h18"></path><path d="M5 21V7l8-4 8 4v14"></path><path d="M9 21v-6h6v6"></path>',
    school:
      '<path d="M22 10v6"></path><path d="M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>',
  };
  return svgs[name] || '';
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

function shapePath(index) {
  const paths = [
    'M0,96 C180,96 360,36 540,66 C720,96 900,76 1080,46 C1260,16 1380,76 1440,96 L1440,96 L0,96 Z',
    'M0,96 C240,16 480,46 720,26 C960,6 1200,56 1440,96 L1440,96 L0,96 Z',
    'M0,96 C160,96 320,36 480,56 C640,76 800,16 960,36 C1120,56 1280,86 1440,96 L1440,96 L0,96 Z',
    'M0,96 C200,56 400,26 600,66 C800,106 1000,46 1220,76 C1340,91 1400,86 1440,96 L1440,96 L0,96 Z',
    'M0,96 C180,76 360,56 540,86 C720,116 900,56 1080,76 C1260,96 1380,86 1440,96 L1440,96 L0,96 Z',
  ];
  return paths[index % paths.length];
}

function renderShape(index, fillClass) {
  return `<div class="section-shape" aria-hidden="true">
          <svg viewBox="0 0 1440 96" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="${shapePath(index)}"
              fill="currentColor"
            ></path>
          </svg>
        </div>`;
}

function render(data) {
  const absoluteUrl = `https://peda-cos.github.io/portfolio/${data.basePath}`;
  const ptUrl = 'https://peda-cos.github.io/portfolio/';
  const enUrl = 'https://peda-cos.github.io/portfolio/en/';

  const cardsHtml = data.value.cards
    .map(
      (card) => `<article class="value-card">
              <div class="value-card__header">
                <span class="value-card__icon" aria-hidden="true">
                  ${svgIcon(card.icon)}
                </span>
                <h3 class="value-card__title">${card.title}</h3>
              </div>
              <ul class="value-card__skills" role="list">
                ${card.skills.map((s) => `<li class="value-card__skill">${s}</li>`).join('\n                ')}
              </ul>
            </article>`
    )
    .join('\n            ');

  const jobsHtml = data.experience.jobs
    .map(
      (job) => `<article class="experience-card">
              <span class="experience-card__accent" aria-hidden="true"></span>
              <div class="experience-card__header">
                <div class="experience-card__company-wrap">
                  <span class="experience-card__icon" aria-hidden="true">
                    ${svgIcon('building', 16, 16)}
                  </span>
                  <h3 class="experience-card__company">${job.company}</h3>
                </div>
                <span class="experience-card__period">${job.period}</span>
              </div>
              <p class="experience-card__role">${job.role}</p>
              <ul class="experience-card__highlights" role="list">
                ${job.highlights
                  .map(
                    (h) => `<li class="experience-card__highlight">
                  <span class="experience-card__bullet" aria-hidden="true"></span>
                  ${h}
                </li>`
                  )
                  .join('\n                ')}
              </ul>
            </article>`
    )
    .join('\n            ');

  const schoolsHtml = data.craft.schools
    .map(
      (school, idx) => `<article class="craft-card${idx === 0 ? ' craft-card--featured' : ''}">
              <div class="craft-card__header">
                <div class="craft-card__school-wrap">
                  <span class="craft-card__icon" aria-hidden="true">
                    ${svgIcon('school', 16, 16)}
                  </span>
                  <h3 class="craft-card__name">${school.name}</h3>
                </div>
                <span class="craft-card__period">${school.period}</span>
              </div>
              <p class="craft-card__degree">${school.degree}</p>
              <p class="craft-card__description">${school.description}</p>
              ${
                school.projects
                  ? `<ul class="craft-card__highlights" role="list">
                ${school.projects
                  .map(
                    (p) => `<li class="craft-card__highlight">
                  <a href="${p.url}" target="_blank" rel="noopener noreferrer">
                    ${p.name}<span class="sr-only">${data.newTab}</span>
                  </a>
                </li>`
                  )
                  .join('\n                ')}
              </ul>`
                  : ''
              }
            </article>`
    )
    .join('\n            ');

  const footerText = data.footer.text
    .replace('{{html}}', `<a class="footer-link-html" href="${data.footer.htmlUrl}" target="_blank" rel="noopener noreferrer">${data.footer.html}</a>`)
    .replace('{{css}}', `<a class="footer-link-css" href="${data.footer.cssUrl}" target="_blank" rel="noopener noreferrer">${data.footer.css}</a>`);

  return `<!doctype html>
<html lang="${data.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'none'; style-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; connect-src 'self'"
    />
    <link rel="icon" type="image/svg+xml" href="${data.assetsPrefix.replace('assets/', '')}favicon.svg" />

    <title>${data.title}</title>
    <meta name="title" content="${data.title}" />
    <meta
      name="description"
      content="${data.description}"
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${absoluteUrl}" />
    <meta property="og:title" content="${data.title}" />
    <meta
      property="og:description"
      content="${data.description}"
    />
    <meta property="og:image" content="https://peda-cos.github.io/portfolio/og-image.png" />
    <meta property="og:image:alt" content="${data.ogImageAlt}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${absoluteUrl}" />
    <meta name="twitter:title" content="${data.title}" />
    <meta
      name="twitter:description"
      content="${data.description}"
    />
    <meta name="twitter:image" content="https://peda-cos.github.io/portfolio/og-image.png" />
    <meta name="twitter:image:alt" content="${data.ogImageAlt}" />

    <link rel="canonical" href="${absoluteUrl}" />

    <link rel="preload" as="font" type="font/woff2" href="${data.assetsPrefix}fonts/dm-sans-latin.woff2" crossorigin />
    <link rel="preload" as="font" type="font/woff2" href="${data.assetsPrefix}fonts/source-serif-4-latin.woff2" crossorigin />

    <link rel="alternate" hreflang="pt-BR" href="${ptUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${ptUrl}" />

    <link rel="stylesheet" href="${data.assetsPrefix}css/main.css?v=3" />

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Pedro Monteiro",
        "url": "${ptUrl}",
        "email": "${data.contact.email}",
        "jobTitle": "${data.jobTitle}",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "sameAs": ${JSON.stringify(data.sameAs)}
      }
    </script>
  </head>
  <body>
    <a href="#main-content" class="skip-link">${data.skipLink}</a>

    <main id="main-content" tabindex="-1">
      <section id="hero" aria-labelledby="hero-name" class="hero section--shape section--shape-dark section--bg-light section--spaced-light">
        <a href="${data.language.href}" aria-label="${data.language.label}" class="language-switcher hero__language">
          ${svgIcon('globe', 13, 13)}
          <span>${data.language.text}</span>
        </a>

        <div class="hero__content container container--wide">
          <p class="hero__eyebrow">${data.hero.eyebrow}</p>
          <h1 id="hero-name" class="hero__title">${data.hero.name}</h1>
          <p class="hero__tagline">${data.hero.tagline}</p>
          <p class="hero__summary">${data.hero.summary}</p>

          <div class="hero__actions">
            <a href="mailto:${data.contact.email}" class="btn-primary">${data.hero.cta}</a>
            <a
              href="https://linkedin.com/in/pedrocsmonteiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${data.hero.linkedinLabel}"
              class="hero__social-link"
            >
              ${data.hero.linkedinText}
            </a>
          </div>

          <div class="hero__meta">
            <span class="hero__meta-item">
              ${svgIcon('pin', 14, 14)}
              ${data.hero.location}
            </span>
            <a
              href="https://github.com/peda-cos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${data.hero.githubLabel}"
              class="hero__meta-link"
            >
              ${svgIcon('github', 14, 14)}
              ${data.hero.githubText}
            </a>
          </div>
        </div>

        ${renderShape(0, 'dark')}
      </section>

      <section id="value" aria-labelledby="value-heading" class="section value-section section--shape section--shape-light section--bg-dark section--spaced-dark">
        <div class="container">
          <p class="section__eyebrow">${data.value.eyebrow}</p>
          <h2 id="value-heading" class="section__heading">${data.value.heading}</h2>
          <p class="section__summary">${data.value.summary}</p>

          <div class="value-grid">
            ${cardsHtml}
          </div>
        </div>

        ${renderShape(1, 'light')}
      </section>

      <section id="experience" aria-labelledby="experience-heading" class="section experience-section section--shape section--shape-dark section--bg-light section--spaced-light">
        <div class="container">
          <p class="section__eyebrow">${data.experience.eyebrow}</p>
          <h2 id="experience-heading" class="section__heading">${data.experience.heading}</h2>

          <div class="experience-list">
            ${jobsHtml}
          </div>
        </div>

        ${renderShape(2, 'dark')}
      </section>

      <section id="craft" aria-labelledby="craft-heading" class="section craft-section section--shape section--shape-light section--bg-dark section--spaced-dark">
        <div class="container">
          <p class="section__eyebrow">${data.craft.eyebrow}</p>
          <h2 id="craft-heading" class="section__heading">${data.craft.heading}</h2>
          <p class="section__summary">${data.craft.summary}</p>

          <div class="craft-list">
            ${schoolsHtml}
          </div>
        </div>

        ${renderShape(3, 'light')}
      </section>

      <section id="contact" aria-labelledby="cta-heading" class="cta-section section--shape section--shape-dark section--bg-light section--spaced-light">
        <div class="cta-section__content container">
          <p class="cta-section__eyebrow">${data.contact.eyebrow}</p>
          <h2 id="cta-heading" class="cta-section__heading">${data.contact.heading}</h2>
          <p class="cta-section__body">${data.contact.body}</p>
          <a href="mailto:${data.contact.email}" class="cta-section__action">${data.contact.cta}</a>
          <p class="cta-section__email">${data.contact.email}</p>
        </div>

        ${renderShape(4, 'dark')}
      </section>
    </main>

    <footer class="site-footer section--bg-dark">
      <p class="site-footer__text">
        ${footerText}
      </p>
    </footer>

  </body>
</html>
`;
}

function build() {
  const publicDir = path.join(__dirname, '..', 'public');
  const enDir = path.join(publicDir, 'en');
  fs.mkdirSync(enDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, 'index.html'), render(pt));
  fs.writeFileSync(path.join(enDir, 'index.html'), render(en));

  console.log('Built public/index.html and public/en/index.html');
}

build();
