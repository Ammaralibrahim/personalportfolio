"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiChevronRight, FiCode, FiServer, FiLayers, FiTarget, 
  FiShoppingBag, FiUsers, FiCheck, FiClock, FiCalendar,
  FiDollarSign, FiBox
} from "react-icons/fi";

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
          <Link href="/services" className="text-gold transition-colors duration-300">Services</Link>
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
    bestFor: ["Startups", "SaaS Products", "Enterprise Apps"],
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
            <h1 className="text-6xl md:text-7xl font-light tracking-wider">Services</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl ml-16 leading-relaxed">
            Professional web development services with competitive pricing tailored to your business needs. 
            From MVP to enterprise solutions, I deliver quality code and exceptional value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedService(service.id)}
              className={`group relative cursor-pointer transition-all duration-500 ${
                selectedService === service.id ? 'scale-[1.02]' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-black text-xs font-bold tracking-wider animate-pulse shadow-lg shadow-gold/30">
                    POPULAR
                  </div>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                selectedService === service.id ? 'opacity-100' : ''
              }`} />
              
              <div className={`relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-500 h-full ${
                selectedService === service.id 
                  ? 'border-gold/50 shadow-xl shadow-gold/10' 
                  : 'border-white/10 group-hover:border-gold/30'
              }`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <div className="text-2xl text-gold">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><FiClock /> {service.timeline}</span>
                      <span className="text-gold/50">|</span>
                      <span className="text-gold">{service.price.hourly}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6 p-4 rounded-xl bg-gold/5 border border-gold/20">
                  <p className="text-sm text-gold font-medium flex items-center gap-2">
                    <FiTarget className="text-gold" />
                    {service.valueProposition}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-gold/30 hover:text-gold transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2 text-sm">
                    <FiCheck className="text-gold" />
                    Included Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Project Price</h4>
                      <p className="text-2xl font-light text-gold">
                        {service.price.project}
                      </p>
                    </div>
                    <div className="text-right">
                      <h4 className="text-gray-400 text-sm mb-1">Best for</h4>
                      <div className="flex gap-2">
                        {service.bestFor.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6"
                  >
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="block w-full py-3.5 rounded-xl bg-gold text-black font-medium text-center hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 group/link"
                    >
                      Get This Service
                      <FiChevronRight className="inline ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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