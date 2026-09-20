'use client';

import React from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { t, personalInfo } = useI18n();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 border-b border-neutral-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Understated status indicator */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0" />
          <span>{t.hero.status}</span>
        </div>

        {/* Human, confident introduction */}
        <div className="space-y-4 max-w-3xl text-start">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            {t.hero.greeting} {personalInfo.name}.
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-300 font-medium tracking-tight">
            {t.hero.roleTitle}
          </p>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed pt-1">
            {t.hero.bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-8">
          <a
            href="#projects"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 transition-colors"
          >
            <span>{t.hero.viewProjects}</span>
            <ArrowDown className="w-3.5 h-3.5 text-neutral-900" />
          </a>

          <button
            type="button"
            onClick={onOpenCV}
            className="flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span>{t.hero.readResume}</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t.hero.getInTouch}</span>
          </a>
        </div>

        {/* Natural stack line */}
        <div className="pt-10 mt-10 border-t border-neutral-850/60 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-xs text-neutral-400">
          <span className="text-neutral-500 font-mono">{t.hero.coreStack}</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono" dir="ltr">
            <span className="text-neutral-300">
              React · Next.js · TypeScript · Node.js · Nest.js
            </span>
            <span className="text-neutral-500 hidden sm:inline">|</span>
            <span className="text-neutral-300">
              MongoDB · Redis · Three.js · Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};