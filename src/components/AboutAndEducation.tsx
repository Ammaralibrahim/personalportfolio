'use client';

import React from 'react';
import { useI18n } from '@/i18n/I18nContext';

export const AboutAndEducation: React.FC = () => {
  const { education, languages, t, language } = useI18n();

  return (
    <section id="about" className="py-20 border-b border-neutral-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2 text-start">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {t.about.title}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">{t.about.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-start">
          {/* Main Narrative */}
          <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            {language === 'ar' ? (
              <>
                <p>
                  أنا مهندس برمجيات متكامل (Full Stack) أجد شغفاً حقيقياً في بناء وتطوير أنظمة برمجية
                  موثوقة وعالية الاعتمادية. على مدار السنوات الثلاث الماضية، أتيحت لي فرصة العمل على
                  تطبيقات وأنظمة إنتاجية حية، تنوعت بين الأنظمة المؤسسية متعددة المستأجرين B2B في
                  شركة Asak وصولاً إلى البيئات المكانية التفاعلية ثلاثية الأبعاد عبر WebGL في Gamma
                  Universe.
                </p>
                <p>
                  ينصب تركيزي الأساسي على منظومة TypeScript المتكاملة — تقنيات React و Next.js
                  للواجهة الأمامية، و Node.js و Nest.js للأنظمة الخلفية. أهتم بكتابة شيفرات نظيفة
                  وقابلة للصيانة، وتصميم مخططات قواعد بيانات محكمة باستخدام MongoDB و Redis، وضمان
                  سرعة واستجابة واجهات المستخدم.
                </p>
                <p>
                  وعند مواجهة التحديات الهندسية المعقدة، أقدّم دائماً وضوح الحل ومتانته على الحيل
                  البرمجية: معالجة استثنائية دقيقة للأخطاء، وتصميم متناسق وموثق لواجهات البرمجة،
                  وتطبيقات عملية لقياس وتحسين الأداء.
                </p>
              </>
            ) : (
              <>
                <p>
                  I'm a full-stack engineer who genuinely enjoys building reliable software. Over the
                  past three years, I've had the opportunity to work on production applications,
                  ranging from multi-tenant B2B enterprise systems at Asak Company to interactive 3D
                  WebGL environments at Gamma Universe.
                </p>
                <p>
                  My focus is on the TypeScript ecosystem — React and Next.js on the frontend, and
                  Node.js and Nest.js on the backend. I care about writing maintainable code,
                  designing sound database schemas with MongoDB and Redis, and keeping user
                  interfaces fast and responsive.
                </p>
                <p>
                  When tackling technical problems, I prioritize clarity over cleverness: solid error
                  handling, consistent API design, and practical performance optimizations.
                </p>
              </>
            )}
          </div>

          {/* Education & Languages Sidebar */}
          <div className="md:col-span-5 space-y-6">
            {/* Education */}
            <div className="bg-[#0e1014] border border-neutral-850 rounded-xl p-6 space-y-3 text-start">
              <div className="text-xs font-mono text-neutral-400">
                {t.about.educationTitle}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {education.level}
                </h3>
                <p className="text-xs text-neutral-300 pt-0.5 font-medium">{education.focus}</p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">{education.note}</p>
            </div>

            {/* Languages */}
            <div className="bg-[#0e1014] border border-neutral-850 rounded-xl p-6 space-y-3 text-start">
              <div className="text-xs font-mono text-neutral-400">
                {t.about.languagesTitle}
              </div>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between text-xs border-b border-neutral-850/60 pb-1.5 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-neutral-200">{lang.name}</span>
                    <span className="text-neutral-400 font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};