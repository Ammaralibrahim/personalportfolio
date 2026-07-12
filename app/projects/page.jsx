"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronRight, 
  FiExternalLink, FiX, FiGlobe, FiCalendar, FiUsers, FiCode,
  FiAward, FiTrendingUp
} from "react-icons/fi";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, 
  SiTailwindcss, SiFramer, SiThreedotjs, SiGooglecloud 
} from "react-icons/si";

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
          <Link href="/projects" className="text-gold transition-colors duration-300">Projects</Link>
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

const projects = [
  {
    id: 1,
    title: "Gamma Cities",
    description: "A virtual metaverse platform offering gaming-like immersion with diverse online spaces. Built with React.js and Three.js for 3D experiences, backed by Node.js, Express, and Google Cloud for secure data storage.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Three.js", "Google Cloud"],
    image: "/gammacities.png",
    link: "https://gammacities.com",
    featured: true,
    longDescription: "Gamma Cities is a groundbreaking metaverse platform that creates immersive virtual spaces for social interaction, gaming, and digital experiences. The platform utilizes cutting-edge WebGL and 3D rendering technologies to deliver seamless virtual environments. Users can create avatars, interact in real-time, and explore diverse virtual worlds with realistic physics and lighting.",
    features: [
      "Real-time 3D rendering with Three.js",
      "Multi-user synchronization",
      "Avatar customization system",
      "Virtual event hosting",
      "Secure payment integration",
      "Cloud-based asset storage"
    ],
    status: "Live",
    launchDate: "2023",
    teamSize: "2 developers",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    title: "ASAK",
    description: "An international company based in Turkey, specializing in building startups, delivering digital services, and providing logistics, import, and export solutions.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "GSAP", "Framer Motion"],
    image: "/asak.png",
    link: "https://asakcompany.vercel.app/asak",
    featured: true,
    longDescription: "ASAK is a comprehensive digital platform for an international company group that incubates startups and provides various business services. The platform serves as a central hub showcasing multiple ventures including B2B marketplaces, service platforms, and logistics solutions. Built with performance optimization and SEO in mind.",
    features: [
      "Multi-language support",
      "Advanced animations with GSAP",
      "SEO optimized pages",
      "Real-time dashboard",
      "API integration",
      "Mobile-first responsive design"
    ],
    status: "In Development",
    launchDate: "2025",
    teamSize: "1 (Ammar Alibrahim)",
    role: "Project Leader & Full Stack Developer"
  },
  {
    id: 3,
    title: "GammaAssets",
    description: "Blockchain-powered real estate investment platform for metaverse properties. Enables fractional ownership with secure transactions and portfolio management.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Blockchain"],
    image: "/gammaassets.png",
    link: "https://gammaassets.com/",
    featured: false,
    longDescription: "GammaAssets revolutionizes real estate investment by leveraging blockchain technology for fractional ownership of virtual properties. The platform provides secure smart contracts, transparent transaction history, and real-time portfolio tracking.",
    features: [
      "Blockchain-based ownership",
      "Smart contract integration",
      "Real-time portfolio tracking",
      "Crypto payment gateway",
      "Investment analytics dashboard",
      "Secure wallet integration"
    ],
    status: "Live",
    launchDate: "2023",
    teamSize: "2 developers",
    role: "Full Stack Developer, UI/UX Designer"
  },
  {
    id: 4,
    title: "BrightEdu",
    description: "Modern educational platform with parallax effects and smooth animations. Optimized for performance with SSR, ISR, and responsive design across all devices.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Parallax"],
    image: "/brightedu.png",
    link: "https://brightedu.vercel.app/",
    featured: false,
    longDescription: "BrightEdu is an innovative educational platform designed to make learning engaging through interactive animations and parallax effects. The platform offers courses, progress tracking, and interactive learning modules with focus on user experience and accessibility.",
    features: [
      "Interactive course modules",
      "Progress tracking system",
      "Real-time notifications",
      "Video streaming integration",
      "Assessment tools",
      "Certificate generation"
    ],
    status: "Live",
    launchDate: "2023",
    teamSize: "1 (Ammar Alibrahim)",
    role: "Project Lead & Full Stack Developer"
  },
  {
    id: 5,
    title: "Gamma Universe",
    description: "Central hub for all Gamma company platforms. Comprehensive showcase with integrated navigation and unified design system.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/gammauniverse.png",
    link: "https://www.gammauniverse.io/",
    featured: false,
    longDescription: "Gamma Universe serves as the central portal connecting all Gamma ecosystem platforms. It provides unified authentication, cross-platform navigation, and comprehensive analytics for the entire product suite.",
    features: [
      "Unified authentication system",
      "Cross-platform navigation",
      "Analytics dashboard",
      "User profile management",
      "API documentation",
      "Support ticket system"
    ],
    status: "Live",
    launchDate: "2023",
    teamSize: "1 (Ammar Alibrahim)",
    role: "Full Stack Developer"
  },
  {
    id: 6,
    title: "Gamma Studio",
    description: "Promotional platform for accessing metaverse spaces. Showcases company projects with interactive demos and detailed case studies.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Cloud"],
    image: "/gammastudio.png",
    link: "https://gammastudio.io",
    featured: false,
    longDescription: "Gamma Studio is the creative arm of the Gamma ecosystem, showcasing cutting-edge metaverse projects through interactive demos and detailed case studies.",
    features: [
      "Interactive project demos",
      "Case study presentations",
      "Virtual tour integration",
      "Client portal",
      "Project management tools",
      "Team collaboration features"
    ],
    status: "Live",
    launchDate: "2023",
    teamSize: "1 (Ammar Alibrahim)",
    role: "Full Stack Developer"
  },
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
  "GSAP": <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-lime-500 rounded" />,
  "Blockchain": <div className="w-4 h-4 bg-gradient-to-r from-gold to-yellow-500 rounded" />,
  "Google Cloud": <SiGooglecloud className="text-blue-400" />,
  "Parallax": <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded" />
};

// Project Detail Modal
const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-gradient-to-br from-black to-gray-900 border border-gold/20 shadow-2xl shadow-gold/10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
            >
              <FiX className="text-white text-xl group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm">
                      {project.status}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-gray-300 text-sm">
                      {project.launchDate}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-xl font-medium text-gold mb-4 flex items-center gap-2">
                        <FiCode className="text-gold" />
                        Project Overview
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gold mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features?.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                          >
                            <div className="p-1.5 rounded-lg bg-gold/10">
                              <div className="w-2 h-2 bg-gold rounded-full" />
                            </div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg font-medium text-gold mb-4">Project Info</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gold/10">
                            <FiUsers className="text-gold" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Team Size</p>
                            <p className="text-white font-medium">{project.teamSize}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gold/10">
                            <FiCalendar className="text-gold" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Launch Date</p>
                            <p className="text-white font-medium">{project.launchDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gold/10">
                            <FiCode className="text-gold" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">My Role</p>
                            <p className="text-white font-medium">{project.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg font-medium text-gold mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                          >
                            {technologyIcons[tech] || <div className="w-4 h-4 bg-gray-500 rounded" />}
                            <span className="text-sm text-gray-300">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gold text-black font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40"
                    >
                      <FiGlobe />
                      Visit Live Project
                      <FiExternalLink className="ml-1" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

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
            <h1 className="text-6xl md:text-7xl font-light tracking-wider">Projects</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl ml-16 leading-relaxed">
            A collection of my work showcasing modern web development, 
            innovative solutions, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FiAward className="text-gold" />
            <h2 className="text-sm uppercase tracking-wider text-gray-400">Featured Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                        <span>{project.status}</span>
                        <span className="text-gold/50">|</span>
                        <span>{project.launchDate}</span>
                      </div>
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-gold transition-colors"
                    >
                      <FiExternalLink className="text-xl" />
                    </motion.a>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                      >
                        {technologyIcons[tech] || <div className="w-3 h-3 bg-gray-500 rounded" />}
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 text-center py-2.5 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-medium hover:bg-gold/20 transition-all duration-300"
                    >
                      View Project
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FiTrendingUp className="text-gold" />
            <h2 className="text-sm uppercase tracking-wider text-gray-400">All Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-white group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gold transition-colors"
                  >
                    <FiExternalLink className="text-sm" />
                  </a>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 text-xs text-gray-500">
                      {technologyIcons[tech] || <div className="w-2.5 h-2.5 bg-gray-500 rounded" />}
                      <span className="truncate max-w-[50px]">{tech}</span>
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 text-gold text-sm hover:text-gold-light transition-colors duration-300 flex items-center gap-1"
                >
                  View Details <FiChevronRight className="text-xs" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

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