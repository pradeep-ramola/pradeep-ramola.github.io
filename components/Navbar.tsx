'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Work', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Stack', href: '/#skills' },
  { name: 'Profile', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-white/10 bg-[#090a0c]/88 backdrop-blur-xl">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-[var(--ink)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--panel)] font-mono text-[var(--accent)]">
            PSR
          </span>
          <span className="hidden sm:inline">Pradeep Ramola</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="muted-link text-sm">
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--panel)] text-[var(--ink)] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--line)] bg-[#090a0c] md:hidden">
          <div className="container-max flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-[var(--line)] py-4 text-[var(--ink)] last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
