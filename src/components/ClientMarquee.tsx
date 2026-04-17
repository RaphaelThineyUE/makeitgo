// Horizontal strip of logos / names — credibility at a glance.
// Uses wordmarks (not logos) to avoid trademark ambiguity.

const names = [
  "Accenture",
  "Warburg Pincus",
  "Cerberus Capital Management",
  "Aksia",
  "MedStar Georgetown",
  "Unison Energy",
  "Surgipal",
  "Safeguard Privacy",
  "Crankfrog",
];

export default function ClientMarquee() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900/50 py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
          Built systems for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {names.map((n) => (
            <span
              key={n}
              className="font-display text-sm font-medium text-slate-400 transition-colors hover:text-amber-glow md:text-base"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
