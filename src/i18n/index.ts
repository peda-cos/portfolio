export type Locale = 'en' | 'pt';

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    education: string;
    projects: string;
    contact: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    toggleTheme: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
    viewProjects: string;
    downloadCV: string;
  };
  about: {
    heading: string;
    p1: string;
    p2: string;
    statsYears: string;
    statsProjects: string;
    statsTechnologies: string;
  };
  skills: {
    heading: string;
    frontend: string;
    backend: string;
    cloud: string;
    database: string;
    architecture: string;
    fundamentals: string;
    methodologies: string;
  };
  experience: {
    heading: string;
    present: string;
  };
  education: {
    heading: string;
    inProgress: string;
  };
  projects: {
    heading: string;
    subtitle: string;
    rank: string;
    grade: string;
    workload: string;
    hours: string;
    bonus: string;
    filterAll: string;
    filterByRank: string;
    gradeNote: string;
  };
  contact: {
    heading: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
    downloadCV: string;
    opensInNewTab: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
}

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: 'Pedro Monteiro - Full Stack Developer',
      description:
        'Full Stack Developer with experience in Angular, Java, Go, and scalable architectures. Software Engineering student at 42 São Paulo.',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: '42 Projects',
      contact: 'Contact',
      skipToContent: 'Skip to main content',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchLanguage: 'Português',
      toggleTheme: 'Toggle color theme',
    },
    hero: {
      greeting: 'Hello, I am',
      title: 'Pedro Monteiro',
      subtitle: 'Full Stack Developer | Software Engineer | Systems Analyst',
      cta: 'Get in touch',
      viewProjects: 'View my projects',
      downloadCV: 'Download CV',
    },
    about: {
      heading: 'About Me',
      p1: 'Full Stack Developer with hands-on experience building scalable web applications using Angular, Java, Go, and Node.js. Currently a Junior Developer at Máquinas Furlan, working across the entire development lifecycle from conception to deployment.',
      p2: 'Pursuing Software Engineering at 42 São Paulo, with a strong foundation in data structures, algorithms, and distributed systems design. Proven ability to learn new technologies quickly and deliver value in multidisciplinary environments using agile methodologies, CI/CD, and containerization with Docker.',
      statsYears: 'Years of Experience',
      statsProjects: '42 Projects Completed',
      statsTechnologies: 'Technologies',
    },
    skills: {
      heading: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud & DevOps',
      database: 'Databases',
      architecture: 'Architecture',
      fundamentals: 'Fundamentals',
      methodologies: 'Methodologies',
    },
    experience: {
      heading: 'Professional Experience',
      present: 'Present',
    },
    education: {
      heading: 'Education',
      inProgress: 'In Progress',
    },
    projects: {
      heading: '42 School Projects',
      subtitle:
        'Core curriculum projects completed at 42 São Paulo, a peer-learning software engineering program.',
      rank: 'Rank',
      grade: 'Grade',
      workload: 'Workload',
      hours: 'hours',
      bonus: 'Bonus',
      filterAll: 'All Ranks',
      filterByRank: 'Filter by rank',
      gradeNote:
        'Grades are on a 0-100 scale. A score of 100 reflects full mastery. Exceptional submissions may receive bonus points above 100. All evaluations are peer-reviewed.',
    },
    contact: {
      heading: 'Contact',
      subtitle: 'Feel free to reach out through any of the channels below.',
      email: 'Send an email',
      linkedin: 'Connect on LinkedIn',
      github: 'View GitHub profile',
      downloadCV: 'Download CV',
      opensInNewTab: 'Opens in a new tab',
    },
    footer: {
      builtWith: 'Built with Astro, Svelte, and TailwindCSS',
      rights: 'All rights reserved.',
    },
  },
  pt: {
    meta: {
      title: 'Pedro Monteiro - Desenvolvedor Full Stack',
      description:
        'Desenvolvedor Full Stack com experiência em Angular, Java, Go e arquiteturas escaláveis. Estudante de Engenharia de Software na 42 São Paulo.',
    },
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      education: 'Formação',
      projects: 'Projetos 42',
      contact: 'Contato',
      skipToContent: 'Ir para o conteúdo principal',
      openMenu: 'Abrir menu de navegação',
      closeMenu: 'Fechar menu de navegação',
      switchLanguage: 'English',
      toggleTheme: 'Alternar tema de cores',
    },
    hero: {
      greeting: 'Olá, eu sou',
      title: 'Pedro Monteiro',
      subtitle: 'Desenvolvedor Full Stack | Engenheiro de Software | Analista de Sistemas',
      cta: 'Entre em contato',
      viewProjects: 'Ver meus projetos',
      downloadCV: 'Baixar CV',
    },
    about: {
      heading: 'Sobre Mim',
      p1: 'Desenvolvedor Full Stack com experiência prática na construção de aplicações web escaláveis utilizando Angular, Java, Go e Node.js. Atualmente Desenvolvedor Júnior na Máquinas Furlan, atuando em todo o ciclo de desenvolvimento, da concepção à implantação.',
      p2: 'Cursando Engenharia de Software na 42 São Paulo, com base sólida em estruturas de dados, algoritmos e design de sistemas distribuídos. Capacidade demonstrada de aprender rapidamente novas tecnologias e entregar valor em ambientes multidisciplinares utilizando metodologias ágeis, CI/CD e containerização com Docker.',
      statsYears: 'Anos de Experiência',
      statsProjects: 'Projetos 42 Concluídos',
      statsTechnologies: 'Tecnologias',
    },
    skills: {
      heading: 'Habilidades',
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud & DevOps',
      database: 'Banco de Dados',
      architecture: 'Arquitetura',
      fundamentals: 'Fundamentos',
      methodologies: 'Metodologias',
    },
    experience: {
      heading: 'Experiência Profissional',
      present: 'Presente',
    },
    education: {
      heading: 'Formação',
      inProgress: 'Em andamento',
    },
    projects: {
      heading: 'Projetos 42 School',
      subtitle:
        'Projetos do currículo principal na 42 São Paulo, um programa de engenharia de software baseado em aprendizagem entre pares.',
      rank: 'Rank',
      grade: 'Nota',
      workload: 'Carga horária',
      hours: 'horas',
      bonus: 'Bônus',
      filterAll: 'Todos os Ranks',
      filterByRank: 'Filtrar por rank',
      gradeNote:
        'As notas são em escala de 0 a 100. Uma nota 100 reflete domínio completo. Entregas excepcionais podem receber pontos bônus acima de 100. Todas as avaliações são feitas por pares.',
    },
    contact: {
      heading: 'Contato',
      subtitle: 'Sinta-se à vontade para entrar em contato por qualquer um dos canais abaixo.',
      email: 'Enviar um e-mail',
      linkedin: 'Conectar no LinkedIn',
      github: 'Ver perfil no GitHub',
      downloadCV: 'Baixar CV',
      opensInNewTab: 'Abre em uma nova aba',
    },
    footer: {
      builtWith: 'Feito com Astro, Svelte e TailwindCSS',
      rights: 'Todos os direitos reservados.',
    },
  },
};

export function t(locale: Locale): Translation {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const path = url.pathname;
  if (path.startsWith('/pt')) return 'pt';
  return 'en';
}

export function getAlternateUrl(currentLocale: Locale): string {
  return currentLocale === 'en' ? '/pt/' : '/en/';
}
