'use client';

import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink, Github, Linkedin } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

export const Contact: React.FC = () => {
  const { personalInfo, t } = useI18n();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-neutral-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2 text-start">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {t.contact.title}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
          {/* Email Card */}
          <div className="bg-[#0e1014] border border-neutral-850 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400">{t.contact.emailLabel}</div>
              <div className="text-lg sm:text-xl font-medium text-white break-all" dir="ltr">
                {personalInfo.email}
              </div>
              <p className="text-xs text-neutral-400">{t.contact.emailDescription}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}?subject=Full%20Stack%20Role%20Inquiry`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.contact.sendEmail}</span>
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone & Online Profiles */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-[#0e1014] border border-neutral-850 rounded-xl p-6 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-neutral-400">{t.contact.phoneLabel}</div>
                <div className="text-base font-mono text-white" dir="ltr">
                  {personalInfo.phone}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title={t.contact.copyPhoneTitle}
                  aria-label={t.contact.copyPhoneTitle}
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  title={t.contact.callDirectlyTitle}
                  aria-label={t.contact.callDirectlyTitle}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#0e1014] border border-neutral-850 rounded-xl p-6 space-y-3">
              <div className="text-xs font-mono text-neutral-400">{t.contact.profilesLabel}</div>
              <div className="grid grid-cols-2 gap-3" dir="ltr">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 hover:text-white text-neutral-300 text-xs transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span className="font-medium">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 hover:text-white text-neutral-300 text-xs transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};