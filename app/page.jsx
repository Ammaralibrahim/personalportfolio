"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiChevronRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiBox
} from "react-icons/fi";
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiFramer, SiDocker, SiAngular, SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Navbar from "./components/Navbar";


export default function Home() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e, MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-blue-500" />, 
      color: "blue",
      description: "Strongly typed superset of JavaScript",
      level: 95,
      category: "Frontend"
    },
    { 
      name: "React.js", 
      icon: <SiReact className="text-cyan-400" />, 
      color: "cyan",
      description: "Component-based UI library",
      level: 98,
      category: "Frontend"
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs className="text-white" />, 
      color: "white",
      description: "Full-stack React framework",
      level: 96,
      category: "Fullstack"
    },
    { 
      name: "Node.js", 
      icon: <SiNodedotjs className="text-green-500" />, 
      color: "green",
      description: "Server-side JavaScript runtime",
      level: 94,
      category: "Backend"
    },
    { 
      name: "Nest.js", 
      icon: <SiNestjs className="text-red-500" />, 
      color: "red",
      description: "Scalable Node.js framework",
      level: 92,
      category: "Backend"
    },
    { 
      name: "Express.js", 
      icon: <SiExpress className="text-gray-300" />, 
      color: "gray",
      description: "Minimalist web framework",
      level: 93,
      category: "Backend"
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-green-400" />, 
      color: "green",
      description: "NoSQL document database",
      level: 90,
      category: "Database"
    },
    { 
      name: "MySQL", 
      icon: <SiMysql className="text-blue-400" />, 
      color: "blue",
      description: "Relational database management",
      level: 88,
      category: "Database"
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss className="text-teal-400" />, 
      color: "teal",
      description: "Utility-first CSS framework",
      level: 97,
      category: "Frontend"
    },
    { 
      name: "Framer Motion", 
      icon: <TbBrandFramerMotion className="text-pink-500" />, 
      color: "pink",
      description: "Production-ready animations",
      level: 94,
      category: "Animation"
    },
    { 
      name: "Docker", 
      icon: <SiDocker className="text-blue-400" />, 
      color: "blue",
      description: "Containerization platform",
      level: 85,
      category: "DevOps"
    },
    { 
      name: "Angular", 
      icon: <SiAngular className="text-red-600" />, 
      color: "red",
      description: "Platform for web apps",
      level: 82,
      category: "Frontend"
    },
    { 
      name: "NgRx", 
      icon: <SiRedux className="text-purple-600" />, 
      color: "purple",
      description: "State management for Angular",
      level: 80,
      category: "State Management"
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/Ammaralibrahim", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/ammaralibrahim", label: "LinkedIn" },
    { icon: <FiTwitter />, href: "https://twitter.com/ammaralibrahim", label: "Twitter" },
    { icon: <FiMail />, href: "mailto:ammar@example.com", label: "Email" },
  ];

  const categoryIcons = {
    Frontend: <FiCode className="text-blue-400" />,
    Backend: <FiServer className="text-green-400" />,
    Database: <FiDatabase className="text-yellow-400" />,
    Fullstack: <FiLayers className="text-purple-400" />,
    Animation: <FiCpu className="text-pink-400" />,
    DevOps: <FiBox className="text-orange-400" />,
    "State Management": <FiCpu className="text-indigo-400" />
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 blur-3xl"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #4a5568 1px, transparent 1px),
                            linear-gradient(to bottom, #4a5568 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
          }}
          animate={{
            x: `+=${Math.random() * 100 - 50}`,
            y: `+=${Math.random() * 100 - 50}`,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <main className="relative z-10 container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Navigation */}
      <Navbar/>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Ammar
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  Alibrahim
                </span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-8 rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xl font-light text-gray-300">
                  <span className="font-semibold text-white">Full-Stack</span> Developer
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12"
            >
              Crafting exceptional digital experiences with cutting-edge technologies. 
              Specializing in <span className="text-cyan-300 font-medium">React</span>,{" "}
              <span className="text-blue-300 font-medium">Next.js</span>, and{" "}
              <span className="text-green-300 font-medium">Node.js</span> ecosystems. 
              Passionate about building scalable, performant applications with clean architecture.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 mb-20"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-cyan-400/50 transition-all">
                    <div className="text-xl">{link.icon}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Tech Stack
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Mastery of modern technologies for building robust applications
                </p>
              </motion.div>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(categoryIcons).map(([category, icon]) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/30 transition-all flex items-center gap-2"
                >
                  {icon}
                  <span className="text-sm">{category}</span>
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{skill.icon}</div>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                        {skill.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {skill.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {skill.description}
                    </p>
                    
                    {/* Skill Level Indicator */}
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                          className={`h-full rounded-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600`}
                        />
                      </div>
                    </div>
                    
                    {/* Hover Details */}
                    <AnimatePresence>
                      {activeSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Experience</span>
                            <span className="text-white">2+ years</span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-2">
                            <span className="text-gray-400">Projects</span>
                            <span className="text-white">15+</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "3+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "∞", label: "Coffee Cups" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              {/* Glowing Orb */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl" />
              
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to Build Something Amazing?
                  </span>
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Let&apos;s collaborate on your next project and create something extraordinary together.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-lg inline-flex items-center gap-3"
                  >
                    Start a Project
                    <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur opacity-0 group-hover:opacity-70 transition-opacity" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-white/10 text-center"
        >
          <div className="text-gray-500 text-sm">
            Crafted with passion using Next.js, Tailwind CSS & Framer Motion
          </div>
          <div className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} Ammar Alibrahim. All rights reserved.
          </div>
        </motion.footer>
      </main>
    </div>
  );
}