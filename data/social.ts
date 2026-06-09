export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:pramola@buffalo.edu',
    icon: 'mail',
    label: 'Email me',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/pradeep-singh-ramola',
    icon: 'linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/pradeep-ramola',
    icon: 'github',
    label: 'View my GitHub',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/pradeep-ramola',
    icon: 'code',
    label: 'View my LeetCode',
  },
];

export const email = 'pramola@buffalo.edu';
export const linkedIn = 'https://linkedin.com/in/pradeep-singh-ramola';
export const github = 'https://github.com/pradeep-ramola';
export const leetCode = 'https://leetcode.com/u/pradeep-ramola';
