import type { Metadata } from "next";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements from MakeItGo's founder across renewable energy, healthcare, and financial services.",
};

const studies = [
  {
    tag: "Renewable Energy · Industrial AI",
    company: "Unison Energy",
    role: "Director of Information Technology (2023–2025)",
    context:
      "Distributed energy operator running on-site generation, storage, and microgrid assets for enterprise customers. Needed a modern technology foundation to keep up with growth and the operational complexity of fleet-wide data.",
    work: [
      "Modernized the IT and engineering function and brought platform work in-house.",
      "Designed IoT telemetry pipelines for distributed generation and storage assets.",
      "Stood up applied ML workflows for predictive operations and fleet analytics.",
      "Introduced AI-driven tooling for internal operations and customer-facing reporting.",
      "Established security, governance, and vendor-management practices.",
    ],
    outcome:
      "Rebuilt the technology backbone of the company and positioned the org to operate AI-driven industrial workflows at scale.",
  },
  {
    tag: "Healthcare · Clinical Mobile",
    company: "Surgipal — deployed at MedStar Georgetown University Hospital",
    role: "CTO & Founder",
    context:
      "Clinical workflows in surgical environments were still paper- and memory-driven. Surgipal set out to build a mobile-first platform surgeons could actually use in the room.",
    work: [
      "Architected a HIPAA-aligned mobile + backend platform from the ground up.",
      "Partnered directly with clinicians at an academic medical center to validate the workflow.",
      "Deployed into live use at MedStar Georgetown University Hospital.",
      "Designed the security posture — authentication, data handling, and audit trail — to withstand clinical scrutiny.",
    ],
    outcome:
      "Moved surgical workflows from paper into a clinician-grade mobile experience, proven in a top academic hospital.",
  },
  {
    tag: "Financial Services · Investment Platforms",
    company: "Aksia · Warburg Pincus · Cerberus Capital Management",
    role: "Senior Architecture / IT Leadership",
    context:
      "Senior roles across hedge fund and private-equity firms managing institutional capital — where a broken report or a compliance lapse has real consequences.",
    work: [
      "Delivered investment reporting platforms, data pipelines, and analytics infrastructure.",
      "Led enterprise .NET and Azure architecture across reporting, operations, and investor tooling.",
      "Built and managed globally distributed engineering teams (US, Canada, APAC, LATAM).",
      "Introduced DevOps and CI/CD practices into traditional finance IT environments.",
      "Partnered with compliance and security functions on governance, access, and audit.",
    ],
    outcome:
      "Modernized reporting and data platforms at some of the largest allocators and alternative asset managers in the market.",
  },
  {
    tag: "Privacy SaaS · Cloud-Native",
    company: "Safeguard Privacy",
    role: "Co-founder",
    context:
      "Privacy compliance was stuck in spreadsheets and slide decks. Safeguard Privacy aimed to turn it into a real SaaS workflow for legal and security teams.",
    work: [
      "Co-founded the company and built the initial Azure-native SaaS platform.",
      "Set up the engineering org, tech stack, and delivery process.",
      "Partnered with privacy counsel to translate frameworks into product workflows.",
    ],
    outcome:
      "Built a working, cloud-native SaaS product adopted by privacy and security teams in production use.",
  },
  {
    tag: "Enterprise Consulting",
    company: "Accenture",
    role: "Enterprise architecture & delivery",
    context:
      "Large-program enterprise technology work across regulated industries.",
    work: [
      "Architecture and delivery across complex .NET and Azure programs.",
      "Cross-functional leadership with business, security, and compliance stakeholders.",
    ],
    outcome:
      "Shipped production systems inside large, highly regulated enterprises — and learned how to navigate them.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section
        eyebrow="Case studies"
        title={
          <>
            Regulated industries. <span className="text-gradient">Real production systems.</span>
          </>
        }
        subtitle="A partial record of the environments where we&rsquo;ve built — finance, healthcare, energy, and SaaS. Engagements under NDA are not listed here."
      >
        <div className="space-y-8">
          {studies.map((s) => (
            <article
              key={s.company}
              className="glass glass-hover rounded-3xl p-6 md:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
                  {s.tag}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {s.role}
                </p>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                {s.company}
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-[1.3fr_1fr]">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Context
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {s.context}
                  </p>

                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    What we did
                  </p>
                  <ul className="mt-2 space-y-2">
                    {s.work.map((w) => (
                      <li
                        key={w}
                        className="flex items-start gap-2 text-sm leading-relaxed text-slate-300"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-amber-glow" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="glass rounded-2xl border-amber-glow/25 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow">
                      Outcome
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200">
                      {s.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
