import {
  Target,
  Building2,
  ShieldCheck,
  GitBranch,
  Zap,
  LineChart,
} from "lucide-react";

const items = [
  {
    icon: Target,
    title: "We implement — we don't just advise",
    body: "Decks don't ship. We pair strategy with engineering and put working systems in production.",
  },
  {
    icon: Building2,
    title: "Startup grit, enterprise depth",
    body: "We've done zero-to-one at founder-led companies and run platforms at firms managing hundreds of billions. Same team.",
  },
  {
    icon: ShieldCheck,
    title: "Security & compliance by default",
    body: "Financial services, healthcare (HIPAA), privacy frameworks, CMMC — we build like regulators are watching. Because they are.",
  },
  {
    icon: GitBranch,
    title: "Cloud-native, framework-agnostic",
    body: "Azure, AWS, GCP. OpenAI, Claude, Azure OpenAI, local models. We match the tech to the problem, not the other way around.",
  },
  {
    icon: Zap,
    title: "Weeks, not quarters",
    body: "Tight scope, honest timelines, fast iteration. You see value inside a sprint, not at the end of the fiscal year.",
  },
  {
    icon: LineChart,
    title: "Business-impact first",
    body: "Every engagement is measured in hours saved, errors reduced, and revenue unlocked. We don't chase novelty.",
  },
];

export default function ValueProps() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.title}
          className="glass glass-hover rounded-2xl p-5"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-glow/10 text-amber-glow ring-1 ring-inset ring-amber-glow/25">
            <it.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-base font-semibold text-white">
            {it.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {it.body}
          </p>
        </div>
      ))}
    </div>
  );
}
