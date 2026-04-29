"use client";

import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "SaaS Dashboard UI",
    category: "Web Application",
    description: "Modern analytics dashboard with clean UI and data visualization.",
    image: "images/uni1.jpg",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "Scalable online store with cart, payments, and admin panel.",
    image: "images/uni2.jpg",
  },
  {
    title: "Brand Identity System",
    category: "UI/UX & Branding",
    description: "Complete brand design including logo, colors, and guidelines.",
    image: "images/uni3.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-28 bg-[#0A0A0A] overflow-hidden" id="portfolio">

      {/* 🔥 Background Glow (same system as About) */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-500 blur-[150px] opacity-20"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-orange-500 blur-[150px] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Selected <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">Work</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-5 text-gray-400">
              A collection of projects where design meets functionality, crafted with precision and creativity.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={container}
              initial="hidden"
              whileInView="show"
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* Image Placeholder */}
              <div className="h-72 bg-gradient-to-br from-gray-900 to-black group-hover:scale-110 transition duration-700">
                <img src={project.image} alt="" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">

                <p className="text-sm text-orange-400">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-white mt-1">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                <button className="mt-4 self-start px-4 py-2 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition">
                  View Case Study
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}