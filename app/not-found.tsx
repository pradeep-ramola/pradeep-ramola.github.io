'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center container-max"
      >
        <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-xl text-slate-300 mb-8">Sorry, the page you're looking for doesn't exist</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
