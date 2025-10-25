"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { projectCategories, projects } from "../../app/data";
import { ArrowUpRightIcon } from "../icons/lucide";

export function ProjectsPreviewSection() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(projectCategories[0]);

  useEffect(() => {
    const requestedCategory = searchParams?.get("category");
    if (requestedCategory && projectCategories.includes(requestedCategory)) {
      setCategory(requestedCategory);
    }
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    if (category === projectCategories[0]) {
      return projects.slice(0, 4);
    }

    return projects.filter((project) => project.category === category).slice(0, 4);
  }, [category]);

  const featuredProject = useMemo(() => projects.find((project) => project.featured) ?? projects[0], []);

  return (
    <section id="projects" className="space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Selected partnerships with measurable outcomes
          </h2>
          <p className="max-w-2xl text-pretty text-[--muted]">
            Case studies span SaaS platforms, composable marketing sites, and mission-critical operations tools.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[--muted] transition hover:text-[--foreground]"
        >
          Browse all projects
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>
      <div className="flex flex-wrap gap-3">
        {projectCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              item === category
                ? "bg-[--accent] text-slate-900 shadow-[0_12px_30px_rgba(147,191,199,0.35)]"
                : "bg-[--surface] text-[--muted] hover:text-[--foreground]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="group flex h-full flex-col justify-between rounded-[2.25rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
              Featured engagement
            </span>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[--muted]">
              <span>{featuredProject.timeline}</span>
              <span>&bull;</span>
              <span>{featuredProject.role}</span>
            </div>
            <h3 className="text-3xl font-semibold text-[var(--foreground)]">{featuredProject.title}</h3>
            <p className="text-sm text-[--muted]">{featuredProject.excerpt}</p>
            <dl className="grid gap-4 sm:grid-cols-2">
              {featuredProject.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-[--surface-muted] px-4 py-3 text-center"
                >
                  <dt className="text-xs uppercase tracking-[0.3em] text-[--muted]">{metric.label}</dt>
                  <dd className="mt-2 text-xl font-semibold text-[var(--foreground)]">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[--muted]">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[--surface-muted] px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[--accent] px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_14px_28px_rgba(147,191,199,0.32)] transition hover:-translate-y-0.5"
          >
            View case study
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </article>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="flex h-full flex-col justify-between rounded-3xl border border-[--accent-soft]/60 bg-[--surface] p-5 shadow-[0_18px_40px_rgba(147,191,199,0.16)]"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[--muted]">
                  <span>{project.timeline}</span>
                  <span>&bull;</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{project.title}</h3>
                <p className="text-sm text-[--muted]">{project.excerpt}</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-[--muted]">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-[--surface-muted] px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[--muted] transition hover:text-[--foreground]"
              >
                View details
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
