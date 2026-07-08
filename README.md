# Personal Portfolio

A modern personal portfolio website built with Next.js App Router and Tailwind CSS.

## Features

- **Hero** — Introduction with availability badge, CTA buttons, and stats
- **About Me** — Bio, tech stack, and expertise areas
- **Projects** — Responsive grid of project cards with tags and links
- **Contact** — Contact form and social links
- Sticky navigation with mobile menu
- Dark theme with indigo accent colors

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. **Personal info** — Update name, bio, and stats in `src/components/Hero.tsx` and `src/components/About.tsx`
2. **Projects** — Edit the project list in `src/data/projects.ts`
3. **Contact** — Update email and social links in `src/components/Contact.tsx` and `src/components/Footer.tsx`
4. **Metadata** — Change site title and description in `src/app/layout.tsx`

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Deploy

Deploy easily on [Vercel](https://vercel.com/new):

```bash
npm run build
```
