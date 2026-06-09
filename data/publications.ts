export interface Publication {
  id: string;
  title: string;
  venue: string;
  date: string;
  description: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    id: 'product-analyst',
    title: 'Product Analyst Advisor: NLP and Sentiment Analysis for Mobile Product Research',
    venue: 'IRJET',
    date: 'October 2023',
    description:
      'Published research on leveraging NLP and sentiment analysis techniques for mobile product research and market analysis',
    url: 'https://www.irjet.net',
  },
];
