import { process } from "../../app/data";
import {
  SparklesIcon,
  PenToolIcon,
  WorkflowIcon,
  GaugeIcon,
  ArrowUpRightIcon,
} from "../icons/lucide";

const processIcons = {
  Sparkles: SparklesIcon,
  PenTool: PenToolIcon,
  Workflow: WorkflowIcon,
  Gauge: GaugeIcon,
};

export function ProcessSection() {
  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            A momentum-driven collaboration rhythm
          </h2>
          <p className="max-w-2xl text-pretty text-[--muted]">
            Clear rituals keep projects on track. Expect transparent roadmaps, async-friendly updates, and a shared workspace from day one.
          </p>
        </div>
        <a
          href="https://cal.com/ayse/build"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[--muted] transition hover:text-[--foreground]"
        >
          Explore a sample project plan
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {process.map((stage) => {
          const Icon = processIcons[stage.icon];
          return (
            <article
              key={stage.title}
              className="rounded-3xl border border-[--accent-soft]/60 bg-[--surface] p-6 shadow-[0_18px_40px_rgba(147,191,199,0.18)]"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[--accent-soft]/60 text-[--foreground]">
                {Icon ? <Icon className="size-6" /> : null}
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-[--muted]">{stage.duration}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{stage.title}</h3>
              <p className="mt-3 text-sm text-[--muted]">{stage.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
