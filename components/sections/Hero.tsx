'use client';

import { socialLinks } from '@/data/social';
import VisitorStats from '@/components/VisitorStats';

const stats = [
  { value: '4 yrs', label: 'production engineering' },
  { value: '50+', label: 'UK police forces supported' },
  { value: '20K+', label: 'enterprise users supported' },
  { value: 'AI', label: 'LLMs, vision, NLP' },
];

const stackIcons = [
  { name: 'Python', src: '/icons/python.svg' },
  { name: 'React', src: '/icons/react.svg' },
  { name: 'PyTorch', src: '/icons/pytorch.svg' },
  { name: '.NET', src: '/icons/dotnet.svg' },
  { name: 'Azure', src: '/icons/azure.svg' },
];

export default function Hero() {
  const publicLinks = socialLinks.filter((link) => link.name !== 'Email');

  return (
    <section className="hero-section">
      <div className="container-max">
        <div className="min-w-0 max-w-5xl">
          <p className="section-kicker mb-5">software engineer / applied ai builder</p>
          <h1 className="section-title text-[clamp(2.65rem,11vw,8.5rem)]">
            <span className="block">Pradeep</span>
            <span className="block">Ramola</span>
          </h1>
          <VisitorStats className="hero-visitor-stats" />
          <p className="mt-7 max-w-3xl text-2xl leading-snug text-[var(--ink)] md:text-3xl">
            Full-stack engineer turning production systems experience into AI-native software
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            MS Computer Science student at University at Buffalo, previously shipped enterprise applications at NEC
            Software Solutions across backend workflows, APIs, UIs, cloud deployment, and incident response
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="btn-primary">
              See selected work
            </a>
            <a href="/pradeep-ramola-resume.pdf" download="Pradeep-Ramola-Resume.pdf" className="btn-secondary">
              Download resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {publicLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="muted-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="proof-strip mt-11">
          <p className="section-kicker">proof of work</p>
          <dl className="proof-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="proof-item">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
          <div className="proof-icons">
            {stackIcons.map((icon) => (
              <span key={icon.name} title={icon.name}>
                <img src={icon.src} alt={`${icon.name} logo`} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
