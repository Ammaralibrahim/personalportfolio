"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiClock, FiCalendar, FiSearch, FiUser, FiBook, FiTrendingUp,
  FiMenu, FiX
} from "react-icons/fi";

// Mobile Navbar (aynı component)
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

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Next.js 14 Applications with App Router",
    excerpt: "Learn how to leverage Next.js 14's App Router for building highly scalable and performant applications.",
    category: "Next.js",
    tags: ["Next.js", "React", "Performance", "TypeScript"],
    author: "Ammar Alibrahim",
    date: "2024-01-15",
    readTime: "8 min",
    views: "1.2K",
    featured: true
  },
  {
    id: 2,
    title: "Mastering Nest.js Microservices Architecture",
    excerpt: "Deep dive into building scalable microservices with Nest.js, covering patterns and communication strategies.",
    category: "Backend",
    tags: ["Nest.js", "Microservices", "Node.js", "Architecture"],
    author: "Ammar Alibrahim",
    date: "2024-01-10",
    readTime: "12 min",
    views: "890",
    featured: true
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "Essential TypeScript patterns and practices that every developer should know.",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices", "Enterprise"],
    author: "Ammar Alibrahim",
    date: "2024-01-05",
    readTime: "10 min",
    views: "1.5K",
    featured: false
  },
  {
    id: 4,
    title: "Real-time Applications with WebSockets and Socket.io",
    excerpt: "Building real-time features in your applications using WebSockets and Socket.io.",
    category: "Real-time",
    tags: ["WebSockets", "Socket.io", "Real-time", "Node.js"],
    author: "Ammar Alibrahim",
    date: "2023-12-28",
    readTime: "15 min",
    views: "750",
    featured: false
  },
  {
    id: 5,
    title: "Optimizing React Performance with Memoization",
    excerpt: "Advanced techniques for optimizing React application performance.",
    category: "React",
    tags: ["React", "Performance", "Optimization", "Memoization"],
    author: "Ammar Alibrahim",
    date: "2023-12-20",
    readTime: "11 min",
    views: "1.1K",
    featured: false
  },
  {
    id: 6,
    title: "Database Design Patterns for Modern Applications",
    excerpt: "Exploring database design patterns and optimization techniques.",
    category: "Database",
    tags: ["Database", "MongoDB", "PostgreSQL", "Design Patterns"],
    author: "Ammar Alibrahim",
    date: "2023-12-15",
    readTime: "14 min",
    views: "920",
    featured: false
  }
];

const categories = ["All", "Next.js", "Backend", "TypeScript", "React", "Database", "Real-time"];

export default function BlogPage() {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider">Blog</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl ml-11 sm:ml-16 leading-relaxed">
            Insights, tutorials, and best practices on modern web development.
          </p>
        </motion.div>

        {/* Search & Filter - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm sm:text-base"
            />
          </div>
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-1 sm:mx-0 px-1 sm:px-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-gold text-black font-medium shadow-lg shadow-gold/30'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:border-gold/30 border border-transparent hover:border-gold/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts - Mobile Optimized */}
        {featuredPosts.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <FiTrendingUp className="text-gold text-sm sm:text-base" />
              <h2 className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold/10 border border-gold/20 text-gold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1"><FiCalendar className="text-gold" /> {post.date}</span>
                    <span className="flex items-center gap-1"><FiClock className="text-gold" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-500 text-[8px] sm:text-[10px]">
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-500 text-[8px] sm:text-[10px]">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs text-gray-500">
                    <span className="flex items-center gap-1.5 sm:gap-2"><FiUser className="text-gold" /> {post.author}</span>
                    <span>{post.views} views</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts - Mobile Optimized */}
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FiBook className="text-gold text-sm sm:text-base" />
            <h2 className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
              <span className="text-gray-500 ml-1 sm:ml-2">({filteredPosts.length})</span>
            </h2>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <FiSearch className="text-3xl sm:text-4xl text-gray-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-2">No articles found</h3>
              <p className="text-gray-400 text-sm sm:text-base">Try a different search term or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {filteredPosts.filter(p => !p.featured).map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-4 sm:p-5 lg:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 sm:py-1 rounded-full bg-gold/10 text-gold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium mb-1.5 sm:mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 rounded-full bg-white/5 text-gray-500 text-[8px] sm:text-[10px]">
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-1.5 py-0.5 rounded-full bg-white/5 text-gray-500 text-[8px] sm:text-[10px]">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 pt-2 sm:pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1"><FiClock className="text-gold" /> {post.readTime}</span>
                    <span>{post.views} views</span>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
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