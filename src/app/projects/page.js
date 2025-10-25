import Link from "next/link";
import { projectCategories, projects } from "../data";
import { ArrowUpRightIcon } from "../../components/icons/lucide";

const allCategory = projectCategories[0] ?? "All";

function buildCategoryHref(category) {
  if (category === allCategory) {
    return "/projects";
  }

  const query = new URLSearchParams({ category });
  return `/projects?${query.toString()}`;
}

function ProjectFilters({ activeCategory }) {
  return (
    <div className="flex flex-wrap gap-3">
      {projectCategories.map((category) => (
        <Link
          key={category}
          href={buildCategoryHref(category)}
          aria-current={category === activeCategory ? "page" : undefined}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            category === activeCategory
              ? "bg-[--accent] text-slate-900 shadow-[0_12px_30px_rgba(147,191,199,0.35)]"
              : "bg-[--surface] text-[--muted] hover:text-[--foreground]"
          }`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

function FeaturedProject({ project }) {
  if (!project) {
    return null;
  }

  return (
    <article className="flex flex-col gap-6 rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-8 shadow-[0_32px_72px_rgba(147,191,199,0.22)]">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[--muted]">
        <span>{project.timeline}</span>
        <span>&bull;</span>
        <span>{project.role}</span>
      </div>
      <div className="space-y-4 text-pretty">
        <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
          Primary case study
        </span>
        <h2 className="text-4xl font-semibold text-[var(--foreground)]">{project.title}</h2>
        <p className="text-base text-[--muted]">{project.description}</p>
      </div>
      <dl className="grid gap-4 sm:grid-cols-2">
        {project.metrics.map((metric) => (
          <div
            key={`${project.slug}-${metric.label}`}
            className="rounded-3xl bg-[--surface-muted] px-4 py-3 text-center"
          >
            <dt className="text-xs uppercase tracking-[0.3em] text-[--muted]">{metric.label}</dt>
            <dd className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{metric.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-2 text-xs font-semibold text-[--muted]">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[--surface-muted] px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-2 self-start rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.4)] transition hover:-translate-y-0.5"
      >
        View full case study
        <ArrowUpRightIcon className="size-4" />
      </Link>
    </article>
  );
}

function ProjectGrid({ projects: projectList }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projectList.map((project) => (
        <article
          key={project.slug}
          className="flex h-full flex-col justify-between rounded-3xl border border-[--accent-soft]/60 bg-[--surface] p-6 shadow-[0_22px_48px_rgba(147,191,199,0.18)]"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[--muted]">
              <span>{project.timeline}</span>
              <span>&bull;</span>
              <span>{project.category}</span>
            </div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
            <p className="text-sm text-[--muted]">{project.excerpt}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-[--muted]">
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-[--surface-muted] px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--muted] transition hover:text-[--foreground]"
            >
              Read more
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export const metadata = {
  title: "Projects | Ayse Kaya",
  description:
    "Detailed case studies covering SaaS platforms, marketing sites, and internal tools delivered for high-growth teams.",
};

export default function ProjectsPage({ searchParams }) {
  const requestedCategory =
    typeof searchParams?.category === "string" && searchParams.category.length > 0
      ? searchParams.category
      : allCategory;
  const activeCategory = projectCategories.includes(requestedCategory) ? requestedCategory : allCategory;

  const filteredProjects =
    activeCategory === allCategory
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProject =
    filteredProjects.find((project) => project.featured) ??
    projects.find((project) => project.featured) ??
    filteredProjects[0] ??
    null;

  const remainingProjects = featuredProject
    ? filteredProjects.filter((project) => project.slug !== featuredProject.slug)
    : filteredProjects;

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:px-8 md:py-16">
        <header className="space-y-6 text-pretty">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-4 py-2 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
          >
            Back to home
          </Link>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">Case studies</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              High-impact collaborations for growing product teams.
            </h1>
            <p className="max-w-3xl text-lg text-[--muted]">
              Browse detailed breakdowns of SaaS platforms, marketing sites, and internal tools designed to
              unblock ambitious roadmaps.
            </p>
          </div>
        </header>
        <ProjectFilters activeCategory={activeCategory} />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_0.9fr]">
          <FeaturedProject project={featuredProject} />
          {remainingProjects.length > 0 ? (
            <ProjectGrid projects={remainingProjects} />
          ) : (
            <div className="rounded-3xl border border-dashed border-[--accent-soft]/70 bg-[--surface] p-8 text-center text-[--muted]">
              More case studies are in progress for this category. Check back soon or reach out for a private walkthrough.
            </div>
          )}
        </div>
        <section className="rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-8 text-center shadow-[0_32px_72px_rgba(147,191,199,0.22)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[--muted]">Ready to build?</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">
            Need something similar for your next milestone?
          </h2>
          <p className="mt-4 text-[--muted]">
            Share a short brief and you will receive a tailored collaboration plan with timelines and investment
            ranges in under 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.35)] transition hover:-translate-y-0.5"
            >
              Book a project call
              <ArrowUpRightIcon className="size-4" />
            </Link>
            <Link
              href="mailto:hello@aysekaya.dev"
              className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-6 py-3 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
            >
              hello@aysekaya.dev
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
