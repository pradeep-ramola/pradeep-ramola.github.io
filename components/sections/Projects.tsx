'use client';

import { projects, type Project } from '@/data/projects';

const categoryLabel: Record<Project['category'], string> = {
  fullstack: 'Full stack',
  'ai-ml': 'AI/ML',
  nlp: 'NLP',
  cv: 'Computer vision',
  llm: 'LLM',
};

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <section id="projects" className="section border-t border-[var(--line)] bg-[#0b0c0f]/82">
      <div className="container-max">
        <div className="section-header md:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] md:items-end">
          <div>
            <p className="section-kicker">selected work</p>
            <h2 className="section-title mt-4">Projects with a backbone</h2>
          </div>
       
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group"
            >
              <div>
                <div className="project-card-meta">
                  <span className="font-mono text-[var(--dim)]">0{index + 1}</span>
                  <span className="project-category">
                    {categoryLabel[project.category]}
                  </span>
                </div>

                <h3 className="card-title text-2xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                  {project.title}
                </h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-list">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="project-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="project-actions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-primary"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
