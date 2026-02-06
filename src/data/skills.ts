export interface SkillCategory {
  key: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'frontend',
    items: ['Angular', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    key: 'backend',
    items: ['Java', 'Spring Boot', 'Go', 'Python', 'FastAPI', 'Node.js'],
  },
  {
    key: 'cloud',
    items: ['Docker', 'CI/CD', 'Git'],
  },
  {
    key: 'database',
    items: ['PostgreSQL', 'Oracle', 'SQL'],
  },
  {
    key: 'architecture',
    items: ['Software Design', 'Distributed Systems', 'Scalability', 'Elasticity'],
  },
  {
    key: 'fundamentals',
    items: ['Data Structures', 'Algorithms', 'OOP', 'Concurrent Programming'],
  },
  {
    key: 'methodologies',
    items: ['Scrum', 'Kanban', 'Agile Development', 'Multidisciplinary Teams'],
  },
];
