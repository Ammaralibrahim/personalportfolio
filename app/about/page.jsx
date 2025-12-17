"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiChevronRight, 
  FiCode, 
  FiServer, 
  FiLayers, 
  FiTarget,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiGlobe,
  FiUsers,
  FiBook,
  FiTrendingUp,
  FiCoffee,
  FiZap,
  FiCheckCircle
} from "react-icons/fi";
import { SiNextdotjs, SiNestjs, SiTypescript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import Navbar from "../components/Navbar";



const timeline = [
  {
    year: "2024",
    title: "Full-Stack Consultant",
    description: "Started offering professional development services and consulting",
    current: true
  },
  {
    year: "2023",
    title: "Advanced Full-Stack Projects",
    description: "Worked on complex projects including ASAK, Gamma Cities, and enterprise solutions",
    current: false
  },
  {
    year: "2022",
    title: "Deep Dive into Modern Stack",
    description: "Mastered Next.js, Nest.js, TypeScript, and modern development practices",
    current: false
  },
  {
    year: "2021",
    title: "Beginning of Journey",
    description: "Started learning web development with HTML, CSS, and JavaScript",
    current: false
  }
];

const principles = [
  {
    title: "Code Quality",
    description: "Clean, maintainable, and well-documented code",
    icon: <FiCode className="text-2xl" />
  },
  {
    title: "Performance",
    description: "Optimized applications with fast load times",
    icon: <FiZap className="text-2xl" />
  },
  {
    title: "User Experience",
    description: "Intuitive and engaging user interfaces",
    icon: <FiUsers className="text-2xl" />
  },
  {
    title: "Communication",
    description: "Clear and transparent project updates",
    icon: <FiBook className="text-2xl" />
  }
];

const stats = [
  { label: "Projects Completed", value: "50+", icon: <FiTarget /> },
  { label: "Technologies Mastered", value: "15+", icon: <FiLayers /> },
  { label: "Client Satisfaction", value: "100%", icon: <FiAward /> },
  { label: "Years Experience", value: "3+", icon: <FiCalendar /> }
];

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

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
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        AA
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold">
                    17 y/o
                  </div>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  My Story
                </span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ delay: 0.3, duration: 1 }}
                className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-8 rounded-full"
              />
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                17-year-old full-stack developer from Turkey/Syria, passionate about building 
                exceptional digital experiences with cutting-edge technologies.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4">
                    <div className="text-cyan-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  My Tech Stack
                </span>
              </h2>
              <p className="text-gray-400">Technologies I use to bring ideas to life</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: <SiNextdotjs className="text-4xl text-white" />, name: "Next.js", color: "white" },
                { icon: <SiNestjs className="text-4xl text-red-500" />, name: "Nest.js", color: "red" },
                { icon: <SiTypescript className="text-4xl text-blue-500" />, name: "TypeScript", color: "blue" },
                { icon: <SiReact className="text-4xl text-cyan-400" />, name: "React", color: "cyan" },
                { icon: <SiNodedotjs className="text-4xl text-green-500" />, name: "Node.js", color: "green" },
                { icon: <SiMongodb className="text-4xl text-green-400" />, name: "MongoDB", color: "green" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex flex-col items-center">
                      <div className="mb-4">
                        {tech.icon}
                      </div>
                      <h3 className={`text-lg font-semibold text-${tech.color}-400`}>
                        {tech.name}
                      </h3>
                      <div className="mt-2">
                        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                            className={`h-full rounded-full bg-${tech.color}-500`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Journey Timeline
                </span>
              </h2>
              <p className="text-gray-400">My development journey from beginning to now</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className={`p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
                        activeTimeline === index 
                          ? 'border-cyan-400/50' 
                          : 'border-white/10 hover:border-cyan-400/30'
                      }`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${
                            item.current
                              ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30'
                              : 'bg-white/10'
                          }`}>
                            <FiCalendar className={`${item.current ? 'text-cyan-400' : 'text-gray-400'}`} />
                          </div>
                          <div className={`text-2xl font-bold ${
                            item.current
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'
                              : 'text-gray-300'
                          }`}>
                            {item.year}
                          </div>
                          {item.current && (
                            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 text-sm">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className={`w-4 h-4 rounded-full ${
                        activeTimeline === index
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                          : 'bg-gray-600'
                      }`} />
                      <div className={`absolute inset-0 rounded-full ${
                        activeTimeline === index
                          ? 'animate-ping bg-cyan-500/40'
                          : ''
                      }`} />
                    </div>
                    
                    {/* Empty Space for alternating sides */}
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  My Principles
                </span>
              </h2>
              <p className="text-gray-400">Core values that guide my work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6">
                      <div className="text-cyan-400">
                        {principle.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-400">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Insights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Beyond Code
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Continuous Learning",
                      description: "Dedicate 2-3 hours daily to learning new technologies and improving skills"
                    },
                    {
                      title: "Problem Solving",
                      description: "Enjoy tackling complex challenges and finding elegant solutions"
                    },
                    {
                      title: "Community",
                      description: "Active in developer communities and open-source projects"
                    },
                    {
                      title: "Work Ethic",
                      description: "Committed to delivering quality work on time, every time"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <FiCheckCircle className="text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Work With Me?
                </h3>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">Young perspective with mature approach</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">Up-to-date with latest technologies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">Flexible and adaptive to project needs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">Strong communication and transparency</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">Passionate about creating exceptional products</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to Collaborate?
                  </span>
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Let's work together to bring your vision to life with modern technology and exceptional execution.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-lg"
                    >
                      Start a Project
                      <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:border-cyan-400/30 transition-all"
                    >
                      View Services
                    </Link>
                  </motion.div>
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
                17-year-old Full-Stack Developer • Turkey/Syria
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                <FiMapPin className="inline mr-2" />
                Remote Worldwide
              </div>
              <div className="text-sm text-gray-400">
                <FiGlobe className="inline mr-2" />
                GMT+3
              </div>
              <div className="text-sm text-gray-400">
                <FiCoffee className="inline mr-2" />
                Always Brewing Code
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