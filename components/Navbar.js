'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-nav fixed w-full z-50 top-0"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-playfair text-accent">
          The Treasure
        </Link>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#authors">Authors</NavLink>
          <NavLink href="/#about">About</NavLink>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="relative text-heading hover:text-accent transition-colors duration-300 group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
