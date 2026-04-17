# MakeItGo, LLC — Website

The front door for **MakeItGo, LLC**. We help companies actually implement AI.

Multi-page Next.js 14 (App Router) site — dark theme with amber neon accents, Tailwind, **shadcn/ui**, Radix primitives, Framer Motion, TypeScript. Fast, responsive, SEO-ready.

---

## Quick start

```bash
cd site
npm install
cp .env.example .env.local   # fill in Formspree ID and Calendly URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Requires Node **18.17+** (20+ recommended).

---

## Environment variables

All are `NEXT_PUBLIC_*` — they're read in the browser, so they are not secrets.

| Var | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for the contact form. If unset, the form falls back to a `mailto:` flow. | *(empty)* |
| `NEXT_PUBLIC_BOOKING_URL` | Calendly / Cal.com / SavvyCal booking URL. | `https://calendly.com/raphi-makeitgo/intro` (stub) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown on the site. | `raphael.dambournet@gmail.com` |
| `NEXT_PUBLIC_CONTACT_PHONE` | Phone number (E.164 format, for `tel:` links). | `+16465121378` |

Update the stubbed Calendly URL **before launch**.

---

## Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io).
2. Copy the form ID (the bit after `/f/` — e.g. `xyklwjdp`).
3. Set `NEXT_PUBLIC_FORMSPREE_ID=<id>` in your hosting provider's env settings.

The form uses a standard `POST` to `https://formspree.io/f/<id>` via `fetch`. Success and error states are rendered inline (`src/components/ContactForm.tsx`). No backend required.

---

## Project structure

```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata, Toaster
│   │   ├── page.tsx            # Home
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.txt
│   │   └── globals.css         # Tailwind + shadcn CSS vars
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitives (button, card, input, etc.)
│   │   ├── Navbar.tsx          # NavigationMenu + Sheet mobile drawer
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx            # Home hero w/ code card
│   │   ├── BackgroundFX.tsx    # Global dark backdrop + glow orbs
│   │   ├── Section.tsx         # Standard page section wrapper (Badge eyebrow)
│   │   ├── ServicePillars.tsx  # Analyze / Strategize / Implement (Card)
│   │   ├── ValueProps.tsx      # (Card)
│   │   ├── ClientMarquee.tsx
│   │   ├── CTASection.tsx      # Button + Badge
│   │   ├── CTAButton.tsx       # Thin Button wrapper
│   │   ├── ContactForm.tsx     # Input/Textarea/Label + Toaster
│   │   └── Logo.tsx
│   ├── hooks/
│   │   └── use-toast.ts
│   └── lib/
│       ├── site.ts             # Central config (name, email, URLs, nav)
│       └── utils.ts            # cn() helper for shadcn
├── components.json             # shadcn/ui config
├── public/
│   └── favicon.svg
├── tailwind.config.ts          # Amber/ink tokens + shadcn CSS-var tokens
├── next.config.mjs
├── tsconfig.json
└── package.json
```

Edit `src/lib/site.ts` and `src/components/ClientMarquee.tsx` to update the brand-facing content in one place.

---

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm start          # run built server
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

---

## Deploy

### Vercel (easiest)

1. Push to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Set the env vars from `.env.example` in the Vercel project settings.
4. Done — every push to `main` redeploys.

### Azure Static Web Apps

1. Push to GitHub.
2. Create a Static Web App in Azure, point it at the repo, and set **App location** to `site`, **Output location** to `.next`.
3. Azure provisions a GitHub Actions workflow that builds with the Next.js adapter.
4. Add the `NEXT_PUBLIC_*` vars in the Azure portal under **Configuration** → **Application settings**.

### Azure App Service (Node)

```bash
az webapp up --runtime NODE:20-lts --sku B1 --name makeitgo-site
```

Set env vars with `az webapp config appsettings set` or via the portal.

### Static export (S3 / Cloudflare Pages / etc.)

This site doesn't use Server Actions or ISR, so a fully static export works. Add `output: "export"` to `next.config.mjs` and run `npm run build` — the static site lands in `./out`.

---

## Design system

- **Colors:** two parallel systems in `tailwind.config.ts`:
  - **shadcn CSS-variable tokens** (`background`, `foreground`, `primary`, `card`, etc.) — values set in `globals.css` `:root` / `.dark`. `--primary` is mapped to amber `#ffb020`.
  - **Brand Tailwind tokens** (`ink.*`, `amber.*`) — kept alongside for custom components and gradient utilities.
- **Typography:** Space Grotesk (display), Inter (body), JetBrains Mono (code/labels) — loaded via `next/font` in `layout.tsx`.
- **Accents:** amber gradient (`bg-amber-gradient`), amber glow shadow (`shadow-glow`, `shadow-glow-sm`), radial spotlight (`.spotlight`), glass cards (`.glass` / `.glass-hover`).
- **Motion:** Framer Motion for hero + section fade-ups; CSS keyframes for floating glow orbs.

## shadcn/ui

Config lives in `components.json` (style: `new-york`, base color: `zinc`, CSS variables enabled). Components in `src/components/ui/` are checked in and fully editable — no external package to update.

Add more components with the CLI (interactive prompts, so run in your own shell):

```bash
npx shadcn@latest add dialog dropdown-menu tabs accordion
```

The CLI will drop the new component files into `src/components/ui/` using the paths in `components.json`.

To re-theme, change the amber tokens in `tailwind.config.ts`, the gradient stops in `globals.css` (`.text-gradient`, `.shimmer`, `.bg-amber-gradient`), and the HSL values for `--primary`, `--ring`, `--accent` in `globals.css`.

---

## Content updates

| What to change | Where |
|---|---|
| Nav items | `src/lib/site.ts` → `nav` |
| Email / phone / booking URL | `src/lib/site.ts` (or env vars) |
| Past clients / marquee | `src/components/ClientMarquee.tsx` |
| Case studies | `src/app/case-studies/page.tsx` → `studies` |
| Timeline / bio | `src/app/about/page.tsx` → `timeline` |
| Engagement models & stack | `src/app/services/page.tsx` → `engagements`, `stack` |

---

## License

© MakeItGo, LLC. All rights reserved.
