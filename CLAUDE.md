# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Block Sports — a gym website for a boxing/strength training club in Vilnius, Lithuania.

## Commands

Run from the project root (`block_sports/my-app/`):

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

- **Framework**: Next.js 16 with App Router (`app/` directory)
- **Components**: Server Components by default; add `"use client"` for interactivity
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`. Theme tokens defined as CSS variables in `app/globals.css` using the `@theme inline` block. Dark mode via `prefers-color-scheme`.
- **Path alias**: `@/*` → project root (e.g. `@/app/components/Foo`)
- **Fonts**: Loaded via `next/font/google` in `app/layout.tsx`; exposed as CSS variables

## Key design tokens (from Figma)

- Background: `#fefcf8`
- Primary/nav: `#354c41` (dark green)
- Accent/CTA: `#d36560` (coral red)
- Heading font: `Crimson Pro` (black weight, 70px desktop)
- Body font: `Inter` (medium/regular, 16px)
