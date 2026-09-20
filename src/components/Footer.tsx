'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

export const Footer: React.FC = () => {
  const { personalInfo, t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#090a0d] border-t border-neutral-850 text-xs text-neutral-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-start">
          <span className="text-neutral-300 font-medium font-sans">{personalInfo.name}</span>
          <span className="text-neutral-500 hidden sm:inline">•</span>
          <span className="text-neutral-400">{t.footer.location}</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors ms-2 cursor-pointer"
            aria-label={t.footer.scrollToTopAria}
            title={t.footer.scrollToTopAria}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};