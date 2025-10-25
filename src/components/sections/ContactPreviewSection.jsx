import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";
import { PillButton } from "../ui/PillButton";
import { IconPill } from "../ui/IconPill";
import { contactChannels } from "../../app/data";
import { MailIcon, CalendarClockIcon, PhoneIcon } from "../icons/lucide";

const channelIcons = {
  Mail: MailIcon,
  CalendarClock: CalendarClockIcon,
  Phone: PhoneIcon,
};

export function ContactPreviewSection() {
  return (
    <section id="contact" className="space-y-8 rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-8 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
      <SectionHeader
        title="Contact"
        subtitle="Share context about your product vision - you'll receive a thoughtful response with next steps within a day."
        right={<PillButton href="/contact">Send a project brief</PillButton>}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {contactChannels.map((channel) => {
          const Icon = channelIcons[channel.icon];
          return (
            <article
              key={channel.label}
              className="rounded-3xl border border-[--accent-soft]/60 bg-[--surface-muted] p-6"
            >
              <IconPill>{Icon ? <Icon className="size-6" /> : null}</IconPill>
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

