export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  courses?: string[];
}

export const education: Education[] = [
  {
    id: 'ub',
    school: 'University at Buffalo, SUNY',
    degree: 'MS',
    field: 'Computer Science',
    startDate: 'August 2025',
    endDate: 'December 2026',
    gpa: '3.77 / 4.0',
    courses: ['Algorithms', 'Machine Learning', 'Deep Learning', 'Data Intensive Computing'],
  },
  {
    id: 'somaiya',
    school: 'KJ Somaiya Institute of Engineering and Information Technology',
    degree: 'BE',
    field: 'Information Technology',
    startDate: 'June 2017',
    endDate: 'July 2021',
    gpa: '9.05 / 10.0',
  },
];
