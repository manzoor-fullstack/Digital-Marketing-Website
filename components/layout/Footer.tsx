"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const socialIcons = [
  { icon: <FaFacebook />, label: "Facebook" },
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaLinkedin />, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-gray-300 py-20 overflow-hidden">

      {/* 🔥 Glow Background (same system) */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-purple-500 blur-[150px] opacity-20"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-orange-500 blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">

        {/* 🔹 Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-orange-500"></div>
            <h2 className="text-xl font-semibold text-white">ProPhecy</h2>
          </div>

          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            We design and build modern digital experiences that help
            businesses grow, scale, and stand out in the digital world.
          </p>
        </div>

        {/* 🔹 Services */}
        <div>
          <h3 className="text-white font-semibold mb-5">Services</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition">Web Development</Link></li>
            <li><Link href="#" className="hover:text-white transition">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-white transition">SEO Optimization</Link></li>
            <li><Link href="#" className="hover:text-white transition">Digital Marketing</Link></li>
            <li><Link href="#" className="hover:text-white transition">Brand Identity</Link></li>
          </ul>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition">Our Work</Link></li>
            <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* 🔹 Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5">Contact</h3>

          <div className="space-y-4 text-sm text-gray-400">

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-orange-400" />
              <span>info@prodigmar.com</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-purple-400 mt-1" />
              <span>
                128 City Road, London<br />
                EC1V 2NX, United Kingdom
              </span>
            </div>

          </div>

          {/* 🔹 Social */}
          <div className="flex gap-3 mt-6">

            {socialIcons.map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition cursor-pointer backdrop-blur-md"
                title={item.label}
              >
                {item.icon}
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Prodigmar. All rights reserved.
      </div>

    </footer>
  );
}