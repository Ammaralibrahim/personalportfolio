'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import { Language, Direction, TRANSLATIONS, Translations } from './translations';
import {
  getPersonalInfo,
  getExperiences,
  getProjects,
  getSkillCategories,
  getEducation,
  getLanguages,
} from '../data/portfolioData';
import { Experience, Project, Education, Language as LangType, SkillCategory } from '../types';

interface I18nContextValue {
  language: Language;
  dir: Direction;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  personalInfo: ReturnType<typeof getPersonalInfo>;
  experiences: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  education: Education;
  languages: LangType[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'ammar_portfolio_language';

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Initialize language from localStorage on mount (client only)
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved === 'en' || saved === 'ar') {
        setLanguageState(saved);
        return;
      }
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('ar')) {
        setLanguageState('ar');
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const dir: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = dir === 'rtl';

  useEffect(() => {
    if (!mounted) return;

    // Update DOM html attributes
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    // Persist language choice
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors
    }

    // Dynamic Title & Meta Tags
    if (language === 'ar') {
      document.title = 'عمار الإبراهيم — مهندس برمجيات Full Stack';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'مهندس برمجيات Full Stack متخصص في بناء تطبيقات الويب المتقدمة والأنظمة القابلة للتوسع باستخدام React و Next.js و TypeScript و Node.js و Nest.js.'
        );
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle)
        ogTitle.setAttribute('content', 'عمار الإبراهيم — مهندس برمجيات Full Stack');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'مهندس برمجيات Full Stack متخصص في بناء تطبيقات الويب المتقدمة والأنظمة القابلة للتوسع باستخدام React و Next.js و TypeScript و Node.js و Nest.js.'
        );
      }
    } else {
      document.title = 'Ammar Alibrahim — Full Stack Engineer';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Full Stack Engineer building modern web applications and scalable systems with React, Next.js, TypeScript, Node.js, and Nest.js.'
        );
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Ammar Alibrahim — Full Stack Engineer');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Full Stack Engineer building modern web applications and scalable systems with React, Next.js, TypeScript, Node.js, and Nest.js.'
        );
      }
    }
  }, [language, dir, mounted]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = useMemo(() => TRANSLATIONS[language], [language]);
  const personalInfo = useMemo(() => getPersonalInfo(language), [language]);
  const experiences = useMemo(() => getExperiences(language), [language]);
  const projects = useMemo(() => getProjects(language), [language]);
  const skillCategories = useMemo(() => getSkillCategories(language), [language]);
  const education = useMemo(() => getEducation(language), [language]);
  const languages = useMemo(() => getLanguages(language), [language]);

  const value = useMemo(
    () => ({
      language,
      dir,
      isRTL,
      setLanguage,
      toggleLanguage,
      t,
      personalInfo,
      experiences,
      projects,
      skillCategories,
      education,
      languages,
    }),
    [
      language,
      dir,
      isRTL,
      t,
      personalInfo,
      experiences,
      projects,
      skillCategories,
      education,
      languages,
    ]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};