export const ptBr = {
  meta: {
    title: 'Pedro Monteiro, Engenheiro Full-Stack',
    description:
      'Engenheiro full-stack com experiência em todo o ciclo de vida de aplicações, da arquitetura ao deploy. Especialista em TypeScript, Go, Angular, React e DevOps.',
    ogImageAlt: 'Pedro Monteiro, Engenheiro Full-Stack imagem de pré-visualização social',
    jsonLd: {
      name: 'Pedro Monteiro',
      email: 'pedrocsmonteiro@gmail.com',
      jobTitle: 'Engenheiro Full-Stack',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
      sameAs: ['https://linkedin.com/in/pedrocsmonteiro', 'https://github.com/peda-cos'],
    },
  },
  nav: {
    ariaLabel: 'Navegação principal',
    switchLang: 'English',
  },
  header: {
    name: 'Pedro Monteiro',
    location: 'São Paulo, SP, Brasil',
    email: 'pedrocsmonteiro@gmail.com',
    linkedin: 'linkedin.com/in/pedrocsmonteiro',
    github: 'github.com/peda-cos',
  },
  hero: {
    eyebrow: 'Engenheiro de software',
    tagline: 'Construo produtos do início ao fim.',
    sub: 'Da arquitetura ao deploy: full-stack, orientado a produto e comprometido com código bem feito.',
  },
  value: {
    eyebrow: 'O que eu faço',
    heading: 'Tecnologia que serve ao produto',
    summary:
      'Tenho experiência em todo o ciclo de vida de aplicações, da modelagem de dados e APIs ao frontend e infraestrutura. Gosto de ownership real: entender o problema, iterar rápido e entregar algo que funciona.',
    clusters: [
      {
        name: 'Frontend',
        items: ['Angular', 'React', 'Svelte', 'TypeScript', 'HTML/CSS'],
      },
      {
        name: 'Backend & APIs',
        items: ['Go', 'Node.js', 'Python', 'APIs RESTful', 'PostgreSQL'],
      },
      {
        name: 'Sistemas & Infra',
        items: ['Docker', 'CI/CD', 'Linux', 'C', 'C++'],
      },
      {
        name: 'Forma de trabalhar',
        items: ['Code review', 'Async', 'Cross-funcional', 'Docs técnica'],
      },
    ],
  },
  experience: {
    eyebrow: 'Experiência',
    heading: 'Onde já atuei',
    positions: [
      {
        company: 'Máquinas Furlan Ltda.',
        role: 'Desenvolvedor de Software Júnior',
        period: 'Fev 2025 a Presente',
        highlights: [
          'Entrega de features web completas com Angular (frontend) e Go/Node.js (backend), do ticket até produção',
          'Componentes frontend escaláveis integrados a APIs RESTful, com foco em performance e confiabilidade',
          'Pipelines de CI/CD e containerização com Docker para agilizar deploy e reduzir fricção',
          'Code reviews entre pares e colaboração cross-funcional com stakeholders',
        ],
      },
      {
        company: 'Secretaria Municipal da Saúde de SP',
        role: 'Estagiário de Desenvolvimento',
        period: 'Out 2023 a Fev 2025',
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
    narrative:
      'Aprendo melhor construindo coisas reais e com feedback de pares. A 42 me ensinou a depurar problemas complexos e a UNINOVE me deu a base formal. Os dois juntos moldam como eu penso sobre software.',
    institutions: [
      {
        name: '42 São Paulo',
        degree: 'Engenharia de Software, Programa Intensivo',
        period: 'Out 2024 a Set 2026 (em andamento)',
        description:
          'Escola baseada em peer-to-peer e projetos práticos. Cobre C, C++, algoritmos, sistemas UNIX/POSIX, redes, web full-stack e trabalho colaborativo.',
        highlights: [
          { label: 'Libft', url: 'https://github.com/peda-cos/libft' },
          { label: 'ft_printf', url: 'https://github.com/peda-cos/ft_printf' },
          { label: 'get_next_line', url: 'https://github.com/peda-cos/get_next_line' },
          { label: 'Born2beroot', url: 'https://github.com/peda-cos/Born2beroot' },
          { label: 'push_swap', url: 'https://github.com/peda-cos/push_swap' },
          { label: 'pipex', url: 'https://github.com/peda-cos/pipex' },
          { label: 'FdF', url: 'https://github.com/peda-cos/FdF' },
          { label: 'minishell', url: 'https://github.com/peda-cos/minishell' },
          { label: 'Philosophers', url: 'https://github.com/peda-cos/Philosophers' },
          { label: 'cub3d', url: 'https://github.com/jonnathan-ls/42-cursus-cub3d' },
          { label: 'NetPractice', url: 'https://github.com/peda-cos/NetPractice' },
          { label: 'CPP Modules', url: 'https://github.com/peda-cos/CPP_Modules' },
          { label: 'Inception', url: 'https://github.com/peda-cos/Inception' },
        ],
      },
      {
        name: 'UNINOVE',
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        period: 'Jan 2023 a Jun 2025',
        description:
          'Formação full-stack cobrindo engenharia de software, modelagem UML, bancos de dados, metodologias ágeis (Scrum/Kanban) e implantação de sistemas.',
      },
    ],
  },
  cta: {
    eyebrow: 'Vamos conversar',
    heading: 'Disponível para novas oportunidades',
    body: 'Se você está construindo algo interessante e precisa de alguém que entregue de verdade. Mande uma mensagem.',
    primary: 'Entrar em contato',
    action: 'Enviar e-mail',
  },
  footer: {
    builtWith: 'Feito com',
    svelte: ',',
    tailwind: ' e',
    period: '.',
  },
  a11y: {
    skipToContent: 'Ir para o conteúdo principal',
    opensInNewTab: '(abre em nova aba)',
    linkedinProfile: 'Perfil no LinkedIn',
    githubProfile: 'Perfil no GitHub',
  },
} as const;
