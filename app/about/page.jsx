"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiCode, FiServer, FiLayers, FiTarget, FiAward, FiCalendar, 
  FiMapPin, FiGlobe, FiUsers, FiCheckCircle, FiCoffee, FiZap,
  FiBook, FiTrendingUp, FiMenu, FiX
} from "react-icons/fi";
import { SiNextdotjs, SiNestjs, SiTypescript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

// Mobile Navbar (aynı component)
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 ${
          isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-gold/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-light tracking-[0.2em] text-gold hover:text-gold-light transition-colors">
            AA.
          </Link>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-400 hover:text-gold transition-colors duration-300">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-gold text-black text-sm font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-xl border-b border-gold/10 z-40"
              >
                <div className="px-4 py-6 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-gold hover:border-gold/30 transition-all duration-300 text-base"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3.5 rounded-xl bg-gold text-black text-center font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="h-16 sm:h-20" />
    </>
  );
};

const timeline = [
  {
    year: "2024",
    title: "Full-Stack Consultant",
    description: "Started offering professional development services and consulting"
  },
  {
    year: "2023",
    title: "Advanced Full-Stack Projects",
    description: "Worked on complex projects including ASAK, Gamma Cities, and enterprise solutions"
  },
  {
    year: "2022",
    title: "Deep Dive into Modern Stack",
    description: "Mastered Next.js, Nest.js, TypeScript, and modern development practices"
  },
  {
    year: "2021",
    title: "Beginning of Journey",
    description: "Started learning web development with HTML, CSS, and JavaScript"
  }
];

const principles = [
  {
    title: "Code Quality",
    description: "Clean, maintainable, and well-documented code",
    icon: <FiCode />
  },
  {
    title: "Performance",
    description: "Optimized applications with fast load times",
    icon: <FiZap />
  },
  {
    title: "User Experience",
    description: "Intuitive and engaging user interfaces",
    icon: <FiUsers />
  },
  {
    title: "Communication",
    description: "Clear and transparent project updates",
    icon: <FiBook />
  }
];

export default function AboutPage() {
  const stats = [
    { value: "50+", label: "Projects", icon: <FiTarget /> },
    { value: "15+", label: "Technologies", icon: <FiLayers /> },
    { value: "100%", label: "Satisfaction", icon: <FiAward /> },
    { value: "3+", label: "Years", icon: <FiCalendar /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-light overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-gold/30" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider">About</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl ml-11 sm:ml-16 leading-relaxed">
            17-year-old full-stack developer from Turkey/Syria, passionate about building 
            exceptional digital experiences with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Stats - Mobile Optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-3 sm:p-4 lg:p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl text-gold mb-1 sm:mb-2 flex items-center justify-center gap-1 sm:gap-2">
                <span className="text-base sm:text-lg lg:text-xl text-gold/60">{stat.icon}</span>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Timeline - Mobile Optimized */}
          <div>
            <h2 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <FiTrendingUp className="text-gold text-base sm:text-xl" />
              Journey Timeline
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 sm:pl-8 border-l-2 border-gold/30 hover:border-gold transition-colors duration-300"
                >
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gold" />
                  <div className="text-xs sm:text-sm text-gold mb-1">{item.year}</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Principles & Tech Stack - Mobile Optimized */}
          <div>
            <h2 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <FiCheckCircle className="text-gold text-base sm:text-xl" />
              My Principles
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gold/10 text-gold text-sm sm:text-base flex-shrink-0">
                    {principle.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-white">{principle.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <FiLayers className="text-gold text-base sm:text-xl" />
              Tech Stack
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
                { icon: <SiNestjs className="text-red-500" />, name: "Nest.js" },
                { icon: <SiTypescript className="text-blue-500" />, name: "TS" },
                { icon: <SiReact className="text-cyan-400" />, name: "React" },
                { icon: <SiNodedotjs className="text-green-500" />, name: "Node" },
                { icon: <SiMongodb className="text-green-400" />, name: "Mongo" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-2 sm:p-3 lg:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300 text-center"
                >
                  <div className="text-xl sm:text-2xl flex justify-center mb-1 sm:mb-2">{tech.icon}</div>
                  <div className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 text-center"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-3 sm:mb-4">Ready to Collaborate?</h3>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with modern technology.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-gold text-black font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 text-sm sm:text-base"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:border-gold/30 transition-all duration-300 text-sm sm:text-base"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-white/5 py-6 sm:py-8 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <span>© 2024 Ammar Alibrahim</span>
          <span className="text-gold/50 hidden sm:inline">✦</span>
          <span className="text-center sm:text-left">Crafted with precision using Next.js</span>
        </div>
      </footer>
    </div>
  );
}