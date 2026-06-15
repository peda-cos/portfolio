// Content for the bilingual portfolio pages.
// This is the single source of truth for both locales.

const pt = {
  lang: 'pt-BR',
  basePath: '',
  assetsPrefix: 'assets/',
  title: 'Pedro Monteiro, Engenheiro Full-Stack',
  description:
    'Engenheiro full-stack com experiência em todo o ciclo de vida de aplicações, da arquitetura ao deploy. Especialista em TypeScript, Go, Angular, React e DevOps.',
  ogImageAlt: 'Pedro Monteiro, Engenheiro Full-Stack imagem de pré-visualização social',
  jobTitle: 'Engenheiro Full-Stack',
  sameAs: [
    'https://linkedin.com/in/pedrocsmonteiro',
    'https://github.com/peda-cos',
  ],

  skipLink: 'Ir para o conteúdo principal',
  language: {
    href: 'en/',
    label: 'Switch to English',
    text: 'English',
  },

  hero: {
    eyebrow: 'Engenheiro de software',
    name: 'Pedro Monteiro',
    tagline: 'Construo produtos do início ao fim.',
    summary:
      'Da arquitetura ao deploy: full-stack, orientado a produto e comprometido com código bem feito.',
    cta: 'Entrar em contato',
    linkedinLabel: 'Perfil no LinkedIn (abre em nova aba)',
    linkedinText: 'LinkedIn',
    githubLabel: 'Perfil no GitHub (abre em nova aba)',
    githubText: 'github.com/peda-cos',
    location: 'São Paulo, SP, Brasil',
  },

  value: {
    eyebrow: 'O que eu faço',
    heading: 'Tecnologia que serve ao produto',
    summary:
      'Tenho experiência em todo o ciclo de vida de aplicações, da modelagem de dados e APIs ao frontend e à infraestrutura. Gosto de ter responsabilidade real: entender o problema, iterar rapidamente e entregar algo que funciona.',
    cards: [
      {
        icon: 'monitor',
        title: 'Frontend',
        skills: ['Angular', 'React', 'Svelte', 'TypeScript', 'HTML/CSS'],
      },
      {
        icon: 'database',
        title: 'Backend & APIs',
        skills: ['Go', 'Node.js', 'Python', 'APIs RESTful', 'PostgreSQL'],
      },
      {
        icon: 'activity',
        title: 'Sistemas & Infra',
        skills: ['Docker', 'CI/CD', 'Linux', 'C', 'C++'],
      },
      {
        icon: 'users',
        title: 'Forma de trabalhar',
        skills: ['Code review', 'Async', 'Cross-funcional'],
      },
    ],
  },

  experience: {
    eyebrow: 'Experiência',
    heading: 'Onde já atuei',
    jobs: [
      {
        company: 'Máquinas Furlan Ltda.',
        period: 'Fev 2025 a Presente',
        role: 'Desenvolvedor de Software Júnior',
        highlights: [
          'Entrega de features web completas com Angular (frontend) e Go/Node.js (backend), do ticket até produção',
          'Componentes frontend escaláveis integrados a APIs RESTful, com foco em performance e confiabilidade',
          'Pipelines de CI/CD e containerização com Docker para agilizar deploy e reduzir fricção',
          'Code reviews entre pares e colaboração cross-funcional com stakeholders',
        ],
      },
      {
        company: 'Secretaria Municipal da Saúde de SP',
        period: 'Out 2023 a Fev 2025',
        role: 'Estagiário de Desenvolvimento',
        highlights: [
          'Automação de processos administrativos, reduzindo overhead manual e aumentando throughput',
          'Design e otimização de schemas e queries PostgreSQL para integridade e performance',
          'Dashboards de análise de dados para tomada de decisão baseada em evidências',
        ],
      },
    ],
  },

  craft: {
    eyebrow: 'Formação',
    heading: 'Como me tornei quem sou',
    summary:
      'Aprendo melhor construindo coisas reais e recebendo feedback de colegas. A 42 me ensinou a depurar problemas complexos e a UNINOVE me deu a base teórica formal. Os dois juntos moldam a forma como penso sobre software.',
    schools: [
      {
        name: '42 São Paulo',
        period: 'Out 2024 a Set 2026 (em andamento)',
        degree: 'Engenharia de Software, Programa Intensivo',
        description:
          'Escola baseada em peer-to-peer e projetos práticos. Cobre C, C++, algoritmos, sistemas UNIX/POSIX, redes, web full-stack e trabalho colaborativo.',
        projects: [
          { name: 'Libft', url: 'https://github.com/peda-cos/libft' },
          { name: 'ft_printf', url: 'https://github.com/peda-cos/ft_printf' },
          { name: 'get_next_line', url: 'https://github.com/peda-cos/get_next_line' },
          { name: 'Born2beroot', url: 'https://github.com/peda-cos/Born2beroot' },
          { name: 'push_swap', url: 'https://github.com/peda-cos/push_swap' },
          { name: 'pipex', url: 'https://github.com/peda-cos/pipex' },
          { name: 'FdF', url: 'https://github.com/peda-cos/FdF' },
          { name: 'minishell', url: 'https://github.com/peda-cos/minishell' },
          { name: 'Philosophers', url: 'https://github.com/peda-cos/Philosophers' },
          { name: 'cub3d', url: 'https://github.com/jonnathan-ls/42-cursus-cub3d' },
          { name: 'NetPractice', url: 'https://github.com/peda-cos/NetPractice' },
          { name: 'CPP Modules', url: 'https://github.com/peda-cos/CPP_Modules' },
          { name: 'Inception', url: 'https://github.com/peda-cos/Inception' },
        ],
      },
      {
        name: 'UNINOVE',
        period: 'Jan 2023 a Jun 2025',
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        description:
          'Formação full-stack cobrindo engenharia de software, modelagem UML, bancos de dados, metodologias ágeis (Scrum/Kanban) e implantação de sistemas.',
      },
    ],
  },

  contact: {
    eyebrow: 'Vamos conversar',
    heading: 'Disponível para novas oportunidades',
    body:
      'Se você está construindo algo interessante e precisa de alguém que entregue de verdade. Mande uma mensagem.',
    cta: 'Enviar e-mail',
    email: 'pedrocsmonteiro@gmail.com',
  },

  footer: {
    html: 'HTML',
    css: 'CSS',
    text: 'Feito com {{html}} e {{css}} puros.',
    htmlUrl: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    cssUrl: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },

  newTab: ' (abre em nova aba)',
};

const en = {
  lang: 'en',
  basePath: 'en/',
  assetsPrefix: '../assets/',
  title: 'Pedro Monteiro, Full-Stack Engineer',
  description:
    'Full-stack engineer with experience across the entire application lifecycle, from architecture to deployment. Specialising in TypeScript, Go, Angular, React and DevOps.',
  ogImageAlt: 'Pedro Monteiro, Full-Stack Engineer social preview image',
  jobTitle: 'Full-Stack Engineer',
  sameAs: pt.sameAs,

  skipLink: 'Skip to main content',
  language: {
    href: '../',
    label: 'Switch to Português',
    text: 'Português',
  },

  hero: {
    eyebrow: 'Software engineer',
    name: pt.hero.name,
    tagline: 'I build products end to end.',
    summary:
      'From architecture to deployment: full-stack, product-oriented, and focused on well-crafted code.',
    cta: 'Get in touch',
    linkedinLabel: 'LinkedIn profile (opens in new tab)',
    linkedinText: 'LinkedIn',
    githubLabel: 'GitHub profile (opens in new tab)',
    githubText: 'github.com/peda-cos',
    location: 'São Paulo, SP, Brazil',
  },

  value: {
    eyebrow: 'What I do',
    heading: 'Technology that serves the product',
    summary:
      'I have experience across the full application lifecycle, from data modelling and APIs to frontend and infrastructure. I like real ownership: understand the problem, iterate quickly, and ship something that works.',
    cards: [
      {
        icon: 'monitor',
        title: 'Frontend',
        skills: ['Angular', 'React', 'Svelte', 'TypeScript', 'HTML/CSS'],
      },
      {
        icon: 'database',
        title: 'Backend & APIs',
        skills: ['Go', 'Node.js', 'Python', 'RESTful APIs', 'PostgreSQL'],
      },
      {
        icon: 'activity',
        title: 'Systems & Infra',
        skills: ['Docker', 'CI/CD', 'Linux', 'C', 'C++'],
      },
      {
        icon: 'users',
        title: 'Ways of working',
        skills: ['Code review', 'Async', 'Cross-functional'],
      },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    heading: 'Where I have worked',
    jobs: [
      {
        company: 'Máquinas Furlan Ltda.',
        period: 'Feb 2025 to Present',
        role: 'Junior Software Developer',
        highlights: [
          'Delivered complete web features using Angular (frontend) and Go/Node.js (backend), with full ownership from ticket to production',
          'Built scalable, modular frontend components integrated with RESTful APIs, prioritising performance and reliability',
          'Implemented CI/CD workflows and containerisation with Docker to streamline deployment and reduce friction',
          'Participated in peer code reviews and cross-functional collaboration with stakeholders',
        ],
      },
      {
        company: 'São Paulo Municipal Health Secretariat',
        period: 'Oct 2023 to Feb 2025',
        role: 'Development Intern',
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
    summary:
      'I learn best by building real things and getting feedback from peers. 42 taught me to debug complex problems and UNINOVE gave me the formal foundation. Both together shape how I think about software.',
    schools: [
      {
        name: '42 São Paulo',
        period: 'Oct 2024 to Sep 2026 (in progress)',
        degree: 'Software Engineering, Intensive Program',
        description:
          'Peer-to-peer school with no teachers, built on practical projects. Covers C, C++, algorithms, UNIX/POSIX systems, networking, full-stack web, and collaborative teamwork.',
        projects: pt.craft.schools[0].projects,
      },
      {
        name: 'UNINOVE',
        period: 'Jan 2023 to Jun 2025',
        degree: 'B.Tech in Systems Analysis & Development',
        description:
          'Full-stack programme covering software engineering, UML modelling, databases, agile methodologies (Scrum/Kanban), and deployment and maintenance of computational systems.',
      },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    heading: 'Open to new opportunities',
    body:
      "If you're building something interesting and need someone who genuinely delivers. Reach out.",
    cta: 'Send an email',
    email: 'pedrocsmonteiro@gmail.com',
  },

  footer: {
    html: 'HTML',
    css: 'CSS',
    text: 'Built with plain {{html}} and {{css}}.',
    htmlUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    cssUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },

  newTab: ' (opens in new tab)',
};

module.exports = { pt, en };
