import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";
import { ArrowUpRightIcon, CheckIcon } from "../../../components/icons/lucide";

function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) {
    return {
      title: "Project not found | Ayse Kaya",
    };
  }

  return {
    title: `${project.title} | Ayse Kaya`,
    description: project.excerpt,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 md:px-8 md:py-16">
        <header className="space-y-6 text-pretty">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-4 py-2 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
          >
            Back to projects
          </Link>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">Case study</p>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg text-[--muted]">{project.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
            <span>{project.timeline}</span>
            <span>&bull;</span>
            <span>{project.role}</span>
            <span>&bull;</span>
            <span>{project.category}</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-[--muted]">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[--surface] px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-10 text-pretty">
            <section className="space-y-3 rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">Problem</p>
              <p className="text-lg text-[var(--foreground)]">{project.problem}</p>
            </section>
            <section className="space-y-4 rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">Approach</h2>
              <ul className="space-y-3 text-sm text-[--muted]">
                {project.approach.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-[--accent]/20 text-[--accent]">
                      <CheckIcon className="size-3" strokeWidth={2.2} />
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="space-y-4 rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">Outcomes</h2>
              <ul className="space-y-3 text-sm text-[--muted]">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-[--accent]/20 text-[--accent]">
                      <CheckIcon className="size-3" strokeWidth={2.2} />
                    </span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>
          <aside className="space-y-6">
            <section className="rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_20px_44px_rgba(147,191,199,0.18)]">
              <h2 className="text-lg font-semibold text-[var(--foreground)]">Engagement snapshot</h2>
              <dl className="mt-4 space-y-4 text-sm text-[--muted]">
                {project.metrics.map((metric) => (
                  <div key={`${project.slug}-${metric.label}`}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">{metric.label}</dt>
                    <dd className="text-2xl font-semibold text-[var(--foreground)]">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section className="rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_20px_44px_rgba(147,191,199,0.18)]">
              <h2 className="text-lg font-semibold text-[var(--foreground)]">Deliverables</h2>
              <ul className="mt-4 space-y-2 text-sm text-[--muted]">
                {project.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-[--accent]" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 text-center shadow-[0_20px_44px_rgba(147,191,199,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[--muted]">Next steps</p>
              <p className="mt-3 text-[--muted]">
                Interested in building something similar? Share your context to receive a tailored engagement plan.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[--accent] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_14px_30px_rgba(147,191,199,0.35)] transition hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowUpRightIcon className="size-4" />
                </Link>
                <Link
                  href="mailto:hello@aysekaya.dev"
                  className="inline-flex items-center justify-center rounded-full border border-[--accent-soft] px-4 py-2 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
                >
                  hello@aysekaya.dev
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
