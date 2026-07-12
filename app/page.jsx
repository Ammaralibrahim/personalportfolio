"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronRight, 
  FiCode, FiServer, FiDatabase, FiLayers, FiCpu, FiBox, FiFileText,
  FiAward, FiTrendingUp, FiUsers
} from "react-icons/fi";
import { 
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, 
  SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiFramer, SiDocker,
  SiAngular, SiRedux
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

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
          <Link href="/about" className="text-gray-400 hover:text-gold transition-colors duration-300">About</Link>
          <Link href="/contact" className="px-6 py-2.5 rounded-full bg-gold text-black text-sm font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

const SocialLinks = () => (
  <div className="flex gap-4">
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
        className="text-gray-500 hover:text-gold transition-all duration-300 text-xl"
      >
        {link.icon}
      </motion.a>
    ))}
  </div>
);

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

  const colorMap = {
    "TypeScript": "from-blue-500/20 to-blue-600/20",
    "React.js": "from-cyan-500/20 to-cyan-600/20",
    "Next.js": "from-white/10 to-gray-500/10",
    "Node.js": "from-green-500/20 to-green-600/20",
    "Nest.js": "from-red-500/20 to-red-600/20",
    "Express.js": "from-gray-500/20 to-gray-600/20",
    "MongoDB": "from-green-400/20 to-green-500/20",
    "MySQL": "from-blue-400/20 to-blue-500/20",
    "Tailwind CSS": "from-teal-400/20 to-teal-500/20",
    "Framer Motion": "from-pink-500/20 to-pink-600/20",
    "Docker": "from-blue-400/20 to-blue-500/20",
    "Angular": "from-red-500/20 to-red-600/20",
    "NgRx": "from-purple-500/20 to-purple-600/20"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[skill.name] || 'from-gold/10 to-gold/5'} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl text-gray-400 group-hover:text-gold transition-colors duration-300">
            {iconMap[skill.name] || <FiCode />}
          </span>
          <h3 className="text-white font-medium group-hover:text-gold transition-colors duration-300">{skill.name}</h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{skill.description}</p>
        <div className="mt-3 h-0.5 w-0 bg-gold/30 group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export default function Home() {
  const skills = [
    { name: "TypeScript", description: "Strongly typed superset of JavaScript", category: "Frontend" },
    { name: "React.js", description: "Component-based UI library", category: "Frontend" },
    { name: "Next.js", description: "Full-stack React framework", category: "Fullstack" },
    { name: "Node.js", description: "Server-side JavaScript runtime", category: "Backend" },
    { name: "Nest.js", description: "Scalable Node.js framework", category: "Backend" },
    { name: "Express.js", description: "Minimalist web framework", category: "Backend" },
    { name: "MongoDB", description: "NoSQL document database", category: "Database" },
    { name: "MySQL", description: "Relational database management", category: "Database" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", category: "Frontend" },
    { name: "Framer Motion", description: "Production-ready animations", category: "Animation" },
    { name: "Docker", description: "Containerization platform", category: "DevOps" },
    { name: "Angular", description: "Platform for web apps", category: "Frontend" },
    { name: "NgRx", description: "State management for Angular", category: "State Management" },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: <FiAward /> },
    { value: "15+", label: "Technologies", icon: <FiLayers /> },
    { value: "100%", label: "Client Satisfaction", icon: <FiUsers /> },
    { value: "3+", label: "Years Experience", icon: <FiTrendingUp /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-light">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <section className="mb-32">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm tracking-wider">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-light leading-[1.1] mb-8"
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
              className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              Crafting exceptional digital experiences with cutting-edge technologies. 
              Specializing in <span className="text-gold">React</span>,{" "}
              <span className="text-gold-light">Next.js</span>, and{" "}
              <span className="text-gold">Node.js</span> ecosystems. 
              Passionate about building scalable, performant applications with clean architecture.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-16"
            >
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-gold text-black rounded-full text-sm font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 flex items-center gap-2"
              >
                Get in touch
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/projects"
                className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2"
              >
                View my work <FiChevronRight className="text-gold" />
              </Link>
              <SocialLinks />
            </motion.div>

            {/* CV Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://flowcv.com/resume/cis7t2joueri"
                target="_blank"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/30 hover:border-gold/60 transition-all duration-300 group"
              >
                <FiFileText className="text-gold group-hover:text-gold-light transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">View My CV</span>
                <FiChevronRight className="text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-gold mb-2 flex items-center justify-center gap-2">
                    <span className="text-xl text-gold/60">{stat.icon}</span>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 bg-gold/30" />
              <h2 className="text-3xl font-light tracking-wider">Tech Stack</h2>
            </div>
            <p className="text-gray-500 ml-16">Technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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