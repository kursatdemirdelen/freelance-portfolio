"use client";

import { useCallback } from "react";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsPreviewSection } from "../components/sections/ProjectsPreviewSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactPreviewSection } from "../components/sections/ContactPreviewSection";
import { useTheme } from "../hooks/useTheme";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme("light");

  const handleNavigate = useCallback((hash) => {
    if (typeof window === "undefined" || typeof hash !== "string" || !hash.startsWith("#")) {
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <SiteHeader onNavigate={handleNavigate} onToggleTheme={toggleTheme} theme={theme} />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-12 md:px-8 md:py-16">
        <HeroSection />
        <ProjectsPreviewSection />
        <ServicesSection />
        <SkillsSection />
        <ProcessSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactPreviewSection />
      </main>
      <SiteFooter />
    </div>
  );
}
