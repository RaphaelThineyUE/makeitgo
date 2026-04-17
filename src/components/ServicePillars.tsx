"use client";

import { motion } from "framer-motion";
import { Search, Compass, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyze",
    body: "We embed with your team, map real workflows, find the friction, and identify where AI and automation move the needle — measured in hours saved, errors avoided, and revenue unlocked.",
    bullets: ["Process discovery", "Data & systems audit", "ROI modeling"],
  },
  {
    icon: Compass,
    step: "02",
    title: "Strategize",
    body: "We design a phased plan: what to automate first, what to leave alone, what platform to build on, and how to roll it out without blowing up your org. No hype. Real trade-offs.",
    bullets: [
      "Solution architecture",
      "Buy vs. build vs. integrate",
      "Change-management plan",
    ],
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implement",
    body: "We ship. Agents, document intelligence, MCP-based integrations, LLM pipelines, dashboards — production-grade, observable, secure. Then we hand it over clean.",
    bullets: [
      "Agents, RAG, MCP tooling",
      "Azure OpenAI / Anthropic / localized LLMs",
      "Handover + enablement",
    ],
  },
];

export default function ServicePillars() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <Card className="group relative h-full overflow-hidden">
            <CardContent className="p-6">
              <div className="absolute right-4 top-4 font-mono text-[11px] tracking-[0.18em] text-slate-600">
                {s.step}
              </div>
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-glow/10 text-amber-glow ring-1 ring-inset ring-amber-glow/25">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.body}
              </p>
              <ul className="mt-5 space-y-1.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 font-mono text-[12px] text-slate-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-amber-glow" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="accent-line mt-6 opacity-0 transition-opacity group-hover:opacity-100" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
