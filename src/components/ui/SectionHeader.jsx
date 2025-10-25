export function SectionHeader({ title, subtitle, align = "left", right = null }) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${align === "center" ? "sm:justify-center" : ""}`}>
      <div className={`space-y-4 ${alignClasses}`}>
        {title ? (
          <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">{title}</h2>
        ) : null}
        {subtitle ? (
          <p className={`max-w-2xl text-pretty text-[--muted] ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>
        ) : null}
      </div>
      {right}
    </div>
  );
}
