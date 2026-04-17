import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CTASection() {
  return (
    <section className="relative mx-auto my-4 max-w-7xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-amber-glow/20 bg-card/60 p-8 shadow-ring md:p-14">
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
            <Badge>Ready when you are</Badge>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Let&rsquo;s turn the AI conversation in your company into{" "}
              <span className="text-gradient">something that actually runs</span>.
            </h2>
            <p className="mt-4 max-w-xl text-slate-400">
              Thirty minutes, no slides. Tell us where the friction is —
              we&rsquo;ll tell you whether we can help and how fast.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <a href={site.bookingUrl} target="_blank" rel="noreferrer">
                Book a call
                <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/contact">
                Send a brief
                <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
