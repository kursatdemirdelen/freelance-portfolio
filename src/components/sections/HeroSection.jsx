import Link from "next/link";
import { availability, heroMetrics } from "../../app/data";
import { ArrowUpRightIcon, CalendarClockIcon, SparklesIcon } from "../icons/lucide";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[2.5rem] border border-[--accent-soft]/60 bg-[--surface] px-6 py-16 shadow-[0_35px_80px_rgba(147,191,199,0.25)] sm:px-10 md:py-20"
    >
      <div className="pointer-events-none absolute -left-12 top-12 hidden size-[420px] rounded-full bg-[--accent-soft]/40 blur-3xl md:block" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 size-[360px] rounded-full bg-[--accent]/20 blur-3xl" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
            <SparklesIcon className="size-4" />
            Product partner for thoughtful teams
          </span>
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
              Designing and building calm, conversion-led experiences for ambitious founders.
            </h1>
            <p className="max-w-2xl text-pretty text-base text-[--muted] sm:text-lg">
              I help teams discover the right problems, craft cohesive design systems, and ship performant web apps that feel effortless to use.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.4)] transition hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRightIcon className="size-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-6 py-3 text-sm font-semibold text-[--foreground] transition hover:border-[--accent]"
            >
              View full case studies
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-[--accent-soft]/60 bg-[--surface-muted] px-6 py-5 shadow-inner shadow-[rgba(147,191,199,0.15)]"
              >
                <dt className="text-xs uppercase tracking-[0.3em] text-[--muted]">{metric.label}</dt>
                <dd className="mt-3 text-2xl font-semibold text-[var(--foreground)]">{metric.value}</dd>
                <p className="mt-2 text-sm text-[--muted]">{metric.description}</p>
              </div>
            ))}
          </dl>
        </div>
        <aside className="rounded-3xl border border-[--accent-soft]/60 bg-[--surface-muted] p-6">
          <div className="flex items-center gap-3 text-sm font-semibold text-[--foreground]">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-[--accent]/80 text-[--foreground]">
              <CalendarClockIcon className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.28em] text-[--muted]">Availability</p>
              <p>{availability.status}</p>
            </div>
          </div>
          <dl className="mt-6 space-y-4 text-sm text-[--muted]">
            <div>
              <dt className="font-semibold text-[var(--foreground)]">Next kickoff</dt>
              <dd>{availability.nextAvailability}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--foreground)]">Response time</dt>
              <dd>{availability.responseTime}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--foreground)]">Location</dt>
              <dd>{availability.location}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
