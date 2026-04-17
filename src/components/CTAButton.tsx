import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  icon?: boolean;
  className?: string;
  href: string;
};

type Props = CommonProps & ({ external?: false } | { external: true });

export default function CTAButton({
  children,
  variant = "default",
  size = "default",
  icon = true,
  className,
  href,
  ...rest
}: Props) {
  const external = "external" in rest && rest.external;
  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );
  return (
    <Button asChild variant={variant} size={size} className={cn("group", className)}>
      {external ? (
        <a href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href}>{content}</Link>
      )}
    </Button>
  );
}
