import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {/* Velocity chevron mark */}
      <span className="relative grid h-8 w-8 shrink-0 place-items-center">
        <span
          aria-hidden
          className="absolute inset-0 rounded-lg bg-amber-hot/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
        />
        <svg
          viewBox="0 0 120 120"
          className="relative h-8 w-8 text-amber-hot transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 12 35 L 44 60 L 12 85" opacity="0.28" />
            <path d="M 42 35 L 74 60 L 42 85" opacity="0.62" />
            <path d="M 72 35 L 104 60 L 72 85" />
          </g>
        </svg>
      </span>
      {/* Wordmark */}
      <span className="font-sans text-[18px] font-black tracking-tight text-white">
        MakeIt<span className="text-amber-hot">Go</span>
      </span>
    </Link>
  );
}
