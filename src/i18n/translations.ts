export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface Translations {
  header: {
    brandRole: string;
    nav: {
      projects: string;
      experience: string;
      skills: string;
      about: string;
      contact: string;
    };
    resume: string;
    getInTouch: string;
    switchLang: string;
    switchLangAria: string;
    toggleMenuAria: string;
  };
  hero: {
    status: string;
    greeting: string;
    roleTitle: string;
    bio: string;
    viewProjects: string;
    readResume: string;
    getInTouch: string;
    coreStack: string;
  };
  projects: {
    badge: string;
    title: string;
    description: string;
    caseStudy: string;
    scaleLabel: string;
    scopeLabel: string;
    cadenceLabel: string;
    dataVolumeLabel: string;
    operationalProblem: string;
    engineeringSolutions: string;
    readFullCaseStudy: string;
    readCaseStudy: string;
    otherSystemsTitle: string;
    otherSystemsSubtitle: string;
    statusInProduction: string;
    statusCompleted: string;
    statusInternal: string;
  };
  projectModal: {
    closeAria: string;
    caseStudy: string;
    capacityLabel: string;
    scopeLabel: string;
    dataVolumeLabel: string;
    cadenceLabel: string;
    executiveSummary: string;
    problemAndContext: string;
    coreChallenge: string;
    environmentContext: string;
    archAndDesign: string;
    keyChallenges: string;
    technologies: string;
    liveService: string;
    repository: string;
  };
  experience: {
    title: string;
    subtitle: string;
    stackLabel: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    educationTitle: string;
    languagesTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailDescription: string;
    sendEmail: string;
    copyEmail: string;
    copied: string;
    phoneLabel: string;
    copyPhoneTitle: string;
    callDirectlyTitle: string;
    profilesLabel: string;
  };
  footer: {
    location: string;
    scrollToTopAria: string;
  };
  cvModal: {
    modalTitle: string;
    copyText: string;
    copied: string;
    downloadPdf: string;
    closeAria: string;
    summaryHeading: string;
    experienceHeading: string;
    responsibilitiesLabel: string;
    technologiesLabel: string;
    skillsHeading: string;
    educationHeading: string;
    languagesHeading: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    header: {
      brandRole: '/ Full Stack Engineer',
      nav: {
        projects: 'Projects',
        experience: 'Experience',
        skills: 'Skills',
        about: 'About',
        contact: 'Contact',
      },
      resume: 'Resume',
      getInTouch: 'Get in touch',
      switchLang: 'العربية',
      switchLangAria: 'Switch language to Arabic',
      toggleMenuAria: 'Toggle navigation',
    },
    hero: {
      status: 'Available for full-time roles & engineering projects',
      greeting: "Hi, I'm",
      roleTitle: 'Full Stack Engineer specializing in React, Next.js, Node.js, and TypeScript.',
      bio: "I build production web applications and scalable backend systems. Over the past 3+ years, I've modernized legacy enterprise monoliths into TypeScript microservices, built multi-tenant architectures with RBAC, and engineered interactive 3D WebGL experiences with Three.js.",
      viewProjects: 'View selected projects',
      readResume: 'Read Resume',
      getInTouch: 'Get in touch',
      coreStack: 'Core stack:',
    },
    projects: {
      badge: 'ENGINEERING CASE STUDIES',
      title: 'Architecture & Production Case Studies',
      description:
        'In-depth breakdowns of enterprise web applications, real-time engines, and distributed systems. Focus is placed on concrete architectural decisions, scalability challenges, and production outcomes.',
      caseStudy: 'Case Study',
      scaleLabel: 'Scale:',
      scopeLabel: 'Scope:',
      cadenceLabel: 'Cadence:',
      dataVolumeLabel: 'Data Volume:',
      operationalProblem: 'Operational Problem',
      engineeringSolutions: 'Engineering Solutions',
      readFullCaseStudy: 'Read full case study',
      readCaseStudy: 'Read case study',
      otherSystemsTitle: 'Other Systems & Engineering Tooling',
      otherSystemsSubtitle:
        'Internal enterprise dashboards, performance utilities, and legacy migrations.',
      statusInProduction: 'In Production',
      statusCompleted: 'Completed',
      statusInternal: 'Internal System',
    },
    projectModal: {
      closeAria: 'Close case study',
      caseStudy: 'Case Study',
      capacityLabel: 'Capacity / Scale',
      scopeLabel: 'Scope / Architecture',
      dataVolumeLabel: 'Data Volume',
      cadenceLabel: 'Operational Cadence',
      executiveSummary: 'Executive Summary',
      problemAndContext: 'Problem Statement & Context',
      coreChallenge: 'The Core Challenge',
      environmentContext: 'Environment & Production Context',
      archAndDesign: 'Architecture & Technical Design',
      keyChallenges: 'Key Engineering Challenges & Solutions',
      technologies: 'Technologies & Ecosystem',
      liveService: 'Live Service',
      repository: 'Repository',
    },
    experience: {
      title: 'Experience',
      subtitle: 'My commercial software engineering roles in Istanbul and remote teams.',
      stackLabel: 'Stack:',
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'Tools, languages, and frameworks I work with regularly in production.',
    },
    about: {
      title: 'About Me',
      subtitle: 'A bit about my background, how I approach engineering, and my education.',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
    },
    contact: {
      title: 'Get in Touch',
      subtitle:
        "I'm open to discussing full-time engineering roles, freelance contracts, or technical projects.",
      emailLabel: 'Email Address',
      emailDescription: 'The fastest way to reach me. I usually respond within 24 hours.',
      sendEmail: 'Send an email',
      copyEmail: 'Copy email',
      copied: 'Copied!',
      phoneLabel: 'Phone / WhatsApp',
      copyPhoneTitle: 'Copy phone number',
      callDirectlyTitle: 'Call directly',
      profilesLabel: 'Profiles',
    },
    footer: {
      location: 'Damascus, Syria · Remote / Relocation',
      scrollToTopAria: 'Scroll to top',
    },
    cvModal: {
      modalTitle: 'Resume / Curriculum Vitae',
      copyText: 'Copy text',
      copied: 'Copied',
      downloadPdf: 'Download CV PDF',
      closeAria: 'Close modal',
      summaryHeading: 'Summary',
      experienceHeading: 'Work Experience',
      responsibilitiesLabel: 'Responsibilities:',
      technologiesLabel: 'Technologies:',
      skillsHeading: 'Skills & Tools',
      educationHeading: 'Education',
      languagesHeading: 'Languages',
    },
  },
  ar: {
    header: {
      brandRole: '/ مهندس برمجيات Full Stack',
      nav: {
        projects: 'المشاريع',
        experience: 'الخبرة المهنية',
        skills: 'المهارات',
        about: 'نبذة عني',
        contact: 'التواصل',
      },
      resume: 'السيرة الذاتية',
      getInTouch: 'تواصل معي',
      switchLang: 'EN',
      switchLangAria: 'التحويل إلى اللغة الإنجليزية',
      toggleMenuAria: 'تبديل قائمة التنقل',
    },
    hero: {
      status: 'متاح للفرص الوظيفية الكاملة والمشاريع الهندسية',
      greeting: 'مرحباً، أنا',
      roleTitle: 'مهندس برمجيات Full Stack متخصص في React و Next.js و Node.js و TypeScript.',
      bio: 'أبني تطبيقات ويب مخصصة للإنتاج الفعلي وأنظمة خلفية عالية الأداء وقابلة للتوسع. على مدار أكثر من 3 سنوات، قمت بتحديث أنظمة أحادية تقليدية إلى خدمات مصغرة باستخدام TypeScript، وبناء بنى متعددة المستأجرين مع صلاحيات RBAC، وهندسة تجارب تفاعلية ثلاثية الأبعاد عبر WebGL و Three.js.',
      viewProjects: 'استعراض دراسات الحالة',
      readResume: 'قراءة السيرة الذاتية',
      getInTouch: 'تواصل معي',
      coreStack: 'التقنيات الأساسية:',
    },
    projects: {
      badge: 'دراسات حالة هندسية',
      title: 'دراسات الحالة المعمارية والإنتاجية',
      description:
        'تحليل تقني ومعماري معمّق لتطبيقات الويب المؤسسية، ومحركات الوقت الفعلي، والأنظمة الموزعة. يركز على القرارات الهندسية الملموسة، وتحديات قابلية التوسع، ونتائج بيئات الإنتاج الحية.',
      caseStudy: 'دراسة حالة',
      scaleLabel: 'المقياس:',
      scopeLabel: 'النطاق:',
      cadenceLabel: 'الوتيرة:',
      dataVolumeLabel: 'حجم البيانات:',
      operationalProblem: 'المشكلة التشغيلية',
      engineeringSolutions: 'الحلول الهندسية',
      readFullCaseStudy: 'قراءة دراسة الحالة كاملة',
      readCaseStudy: 'قراءة دراسة الحالة',
      otherSystemsTitle: 'أنظمة وأدوات هندسية داعمة',
      otherSystemsSubtitle:
        'لوحات تحكم تشغيلية داخلية، وأدوات قياس وتحسين الأداء، وترحيل الأنظمة السابقة.',
      statusInProduction: 'قيد التشغيل الفعلي',
      statusCompleted: 'مكتمل',
      statusInternal: 'نظام تشغيلي داخلي',
    },
    projectModal: {
      closeAria: 'إغلاق دراسة الحالة',
      caseStudy: 'دراسة حالة',
      capacityLabel: 'السعة / المقياس',
      scopeLabel: 'النطاق / المعمارية',
      dataVolumeLabel: 'حجم البيانات',
      cadenceLabel: 'الوتيرة التشغيلية',
      executiveSummary: 'الملخص التنفيذي',
      problemAndContext: 'بيان المشكلة والسياق التشغيلي',
      coreChallenge: 'التحدي الأساسي',
      environmentContext: 'بيئة العمل والسياق الإنتاجي',
      archAndDesign: 'المعمارية والتصميم التقني',
      keyChallenges: 'أبرز التحديات الهندسية والحلول المعتمدة',
      technologies: 'التقنيات وبيئة التطوير',
      liveService: 'الخدمة الحية',
      repository: 'المستودع البرمجي',
    },
    experience: {
      title: 'الخبرة المهنية',
      subtitle: 'أدواري المهنية التجارية في إسطنبول وضمن فِرق العمل الموزعة عن بُعد.',
      stackLabel: 'التقنيات:',
    },
    skills: {
      title: 'المهارات والتقنيات',
      subtitle: 'الأدوات ولغات البرمجة وأطر العمل التي أعتمد عليها بانتظام في بيئات الإنتاج.',
    },
    about: {
      title: 'نبذة عني',
      subtitle: 'لمحة عن مسيرتي المهنية، ومنهجيتي الهندسية، ومساري التعليمي الأكاديمي.',
      educationTitle: 'التعليم الأكاديمي',
      languagesTitle: 'اللغات',
    },
    contact: {
      title: 'تواصل معي',
      subtitle:
        'متاح لمناقشة فرص العمل الهندسية بدوام كامل، وعقود التطوير، والاستشارات البرمجية.',
      emailLabel: 'البريد الإلكتروني',
      emailDescription: 'أسرع طريقة للتواصل المباشر. أرد عادةً خلال 24 ساعة.',
      sendEmail: 'إرسال بريد إلكتروني',
      copyEmail: 'نسخ البريد',
      copied: 'تم النسخ!',
      phoneLabel: 'الهاتف / واتساب',
      copyPhoneTitle: 'نسخ رقم الهاتف',
      callDirectlyTitle: 'اتصال هاتفي مباشر',
      profilesLabel: 'الحسابات المهنية',
    },
    footer: {
      location: 'دمشق، سوريا · العمل عن بُعد / الاستعداد للانتقال',
      scrollToTopAria: 'العودة إلى أعلى الصفحة',
    },
    cvModal: {
      modalTitle: 'السيرة الذاتية / Curriculum Vitae',
      copyText: 'نسخ النص',
      copied: 'تم النسخ',
      downloadPdf: 'تحميل السيرة الذاتية PDF',
      closeAria: 'إغلاق السيرة الذاتية',
      summaryHeading: 'الملخص المهني',
      experienceHeading: 'الخبرة المهنية',
      responsibilitiesLabel: 'المسؤوليات الرئيسية:',
      technologiesLabel: 'التقنيات المستخدمة:',
      skillsHeading: 'المهارات والأدوات التقنية',
      educationHeading: 'التعليم الأكاديمي',
      languagesHeading: 'اللغات',
    },
  },
};