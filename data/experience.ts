export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 'nec',
    company: 'NEC Software Solutions',
    position: 'Full Stack Software Engineer',
    startDate: 'June 2021',
    endDate: 'July 2025',
    description: [
      'Resolved 30+ high-priority production incidents and reduced MTTR by 20%',
      'Optimized backend batch workflows processing 10,000+ daily records, reducing runtime from 3 days to 5 hours',
      'Developed 20+ API endpoints and UI screens to improve system reliability',
      'Built core modules such as Activity Requests, Authorisation, Administration, Overtime Generation, TOIL Balance Calculation, and Payment Calculation',
      'Built web and mobile screens using Ext JS, .NET Framework, and PL/SQL',
      'Developed CSV/Excel export tools for 50,000+ officers across 20+ UK police forces',
      'Built workforce workflow modules serving 20,000+ employees with Angular, .NET Core, SQL Server, and Azure AD',
      'Integrated CI/CD pipelines and reduced deployment effort by 40%',
      'Conducted 50+ code reviews and mentored 3 junior engineers',
      'Led CARM upgrades from 4.3 to 5.3/5.6, refactored 40K+ lines of scheduling logic, and resolved 100+ critical bugs',
    ],
    technologies: [
      '.NET Core',
      '.NET Framework',
      'Angular',
      'Ext JS',
      'SQL Server',
      'Azure',
      'C#',
      'JavaScript',
      'PL/SQL',
      'CI/CD',
      'Docker',
    ],
  },
];
