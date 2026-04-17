import type { Metadata } from "next";
import Section from "@/components/Section";
import ServicePillars from "@/components/ServicePillars";
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How MakeItGo implements AI: analyze, strategize, implement. Engagement models, deliverables, and technologies we work with.",
};

const engagements = [
  {
    name: "AI Readiness Sprint",
    length: "2 weeks · fixed fee",
    summary:
      "For leadership teams who need a clear-eyed view of where AI actually pays off in their business.",
    includes: [
      "Workflow discovery across 2–3 departments",
      "Data & systems inventory",
      "Prioritized list of 5–10 automation opportunities",
      "ROI estimates and sequencing plan",
      "Executive readout",
    ],
  },
  {
    name: "Pilot Build",
    length: "4–8 weeks · milestone-based",
    summary:
      "We take the top opportunity and ship a production-grade pilot. Not a demo. A thing that runs.",
    includes: [
      "Solution architecture & technical design",
      "Agent / RAG / automation implementation",
      "Integration with your systems (Azure, AWS, M365, Salesforce, Supabase, etc.)",
      "Observability, logging, and evaluation harness",
      "Rollout plan + team enablement",
    ],
  },
  {
    name: "Embedded CTO / Platform Partner",
    length: "3–12 months · retainer",
    summary:
      "Ongoing implementation partner. We become the AI engineering arm of your company until your team can take it home.",
    includes: [
      "Roadmap ownership",
      "Senior engineering capacity",
      "Vendor evaluation & negotiation",
      "Hiring & team ramp support",
      "Compliance and security posture",
    ],
  },
];

const stack = [
  { group: "LLMs & AI", items: ["OpenAI", "Anthropic (Claude)", "Azure OpenAI", "Local models"] },
  { group: "Frameworks", items: ["Agents & MCP", "RAG pipelines", "Document intelligence", "Evaluation harnesses"] },
  { group: "Cloud", items: ["Azure (primary)", "AWS", "GCP"] },
  { group: "Data", items: ["Supabase / Postgres", "Azure SQL", "Cosmos DB", "Microsoft Fabric", "Power BI"] },
  { group: "Engineering", items: ["TypeScript / Next.js", "Python", "C# / .NET", "Docker", "Terraform / Bicep"] },
  { group: "Security", items: ["HIPAA", "Privacy frameworks", "CMMC", "Okta / Azure AD"] },
];

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title={
          <>
            We make <span className="text-gradient">IT go</span> — from discovery to production.
          </>
        }
        subtitle="Three ways to work with us. All engagements are senior-led, fixed-scope, and measured in business impact."
      >
        <ServicePillars />
      </Section>

      <Section
        eyebrow="Engagement models"
        title={
          <>
            Pick the <span className="text-gradient">depth</span> that fits the moment.
          </>
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          {engagements.map((e) => (
            <div
              key={e.name}
              className="glass glass-hover flex flex-col rounded-2xl p-6"
            >
              <h3 className="font-display text-xl font-semibold text-white">
                {e.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
                {e.length}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {e.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {e.includes.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-glow" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Stack"
        title={
          <>
            Opinionated, not <span className="text-gradient">dogmatic</span>.
          </>
        }
        subtitle="We pick the right tool for the job. These are the ones we reach for most."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {stack.map((s) => (
            <div key={s.group} className="glass rounded-2xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
                {s.group}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-slate-300"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
