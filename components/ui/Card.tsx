import { useState } from "react";
import { motion } from "framer-motion";


export default function Card({ title, Icon }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-orange-500/40 to-purple-500/40"
    >
      
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-10 text-center border border-white/10 group-hover:border-white/20 transition">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white group-hover:scale-110 transition duration-300">
            <Icon size={36} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

      </div>
    </motion.div>
  );
}