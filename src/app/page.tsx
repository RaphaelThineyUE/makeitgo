import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "AI Implementation Consultant — MakeItGo",
  description:
    "MakeItGo helps businesses implement AI that actually ships — workflow analysis, automation design, and production systems. Senior operators, not slide decks.",
  keywords: [
    "AI implementation consultant",
    "hire AI consultant for business",
    "implement AI in the workplace",
    "AI automation consulting",
    "AI consultant for small business",
    "workplace AI automation",
    "AI strategy and implementation",
  ],
};
import ClientMarquee from "@/components/ClientMarquee";
import Section from "@/components/Section";
import ServicePillars from "@/components/ServicePillars";
import ValueProps from "@/components/ValueProps";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />

      <Section
        eyebrow="How we work"
        title={
          <>
            A <span className="text-gradient">three-step</span> engagement, run
            by senior operators.
          </>
        }
        subtitle="No pyramid scheme staffing. No six-month discovery. A small, senior team that embeds, decides, and ships."
      >
        <ServicePillars />
      </Section>

      <Section
        eyebrow="Why MakeItGo"
        title={
          <>
            Seasoned enough to <span className="text-gradient">know what to skip</span>.
          </>
        }
        subtitle="Twenty years of enterprise software, from hedge fund platforms to hospital floors to industrial AI — distilled into an engagement that respects your time."
      >
        <ValueProps />
      </Section>

      <Section
        eyebrow="Selected work"
        title={
          <>
            Shipped across <span className="text-gradient">three regulated industries</span>.
          </>
        }
        subtitle="A snapshot of where we've built — finance, healthcare, and renewable energy. Full details on the Case Studies page."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              tag: "Renewable Energy",
              company: "Unison Energy",
              role: "Director of IT (2023–2025)",
              blurb:
                "Rebuilt internal platforms, introduced applied ML for industrial operations, and led IoT data pipelines for distributed energy assets.",
            },
            {
              tag: "Healthcare",
              company: "Surgipal · MedStar Georgetown",
              role: "CTO",
              blurb:
                "Built a clinical mobile platform deployed at an academic medical center — HIPAA-grade, mobile-first, integrated into surgical workflows.",
            },
            {
              tag: "Financial Services",
              company: "Aksia · Warburg Pincus · Cerberus",
              role: "Senior architect / IT leadership",
              blurb:
                "Delivered investment reporting platforms, data pipelines, and secure infrastructure across hedge fund and PE environments.",
            },
          ].map((c) => (
            <div key={c.company} className="glass glass-hover rounded-2xl p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
                {c.tag}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {c.company}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{c.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {c.blurb}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm text-amber-glow"
          >
            See the full case studies
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
