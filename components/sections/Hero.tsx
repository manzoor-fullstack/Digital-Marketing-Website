"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          We Build Digital Experiences
        </motion.h1>

        <p className="mt-4 text-lg text-gray-300">
          High-quality websites that convert.
        </p>

        <button className="mt-6 px-6 py-3 bg-orange-500 rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}