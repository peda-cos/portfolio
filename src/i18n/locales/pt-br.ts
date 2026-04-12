export const ptBr = {
  meta: {
    title: 'Pedro Monteiro — Engenheiro Full-Stack',
    description:
      'Engenheiro full-stack com experiência em todo o ciclo de vida de aplicações — da arquitetura ao deploy. Especialista em TypeScript, Go, Angular, React e DevOps.',
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
    sub: 'Da arquitetura ao deploy — full-stack, orientado a produto e apaixonado por código bem feito.',
  },
  value: {
    eyebrow: 'O que eu faço',
    heading: 'Tecnologia que serve ao produto',
    summary:
      'Tenho experiência em todo o ciclo de vida de aplicações — da modelagem de dados e APIs ao frontend e infraestrutura. Gosto de ownership real: entender o problema, iterar rápido e entregar algo que funciona.',
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
        period: 'Fev 2025 – Presente',
        highlights: [
          'Entrega de features web completas com Angular (frontend) e Go/Node.js (backend), do ticket até produção',
          'Componentes frontend escaláveis integrados a APIs RESTful, com foco em performance e confiabilidade',
          'Pipelines de CI/CD e containerização com Docker para agilizar deploy e reduzir fricção',
          'Code reviews entre pares e colaboração cross-funcional com stakeholders',
        ],
      },
      {
        company: 'Secretaria Municipal da Saúde — SP',
        role: 'Estagiário de Desenvolvimento',
        period: 'Out 2023 – Fev 2025',
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
        degree: 'Engenharia de Software — Programa Intensivo',
        period: 'Out 2024 – Set 2026 (em andamento)',
        description:
          'Escola baseada em peer-to-peer e projetos práticos. Cobre C, C++, algoritmos, sistemas UNIX/POSIX, redes, web full-stack e trabalho colaborativo.',
        highlights: [
          'minishell',
          'Philosophers',
          'cub3D',
          'Inception',
          'NetPractice',
          'Born2beroot',
          'CPP 00–09',
        ],
      },
      {
        name: 'UNINOVE',
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        period: 'Jan 2023 – Jun 2025',
        description:
          'Formação full-stack cobrindo engenharia de software, modelagem UML, bancos de dados, metodologias ágeis (Scrum/Kanban) e implantação de sistemas.',
      },
    ],
  },
  cta: {
    eyebrow: 'Vamos conversar',
    heading: 'Disponível para novas oportunidades',
    body: 'Se você está construindo algo interessante e precisa de alguém que entregue de verdade — mande uma mensagem.',
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
  },
} as const;
