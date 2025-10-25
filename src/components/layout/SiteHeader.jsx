"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, SunIcon, MoonIcon, XIcon } from "../icons/lucide";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader({ onNavigate, onToggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (href) => {
    onNavigate?.(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[--accent-soft]/60 bg-[var(--surface)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/#home"
          className="group flex items-center gap-3 text-sm font-semibold text-[--muted]"
          onClick={() => handleNavigate("#home")}
        >
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-[--accent] text-base font-semibold text-slate-900 shadow-[0_10px_25px_rgba(147,191,199,0.35)] transition group-hover:scale-105">
            AK
          </span>
          <span className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.32em] text-[--muted]">
              Product Engineer
            </span>
            <span className="text-[var(--foreground)]">Ayşe Kaya</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[--muted] md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigate(item.href)}
              className="transition hover:text-[--foreground]"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/projects"
            className="hidden rounded-full bg-[--accent] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(147,191,199,0.4)] transition hover:-translate-y-0.5 md:inline-flex"
          >
            View projects
          </Link>
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[--accent-soft] bg-[--surface] text-[--muted] transition hover:text-[--foreground]"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[--accent-soft] bg-[--surface] text-[--muted] transition md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-[--accent-soft]/60 bg-[var(--surface)] px-4 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4 text-sm font-medium text-[--muted]">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className="rounded-2xl bg-[--surface-muted] px-4 py-3 text-left transition hover:bg-[--accent-soft]/30 hover:text-[--foreground]"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/contact"
              className="rounded-2xl bg-[--accent] px-4 py-3 text-center font-semibold text-slate-900 shadow-[0_12px_30px_rgba(147,191,199,0.35)]"
            >
              Book a call
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
