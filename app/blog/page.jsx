"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiChevronRight, 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiTag,
  FiSearch,
  FiTrendingUp,
  FiBook,
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiExternalLink
} from "react-icons/fi";
import Navbar from "../components/Navbar";



const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Next.js 14 Applications with App Router",
    excerpt: "Learn how to leverage Next.js 14's App Router for building highly scalable and performant applications with best practices and real-world examples.",
    content: "Next.js 14 introduces revolutionary changes with the App Router...",
    category: "Next.js",
    tags: ["Next.js", "React", "Performance", "TypeScript"],
    author: "Ammar Alibrahim",
    date: "2024-01-15",
    readTime: "8 min",
    views: "1.2K",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 2,
    title: "Mastering Nest.js Microservices Architecture",
    excerpt: "Deep dive into building scalable microservices with Nest.js, covering patterns, communication strategies, and deployment best practices.",
    content: "Microservices architecture has become essential for modern applications...",
    category: "Backend",
    tags: ["Nest.js", "Microservices", "Node.js", "Architecture"],
    author: "Ammar Alibrahim",
    date: "2024-01-10",
    readTime: "12 min",
    views: "890",
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "Essential TypeScript patterns and practices that every developer should know when working on enterprise-level applications.",
    content: "TypeScript provides powerful tools for large-scale applications...",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices", "Enterprise"],
    author: "Ammar Alibrahim",
    date: "2024-01-05",
    readTime: "10 min",
    views: "1.5K",
    featured: false,
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 4,
    title: "Real-time Applications with WebSockets and Socket.io",
    excerpt: "Building real-time features in your applications using WebSockets, Socket.io, and modern frontend frameworks.",
    content: "Real-time capabilities are becoming essential for modern web apps...",
    category: "Real-time",
    tags: ["WebSockets", "Socket.io", "Real-time", "Node.js"],
    author: "Ammar Alibrahim",
    date: "2023-12-28",
    readTime: "15 min",
    views: "750",
    featured: false,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 5,
    title: "Optimizing React Performance with Memoization",
    excerpt: "Advanced techniques for optimizing React application performance using memoization, virtualization, and code splitting.",
    content: "Performance optimization is crucial for user experience...",
    category: "React",
    tags: ["React", "Performance", "Optimization", "Memoization"],
    author: "Ammar Alibrahim",
    date: "2023-12-20",
    readTime: "11 min",
    views: "1.1K",
    featured: false,
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 6,
    title: "Database Design Patterns for Modern Applications",
    excerpt: "Exploring database design patterns, optimization techniques, and best practices for scalable applications.",
    content: "Choosing the right database design can make or break your application...",
    category: "Database",
    tags: ["Database", "MongoDB", "PostgreSQL", "Design Patterns"],
    author: "Ammar Alibrahim",
    date: "2023-12-15",
    readTime: "14 min",
    views: "920",
    featured: false,
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    id: 7,
    title: "Building SEO-Friendly Next.js Applications",
    excerpt: "Complete guide to implementing SEO best practices in Next.js applications for better search engine rankings.",
    content: "SEO is critical for the success of any web application...",
    category: "SEO",
    tags: ["Next.js", "SEO", "Performance", "SSR"],
    author: "Ammar Alibrahim",
    date: "2023-12-10",
    readTime: "9 min",
    views: "1.3K",
    featured: false,
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: 8,
    title: "Monorepo Setup with Turborepo for Full-Stack Projects",
    excerpt: "Setting up efficient monorepos for full-stack applications using Turborepo and modern tooling.",
    content: "Monorepos have become popular for managing full-stack projects...",
    category: "DevOps",
    tags: ["Turborepo", "Monorepo", "DevOps", "Tooling"],
    author: "Ammar Alibrahim",
    date: "2023-12-05",
    readTime: "13 min",
    views: "680",
    featured: false,
    gradient: "from-teal-500/20 to-cyan-500/20"
  }
];

const categories = [
  { name: "All", count: 8, icon: <FiLayers /> },
  { name: "Next.js", count: 2, icon: <FiCode /> },
  { name: "React", count: 2, icon: <FiCode /> },
  { name: "Backend", count: 3, icon: <FiServer /> },
  { name: "Database", count: 2, icon: <FiDatabase /> },
  { name: "DevOps", count: 1, icon: <FiTrendingUp /> }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.3, duration: 1 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-8 rounded-full"
            />
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and best practices on modern web development, 
              full-stack architecture, and cutting-edge technologies.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, tag, or content..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/30'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <FiTrendingUp className="text-cyan-400" />
                Featured Articles
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300 h-full">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                        <span className="text-cyan-300">{post.category}</span>
                        <span className="text-gray-400 text-sm">• Featured</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-all"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <FiUser className="text-sm" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiCalendar className="text-sm" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiClock className="text-sm" />
                            <span>{post.readTime} read</span>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          {post.views} views
                        </div>
                      </div>
                      
                      {/* Read More */}
                      <div className="mt-6">
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/readmore"
                        >
                          Read Full Article
                          <FiChevronRight className="group-hover/readmore:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
                <span className="text-gray-400 text-lg ml-3">
                  ({filteredPosts.length} posts)
                </span>
              </h2>
              
              <div className="text-sm text-gray-400">
                Sorted by: <span className="text-white font-medium">Recent</span>
              </div>
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <FiSearch className="text-4xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try a different search term or category</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300 h-full">
                      {/* Category */}
                      <div className="mb-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="text-xs" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiClock className="text-xs" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="text-xs">
                          {post.views}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl" />
              
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 mb-6">
                    <FiBook className="text-2xl text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Stay Updated
                    </span>
                  </h3>
                  
                  <p className="text-gray-400 text-lg mb-8">
                    Get the latest articles, tutorials, and insights on modern web development
                    delivered directly to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-500 text-sm mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white text-4xl font-bold">
                      AA
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    About the Author
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Hi, I'm Ammar Alibrahim, a 17-year-old full-stack developer with expertise in 
                    Next.js, Nest.js, and modern web technologies. I write about real-world 
                    development challenges and solutions based on my experience building 
                    production applications.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-400">
                      <span className="text-white font-medium">Location:</span> Turkey/Syria
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="text-white font-medium">Expertise:</span> Full-Stack Web Dev
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="text-white font-medium">Experience:</span> 3+ years
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
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Ammar Alibrahim
              </div>
              <div className="text-gray-500 text-sm">
                Full-Stack Developer & Tech Writer
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                <span className="text-white font-medium">Articles:</span> 8 published
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-medium">Total Views:</span> 8.3K
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-medium">Updated:</span> Weekly
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