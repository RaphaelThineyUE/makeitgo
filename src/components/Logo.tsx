import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid h-8 w-8 place-items-center">
        <span className="absolute inset-0 rounded-lg bg-amber-gradient opacity-80 blur-[6px] transition-opacity group-hover:opacity-100" />
        <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-amber-gradient text-ink-950">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden
          >
            {/* Stylized forward arrow / play mark */}
            <path d="M6 4l12 8-12 8V4z" fill="currentColor" />
          </svg>
        </span>
      </span>
      <span className="font-display text-[17px] font-semibold tracking-tight text-white">
        Make<span className="text-gradient">It</span>Go
      </span>
    </Link>
  );
}
