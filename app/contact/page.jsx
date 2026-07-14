"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMail, FiSend, FiCheckCircle, FiMessageCircle, FiMapPin,
  FiClock, FiCalendar, FiUser, FiBriefcase, FiPhone,
  FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX
} from "react-icons/fi";
import { SiWhatsapp, SiTelegram, SiDiscord } from "react-icons/si";

// Mobile Navbar
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

export default function ContactPage() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", phone: "", service: "", budget: "", timeline: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    { icon: <FiMail />, label: "Email", value: "ammaryasir8088@gmail.com", href: "mailto:ammaryasir8088@gmail.com", response: "12 hours" },
    { icon: <SiWhatsapp />, label: "WhatsApp", value: "+90 123 456 7890", href: "https://wa.me/901234567890", response: "1 hour" },
    { icon: <SiTelegram />, label: "Telegram", value: "@ammaralibrahim", href: "https://t.me/ammaralibrahim", response: "2 hours" },
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider">Get in touch</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl ml-11 sm:ml-16 leading-relaxed">
            Ready to bring your idea to life? Get in touch for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Methods - Mobile Optimized */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 sm:p-5 lg:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-all duration-300 flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm sm:text-base">{method.label}</span>
                      <span className="text-[10px] sm:text-xs text-gold/70 flex-shrink-0">{method.response}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 truncate block">{method.value}</span>
                  </div>
                </div>
              </motion.a>
            ))}

            <div className="p-4 sm:p-5 lg:p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-medium text-sm sm:text-base mb-3">Quick Info</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <FiClock className="text-gold flex-shrink-0" />
                  <span>Response within 12 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-gold flex-shrink-0" />
                  <span>Remote (Turkey/Syria) • GMT+3</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-gold flex-shrink-0" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile Optimized */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 rounded-xl bg-gold/5 border border-gold/20 text-center"
              >
                <FiCheckCircle className="text-4xl sm:text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-light mb-2">Message sent!</h3>
                <p className="text-gray-400 text-sm sm:text-base">Thank you for reaching out. I'll get back to you within 12 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gold text-black font-medium hover:bg-gold-light transition-all duration-300 text-sm sm:text-base"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                      <FiUser className="inline mr-1.5 sm:mr-2 text-gold" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                      <FiMail className="inline mr-1.5 sm:mr-2 text-gold" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm sm:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                      <FiBriefcase className="inline mr-1.5 sm:mr-2 text-gold" />
                      Company / Project
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                      <FiPhone className="inline mr-1.5 sm:mr-2 text-gold" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm sm:text-base"
                      placeholder="+90 123 456 7890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">Service Needed *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 appearance-none text-sm sm:text-base"
                    >
                      <option value="" className="bg-black">Select a service</option>
                      {serviceOptions.map(service => (
                        <option key={service} value={service} className="bg-black">{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">Project Budget *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 appearance-none text-sm sm:text-base"
                    >
                      <option value="" className="bg-black">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range} className="bg-black">{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 appearance-none text-sm sm:text-base"
                    >
                      <option value="" className="bg-black">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline} value={timeline} className="bg-black">{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                    <FiMessageCircle className="inline mr-1.5 sm:mr-2 text-gold" />
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project, goals, requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 rounded-xl bg-gold text-black font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <><div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social Links - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-4 sm:p-6 lg:p-8 rounded-xl bg-white/5 border border-white/10"
        >
          <h3 className="text-center font-medium text-sm sm:text-base mb-4 sm:mb-6">Connect on Social Media</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            {[
              { icon: <FiGithub />, href: "https://github.com/Ammaralibrahim" },
              { icon: <FiLinkedin />, href: "https://linkedin.com/in/ammaralibrahim" },
              { icon: <FiTwitter />, href: "https://twitter.com/ammaralibrahim" },
              { icon: <SiWhatsapp />, href: "https://wa.me/901234567890" },
              { icon: <SiTelegram />, href: "https://t.me/ammaralibrahim" },
              { icon: <SiDiscord />, href: "https://discord.gg/yourlink" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-all duration-300 text-base sm:text-xl"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </main>

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