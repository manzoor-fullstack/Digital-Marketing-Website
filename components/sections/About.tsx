"use client";

import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-28  overflow-hidden" id="about">
      
      {/* Background Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-purple-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-orange-500 blur-[120px] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* 🔹 LEFT CONTENT */}
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              We Build 
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
                {" "}Digital Experiences
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-6 text-gray-400 leading-relaxed">
              We are a creative agency focused on delivering high-quality digital
              products that help brands grow, scale, and stand out in the market.
            </p>
          </Reveal>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-white">50+</h3>
              <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-white">5+</h3>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </motion.div>

          </div>
        </div>

        {/* 🔹 RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 blur-[80px] opacity-20 rounded-2xl"></div>

          {/* Glass Card / Image Placeholder */}
          <div className="relative h-80 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center">
            <img src="images/Faiz&Manzoor.jpg" alt="" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}