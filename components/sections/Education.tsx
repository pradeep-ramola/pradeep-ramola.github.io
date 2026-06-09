'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="section border-t border-slate-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass content-card"
            >
              <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_max-content] md:items-start mb-6">
                <div className="min-w-0">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white">{edu.school}</h3>
                  <p className="card-title text-lg text-blue-400">
                    {edu.degree} in {edu.field}
                  </p>
                </div>
                <span className="text-slate-400 whitespace-nowrap md:text-right">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>

              {edu.gpa && <p className="text-slate-300 mb-4">GPA: <strong>{edu.gpa}</strong></p>}

              {edu.courses && (
                <div>
                  <p className="text-slate-300 mb-2">Relevant Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="card-chip px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-slate-300 text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
