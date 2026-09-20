'use client';

import React from 'react';
import { useI18n } from '@/i18n/I18nContext';

export const TechnicalSkills: React.FC = () => {
  const { skillCategories, t } = useI18n();

  return (
    <section id="skills" className="py-20 border-b border-neutral-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2 text-start">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {t.skills.title}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">{t.skills.subtitle}</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#0e1014] border border-neutral-850 rounded-xl p-6 space-y-4 text-start"
            >
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-neutral-400 pt-0.5">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1" dir="ltr">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};