"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronRight, 
  FiCode, FiServer, FiDatabase, FiLayers, FiCpu, FiBox, FiFileText,
  FiAward, FiTrendingUp, FiUsers, FiMenu, FiX
} from "react-icons/fi";
import { 
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, 
  SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiFramer, SiDocker,
  SiAngular, SiRedux
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// Mobile Optimized Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu açıkken scroll'u engelle
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-gold text-black text-sm font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
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

      {/* Navbar için boşluk */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

// Mobile Optimized Social Links
const SocialLinks = () => (
  <div className="flex gap-3 sm:gap-4">
    {[
      { icon: <FiGithub />, href: "https://github.com/Ammaralibrahim" },
      { icon: <FiLinkedin />, href: "https://linkedin.com/in/ammaralibrahim" },
      { icon: <FiTwitter />, href: "https://twitter.com/ammaralibrahim" },
      { icon: <FiMail />, href: "mailto:ammaryasir8088@gmail.com" },
    ].map((link, i) => (
      <motion.a
        key={i}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-500 hover:text-gold transition-all duration-300 text-lg sm:text-xl p-2 sm:p-0"
      >
        {link.icon}
      </motion.a>
    ))}
  </div>
);

// Mobile Optimized Skill Card
const SkillCard = ({ skill, index }) => {
  const iconMap = {
    "TypeScript": <SiTypescript className="text-blue-400" />,
    "React.js": <SiReact className="text-cyan-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "Nest.js": <SiNestjs className="text-red-500" />,
    "Express.js": <SiExpress className="text-gray-300" />,
    "MongoDB": <SiMongodb className="text-green-400" />,
    "MySQL": <SiMysql className="text-blue-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
    "Framer Motion": <TbBrandFramerMotion className="text-pink-500" />,
    "Docker": <SiDocker className="text-blue-400" />,
    "Angular": <SiAngular className="text-red-600" />,
    "NgRx": <SiRedux className="text-purple-600" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
        <div className="flex items-center gap-3 mb-2 sm:mb-3">
          <span className="text-xl sm:text-2xl text-gray-400 group-hover:text-gold transition-colors duration-300">
            {iconMap[skill.name] || <FiCode />}
          </span>
          <h3 className="text-sm sm:text-base text-white font-medium group-hover:text-gold transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{skill.description}</p>
        <div className="mt-3 h-0.5 w-0 bg-gold/30 group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export default function Home() {
  const skills = [
    { name: "TypeScript", description: "Strongly typed superset of JavaScript" },
    { name: "React.js", description: "Component-based UI library" },
    { name: "Next.js", description: "Full-stack React framework" },
    { name: "Node.js", description: "Server-side JavaScript runtime" },
    { name: "Nest.js", description: "Scalable Node.js framework" },
    { name: "Express.js", description: "Minimalist web framework" },
    { name: "MongoDB", description: "NoSQL document database" },
    { name: "MySQL", description: "Relational database management" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "Framer Motion", description: "Production-ready animations" },
    { name: "Docker", description: "Containerization platform" },
    { name: "Angular", description: "Platform for web apps" },
    { name: "NgRx", description: "State management for Angular" },
  ];

  const stats = [
    { value: "50+", label: "Projects", icon: <FiAward /> },
    { value: "15+", label: "Technologies", icon: <FiLayers /> },
    { value: "100%", label: "Satisfaction", icon: <FiUsers /> },
    { value: "3+", label: "Years", icon: <FiTrendingUp /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-light overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-20">
        {/* Hero */}
        <section className="mb-20 sm:mb-32">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm tracking-wider">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6 sm:mb-8"
            >
              Ammar
              <br />
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Alibrahim
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl leading-relaxed"
            >
              Crafting exceptional digital experiences with cutting-edge technologies. 
              Specializing in <span className="text-gold">React</span>,{" "}
              <span className="text-gold-light">Next.js</span>, and{" "}
              <span className="text-gold">Node.js</span> ecosystems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
            >
              <Link 
                href="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gold text-black rounded-full text-sm sm:text-base font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 flex items-center gap-2"
              >
                Get in touch
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/projects"
                className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm sm:text-base flex items-center gap-2"
              >
                View my work <FiChevronRight className="text-gold" />
              </Link>
              <div className="w-full sm:w-auto mt-2 sm:mt-0">
                <SocialLinks />
              </div>
            </motion.div>

            {/* CV Button - Mobile Friendly */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 sm:mb-16"
            >
              <Link
                href="https://flowcv.com/resume/cis7t2joueri"
                target="_blank"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gold/30 hover:border-gold/60 transition-all duration-300 group w-full sm:w-auto justify-center"
              >
                <FiFileText className="text-gold group-hover:text-gold-light transition-colors text-sm sm:text-base" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">View My CV</span>
                <FiChevronRight className="text-gold group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
              </Link>
            </motion.div>

            {/* Stats - Mobile Optimized Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-16 border-t border-white/5"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-gold mb-1 sm:mb-2 flex items-center justify-center gap-2">
                    <span className="text-lg sm:text-xl text-gold/60">{stat.icon}</span>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills - Mobile Optimized Grid */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <div className="h-px w-8 sm:w-12 bg-gold/30" />
              <h2 className="text-2xl sm:text-3xl font-light tracking-wider">Tech Stack</h2>
            </div>
            <p className="text-gray-500 text-sm sm:text-base ml-11 sm:ml-16">Technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Mobile Optimized */}
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