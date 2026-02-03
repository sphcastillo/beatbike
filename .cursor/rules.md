# Cursor Rules — Beatbike Cycling

## Stack
- Next.js (App Router)
- React 18 + TypeScript
- Tailwind CSS (v3) + tailwindcss-animate
- Framer Motion for component/entrance UI animations
- GSAP for scroll/timeline animations when needed
- Headless UI for menus/dialogs
- Heroicons / lucide-react / react-icons for icons
- Clerk for authentication (@clerk/nextjs)
- Embla Carousel (embla-carousel-react + autoplay)

## General Behavior
- Prefer minimal diffs.
- Do not refactor unrelated files.
- If you need to touch more than 2 files, explain why first and list the files.
- Keep code readable over clever abstractions.

## Next.js / App Router Rules
- Server components by default. Add `"use client"` only when a component uses:
  - useState/useEffect/useLayoutEffect
  - event handlers (onClick, onSubmit)
  - Framer Motion / GSAP
  - Clerk client UI components like <UserButton />
- Keep route files in `/app` and reusable UI in `/components`.

## Styling Rules
- Tailwind utilities first. Avoid inline styles unless absolutely necessary.
- Use `clsx` and `tailwind-merge` for conditional classes.
- Match existing typography and spacing patterns (don’t introduce new random spacing scales).
- Mobile-first responsiveness. Test common breakpoints: sm, md, lg.

## Animation Rules
- Use Framer Motion for simple reveal/hover transitions.
- Use GSAP for scroll-linked or complex timelines.
- Avoid layout thrash: prefer transforms (translate/scale/opacity) over animating layout props.
- Respect reduced motion when feasible (optional, don’t overbuild).

## Clerk/Auth Rules
- Assume ClerkProvider exists in `app/layout.tsx`.
- Prefer Clerk primitives:
  - SignedIn / SignedOut
  - UserButton
  - SignIn / SignUp
- Do not break routing/auth pages.
- If profile UI is missing, check client/server boundary and import paths first.

## TypeScript Rules
- Keep shared types in ONE place (e.g. `/typings` or `/types`).
- Do not duplicate interfaces across components.
- If a type mismatch occurs, consolidate to the shared type and update imports.