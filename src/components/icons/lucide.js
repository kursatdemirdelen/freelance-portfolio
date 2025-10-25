function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function createIcon(path, displayName) {
  const Component = ({ className, strokeWidth = 1.75, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("size-5", className)}
      {...props}
    >
      {path}
    </svg>
  );

  Component.displayName = displayName;
  return Component;
}

export const MenuIcon = createIcon(
  <path d="M4 7h16M4 12h16M4 17h16" />,
  "MenuIcon"
);

export const XIcon = createIcon(
  <path d="m6 6 12 12M6 18 18 6" />,
  "XIcon"
);

export const SunIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2" />
    <path d="M12 19v2" />
    <path d="M5.22 5.22 6.64 6.64" />
    <path d="M17.36 17.36 18.78 18.78" />
    <path d="M3 12h2" />
    <path d="M19 12h2" />
    <path d="M5.22 18.78 6.64 17.36" />
    <path d="M17.36 6.64 18.78 5.22" />
  </>,
  "SunIcon"
);

export const MoonIcon = createIcon(
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
  "MoonIcon"
);

export const SparklesIcon = createIcon(
  <>
    <path d="M5 3v4" />
    <path d="M3 5h4" />
    <path d="M17 17v4" />
    <path d="M15 19h4" />
    <path d="M9 7l1.5 3L14 11l-3.5 1-1.5 3-1.5-3L4 11l3.5-1Z" />
  </>,
  "SparklesIcon"
);

export const CompassIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m16 8-2.5 6.5L7 17l2.5-6.5Z" />
  </>,
  "CompassIcon"
);

export const PenToolIcon = createIcon(
  <>
    <path d="m12 19 7-7 3 3-7 7-3-3Zm0 0-2.5 2.5" />
    <path d="M18 13 6 1 1 6l12 12" />
    <path d="M5 7 9 3" />
    <path d="M9 7 7 9" />
  </>,
  "PenToolIcon"
);

export const ZapIcon = createIcon(
  <path d="m7 13 4-10 1 7h5l-4 10-1-7Z" />,
  "ZapIcon"
);

export const WorkflowIcon = createIcon(
  <>
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h6" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </>,
  "WorkflowIcon"
);

export const BriefcaseIcon = createIcon(
  <>
    <path d="M3 7V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1" />
    <path d="M3 7h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
    <path d="M8 17v-3h8v3" />
  </>,
  "BriefcaseIcon"
);

export const LayersIcon = createIcon(
  <>
    <path d="m12 2 8 4-8 4-8-4Z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
  </>,
  "LayersIcon"
);

export const GaugeIcon = createIcon(
  <>
    <path d="M12 16V8" />
    <path d="M7.6 21A10.05 10.05 0 1 1 21 7.6L12 17Z" />
  </>,
  "GaugeIcon"
);

export const CalendarClockIcon = createIcon(
  <>
    <path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M3 11h18" />
    <path d="M16 15h-2a1 1 0 0 1-1-1v-2" />
    <path d="M16 15v2" />
  </>,
  "CalendarClockIcon"
);

export const ArrowUpRightIcon = createIcon(
  <>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </>,
  "ArrowUpRightIcon"
);

export const QuoteIcon = createIcon(
  <>
    <path d="M3 8a4 4 0 0 1 4-4" />
    <path d="M7 4v8H3V9" />
    <path d="M15 8a4 4 0 0 1 4-4" />
    <path d="M19 4v8h-4V9" />
  </>,
  "QuoteIcon"
);

export const MessageIcon = createIcon(
  <>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8Z" />
  </>,
  "MessageIcon"
);

export const MailIcon = createIcon(
  <>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </>,
  "MailIcon"
);

export const PhoneIcon = createIcon(
  <>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 12.8 19.79 19.79 0 0 1 .08 4.37 2 2 0 0 1 2.05 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.1 9.91a16 16 0 0 0 8 8l1.27-1.2a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 1.96Z" />
  </>,
  "PhoneIcon"
);

export const LinkedinIcon = createIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>,
  "LinkedinIcon"
);

export const GithubIcon = createIcon(
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a4.6 4.6 0 0 0-.7-2.4 5.3 5.3 0 0 0-.1-2.4s-1-.3-3.2 1a11.6 11.6 0 0 0-5.4 0c-2.2-1.3-3.2-1-3.2-1a5.3 5.3 0 0 0-.1 2.4 4.6 4.6 0 0 0-.7 2.4c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />,
  "GithubIcon"
);

export const ExternalLinkIcon = createIcon(
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M21 21H3V3" />
  </>,
  "ExternalLinkIcon"
);

export const CheckIcon = createIcon(
  <path d="m4 12 4.5 4.5L20 5" />,
  "CheckIcon"
);

export const AwardIcon = createIcon(
  <>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.7 18.4 12 22l-3.7-3.6" />
    <path d="M8.5 14h7" />
  </>,
  "AwardIcon"
);

export const ScrollTextIcon = createIcon(
  <>
    <path d="M21 4v14a2 2 0 0 1-2 2H7" />
    <path d="M3 20a2 2 0 0 1 2-2h14" />
    <path d="M7 4v2a2 2 0 0 1-2 2H3V6a2 2 0 0 1 2-2Z" />
    <path d="M17 8h-6" />
    <path d="M17 12H9" />
  </>,
  "ScrollTextIcon"
);

export const SendIcon = createIcon(
  <>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </>,
  "SendIcon"
);

