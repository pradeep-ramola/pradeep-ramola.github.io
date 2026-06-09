import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pradeep Ramola - Software Engineer',
  description:
    'Full-stack software engineer and MS Computer Science student at UB building production systems and applied AI projects',
  keywords: [
    'Pradeep Ramola',
    'Software Engineer',
    'Full Stack Engineer',
    'AI Engineer',
    'LLMs',
    'React',
    '.NET',
    'Python',
    'TypeScript',
  ],
  authors: [{ name: 'Pradeep Ramola' }],
  openGraph: {
    title: 'Pradeep Ramola - Software Engineer',
    description: 'Production-minded full-stack engineer focused on applied AI',
    url: 'https://pradeepramola.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
