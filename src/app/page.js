"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  availability,
  experiences,
  heroMetrics,
  process,
  projectCategories,
  projects,
  services,
  skills,
  testimonials,
} from "./data";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const primaryCta = { label: "Start a project", href: "#contact" };
const secondaryCta = { label: "Download résumé", href: "mailto:hello@aysekaya.dev" };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    return (
      window.localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(projectCategories[0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (event) => {
      if (!window.localStorage.getItem("theme")) {
        setTheme(event.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (testimonials.length < 2) {
      return undefined;
    }
    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }
    const onScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === projectCategories[0]) {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = useMemo(
    () => projects.find((project) => project.featured) || projects[0],
    []
  );

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleNav = (href) => {
    setIsMenuOpen(false);
    if (typeof window !== "undefined") {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_65%)] opacity-90 dark:bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.25),_transparent_65%)]"
          aria-hidden
        />
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="#home" className="flex items-center gap-2" onClick={() => handleNav("#home")}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-lg font-semibold text-white shadow-lg shadow-sky-500/40 dark:bg-teal-400 dark:text-slate-900 dark:shadow-teal-400/30">
                AK
              </span>
              <div className="text-left">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Product Engineer
                </p>
                <p className="font-semibold">Ayşe Kaya</p>
              </div>
            </Link>
            <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="transition-colors hover:text-sky-500 focus-visible:text-sky-500 dark:hover:text-teal-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href={secondaryCta.href}
                className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:hover:border-teal-300 dark:hover:text-teal-300 md:inline-flex"
              >
                {secondaryCta.label}
              </a>
              <button
                onClick={toggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-lg shadow-sm transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-teal-300 dark:hover:text-teal-300"
                aria-label="Toggle color theme"
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-lg shadow-sm transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-teal-300 dark:hover:text-teal-300 md:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="border-t border-slate-200/70 bg-white/95 px-6 py-4 text-sm font-medium shadow-sm dark:border-slate-700/70 dark:bg-slate-950/95 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.href)}
                    className="text-left transition-colors hover:text-sky-500 focus-visible:text-sky-500 dark:hover:text-teal-300"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href={secondaryCta.href}
                  className="rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-medium transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:hover:border-teal-300 dark:hover:text-teal-300"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </nav>
          )}
        </header>

        <main id="home" className="relative z-10">
          <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 pt-20 md:grid-cols-[minmax(0,1fr)_360px] md:pt-28">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/60 dark:text-slate-400">
                Crafting ambitious web products
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                I help teams ship confident experiences across the entire product lifecycle.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                From strategic discovery to meticulous delivery, I partner with product-led organisations to create responsive, accessible web apps that scale with the business.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400 dark:bg-teal-400 dark:text-slate-900 dark:shadow-teal-400/30 dark:hover:bg-teal-300"
                >
                  {primaryCta.label}
                  <span aria-hidden>→</span>
                </a>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:hover:border-teal-300 dark:hover:text-teal-300"
                  onClick={() => handleNav("#projects")}
                >
                  View recent work
                  <span aria-hidden>↗</span>
                </Link>
              </div>
              <div className="grid gap-6 pt-6 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-none"
                  >
                    <p className="text-3xl font-semibold text-slate-900 dark:text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="h-max space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70 dark:shadow-slate-900/40">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Availability
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                  Open to new work
                </span>
              </div>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p className="text-base font-medium text-slate-900 dark:text-white">
                  {availability.status}
                </p>
                <p>{availability.nextAvailability}</p>
                <p>{availability.responseTime}</p>
                <p>{availability.location}</p>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-300/70 bg-slate-100/70 p-4 text-sm dark:border-slate-700 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  Trusted by product and marketing teams across fintech, SaaS, and hardware.
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  "Ayşe is an absolute force multiplier. She pairs thoughtful strategy with spotless delivery." — Leyla K.
                </p>
              </div>
            </aside>
          </section>

          <section id="services" className="bg-white/60 py-20 dark:bg-slate-950/40">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Expertise
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                    Strategic partnership across design and engineering
                  </h2>
                </div>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                  Whether you need to validate a concept or scale a mature product, engagements are tailored to deliver measurable outcomes and leave your team stronger.
                </p>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70"
                  >
                    <div>
                      <span className="text-4xl">{service.icon}</span>
                      <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                        {service.description}
                      </p>
                    </div>
                    <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-teal-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Process
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  A transparent framework that keeps momentum high
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Every project is anchored by rituals that provide clarity for stakeholders and autonomy for the delivery team. Expect weekly demos, async status reports, and collaborative decision making.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {process.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60"
                    >
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span className="text-2xl">{step.icon}</span>
                        <span>{step.duration}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-sky-500/15 via-white to-white p-8 shadow-xl shadow-sky-200/40 dark:border-slate-800/70 dark:from-teal-500/10 dark:via-slate-900 dark:to-slate-900 dark:shadow-none">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Featured case study
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {featuredProject.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-semibold shadow-sm dark:bg-slate-900/60">
                    <span>🗓️</span>
                    {featuredProject.timeline}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-semibold shadow-sm dark:bg-slate-900/60">
                    <span>🎯</span>
                    {featuredProject.role}
                  </span>
                </div>
                <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {featuredProject.metrics.map((metric) => (
                    <p key={metric.label} className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-sky-500 dark:bg-teal-300" />
                      <span>
                        <strong className="font-semibold text-slate-900 dark:text-white">
                          {metric.value}
                        </strong>{" "}
                        {metric.label}
                      </span>
                    </p>
                  ))}
                </div>
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-white/20"
                >
                  Read the full story
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </section>

          <section id="experience" className="bg-white/60 py-20 dark:bg-slate-950/40">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Experience
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                    Leadership across startups and scale-ups
                  </h2>
                </div>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                  Embedding within teams to establish sustainable delivery practices, mentor engineers, and ensure every release moves the metrics that matter.
                </p>
              </div>
              <div className="mt-12 space-y-8">
                {experiences.map((experience) => (
                  <div
                    key={`${experience.company}-${experience.period}`}
                    className="relative rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                          {experience.period}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                          {experience.role} · {experience.company}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {experience.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-teal-300" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Capabilities
                </p>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                  Skills that balance craft and velocity
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  I combine a systems mindset with hands-on delivery, helping teams scale design language while keeping codebases maintainable.
                </p>
              </div>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                    <div className="mt-4 space-y-4">
                      {skillGroup.items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between text-sm font-medium text-slate-600 dark:text-slate-300">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                            <div
                              className="h-full rounded-full bg-sky-500 transition-[width] duration-700 ease-out dark:bg-teal-300"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="bg-white/60 py-20 dark:bg-slate-950/40">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Recent work
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                    Selected partnerships and measurable outcomes
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={classNames(
                        "rounded-full border px-4 py-2 text-sm font-semibold transition",
                        activeCategory === category
                          ? "border-sky-500 bg-sky-500 text-white shadow-sm shadow-sky-200/40 dark:border-teal-300 dark:bg-teal-300 dark:text-slate-900"
                          : "border-slate-300 bg-white/80 text-slate-600 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-teal-300 dark:hover:text-teal-300"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <article
                    key={project.slug}
                    className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/60"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        <span>{project.category}</span>
                        <span>{project.timeline}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 transition group-hover:text-sky-500 dark:text-white dark:group-hover:text-teal-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{project.excerpt}</p>
                      <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200/60 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition hover:gap-3 dark:text-teal-300"
                    >
                      Explore case study
                      <span aria-hidden>→</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Testimonials
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                    Partners who trust the process
                  </h2>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-lg shadow-sm transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-teal-300 dark:hover:text-teal-300"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-lg shadow-sm transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-teal-300 dark:hover:text-teal-300"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="relative mt-12">
                <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-xl shadow-slate-200/40 dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-none">
                  <blockquote className="text-xl font-medium text-slate-900 dark:text-white">
                    “{testimonials[activeTestimonial].quote}”
                  </blockquote>
                  <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p>
                      {testimonials[activeTestimonial].title} · {testimonials[activeTestimonial].company}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      {testimonials[activeTestimonial].project}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      onClick={() => setActiveTestimonial(index)}
                      className={classNames(
                        "h-2 flex-1 rounded-full transition-all",
                        activeTestimonial === index
                          ? "bg-sky-500 dark:bg-teal-300"
                          : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
                      )}
                      aria-label={`Show testimonial from ${testimonial.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="bg-white/60 py-20 dark:bg-slate-950/40">
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Collaborate
                  </p>
                  <h2 className="text-3xl font-semibold sm:text-4xl">
                    Let’s build the next milestone together
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    Share a few details about your product, and I’ll follow up with a tailored plan and transparent timeline.
                  </p>
                  <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Email
                      </p>
                      <a
                        href="mailto:hello@aysekaya.dev"
                        className="mt-2 block text-base font-semibold text-slate-900 hover:text-sky-500 dark:text-white dark:hover:text-teal-300"
                      >
                        hello@aysekaya.dev
                      </a>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Calendly
                      </p>
                      <a
                        href="https://cal.com/aysekaya/intro"
                        className="mt-2 block text-base font-semibold text-slate-900 hover:text-sky-500 dark:text-white dark:hover:text-teal-300"
                      >
                        Book a 20-minute intro call ↗
                      </a>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Working model
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                        Weekly sprints, async collaboration, transparent pricing.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        Toolkit
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                        Next.js 15, React 19, Tailwind, Supabase, Vercel, Figma
                      </p>
                    </div>
                  </div>
                </div>
                <form className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-none">
                  <div className="grid gap-5">
                    <div>
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:focus:border-teal-300 dark:focus:ring-teal-400/40"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:focus:border-teal-300 dark:focus:ring-teal-400/40"
                        required
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="projectType" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Project type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:focus:border-teal-300 dark:focus:ring-teal-400/40"
                          defaultValue="Product redesign"
                        >
                          <option>Product redesign</option>
                          <option>New product build</option>
                          <option>Design system</option>
                          <option>Consulting & advisory</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Budget range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:focus:border-teal-300 dark:focus:ring-teal-400/40"
                          defaultValue="€10k – €25k"
                        >
                          <option>€5k – €10k</option>
                          <option>€10k – €25k</option>
                          <option>€25k – €50k</option>
                          <option>€50k +</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Ideal timeline
                      </label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        placeholder="e.g. Kickoff in April, launch by June"
                        className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:focus:border-teal-300 dark:focus:ring-teal-400/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about the problem you’re solving, the audience, and success metrics."
                        className="mt-2 w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:focus:border-teal-300 dark:focus:ring-teal-400/40"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400 dark:bg-teal-300 dark:text-slate-900 dark:shadow-teal-300/30 dark:hover:bg-teal-200"
                    >
                      Share project brief
                      <span aria-hidden>→</span>
                    </button>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      By submitting this form you agree to receive a follow-up email within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200/70 bg-white/80 py-10 text-sm text-slate-500 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70 dark:text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Ayşe Kaya</p>
              <p>Product engineer & interface specialist</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://dribbble.com/aysekaya"
                className="transition hover:text-sky-500 dark:hover:text-teal-300"
              >
                Dribbble
              </a>
              <a
                href="https://github.com/aysekaya"
                className="transition hover:text-sky-500 dark:hover:text-teal-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aysekaya"
                className="transition hover:text-sky-500 dark:hover:text-teal-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@aysekaya.dev"
                className="transition hover:text-sky-500 dark:hover:text-teal-300"
              >
                Email
              </a>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} Crafted in Next.js 15. Deployed on Vercel.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
