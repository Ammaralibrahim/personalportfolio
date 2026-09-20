'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { ExperienceSection } from '@/components/Experience';
import { TechnicalSkills } from '@/components/TechnicalSkills';
import { AboutAndEducation } from '@/components/AboutAndEducation';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CVModal } from '@/components/CVModal';

export default function HomePage() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0c0f] text-[#eaecef] font-sans antialiased selection:bg-neutral-800 selection:text-white flex flex-col">
      <Header onOpenCV={() => setIsCVOpen(true)} />

      <main className="flex-grow">
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <SelectedWork />
        <ExperienceSection />
        <TechnicalSkills />
        <AboutAndEducation />
        <Contact />
      </main>

      <Footer />

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}