'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'tinygpt',
    title: 'Building TinyGPT from Scratch',
    category: 'AI/ML',
    date: 'Nov 2024',
    readTime: '12 min read',
    summary: 'A deep dive into implementing a character-level GPT decoder from scratch with PyTorch and Transformers',
  },
  {
    id: 'bert-lora',
    title: 'What I Learned Fine-Tuning BERT with LoRA',
    category: 'NLP',
    date: 'Oct 2024',
    readTime: '10 min read',
    summary: 'Practical insights on parameter-efficient fine-tuning and achieving 98% performance with 1% of parameters',
  },
  {
    id: 'vit',
    title: 'How Vision Transformers Work',
    category: 'Computer Vision',
    date: 'Sep 2024',
    readTime: '15 min read',
    summary: 'Understanding the architecture of Vision Transformers and their advantages over CNNs',
  },
  {
    id: 'production-debugging',
    title: 'Lessons from Debugging Production Systems',
    category: 'Backend Systems',
    date: 'Aug 2024',
    readTime: '8 min read',
    summary: 'Best practices for identifying and resolving production incidents at scale',
  },
  {
    id: 'ai-transition',
    title: 'From Full Stack Engineering to AI/ML',
    category: 'Career Journey',
    date: 'Jul 2024',
    readTime: '11 min read',
    summary: 'My journey transitioning from backend engineering to AI/ML and what I learned along the way',
  },
  {
    id: 'rag',
    title: 'Building RAG Systems with LangChain',
    category: 'LLMs',
    date: 'Jun 2024',
    readTime: '14 min read',
    summary: 'A practical guide to implementing Retrieval-Augmented Generation for improved LLM responses',
  },
];

export default function Blog() {
  const categories = ['All', 'AI/ML', 'NLP', 'Computer Vision', 'Backend Systems', 'Career Journey', 'LLMs'];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section id="blog" className="section border-t border-slate-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-4xl md:text-5xl font-bold">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="filter-panel grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 justify-center max-w-5xl"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`filter-button border ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass content-card hover:border-blue-400/50 border border-slate-700 transition-all cursor-pointer group h-full flex flex-col justify-between"
            >
              <div className="card-stack">
                <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold">
                  {post.category}
                </span>

                <div className="card-stack gap-3">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="card-copy text-slate-400 text-base line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="card-footer border-t border-slate-700 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span className="mx-2">/</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href="/blog" className="btn-secondary">
                  Read Post
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="section-cta-row"
        >
          <Link href="/blog" className="btn-primary">
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
