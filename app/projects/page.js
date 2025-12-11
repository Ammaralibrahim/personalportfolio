"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiFramer,
  SiThreedotjs
} from "react-icons/si";

// Proje verileri
const projects = [
  {
    id: 1,
    title: "Gamma Cities",
    description: "A virtual metaverse platform offering gaming-like immersion with diverse online spaces. Built with React.js and Three.js for 3D experiences, backed by Node.js, Express, and Google Cloud for secure data storage.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Three.js", "Google Cloud"],
    image: "/gammacities.png",
    link: "https://gammacities.com",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 2,
    title: "GammaAssets",
    description: "Blockchain-powered real estate investment platform for metaverse properties. Enables fractional ownership with secure transactions and portfolio management.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Blockchain"],
    image: "/gammaassets.png",
    link: "https://gammaassets.com/",
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "BrightEdu",
    description: "Modern educational platform with parallax effects and smooth animations. Optimized for performance with SSR, ISR, and responsive design across all devices.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Parallax"],
    image: "/brightedu.png",
    link: "https://brightedu.vercel.app/",
    featured: false,
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 4,
    title: "Gamma Universe",
    description: "Central hub for all Gamma company platforms. Comprehensive showcase with integrated navigation and unified design system.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/gammauniverse.png",
    link: "https://www.gammauniverse.io/",
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "Gamma Studio",
    description: "Promotional platform for accessing metaverse spaces. Showcases company projects with interactive demos and detailed case studies.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Cloud"],
    image: "/gammastudio.png",
    link: "https://gammastudio.io",
    featured: false,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 6,
    title: "Reyhana Perfumes",
    description: "E-commerce platform for luxury perfumes with seamless shopping experience. Fast performance and elegant product presentation.",
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    image: "/reyhana-perfumes.png",
    link: "https://reyhana-perfumes.vercel.app/",
    featured: false,
    gradient: "from-pink-500/20 to-rose-500/20"
  }
];

const technologyIcons = {
  "React.js": <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  "Three.js": <SiThreedotjs className="text-blue-300" />,
  "Blockchain": <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded" />,
  "Google Cloud": <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded" />,
  "Parallax": <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded" />
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl -top-40 -left-40" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -bottom-40 -right-40" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #4a5568 1px, transparent 1px),
                            linear-gradient(to bottom, #4a5568 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
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
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="flex items-center justify-between mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            <Link href="/">AA.</Link>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="group relative px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <span className="text-white/80 group-hover:text-white text-sm font-medium">
                  Home
                </span>
                <FiChevronRight className="inline ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.3, duration: 1 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-8 rounded-full"
            />
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of my work showcasing modern web development, 
              innovative solutions, and cutting-edge technologies.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Featured Work
                </span>
              </h2>
              <p className="text-gray-400">Highlighted projects that represent my best work</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group-hover:border-cyan-400/30 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      <div 
                        className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                        style={{
                          backgroundImage: `url('${project.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FiExternalLink className="text-xl" />
                        </motion.a>
                      </div>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                          >
                            {technologyIcons[tech] || <div className="w-3 h-3 bg-gray-500 rounded" />}
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all group/btn"
                      >
                        View Project
                        <FiExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  All Projects
                </span>
              </h2>
              <p className="text-gray-400">Complete portfolio of my development work</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative h-full rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group-hover:border-cyan-400/30 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      <div 
                        className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                        style={{
                          backgroundImage: `url('${project.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-white truncate">{project.title}</h3>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-2"
                        >
                          <FiExternalLink className="text-sm" />
                        </motion.a>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies (Compact) */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                          >
                            {technologyIcons[tech] || <div className="w-2.5 h-2.5 bg-gray-500 rounded" />}
                            <span className="truncate max-w-[60px]">{tech}</span>
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Button */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
                      >
                        View Details
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {[
              { value: "6+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
              { value: "15+", label: "Technologies" },
              { value: "∞", label: "Passion" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl" />
              
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Have a Project in Mind?
                  </span>
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Let&apos;s collaborate and bring your vision to life with cutting-edge technology.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium inline-flex items-center gap-3"
                  >
                    Contact Me
                    <FiMail />
                  </motion.a>
                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium inline-flex items-center gap-3 hover:border-cyan-400/30 transition-all"
                  >
                    Back to Home
                    <FiChevronRight />
                  </motion.a>
                </div>
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
          <div className="flex justify-center gap-6 mb-4">
            {[
              { icon: <FiGithub />, href: "https://github.com/Ammaralibrahim", label: "GitHub" },
              { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/ammar-alibrahim/", label: "LinkedIn" },
              { icon: <FiTwitter />, href: "https://twitter.com/ammaralibrahim", label: "Twitter" },
              { icon: <FiMail />, href: "mailto:ammaryasir8088@gmail.com", label: "Email" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="relative w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-cyan-400/50 transition-all">
                  <div className="text-xl">{link.icon}</div>
                </div>
              </motion.a>
            ))}
          </div>
          
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