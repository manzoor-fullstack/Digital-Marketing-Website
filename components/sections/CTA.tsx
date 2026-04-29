"use client";

import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section className="relative py-28 bg-[#0A0A0A] overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-500 blur-[150px] opacity-20"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-orange-500 blur-[150px] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let’s Build Something{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
                Amazing
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-5 text-gray-400">
              Have a project in mind? Let’s discuss and turn your idea into a powerful digital product.
            </p>
          </Reveal>
        </div>

        {/* Contact + CTA Card */}
        <div className="mt-16 max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >

            {/* Form */}
            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-orange-400 transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-orange-400 transition"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-orange-400 transition"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-orange-400 transition resize-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}