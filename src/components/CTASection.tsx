import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="relative mx-auto my-4 max-w-7xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-amber-glow/20 bg-ink-900/60 p-8 shadow-ring md:p-14">
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-[360px] w-[360px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,176,32,0.25), transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-10 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,95,19,0.2), transparent 65%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-glow">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Let&rsquo;s turn the AI conversation in your company into{" "}
              <span className="text-gradient">something that actually runs</span>.
            </h2>
            <p className="mt-4 max-w-xl text-slate-400">
              Thirty minutes, no slides. Tell us where the friction is — we&rsquo;ll
              tell you whether we can help and how fast.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-gradient px-5 py-3 text-sm font-medium text-ink-950 shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white hover:border-amber-glow/40 hover:text-amber-glow"
            >
              Send a brief
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
