import Link from "next/link";
import { projectCategories, projects } from "../data";
import { ArrowUpRightIcon } from "../../components/icons/lucide";

export const metadata = {
  title: "Projects | Ayşe Kaya",
  description: "Selected product partnerships and outcomes delivered by Ayşe Kaya.",
};

export default function ProjectsIndexPage() {
  const grouped = projectCategories
    .filter((category) => category !== "All")
    .map((category) => ({
      category,
      items: projects.filter((project) => project.category === category),
    }));

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-4 py-2 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
        >
          ← Back to home
        </Link>
        <header className="mt-12 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
            Selected partnerships
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
            Crafting calm, conversion-led experiences for ambitious teams
          </h1>
          <p className="max-w-3xl text-pretty text-lg text-[--muted]">
            Explore how strategy, systems thinking, and interface craftsmanship translate into tangible business impact.
          </p>
        </header>
        <div className="mt-16 space-y-16">
          {grouped.map(({ category, items }) => (
            <section key={category} className="space-y-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">{category}</h2>
                  <p className="text-sm text-[--muted]">{items.length} engagements</p>
                </div>
                <Link
                  href={`/?category=${encodeURIComponent(category)}#projects`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[--muted] transition hover:text-[--foreground]"
                >
                  View on homepage
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {items.map((project) => (
                  <article
                    key={project.slug}
                    className="flex h-full flex-col justify-between rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_28px_60px_rgba(147,191,199,0.22)]"
                  >
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[--muted]">
                        <span>{project.timeline}</span>
                        <span>&bull;</span>
                        <span>{project.role}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                      <p className="text-sm text-[--muted]">{project.excerpt}</p>
                      <dl className="grid gap-4 sm:grid-cols-2">
                        {project.metrics.map((metric) => (
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
                        {project.tags.map((tag) => (
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
                      View full case study
                      <ArrowUpRightIcon className="size-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-20 rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-10 text-center shadow-[0_28px_60px_rgba(147,191,199,0.24)]">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">
            Ready to shape your next release?
          </h2>
          <p className="mt-4 text-pretty text-[--muted]">
            Share a brief about your product and I’ll respond within a day with a tailored plan and timeline.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.4)] transition hover:-translate-y-0.5"
            >
              Start a project
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-6 py-3 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
            >
              Back to portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
