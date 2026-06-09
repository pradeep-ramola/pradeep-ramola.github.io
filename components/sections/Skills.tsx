'use client';

import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-[var(--line)] bg-[#0b0c0f]/82">
      <div className="container-max">
        <div className="section-header max-w-4xl">
          <div>
            <p className="section-kicker">stack</p>
            <h2 className="section-title mt-4">Tools I can ship with</h2>
          </div>
        </div>

        <div className="grid gap-0 border-t border-[var(--line)]">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="grid gap-5 border-b border-[var(--line)] py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start"
            >
              <h3 className="text-lg font-semibold text-[var(--ink)]">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="card-chip px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
