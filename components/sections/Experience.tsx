'use client';

import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-[var(--line)]">
      <div className="container-max">
        <div className="section-header max-w-4xl">
          <div>
            <p className="section-kicker">experience</p>
            <h2 className="section-title mt-4">Real systems, real scale</h2>
          </div>
        </div>

        <div className="grid gap-8">
          {experience.map((job) => (
            <article
              key={job.id}
              className="grid gap-8 border-t border-[var(--line)] pt-8 lg:grid-cols-[18rem_minmax(0,1fr)]"
            >
              <div>
                <h3 className="card-title text-2xl font-semibold text-[var(--ink)]">{job.position}</h3>
                <p className="mt-2 text-[var(--accent)]">{job.company}</p>
                <p className="mt-4 text-sm text-[var(--dim)]">
                  {job.startDate} - {job.endDate}
                </p>
              </div>

              <div>
                <ul className="grid gap-4">
                  {job.description.slice(0, 6).map((item) => (
                    <li key={item} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-3 text-[var(--muted)]">
                      <span className="list-marker">&gt;</span>
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="card-chip px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
