'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AuthorCard({ author, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="bg-secondary rounded-xl overflow-hidden shadow-lg h-full flex flex-col group"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={author.image || '/img/placeholder.png'}
          alt={author.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-playfair font-bold text-heading mb-2">{author.name}</h3>
        <p className="text-text mb-4 flex-grow">Discover wisdom and insights from {author.name}.</p>
        <Link 
          href={`/pages/${author.slug}`} 
          className="inline-block text-center w-full border border-accent text-accent py-2 rounded hover:bg-accent/10 transition-colors duration-300"
        >
          Read Quotes
        </Link>
      </div>
    </motion.div>
  );
}
