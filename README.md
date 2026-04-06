# Shanmuganarayanan — Portfolio (Next.js 15)

A modern, production-grade portfolio built with the latest Next.js 15 App Router, TypeScript, and TailwindCSS.

## Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 15 | App Router, SSR, metadata API |
| React 19 | UI components |
| TypeScript | Type safety |
| TailwindCSS 3 | Utility-first styling |
| Framer Motion | Animations (optional, installed) |
| Lucide React | Icons |

## Features

- ✅ Next.js 15 App Router
- ✅ Sticky scroll-aware Navbar with blur backdrop
- ✅ Typewriter hero animation (no library needed)
- ✅ Intersection Observer scroll reveals
- ✅ Animated skill progress bars
- ✅ Floating UI card stack in hero
- ✅ Hover-reveal project cards with accent top-bar
- ✅ Terminal-style work section
- ✅ Auto-scrolling tech marquee strip
- ✅ Click-to-copy email in contact
- ✅ Mobile responsive + hamburger menu
- ✅ Custom scrollbar + text selection color
- ✅ Full SEO metadata

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
http://localhost:3000
```

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo on vercel.com for auto-deploys
```

## Customisation

All your personal data is in one place:

```
lib/data.ts  ← Edit name, projects, skills, links here
```

Update these fields:
- `personalInfo.email` → your real email
- `personalInfo.github` → your GitHub URL
- `personalInfo.linkedin` → your LinkedIn URL
- `projects` → add/edit your projects
- `work` → your builds/tools

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page assembly
│   └── globals.css      # Global styles + animations
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero + typewriter + floating cards
│   ├── TechStrip.tsx     # Auto-scrolling marquee
│   ├── Skills.tsx        # Skill tags + progress bars
│   ├── Projects.tsx      # Project cards grid
│   ├── Work.tsx          # Builds + terminal block
│   ├── Contact.tsx       # Contact links + copy email
│   └── Footer.tsx        # Footer
├── lib/
│   ├── data.ts           # ← All your content here
│   └── utils.ts          # cn() utility
├── tailwind.config.js
├── tsconfig.json
└── next.config.mjs
```
