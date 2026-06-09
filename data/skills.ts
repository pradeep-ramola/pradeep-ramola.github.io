export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'Ext JS', 'Tailwind CSS', 'HTML', 'CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['.NET Core', '.NET Framework', 'Spring Boot', 'REST APIs', 'Microservices', 'Node.js'],
  },
  {
    category: 'AI / ML',
    items: [
      'PyTorch',
      'Hugging Face Transformers',
      'OpenCV',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'LLMs',
      'Fine-Tuning',
      'LoRA',
      'PEFT',
      'RAG',
      'Agentic AI',
      'NLP',
      'Computer Vision',
      'Transformer Architectures',
      'LangGraph',
      'LangChain',
      'Vector Databases',
    ],
  },
  {
    category: 'Databases',
    items: ['Microsoft SQL Server', 'PL/SQL', 'PostgreSQL', 'Oracle 12c', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'Docker', 'Git', 'SVN', 'CI/CD', 'Postman', 'Jira'],
  },
  {
    category: 'Practices',
    items: ['Agile', 'Scrum', 'TDD', 'Code Review', 'RCA', 'KT Sessions', 'System Design'],
  },
];
