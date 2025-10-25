"use client";

import { useEffect, useState } from "react";
import { testimonials } from "../../app/data";
import { QuoteIcon } from "../icons/lucide";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center">
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-[--accent-soft]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[--muted]">
          Words from collaborators
        </span>
        <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
          "Ayse brings clarity, craft, and calm to every engagement."
        </h2>
        <p className="text-pretty text-[--muted]">
          Teams repeatedly highlight the momentum, shared rituals, and long-term systems built together.
        </p>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`size-2 rounded-full transition ${
                index === activeIndex ? "bg-[--accent]" : "bg-[--accent-soft]"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <article className="relative overflow-hidden rounded-[2.5rem] border border-[--accent-soft]/70 bg-[--surface] p-8 shadow-[0_28px_60px_rgba(147,191,199,0.22)]">
        <QuoteIcon className="size-12 text-[--accent]" />
        <blockquote className="mt-6 text-lg text-[var(--foreground)]">
          {activeTestimonial.quote}
        </blockquote>
        <footer className="mt-6 text-sm text-[--muted]">
          <p className="font-semibold text-[var(--foreground)]">{activeTestimonial.name}</p>
          <p>
            {activeTestimonial.title} / {activeTestimonial.company}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em]">
            {activeTestimonial.project}
          </p>
        </footer>
      </article>
    </section>
  );
}
