"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiChevronRight, FiCode, FiServer, FiLayers, FiTarget, 
  FiShoppingBag, FiUsers, FiCheck, FiClock, FiMenu, FiX
} from "react-icons/fi";

// Mobile Navbar (aynı navbar component'ini kullanabilirsiniz)
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

const services = [
  {
    id: 1,
    title: "Full-Stack Web Application",
    description: "End-to-end web application development with Next.js 14, Nest.js, and modern technologies.",
    icon: <FiLayers />,
    features: [
      "Next.js 14 App Router",
      "Nest.js Backend API",
      "MongoDB/MySQL Database",
      "Authentication & Authorization",
      "Real-time Features",
      "API Integration",
      "Performance Optimization",
      "Deployment & DevOps"
    ],
    price: { project: "$2,200 - $7,500", hourly: "$30-45/hour" },
    timeline: "4-8 weeks",
    techStack: ["Next.js", "Nest.js", "TypeScript", "Tailwind", "MongoDB"],
    bestFor: ["Startups", "SaaS Products", "Enterprise"],
    popular: true,
    valueProposition: "Launch a scalable, production-ready application"
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "High-performance, responsive frontend development with React & Next.js.",
    icon: <FiCode />,
    features: [
      "React/Next.js Development",
      "Responsive Design",
      "Component Libraries",
      "State Management",
      "Performance Optimization",
      "SEO Optimization",
      "Animation & Interactions",
      "Cross-browser Compatibility"
    ],
    price: { project: "$1,500 - $4,000", hourly: "$25-40/hour" },
    timeline: "2-4 weeks",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    bestFor: ["Landing Pages", "Web Apps", "Portfolios"],
    popular: false,
    valueProposition: "Convert visitors with stunning, high-performance interfaces"
  },
  {
    id: 3,
    title: "Backend API Development",
    description: "Scalable backend APIs and microservices with Nest.js and Node.js.",
    icon: <FiServer />,
    features: [
      "REST/GraphQL APIs",
      "Microservices Architecture",
      "Database Design",
      "Authentication System",
      "WebSocket Integration",
      "Caching & Performance",
      "API Documentation",
      "Security Implementation"
    ],
    price: { project: "$1,800 - $6,000", hourly: "$30-45/hour" },
    timeline: "3-6 weeks",
    techStack: ["Nest.js", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
    bestFor: ["API Services", "Backend Systems", "Enterprise"],
    popular: true,
    valueProposition: "Build robust, secure, and scalable API foundations"
  },
  {
    id: 4,
    title: "MVP Development",
    description: "Rapid MVP development for startups with focus on speed to market.",
    icon: <FiTarget />,
    features: [
      "Rapid Prototyping",
      "Core Features Only",
      "Scalable Architecture",
      "Basic Analytics",
      "User Authentication",
      "Payment Integration",
      "Admin Dashboard",
      "Deployment Ready"
    ],
    price: { project: "$3,500 - $12,000", hourly: "$35-50/hour" },
    timeline: "6-10 weeks",
    techStack: ["Next.js", "Nest.js", "TypeScript", "Supabase", "Stripe"],
    bestFor: ["Startups", "Validating Ideas", "Investor Demos"],
    popular: true,
    valueProposition: "Validate your idea quickly with a functional MVP"
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description: "Full-featured e-commerce platforms with payment integration and admin panel.",
    icon: <FiShoppingBag />,
    features: [
      "Product Management",
      "Shopping Cart",
      "Payment Gateway",
      "User Accounts",
      "Order Tracking",
      "Inventory Management",
      "Admin Dashboard",
      "Analytics & Reports"
    ],
    price: { project: "$5,000 - $18,000", hourly: "$40-55/hour" },
    timeline: "8-12 weeks",
    techStack: ["Next.js", "Nest.js", "Stripe", "MongoDB", "Redis"],
    bestFor: ["Online Stores", "Marketplaces", "Digital Products"],
    popular: false,
    valueProposition: "Launch a complete online store with secure payments"
  },
  {
    id: 6,
    title: "Technical Consultation",
    description: "Expert advice on architecture, code reviews, and technical decisions.",
    icon: <FiUsers />,
    features: [
      "Architecture Review",
      "Code Quality Audit",
      "Performance Analysis",
      "Tech Stack Selection",
      "Team Mentoring",
      "Best Practices",
      "Security Assessment",
      "Scalability Planning"
    ],
    price: { project: "Custom Quote", hourly: "$40-60/hour" },
    timeline: "Flexible",
    techStack: ["Architecture", "DevOps", "Security", "Performance"],
    bestFor: ["Tech Leads", "Startups", "Growing Teams"],
    popular: false,
    valueProposition: "Make confident technical decisions and optimize your stack"
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(1);

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider">Services</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl ml-11 sm:ml-16 leading-relaxed">
            Professional web development services with competitive pricing tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedService(service.id)}
              className={`group relative cursor-pointer transition-all duration-500 ${
                selectedService === service.id ? 'scale-[1.02]' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10">
                  <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-black text-[10px] sm:text-xs font-bold tracking-wider animate-pulse shadow-lg shadow-gold/30">
                    POPULAR
                  </div>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                selectedService === service.id ? 'opacity-100' : ''
              }`} />
              
              <div className={`relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-500 h-full ${
                selectedService === service.id 
                  ? 'border-gold/50 shadow-xl shadow-gold/10' 
                  : 'border-white/10 group-hover:border-gold/30'
              }`}>
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gold/10 border border-gold/20 flex-shrink-0">
                    <div className="text-xl sm:text-2xl text-gold">
                      {service.icon}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white group-hover:text-gold transition-colors duration-300 truncate">
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center gap-1"><FiClock className="text-gold" /> {service.timeline}</span>
                      <span className="text-gold/50 hidden xs:inline">|</span>
                      <span className="text-gold text-xs sm:text-sm">{service.price.hourly}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-gold/5 border border-gold/20">
                  <p className="text-xs sm:text-sm text-gold font-medium flex items-center gap-2">
                    <FiTarget className="text-gold flex-shrink-0" />
                    <span className="line-clamp-1">{service.valueProposition}</span>
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {service.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] sm:text-xs hover:border-gold/30 hover:text-gold transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] sm:text-xs">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="mt-auto pt-4 sm:pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <h4 className="text-gray-400 text-xs sm:text-sm">Project Price</h4>
                      <p className="text-lg sm:text-xl lg:text-2xl font-light text-gold">
                        {service.price.project}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {service.bestFor.map((item, idx) => (
                        <span key={idx} className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-gray-300 text-[10px] sm:text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 sm:mt-