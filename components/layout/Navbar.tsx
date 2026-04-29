"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition ${
        scrolled
          ? "bg-white/10 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        
        <h1 className="text-xl font-bold tracking-wide">Prodig</h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="#">Home</Link>
          <Link href="#">Services</Link>
          <Link href="#">Work</Link>
          <Link href="#">Contact</Link>
        </nav>

        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
          Let’s Talk
        </button>
      </div>
    </header>
  );
}