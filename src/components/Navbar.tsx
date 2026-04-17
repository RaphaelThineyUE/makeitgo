"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      data-active={active || undefined}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        active && "text-white",
                      )}
                    >
                      <span className="relative">
                        {item.label}
                        {active && (
                          <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-amber-gradient" />
                        )}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="group">
            <Link href="/contact">
              Start a project
              <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[84%] sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-6 flex flex-col">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-md px-2 py-3 text-base",
                        active ? "text-amber-glow" : "text-slate-200",
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}
              <SheetClose asChild>
                <Button asChild className="mt-4 group">
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="outline" className="mt-2">
                  <a href={site.bookingUrl} target="_blank" rel="noreferrer">
                    Book a call
                  </a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
