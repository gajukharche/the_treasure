'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent opacity-10 rounded-full"
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
              scale: 0,
            }}
            animate={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 50 + 10,
              height: Math.random() * 50 + 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-playfair mb-6 text-heading"
        >
          Unlock the <span className="text-accent">Treasure</span> of Wisdom
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-text mb-10 max-w-2xl mx-auto"
        >
          Discover timeless insights from the world's greatest motivational speakers and thought leaders.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#authors" className="inline-block border-2 border-accent text-accent px-8 py-3 rounded text-lg hover:bg-accent/10 transition-colors duration-300">
            Explore Authors
          </a>
        </motion.div>
      </div>
    </section>
  );
}
