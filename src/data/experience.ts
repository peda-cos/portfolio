import type { Locale } from '../i18n/index';

export interface ExperienceEntry {
  company: { en: string; pt: string };
  role: { en: string; pt: string };
  startDate: string;
  endDate: { en: string; pt: string } | null;
  description: { en: string; pt: string };
  achievements: { en: string[]; pt: string[] };
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: {
      en: 'Máquinas Furlan Ltda',
      pt: 'Máquinas Furlan Ltda',
    },
    role: {
      en: 'Junior Software Developer',
      pt: 'Desenvolvedor de Software Júnior',
    },
    startDate: '2025-02',
    endDate: null,
    description: {
      en: 'Full stack development in agile teams, participating in the entire application lifecycle from conception to deployment.',
      pt: 'Desenvolvimento full stack em times ágeis, participando de todo o ciclo de vida das aplicações desde concepção até implantação.',
    },
    achievements: {
      en: [
        'End-to-end development of web features using Angular and Go',
        'Implementation of scalable frontend components with modular architecture',
        'RESTful API integration ensuring performance and reliability',
        'Active participation in agile ceremonies (Scrum) and code reviews',
        'Collaborative version control with Git and DevOps practices',
      ],
      pt: [
        'Desenvolvimento end-to-end de funcionalidades web utilizando Angular e Go',
        'Implementação de componentes frontend escaláveis com arquitetura modular',
        'Integração de APIs RESTful garantindo performance e confiabilidade',
        'Participação ativa em cerimônias ágeis (Scrum) e code reviews',
        'Versionamento colaborativo com Git e práticas de DevOps',
      ],
    },
    technologies: ['Angular', 'Go', 'Java', 'Node.js', 'Docker', 'Git'],
  },
  {
    company: {
      en: 'São Paulo Municipal Health Department',
      pt: 'Secretaria Municipal da Saúde de São Paulo',
    },
    role: {
      en: 'Development Intern',
      pt: 'Estagiário de Desenvolvimento',
    },
    startDate: '2023-10',
    endDate: { en: 'February 2025', pt: 'Fevereiro de 2025' },
    description: {
      en: 'Development of tools for optimizing administrative processes, impacting operational efficiency of public health systems.',
      pt: 'Desenvolvimento de ferramentas para otimização de processos administrativos, impactando eficiência operacional de sistemas públicos de saúde.',
    },
    achievements: {
      en: [
        'Automation of administrative processes with measurable efficiency gains',
        'Query and structure optimization in PostgreSQL',
        'Data analysis and report generation for decision making',
      ],
      pt: [
        'Automação de processos administrativos com aumento mensurável de eficiência',
        'Otimização de consultas e estruturas em PostgreSQL',
        'Análise de dados e geração de relatórios para tomada de decisão',
      ],
    },
    technologies: ['PostgreSQL', 'Python', 'Data Analysis'],
  },
];

export interface EducationEntry {
  institution: { en: string; pt: string };
  degree: { en: string; pt: string };
  startDate: string;
  endDate: string | null;
  description: { en: string; pt: string };
}

export const education: EducationEntry[] = [
  {
    institution: { en: '42 São Paulo', pt: '42 São Paulo' },
    degree: {
      en: 'Software Engineering',
      pt: 'Engenharia de Software',
    },
    startDate: '2024-09',
    endDate: '2026-09',
    description: {
      en: 'Intensive software engineering program focused on algorithms and data structures, C/C++ programming, shell scripting, networking, operating systems, virtualization and containers (Docker), web development, distributed systems, information security, code quality, and peer learning.',
      pt: 'Programa intensivo de engenharia de software com foco em algoritmos e estruturas de dados, programação em C/C++, shell scripting, redes, sistemas operacionais, virtualização e containers (Docker), desenvolvimento web, sistemas distribuídos, segurança da informação, qualidade de código e peer learning.',
    },
  },
  {
    institution: { en: 'UNINOVE', pt: 'UNINOVE' },
    degree: {
      en: 'Technology Degree in Systems Analysis and Development',
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    },
    startDate: '2023-01',
    endDate: '2025-06',
    description: {
      en: 'Systems development education covering programming languages, databases, and software engineering.',
      pt: 'Formação em desenvolvimento de sistemas com conhecimentos em linguagens de programação, bancos de dados e engenharia de software.',
    },
  },
];

export function formatDate(dateStr: string, locale: Locale): string {
  const [year, month] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1);
  return date.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'long',
    year: 'numeric',
  });
}
