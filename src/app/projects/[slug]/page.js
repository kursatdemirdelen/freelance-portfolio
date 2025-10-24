import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((entry) => entry.slug === params.slug);
  if (!project) {
    return {
      title: "Project not found | Ayşe Kaya",
    };
  }
  return {
    title: `${project.title} | Ayşe Kaya`,
    description: project.excerpt,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_65%)] opacity-90 dark:bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.25),_transparent_65%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition hover:gap-3 dark:text-teal-300"
          >
            ← Back to home
          </Link>
          <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-xl shadow-slate-200/40 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-none">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
              {project.category}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 font-semibold shadow-sm dark:bg-slate-900/60">
                <span>🗓️</span>
                {project.timeline}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 font-semibold shadow-sm dark:bg-slate-900/60">
                <span>🎯</span>
                {project.role}
              </span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60"
                >
                  <p className="text-3xl font-semibold text-slate-900 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-12 space-y-12 text-slate-600 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The challenge</h2>
              <p className="mt-3 leading-relaxed">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Approach</h2>
              <ul className="mt-4 space-y-3">
                {project.approach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-sky-500 dark:bg-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Impact</h2>
              <ul className="mt-4 space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-sky-500 dark:bg-teal-300" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Deliverables</h2>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {project.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/60"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </section>
          </div>
          <div className="mt-16 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-none">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Plan your next milestone
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Have a similar initiative on the roadmap? Let’s explore how we can deliver results with the same clarity and pace.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400 dark:bg-teal-300 dark:text-slate-900 dark:shadow-teal-300/30 dark:hover:bg-teal-200"
              >
                Start a project
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-300 dark:hover:text-teal-300"
              >
                View all work
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
