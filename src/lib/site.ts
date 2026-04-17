// Central site configuration. Update values here (or set NEXT_PUBLIC_* env vars) to re-brand.

export const site = {
  name: "MakeItGo",
  legal: "MakeItGo, LLC",
  tagline: "We make IT go.",
  description:
    "MakeItGo helps companies actually implement AI — we analyze your processes, design automation strategy, and ship working systems. Not just ChatGPT licenses.",
  url: "https://makeitgo.ai",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "raphael.dambournet@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+16465121378",
  phoneDisplay: "(646) 512-1378",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "https://calendly.com/raphi-makeitgo/intro",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xyklwjdp",
  linkedin: "https://linkedin.com/in/raphaeldambournet",
  founder: {
    name: "Raphael Dambournet",
    short: "Raphi",
    title: "Founder & Principal",
    location: "Miami, FL",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
