'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { Project } from '@/types';
import { useI18n } from '@/i18n/I18nContext';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects, t, isRTL } = useI18n();

  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  const getStatusLabel = (status: string) => {
    if (status === 'In Production') return t.projects.statusInProduction;
    if (status === 'Completed') return t.projects.statusCompleted;
    if (status === 'Internal System') return t.projects.statusInternal;
    return status;
  };

  const ForwardArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="projects" className="py-24 border-b border-neutral-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 space-y-3 text-start">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <BookOpen className="w-4 h-4 text-emerald-500/80" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
            {t.projects.description}
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#0e1117] border border-neutral-800/80 hover:border-neutral-750 transition-all rounded-2xl p-6 sm:p-8 space-y-6 text-start shadow-sm"
            >
              {/* Card Meta & Title */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-neutral-800/60 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {t.projects.caseStudy}
                    </span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-xs text-neutral-400 font-mono" dir="ltr">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    {project.role} {project.company ? `· ${project.company}` : ''}
                  </p>
                </div>

                <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 self-start sm:self-auto">
                  {getStatusLabel(project.status)}
                </span>
              </div>

              {/* System Scale Specs */}
              {project.systemScale && (
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {project.systemScale.capacity && (
                    <span className="px-3 py-1 rounded-md bg-neutral-900/70 border border-neutral-800 text-neutral-300 text-[11px]">
                      <span className="text-neutral-400">{t.projects.scaleLabel}</span>{' '}
                      {project.systemScale.capacity}
                    </span>
                  )}
                  {project.systemScale.units && (
                    <span className="px-3 py-1 rounded-md bg-neutral-900/70 border border-neutral-800 text-neutral-300 text-[11px]">
                      <span className="text-neutral-400">{t.projects.scopeLabel}</span>{' '}
                      {project.systemScale.units}
                    </span>
                  )}
                  {project.systemScale.frequency && (
                    <span className="px-3 py-1 rounded-md bg-emerald-950/20 border border-emerald-900/30 text-emerald-400 text-[11px]">
                      <span className="text-emerald-500/80">{t.projects.cadenceLabel}</span>{' '}
                      {project.systemScale.frequency}
                    </span>
                  )}
                </div>
              )}

              {/* Executive Summary */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.summary}
              </p>

              {/* Problem & Technical Highlights */}
              <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-850 space-y-3">
                {project.problemStatement && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      {t.projects.operationalProblem}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>
                )}

                <div className="space-y-1 pt-1 border-t border-neutral-800/40">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    {t.projects.engineeringSolutions}
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                    {project.architecture.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-neutral-500 mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-neutral-800/60">
                <div className="flex flex-wrap gap-1.5" dir="ltr">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-neutral-200 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 px-3.5 py-2 rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <span>{t.projects.readFullCaseStudy}</span>
                  <ForwardArrow className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Supporting Systems */}
        <div className="space-y-6 text-start">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              {t.projects.otherSystemsTitle}
            </h3>
            <p className="text-xs text-neutral-400">{t.projects.otherSystemsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0e1117] border border-neutral-800/80 rounded-xl p-6 flex flex-col justify-between space-y-4 text-start"
              >
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between text-xs text-neutral-400">
                    <span className="font-mono text-[11px]" dir="ltr">
                      {project.period}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white tracking-tight">
                    {project.name}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{project.summary}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-800/60">
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{t.projects.readCaseStudy}</span>
                    <ForwardArrow className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};