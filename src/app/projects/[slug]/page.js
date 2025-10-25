import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";
import {
  ArrowUpRightIcon,
  CalendarClockIcon,
  GaugeIcon,
  LayersIcon,
  SparklesIcon,
} from "../../../components/icons/lucide";

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
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-4 py-2 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
        >
          ← All projects
        </Link>
        <article className="mt-12 space-y-12 rounded-[2.75rem] border border-[--accent-soft]/70 bg-[--surface] p-10 shadow-[0_32px_70px_rgba(147,191,199,0.24)]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
            {project.category}
          </span>
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg text-[--muted]">{project.description}</p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-3xl bg-[--surface-muted] px-5 py-4 text-sm font-semibold text-[var(--foreground)]">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-[--accent]/40 text-[--foreground]">
                <CalendarClockIcon className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[--muted]">Timeline</p>
                <p>{project.timeline}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl bg-[--surface-muted] px-5 py-4 text-sm font-semibold text-[var(--foreground)]">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-[--accent]/40 text-[--foreground]">
                <LayersIcon className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[--muted]">Role</p>
                <p>{project.role}</p>
              </div>
            </div>
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl bg-[--surface-muted] px-5 py-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[--muted]">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold text-[var(--foreground)]">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-[--muted]">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[--surface-muted] px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">The challenge</h2>
            <p className="leading-relaxed text-[--muted]">{project.problem}</p>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Approach</h2>
            <ul className="space-y-4 text-[--muted]">
              {project.approach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <SparklesIcon className="mt-1 size-4 text-[--accent]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Impact</h2>
            <ul className="space-y-4 text-[--muted]">
              {project.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <GaugeIcon className="mt-1 size-4 text-[--accent]" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Deliverables</h2>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[--muted]">
              {project.deliverables.map((deliverable) => (
                <span key={deliverable} className="rounded-full bg-[--surface-muted] px-3 py-1">
                  {deliverable}
                </span>
              ))}
            </div>
          </section>
        </article>
        <section className="mt-16 rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-10 shadow-[0_28px_60px_rgba(147,191,199,0.24)]">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">Plan your next milestone</h2>
          <p className="mt-4 text-pretty text-[--muted]">
            Have a similar initiative on the roadmap? Share the context and I’ll respond within a day with a tailored path forward.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.4)] transition hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRightIcon className="size-4" />
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
