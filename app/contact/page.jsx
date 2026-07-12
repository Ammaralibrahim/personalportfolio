"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiMail, FiSend, FiCheckCircle, FiMessageCircle, FiMapPin,
  FiClock, FiCalendar, FiUser, FiBriefcase, FiPhone,
  FiGithub, FiLinkedin, FiTwitter
} from "react-icons/fi";
import { SiWhatsapp, SiTelegram, SiDiscord } from "react-icons/si";

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
    { icon: <FiMail />, label: "Email", value: "ammaryasir8088@gmail.com", href: "mailto:ammaryasir8088@gmail.com", response: "Within 12 hours" },
    { icon: <SiWhatsapp />, label: "WhatsApp", value: "+90 123 456 7890", href: "https://wa.me/901234567890", response: "Within 1 hour" },
    { icon: <SiTelegram />, label: "Telegram", value: "@ammaralibrahim", href: "https://t.me/ammaralibrahim", response: "Within 2 hours" },
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
            <h1 className="text-6xl md:text-7xl font-light tracking-wider">Get in touch</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl ml-16 leading-relaxed">
            Ready to bring your idea to life? Get in touch for a free consultation 
            and let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
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
                className="block p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{method.label}</span>
                      <span className="text-xs text-gold/70">{method.response}</span>
                    </div>
                    <span className="text-sm text-gray-400">{method.value}</span>
                  </div>
                </div>
              </motion.a>
            ))}

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-medium mb-3">Quick Info</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <FiClock className="text-gold" />
                  <span>Response within 12 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-gold" />
                  <span>Remote (Turkey/Syria) • GMT+3</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-gold" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-xl bg-gold/5 border border-gold/20 text-center"
              >
                <FiCheckCircle className="text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-light mb-2">Message sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 12 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gold text-black font-medium hover:bg-gold-light transition-all duration-300"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <FiUser className="inline mr-2 text-gold" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <FiMail className="inline mr-2 text-gold" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <FiBriefcase className="inline mr-2 text-gold" />
                      Company / Project
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <FiPhone className="inline mr-2 text-gold" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300"
                      placeholder="+90 123 456 7890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Service Needed *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-black">Select a service</option>
                      {serviceOptions.map(service => (
                        <option key={service} value={service} className="bg-black">{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Project Budget *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-black">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range} className="bg-black">{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-black">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline} value={timeline} className="bg-black">{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    <FiMessageCircle className="inline mr-2 text-gold" />
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gold text-black font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-white/5 border border-white/10"
        >
          <h3 className="text-center font-medium mb-6">Connect on Social Media</h3>
          <div className="flex justify-center gap-6">
            {[
              { icon: <FiGithub />, href: "https://github.com/Ammaralibrahim" },
              { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/ammar-alibrahim-63790727a/" },
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
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
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