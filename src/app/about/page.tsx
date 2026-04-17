import type { Metadata } from "next";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";
import { GraduationCap, Languages, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "MakeItGo is founded by Raphael Dambournet — 20+ years scaling enterprise software across finance, healthcare, and renewable energy.",
};

const timeline = [
  {
    years: "2023 – 2025",
    role: "Director of Information Technology",
    org: "Unison Energy",
    blurb:
      "Led IT and platform engineering for a distributed energy operator. Introduced applied ML for industrial ops, modernized data pipelines, and stood up the AI foundation for the company.",
  },
  {
    years: "Co-founder",
    role: "Co-founder / CTO",
    org: "Safeguard Privacy",
    blurb:
      "Azure-native SaaS for privacy compliance. Built the platform, the team, and the engineering playbook from zero to product-market fit.",
  },
  {
    years: "CTO",
    role: "Chief Technology Officer",
    org: "Surgipal",
    blurb:
      "Founded and built a clinical mobile platform deployed at MedStar Georgetown — HIPAA-grade, used in surgical workflows.",
  },
  {
    years: "CTO",
    role: "Chief Technology Officer",
    org: "Crankfrog",
    blurb:
      "Product and platform leadership at an early-stage technology company.",
  },
  {
    years: "Senior architecture / IT leadership",
    role: "Enterprise platforms",
    org: "Accenture · Warburg Pincus · Aksia · Cerberus Capital Management",
    blurb:
      "Delivered investment reporting, data infrastructure, and secure enterprise platforms inside hedge fund and private equity environments. Built and managed globally distributed teams across the US, Canada, APAC, and LATAM.",
  },
];

const values = [
  {
    title: "Business first, tech second",
    body: "Every engineering decision is a business decision. We lead with outcomes — hours saved, revenue unlocked, risk reduced.",
  },
  {
    title: "Senior operators only",
    body: "You don't get a junior consultant in a fancy hoodie. You get people who've run platforms, shipped products, and carried a pager.",
  },
  {
    title: "Explicit trade-offs",
    body: "We write down what we're choosing and why. No mysticism, no hand-waving, no \"it depends.\"",
  },
  {
    title: "Ship. Measure. Iterate.",
    body: "Nothing we build sits in a deck. If we can't put it in production and measure its impact, we don't start.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title={
          <>
            Founded by an <span className="text-gradient">operator</span> — not a slide deck.
          </>
        }
        subtitle={
          <>
            Raphi Dambournet has spent 20+ years building and scaling enterprise
            software platforms — from founder-led startups to institutions
            managing hundreds of billions of dollars. MakeItGo is the engineering
            shop he&rsquo;d have wanted to hire.
          </>
        }
      >
        <div className="glass grid gap-6 rounded-2xl p-6 md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              {site.founder.name}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
              {site.founder.title} · MakeItGo, LLC
            </p>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Technology executive and hands-on engineer. Former Director of IT
              at Unison Energy, co-founder of Safeguard Privacy, and CTO at
              Surgipal and Crankfrog. Earlier, senior architecture and IT
              leadership roles at Accenture, Warburg Pincus, Aksia, and Cerberus
              Capital Management.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Strong advocate for AI adoption — actively deploying OpenAI,
              Claude, Azure OpenAI, document intelligence, agents, MCP, and
              localized LLMs in production environments. Industries of depth:
              financial services, healthcare, renewable energy.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-glow" />
                {site.founder.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Languages className="h-4 w-4 text-amber-glow" />
                English · French · Spanish
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-amber-glow" />
                Wharton CTO Program · BS, Hobart College
              </span>
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-amber-glow" />
                Globally distributed teams (US · CA · APAC · LATAM)
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Track record"
        title={
          <>
            Twenty years of <span className="text-gradient">shipped work</span>.
          </>
        }
      >
        <ol className="relative space-y-6 border-l border-white/10 pl-6">
          {timeline.map((t) => (
            <li key={t.org} className="relative">
              <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-amber-glow shadow-[0_0_12px_rgba(255,176,32,0.8)]" />
              <div className="glass rounded-2xl p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
                  {t.years}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {t.role} · <span className="text-slate-300">{t.org}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {t.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Operating principles"
        title={
          <>
            How we <span className="text-gradient">actually work</span>.
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
