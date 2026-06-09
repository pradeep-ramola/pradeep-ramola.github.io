'use client';

import { education } from '@/data/education';
import { hackathons } from '@/data/hackathons';
import { publications } from '@/data/publications';

const profileNotes = [
  {
    title: 'Now',
    body: 'MS Computer Science student at University at Buffalo, focused on deep learning, LLMs, NLP, computer vision, and agentic AI',
  },
  {
    title: 'Before',
    body: 'Full Stack Software Engineer at NEC Software Solutions, building enterprise systems used by public-sector teams at scale',
  },
  {
    title: 'Edge',
    body: 'Comfortable across product UI, backend workflows, database tuning, cloud deployment, incident response, and ML experimentation',
  },
];

export default function About() {
  const latestEducation = education[0];
  const publication = publications[0];

  return (
    <section id="about" className="section border-t border-[var(--line)]">
      <div className="container-max">
        <div className="section-header max-w-4xl">
          <div>
            <p className="section-kicker">profile</p>
            <h2 className="section-title mt-4">Senior energy, student curiosity</h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)]">
          <div className="grid border-t border-[var(--line)]">
            {profileNotes.map((note) => (
              <div key={note.title} className="grid gap-4 border-b border-[var(--line)] py-7 md:grid-cols-[8rem_minmax(0,1fr)]">
                <h3 className="font-mono text-[var(--accent)]">{note.title}</h3>
                <p className="leading-8 text-[var(--muted)]">{note.body}</p>
              </div>
            ))}
          </div>

          <aside className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6">
            <p className="section-kicker">extra signal</p>
            <div className="mt-6 grid gap-6">
              <div>
                <p className="text-sm text-[var(--dim)]">Education</p>
                <p className="mt-2 font-semibold text-[var(--ink)]">{latestEducation.school}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {latestEducation.degree} in {latestEducation.field}, GPA {latestEducation.gpa}
                </p>
              </div>

              <div>
                <p className="text-sm text-[var(--dim)]">Hackathons</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {hackathons.map((hackathon) => (
                    <span key={hackathon.id} className="card-chip px-3 py-1">
                      {hackathon.project}
                    </span>
                  ))}
                </div>
              </div>

              {publication && (
                <div>
                  <p className="text-sm text-[var(--dim)]">Publication</p>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm leading-6 text-[var(--sky)]"
                  >
                    {publication.title}
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
