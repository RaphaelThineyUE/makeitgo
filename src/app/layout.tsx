import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI implementation consultant",
    "hire AI consultant for business",
    "AI automation consulting",
    "implement AI in the workplace",
    "AI consultant for small business",
    "AI process automation consultant",
    "enterprise AI implementation services",
    "AI strategy and implementation",
    "automate business workflows AI",
    "fractional CTO AI automation",
    "AI consulting finance healthcare",
    "workplace automation consultant",
    "AI implementation North America",
    "Azure OpenAI consultant",
    "AI agents MCP RAG",
  ],
  authors: [{ name: site.founder.name }],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legal,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/favicon.svg`,
      },
      description: site.description,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.founder.location,
        addressCountry: "US",
      },
      areaServed: ["US", "CA"],
      sameAs: [site.linkedin],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "sales",
        areaServed: ["US", "CA"],
        availableLanguage: ["English", "French", "Spanish"],
      },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#founder`,
      name: site.founder.name,
      jobTitle: site.founder.title,
      worksFor: { "@id": `${site.url}/#organization` },
      url: site.linkedin,
      sameAs: [site.linkedin],
      knowsAbout: [
        "Artificial Intelligence",
        "AI Implementation",
        "Business Process Automation",
        "Enterprise Software",
        "Machine Learning",
        "Azure OpenAI",
        "LLMs",
        "RAG pipelines",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: site.legal,
      url: site.url,
      description:
        "Hands-on AI implementation consulting — from workflow analysis to production automation systems.",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: ["US", "CA"],
      serviceType: "AI Implementation Consulting",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Consulting Engagements",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Readiness Sprint",
              description:
                "2-week fixed-fee engagement: workflow discovery, data inventory, prioritized automation opportunities, ROI estimates, and executive readout.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pilot Build",
              description:
                "4–8 week milestone-based engagement: production-grade AI pilot — agents, RAG, or automation — integrated with your existing systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Embedded CTO / Platform Partner",
              description:
                "3–12 month retainer: ongoing AI engineering leadership, roadmap ownership, vendor evaluation, and team ramp support.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${space.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <BackgroundFX />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
