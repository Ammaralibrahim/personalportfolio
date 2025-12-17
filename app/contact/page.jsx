"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiChevronRight, 
  FiMail, 
  FiMapPin, 
  FiGlobe, 
  FiSend,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMessageSquare,
  FiCalendar,
  FiClock,
  FiPhone,
  FiUser,
  FiBriefcase,
  FiMessageCircle
} from "react-icons/fi";
import { SiWhatsapp, SiTelegram, SiDiscord } from "react-icons/si";
import Navbar from "../components/Navbar";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("email");
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: ""
      });
    }, 5000);
  };

  const contactMethods = [
    {
      id: "email",
      name: "Email",
      icon: <FiMail className="text-2xl" />,
      description: "For detailed project inquiries",
      value: "ammaryasir8088@gmail.com",
      action: "mailto:ammaryasir8088@gmail.com",
      color: "from-cyan-500/20 to-blue-500/20",
      responseTime: "Within 12 hours"
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: <SiWhatsapp className="text-2xl" />,
      description: "Quick questions and instant chat",
      value: "+90 123 456 7890",
      action: "https://wa.me/901234567890",
      color: "from-green-500/20 to-emerald-500/20",
      responseTime: "Within 1 hour"
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: <SiTelegram className="text-2xl" />,
      description: "File sharing and long discussions",
      value: "@ammaralibrahim",
      action: "https://t.me/ammaralibrahim",
      color: "from-blue-500/20 to-cyan-500/20",
      responseTime: "Within 2 hours"
    },
    {
      id: "calendar",
      name: "Schedule Call",
      icon: <FiCalendar className="text-2xl" />,
      description: "30-minute free consultation",
      value: "Calendly",
      action: "https://calendly.com/ammar-alibrahim",
      color: "from-purple-500/20 to-pink-500/20",
      responseTime: "Book instantly"
    }
  ];

  const serviceOptions = [
    "Full-Stack Development",
    "Frontend Development", 
    "Backend Development",
    "MVP Development",
    "E-commerce Solution",
    "Technical Consultation",
    "Code Review",
    "Other"
  ];

  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $15,000", 
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000+",
    "Not sure yet"
  ];

  const timelineOptions = [
    "ASAP (1-2 weeks)",
    "1 month",
    "2-3 months", 
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

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

      {/* Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
          }}
          animate={{
            x: `+=${Math.random() * 200 - 100}`,
            y: `+=${Math.random() * 200 - 100}`,
          }}
          transition={{
            duration: Math.random() * 20 + 20,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.3, duration: 1 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-8 rounded-full"
            />
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your idea to life? Get in touch for a free consultation 
              and let's discuss how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
            {/* Contact Methods */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-8"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Contact Methods
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Choose the most convenient way to reach out. I'm available across multiple platforms.
                  </p>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <motion.button
                        key={method.id}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab(method.id)}
                        className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                          activeTab === method.id
                            ? 'bg-gradient-to-br from-white/15 to-white/5 border border-cyan-400/30'
                            : 'bg-white/5 border border-white/10 hover:border-cyan-400/20'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${
                            activeTab === method.id
                              ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30'
                              : 'bg-white/10'
                          }`}>
                            <div className="text-white">
                              {method.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">
                                {method.name}
                              </h3>
                              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                                {method.responseTime}
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">
                              {method.description}
                            </p>
                            <div className="mt-2">
                              <span className="text-cyan-300 text-sm">{method.value}</span>
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Quick Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white font-medium">Within 12 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Timezone</span>
                      <span className="text-white font-medium">GMT+3 (Turkey)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Availability</span>
                      <span className="text-green-400 font-medium">Accepting Projects</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Languages</span>
                      <span className="text-white font-medium">EN/TR/AR</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-6">
                        <FiCheckCircle className="text-4xl text-green-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                      <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                        Thank you for reaching out! I'll get back to you within 12 hours with a detailed response.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsSubmitted(false)}
                          className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-cyan-400/30 transition-all"
                        >
                          Send Another Message
                        </motion.button>
                        <motion.a
                          href="https://calendly.com/ammar-alibrahim"
                          target="_blank"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all"
                        >
                          Schedule Immediate Call
                        </motion.a>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-3xl font-bold text-white">
                            Project Inquiry Form
                          </h2>
                          <p className="text-gray-400 mt-2">
                            Fill out the form below and I'll get back to you with a detailed proposal
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                            <span className="text-cyan-300 text-sm font-medium">Free Consultation</span>
                          </div>
                        </div>
                      </div>

                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              <FiUser className="inline mr-2" />
                              Your Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              <FiMail className="inline mr-2" />
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              <FiBriefcase className="inline mr-2" />
                              Company / Project
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all"
                              placeholder="Company name or project"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              <FiPhone className="inline mr-2" />
                              Phone Number (Optional)
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all"
                              placeholder="+90 123 456 7890"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              Service Needed *
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 transition-all appearance-none"
                            >
                              <option value="" className="bg-gray-900">Select a service</option>
                              {serviceOptions.map((service) => (
                                <option key={service} value={service} className="bg-gray-900">
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              Project Budget *
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 transition-all appearance-none"
                            >
                              <option value="" className="bg-gray-900">Select budget range</option>
                              {budgetRanges.map((range) => (
                                <option key={range} value={range} className="bg-gray-900">
                                  {range}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              Timeline *
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 transition-all appearance-none"
                            >
                              <option value="" className="bg-gray-900">Select timeline</option>
                              {timelineOptions.map((timeline) => (
                                <option key={timeline} value={timeline} className="bg-gray-900">
                                  {timeline}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            <FiMessageCircle className="inline mr-2" />
                            Project Details *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all resize-none"
                            placeholder="Tell me about your project, goals, requirements, and any specific needs..."
                          />
                          <p className="text-gray-500 text-xs mt-2">
                            Please include as many details as possible for an accurate proposal
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                          <div className="text-sm text-gray-400">
                            * Required fields
                          </div>
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending Message...
                              </>
                            ) : (
                              <>
                                Send Message
                                <FiSend />
                              </>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Connect on Social Media
                  </h3>
                  <div className="flex justify-center gap-6">
                    {[
                      { icon: <FiGithub />, href: "https://github.com/Ammaralibrahim", label: "GitHub" },
                      { icon: <FiLinkedin />, href: "https://linkedin.com/in/ammaralibrahim", label: "LinkedIn" },
                      { icon: <FiTwitter />, href: "https://twitter.com/ammaralibrahim", label: "Twitter" },
                      { icon: <SiWhatsapp />, href: "https://wa.me/901234567890", label: "WhatsApp" },
                      { icon: <SiTelegram />, href: "https://t.me/ammaralibrahim", label: "Telegram" },
                      { icon: <SiDiscord />, href: "https://discord.gg/yourlink", label: "Discord" },
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
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-cyan-400/50 transition-all">
                          <div className="text-xl">{link.icon}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-gray-400">Common questions about working with me</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your typical response time?",
                  answer: "I respond to all inquiries within 12 hours. For urgent matters, WhatsApp provides the fastest response (within 1 hour)."
                },
                {
                  question: "Do you offer free consultations?",
                  answer: "Yes! I offer a free 30-minute consultation call to discuss your project requirements and provide initial guidance."
                },
                {
                  question: "What's your payment structure?",
                  answer: "I work with 50% upfront and 50% upon completion for fixed-price projects. For hourly work, I invoice weekly or bi-weekly."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "My core stack includes Next.js, React, Node.js, Nest.js, TypeScript, MongoDB, and Tailwind CSS. I stay updated with the latest technologies."
                },
                {
                  question: "Do you work with clients outside Turkey?",
                  answer: "Absolutely! I work with clients worldwide. I'm fluent in English, Turkish, and Arabic for seamless communication."
                },
                {
                  question: "What's included in your development process?",
                  answer: "My process includes discovery, planning, development with weekly updates, testing, deployment, and 30 days of post-launch support."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Ammar Alibrahim
              </div>
              <div className="text-gray-500 text-sm">
                Full-Stack Developer & Consultant • GMT+3
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                <span className="text-white font-medium">Email:</span> ammaryasir8088@gmail.com
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-medium">Location:</span> Remote (Turkey/Syria)
              </div>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            Crafted with passion using Next.js, Tailwind CSS & Framer Motion
          </div>
        </motion.footer>
      </main>
    </div>
  );
}