export const ptBr = {
  meta: {
    title: 'Pedro Monteiro - Engenheiro Full-Stack',
    description:
      'Engenheiro full stack com experiência em todo o ciclo de vida de aplicações, da arquitetura ao deploy. Background em programação de sistemas (C/C++), desenvolvimento web (Angular, Go, Node.js, TypeScript, React, Python/Django) e tooling de DevOps (Docker, CI/CD, PostgreSQL).',
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
    summary: 'Resumo',
    skills: 'Habilidades',
    experience: 'Experiência',
    education: 'Formação',
    switchLang: 'English',
  },
  header: {
    name: 'Pedro Monteiro',
    role: 'Engenheiro Full-Stack',
    location: 'São Paulo, SP, Brasil',
    email: 'pedrocsmonteiro@gmail.com',
    linkedin: 'linkedin.com/in/pedrocsmonteiro',
    github: 'github.com/peda-cos',
  },
  summary: {
    heading: 'Resumo',
    content:
      'Engenheiro full stack com experiência em todo o ciclo de vida de aplicações, da arquitetura ao deploy. Background em programação de sistemas (C/C++), desenvolvimento web (Angular, Go, Node.js, TypeScript, React, Python/Django) e tooling de DevOps (Docker, CI/CD, PostgreSQL). Confortável com ownership completo do produto: conversar com usuários, iterar rapidamente e entregar. Orientado para entrega assíncrona, trabalho cross-funcional e código com peer review.',
  },
  skills: {
    heading: 'Habilidades',
    categories: [
      {
        name: 'Linguagens',
        items: ['C', 'C++', 'Python', 'TypeScript', 'JavaScript', 'Go', 'SQL'],
      },
      {
        name: 'Frontend',
        items: ['Angular', 'React', 'Svelte', 'HTML/CSS'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'Go', 'APIs RESTful'],
      },
      {
        name: 'Sistemas & Infra',
        items: [
          'Linux',
          'Docker',
          'CI/CD',
          'System calls UNIX',
          'Gerenciamento de processos',
          'Roteamento IP / Sub-redes',
          'SSH',
          'Configuração de firewall',
        ],
      },
      {
        name: 'Bancos de Dados',
        items: ['PostgreSQL (design de schema, otimização de queries)'],
      },
      {
        name: 'Conceitos',
        items: [
          'OOP',
          'Gerenciamento de memória',
          'Concorrência (threads POSIX / mutexes)',
          'Estruturas de dados & algoritmos',
          'MVC',
          'Containers STL',
          'Templates',
          'Tratamento de exceções',
          'Raycasting / pipeline gráfico',
        ],
      },
      {
        name: 'Soft Skills',
        items: [
          'Comunicação assíncrona',
          'Code ownership com peer review',
          'Colaboração cross-funcional',
          'Documentação técnica',
        ],
      },
    ],
  },
  experience: {
    heading: 'Experiência Profissional',
    positions: [
      {
        company: 'Máquinas Furlan Ltda.',
        role: 'Desenvolvedor de Software Júnior',
        period: 'Fev 2025 – Presente',
        summary:
          'Desenvolvimento full-stack em equipes ágeis com ownership de ponta a ponta, abrangendo concepção, implementação, deploy e iteração.',
        highlights: [
          'Entrega de funcionalidades web completas usando Angular (frontend) e Go/Node.js (backend), com ownership do escopo desde o ticket até produção',
          'Construção de componentes frontend escaláveis e modulares integrados a APIs RESTful, priorizando performance e confiabilidade',
          'Implementação de workflows de CI/CD e containerização com Docker para otimizar deploy e reduzir fricção de integração',
          'Participação em code reviews entre pares e colaboração cross-funcional com stakeholders',
        ],
      },
      {
        company: 'Secretaria Municipal da Saúde de São Paulo',
        role: 'Estagiário de Desenvolvimento',
        period: 'Out 2023 – Fev 2025',
        summary:
          'Construção de ferramentas internas para otimizar fluxos administrativos em sistemas de saúde pública, entregando melhorias mensuráveis de eficiência.',
        highlights: [
          'Automação de processos administrativos, reduzindo overhead manual e aumentando throughput operacional',
          'Design e otimização de schemas e queries PostgreSQL para integridade de dados e performance',
          'Construção de pipelines de análise de dados e dashboards de relatórios para tomada de decisão baseada em evidências',
        ],
      },
    ],
  },
  education: {
    heading: 'Formação',
    institutions: [
      {
        name: '42 São Paulo',
        degree: 'Engenharia de Software — Programa Intensivo',
        period: 'Out 2024 – Set 2026 (em andamento) | Rank 5 do Core Curriculum concluído',
        description:
          'Escola de tecnologia baseada em aprendizado peer-to-peer e projetos práticos, sem professores ou aulas formais. O currículo abrange programação imperativa em C, programação orientada a objetos em C++, algoritmos e estruturas de dados, programação de sistemas (Unix/POSIX), administração de redes e servidores Linux, desenvolvimento web full stack e metodologias de trabalho colaborativo.',
        projects: [
          {
            name: 'minishell',
            description:
              'Shell POSIX-compliant em C: parsing de comandos, variáveis de ambiente, pipes, redirecionamentos, gerenciamento de sinais. Projeto em grupo.',
          },
          {
            name: 'Philosophers',
            description:
              'Jantar dos filósofos em C usando threads POSIX e mutexes; análise de race conditions, deadlock avoidance, execução concorrente.',
          },
          {
            name: 'cub3D',
            description:
              'Engine 3D baseada em raycasting em C inspirada no Wolfenstein 3D; pipeline gráfico completo, renderização de texturas, input event-driven. Projeto em grupo.',
          },
          {
            name: 'CPP Modules 00–09',
            description:
              'Currículo completo de C++: OOP, herança, polimorfismo, classes abstratas, tratamento de exceções, templates, containers STL.',
          },
          {
            name: 'Inception',
            description:
              'Infraestrutura multi-serviço containerizada com Docker e Docker Compose: Nginx, WordPress, MariaDB, configuração de rede e volumes customizados.',
          },
          {
            name: 'NetPractice',
            description: 'Roteamento IP e sub-redes em topologias de rede funcionais.',
          },
          {
            name: 'Born2beroot',
            description:
              'Virtualização Linux e sysadmin: gerenciamento de usuários/grupos, políticas sudo, hardening SSH, configuração de firewall.',
          },
        ],
        skillsDeveloped:
          'Algoritmos & estruturas de dados, programação imperativa e OOP, programação de sistemas, redes & sysadmin, computação gráfica, programação concorrente, colaboração entre pares.',
      },
      {
        name: 'UNINOVE',
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        period: 'Jan 2023 – Jun 2025',
        description:
          'Curso de formação full stack abrangendo desenvolvimento front-end e back-end, lógica de programação, engenharia de software, modelagem de sistemas (UML/RUP), bancos de dados, metodologias ágeis (Scrum/Kanban) e implantação e manutenção de sistemas computacionais.',
      },
    ],
  },
  footer: {
    builtWith: 'Feito com',
    and: 'e',
  },
  a11y: {
    skipToContent: 'Ir para o conteúdo principal',
    opensInNewTab: '(abre em nova aba)',
  },
} as const;
