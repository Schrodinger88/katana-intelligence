# Katana Intelligence - Project Guide

## Project Overview
AI automation agency website built with Next.js 16, React 19, Framer Motion, Tailwind CSS v4, TypeScript.

## Brand Identity
- **Company**: Katana Intelligence - AI automation agency
- **Services**: Administrative automation, lead generation, website building for businesses
- **Tone**: Premium, surgical precision, confident but not arrogant. Think Apple meets enterprise AI.
- **Target**: Companies wanting to automate admin work, get leads, and improve their web presence

## Design System
- **Colors**: Charcoal (#3b413c) background, Light Cyan (#daf0ee) primary, Ash Grey (#9db5b2) secondary
- **Dark mode**: Black background, white foreground
- **Typography**: Inter font, semibold/bold weights, tight tracking
- **Animations**: Apple-like easing `[0.16, 1, 0.3, 1]`, Framer Motion throughout
- **Components**: Glass morphism (`.glass`), rounded-[2rem] cards, rounded-full buttons
- **Style**: Minimalist, lots of whitespace, premium feel

## Architecture
- `app/page.tsx` - Home page composing all sections
- `app/components/sections/` - Page sections (Hero, Services, Process, etc.)
- `app/components/ui/` - Reusable UI components (Button, etc.)
- `app/components/` - Layout components (Navbar, Footer)
- `lib/utils.ts` - Utility functions (cn helper)
- `app/globals.css` - Design tokens and custom utilities

## Conventions
- All interactive components use `"use client"` directive
- Animations use Framer Motion with `whileInView` for scroll triggers
- Consistent spacing: `py-32` for sections, `px-6` for container padding
- Cards use `rounded-[2rem]` with `bg-secondary`
- Buttons use the reusable `<Button>` component from `ui/Button.tsx`
- Links to external services wrap `<Button>` with `<Link>`

## Self-Improvement
- After each session, update `/Users/erwan/.claude/projects/-Users-erwan-Coding-katana-intelligence/memory/ui-ux-patterns.md` with new patterns learned
- Follow the skill file at `.claude/ui-ux-skill.md` for design decisions
