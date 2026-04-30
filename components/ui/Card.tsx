import { ComponentType, MouseEvent, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  Icon: ComponentType<{ size: number }>;
}


export default function Card({ title, Icon }: CardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
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
  className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-orange-500/40 to-purple-500/40"
>

  {/* Glow Effect */}
  <div
    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"
    style={{
      background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
    }}
  />

  {/* Card Content */}
  <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center border border-white/10 group-hover:border-white/20 transition">

    {/* Icon Wrapper */}
    <div className="mb-6">
      <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white group-hover:scale-110 transition duration-300 shadow-lg">
        <Icon size={34} />
      </div>
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold text-white tracking-wide">
      {title}
    </h3>

    {/* Optional subtle underline accent */}
    <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-pink-500 mt-4 opacity-60 group-hover:w-16 transition-all duration-300 rounded-full"></div>

  </div>
</motion.div>
  );
}