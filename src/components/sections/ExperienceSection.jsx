import { experiences } from "../../app/data";
import { BriefcaseIcon, ArrowUpRightIcon } from "../icons/lucide";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-10">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
          Experience that scales from discovery to delivery
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-[--muted]">
          I embed with your team to guide product direction, unblock engineering, and maintain design standards across every release.
        </p>
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[--accent-soft]/60 md:left-1/2" aria-hidden />
        <div className="space-y-10">
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;
            return (
              <article
                key={`${experience.company}-${experience.period}`}
                className={`relative flex flex-col gap-4 rounded-3xl border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_24px_48px_rgba(147,191,199,0.15)] md:max-w-[46%] ${
                  isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                }`}
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[--accent-soft]/60 text-[--foreground]">
                  <BriefcaseIcon className="size-6" />
                </span>
                <div className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-[0.28em] text-[--muted]">
                  <span>{experience.period}</span>
                  <span>{experience.company}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{experience.role}</h3>
                <ul className="space-y-3 text-sm text-[--muted]">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-[--muted]">
                  {experience.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-[--surface-muted] px-3 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <span
                  className={`absolute left-[14px] top-6 inline-flex size-8 items-center justify-center rounded-full border-4 border-[--surface] bg-[--accent] text-slate-900 shadow-[0_8px_18px_rgba(147,191,199,0.3)] md:left-auto md:top-1/2 md:-mt-4 ${
                    isLeft ? "md:-right-4" : "md:-left-4"
                  }`}
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <a
          href="mailto:hello@aysekaya.dev?subject=Project%20opportunity"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[--muted] transition hover:text-[--foreground]"
        >
          Request a detailed CV
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}
