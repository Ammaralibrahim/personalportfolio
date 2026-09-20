'use client';

import React, { useEffect } from 'react';
import {
  X,
  Server,
  ShieldAlert,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import { Project } from '@/types';
import { useI18n } from '@/i18n/I18nContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, isRTL } = useI18n();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getStatusLabel = (status: string) => {
    if (status === 'In Production') return t.projects.statusInProduction;
    if (status === 'Completed') return t.projects.statusCompleted;
    if (status === 'Internal System') return t.projects.statusInternal;
    return status;
  };

  const ChallengeIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0e1117] border border-neutral-800/80 rounded-2xl shadow-2xl p-6 sm:p-10 space-y-8 text-start scrollbar-thin scrollbar-thumb-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Meta */}
        <div className="flex items-start justify-between gap-6 border-b border-neutral-800/70 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                {t.projectModal.caseStudy}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/30 border border-emerald-800/40 text-emerald-400">
                {getStatusLabel(project.status)}
              </span>
            </div>

            <h3
              id="case-study-title"
              className="text-2xl sm:text-3xl font-semibold text-white tracking-tight pt-1"
            >
              {project.name}
            </h3>

            <p className="text-sm text-neutral-400">
              {project.role} {project.company ? `· ${project.company}` : ''}{' '}
              <span dir="ltr">({project.period})</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-850 border border-transparent hover:border-neutral-750 transition-colors shrink-0 cursor-pointer"
            aria-label={t.projectModal.closeAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* System Scope & Scale Specification Table */}
        {project.systemScale && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 text-xs">
            {project.systemScale.capacity && (
              <div className="space-y-1">
                <span className="block text-neutral-500 text-[10px] uppercase tracking-wider">
                  {t.projectModal.capacityLabel}
                </span>
                <span className="font-medium text-neutral-200 block text-xs sm:text-[13px]">
                  {project.systemScale.capacity}
                </span>
              </div>
            )}
            {project.systemScale.units && (
              <div className="space-y-1">
                <span className="block text-neutral-500 text-[10px] uppercase tracking-wider">
                  {t.projectModal.scopeLabel}
                </span>
                <span className="font-medium text-neutral-200 block text-xs sm:text-[13px]">
                  {project.systemScale.units}
                </span>
              </div>
            )}
            {project.systemScale.records && (
              <div className="space-y-1">
                <span className="block text-neutral-500 text-[10px] uppercase tracking-wider">
                  {t.projectModal.dataVolumeLabel}
                </span>
                <span className="font-medium text-neutral-200 block text-xs sm:text-[13px]">
                  {project.systemScale.records}
                </span>
              </div>
            )}
            {project.systemScale.frequency && (
              <div className="space-y-1">
                <span className="block text-neutral-500 text-[10px] uppercase tracking-wider">
                  {t.projectModal.cadenceLabel}
                </span>
                <span className="font-medium text-emerald-400 block text-xs sm:text-[13px]">
                  {project.systemScale.frequency}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Executive Summary */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <Server className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span>{t.projectModal.executiveSummary}</span>
          </h4>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* The Problem & Operational Context */}
        {(project.problemStatement || project.operationalContext) && (
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
              <span>{t.projectModal.problemAndContext}</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.problemStatement && (
                <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/60 space-y-2">
                  <span className="text-xs font-medium text-neutral-300 block">
                    {t.projectModal.coreChallenge}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {project.operationalContext && (
                <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/60 space-y-2">
                  <span className="text-xs font-medium text-neutral-300 block">
                    {t.projectModal.environmentContext}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {project.operationalContext}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* System Architecture & Technical Design */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span>{t.projectModal.archAndDesign}</span>
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
            {project.architecture.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/20 border border-neutral-850"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500/80 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Challenges & Solutions */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <ChallengeIcon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span>{t.projectModal.keyChallenges}</span>
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
            {project.engineeringChallenges.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/20 border border-neutral-850"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0 mt-2" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies & Tooling */}
        <div className="space-y-3 pt-4 border-t border-neutral-800/70">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {t.projectModal.technologies}
          </h4>
          <div className="flex flex-wrap gap-2" dir="ltr">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links or Operational Notes */}
        {(project.links.note || project.links.live || project.links.github) && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-800/70 text-xs text-neutral-400">
            {project.links.note && <span>{project.links.note}</span>}
            <div className="flex items-center gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>{t.projectModal.liveService}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>{t.projectModal.repository}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};