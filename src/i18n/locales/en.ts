export const en = {
  meta: {
    title: 'Pedro Monteiro - Full-Stack Engineer',
    description:
      'Full stack engineer with experience across the entire application lifecycle, from architecture to deployment. Background in systems programming (C/C++), web development (Angular, Go, Node.js, TypeScript, React, Python/Django), and DevOps tooling (Docker, CI/CD, PostgreSQL).',
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
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    switchLang: 'Português',
  },
  header: {
    name: 'Pedro Monteiro',
    role: 'Full-Stack Engineer',
    location: 'São Paulo, SP, Brazil',
    email: 'pedrocsmonteiro@gmail.com',
    linkedin: 'linkedin.com/in/pedrocsmonteiro',
    github: 'github.com/peda-cos',
  },
  summary: {
    heading: 'Summary',
    content:
      'Full stack engineer with experience across the entire application lifecycle, from architecture to deployment. Background in systems programming (C/C++), web development (Angular, Go, Node.js, TypeScript, React, Python/Django), and DevOps tooling (Docker, CI/CD, PostgreSQL). Comfortable with full product ownership: talking to users, iterating quickly, and shipping. Oriented toward async delivery, cross-functional teamwork, and peer-reviewed code.',
  },
  skills: {
    heading: 'Skills',
    categories: [
      {
        name: 'Languages',
        items: ['C', 'C++', 'Python', 'TypeScript', 'JavaScript', 'Go', 'SQL'],
      },
      {
        name: 'Frontend',
        items: ['Angular', 'React', 'Svelte', 'HTML/CSS'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'Go', 'RESTful APIs'],
      },
      {
        name: 'Systems & Infra',
        items: [
          'Linux',
          'Docker',
          'CI/CD',
          'UNIX system calls',
          'Process management',
          'IP routing / Subnetting',
          'SSH',
          'Firewall configuration',
        ],
      },
      {
        name: 'Databases',
        items: ['PostgreSQL (schema design, query optimization)'],
      },
      {
        name: 'Concepts',
        items: [
          'OOP',
          'Memory management',
          'Concurrency (POSIX threads / mutexes)',
          'Data structures & algorithms',
          'MVC',
          'STL containers',
          'Templates',
          'Exception handling',
          'Raycasting / graphics pipeline',
        ],
      },
      {
        name: 'Soft Skills',
        items: [
          'Async communication',
          'Peer-reviewed code ownership',
          'Cross-functional collaboration',
          'Technical documentation',
        ],
      },
    ],
  },
  experience: {
    heading: 'Professional Experience',
    positions: [
      {
        company: 'Máquinas Furlan Ltda.',
        role: 'Junior Software Developer',
        period: 'Feb 2025 – Present',
        summary:
          'Full-stack development in agile teams with end-to-end ownership across conception, implementation, deployment, and iteration.',
        highlights: [
          'Delivered complete web features using Angular (frontend) and Go/Node.js (backend), with ownership from ticket scope through production',
          'Built scalable, modular frontend components integrated with RESTful APIs, prioritizing performance and reliability',
          'Implemented CI/CD workflows and containerization with Docker to streamline deployment and reduce integration friction',
          'Participated in peer code reviews and cross-functional collaboration with stakeholders',
        ],
      },
      {
        company: 'Secretaria Municipal da Saúde de São Paulo',
        role: 'Development Intern',
        period: 'Oct 2023 – Feb 2025',
        summary:
          'Built internal tooling to optimize administrative workflows within public health systems, shipping measurable efficiency improvements.',
        highlights: [
          'Automated administrative processes, reducing manual overhead and increasing operational throughput',
          'Designed and optimized PostgreSQL schemas and queries targeting data integrity and performance',
          'Built data analysis pipelines and reporting dashboards to support evidence-based decision-making',
        ],
      },
    ],
  },
  education: {
    heading: 'Education',
    institutions: [
      {
        name: '42 São Paulo',
        degree: 'Software Engineering — Intensive Program',
        period: 'Oct 2024 – Sep 2026 (in progress) | Rank 5 of Core Curriculum completed',
        description:
          'Technology school based on peer-to-peer learning and hands-on projects, with no teachers or formal classes. Curriculum covers imperative programming in C, object-oriented programming in C++, algorithms and data structures, systems programming (Unix/POSIX), Linux network and server administration, full stack web development, and collaborative teamwork methodologies.',
        projects: [
          {
            name: 'minishell',
            description:
              'POSIX-compliant shell in C: command parsing, env variable handling, pipes, redirections, signal management. Group project.',
          },
          {
            name: 'Philosophers',
            description:
              'Dining philosophers in C using POSIX threads and mutexes; race condition analysis, deadlock avoidance, concurrent execution.',
          },
          {
            name: 'cub3D',
            description:
              'Raycasting-based 3D maze engine in C inspired by Wolfenstein 3D; full graphics pipeline, texture rendering, event-driven input. Group project.',
          },
          {
            name: 'CPP Modules 00–09',
            description:
              'Full C++ curriculum: OOP, inheritance, polymorphism, abstract classes, exception handling, templates, STL containers.',
          },
          {
            name: 'Inception',
            description:
              'Containerized multi-service infrastructure using Docker and Docker Compose: Nginx, WordPress, MariaDB, custom network and volume configuration.',
          },
          {
            name: 'NetPractice',
            description: 'IP routing and subnetting across functional network topologies.',
          },
          {
            name: 'Born2beroot',
            description:
              'Linux virtualization and sysadmin: user/group management, sudo policies, SSH hardening, firewall configuration.',
          },
        ],
        skillsDeveloped:
          'Algorithms & data structures, imperative and OOP programming, system programming, network & sysadmin, graphics, concurrent programming, peer collaboration.',
      },
      {
        name: 'UNINOVE',
        degree: 'B.Tech in Systems Analysis & Development',
        period: 'Jan 2023 – Jun 2025',
        description:
          'Full stack training course covering front-end and back-end development, programming logic, software engineering, systems modeling (UML/RUP), databases, agile methodologies (Scrum/Kanban), and deployment and maintenance of computational systems.',
      },
    ],
  },
  footer: {
    builtWith: 'Built with',
    and: 'and',
  },
  a11y: {
    skipToContent: 'Skip to main content',
    opensInNewTab: '(opens in new tab)',
  },
} as const;
