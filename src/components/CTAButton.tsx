import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  icon?: boolean;
  className?: string;
};

type InternalProps = CommonProps & {
  href: string;
  external?: false;
};

type ExternalProps = CommonProps & {
  href: string;
  external: true;
};

type Props = InternalProps | ExternalProps;

const base =
  "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all";

const styles: Record<Variant, string> = {
  primary:
    "bg-amber-gradient text-ink-950 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5",
  ghost:
    "border border-white/15 text-white hover:border-amber-glow/40 hover:text-amber-glow",
};

export default function CTAButton(props: Props) {
  const {
    children,
    variant = "primary",
    icon = true,
    className = "",
    href,
  } = props;
  const cls = `${base} ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );
  if ("external" in props && props.external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
