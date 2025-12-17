import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll durumunu takip et
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıkken body scroll'unu engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Linke tıklandığında mobil menüyü kapat
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 py-4 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent z-50"
          >
            <Link href="/" onClick={handleLinkClick}>AA.</Link>
          </motion.div>
          
          {/* Desktop Navigation - md ve üzeri ekranlarda göster */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <motion.div 
                key={item.href}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="px-3 lg:px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:border-cyan-400/30 transition-all duration-300 text-sm"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Hamburger Menu Button - md altı ekranlarda göster */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10 z-40"
              >
                <div className="px-4 py-6 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:border-cyan-400/30 transition-all duration-300 text-sm"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <Link
                      href="/contact"
                      onClick={handleLinkClick}
                      className="block px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all text-center"
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

      {/* Navbar için boşluk bırak (fixed navbar için) */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;