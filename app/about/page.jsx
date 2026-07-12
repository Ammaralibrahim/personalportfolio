"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiCode, FiServer, FiLayers, FiTarget, FiAward, FiCalendar, 
  FiMapPin, FiGlobe, FiUsers, FiCheckCircle, FiCoffee, FiZap,
  FiBook, FiTrendingUp
} from "react-icons/fi";
import { SiNextdotjs, SiNestjs, SiTypescript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-gold/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-light tracking-[0.2em] text-gold hover:text-gold-light transition-colors">
          AA.
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="text-gray-400 hover:text-gold transition-colors duration-300">Services</Link>
          <Link href="/projects" className="text-gray-400 hover:text-gold transition-colors duration-300">Projects</Link>
          <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors duration-300">Blog</Link>
          <Link href="/about" className="text-gold transition-colors duration-300">About</Link>
          <Link href="/contact" className="px-6 py-2.5 rounded-full bg-gold text-black text-sm font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
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
    { value: "50+", label: "Projects Completed", icon: <FiTarget /> },
    { value: "15+", label: "Technologies Mastered", icon: <FiLayers /> },
    { value: "100%", label: "Client Satisfaction", icon: <FiAward /> },
    { value: "3+", label: "Years Experience", icon: <FiCalendar /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-light">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/30" />
            <h1 className="text-6xl md:text-7xl font-light tracking-wider">About</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl ml-16 leading-relaxed">
            17-year-old full-stack developer from Turkey/Syria, passionate about building 
            exceptional digital experiences with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl text-gold mb-2 flex items-center justify-center gap-2">
                <span className="text-xl text-gold/60">{stat.icon}</span>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <FiTrendingUp className="text-gold" />
              Journey Timeline
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gold/30 hover:border-gold transition-colors duration-300"
                >
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gold" />
                  <div className="text-sm text-gold mb-1">{item.year}</div>
                  <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Principles & Tech Stack */}
          <div>
            <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
              <FiCheckCircle className="text-gold" />
              My Principles
            </h2>
            <div className="space-y-4 mb-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-gold/10 text-gold">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{principle.title}</h3>
                    <p className="text-gray-400 text-sm">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl font-light mb-6 flex items-center gap-3">
              <FiLayers className="text-gold" />
              Tech Stack
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
                { icon: <SiNestjs className="text-red-500" />, name: "Nest.js" },
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
                { icon: <SiReact className="text-cyan-400" />, name: "React" },
                { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
                { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300 text-center"
                >
                  <div className="text-2xl flex justify-center mb-2">{tech.icon}</div>
                  <div className="text-xs text-gray-500">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 text-center"
        >
          <h3 className="text-3xl font-light mb-4">Ready to Collaborate?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with modern technology and exceptional execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gold text-black font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:border-gold/30 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-white/5 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <span>© 2024 Ammar Alibrahim</span>
          <span className="text-gold/50">✦</span>
          <span>Crafted with precision using Next.js, Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}