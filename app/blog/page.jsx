"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiSearch, FiUser, FiBook, FiTrendingUp } from "react-icons/fi";

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
          <Link href="/blog" className="text-gold transition-colors duration-300">Blog</Link>
          <Link href="/about" className="text-gray-400 hover:text-gold transition-colors duration-300">About</Link>
          <Link href="/contact" className="px-6 py-2.5 rounded-full bg-gold text-black text-sm font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Next.js 14 Applications with App Router",
    excerpt: "Learn how to leverage Next.js 14's App Router for building highly scalable and performant applications with best practices and real-world examples.",
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
    excerpt: "Deep dive into building scalable microservices with Nest.js, covering patterns, communication strategies, and deployment best practices.",
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
    excerpt: "Essential TypeScript patterns and practices that every developer should know when working on enterprise-level applications.",
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
    excerpt: "Building real-time features in your applications using WebSockets, Socket.io, and modern frontend frameworks.",
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
    excerpt: "Advanced techniques for optimizing React application performance using memoization, virtualization, and code splitting.",
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
    excerpt: "Exploring database design patterns, optimization techniques, and best practices for scalable applications.",
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
            <h1 className="text-6xl md:text-7xl font-light tracking-wider">Blog</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl ml-16 leading-relaxed">
            Insights, tutorials, and best practices on modern web development, 
            full-stack architecture, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title, tag, or content..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all duration-300"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
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

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FiTrendingUp className="text-gold" />
              <h2 className="text-sm uppercase tracking-wider text-gray-400">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                    <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-gold transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-white/5 text-gray-500 text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-2"><FiUser /> {post.author}</span>
                    <span>{post.views} views</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FiBook className="text-gold" />
            <h2 className="text-sm uppercase tracking-wider text-gray-400">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
              <span className="text-gray-500 ml-2">({filteredPosts.length})</span>
            </h2>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <FiSearch className="text-4xl text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try a different search term or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredPosts.filter(p => !p.featured).map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="text-xs text-gray-500 mb-3">
                    <span className="px-2 py-1 rounded-full bg-gold/10 text-gold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-gray-500 text-xs">
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-0.5 rounded-full bg-white/5 text-gray-500 text-xs">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                    <span>{post.views} views</span>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
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