'use client';

import React from 'react';
import { useI18n } from '@/i18n/I18nContext';

export const ExperienceSection: React.FC = () => {
  const { experiences, t } = useI18n();

  return (
    <section id="experience" className="py-20 border-b border-neutral-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2 text-start">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {t.experience.title}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">{t.experience.subtitle}</p>
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#0e1014] border border-neutral-850 rounded-xl p-6 sm:p-8 space-y-5 text-start"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-850/80 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm text-neutral-300 font-medium pt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs font-mono text-neutral-400" dir="ltr">
                  {exp.period} · {exp.location}
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-neutral-300 leading-relaxed">{exp.summary}</p>

              {/* Responsibilities */}
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <span className="text-neutral-500 mt-1 shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="pt-4 border-t border-neutral-850/80 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-neutral-500 font-mono me-1.5">
                  {t.experience.stackLabel}
                </span>
                <div className="flex flex-wrap gap-1.5" dir="ltr">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};