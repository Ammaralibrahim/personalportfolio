"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-light tracking-wider text-white hover:text-gray-300 transition-colors">
          AA.
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}