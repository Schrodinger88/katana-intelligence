# Social Proof & Testimonials - How to Update

Since you're just starting out, the stats and testimonials are placeholder values. Update them as you grow.

---

## Social Proof Stats

**File:** `app/components/sections/SocialProof.tsx`

The stats array at the top of the file controls the numbers displayed:

```ts
const stats = [
    { value: "20+", label: "Businesses automated" },
    { value: "500+", label: "Hours saved monthly" },
    { value: "6+", label: "Industries served" },
    { value: "< 14", label: "Days to deploy" },
];
```

**How to update:**
- Change the `value` and `label` strings as your real numbers grow
- Keep it to 4 stats max for clean layout
- Use real numbers once you have them (e.g., "48+" instead of "20+")
- Good stat ideas as you grow: YouTube views, community size, client engagements, industries served, hours saved

**When to update:**
- After your first 5 clients, replace with real numbers
- Update quarterly as you hit milestones

---

## Testimonials

**File:** `app/components/sections/Testimonials.tsx`

The testimonials array controls the 3 testimonial cards:

```ts
const testimonials = [
    {
        quote: "The actual testimonial text...",
        name: "Sarah M.",
        role: "Operations Director",
        company: "Construction Firm",
    },
    // ... more testimonials
];
```

**How to update:**
1. After each client engagement, ask for a short testimonial (2-3 sentences)
2. Replace the placeholder testimonials one by one with real ones
3. Use first name + last initial if they prefer anonymity, or full name + company if they agree
4. Focus on testimonials that mention **specific results** (e.g., "saved 20 hours a week", "saw results in 2 weeks")

**What makes a great testimonial:**
- Mentions a specific pain point that was solved
- Includes a measurable result or timeframe
- Names the person's role and industry (builds trust)
- Sounds natural, not salesy

**Template to send clients:**
> "Hey [name], would you mind sharing a quick 2-3 sentence review of working with us? Something about what problem we solved and what changed. Totally fine to keep it casual."

---

## What to Do Before You Have Real Clients

The current placeholders are realistic but generic. You have two options:

1. **Keep the placeholders** - They look professional and set expectations. Just replace them as soon as you get real testimonials.

2. **Remove the sections temporarily** - In `app/page.tsx`, comment out `<Testimonials />` and optionally `<SocialProof />` until you have real data. The site still works great without them.

To remove temporarily, edit `app/page.tsx`:
```tsx
{/* <Testimonials /> */}
{/* <SocialProof /> */}
```

---

## Pro Tip: Build Social Proof Fast

Even without paying clients, you can build proof:
- Offer 2-3 free pilot projects to businesses you know in exchange for a testimonial
- Document results with screenshots/metrics
- Add case study links once you have them
- Track hours saved, response times improved, etc. for your stats
