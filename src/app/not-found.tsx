import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber-glow">
        404 · page not found
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
        That one didn&rsquo;t <span className="text-gradient">make it go</span>.
      </h1>
      <p className="mt-4 text-slate-400">
        The page you were looking for doesn&rsquo;t exist. Head home or tell us what
        you were after.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full bg-amber-gradient px-5 py-3 text-sm font-medium text-ink-950 shadow-glow-sm hover:shadow-glow"
        >
          Back home
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white hover:border-amber-glow/40 hover:text-amber-glow"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
