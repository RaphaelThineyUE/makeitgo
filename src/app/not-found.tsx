import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <Badge>404 · page not found</Badge>
      <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
        That one didn&rsquo;t <span className="text-gradient">make it go</span>.
      </h1>
      <p className="mt-4 text-slate-400">
        The page you were looking for doesn&rsquo;t exist. Head home or tell us what
        you were after.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg" className="group">
          <Link href="/">
            Back home
            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </section>
  );
}
