"use client";

import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    feedback:
      "This team completely transformed our digital presence. The design quality and attention to detail exceeded expectations.",
  },
  {
    name: "Ali Khan",
    role: "Founder, ShopEase",
    feedback:
      "Our conversion rate doubled after the new website launch. Highly professional and reliable team.",
  },
  {
    name: "David Smith",
    role: "Product Manager, FinCore",
    feedback:
      "Clean UI, smooth performance, and excellent communication throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-[#0A0A0A] overflow-hidden">

      {/* 🔥 Background Glow (same system) */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-500 blur-[150px] opacity-20"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-orange-500 blur-[150px] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Clients <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">Say</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-5 text-gray-400">
              Real feedback from clients who trusted us to build their digital products.
            </p>
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
            >

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed">
                “{item.feedback}”
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10 my-6"></div>

              {/* Client Info */}
              <div>
                <h4 className="text-white font-semibold">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {item.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}