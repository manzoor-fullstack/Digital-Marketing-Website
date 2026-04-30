"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white font-bold text-xl">
          ProPhecy
          {/* <img src="images/logo-pro.jpeg" alt="logo"
          className="w-18 h-12 object-cover"
          /> */}
        </h1>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-gray-300">

  <Link
    href="#about"
    className="relative font-bold hover:text-white transition
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-500 after:to-pink-500
    after:transition-all after:duration-300 hover:after:w-full"
  >
    About
  </Link>

  <Link
    href="#services"
    className="relative font-bold hover:text-white transition
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-500 after:to-pink-500
    after:transition-all after:duration-300 hover:after:w-full"
  >
    Services
  </Link>

  <Link
    href="#portfolio"
    className="relative font-bold hover:text-white transition
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-500 after:to-pink-500
    after:transition-all after:duration-300 hover:after:w-full"
  >
    Work
  </Link>

  <Link
    href="#contact"
    className="relative font-bold hover:text-white transition
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-500 after:to-pink-500
    after:transition-all after:duration-300 hover:after:w-full"
  >
    Contact
  </Link>
  {/* <ThemeToggle /> */}

</nav>

        {/* CTA */}
        {/* <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm">
          Get Quote
        </button> */}

      </div>
    </header>
  );
}