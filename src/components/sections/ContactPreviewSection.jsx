import Link from "next/link";
import { contactChannels } from "../../app/data";
import { MailIcon, CalendarClockIcon, PhoneIcon, SendIcon } from "../icons/lucide";

const channelIcons = {
  Mail: MailIcon,
  CalendarClock: CalendarClockIcon,
  Phone: PhoneIcon,
};

export function ContactPreviewSection() {
  return (
    <section id="contact" className="space-y-8 rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-8 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Let’s co-create your next launch
          </h2>
          <p className="max-w-2xl text-pretty text-[--muted]">
            Share context about your product vision—you’ll receive a thoughtful response with next steps within a day.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.4)] transition hover:-translate-y-0.5"
        >
          Send a project brief
          <SendIcon className="size-4" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {contactChannels.map((channel) => {
          const Icon = channelIcons[channel.icon];
          return (
            <article
              key={channel.label}
              className="rounded-3xl border border-[--accent-soft]/60 bg-[--surface-muted] p-6"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[--accent]/30 text-[--foreground]">
                {Icon ? <Icon className="size-6" /> : null}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{channel.label}</h3>
              <p className="mt-2 text-sm text-[--muted]">{channel.description}</p>
              <Link
                href={channel.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[--muted] transition hover:text-[--foreground]"
              >
                {channel.value}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
