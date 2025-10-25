import Link from "next/link";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";

const variants = {
  primary:
    "bg-[--accent] text-slate-900 shadow-[0_16px_40px_rgba(147,191,199,0.4)] hover:-translate-y-0.5",
  outline:
    "border border-[--accent-soft] text-[--muted] hover:border-[--accent] hover:text-[--foreground]",
};

export function PillButton({ href, children, variant = "primary", className = "" }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
