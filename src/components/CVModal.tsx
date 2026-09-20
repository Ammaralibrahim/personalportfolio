'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, Copy, Check } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { personalInfo, experiences, education, languages, skillCategories, t } = useI18n();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getPlainTextResume = () => {
    return `${personalInfo.name}
${personalInfo.role}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.links.github} | LinkedIn: ${personalInfo.links.linkedin}

${t.cvModal.summaryHeading.toUpperCase()}
${personalInfo.shortBio}

${t.cvModal.experienceHeading.toUpperCase()}

${experiences
  .map(
    (exp) => `${exp.role} — ${exp.company}
${exp.period} | ${exp.location}
${exp.summary}
${t.cvModal.responsibilitiesLabel}
${exp.responsibilities.map((r) => `• ${r}`).join('\n')}
${t.cvModal.technologiesLabel} ${exp.technologies.join(', ')}
`
  )
  .join('\n\n')}

${t.cvModal.educationHeading.toUpperCase()}
${education.level} — ${education.focus}
${education.note}

${t.cvModal.languagesHeading.toUpperCase()}
${languages.map((l) => `• ${l.name}: ${l.level}`).join('\n')}

${t.cvModal.skillsHeading.toUpperCase()}
${skillCategories.map((c) => `${c.title}: ${c.skills.join(', ')}`).join('\n')}
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getPlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0e1014] border border-neutral-800 rounded-xl shadow-2xl p-6 sm:p-10 space-y-8 text-start text-neutral-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (Screen Only) */}
        <div className="flex items-center justify-between gap-4 border-b border-neutral-800 pb-4 print:hidden">
          <div className="text-xs font-mono text-neutral-400">{t.cvModal.modalTitle}</div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 transition-colors cursor-pointer"
              title={t.cvModal.copyText}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.cvModal.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.cvModal.copyText}</span>
                </>
              )}
            </button>

            <a
              href="https://flowcv.com/resume/cis7t2joueri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 transition-colors cursor-pointer"
              title={t.cvModal.downloadPdf}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.cvModal.downloadPdf}</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors ms-1 cursor-pointer"
              aria-label={t.cvModal.closeAria}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-6 space-y-2">
            <h2
              id="cv-modal-title"
              className="text-2xl sm:text-3xl font-semibold text-white tracking-tight"
            >
              {personalInfo.name}
            </h2>
            <div className="text-sm text-neutral-300 font-medium">{personalInfo.role}</div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400 pt-1 font-mono">
              <span dir="ltr">{personalInfo.email}</span>
              <span>•</span>
              <span dir="ltr">{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
            <div
              className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-1"
              dir="ltr"
            >
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white underline decoration-neutral-700 underline-offset-2"
              >
                GitHub
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white underline decoration-neutral-700 underline-offset-2"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {t.cvModal.summaryHeading}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 border-b border-neutral-800/80 pb-2">
              {t.cvModal.experienceHeading}
            </h3>

            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white">{exp.role}</h4>
                    <div className="text-xs text-neutral-300">{exp.company}</div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400" dir="ltr">
                    {exp.period} | {exp.location}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">{exp.summary}</p>

                <ul className="space-y-1.5 text-xs text-neutral-300 leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-neutral-500 mt-0.5 shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-neutral-400 pt-1">
                  <span className="font-mono text-neutral-500">
                    {t.cvModal.technologiesLabel}
                  </span>{' '}
                  <span className="text-neutral-300" dir="ltr">
                    {exp.technologies.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 border-b border-neutral-800/80 pb-2">
              {t.cvModal.skillsHeading}
            </h3>
            <div className="space-y-2 text-xs">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
                >
                  <span className="font-medium text-neutral-200 min-w-[140px]">
                    {cat.title}:
                  </span>
                  <span className="text-neutral-400 font-mono" dir="ltr">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-800/80">
            {/* Education */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                {t.cvModal.educationHeading}
              </h3>
              <div className="text-sm font-semibold text-white">{education.level}</div>
              <div className="text-xs text-neutral-300">{education.focus}</div>
              <p className="text-xs text-neutral-400 pt-1">{education.note}</p>
            </div>

            {/* Languages */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                {t.cvModal.languagesHeading}
              </h3>
              <div className="space-y-1 text-xs">
                {languages.map((l) => (
                  <div key={l.name} className="flex justify-between">
                    <span className="text-neutral-200">{l.name}</span>
                    <span className="text-neutral-400 font-mono">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};