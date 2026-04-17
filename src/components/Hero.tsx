"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden spotlight noise">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 md:pb-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl"
        >
          <Badge className="mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            AI implementation, actually shipped
          </Badge>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            We help companies
            <br />
            <span className="text-gradient">actually implement AI</span>
            <span className="text-amber-glow">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Buying ChatGPT licenses for everyone is not a strategy.{" "}
            <span className="text-slate-200">
              We come in, analyze your real processes, design automations that
              matter, and ship production systems
            </span>{" "}
            — with twenty years of enterprise experience across financial
            services, healthcare, and renewable energy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start a project
                <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <a href={site.bookingUrl} target="_blank" rel="noreferrer">
                Book a 30-min intro
                <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { k: "20+ yrs", v: "building enterprise platforms" },
              { k: "3 industries", v: "finance · healthcare · energy" },
              { k: "Startups → F500", v: "from zero-to-one to scale" },
              { k: "Azure · AWS · GCP", v: "cloud-native by default" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-lg font-semibold text-white md:text-xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-slate-500">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[-40px] top-24 hidden w-[460px] -rotate-3 md:block lg:right-[6%]"
      >
        <div className="glass rounded-2xl p-4 shadow-ring">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2 font-mono text-[11px] text-slate-500">
              makeitgo › engagement.ts
            </span>
          </div>
          <pre className="overflow-hidden font-mono text-[12px] leading-6 text-slate-300">
{`const engagement = {
  phase1: "analyze workflows",
  phase2: "design AI strategy",
  phase3: "ship automation",
  outcome: "measurable ROI",
};

// Not just a ChatGPT license.
await makeItGo(engagement);`}
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
