export function IconPill({ children, size = 12, className = "" }) {
  const sizeClass = `size-${size}`;
  return (
    <span className={`inline-flex ${sizeClass} items-center justify-center rounded-2xl bg-[--accent]/30 text-[--foreground] ${className}`}>
      {children}
    </span>
  );
}
