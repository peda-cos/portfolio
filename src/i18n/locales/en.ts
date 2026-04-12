export const en = {
  meta: {
    title: 'Pedro Monteiro, Full-Stack Engineer',
    description:
      'Full-stack engineer with experience across the entire application lifecycle, from architecture to deployment. Specialising in TypeScript, Go, Angular, React and DevOps.',
    ogImageAlt: 'Pedro Monteiro, Full-Stack Engineer social preview image',
    jsonLd: {
      name: 'Pedro Monteiro',
      email: 'pedrocsmonteiro@gmail.com',
      jobTitle: 'Full-Stack Engineer',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
      sameAs: ['https://linkedin.com/in/pedrocsmonteiro', 'https://github.com/peda-cos'],
    },
  },
  nav: {
    ariaLabel: 'Main navigation',
    switchLang: 'Português',
  },
  header: {
    name: 'Pedro Monteiro',
    location: 'São Paulo, SP, Brazil',
    email: 'pedrocsmonteiro@gmail.com',
    linkedin: 'linkedin.com/in/pedrocsmonteiro',
    github: 'github.com/peda-cos',
  },
  hero: {
    eyebrow: 'Software engineer',
    tagline: 'I build products end to end.',
    sub: 'From architecture to deployment: full-stack, product-oriented, and focused on well-crafted code.',
  },
  value: {
    eyebrow: 'What I do',
    heading: 'Technology that serves the product',
    summary:
      'I have experience across the full application lifecycle, from data modelling and APIs to frontend and infrastructure. I like real ownership: understand the problem, iterate quickly, and ship something that works.',
    clusters: [
      {
        name: 'Frontend',
        items: ['Angular', 'React', 'Svelte', 'TypeScript', 'HTML/CSS'],
      },
      {
        name: 'Backend & APIs',
        items: ['Go', 'Node.js', 'Python', 'RESTful APIs', 'PostgreSQL'],
      },
      {
        name: 'Systems & Infra',
        items: ['Docker', 'CI/CD', 'Linux', 'C', 'C++'],
      },
      {
        name: 'Ways of working',
        items: ['Code review', 'Async', 'Cross-functional', 'Technical docs'],
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    heading: 'Where I have worked',
    positions: [
      {
        company: 'Máquinas Furlan Ltda.',
        role: 'Junior Software Developer',
        period: 'Feb 2025 to Present',
        highlights: [
          'Delivered complete web features using Angular (frontend) and Go/Node.js (backend), with full ownership from ticket to production',
          'Built scalable, modular frontend components integrated with RESTful APIs, prioritising performance and reliability',
          'Implemented CI/CD workflows and containerisation with Docker to streamline deployment and reduce friction',
          'Participated in peer code reviews and cross-functional collaboration with stakeholders',
        ],
      },
      {
        company: 'São Paulo Municipal Health Secretariat',
        role: 'Development Intern',
        period: 'Oct 2023 to Feb 2025',
        highlights: [
          'Automated administrative processes, reducing manual overhead and increasing operational throughput',
          'Designed and optimised PostgreSQL schemas and queries for data integrity and performance',
          'Built data analysis pipelines and reporting dashboards to support evidence-based decision-making',
        ],
      },
    ],
  },
  craft: {
    eyebrow: 'Education',
    heading: 'How I got here',
    narrative:
      'I learn best by building real things and getting feedback from peers. 42 taught me to debug complex problems and UNINOVE gave me the formal foundation. Both together shape how I think about software.',
    institutions: [
      {
        name: '42 São Paulo',
        degree: 'Software Engineering, Intensive Program',
        period: 'Oct 2024 to Sep 2026 (in progress)',
        description:
          'Peer-to-peer school with no teachers, built on practical projects. Covers C, C++, algorithms, UNIX/POSIX systems, networking, full-stack web, and collaborative teamwork.',
        highlights: [
          'minishell',
          'Philosophers',
          'cub3D',
          'Inception',
          'NetPractice',
          'Born2beroot',
          'CPP 00-09',
        ],
      },
      {
        name: 'UNINOVE',
        degree: 'B.Tech in Systems Analysis & Development',
        period: 'Jan 2023 to Jun 2025',
        description:
          'Full-stack programme covering software engineering, UML modelling, databases, agile methodologies (Scrum/Kanban), and deployment and maintenance of computational systems.',
      },
    ],
  },
  cta: {
    eyebrow: "Let's talk",
    heading: 'Open to new opportunities',
    body: "If you're building something interesting and need someone who genuinely delivers. Reach out.",
    primary: 'Get in touch',
    action: 'Send an email',
  },
  footer: {
    builtWith: 'Built with',
    svelte: ',',
    tailwind: ' and',
    period: '.',
  },
  a11y: {
    skipToContent: 'Skip to main content',
    opensInNewTab: '(opens in new tab)',
    linkedinProfile: 'LinkedIn profile',
    githubProfile: 'GitHub profile',
  },
} as const;
