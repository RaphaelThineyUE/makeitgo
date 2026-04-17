import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  id?: string;
  align?: "left" | "center";
};

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  id,
  align = "left",
}: Props) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {(eyebrow || title || subtitle) && (
        <div
          className={`mb-12 max-w-3xl ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-glow/25 bg-amber-glow/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-glow shadow-[0_0_10px_rgba(255,176,32,0.8)]" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
