'use client';

import { email, github, leetCode, linkedIn } from '@/data/social';

const contactLinks = [
  { label: 'LinkedIn', href: linkedIn, detail: 'Professional updates and messages' },
  { label: 'GitHub', href: github, detail: 'Projects, experiments, and code' },
  { label: 'LeetCode', href: leetCode, detail: 'Problem solving profile' },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-[var(--line)] bg-[#0b0c0f]/82">
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.75fr)] lg:items-end">
          <div>
            <p className="section-kicker">contact</p>
            <h2 className="section-title mt-4">Want to build something real?</h2>
            <p className="section-lead mt-6">
              I am open to software engineering, full-stack, AI/ML, research, internship, and full-time roles Email is
              the fastest path
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${email}`} className="btn-primary">
                Email me
              </a>
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-0 border-t border-[var(--line)]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid gap-1 border-b border-[var(--line)] py-5 transition-colors hover:text-[var(--accent)]"
              >
                <span className="font-semibold text-[var(--ink)]">{link.label}</span>
                <span className="text-sm text-[var(--muted)]">{link.detail}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
