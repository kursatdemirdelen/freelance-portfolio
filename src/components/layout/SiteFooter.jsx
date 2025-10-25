import Link from "next/link";
import { socialLinks } from "../../app/data";
import { GithubIcon, LinkedinIcon, ExternalLinkIcon } from "../icons/lucide";

const socialIcons = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  ExternalLink: ExternalLinkIcon,
};

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[--accent-soft]/60 bg-[--surface]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-2 text-sm text-[--muted]">
          <p className="text-sm font-semibold text-[var(--foreground)]">Ayşe Kaya — Product Engineer</p>
          <p>Designing and building resilient web products from Istanbul.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-[--accent-soft] px-4 py-2 text-sm font-semibold text-[--muted] transition hover:border-[--accent] hover:text-[--foreground]"
              >
                {Icon ? <Icon className="size-4" /> : null}
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
