# UI-UX Skill — Katana Intelligence

## Purpose
This skill guides all UI/UX decisions for the Katana Intelligence website. It should be consulted before making any visual or structural changes.

## Design Principles
1. **Surgical Minimalism** — Every element must earn its place. No decorative clutter.
2. **Premium Feel** — Apple-quality polish. Generous whitespace, smooth animations, refined typography.
3. **Confidence** — Bold headlines, clear CTAs, no hesitation in the copy.
4. **Dark & Clean** — Dark backgrounds with light text. Cyan accents sparingly.
5. **Motion with Purpose** — Animations guide attention, never distract. Apple-like easing always.

## Layout Rules
- Sections: `py-32` vertical padding, `container mx-auto px-6`
- Cards: `rounded-[2rem]`, `bg-secondary`, `p-10`, hover state with opacity shift
- Max content width: `max-w-5xl` for text, `max-w-6xl` for visual elements
- Grid: Use CSS Grid with `gap-6` or `gap-8`
- Mobile-first responsive: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Typography Rules
- Hero headings: `text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight`
- Section headings: `text-3xl md:text-5xl font-semibold tracking-tight`
- Body text: `text-lg` or `text-xl`, `text-foreground/60`, `leading-relaxed`
- Labels/tags: `text-sm font-medium tracking-tight`

## Color Usage
- Background: `bg-background` (charcoal/black)
- Text: `text-foreground` for headings, `text-foreground/60` for body
- Muted text: `text-foreground/40` or `text-foreground/30`
- Cards: `bg-secondary` with `hover:bg-secondary/80`
- CTA buttons: `bg-primary text-primary-invert`
- Alternating sections: `bg-background` and `bg-secondary/30`

## Animation Patterns
- Entry: `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- Stagger: `delay: index * 0.1` (0.1-0.2s between items)
- Easing: `ease: [0.16, 1, 0.3, 1]` (Apple cubic-bezier)
- Duration: 0.8s for content, 1.2s for large elements
- Always use `viewport={{ once: true }}` for scroll animations

## Component Patterns
- Buttons: Always use `<Button>` from `ui/Button.tsx`
- External links: `<Link href="..." target="_blank"><Button>...</Button></Link>`
- Icons: Lucide React, size 20-24, inside rounded containers
- Section structure: heading block → content grid → optional CTA

## Copy Guidelines (Agency Positioning)
- Katana is an AI automation AGENCY (not a SaaS product)
- Services: Admin automation, lead generation, website building
- The agency owner (user) personally handles client work
- Tone: "We build systems that work while you sleep"
- Avoid: jargon overload, vague promises, corporate-speak
- Use: specific outcomes, confidence, surgical metaphors (katana = precision)

## Self-Improvement Protocol
After each interaction:
1. Note any new patterns or preferences the user expressed
2. Update the memory file at the project memory directory
3. If a design decision was made, add it to the relevant section above
4. Track what works and what got rejected
