"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiChevronRight, 
  FiCode, 
  FiServer, 
  FiLayers, 
  FiDatabase, 
  FiSmartphone, 
  FiShoppingBag,
  FiCloud,
  FiCheck,
  FiGlobe,
  FiBox,
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiUsers,
  FiTarget,
  FiBarChart2
} from "react-icons/fi";
import { SiNextdotjs, SiNestjs, SiReact, SiNodedotjs } from "react-icons/si";
import Navbar from "../components/Navbar";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Application",
    description: "End-to-end web application development with Next.js 14, Nest.js, and modern technologies.",
    icon: <FiLayers className="text-4xl text-cyan-400" />,
    gradient: "from-cyan-500/20 to-blue-500/20",
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
    price: {
      hourly: "$30-45/hour",
      project: "$2,200 - $7,500",
      retainer: "$1,000/month"
    },
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
    icon: <FiCode className="text-4xl text-green-400" />,
    gradient: "from-green-500/20 to-teal-500/20",
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
    price: {
      hourly: "$25-40/hour",
      project: "$1,500 - $4,000",
      retainer: "$800/month"
    },
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
    icon: <FiServer className="text-4xl text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20",
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
    price: {
      hourly: "$30-45/hour",
      project: "$1,800 - $6,000",
      retainer: "$900/month"
    },
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
    icon: <FiTarget className="text-4xl text-amber-400" />,
    gradient: "from-amber-500/20 to-orange-500/20",
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
    price: {
      hourly: "$35-50/hour",
      project: "$3,500 - $12,000",
      retainer: "$1,500/month"
    },
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
    icon: <FiShoppingBag className="text-4xl text-red-400" />,
    gradient: "from-red-500/20 to-pink-500/20",
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
    price: {
      hourly: "$40-55/hour",
      project: "$5,000 - $18,000",
      retainer: "$1,800/month"
    },
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
    icon: <FiUsers className="text-4xl text-indigo-400" />,
    gradient: "from-indigo-500/20 to-blue-500/20",
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
    price: {
      hourly: "$40-60/hour",
      project: "Custom Quote",
      retainer: "$800-2,000/month"
    },
    timeline: "Flexible",
    techStack: ["Architecture", "DevOps", "Security", "Performance"],
    bestFor: ["Tech Leads", "Startups", "Growing Teams"],
    popular: false,
    valueProposition: "Make confident technical decisions and optimize your stack"
  }
];

const pricingModels = [
  {
    name: "Fixed Price",
    icon: <FiDollarSign className="text-2xl" />,
    description: "Perfect for well-defined projects with clear requirements.",
    features: ["Predictable budget", "Fixed timeline", "Scope locked", "Milestone payments"],
    color: "from-green-500/20 to-emerald-500/20",
    bestFor: "Projects with clear specifications"
  },
  {
    name: "Time & Material",
    icon: <FiClock className="text-2xl" />,
    description: "Flexible approach for evolving projects and ongoing work.",
    features: ["Flexible scope", "Monthly billing", "Transparent hours", "Adaptive changes"],
    color: "from-blue-500/20 to-cyan-500/20",
    bestFor: "Agile development and evolving projects"
  },
  {
    name: "Retainer",
    icon: <FiCalendar className="text-2xl" />,
    description: "Ongoing support and development with priority access.",
    features: ["Priority support", "Monthly hours", "Quick response", "Proactive maintenance"],
    color: "from-purple-500/20 to-pink-500/20",
    bestFor: "Ongoing support and maintenance"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(1);
  const [hoveredModel, setHoveredModel] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl -top-40 -left-40" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -bottom-40 -right-40" />
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #4a5568 1px, transparent 1px),
                            linear-gradient(to bottom, #4a5568 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 sm:px-6 lg:px-8">
       <Navbar/>
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
                Services
              </span>
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.3, duration: 1 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-8 rounded-full"
            />
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional web development services with competitive pricing tailored to your business needs. 
              From MVP to enterprise solutions, I deliver quality code and exceptional value.
            </p>
            
            {/* Value Proposition Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
            >
              <FiCheck className="text-green-400" />
              <span className="text-green-300 text-sm font-medium">Competitive regional pricing • High ROI</span>
            </motion.div>
          </motion.div>

          {/* Pricing Models */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Flexible Pricing Models
                </span>
              </h2>
              <p className="text-gray-400">Choose the engagement model that fits your project and budget</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredModel(index)}
                  onMouseLeave={() => setHoveredModel(null)}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${model.color} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300 h-full">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6 mx-auto">
                      <div className="text-white">
                        {model.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white text-center mb-3">
                      {model.name}
                    </h3>
                    
                    <p className="text-gray-400 text-center mb-6">
                      {model.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-cyan-300 text-sm text-center font-medium">
                        Best for: {model.bestFor}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Development Services
                </span>
              </h2>
              <p className="text-gray-400">Comprehensive solutions with competitive pricing for your digital needs</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`group relative cursor-pointer ${
                    selectedService === service.id ? 'scale-[1.02]' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold animate-pulse">
                        POPULAR CHOICE
                      </div>
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    selectedService === service.id ? 'opacity-100' : ''
                  }`} />
                  
                  <div className={`relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border transition-all duration-300 h-full ${
                    selectedService === service.id 
                      ? 'border-cyan-400/50' 
                      : 'border-white/10 group-hover:border-cyan-400/30'
                  }`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <FiClock className="text-gray-400 text-sm" />
                            <span className="text-gray-400 text-sm">{service.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>
                    
                    {/* Value Proposition */}
                    <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                      <p className="text-sm text-cyan-300 font-medium flex items-center gap-2">
                        <FiTarget className="text-cyan-400" />
                        {service.valueProposition}
                      </p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FiCheck className="text-green-400" />
                        Included Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold mb-1">Project Price</h4>
                          <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {service.price.project}
                          </p>
                        </div>
                        <div className="text-right">
                          <h4 className="text-white font-semibold mb-1">Hourly Rate</h4>
                          <p className="text-xl font-bold text-white">
                            {service.price.hourly}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>Best for:</span>
                          <div className="flex gap-2">
                            {service.bestFor.map((item, idx) => (
                              <span key={idx} className="px-2 py-1 rounded bg-white/5">
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
                          className="block w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-center hover:from-cyan-600 hover:to-blue-600 transition-all group/link"
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
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Development Process
                </span>
              </h2>
              <p className="text-gray-400">Structured workflow for successful project delivery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Requirements analysis and planning",
                  icon: <FiTarget className="text-2xl" />,
                  detail: "Free consultation to understand your needs"
                },
                {
                  step: "02",
                  title: "Design",
                  description: "UI/UX design and architecture",
                  icon: <FiLayers className="text-2xl" />,
                  detail: "Wireframes and technical planning"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Agile development with weekly updates",
                  icon: <FiCode className="text-2xl" />,
                  detail: "Transparent progress tracking"
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Testing, deployment, and support",
                  icon: <FiCheck className="text-2xl" />,
                  detail: "Launch and post-launch support"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6">
                      <div className="text-2xl text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 mb-1">{step.description}</p>
                    <p className="text-gray-500 text-sm">{step.detail}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 -translate-x-1/2">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{ width: '30%' }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Ready to Start Your Project?
                    </span>
                  </h3>
                  <p className="text-gray-400 text-lg mb-8">
                    Get a <span className="text-cyan-300 font-semibold">free consultation</span> and project estimate within 24 hours. 
                    Competitive pricing without compromising on quality.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-lg group/cta"
                      >
                        Request Free Quote
                        <FiChevronRight className="group-hover/cta:translate-x-2 transition-transform" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="https://calendly.com/ammar-alibrahim"
                        target="_blank"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:border-cyan-400/30 transition-all"
                      >
                        <FiCalendar />
                        Schedule Free Call
                      </Link>
                    </motion.div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiCheck className="text-green-400" />
                        <span>No upfront costs for consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCheck className="text-green-400" />
                        <span>Transparent pricing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCheck className="text-green-400" />
                        <span>Flexible payment options</span>
                      </div>
                    </div>
                  </div>
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
          className="mt-32 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Ammar Alibrahim
              </div>
              <div className="text-gray-500 text-sm">
                Full-Stack Developer & Consultant
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                <span className="text-white font-medium">Email:</span> ammaryasir8088@gmail.com
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-medium">Location:</span> Suriye/Türkiye
              </div>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}