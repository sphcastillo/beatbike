# Beatbike Cycling — Project Context

## What this project is


## Core UX goals
- Crisp, responsive marketing layout
- Motion-enhanced UI (Framer Motion; GSAP for heavier interactions)
- Accessible navigation (desktop + mobile)
- Optional authentication via Clerk (show profile button when signed in)

## Stack (matches package.json)
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS v3 + tailwindcss-animate
- Framer Motion
- GSAP
- Clerk (@clerk/nextjs)
- Headless UI
- Icons: Heroicons, lucide-react, react-icons
- Embla carousel


## Project structure expectations
- `/app`: routes, layouts, metadata
- `/components`: UI building blocks (Header, Footer, Banner, modals, carousels)
- `/data`: static data (instructors, explore benefits, etc.)
- `/images` or `/public`: images used via next/image
- `/typings` or `/types`: shared TypeScript interfaces


## Patterns already used (based on recent work)

## Known pitfalls / recurring issues

## Non-goals (unless explicitly requested)