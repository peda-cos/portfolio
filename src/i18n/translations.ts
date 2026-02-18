export const languages = {
  'pt-br': 'Português',
  en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const translations = {
  'pt-br': {
    meta: {
      title: 'Pedro Monteiro - Engenheiro Full-Stack',
      description:
        'Engenheiro full stack com experiência em todo o ciclo de vida de aplicações, da arquitetura ao deploy. Background em programação de sistemas (C/C++), desenvolvimento web (Angular, Go, Node.js, TypeScript, React, Python/Django) e tooling de DevOps (Docker, CI/CD, PostgreSQL).',
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
              description:
                'Roteamento IP e sub-redes em topologias de rede funcionais.',
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
  },
  en: {
    meta: {
      title: 'Pedro Monteiro - Full-Stack Engineer',
      description:
        'Full stack engineer with experience across the entire application lifecycle, from architecture to deployment. Background in systems programming (C/C++), web development (Angular, Go, Node.js, TypeScript, React, Python/Django), and DevOps tooling (Docker, CI/CD, PostgreSQL).',
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
              description:
                'IP routing and subnetting across functional network topologies.',
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
  },
} as const;
