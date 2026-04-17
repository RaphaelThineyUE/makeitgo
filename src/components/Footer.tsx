import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24 border-t border-white/5 bg-ink-950/80 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            We help companies actually implement AI. Analysis, strategy, and
            working systems shipped to production — not just licenses.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-slate-300 hover:border-amber-glow/40 hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-slate-300 hover:border-amber-glow/40 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" /> {site.phoneDisplay}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-slate-300 hover:border-amber-glow/40 hover:text-white"
            >
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xs uppercase tracking-widest text-slate-500">
            Site
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-slate-300 hover:text-amber-glow"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs uppercase tracking-widest text-slate-500">
            Engage
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-amber-glow"
              >
                Book an intro call
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-slate-300 hover:text-amber-glow">
                Start a project
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-300 hover:text-amber-glow">
                How we work
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:px-8">
          <p>
            © {year} {site.legal}. All rights reserved.
          </p>
          <p className="font-mono">
            Built to MakeItGo, LLC. Based in {site.founder.location}. v{process.env.NEXT_PUBLIC_APP_VERSION ?? "0.1.0"}
          </p>
        </div>
      </div>
    </footer>
  );
}
