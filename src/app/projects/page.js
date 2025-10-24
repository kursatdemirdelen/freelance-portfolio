import Link from "next/link";
import { projectCategories, projects } from "../data";

export const metadata = {
  title: "Projects | Ayşe Kaya",
  description: "Selected product partnerships and outcomes delivered by Ayşe Kaya.",
};

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_65%)] opacity-90 dark:bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.25),_transparent_65%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition hover:gap-3 dark:text-teal-300"
          >
            ← Back to home
          </Link>
          <header className="mt-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
              Selected partnerships
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
              A decade of building resilient digital products
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Explore a curated selection of engagements spanning SaaS platforms, marketing ecosystems, and mission-critical internal tools.
            </p>
          </header>
          <div className="mt-16 space-y-12">
            {projectCategories
              .filter((category) => category !== "All")
              .map((category) => (
                <section key={category} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{category}</h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {projects.filter((project) => project.category === category).length} engagements
                    </p>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => (
                        <article
                          key={project.slug}
                          className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/60"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                              <span>{project.timeline}</span>
                              <span>{project.role}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-900 transition group-hover:text-sky-500 dark:text-white dark:group-hover:text-teal-300">
                              {project.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{project.excerpt}</p>
                            <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                              {project.metrics.map((metric) => (
                                <div key={metric.label} className="rounded-2xl border border-slate-200/70 bg-white/90 p-3 text-center dark:border-slate-700 dark:bg-slate-900/60">
                                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                                    {metric.label}
                                  </p>
                                </div>
                              ))}
                            </div>
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
                            View full case study
                            <span aria-hidden>→</span>
                          </Link>
                        </article>
                      ))}
                  </div>
                </section>
              ))}
          </div>
          <div className="mt-16 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-none">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Ready to unlock your next release?
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Share context about your product vision and I’ll respond within 24 hours with a tailored collaboration plan.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400 dark:bg-teal-300 dark:text-slate-900 dark:shadow-teal-300/30 dark:hover:bg-teal-200"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
