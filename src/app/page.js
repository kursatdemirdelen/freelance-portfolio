"use client";

import { useCallback } from "react";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsPreviewSection } from "../components/sections/ProjectsPreviewSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactPreviewSection } from "../components/sections/ContactPreviewSection";
import { useTheme } from "../hooks/useTheme";

export default function PortfolioPage() {
  const { theme, toggleTheme } = useTheme("light");

  const handleNavigate = useCallback((href) => {
    if (typeof window === "undefined") {
      return;
    }

    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} onNavigate={handleNavigate} />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:px-8 md:py-16">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsPreviewSection />
        <TestimonialsSection />
        <ContactPreviewSection />
      </main>
      <SiteFooter />
    </div>
  );
}
