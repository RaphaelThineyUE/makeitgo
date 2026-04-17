import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      className={cn(
        "relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28",
        className,
      )}
    >
      {(eyebrow || title || subtitle) && (
        <div
          className={cn(
            "mb-12 max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow && (
            <Badge className="mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-glow shadow-[0_0_10px_rgba(255,176,32,0.8)]" />
              {eyebrow}
            </Badge>
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
