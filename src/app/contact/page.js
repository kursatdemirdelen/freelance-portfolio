import Link from "next/link";
import { contactChannels, faqs } from "../data";
import {
  MailIcon,
  CalendarClockIcon,
  PhoneIcon,
  ArrowUpRightIcon,
  SparklesIcon,
} from "../../components/icons/lucide";

const channelIcons = {
  Mail: MailIcon,
  CalendarClock: CalendarClockIcon,
  Phone: PhoneIcon,
};

export const metadata = {
  title: "Contact | Ayşe Kaya",
  description:
    "Start a conversation about your next product milestone and receive a tailored collaboration plan within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-4 py-2 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
        >
          ← Back to home
        </Link>
        <header className="mt-12 space-y-6 text-pretty">
          <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
            Let’s work together
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
            Share your product vision and let’s map the path to launch.
          </h1>
          <p className="max-w-3xl text-lg text-[--muted]">
            Tell me about your goals, team, and timeline. You’ll receive a curated response within 24 hours with recommended next steps and investment ranges.
          </p>
        </header>
        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="space-y-8 rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-8 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Project brief</h2>
            <form className="grid gap-6">
              <label className="space-y-2 text-sm font-medium text-[--muted]">
                <span className="text-[var(--foreground)]">Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Ayşe Kaya"
                  className="w-full rounded-2xl border border-[--accent-soft]/70 bg-[--surface-muted] px-4 py-3 text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[--muted]">
                <span className="text-[var(--foreground)]">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-[--accent-soft]/70 bg-[--surface-muted] px-4 py-3 text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[--muted]">
                <span className="text-[var(--foreground)]">What would you like to build?</span>
                <textarea
                  name="project"
                  rows={5}
                  placeholder="Share goals, current challenges, timelines, and any relevant links."
                  className="w-full rounded-2xl border border-[--accent-soft]/70 bg-[--surface-muted] px-4 py-3 text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[--muted]">
                <span className="text-[var(--foreground)]">Ideal start date</span>
                <input
                  type="text"
                  name="timeline"
                  placeholder="April 2025"
                  className="w-full rounded-2xl border border-[--accent-soft]/70 bg-[--surface-muted] px-4 py-3 text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.4)] transition hover:-translate-y-0.5"
              >
                Share project details
                <ArrowUpRightIcon className="size-4" />
              </button>
              <p className="text-sm text-[--muted]">
                This form is currently static. Email <a href="mailto:hello@aysekaya.dev" className="font-semibold text-[var(--foreground)] underline underline-offset-4">hello@aysekaya.dev</a> to connect immediately.
              </p>
            </form>
          </section>
          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_20px_44px_rgba(147,191,199,0.18)]">
              <h2 className="text-lg font-semibold text-[var(--foreground)]">Preferred channels</h2>
              <div className="mt-4 space-y-4">
                {contactChannels.map((channel) => {
                  const Icon = channelIcons[channel.icon];
                  return (
                    <Link
                      key={channel.label}
                      href={channel.href}
                      className="flex items-start gap-3 rounded-2xl bg-[--surface-muted] px-4 py-3 transition hover:bg-[--accent-soft]/40"
                    >
                      <span className="mt-1 inline-flex size-9 items-center justify-center rounded-2xl bg-[--accent]/30 text-[--foreground]">
                        {Icon ? <Icon className="size-4" /> : null}
                      </span>
                      <span className="space-y-1 text-sm text-[--muted]">
                        <span className="block text-sm font-semibold text-[var(--foreground)]">{channel.label}</span>
                        <span>{channel.description}</span>
                        <span className="block font-semibold text-[var(--foreground)]">{channel.value}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[--accent-soft]/70 bg-[--surface] p-6 shadow-[0_20px_44px_rgba(147,191,199,0.18)]">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
                <SparklesIcon className="size-5 text-[--accent]" />
                Frequently asked
              </h2>
              <div className="mt-4 space-y-4 text-sm text-[--muted]">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-2xl bg-[--surface-muted] px-4 py-3">
                    <summary className="cursor-pointer text-sm font-semibold text-[var(--foreground)]">
                      {faq.question}
                    </summary>
                    <p className="mt-2 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
