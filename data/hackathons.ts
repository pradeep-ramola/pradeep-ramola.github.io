export interface Hackathon {
  id: string;
  name: string;
  date: string;
  project: string;
  description: string;
  technologies: string[];
}

export const hackathons: Hackathon[] = [
  {
    id: 'ibm-2026',
    name: 'IBM Hackathon',
    date: 'April 2026',
    project: 'Victor AI',
    description:
      'Built Victor AI, an agentic AI assistant for international students using IBM watsonx Orchestrate, multi-agent workflows, email/calendar tools, and web scraping across 50+ universities',
    technologies: ['IBM watsonx Orchestrate', 'Multi-Agent Workflows', 'Web Scraping'],
  },
  {
    id: 'ub-hacking-2025',
    name: 'UB Hacking',
    date: 'November 2025',
    project: 'BrailleSense',
    description:
      'Built BrailleSense, a real-time speech/text/video to Braille translator app for accessibility focused on helping visually impaired users',
    technologies: ['Speech Recognition', 'Computer Vision', 'Braille Translation'],
  },
];
