export interface Project {
  slug: string;
  rank: number;
  grade: number;
  workload: number;
  isBonus: boolean;
  technologies: string[];
  name: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'libft',
    rank: 0,
    grade: 125,
    workload: 70,
    isBonus: true,
    technologies: ['C', 'Makefile'],
    name: { en: 'Libft', pt: 'Libft' },
    description: {
      en: 'Reimplementation of key C standard library functions and custom utilities.',
      pt: 'Reimplementação de funções essenciais da biblioteca padrão C e utilitários personalizados.',
    },
  },
  {
    slug: 'ft-printf',
    rank: 1,
    grade: 100,
    workload: 70,
    isBonus: false,
    technologies: ['C', 'Variadic Functions'],
    name: { en: 'ft_printf', pt: 'ft_printf' },
    description: {
      en: 'Custom printf using variadic functions and format specifiers in C.',
      pt: 'Printf personalizado usando funções variádicas e especificadores de formato em C.',
    },
  },
  {
    slug: 'get-next-line',
    rank: 1,
    grade: 100,
    workload: 70,
    isBonus: false,
    technologies: ['C', 'File I/O'],
    name: { en: 'get_next_line', pt: 'get_next_line' },
    description: {
      en: 'Read file or input content line by line with buffer management in C.',
      pt: 'Leitura de arquivo ou entrada linha por linha com gerenciamento de buffer em C.',
    },
  },
  {
    slug: 'born2beroot',
    rank: 1,
    grade: 125,
    workload: 40,
    isBonus: true,
    technologies: ['Linux', 'Virtualization', 'System Administration'],
    name: { en: 'Born2beroot', pt: 'Born2beroot' },
    description: {
      en: 'Introduction to system administration and virtualization with Linux.',
      pt: 'Introdução à administração de sistemas e virtualização com Linux.',
    },
  },
  {
    slug: 'push-swap',
    rank: 2,
    grade: 96,
    workload: 60,
    isBonus: false,
    technologies: ['C', 'Sorting Algorithms'],
    name: { en: 'push_swap', pt: 'push_swap' },
    description: {
      en: 'Sort a stack with a minimal set of operations using sorting algorithms in C.',
      pt: 'Ordenação de uma pilha com um conjunto mínimo de operações usando algoritmos em C.',
    },
  },
  {
    slug: 'pipex',
    rank: 2,
    grade: 100,
    workload: 50,
    isBonus: false,
    technologies: ['C', 'Unix', 'Processes'],
    name: { en: 'pipex', pt: 'pipex' },
    description: {
      en: 'Implement UNIX pipe mechanics to connect processes and manage I/O in C.',
      pt: 'Implementação de mecânicas de pipe UNIX para conectar processos e gerenciar I/O em C.',
    },
  },
  {
    slug: 'fdf',
    rank: 2,
    grade: 115,
    workload: 60,
    isBonus: true,
    technologies: ['C', 'Graphics', 'MiniLibX'],
    name: { en: 'FdF', pt: 'FdF' },
    description: {
      en: '3D wireframe rendering using a basic graphics window and event handling in C.',
      pt: 'Renderização 3D de wireframe usando janela gráfica básica e tratamento de eventos em C.',
    },
  },
  {
    slug: 'minishell',
    rank: 3,
    grade: 101,
    workload: 210,
    isBonus: true,
    technologies: ['C', 'Shell', 'Processes', 'Parsing'],
    name: { en: 'minishell', pt: 'minishell' },
    description: {
      en: 'Build a simple shell handling commands, paths, and environment variables in C.',
      pt: 'Construção de um shell simples lidando com comandos, caminhos e variáveis de ambiente em C.',
    },
  },
  {
    slug: 'philosophers',
    rank: 3,
    grade: 100,
    workload: 70,
    isBonus: false,
    technologies: ['C', 'Threads', 'Mutexes', 'Concurrency'],
    name: { en: 'Philosophers', pt: 'Philosophers' },
    description: {
      en: 'Learn concurrency using threads and mutexes in the dining philosophers problem in C.',
      pt: 'Aprendizado de concorrência usando threads e mutexes no problema dos filósofos em C.',
    },
  },
  {
    slug: 'cub3d',
    rank: 4,
    grade: 125,
    workload: 280,
    isBonus: true,
    technologies: ['C', 'Raycasting', 'Graphics', 'MiniLibX'],
    name: { en: 'cub3d', pt: 'cub3d' },
    description: {
      en: 'Raycasting-based 3D maze viewer inspired by 90s FPS games in C.',
      pt: 'Visualizador de labirinto 3D baseado em raycasting inspirado em jogos FPS dos anos 90 em C.',
    },
  },
  {
    slug: 'cpp-00',
    rank: 4,
    grade: 100,
    workload: 22,
    isBonus: false,
    technologies: ['C++', 'OOP'],
    name: { en: 'CPP Module 00', pt: 'CPP Module 00' },
    description: {
      en: 'Understand C++ basics vs C: namespaces, classes, stdlib, and intro to OOP.',
      pt: 'Fundamentos de C++ vs C: namespaces, classes, stdlib e introdução a OOP.',
    },
  },
  {
    slug: 'cpp-01',
    rank: 4,
    grade: 100,
    workload: 12,
    isBonus: false,
    technologies: ['C++', 'Memory Management'],
    name: { en: 'CPP Module 01', pt: 'CPP Module 01' },
    description: {
      en: 'Study memory allocation, references, and member pointers in C++.',
      pt: 'Estudo de alocação de memória, referências e ponteiros de membro em C++.',
    },
  },
  {
    slug: 'cpp-02',
    rank: 4,
    grade: 100,
    workload: 12,
    isBonus: false,
    technologies: ['C++', 'Polymorphism'],
    name: { en: 'CPP Module 02', pt: 'CPP Module 02' },
    description: {
      en: 'Explore polymorphism, function overloading, and canonical form in C++.',
      pt: 'Exploração de polimorfismo, sobrecarga de funções e forma canônica em C++.',
    },
  },
  {
    slug: 'cpp-03',
    rank: 4,
    grade: 100,
    workload: 12,
    isBonus: false,
    technologies: ['C++', 'Inheritance'],
    name: { en: 'CPP Module 03', pt: 'CPP Module 03' },
    description: {
      en: 'Learn inheritance principles and how to extend class behavior in C++.',
      pt: 'Aprendizado de princípios de herança e extensão de comportamento de classes em C++.',
    },
  },
  {
    slug: 'cpp-04',
    rank: 4,
    grade: 80,
    workload: 12,
    isBonus: false,
    technologies: ['C++', 'Abstract Classes', 'Interfaces'],
    name: { en: 'CPP Module 04', pt: 'CPP Module 04' },
    description: {
      en: 'Use abstract classes, interfaces, and subtype polymorphism in C++.',
      pt: 'Uso de classes abstratas, interfaces e polimorfismo de subtipo em C++.',
    },
  },
  {
    slug: 'netpractice',
    rank: 4,
    grade: 100,
    workload: 50,
    isBonus: false,
    technologies: ['Networking', 'IP', 'Subnetting'],
    name: { en: 'NetPractice', pt: 'NetPractice' },
    description: {
      en: 'Configure IP routing and subnetting to build functional network connections.',
      pt: 'Configuração de roteamento IP e sub-redes para construir conexões de rede funcionais.',
    },
  },
  {
    slug: 'cpp-05',
    rank: 5,
    grade: 100,
    workload: 25,
    isBonus: false,
    technologies: ['C++', 'Exceptions'],
    name: { en: 'CPP Module 05', pt: 'CPP Module 05' },
    description: {
      en: 'Handle exceptions with try/catch and understand error management in C++.',
      pt: 'Tratamento de exceções com try/catch e gerenciamento de erros em C++.',
    },
  },
  {
    slug: 'cpp-06',
    rank: 5,
    grade: 100,
    workload: 25,
    isBonus: false,
    technologies: ['C++', 'Type Casting'],
    name: { en: 'CPP Module 06', pt: 'CPP Module 06' },
    description: {
      en: 'Apply static, dynamic, const, and reinterpret casts properly in C++.',
      pt: 'Aplicação correta de casts static, dynamic, const e reinterpret em C++.',
    },
  },
  {
    slug: 'cpp-07',
    rank: 5,
    grade: 100,
    workload: 25,
    isBonus: false,
    technologies: ['C++', 'Templates'],
    name: { en: 'CPP Module 07', pt: 'CPP Module 07' },
    description: {
      en: 'Learn to write and use generic functions and classes with templates in C++.',
      pt: 'Aprendizado de escrita e uso de funções e classes genéricas com templates em C++.',
    },
  },
  {
    slug: 'cpp-08',
    rank: 5,
    grade: 100,
    workload: 25,
    isBonus: false,
    technologies: ['C++', 'STL', 'Iterators'],
    name: { en: 'CPP Module 08', pt: 'CPP Module 08' },
    description: {
      en: 'Use STL-style containers, iterators, and algorithms via templates in C++.',
      pt: 'Uso de containers STL, iteradores e algoritmos via templates em C++.',
    },
  },
  {
    slug: 'cpp-09',
    rank: 5,
    grade: 100,
    workload: 40,
    isBonus: false,
    technologies: ['C++', 'STL Containers'],
    name: { en: 'CPP Module 09', pt: 'CPP Module 09' },
    description: {
      en: 'Deepen understanding of STL containers like vector, map, set, and deque.',
      pt: 'Aprofundamento no uso de containers STL como vector, map, set e deque.',
    },
  },
];

export function getProjectsByRank(): Map<number, Project[]> {
  const grouped = new Map<number, Project[]>();
  for (const project of projects) {
    const existing = grouped.get(project.rank) || [];
    existing.push(project);
    grouped.set(project.rank, existing);
  }
  return grouped;
}

export const ranks = [0, 1, 2, 3, 4, 5] as const;
