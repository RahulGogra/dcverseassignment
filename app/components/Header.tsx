'use client';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-8 px-4 text-center rounded-md shadow mb-8"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-3xl md:text-4xl font-extrabold">
      Welcome back, Rahul 👋
    </h1>
    <p className="mt-2 text-base md:text-lg font-light">
      Ready to explore your AI avatars?
    </p>
  </motion.header>
);

export default Header;
