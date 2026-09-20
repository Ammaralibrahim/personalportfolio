'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

interface HeaderProps {
  onOpenCV: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t, personalInfo } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.header.nav.projects, href: '#projects' },
    { label: t.header.nav.experience, href: '#experience' },
    { label: t.header.nav.skills, href: '#skills' },
    { label: t.header.nav.about, href: '#about' },
    { label: t.header.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-150 ${
        scrolled
          ? 'bg-[#0b0c0f]/90 backdrop-blur border-b border-neutral-850 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-start focus-visible:ring-1 focus-visible:ring-neutral-400 rounded p-1"
          aria-label={`${personalInfo.name} homepage`}
        >
          <span className="font-semibold text-sm text-neutral-200 group-hover:text-white transition-colors tracking-tight">
            {personalInfo.name}
          </span>
          <span className="text-neutral-500 font-mono text-xs hidden sm:inline">
            {t.header.brandRole}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-800 transition-colors cursor-pointer"
            aria-label={t.header.switchLangAria}
            title={t.header.switchLangAria}
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium">{t.header.switchLang}</span>
          </button>

          <button
            type="button"
            onClick={onOpenCV}
            className="px-3 py-1.5 rounded text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-850 border border-neutral-800 transition-colors cursor-pointer"
          >
            {t.header.resume}
          </button>

          <a
            href="#contact"
            className="px-3 py-1.5 rounded text-xs font-medium text-neutral-900 bg-neutral-200 hover:bg-white transition-colors"
          >
            {t.header.getInTouch}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded border border-neutral-800 text-neutral-300 bg-neutral-900"
            aria-label={t.header.switchLangAria}
          >
            <Globe className="w-3 h-3 text-neutral-400" />
            <span>{t.header.switchLang}</span>
          </button>

          <button
            type="button"
            onClick={onOpenCV}
            className="px-2 py-1 text-xs rounded border border-neutral-800 text-neutral-300 bg-neutral-900"
          >
            {t.header.resume}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded text-neutral-400 hover:text-white border border-neutral-850 transition-colors"
            aria-label={t.header.toggleMenuAria}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e1014] border-b border-neutral-800 px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm text-start">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 py-2 rounded text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 text-center"
            >
              {t.header.resume}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 rounded text-xs font-medium text-neutral-900 bg-neutral-200 hover:bg-white text-center"
            >
              {t.header.getInTouch}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};