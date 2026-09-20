import { Experience, Project, Education, Language as LangType, SkillCategory } from '../types';
import { Language } from '../i18n/translations';

// English Data
export const PERSONAL_INFO_EN = {
  name: 'Ammar Alibrahim',
  role: 'Full Stack Engineer',
  primaryStack: 'React · Next.js · TypeScript · Node.js · Nest.js',
  shortBio:
    "I'm a full-stack engineer with 3+ years of commercial experience building web applications and backend systems. I specialize in TypeScript across React, Next.js, Node.js, and Nest.js, with hands-on experience in database architecture, multi-tenant B2B platforms, and real-time 3D web applications.",
  email: 'ammaryasir8088@gmail.com',
  phone: '+963981021170',
  location: 'Damascus, Syria',
  status: 'Open to full-time roles & contract work (Remote / Relocation)',
  links: {
    github: 'https://github.com/Ammaralibrahim',
    linkedin: 'https://linkedin.com/in/ammar-alibrahim-63790727a',
    portfolio: 'https://ammar-alibrahim.netlify.app',
  },
};

// Arabic Data
export const PERSONAL_INFO_AR = {
  name: 'عمار الإبراهيم',
  role: 'مهندس برمجيات Full Stack',
  primaryStack: 'React · Next.js · TypeScript · Node.js · Nest.js',
  shortBio:
    'مهندس برمجيات Full Stack بخبرة تجارية تزيد عن 3 سنوات في بناء تطبيقات الويب والأنظمة الخلفية. أتخصص في منظومة TypeScript عبر React و Next.js و Node.js و Nest.js، مع خبرة عملية واسعة في هندسة قواعد البيانات، والمنصات متعددة المستأجرين B2B، وتطبيقات الويب التفاعلية ثلاثية الأبعاد بالوقت الفعلي.',
  email: 'ammaryasir8088@gmail.com',
  phone: '+963981021170',
  location: 'دمشق، سوريا',
  status: 'متاح للوظائف بدوام كامل وعقود العمل الهندسية (عن بُعد / الاستعداد للانتقال)',
  links: {
    github: 'https://github.com/Ammaralibrahim',
    linkedin: 'https://linkedin.com/in/ammar-alibrahim-63790727a',
    portfolio: 'https://ammar-alibrahim.netlify.app',
  },
};

export const EXPERIENCES_EN: Experience[] = [
  {
    role: 'Full Stack Developer & Project Lead',
    company: 'Asak Company',
    period: '09/2023 – 11/2025',
    location: 'Istanbul, Turkey',
    summary:
      'Led the rewrite and modernization of a core B2B business platform used for product cataloging and commercial transactions.',
    responsibilities: [
      'Rebuilt an aging PHP monolith into a modern TypeScript stack with Next.js on the frontend, Nest.js on the backend, and MongoDB.',
      'Designed scalable backend services, database schemas, and RESTful APIs from the ground up.',
      'Implemented a multi-tenant system with role-based access control (RBAC) to handle different client tiers and user permissions.',
      'Migrated legacy production data to MongoDB while keeping the platform live and fully available.',
      'Improved performance by indexing MongoDB collections, adding Redis caching, and streamlining frontend render cycles.',
      'Built multilingual support for Turkish, Arabic, and English localization across customer and internal tools.',
    ],
    technologies: [
      'Next.js',
      'Nest.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'Nx.dev',
      'Tailwind CSS',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Gamma Universe & Gamma Cities',
    period: '01/2022 – 05/2023',
    location: 'Istanbul, Turkey',
    summary:
      'Built interactive 3D web platforms for digital properties and virtual environment tours.',
    responsibilities: [
      'Created 3D interactive web experiences using React and Three.js, allowing users to take virtual walkthroughs in the browser.',
      'Developed backend services with Node.js, Express, and MongoDB for user accounts, property data, and content workflows.',
      'Constructed clean, reusable frontend components using React, Next.js, and Tailwind CSS.',
      'Integrated Socket.io for real-time user interactions and multiplayer room synchronization.',
      'Handled cloud deployments and tuned WebGL rendering performance to run smoothly on standard laptops and mobile devices.',
    ],
    technologies: [
      'React',
      'Three.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS',
    ],
  },
];

export const EXPERIENCES_AR: Experience[] = [
  {
    role: 'مطور Full Stack وقائد للمشروع',
    company: 'Asak Company',
    period: '09/2023 – 11/2025',
    location: 'إسطنبول، تركيا',
    summary:
      'قيادة عملية إعادة البناء والتحديث الشامل لمنصة B2B الأساسية المخصصة لفهرسة المنتجات والعمليات التجارية.',
    responsibilities: [
      'إعادة بناء نظام PHP أحادي قديم إلى بنية حديثة بالكامل عبر TypeScript مع Next.js للواجهة الأمامية و Nest.js للخلفية البرمجية و MongoDB.',
      'تصميم خدمات خلفية قابلة للتوسع، ومخططات قواعد بيانات محكمة، وواجهات برمجة RESTful متقدمة من الصفر.',
      'تطبيق بنية متعددة المستأجرين مع نظام متقدم لإدارة الصلاحيات (RBAC) للتعامل مع مستويات العملاء وأذونات المستخدمين.',
      'ترحيل آمن لبيانات الإنتاج الحية إلى MongoDB مع الحفاظ على استمرارية المنصة دون أي انقطاع في الخدمة.',
      'رفع كفاءة الأداء بفهرسة مجموعات MongoDB، وإضافة طبقة تخزين مؤقت عبر Redis، وتحسين دورات تصيير الواجهات.',
      'بناء نظام دعم متعدد اللغات شمل التركية والإنجليزية والعربية عبر أدوات العملاء ولوحات الإدارة الداخلية.',
    ],
    technologies: [
      'Next.js',
      'Nest.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'Nx.dev',
      'Tailwind CSS',
    ],
  },
  {
    role: 'مطور Full Stack',
    company: 'Gamma Universe & Gamma Cities',
    period: '01/2022 – 05/2023',
    location: 'إسطنبول، تركيا',
    summary: 'تطوير منصات ويب تفاعلية ثلاثية الأبعاد للأصول الرقمية والجولات الافتراضية.',
    responsibilities: [
      'برمجة تجارب ويب ثلاثية الأبعاد تفاعلية باستخدام React و Three.js، مما أتاح للمستخدمين إجراء جولات افتراضية داخل المتصفح مباشرة.',
      'تطوير خدمات خلفية باستخدام Node.js و Express و MongoDB لحسابات المستخدمين وبيانات العقارات وسير عمل المحتوى.',
      'بناء مكونات واجهة أمامية نظيفة وقابلة لإعادة الاستخدام بالاعتماد على React و Next.js و Tailwind CSS.',
      'دمج Socket.io لتمكين التفاعل الحي بين المستخدمين ومزامنة الغرف متعددة اللاعبين في الوقت الفعلي.',
      'إدارة عمليات النشر السحابي وضبط أداء تصيير WebGL للعمل بسلاسة تامة على مختلف أجهزة الحواسيب المحمولة والهواتف الذكية.',
    ],
    technologies: [
      'React',
      'Three.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS',
    ],
  },
];

export const PROJECTS_EN: Project[] = [
  {
    id: 'tishreen-power-station',
    name: 'Tishreen Thermal Power Station',
    tagline:
      'Industrial production management and telemetry reporting system for an 850 MW power generation facility',
    role: 'Full Stack Developer',
    period: '2023 – 2024',
    company: 'Tishreen Thermal Power Station',
    featured: true,
    status: 'In Production',
    systemScale: {
      capacity: '850 MW (3 Steam + 4 Gas Turbines)',
      units: '7 Active Generation Units',
      records: '180+ Daily Shift Records / Month',
      frequency: '24/7 Continuous Shift Telemetry',
    },
    heroImage: '/assets/projects/tishreen/dashboard-hero.svg',
    summary:
      'An industrial-grade production management and telemetry reporting system engineered for Syria’s 850 MW Tishreen Thermal Power Station. Replaces manual paper logs with an end-to-end data platform that automates daily generation delta tracking, internal transformer consumption accounting (BT01/BT02 auxiliary, BL01/BM01 startup, excitation), and official monthly engineering calculations across 7 turbine units.',
    problemStatement:
      'Thermal power generation facilities require precise, continuous accounting of electricity produced versus internally consumed by heavy auxiliary transformers. The station previously relied on handwritten shift handbooks and manual calculator entries, leading to arithmetic discrepancies during shift handovers, unrecorded transformer counter rollovers, and days of delayed spreadsheet consolidation when producing official monthly reports for grid dispatch and ministry authorities.',
    operationalContext:
      'The application is deployed on-premise within the station’s internal operations network. It is utilized 24/7 by shift operators, electrical maintenance engineers, and station managers to log meter states, track hourly peak/trough active and reactive power, monitor generation targets, and audit unit availability.',
    architecture: [
      'Modular full-stack Next.js and TypeScript architecture paired with Node.js and MongoDB time-series collections optimized for dense daily telemetry.',
      'Deterministic calculation engine automating generation deltas, transformer deductions (BT01/BT02 auxiliary, BL01/BM01 startup, excitation), net power exported, capacity factor, availability factor, and net ratios.',
      'Multi-sheet Excel ingestion engine parsing historical workbooks across all 7 units (ST1–ST3, GT1–GT4) with intelligent date format detection (DD/MM/YYYY vs MM/DD/YYYY) and atomic upsert operations.',
      'Bilingual RTL (Right-to-Left) Arabic operational interface with dark-mode optimization for 24/7 control room readability and high-contrast data visualization.',
    ],
    engineeringChallenges: [
      'Telemetry Math & Rollovers: Engineered resilient delta calculation logic that accounts for mechanical and digital meter counter rollovers without creating negative spikes or false deficits.',
      'Engineering Parameter Matrix: Built aggregation pipelines compiling multi-unit time-series data into official monthly engineering matrices (operating hours, average active MW, peak/min power timestamps, reactive MVARh, and unit health ratings) in sub-second time.',
      'Shift Workflow & Data Integrity: Designed a structured multi-step input form with client-side verification and immediate difference computation, preventing invalid entries and eliminating shift-handover discrepancies.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
      'Recharts',
      'ExcelJS',
    ],
    links: {
      note: 'Proprietary internal operations system deployed at Tishreen Thermal Power Station.',
    },
  },
  {
    id: 'asak-b2b',
    name: 'Asak B2B Platform',
    tagline: 'Multi-tenant enterprise operations and supply catalog',
    role: 'Full Stack Developer & Project Lead',
    period: '2023 – 2025',
    company: 'Asak Company',
    featured: true,
    status: 'In Production',
    heroImage: '/assets/projects/asak/asak.png',
    systemScale: {
      capacity: 'Multi-Tenant Architecture',
      units: '3 Full Locales (TR / EN / AR)',
      records: 'Enterprise Catalog',
      frequency: 'Nx Monorepo & Redis',
    },
    problemStatement:
      'Modernizing an aging, fragile PHP monolith into an extensible TypeScript platform without catalog downtime, transaction interruption, or data degradation.',
    operationalContext:
      'Deployed commercially at Asak Company (Istanbul) across global partner networks, managing digital venture operations, logistics, multi-language cataloging, and recruitment pipelines.',
    summary:
      'A complete modernization of Asak’s legacy PHP system into an extensible Next.js and Nest.js platform, featuring multi-tenancy, RBAC, Redis caching, and full English, Turkish, and Arabic localization.',
    architecture: [
      'Nx monorepo separating shared TypeScript contracts, API types, and reusable UI components between admin dashboards and backend services.',
      'Modular Nest.js architecture using dependency injection, validation pipes, and custom decorators for authentication and tenant isolation.',
      'Multi-tenant MongoDB setup with contextual database queries ensuring client data remains strictly separated.',
      'Redis cache layer for product catalogs and frequent queries, automatically invalidated on updates.',
    ],
    engineeringChallenges: [
      'Data Migration: Wrote migration scripts to safely move years of legacy relational data into MongoDB without downtime or record loss.',
      'Permissions: Built role-based access control (RBAC) guards to manage granular permissions for admins, managers, and vendors.',
      'Localization: Implemented full bidirectional i18n support, handling LTR (English, Turkish) and RTL (Arabic) layouts smoothly.',
    ],
    technologies: [
      'Next.js',
      'Nest.js',
      'TypeScript',
      'MongoDB',
      'Redis',
      'Nx.dev',
      'Tailwind CSS',
    ],
    links: {
      note: 'Proprietary enterprise system for Asak Company.',
    },
  },
  {
    id: 'gamma-assets',
    name: 'Gamma Assets — RWA Tokenization Platform',
    tagline: 'Fractional real estate investment platform with on-chain settlement',
    role: 'Full Stack Developer',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-assets/gammaassets.png',
    systemScale: {
      capacity: '$3.2M+ Real Asset Pool',
      units: '10,000 Fractions / Asset',
      records: '300,000+ Community',
      frequency: 'Instant Yield Settlement',
    },
    problemStatement:
      'Democratizing access to high-yield commercial and residential real estate by splitting multi-million dollar assets into regulated $30–$170 micro-fractions with transparent yields.',
    operationalContext:
      'Developed under Gamma Universe, tokenizing premier properties across Istanbul and Dubai (Inspire Coffee, Villa Damac Hills 2, West Marine Villa) with smart contracts and countdown auctions.',
    summary:
      'A Web3-enabled real estate fractionalization portal where users can browse, purchase, and redeem asset-backed fractions, track yields, and participate in community token offerings.',
    architecture: [
      'React frontend with custom search filters, countdown clocks, and fractional math calculators.',
      'Express REST APIs for asset cataloging, fractional allotment, and investor KYC checks.',
      'MongoDB schemas tracking fractional balances, redemption status, and daily yield distributions.',
      'Integrated Web3 wallet connection and token status monitoring (GMAC token).',
    ],
    engineeringChallenges: [
      'Fractional Precision: Enforced floating-point precision guards so fractional ownership splits always balanced to exactly 10,000 units per property.',
      'Real-Time Auction Clock: Built synchronized countdown timers resilient to client clock drifts during high-demand asset launches.',
      'State Transitions: Automated lifecycle changes from Active -> Fully Subscribed -> Redeemed upon target capital clearance.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Web3 Integrations',
    ],
    links: {
      note: 'Part of the Gamma Universe real estate tokenization platform.',
    },
  },
  {
    id: 'gamma-cities',
    name: 'Gamma Cities',
    tagline: 'Interactive 3D virtual property platform running directly in the browser',
    role: 'Full Stack Developer',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-cities/gammacities.png',
    systemScale: {
      capacity: '60 FPS Target Render',
      units: 'Level-of-Detail (LOD)',
      records: 'Spatial Parcels',
      frequency: 'Socket.io State Sync',
    },
    problemStatement:
      'Rendering interactive, multi-user 3D spatial properties directly in the browser without requiring external plugins or heavyweight desktop installations.',
    operationalContext:
      'Part of the Gamma Universe ecosystem, enabling users to explore digital real estate, navigate architectural replicas, participate in tokenized events, and customize avatar identities.',
    summary:
      'A browser-based 3D environment platform that lets users explore digital real estate, navigate interactive virtual spaces, and interact with other users in real time.',
    architecture: [
      'React frontend with custom Three.js render loops and level-of-detail (LOD) asset loading.',
      'Node.js and Express backend handling authentication, scene metadata, and asset delivery.',
      'Socket.io real-time layer synchronizing user avatars, camera coordinates, and spatial interactions.',
      'MongoDB schemas storing scene hierarchies, point-of-interest coordinates, and analytics.',
    ],
    engineeringChallenges: [
      'WebGL Performance: Managed memory carefully by disposing of unused textures and geometries to avoid browser tab crashes.',
      'Framerate Optimization: Reduced draw calls through geometry batching and texture atlasing, maintaining a smooth 60 FPS.',
      'State Sync: Throttled and interpolated network updates over WebSockets so movement felt smooth without flooding the network.',
    ],
    technologies: [
      'React',
      'Three.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS',
    ],
    links: {
      note: 'Part of the Gamma Universe digital property platform.',
    },
  },
  {
    id: 'bright-edu',
    name: 'BrightEdu — AI-Powered Tutoring & LMS Platform',
    tagline: 'Adaptive AI course delivery and LTI-compliant student progress portal',
    role: 'Full Stack Developer',
    period: '2023',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/brightedu/brightedu.png',
    systemScale: {
      capacity: 'LTI Standard Interop',
      units: '4-Stage Mastery Flow',
      records: 'Diagnostic Question Sets',
      frequency: 'Auto-Grading Quiz Engine',
    },
    problemStatement:
      'Bridging institutional Learning Management Systems with real-time AI mentoring and auto-graded diagnostics that keep students engaged without losing quiz draft state.',
    operationalContext:
      'Interactive educational platform combining 24/7 AI-guided problem breakdown with Canvas/Moodle LMS integration and gamified level rankings.',
    summary:
      'An educational web app featuring structured course modules, interactive quizzes, student progress tracking, and instructor grading tools.',
    architecture: [
      'TypeScript-powered React interface with accessible components and responsive layouts.',
      'Client-side state management that tracks lesson progress and auto-saves quiz drafts.',
      'REST APIs connecting lesson content and assessment data to MongoDB.',
      'LTI middleware facilitating seamless single sign-on from major university LMS portals.',
    ],
    engineeringChallenges: [
      'Designed auto-save mechanics so student quiz answers are never lost on accidental tab closes or flaky connections.',
      'Built a clean curriculum sidebar with keyboard accessibility and progress checkpoints.',
      'Engineered auto-grading pipelines to provide instant feedback and mastery rank adjustments.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    links: {
      note: 'Educational platform project.',
    },
  },
  {
    id: 'gamma-studio',
    name: 'Gamma Studio — Web to Web 5.0 3D Engine',
    tagline: 'Interactive 3D configurator and low-latency cloud pixel-streaming platform',
    role: 'Full Stack Developer',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-studio/gammastudio.png',
    systemScale: {
      capacity: '1,000 Min Cloud 3D Streaming',
      units: 'AnyDevice WebGL Link',
      records: 'Dynamic Materials & Meshes',
      frequency: 'Real-Time Engine Walkthrough',
    },
    problemStatement:
      'Transitioning enterprise products from static flat 2D websites into interactive 3D spatial experiences accessible on any mobile, tablet, or desktop device via a simple link.',
    operationalContext:
      'Deployed under Gamma Universe to deliver pixel-streamed virtual architectural walkthroughs, AR/VR mixed reality simulations, and dynamic interactive package configurators.',
    summary:
      'A real-time 3D engine and configurator platform enabling enterprise clients to preview, customize, and stream interactive 3D spaces with instant pricing calculations and cross-device support.',
    architecture: [
      'Interactive package calculator calculating square meter, object, mesh, and streaming fee metrics on the fly.',
      'Multi-device responsive renderer previewing 3D walkthroughs across desktop monitors, iPads, and mobile screens.',
      'Node.js backend managing cloud streaming session queues and asset delivery.',
      'Tailwind CSS dark aesthetic with vivid crimson accents.',
    ],
    engineeringChallenges: [
      'Cross-Device Responsiveness: Engineered the 3D canvas viewport to dynamically adapt to varying aspect ratios without scene distortion.',
      'Dynamic Configurator Math: Built instant pricing algorithms calculating custom add-ons, surrounding landscapes, and streaming allocations in real time.',
      'Low-Latency Streaming: Structured WebRTC stream handshakes to minimize input lag during interactive walkthroughs.',
    ],
    technologies: ['React', 'Three.js', 'WebRTC', 'Node.js', 'Express.js', 'Tailwind CSS'],
    links: {
      note: 'Part of the Gamma Universe digital production studio.',
    },
  },
  {
    id: 'gamma-universe',
    name: 'Gamma Universe — Spatial Ecosystem & Vision',
    tagline:
      '5-pillar architectural holding uniting spatial 3D streaming, RWA tokenization, and metaverse worlds',
    role: 'Lead Full Stack & Systems Architect',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-universe/gammauniverse.png',
    systemScale: {
      capacity: '5 Holding Pillars',
      units: 'Unified Holding Architecture',
      records: 'Founder Vision 2030',
      frequency: 'Interactive Dynamic Slider',
    },
    problemStatement:
      'Unifying multiple distinct Web3, real estate, and spatial computing ventures into a single coherent architectural brand and interactive portal.',
    operationalContext:
      'Showcases the 5 integrated pillars: TDA (Architectural Development), Gamma Studio (3D Streaming), Gamma Cities (Metaverse Worlds), Inspire (Hospitality & Lifestyle), and Square (Digital Exchange).',
    summary:
      'The overarching digital holding ecosystem uniting five specialized ventures under a unified visual language and strategic roadmap.',
    architecture: [
      'Interactive multi-panel split slider with smooth hover expansions and dynamic color tinting.',
      'Founder Word executive modal articulating strategic milestones and long-term ecosystem direction.',
      'Modular layout ensuring brand consistency across decentralized products, real estate, and spatial tools.',
    ],
    engineeringChallenges: [
      'Architectural Consistency: Ensured seamless visual coherence across vastly different product domains (RWA, Gaming, 3D Rendering).',
      'Interactive Slider Mechanics: Implemented high-performance accordion flex layouts that maintain aspect ratio during transition states.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Spatial UI'],
    links: {
      note: 'Holding ecosystem uniting all Gamma spatial and tokenization products.',
    },
  },
];

export const PROJECTS_AR: Project[] = [
  {
    id: 'tishreen-power-station',
    name: 'محطة تشرين الحرارية (Tishreen Thermal Power Station)',
    tagline:
      'نظام إدارة الإنتاج الصناعي والتقارير القياسية عن بُعد لمنشأة توليد طاقة بقدرة 850 ميجاواط',
    role: 'مطور Full Stack',
    period: '2023 – 2024',
    company: 'محطة تشرين الحرارية',
    featured: true,
    status: 'In Production',
    systemScale: {
      capacity: '850 ميجاواط (3 عنفات بخارية + 4 عنفات غازية)',
      units: '7 مجموعات توليد نشطة (ST1–ST3, GT1–GT4)',
      records: 'أكثر من 180 سجلاً تشغيلياً يومياً / شهر',
      frequency: 'قياس وتشغيل مستمر على مدار 24/7 عبر الورديات',
    },
    heroImage: '/assets/projects/tishreen/dashboard-hero.svg',
    summary:
      'منصة صناعية متكاملة لإدارة بيانات الإنتاج وتدقيق القياسات التشغيلية صُممت لمحطة تشرين الحرارية (850 ميجاواط) في سوريا. تحل المنصة محل السجلات الورقية واليدوية بنظام بيانات شامل يؤتمت حسابات فوارق التوليد اليومية، واستهلاك محولات المساعدة (BT01/BT02) ومحولات الإقلاع (BL01/BM01) والتهييج، وإصدار المصفوفات الهندسية الشهرية المعتمدة لـ 7 عنفات.',
    problemStatement:
      'تتطلب منشآت التوليد الحرارية تدقيقاً دقيقاً ومستمراً بين الطاقة الإجمالية المولدة والطاقة المستهلكة داخلياً عبر محولات المساعدة الثقيلة. كانت المحطة تعتمد سابقاً على السجلات اليدوية والحسابات اليدوية بالآلات الحاسبة، مما سبب فروقات حسابية أثناء تسليم الورديات، وتأخر تقارير جداول البيانات لأيام قبل رفعها لمركز التنسيق الرئيسي ووزارة الكهرباء.',
    operationalContext:
      'تم نشر النظام داخلياً ضمن شبكة العمليات التشغيلية المعزولة للمحطة. يُستخدم على مدار 24 ساعة يومياً من قبل مهندسي الورديات، ومهندسي الصيانة الكهربائية، وإدارة المحطة لقراءة العدادات، ومراقبة ذروة الاستطاعة الفعالة والردية، ومتابعة الخطط الإنتاجية، وتدقيق جاهزية العنفات.',
    architecture: [
      'معمارية Full-Stack معيارية مبنية باستخدام Next.js و TypeScript متصلة بخدمات Node.js ومجموعات السلاسل الزمنية (Time-series) في MongoDB مهيأة للتعامل مع كثافة البيانات اليومية.',
      'محرك حسابي حتمي يؤتمت حساب فروق التوليد، واقتطاعات المحولات (محولات المساعدة BT01/BT02، ومحولات الإقلاع BL01/BM01، والتهييج)، وصافي الطاقة المصدرة، وعامل السعة، وعامل الجاهزية، والنسب الصافية.',
      'محرك استيراد ومعالجة ملفات Excel متعددة الصفحات يحلل مصنفات العمل التاريخية لجميع المجموعات السبع (ST1–ST3 و GT1–GT4) مع كشف ذكي لصيغ التواريخ (DD/MM/YYYY مقابل MM/DD/YYYY) وعمليات حفظ ذرية (Atomic upserts).',
      'واجهة تشغيلية عربية أصيلة تدعم اتجاه اليمين إلى اليسار (RTL) مع نمط ليلي عالي التباين لتوفير راحة بصرية تامة وملاءمة لغرف التحكم والمراقبة على مدار 24/7.',
    ],
    engineeringChallenges: [
      'معالجة التفاف عدادات القياس (Meter Rollovers): هندسة خوارزميات احتساب فروق متينة تتعامل بدقة مع دورات التفاف العدادات الميكانيكية والرقمية دون توليد قراءات سالبة أو فجوات وهمية.',
      'مصفوفة المعايير الهندسية الشهرية: بناء خطوط أنابيب تجميعية (Aggregation pipelines) تلخص بيانات السلاسل الزمنية لجميع المجموعات في مصفوفة هندسية رسمية متكاملة في أقل من ثانية.',
      'سير عمل الورديات ونزاهة البيانات: تصميم نموذج إدخال متعدد الخطوات مع تدقيق فوري من جهة العميل وحساب آلي للفروقات، مما يمنع المدخلات الخاطئة ويضمن سلامة البيانات أثناء تبديل الورديات.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
      'Recharts',
      'ExcelJS',
    ],
    links: {
      note: 'نظام تشغيلي داخلي مخصص ومثبت في محطة تشرين الحرارية.',
    },
  },
  {
    id: 'asak-b2b',
    name: 'منصة أساك (Asak B2B Platform)',
    tagline: 'بنية تشغيلية للمؤسسات متعددة المستأجرين مع كتالوج تجاري وسلسلة إمداد',
    role: 'مطور Full Stack وقائد للمشروع',
    period: '2023 – 2025',
    company: 'Asak Company',
    featured: true,
    status: 'In Production',
    heroImage: '/assets/projects/asak/asak.png',
    systemScale: {
      capacity: 'بنية متعددة المستأجرين (Multi-tenant)',
      units: '3 لغات مدعومة بالكامل (TR / EN / AR)',
      records: 'كتالوج مؤسسي واسع النطاق',
      frequency: 'مستودع Nx وذاكرة Redis المؤقتة',
    },
    problemStatement:
      'تحديث نظام PHP أحادي قديم ومعقد وتحويله إلى منصة قابلة للتوسع باستخدام TypeScript دون انقطاع خدمات الكتالوج أو توقف العمليات التجارية أو فقدان سلامة البيانات.',
    operationalContext:
      'تم تشغيل المنصة تجارياً لدى شركة أساك (إسطنبول) لخدمة شبكات الشركاء الدوليين، وإدارة مشاريع الأعمال الرقمية، واللوجستيات، والكتالوج متعدد اللغات، ومسارات استقطاب الكفاءات.',
    summary:
      'تحديث شامل لبنية نظام PHP القديم لشركة أساك إلى منصة عصرية باستخدام Next.js و Nest.js، تدعم تعدد المستأجرين، وصلاحيات RBAC، والتخزين المؤقت عبر Redis، ودعماً كاملاً للغات الإنجليزية والتركية والعربية.',
    architecture: [
      'مستودع Nx أحادي (Monorepo) يفصل عقود TypeScript المشتركة، وأنماط واجهات البرمجة (API types)، ومكونات الواجهة القابلة لإعادة الاستخدام بين لوحات التحكم والخدمات الخلفية.',
      'معمارية معيارية في Nest.js تعتمد على حقن التبعيات (Dependency Injection)، وأنابيب التحقق (Validation pipes)، ومزخرفات مخصصة للمصادقة وعزل بيانات المستأجرين.',
      'إعداد MongoDB متعدد المستأجرين مع استعلامات معتمدة على السياق تضمن عزلاً تاماً لبيانات كل عميل ومؤسسة.',
      'طبقة تخزين مؤقت عبر Redis للكتالوجات والاستعلامات المتكررة مع إبطال آلي عند التحديثات.',
    ],
    engineeringChallenges: [
      'ترحيل البيانات: كتابة نصوص برمجية آمنة لترحيل سنوات من البيانات العلائقية القديمة إلى MongoDB دون أي توقف في الخدمة أو فقدان في السجلات.',
      'إدارة الصلاحيات: بناء حراس صلاحيات (RBAC Guards) للتحكم الدقيق في الأذونات لكل من المدراء والمشرفين والمزودين.',
      'التدويل ودعم الاتجاهين: تنفيذ دعم i18n ثنائي الاتجاه بالكامل، مع معالجة سلسة لتخطيطات LTR (الإنجليزية والتركية) و RTL (العربية).',
    ],
    technologies: [
      'Next.js',
      'Nest.js',
      'TypeScript',
      'MongoDB',
      'Redis',
      'Nx.dev',
      'Tailwind CSS',
    ],
    links: {
      note: 'نظام مؤسسي خاص بشركة أساك (Asak Company).',
    },
  },
  {
    id: 'gamma-assets',
    name: 'منصة غاما للأصول (Gamma Assets — RWA Platform)',
    tagline: 'منصة استثمار وتجزئة عقارية مدعومة بالرموز الرقمية وتسوية مباشرة على البلوكشين',
    role: 'مطور Full Stack',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-assets/gammaassets.png',
    systemScale: {
      capacity: 'مجمع أصول حقيقية بأكثر من 3.2 مليون دولار',
      units: '10,000 حصة مجزأة / لكل أصل',
      records: 'مجتمع استثماري يتجاوز 300,000 عضو',
      frequency: 'تسوية أرباح وعوائد فورية',
    },
    problemStatement:
      'إتاحة الوصول إلى الاستثمارات العقارية التجارية والسكنية عالية العائد عبر تجزئة العقارات متعددة ملايين الدولارات إلى حصص مصغرة منظمة بقيم تبدأ من 30$ إلى 170$ مع عوائد شفافة وموثقة.',
    operationalContext:
      'تم التطوير تحت مظلة Gamma Universe، مع رمزة وتجزئة عقارات مميزة في إسطنبول ودبي (Inspire Coffee، و Villa Damac Hills 2، و West Marine Villa) عبر عقود ذكية ومزادات بالعد التنازلي.',
    summary:
      'بوابة تجزئة عقارية متوافقة مع تقنيات Web3 تتيح للمستخدمين استعراض وشراء واسترداد الحصص المدعومة بأصول حقيقية، ومتابعة عوائد الاستثمار، والمشاركة في الطروحات المجتمعية.',
    architecture: [
      'واجهة أمامية باستخدام React مع مرشحات بحث مخصصة، وساعات عد تنازلي متزامنة، وحاسبات دقيقة لحصص التجزئة.',
      'واجهات برمجة تطبيقات Express REST لفهرسة الأصول، وتخصيص الحصص، وإجراءات التحقق من الهوية (KYC).',
      'مخططات MongoDB لتتبع أرصدة الحصص وحالات الاسترداد وجداول توزيع العوائد اليومية.',
      'ربط متكامل مع محافظ Web3 ومتابعة حالة الرموز (رمز GMAC).',
    ],
    engineeringChallenges: [
      'دقة الحسابات الكسرية: فرض ضوابط دقة للأرقام العشرية لضمان توازن ملكية الحصص تماماً عند 10,000 وحدة لكل عقار دون أي انحراف رياضي.',
      'ساعة المزاد اللحظية: بناء مؤقتات عد تنازلي متزامنة تقاوم انحرافات ساعات أجهزة العملاء أثناء طروحات الأصول ذات الطلب المرتفع.',
      'انتقالات الحالة المؤتمتة: أتمتة تحولات دورة حياة الأصل من نشط إلى مكتمل الاكتتاب ثم مسترد بمجرد تحقيق المستهدف المالي.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Web3 Integrations',
    ],
    links: {
      note: 'جزء من منصة رمزة العقارات ضمن منظومة Gamma Universe.',
    },
  },
  {
    id: 'gamma-cities',
    name: 'مدن غاما الافتراضية (Gamma Cities)',
    tagline:
      'منصة عقارات وتجارب افتراضية تفاعلية ثلاثية الأبعاد تعمل مباشرة في المتصفح',
    role: 'مطور Full Stack',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-cities/gammacities.png',
    systemScale: {
      capacity: 'معدل إطارات مستهدف 60 FPS',
      units: 'تقنية مستويات التفاصيل (LOD)',
      records: 'قطع مكانية ومجسمات جغرافية',
      frequency: 'مزامنة لحظية للحالة عبر Socket.io',
    },
    problemStatement:
      'تصيير بيئات مكانية تفاعلية ثلاثية الأبعاد متعددة المستخدمين مباشرة داخل متصفح الويب دون الحاجة إلى تثبيت أي برامج خارجية أو إضافات ثقيلة.',
    operationalContext:
      'جزء من منظومة Gamma Universe، تتيح للمستخدمين استكشاف العقارات الرقمية، والتجول في نماذج معمارية واقعية، والمشاركة في الفعاليات الافتراضية، وتخصيص الشخصيات الرقمية (Avatars).',
    summary:
      'منصة بيئات تفاعلية ثلاثية الأبعاد تعمل على المتصفح تتيح للمستخدمين استكشاف العقارات الرقمية، والتجول الافتراضي السلس، والتفاعل مع المستخدمين الآخرين في الوقت الفعلي.',
    architecture: [
      'واجهة React مع حلقات تصيير مخصصة في Three.js وتحميل ديناميكي للأصول يعتمد على مستويات التفاصيل (LOD).',
      'خلفية برمجية باستخدام Node.js و Express لإدارة المصادقة، والبيانات الوصفية للمشاهد، وتوزيع الأصول.',
      'طبقة اتصال بالوقت الفعلي عبر Socket.io لمزامنة حركات الشخصيات وإحداثيات الكاميرا والتفاعلات المكانية.',
      'مخططات MongoDB لتخزين التسلسل الهرمي للمشاهد وإحداثيات نقاط الاهتمام وسجلات التفاعل.',
    ],
    engineeringChallenges: [
      'أداء WebGL: إدارة ذكية للذاكرة من خلال التخلص الدوري من التكستشر والمجسمات غير المستخدمة لمنع انهيار تبويب المتصفح.',
      'تحسين معدل الإطارات: تقليل نداءات الرسم (Draw calls) من خلال تجميع المجسمات واستخدام أطالس الإكساءات (Texture atlasing) للحفاظ على سلاسة 60 FPS.',
      'مزامنة الحالة عبر الشبكة: تقنين واستيفاء (Throttling & Interpolating) تحديثات الشبكة عبر WebSockets لضمان حركة انسيابية دون إغراق حركة المرور.',
    ],
    technologies: [
      'React',
      'Three.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS',
    ],
    links: {
      note: 'جزء من منصة الأصول الرقمية لشركة Gamma Universe.',
    },
  },
  {
    id: 'bright-edu',
    name: 'منصة برايت التعليمية (BrightEdu)',
    tagline:
      'تقديم مناهج تفاعلية مدعومة بالذكاء الاصطناعي وبوابة تقدم دراسي متوافقة مع معايير LTI',
    role: 'مطور Full Stack',
    period: '2023',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/brightedu/brightedu.png',
    systemScale: {
      capacity: 'توافق قياسي مع معايير LTI',
      units: 'مسار إتقان من 4 مراحل',
      records: 'مجموعات أسئلة تشخيصية تفاعلية',
      frequency: 'محرك تقييم وتصحيح آلي للاختبارات',
    },
    problemStatement:
      'الربط السلس بين أنظمة إدارة التعلم المؤسسية (LMS) والتوجيه الذكي الفوري بالاختبارات المصححة آلياً مع ضمان عدم ضياع مسودات إجابات الطلاب.',
    operationalContext:
      'منصة تعليمية تفاعلية تجمع بين التوجيه الذكي المستمر على مدار الساعة مع تكامل مباشر مع أنظمة Canvas و Moodle وتصنيفات تحفيزية مستندة إلى مستويات الإتقان.',
    summary:
      'تطبيق ويب تعليمي يقدم وحدات دراسية منظمة، واختبارات تفاعلية، وتتبعاً دقيقاً لتقدم الطلاب، مع أدوات متقدمة لتصحيح التقييمات للمعلمين.',
    architecture: [
      'واجهة مستخدم تفاعلية مبنية بواسطة React و TypeScript تراعي معايير الوصول وسلاسة التجاوب مع مختلف الشاشات.',
      'إدارة متقدمة لحالة التطبيق من جهة العميل تتبع تقدم الدروس وتحفظ مسودات الاختبارات تلقائياً.',
      'واجهات برمجة REST APIs تربط محتوى الدروس وبيانات التقييمات مع قاعدة بيانات MongoDB.',
      'برمجيات وسيطة متوافقة مع معيار LTI تتيح تسجيل الدخول الأحادي السلس من بوابات الجامعات والمدارس الكبرى.',
    ],
    engineeringChallenges: [
      'تصميم آليات حفظ تلقائي ذكية تحمي إجابات الطلاب من الفقدان في حال انقطاع الاتصال أو إغلاق التبويب المفاجئ.',
      'بناء شريط جانبي واضح للتنقل في المناهج يدعم التصفح بواسطة لوحة المفاتيح ونقاط متابعة التقدم.',
      'هندسة خطوط معالجة وتصحيح آلي لتقديم تغذية راجعة فورية وتحديث مستويات الإتقان والتصنيف.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    links: {
      note: 'مشروع منصة تعليمية وتدريبية متطورة.',
    },
  },
  {
    id: 'gamma-studio',
    name: 'استوديو غاما (Gamma Studio — 3D Engine)',
    tagline: 'مُهيئ ثلاثي الأبعاد تفاعلي ومنصة بث سحابي عالي السرعة ومنخفض الكمون',
    role: 'مطور Full Stack',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-studio/gammastudio.png',
    systemScale: {
      capacity: '1,000 دقيقة بث سحابي ثلاثي الأبعاد',
      units: 'رابط WebGL يعمل على أي جهاز',
      records: 'خامات ومجسمات بصرية ديناميكية',
      frequency: 'تجول تفاعلي مباشر داخل المحرك',
    },
    problemStatement:
      'نقل المنتجات والخدمات المؤسسية من المواقع المسطحة التقليدية 2D إلى تجارب مكانية ثلاثية الأبعاد تفاعلية يمكن الوصول إليها عبر أي جهاز من خلال رابط ويب مباشر.',
    operationalContext:
      'تم إطلاقه ضمن Gamma Universe لتقديم جولات معمارية افتراضية مبثوثة بتقنية Pixel-streaming، ومحاكاة الواقع المختلط AR/VR، ونماذج تهيئة تفاعلية للباقات.',
    summary:
      'محرك ثلاثي أبعاد ومنصة تهيئة وتخصيص تتيح للعملاء من الشركات معاينة وتخصيص وبث المساحات التفاعلية ثلاثية الأبعاد مع احتساب فوري للتكاليف ودعم العمل عبر مختلف الأجهزة.',
    architecture: [
      'حاسبة باقات تفاعلية تحسب بالمتر المربع أعداد المجسمات، والخامات، ورسوم البث السحابي بشكل فوري ودقيق.',
      'مُصيّر متجاوب يدعم استعراض الجولات ثلاثية الأبعاد بدقة وسلاسة عبر شاشات الحواسيب المكتبية وأجهزة الآيباد والهواتف الذكية.',
      'خلفية برمجية باستخدام Node.js لإدارة طوابير جلسات البث السحابي وتوزيع الأصول والمجسمات.',
      'واجهة مستخدم مظلمة عالية التباين مبنية بـ Tailwind CSS مع لمسات لونية حمراء مميزة.',
    ],
    engineeringChallenges: [
      'التجاوب عبر الشاشات المختلفة: ضبط منفذ عرض Three.js ليتكيف ديناميكياً مع نسب الأبعاد المتغيرة دون أي تشوه بصري في المشهد.',
      'خوارزميات تسعير التهيئة الفورية: بناء خوارزميات تسعير لحظية تحسب الإضافات المخصصة، والمشاهد الطبيعية المحيطة، وحصص البث المباشر.',
      'بث فائق السرعة ومنخفض الكمون: هيكلة اتصالات WebRTC لتقليل تأخير الإدخال أثناء الجولات التفاعلية المباشرة.',
    ],
    technologies: ['React', 'Three.js', 'WebRTC', 'Node.js', 'Express.js', 'Tailwind CSS'],
    links: {
      note: 'جزء من استوديو الإنتاج الرقمي لمنظومة Gamma Universe.',
    },
  },
  {
    id: 'gamma-universe',
    name: 'منظومة غاما (Gamma Universe)',
    tagline:
      'كيان معماري متكامل يجمع البث المكاني ثلاثي الأبعاد، ورمزة الأصول الواقعية، والعوالم الافتراضية',
    role: 'مطور Full Stack ورئيس المعماريين البرمجيين',
    period: '2022 – 2023',
    company: 'Gamma Universe',
    featured: true,
    status: 'Completed',
    heroImage: '/assets/projects/gamma-universe/gammauniverse.png',
    systemScale: {
      capacity: '5 ركائز مؤسسية متكاملة',
      units: 'معمارية كيان موحدة',
      records: 'رؤية المؤسس لعام 2030',
      frequency: 'عارض تفاعلي متعدد الشرائح',
    },
    problemStatement:
      'توحيد مشاريع متعددة ومستقلة في مجالات Web3، والتطوير العقاري، والحوسبة المكانية ضمن علامة تجارية معمارية متناسقة وبوابة رقمية موحدة.',
    operationalContext:
      'استعراض الركائز الخمس المتكاملة: TDA (التطوير المعماري)، Gamma Studio (البث ثلاثي الأبعاد)، Gamma Cities (العوالم الافتراضية)، Inspire (أسلوب الحياة والضيافة)، و Square (التبادل الرقمي).',
    summary:
      'المنظومة الرقمية الشاملة التي تجمع خمسة مشاريع تقنية متخصصة تحت لغة بصرية موحدة وخارطة طريق استراتيجية متكاملة.',
    architecture: [
      'عارض شرائح تفاعلي مقسّم متعدد الألواح مع تمدد انسيابي عند التمرير وتأثيرات تلوين متدرجة ومحكمة.',
      'نافذة تنفيذية خاصة بكلمة المؤسس تستعرض المحطات الاستراتيجية والتوجه العام طويل المدى للمنظومة.',
      'تخطيط معياري يضمن التناسق البصري للعلامة التجارية عبر مختلف المنتجات اللامركزية والأدوات المكانية.',
    ],
    engineeringChallenges: [
      'الاتساق المعماري: ضمان الانسجام البصري والتجربة المتكاملة عبر مجالات متباينة (الأصول الواقعية، الألعاب، التصيير ثلاثي الأبعاد).',
      'ميكانيكا الشرائح التفاعلية: تطبيق تخطيطات Flex الأكورديونية عالية الأداء تحافظ على نسب العرض أثناء حالات الانتقال الحركي.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Spatial UI'],
    links: {
      note: 'المنظومة القابضة الحاضنة لمنتجات Gamma المكانية وتقنيات الرموز الرقمية.',
    },
  },
];

export const SKILL_CATEGORIES_EN: SkillCategory[] = [
  {
    title: 'Core Stack',
    description: 'Technologies I use on a daily basis for building frontend and full-stack apps.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Nest.js'],
  },
  {
    title: 'Backend & APIs',
    description: 'Server architectures, API design, and system communication.',
    skills: [
      'Express.js',
      'REST APIs',
      'Multi-tenant Architecture',
      'Role-Based Access Control (RBAC)',
      'Socket.io (WebSockets)',
      'JWT Authentication',
    ],
  },
  {
    title: 'Databases & Caching',
    description: 'Storing, structuring, and optimizing data retrieval.',
    skills: ['MongoDB', 'Redis', 'Schema Design', 'Data Migration', 'Query Optimization'],
  },
  {
    title: 'Frontend & UI',
    description: 'Building fast, accessible interfaces and interactive graphics.',
    skills: ['Tailwind CSS', 'Three.js (WebGL)', 'Angular', 'NgRx', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'Tools & Learning',
    description: 'Everyday engineering workflows and current technical interests.',
    skills: ['Nx.dev Monorepo', 'Git & GitHub', 'Machine Learning / AI (Upskilling)'],
  },
];

export const SKILL_CATEGORIES_AR: SkillCategory[] = [
  {
    title: 'التقنيات الأساسية (Core Stack)',
    description: 'التقنيات التي أعتمد عليها يومياً لبناء التطبيقات المتكاملة وواجهات الويب الحديثة.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Nest.js'],
  },
  {
    title: 'الأنظمة الخلفية وواجهات البرمجة (Backend & APIs)',
    description: 'معماريات الخوادم، وتصميم واجهات البرمجة، وبروتوكولات الاتصال المتقدمة.',
    skills: [
      'Express.js',
      'REST APIs',
      'Multi-tenant Architecture',
      'Role-Based Access Control (RBAC)',
      'Socket.io (WebSockets)',
      'JWT Authentication',
    ],
  },
  {
    title: 'قواعد البيانات والتخزين المؤقت (Databases & Caching)',
    description: 'تخزين وتنظيم وهيكلة البيانات وتحسين سرعة الاسترجاع والاستعلام.',
    skills: ['MongoDB', 'Redis', 'Schema Design', 'Data Migration', 'Query Optimization'],
  },
  {
    title: 'الواجهات الأمامية وتجارب المستخدم (Frontend & UI)',
    description: 'بناء واجهات سريعة ومتاحة للجميع وتجارب تفاعلية ورسومات ثلاثية الأبعاد.',
    skills: ['Tailwind CSS', 'Three.js (WebGL)', 'Angular', 'NgRx', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'أدوات العمل والتطوير المستمر (Tools & Learning)',
    description: 'سير العمل الهندسي اليومي والاهتمامات التقنية الحديثة.',
    skills: ['Nx.dev Monorepo', 'Git & GitHub', 'Machine Learning / AI (Upskilling)'],
  },
];

export const EDUCATION_EN: Education = {
  level: 'High School Senior',
  focus: 'Preparing for University in Computer Science / Software Engineering',
  status: 'In Progress',
  note: 'Balancing formal studies while actively shipping commercial software and working with engineering teams.',
};

export const EDUCATION_AR: Education = {
  level: 'المرحلة الثانوية العامة (Senior)',
  focus: 'التحضير للدراسة الجامعية في علوم الحاسوب وهندسة البرمجيات',
  status: 'قيد الدراسة والمتابعة',
  note: 'الموازنة الدقيقة بين التحصيل الأكاديمي والعمل البرمجي التجاري الفعلي ضمن فِرق الهندسة والتطوير.',
};

export const LANGUAGES_EN: LangType[] = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Turkish', level: 'Native' },
  { name: 'Arabic', level: 'Native' },
];

export const LANGUAGES_AR: LangType[] = [
  { name: 'الإنجليزية (English)', level: 'كفاءة مهنية كاملة' },
  { name: 'التركية (Turkish)', level: 'كفاءة مهنية كاملة' },
  { name: 'العربية (Arabic)', level: 'اللغة الأم' },
];

// Helper functions to get data by language
export const getPersonalInfo = (lang: Language) =>
  lang === 'ar' ? PERSONAL_INFO_AR : PERSONAL_INFO_EN;
export const getExperiences = (lang: Language) =>
  lang === 'ar' ? EXPERIENCES_AR : EXPERIENCES_EN;
export const getProjects = (lang: Language) => (lang === 'ar' ? PROJECTS_AR : PROJECTS_EN);
export const getSkillCategories = (lang: Language) =>
  lang === 'ar' ? SKILL_CATEGORIES_AR : SKILL_CATEGORIES_EN;
export const getEducation = (lang: Language) => (lang === 'ar' ? EDUCATION_AR : EDUCATION_EN);
export const getLanguages = (lang: Language) => (lang === 'ar' ? LANGUAGES_AR : LANGUAGES_EN);

// Backward compatibility defaults
export const PERSONAL_INFO = PERSONAL_INFO_EN;
export const EXPERIENCES = EXPERIENCES_EN;
export const PROJECTS = PROJECTS_EN;
export const SKILL_CATEGORIES = SKILL_CATEGORIES_EN;
export const EDUCATION = EDUCATION_EN;
export const LANGUAGES = LANGUAGES_EN;