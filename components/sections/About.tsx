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
            <p className="mt-6 text-gray-300 leading-relaxed">
             At Prophecy Software House, we redefine the boundaries of digital excellence by engineering high-octane technology solutions that serve as the blueprint for the future. We are a high-velocity powerhouse dedicated to dismantling complex business challenges through elite Software Development, Advanced AI, and precision Analytics. By fusing industrial-grade Cloud Services with seamless IT Solutions, we build scalable infrastructures that provide our clients with a definitive and dominant market advantage. Our approach to UI/UX Design pushes the envelope of innovation, ensuring that every interface is a striking, high-performance asset designed for maximum impact. We don't just provide services; we deliver strategic technical mastery that replaces legacy limitations with agile, future-proof systems. Our mission is to transform raw concepts into revenue-driving realities, ensuring your business stays ahead of the curve in an evolving global landscape. We partner with visionaries to build high-impact digital ecosystems that outpace the competition and set new industry standards. Every line of code we write is a commitment to excellence, reliability, and the pursuit of technological superiority. The future is not something we wait for it is the reality we build every single day at Prophecy Software House.
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">50+</h3>
              <p className="text-gray-300 mt-1">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">5+</h3>
              <p className="text-gray-300 mt-1">Years Experience</p>
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
            <img src="images/about-logo.png" alt="" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}