import { services } from "../../app/data";
import { CompassIcon, LayersIcon, ZapIcon, CheckIcon } from "../icons/lucide";

const serviceIcons = {
  Compass: CompassIcon,
  Layers: LayersIcon,
  Zap: ZapIcon,
};

export function ServicesSection() {
  return (
    <section id="services" className="space-y-10">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
          Strategy, systems, and shipping under one roof
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-[--muted]">
          Every engagement blends discovery, design, and engineering to deliver measurable outcomes with a calm,
          collaborative rhythm.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <article
              key={service.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_24px_48px_rgba(147,191,199,0.18)] transition hover:-translate-y-1 hover:border-[--accent]"
            >
              <div className="space-y-5">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[--accent-soft]/60 text-[--foreground]">
                  {Icon ? <Icon className="size-6" /> : null}
                </span>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="text-sm text-[--muted]">{service.description}</p>
                <ul className="space-y-3 text-sm text-[--muted]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 size-4 text-[--accent]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl bg-[--surface-muted] px-4 py-3 text-xs uppercase tracking-[0.3em] text-[--muted]">
                Tailored playbooks | Weekly demos | Shared documentation
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
