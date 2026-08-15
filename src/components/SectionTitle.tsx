import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  children,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-widest ${light ? "text-white/75" : "text-brand"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-1 font-display text-2xl font-bold sm:text-3xl ${light ? "text-white" : "text-brand-dark"}`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-3 text-base leading-relaxed ${light ? "text-white/85" : "text-ink-muted"}`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
