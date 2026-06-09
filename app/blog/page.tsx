'use client';

import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

const allBlogPosts: BlogPost[] = [
  {
    id: 'tinygpt',
    title: 'Building TinyGPT from Scratch',
    category: 'AI/ML',
    date: 'April 2025',
    readTime: '12 min read',
    summary: 'A deep dive into implementing a character-level GPT decoder from scratch with PyTorch and Transformers',
  },
  {
    id: 'bert-lora',
    title: 'What I Learned Fine-Tuning BERT with LoRA',
    category: 'NLP',
    date: 'March 2025',
    readTime: '10 min read',
    summary: 'Practical insights on parameter-efficient fine-tuning and achieving 98% performance with 1% of parameters',
  },
  {
    id: 'vit',
    title: 'How Vision Transformers Work',
    category: 'Computer Vision',
    date: 'Feb 2025',
    readTime: '15 min read',
    summary: 'Understanding the architecture of Vision Transformers and their advantages over CNNs',
  },
  {
    id: 'production-debugging',
    title: 'Lessons from Debugging Production Systems',
    category: 'Backend Systems',
    date: 'June 2021 - July 2025',
    readTime: '8 min read',
    summary: 'Best practices for identifying and resolving production incidents at scale',
  },
  {
    id: 'ai-transition',
    title: 'From Full Stack Engineering to AI/ML',
    category: 'Career Journey',
    date: 'Aug 2025',
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

export default function BlogPage() {
  return (
    <div className="min-h-screen section">
      <div className="container-max">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center"
        >
          <span className="text-gradient">Blog</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass content-card hover:border-blue-400/50 border border-slate-700 transition-all cursor-pointer group"
            >
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  {post.category}
                </span>
              </div>

              <h2 className="card-title text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h2>

              <p className="card-copy text-slate-400 text-sm mb-5 line-clamp-3">{post.summary}</p>

              <div className="flex flex-wrap justify-between items-center gap-2 pt-4 border-t border-slate-700">
                <span className="text-xs text-slate-500">{post.date}</span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
