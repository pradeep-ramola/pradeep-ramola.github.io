'use client';

import { motion } from 'framer-motion';
import { hackathons } from '@/data/hackathons';

export default function Hackathons() {
  return (
    <section id="hackathons" className="section bg-slate-900/50 border-t border-slate-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Hackathons</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass content-card"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="min-w-0">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white">{hackathon.name}</h3>
                  <p className="text-blue-400">{hackathon.date}</p>
                </div>
              </div>

              <h4 className="card-title text-lg font-semibold text-slate-200 mb-3">{hackathon.project}</h4>
              <p className="card-copy text-slate-300 mb-6">{hackathon.description}</p>

              <div className="flex flex-wrap gap-2">
                {hackathon.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="card-chip px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-slate-300 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
