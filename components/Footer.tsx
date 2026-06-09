import Link from 'next/link';
import { email, socialLinks } from '@/data/social';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[#07080a]">
      <div className="container-max flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-semibold text-[var(--ink)]">
            Pradeep Ramola
          </Link>
          <p className="mt-2 text-sm text-[var(--dim)]">Software engineering, applied AI, and systems that hold up</p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <a href={`mailto:${email}`} className="text-sm text-[var(--accent)]">
            {email}
          </a>
          <div className="flex flex-wrap gap-4 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="muted-link"
              >
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-xs text-[var(--dim)]">Copyright {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
