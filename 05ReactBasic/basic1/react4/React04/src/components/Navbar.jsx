import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 shadow-lg"
    >
      <h1 className="text-center text-white text-4xl font-extrabold tracking-wide drop-shadow-md">
        Top Courses
      </h1>
    </motion.div>
  );
};

export default Navbar;
