"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Reveal({ children }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}