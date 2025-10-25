import { skills } from "../../app/data";
import { AwardIcon, ScrollTextIcon } from "../icons/lucide";

export function SkillsSection() {
  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Craft built on systems thinking and storytelling
          </h2>
          <p className="max-w-2xl text-pretty text-[--muted]">
            From first principles to polished delivery, engagements combine creative exploration with deep product rigor.
          </p>
        </div>
        <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/50 px-4 py-2">
            <AwardIcon className="size-4" />
            Mentorship
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/50 px-4 py-2">
            <ScrollTextIcon className="size-4" />
            Documentation-first
          </span>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill.category}
            className="rounded-3xl border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_20px_44px_rgba(147,191,199,0.16)]"
          >
            <h3 className="text-lg font-semibold text-[var(--foreground)]">{skill.category}</h3>
            <ul className="mt-6 space-y-5">
              {skill.items.map((item) => (
                <li key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-[--muted]">
                    <span>{item.name}</span>
                    <span className="font-semibold text-[var(--foreground)]">{item.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[--surface-muted]">
                    <div
                      className="h-2 rounded-full bg-[--accent]"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
