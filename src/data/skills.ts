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
    items: ['Go', 'Python', 'FastAPI', 'Node.js', 'RESTful'],
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
    key: 'algorithmsAi',
    items: ['Classic Algorithms', 'Data Structures', 'Asynchronous Logic'],
  },
  {
    key: 'graphics',
    items: ['Image Manipulation', 'Drawing Shapes', 'Event-Driven Programming'],
  },
  {
    key: 'groupInterpersonal',
    items: ['Teamwork', 'Collaboration', 'Group Dynamics'],
  },
  {
    key: 'imperativeProgramming',
    items: ['C Programming', 'Memory Management', 'Data Structures'],
  },
  {
    key: 'oop',
    items: ['C++ Classes', 'Inheritance', 'Templates', 'Abstraction'],
  },
  {
    key: 'systemProgramming',
    items: ['Unix System Calls', 'File Handling', 'Process Control'],
  },
  {
    key: 'networkSysadmin',
    items: ['Linux System Setup', 'User Management', 'Basic Network Services'],
  },
  {
    key: 'web',
    items: ['Full-Stack Development', 'MVC', 'UI/UX Basics'],
  },
];
