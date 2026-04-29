"use client";

import useParallax from "@/hooks/useParallax";
import { motion } from "framer-motion";

export default function Hero() {

    const offset = useParallax(0.5);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden" id="home">

      {/* Background Glow */}
      <div style={{ transform: `translateY(${offset}px)` }} className="absolute w-[500px] h-[500px] bg-orange-500 blur-[150px] opacity-20 rounded-full top-[-100px]"></div>

      <div className="container-custom text-center relative z-10">
        
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          We Create
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
            {" "}Digital Impact
          </span>
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          High-end websites & branding that drive real business growth.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
            Start Project
          </button>

          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10">
            View Work
          </button>
        </div>

      </div>
    </section>
  );
}