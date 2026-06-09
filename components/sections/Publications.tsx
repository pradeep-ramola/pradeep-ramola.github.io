'use client';

import { motion } from 'framer-motion';
import { publications } from '@/data/publications';

export default function Publications() {
  return (
    <section id="publications" className="section border-t border-slate-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Publications</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass content-card mb-6"
            >
              <h3 className="card-title text-xl sm:text-2xl font-bold text-white mb-4">{pub.title}</h3>
              <p className="card-title text-slate-400 mb-4">
                <span className="text-blue-400 font-semibold">{pub.venue}</span> / {pub.date}
              </p>
              <p className="card-copy text-slate-300 mb-5">{pub.description}</p>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read Publication
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
