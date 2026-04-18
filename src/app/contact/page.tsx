import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { Calendar, Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Hire an AI Implementation Consultant",
  description:
    "Ready to implement AI in your business? Book a 30-minute intro or send a brief. We'll tell you whether we can help and how fast.",
  keywords: [
    "hire AI consultant",
    "contact AI implementation consultant",
    "AI consulting inquiry",
    "book AI consultant",
  ],
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title={
        <>
          Let&rsquo;s <span className="text-gradient">talk</span>.
        </>
      }
      subtitle="Thirty minutes, no slides. The four fastest ways to reach us are below — pick whichever suits."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover group flex items-start gap-4 rounded-2xl p-5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-glow/10 text-amber-glow ring-1 ring-inset ring-amber-glow/25">
              <Calendar className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="font-display text-base font-semibold text-white">
                Book a 30-minute intro
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Pick a time directly on the calendar. No forms.
              </p>
              <p className="mt-2 font-mono text-[11px] text-slate-500">
                {site.bookingUrl.replace(/^https?:\/\//, "")}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-glow" />
          </a>

          <a
            href={`mailto:${site.email}`}
            className="glass glass-hover group flex items-start gap-4 rounded-2xl p-5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-glow/10 text-amber-glow ring-1 ring-inset ring-amber-glow/25">
              <Mail className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="font-display text-base font-semibold text-white">
                Email
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Best for detailed briefs, proposals, and long-form context.
              </p>
              <p className="mt-2 font-mono text-[11px] text-slate-500">
                {site.email}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-glow" />
          </a>

          <a
            href={`tel:${site.phone}`}
            className="glass glass-hover group flex items-start gap-4 rounded-2xl p-5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-glow/10 text-amber-glow ring-1 ring-inset ring-amber-glow/25">
              <Phone className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="font-display text-base font-semibold text-white">
                Phone
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Miami, FL — US Eastern time. Leave a message if we don&rsquo;t pick up.
              </p>
              <p className="mt-2 font-mono text-[11px] text-slate-500">
                {site.phoneDisplay}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-glow" />
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover group flex items-start gap-4 rounded-2xl p-5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-glow/10 text-amber-glow ring-1 ring-inset ring-amber-glow/25">
              <Linkedin className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="font-display text-base font-semibold text-white">
                LinkedIn
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Full career history, endorsements, and warm intros.
              </p>
              <p className="mt-2 font-mono text-[11px] text-slate-500">
                linkedin.com/in/raphaeldambournet
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-glow" />
          </a>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
